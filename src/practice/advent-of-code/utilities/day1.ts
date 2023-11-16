import { data } from '../data/day1'

const isTest: boolean = false;
const testData: Array<number> = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

export const day1 = (): string => {
  const depthData: Array<number> = isTest ? testData : data;
  let count: number = 0;

  for (let i = 1; i < depthData.length; ++i) {
    const current: number = depthData[i];
    const previous: number = depthData[i - 1];
    if (previous < current) {
      ++count;
    }
  }

  return count.toString();
};

export const day1_2 = (): string => {
  const depthData: Array<number> = isTest ? testData : data;
  let count: number = 0;

  for (let i = 0; i < depthData.length - 2; ++i) {
    const sum1: number = depthData[i] + depthData[i + 1] + depthData[i + 2];
    const sum2: number = depthData[i + 1] + depthData[i + 2] + depthData[i + 3];
    if (sum1 < sum2) {
      ++count;
    }
  }

  return count.toString();
};
