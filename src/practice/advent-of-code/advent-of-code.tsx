import { PropsWithChildren } from 'react';
import { year2021day1, year2021day1_2 } from './utilities/year2021day1';
import { year2021day2, year2021day2_2 } from './utilities/year2021day2';
import { year2021day3, year2021day3_2 } from './utilities/year2021day3';
import { year2024day1, year2024day1_2 } from './utilities/year2024day1';
import { year2024day2, year2024day2_2 } from './utilities/year2024day2';
import { year2024day3, year2024day3_2 } from './utilities/year2024day3';
import { year2024day4, year2024day4_2 } from './utilities/year2024day4';
import { year2024day5, year2024day5_2 } from './utilities/year2024day5';

interface AdventOfCodeProps extends PropsWithChildren {
  year: number;
  day: number;
}

interface AdventOfCodeAction {
  year: number;
  day: number;
  part: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const daysUtil: any = {
  year2021day1: year2021day1,
  year2021day1_2: year2021day1_2,
  year2021day2: year2021day2,
  year2021day2_2: year2021day2_2,
  year2021day3: year2021day3,
  year2021day3_2: year2021day3_2,
  year2024day1: year2024day1,
  year2024day1_2: year2024day1_2,
  year2024day2: year2024day2,
  year2024day2_2: year2024day2_2,
  year2024day3: year2024day3,
  year2024day3_2: year2024day3_2,
  year2024day4: year2024day4,
  year2024day4_2: year2024day4_2,
  year2024day5: year2024day5,
  year2024day5_2: year2024day5_2,
};

const scenarioCommand = (action: AdventOfCodeAction): string => {
  const scenario: string =
    'year' + action.year + 'day' + action.day + (action.part === 1 ? '' : '_2');
  if (scenario in daysUtil) {
    return daysUtil[scenario]();
  }
  return '';
};

export const AdventOfCode = (props: AdventOfCodeProps) => {
  const result = scenarioCommand({ year: props.year, day: props.day, part: 1 });
  const result2 = scenarioCommand({
    year: props.year,
    day: props.day,
    part: 2,
  });

  return (
    <>
      <h1
        style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}
      >
        Advent of Code {props.year}
      </h1>
      <h2
        style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}
      >
        Day {props.day}
      </h2>
      <h3 style={{ fontWeight: 'bold' }}>Part 1</h3>
      <p>Output: {result}</p>
      <h3 style={{ fontWeight: 'bold', marginTop: '10px' }}>Part 2</h3>
      <p>Output: {result2}</p>
    </>
  );
};
