
import { badgeTemplates, insertIdsToHeaders, processAllLinks, processCodeBlocks, processHeaders, processJavascriptBlocks, processMigrationGuideLinks, processTripleQuoteCodeBlocks, updateMarkdownHtmlStyleTags, updateMarkdownImagePaths } from "./markdownToHtml";
import slugify from 'slugify';

const createTestHtml = () => {
  const originals = [];
  const expecteds = [];
  for (let first = 1; first < 4; first++) {
    originals.push('<h1>'+first+'</h1>')
    expecteds.push('<h1 id="'+first+'">' + first + ' ' + first + '</h1>')
    for (let second = 1; second < 4; second++) {
      const joinedSecond = [first, second].join('.');
      originals.push('<h2>' + joinedSecond + '</h2>')
      expecteds.push('<h2 id="' + joinedSecond + '">' + joinedSecond + ' ' + joinedSecond + '</h2>')
      for (let third = 1; third < 4; third++) {
        const joinedThird = [first, second, third].join('.');
        originals.push('<h3>' + joinedThird + '</h3>')
        expecteds.push('<h3 id="' + joinedThird + '">' + joinedThird + ' ' + joinedThird + '</h3>')
      }
    }
  }

  return {
    originals,
    expecteds
  }
}

describe('markdownToHtml tests', () => {
  describe('insert ids to headers tests', () => {
    it('should prefix heading with "1" and have the slug as id', () => {
      const h1Content = 'FUU FUU FUU FUU';
      const h1ExpectedContent = '1 FUU';
      const h1ExpectedId = 'id="'+slugify(h1Content)+'"';
      const originalHtml = '<div><h1>'+h1Content+'</h1></div>';

      const processedHTML = insertIdsToHeaders(originalHtml, '1');
      expect(processedHTML?.html?.indexOf(h1ExpectedContent)).toBeGreaterThan(-1);
      expect(processedHTML?.html?.indexOf(h1ExpectedId)).toBeGreaterThan(-1);
    });

    it('should handle headings\' semantic numbering', () => {

      const generated = createTestHtml();
      // <div><h1>1</h1><h2>1.1</h2>.....
      const originalHtml = '<div>' + generated.originals.join('') + '</div>';
      // <div><h1 id="1">1 1</h1><h2 id="1.1">1.1 1.1</h2>....
      const expectedHtml = '<div>' + generated.expecteds.join('') + '</div>';

//      console.log(originalHtml);
//      console.log(expectedHtml);
      const processedHTML = insertIdsToHeaders(originalHtml, '1');
      expect(processedHTML?.html).toEqual(expectedHtml);
    });

    it('should NOT allow zeros in semantic numbering (case skipping heading levels)', () => {
      const h1 = '<h1>FUU</h1>';
      const h3 = '<h3>FUU</h3>';
      const processed = insertIdsToHeaders('<div>' + h1 + h3 + '</div>', '1');
//      console.log(processed);
      expect(processed?.html?.indexOf('1.0.1')).toBe(-1);
      expect(processed?.html?.indexOf('1.1.1')).toBeGreaterThan(-1);
    })
  });

  describe('update markdown image paths', () => {
    it('should replace md image path with given runtime path', () => {
      const originalPath = 'stuff/things/etc/common/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/images'
      const expected = '![FUU](' + runtimePath + '/' + originalPath + 'image.png)';
      const processed = updateMarkdownImagePaths(originalMd, runtimePath);
      expect(processed).toEqual(expected);
    });

    it('should replace reserved keyword \'resources\' from original path (case documentation)', () => {
      const originalPath = '/resources/images/backend/';
      const originalMd = '![FUU]('+originalPath+'image.png)';
      const runtimePath = '/assets/docs/2.13.0/resources/'
      const expected = '![FUU](' + runtimePath + 'images/backend/image.png)';
      const processed = updateMarkdownImagePaths(originalMd, runtimePath);
      expect(processed).toEqual(expected);
    });
  });

  describe('replace html style tags', () => {
    it ('should replace < and > with {{ and }} for content inside quotation marks', () => {
      const tagged = '"<fuu>"';
      const expected = '"{{fuu}}"';
      expect(updateMarkdownHtmlStyleTags(tagged)).toEqual(expected);
    });

    it ('should leave < and > unharmed when NOT inside quotation marks', () => {
      const tagged = '<fuu>';
      expect(updateMarkdownHtmlStyleTags(tagged)).toEqual(tagged);
    });
  });

  describe('processing headers', () => {
    it ('should keep headings with no tags unchanged', () => {
      const h1 = '# FUU';
      const expectedh1 = '<h1>FUU</h1>';
      const h2 = '## FUU2';
      const expectedh2 = '<h2>FUU2</h2>';
      const h3 = '### FUU3';
      const expectedh3 = '<h3>FUU3</h3>';

      expect(processHeaders(h1)).toBe(expectedh1);
      expect(processHeaders(h2)).toBe(expectedh2);
      expect(processHeaders(h3)).toBe(expectedh3);
    });

    it ('should be able to recognize given tags', () => {
      const h1 = '# [rpc] FUU';
      const expectedh1 = '<h1> FUU' + badgeTemplates['[rpc]'] + '</h1>';
      const h2 = '## [add] FUU2';
      const expectedh2 = '<h2> FUU2' + badgeTemplates['[add]'] + '</h2>';
      const h3 = '### [rem] FUU3';
      const expectedh3 = '<h3> FUU3' + badgeTemplates['[rem]'] + '</h3>';
      const h4 = '#### [mod] FUU4';
      const expectedh4 = '<h4> FUU4' + badgeTemplates['[mod]'] + '</h4>';
      const h5 = '##### [breaking] FUU5';
      const expectedh5 = '<h5> FUU5' + badgeTemplates['[breaking]'] + '</h5>';

      expect(processHeaders(h1)).toBe(expectedh1);
      expect(processHeaders(h2)).toBe(expectedh2);
      expect(processHeaders(h3)).toBe(expectedh3);
      expect(processHeaders(h4)).toBe(expectedh4);
      expect(processHeaders(h5)).toBe(expectedh5);
    });

    it ('should handle multiple tags per heading', () => {
      const h1 = '# [rem][add][mod][breaking][rpc] FUU';

      const processed = processHeaders(h1);
      expect(processed.indexOf('[add]')).toBe(-1);
      expect(processed.indexOf('[mod]')).toBe(-1);
      expect(processed.indexOf('[rem]')).toBe(-1);
      expect(processed.indexOf('[rpc]')).toBe(-1);
      expect(processed.indexOf('[breaking]')).toBe(-1);

      expect(processed.indexOf(badgeTemplates['[add]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(badgeTemplates['[mod]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(badgeTemplates['[rem]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(badgeTemplates['[rpc]'])).toBeGreaterThan(-1);
      expect(processed.indexOf(badgeTemplates['[breaking]'])).toBeGreaterThan(-1);
    });
  });

  describe('processing javascript blocks', () => {
    it ('should prepare javascript - blocks for highlight.js', () => {
      const markdown = "```javascript var a = 0;```";
      const processed = processJavascriptBlocks(markdown);
      expect(processed.indexOf('´')).toBe(-1);
      expect(processed.startsWith('<pre><code')).toBe(true);
    });

    it ('should be able to handle javascript blocks with multiple lines', () => {
      const markdown = `
        \`\`\`javascript
          var a = 0;
          let b = 3;
          console.log(a + b);
        \`\`\``;
      const processed = processJavascriptBlocks(markdown).trim();
      expect(processed.indexOf('´')).toBe(-1);
      expect(processed.startsWith('<pre><code')).toBe(true);
    });
  });

  describe('processing triplequote codeblocks', () => {
    it ('should prepare triple quote - blocks for highlight.js', () => {
      const markdown = "``` var a = 0;```";
      const processed = processTripleQuoteCodeBlocks(markdown);
      expect(processed.indexOf('´')).toBe(-1);
      expect(processed.startsWith('<pre><code')).toBe(true);
    });

    it ('should be able to handle triple quote blocks with multiple lines', () => {
      const markdown = `
        \`\`\`
          var a = 0;
          let b = 3;
          console.log(a + b);
        \`\`\``;
      const processed = processTripleQuoteCodeBlocks(markdown).trim();
      expect(processed.indexOf('´')).toBe(-1);
      expect(processed.startsWith('<pre><code')).toBe(true);
    });
  });

  describe('processing codeblocks', () => {
    it ('should prepare code - blocks', () => {
      const markdown = "`var a = 0;`";
      const processed = processCodeBlocks(markdown).trim();
      expect(processed.indexOf('´')).toBe(-1);
      expect(processed.startsWith('<code')).toBe(true);
    });
  });

  describe('Link to migration guide', () => {
    it('should replace migration guide link with anchor', () => {
      const markdown = `[Migrationguide](MigrationGuide.md)`;
      const markdownAfter = `<a href="#Migration-guide">Migrationguide</a>`;
      const processed = processMigrationGuideLinks(markdown).trim();
      expect(processed).toEqual(markdownAfter);
    });

    it('should leave link with absolute path alone', () => {
      const markdown = `[Migrationguide](http://www.migrationguideland.com/MigrationGuide.md)`;
      const processed = processMigrationGuideLinks(markdown).trim();
      expect(processed).toEqual(markdown);
    });
  })

  describe('Rest of the links', () => {
    it('should replace md-style link with anchor', () => {
      const markdown = `[Some link text](http://somelink.com)`;
      const markdownAfter = `<a href="http://somelink.com">Some link text</a>`;
      const processed = processAllLinks(markdown).trim();
      expect(processed).toEqual(markdownAfter);
    });

    it('should leave imagelink alone', () => {
      const markdown = `![Some image](http://someimage.com)`;
      const processed = processAllLinks(markdown).trim();
      expect(processed).toEqual(markdown);
    });
  })
});