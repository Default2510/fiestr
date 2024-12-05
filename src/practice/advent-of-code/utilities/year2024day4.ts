import { data } from '../data/year2024day4';

const isTest: boolean = false;
const testData: Array<string> = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX',
];

export const year2024day4 = (): string => {
  const wordSearchData: Array<string> = isTest ? testData : data;
  let count: number = 0;

  for (let i = 0; i < wordSearchData.length; ++i) {
    const row = wordSearchData[i];
    count += search(/XMAS/g, row);
    count += search(/SAMX/g, row);
    // console.log('Row ' + i + ' ===', count);
  }

  for (let j = 0; j < wordSearchData[0].length; ++j) {
    let column: string = '';
    for (let k = 0; k < wordSearchData.length; ++k) {
      column += wordSearchData[k].at(j);
    }
    count += search(/XMAS/g, column);
    count += search(/SAMX/g, column);
    // console.log('Col ' + j + ' ===', count);
  }

  for (let i = 0; i < wordSearchData[0].length; ++i) {
    for (let j = 0; j < wordSearchData.length; ++j) {
      let diagonalLR: string = '';
      if (j + 3 < wordSearchData.length && i + 3 < wordSearchData[0].length) {
        diagonalLR += wordSearchData[j].at(i);
        diagonalLR += wordSearchData[j + 1].at(i + 1);
        diagonalLR += wordSearchData[j + 2].at(i + 2);
        diagonalLR += wordSearchData[j + 3].at(i + 3);

        count += search(/XMAS/g, diagonalLR);
        count += search(/SAMX/g, diagonalLR);
      }
    }
  }

  for (let i = wordSearchData[0].length - 1; i >= 0; --i) {
    for (let j = 0; j < wordSearchData.length; ++j) {
      let diagonalRL: string = '';
      if (j + 3 < wordSearchData.length && i - 3 >= 0) {
        diagonalRL += wordSearchData[j].at(i);
        diagonalRL += wordSearchData[j + 1].at(i - 1);
        diagonalRL += wordSearchData[j + 2].at(i - 2);
        diagonalRL += wordSearchData[j + 3].at(i - 3);

        count += search(/XMAS/g, diagonalRL);
        count += search(/SAMX/g, diagonalRL);
      }
    }
  }

  return count.toString();
  /* 2569 */
};

const search = (searchString: RegExp, str: string): number => {
  let count: number = 0;
  const matches = str.match(searchString);
  if (matches) {
    count = matches.length;
  }
  // console.log(str, searchString, count);
  return count;
};

export const year2024day4_2 = (): string => {
  const wordSearchData: Array<string> = isTest ? testData : data;
  let count: number = 0;

  for (let i = 0; i < wordSearchData[0].length; ++i) {
    for (let j = 0; j < wordSearchData.length; ++j) {
      let xmas: string = '';
      if (j + 2 < wordSearchData.length && i + 2 < wordSearchData[0].length) {
        xmas += wordSearchData[j].at(i);
        xmas += wordSearchData[j].at(i + 2);
        xmas += wordSearchData[j + 1].at(i + 1);
        xmas += wordSearchData[j + 2].at(i);
        xmas += wordSearchData[j + 2].at(i + 2);

        if (
          xmas == 'MSAMS' ||
          xmas == 'SMASM' ||
          xmas == 'SSAMM' ||
          xmas == 'MMASS'
        ) {
          ++count;
        }
      }
    }
  }

  return count.toString();
  /* 1998 */
};
