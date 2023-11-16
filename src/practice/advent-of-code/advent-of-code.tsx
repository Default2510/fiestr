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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const daysUtil: any = {
  day1: day1,
  day1_2: day1_2,
  day2: day2,
  day2_2: day2_2,
  day3: day3,
  day3_2: day3_2,
};

const scenarioCommand = (action: AdventOfCodeAction): string => {
  const scenario: string = 'day' + action.day + (action.part === 1 ? "" : "_2");
  if (scenario in daysUtil) {
    return daysUtil[scenario]();
  }
  return "";
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