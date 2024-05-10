
import { insertIdsToHeaders } from "./markdownToHtml";
import slugify from 'slugify';

describe('markdownToHtml tests', () => {
  describe('insert ids to headers tests', () => {
    it('should prefix heading with "1" and have the slug as id', () => {
      const h1Content = 'FUU FUU FUU FUU';
      const h1ExpectedContent = '1 FUU'
      const h1ExpectedId = 'id="'+slugify(h1Content)+'"';
      const originalHtml = '<div><h1>'+h1Content+'</h1></div>';

      const processedHTML = insertIdsToHeaders(originalHtml, '1');
      expect(processedHTML?.html?.indexOf(h1ExpectedContent)).toBeGreaterThan(-1);
      expect(processedHTML?.html?.indexOf(h1ExpectedId)).toBeGreaterThan(-1);
    });
  });
});