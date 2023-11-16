import { data } from '../data/day3';

const isTest: boolean = false;
const testData: Array<string> = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

export const day3 = (): string => {
  const diagnosticData: Array<string> = isTest ? testData : data;
  const countZeroes: Array<number> = [];
  let gammaRateBinary: string = '';
  let epsilonRateBinary: string = '';

  for (let i: number = 0; i < diagnosticData.length; ++i) {
    const code: string = diagnosticData[i];
    const codes: Array<string> = code.split('');
    for (let j = 0; j < codes.length; ++j) {
      if (countZeroes.length <= j) {
        countZeroes.push(0);
      }
      if (codes[j] === '0') {
        ++countZeroes[j];
      }
    }
  }

  for (let i = 0; i < countZeroes.length; ++i) {
    if (countZeroes[i] > diagnosticData.length / 2) {
      // more 0s than 1s
      gammaRateBinary += '0';
      epsilonRateBinary += '1';
    } else {
      // more 1s than 0s
      gammaRateBinary += '1';
      epsilonRateBinary += '0';
    }
  }

  const gammaRate: number = parseInt(gammaRateBinary, 2);
  const epsilonRate: number = parseInt(epsilonRateBinary, 2);
  const powerConsumption: number = gammaRate * epsilonRate;

  return powerConsumption.toString();
};

type Common = 'most' | 'least';

const filterData = (data: Array<string>, position: number, type: Common): Array<string> => {
  const countZeroes: Array<number> = [];

  for (let i: number = 0; i < data.length; ++i) {
    const code: string = data[i];
    const codes: Array<string> = code.split('');
    for (let j = 0; j < codes.length; ++j) {
      if (countZeroes.length <= j) {
        countZeroes.push(0);
      }
      if (codes[j] === '0') {
        ++countZeroes[j];
      }
    }
  }

  return data.filter(d => {
    const codes: Array<string> = d.split('');
    if (countZeroes[position] > data.length / 2) {
      // more 0s than 1s
      return codes[position] === (type === 'most' ? '0' : '1');
    } else {
      // more 1s than 0s
      return codes[position] === (type === 'most' ? '1' : '0');
    }
  });
};

export const day3_2 = (): string => {
  const diagnosticData: Array<string> = isTest ? testData : data;
  let oxygenGeneratorData: Array<string> = diagnosticData;
  let co2ScrubberData: Array<string> = diagnosticData;

  const length: number = diagnosticData[0].split('').length;
  for (let i = 0; i < length; ++i) {
    if (oxygenGeneratorData.length > 1) {
      oxygenGeneratorData = filterData(oxygenGeneratorData, i, 'most');
    }
    if (co2ScrubberData.length > 1) {
      co2ScrubberData = filterData(co2ScrubberData, i, 'least');
    }
  }

  const oxygenGeneratorRating: number = parseInt(oxygenGeneratorData[0], 2);
  const co2ScrubberRating: number = parseInt(co2ScrubberData[0], 2);
  const lifeSupportRating: number = oxygenGeneratorRating * co2ScrubberRating;

  return lifeSupportRating.toString();
};
