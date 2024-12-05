import { data } from '../data/year2024day2';

const isTest: boolean = false;
const testData: Array<string> = [
  '7 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
];

export const year2024day2 = (): string => {
  const reportsData: Array<string> = isTest ? testData : data;
  let safeCount: number = 0;

  for (let i = 0; i < reportsData.length; ++i) {
    const report: string = reportsData[i];
    const row: Array<number> = report.split(' ').map(Number);
    // console.log(i + ': ', row);

    const isIncreasing: boolean = row[0] < row[1];
    let isSafe: boolean = true;
    // console.log(isIncreasing ? 'increasing' : 'decreasing');
    for (let j = 1; j < row.length; ++j) {
      const prev: number = row[j - 1];
      const curr: number = row[j];
      // console.log(prev, curr, ':', curr - prev);
      if (isIncreasing) {
        if (curr - prev > 3 || curr - prev < 1) {
          isSafe = false;
          break;
        }
      } else {
        if (curr - prev < -3 || curr - prev > -1) {
          isSafe = false;
          break;
        }
      }
    }
    // console.log(isSafe ? 'safe' : 'unsafe');
    if (isSafe) {
      ++safeCount;
    }
  }

  return safeCount.toString();
  /* 516 */
};

export const year2024day2_2 = (): string => {
  const reportsData: Array<string> = isTest ? testData : data;
  let safeCount: number = 0;

  for (let i = 0; i < reportsData.length; ++i) {
    const reports: string = reportsData[i];
    const report: Array<number> = reports.split(' ').map(Number);

    let isSafe: boolean = isReportSafe(report);
    if (!isSafe) {
      for (let j = 0; j < report.length; ++j) {
        const reportCopy = [...report];
        reportCopy.splice(j, 1);
        isSafe = isReportSafe(reportCopy);
        if (isSafe) {
          break;
        }
      }
    }

    if (isSafe) {
      ++safeCount;
    }
  }

  return safeCount.toString();
  /* 561 */
};

const isReportSafe = (report: Array<number>): boolean => {
  if (report[0] == report[1]) {
    return false;
  }

  const isIncreasing: boolean = report[0] < report[1];
  let safe: boolean = true;
  for (let i = 0; i < report.length - 1; ++i) {
    safe = safe && isNextLevelSafe(report[i], report[i + 1], isIncreasing);
  }

  return safe;
};

const isNextLevelSafe = (
  curr: number,
  next: number,
  isIncreasing: boolean,
): boolean => {
  if ((isIncreasing && curr > next) || (!isIncreasing && curr < next)) {
    return false;
  }

  if (Math.abs(next - curr) > 3 || Math.abs(next - curr) < 1) {
    return false;
  }

  return true;
};
