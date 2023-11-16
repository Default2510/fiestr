import { PropsWithChildren } from 'react';
import { day1, day1_2 } from './utilities/day1';
import { day2, day2_2 } from './utilities/day2';
import { day3, day3_2 } from './utilities/day3';

interface AdventOfCodeProps extends PropsWithChildren {
  day: number;
}

interface AdventOfCodeAction {
  day: number;
  part: number;
}

const daysUtil = [day1, day1_2, day2, day2_2, day3, day3_2];

export const scenarioCommand = (action: AdventOfCodeAction) => {
  for (let i: number = 0; i < daysUtil.length / 2; ++i) {
    if (action.day === i + 1) {
      if (action.part === 1) {
        return daysUtil[i * 2]();
      } else if (action.part === 2) {
        return daysUtil[i * 2 + 1]();
      }
    }
  }
  
  throw new Error("Something's wrong....");
};

export const AdventOfCode = (props: AdventOfCodeProps) => {
  const result = scenarioCommand({ day: props.day, part: 1 });
  const result2 = scenarioCommand({ day: props.day, part: 2 });

  return (
    <>
      <h1 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>Advent of Code 2021</h1>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>Day {props.day}</h2>
      <h3 style={{ fontWeight: 'bold' }}>Part 1</h3>
      <p>Output: {result}</p>
      <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>Part 2</h3>
      <p>Output: {result2}</p>
    </>
  );
};