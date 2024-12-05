import { data } from '../data/year2024day3';

const isTest: boolean = false;
const testData: string =
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
const testData2: string =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)do()+mul(32,64](mul(11,8)undo()?don't()mul(8,5))";

export const year2024day3 = (): string => {
  const memory: string = isTest ? testData : data;
  let sumTotal: number = 0;
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const matches = memory.match(regex);

  // console.log(memory);
  // console.log(matches);

  if (matches == null) {
    return sumTotal.toString();
  }

  for (let i = 0; i < matches.length; ++i) {
    const regex2 = /(\d{1,3}),(\d{1,3})/g;
    const mul = regex2.exec(matches[i]);
    if (mul == null) {
      continue;
    }
    const nums: Array<number> = mul.slice(1).map(m => parseInt(m));
    // console.log(nums);
    sumTotal += nums[0] * nums[1];
  }

  return sumTotal.toString();
  /* 179834255 */
};

export const year2024day3_2 = (): string => {
  const memory: string = isTest ? testData2 : data;
  // console.log(memory);
  let sumTotal: number = 0;
  const regexMul = /mul\(\d{1,3},\d{1,3}\)/g;
  const regexDo = /do\(\)/g;
  const regexDont = /don't\(\)/g;

  let canContinue: boolean = true;
  let indexMul: number = -1;
  let indexDo: number = -1;
  let indexDont: number = -1;
  let enabled: boolean = true;

  let doFunc = regexDo.exec(memory);
  let dont = regexDont.exec(memory);
  while (canContinue) {
    const mul = regexMul.exec(memory);

    if (mul == null) {
      canContinue = false;
      break;
    }

    indexMul = mul == null || mul.index == null ? indexMul : mul.index;
    indexDo = doFunc == null || doFunc.index == null ? indexDo : doFunc.index;
    indexDont = dont == null || dont.index == null ? indexDont : dont.index;

    // console.log('=====');
    // console.log('mul index:', indexMul);
    // console.log('do index:', indexDo);
    // console.log('dont index:', indexDont);

    if (indexMul == Math.max(indexMul, indexDo, indexDont)) {
      continue;
    }

    if (indexDo == Math.min(indexMul, indexDo, indexDont)) {
      enabled = true;
      doFunc = regexDo.exec(memory);
    } else if (indexDont == Math.min(indexMul, indexDo, indexDont)) {
      enabled = false;
      dont = regexDont.exec(memory);
    }

    if (enabled && mul) {
      // console.log('enabled:', mul);
      const regex2 = /(\d{1,3}),(\d{1,3})/g;
      const mul2 = regex2.exec(mul[0]);
      if (mul2 == null) {
        continue;
      }
      const nums: Array<number> = mul2.slice(1).map(m => parseInt(m));
      // console.log(nums);
      sumTotal += nums[0] * nums[1];
    }
  }

  return sumTotal.toString();
  /* 80570939 */
};
