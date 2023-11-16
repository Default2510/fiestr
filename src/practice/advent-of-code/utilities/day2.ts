import { data } from '../data/day2'

const isTest: boolean = false;
const testData: Array<string> = ["forward 5","down 5","forward 8","up 3","down 8","forward 2"];

export const day2 = (): string => {
  const moveData: Array<string> = isTest ? testData : data;
  let horizontal: number = 0;
  let vertical: number = 0;

  for (let i = 0; i < moveData.length; ++i) {
    const move: Array<string> = moveData[i].split(' ');
    const direction: string = move[0];
    const distance: number = +move[1];
    if (direction === 'forward') {
      horizontal += distance;
    } else if (direction === 'down') {
      vertical += distance;
    } else if (direction === 'up') {
      vertical -= distance;
    }
  }
  
  const depth: number = horizontal * vertical;

  return depth.toString();
};

export const day2_2 = (): string => {
  const moveData: Array<string> = isTest ? testData : data;
  let horizontal: number = 0;
  let vertical: number = 0;
  let aim: number = 0;

  for (let i = 0; i < moveData.length; ++i) {
    const move: Array<string> = moveData[i].split(' ');
    const direction: string = move[0];
    const distance: number = +move[1];
    if (direction === 'forward') {
      horizontal += distance;
      vertical += aim * distance;
    } else if (direction === 'down') {
      aim += distance;
    } else if (direction === 'up') {
      aim -= distance;
    }
  }

  const depth: number = horizontal * vertical;

  return depth.toString();
};
