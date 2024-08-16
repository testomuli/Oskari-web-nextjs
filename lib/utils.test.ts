import { isReplacableChangeLogItem } from "./utils";

describe('isReplacableChangelogItem tests', () => {

  it('should return FALSE when parent title IS NOT of form [number] Changelog', () => {
    const test = 'FFF Changelog';
    const test2 = '16 A Changelog';
    const test3 = '16 AChangelog';
    const test4 = 'FF Changelo';
    const test5 = '16 Changelo';
    expect(isReplacableChangeLogItem(test, 'test.md')).toBe(false);
    expect(isReplacableChangeLogItem(test2, 'test.md')).toBe(false);
    expect(isReplacableChangeLogItem(test3, 'test.md')).toBe(false);
    expect(isReplacableChangeLogItem(test4, 'test.md')).toBe(false);
    expect(isReplacableChangeLogItem(test5, 'test.md')).toBe(false);
  });

  it('should return FALSE when parent title is correct but filename is Changelog.md', () => {
    const test = 'Changelog.md';
    expect(isReplacableChangeLogItem('5 Changelog', test)).toBe(false);
  });

  it('should return TRUE when parent title IS of form [number] Changelog and filename !== Changelog.md', () => {
    const test = 'Changelog.MD';
    const test2 = 'CHANGELOG.md';
    const test3 = 'ChangeLING.mdd';
    const test4 = 'JustAFile.txt';
    const test5 = 'asdfasfdasdfasd';
    expect(isReplacableChangeLogItem('1 Changelog', test)).toBe(true);
    expect(isReplacableChangeLogItem('665 Changelog', test2)).toBe(true);
    expect(isReplacableChangeLogItem('27 Changelog', test3)).toBe(true);
    expect(isReplacableChangeLogItem('12 Changelog', test4)).toBe(true);
    expect(isReplacableChangeLogItem('9989 Changelog', test5)).toBe(true);
  });

});