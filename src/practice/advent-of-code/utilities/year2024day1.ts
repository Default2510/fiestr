import { data } from '../data/year2024day1';

const isTest: boolean = false;
const testData: Array<string> = [
  '3   4',
  '4   3',
  '2   5',
  '1   3',
  '3   9',
  '3   3',
];

export const year2024day1 = (): string => {
  const depthData: Array<string> = isTest ? testData : data;
  const leftList: Array<number> = new Array<number>();
  const rightList: Array<number> = new Array<number>();
  let totalDistance: number = 0;

  for (let i = 0; i < depthData.length; ++i) {
    const current: string = depthData[i];
    const row: Array<string> = current.split('   ');
    leftList.push(Number.parseInt(row[0]));
    rightList.push(Number.parseInt(row[1]));
  }

  leftList.sort();
  rightList.sort();

  for (let i = 0; i < leftList.length; ++i) {
    const distance: number = Math.abs(leftList[i] - rightList[i]);
    totalDistance += distance;
  }

  return totalDistance.toString();
  /* 2264607 */
};

export const year2024day1_2 = (): string => {
  const depthData: Array<string> = isTest ? testData : data;
  const leftList: Array<number> = new Array<number>();
  const rightList: Array<number> = new Array<number>();
  let similarityScore: number = 0;

  for (let i = 0; i < depthData.length; ++i) {
    const current: string = depthData[i];
    const row: Array<string> = current.split('   ');
    leftList.push(Number.parseInt(row[0]));
    rightList.push(Number.parseInt(row[1]));
  }

  for (let i = 0; i < leftList.length; ++i) {
    const num: number = leftList[i];
    const count: number = rightList.filter(x => x == num).length;
    similarityScore += num * count;
  }

  return similarityScore.toString();
  /* 19457120 */
};
