import { data } from '../data/year2024day5';

const isTest: boolean = false;
const testData: Array<string> = [
  '47|53',
  '97|13',
  '97|61',
  '97|47',
  '75|29',
  '61|13',
  '75|53',
  '29|13',
  '97|29',
  '53|29',
  '61|53',
  '97|53',
  '61|29',
  '47|13',
  '75|47',
  '97|75',
  '47|61',
  '75|61',
  '47|29',
  '75|13',
  '53|13',
  '',
  '75,47,61,53,29',
  '97,61,53,29,13',
  '75,29,13',
  '75,97,47,61,53',
  '61,13,29',
  '97,13,75,29,47',
];

export const year2024day5 = (): string => {
  const pageOrderAndUpdatesData: Array<string> = isTest ? testData : data;
  let sumTotal: number = 0;
  const pageOrderingRules: Array<Array<number>> = new Array<Array<number>>();
  const updates: Array<Array<number>> = new Array<Array<number>>();

  for (let i = 0; i < pageOrderAndUpdatesData.length; ++i) {
    const pageOrderAndUpdate = pageOrderAndUpdatesData[i];
    if (pageOrderAndUpdate.indexOf('|') >= 0) {
      pageOrderingRules.push(
        pageOrderAndUpdate.split('|').map(n => parseInt(n)),
      );
    }
    if (pageOrderAndUpdate.indexOf(',') >= 0) {
      updates.push(pageOrderAndUpdate.split(',').map(n => parseInt(n)));
    }
  }

  for (let i = 0; i < updates.length; ++i) {
    const update = updates[i];
    let isUpdateInRightOrder: boolean = true;
    for (let j = 0; j < update.length; ++j) {
      const page = update[j];
      isUpdateInRightOrder =
        isUpdateInRightOrder &&
        isPageInRightOrder(page, update, pageOrderingRules);
    }
    if (isUpdateInRightOrder) {
      //   console.log('ADD', update[Math.floor(update.length / 2)]);
      sumTotal += update[Math.floor(update.length / 2)];
    }
  }

  return sumTotal.toString();
  /* 5991 */
};

const isPageInRightOrder = (
  page: number,
  update: Array<number>,
  rules: Array<Array<number>>,
): boolean => {
  let isRightOrder: boolean = true;

  for (let i = 0; i < rules.length; ++i) {
    const before: number = rules[i][0];
    const after: number = rules[i][1];
    if (page == before) {
      const pageIndex: number = update.indexOf(page);
      const afterIndex: number = update.indexOf(after);
      if (afterIndex >= 0 && pageIndex > afterIndex) {
        isRightOrder = false;
        // console.log(page, update, rules[i], false);
        break;
      }
      //   console.log(page, update, rules[i], true);
    }
  }

  return isRightOrder;
};

export const year2024day5_2 = (): string => {
  const pageOrderAndUpdatesData: Array<string> = isTest ? testData : data;
  let sumTotal: number = 0;
  const pageOrderingRules: Array<Array<number>> = new Array<Array<number>>();
  const updates: Array<Array<number>> = new Array<Array<number>>();

  for (let i = 0; i < pageOrderAndUpdatesData.length; ++i) {
    const pageOrderAndUpdate = pageOrderAndUpdatesData[i];
    if (pageOrderAndUpdate.indexOf('|') >= 0) {
      pageOrderingRules.push(
        pageOrderAndUpdate.split('|').map(n => parseInt(n)),
      );
    }
    if (pageOrderAndUpdate.indexOf(',') >= 0) {
      updates.push(pageOrderAndUpdate.split(',').map(n => parseInt(n)));
    }
  }

  for (let i = 0; i < updates.length; ++i) {
    let update = updates[i];
    const isRightOrder: boolean = isUpdateInRightOrder(
      update,
      pageOrderingRules,
    );
    if (!isRightOrder) {
      do {
        update = putPagesInOrder(update, pageOrderingRules);
      } while (!isUpdateInRightOrder(update, pageOrderingRules));

      // console.log(i, 'ADD', update, update[Math.floor(update.length / 2)]);
      sumTotal += update[Math.floor(update.length / 2)];
    }
  }

  return sumTotal.toString();
  /* 5479 */
};

const isUpdateInRightOrder = (
  update: Array<number>,
  rules: Array<Array<number>>,
): boolean => {
  let isUpdateInRightOrder: boolean = true;
  for (let j = 0; j < update.length; ++j) {
    const page = update[j];
    isUpdateInRightOrder =
      isUpdateInRightOrder && isPageInRightOrder(page, update, rules);
  }
  return isUpdateInRightOrder;
};

const putPagesInOrder = (
  update: Array<number>,
  rules: Array<Array<number>>,
): Array<number> => {
  const rightOrderUpdate: Array<number> = update;

  for (let i = 0; i < rules.length; ++i) {
    const before: number = rules[i][0];
    const after: number = rules[i][1];

    const beforeIndex: number = rightOrderUpdate.indexOf(before);
    const afterIndex: number = rightOrderUpdate.indexOf(after);
    if (beforeIndex >= 0) {
      if (afterIndex >= 0 && beforeIndex > afterIndex) {
        rightOrderUpdate.splice(afterIndex, 0, before);
        rightOrderUpdate.splice(beforeIndex + 1, 1);
      }
    }
    // console.log(i, rules[i], update, rightOrderUpdate);
  }

  return rightOrderUpdate;
};
