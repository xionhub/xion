import { getPrevDayCount, getPrevMonthDate } from './datepicker.util';

describe('datepicker util test', () => {
  const _2023_11_14 = [2023, 11, 14, 0, 0, 0] as const;
  const date = new Date(..._2023_11_14);
  it('getPrevDayCount test 두번째 매개변수의 키값에 따라 적절한 값을 반환합니다.', () => {
    expect(getPrevDayCount(date, 'saturday')).toBe(6);
    expect(getPrevDayCount(date, 'sunday')).toBe(5);
    expect(getPrevDayCount(date, 'monday')).toBe(4);
    expect(getPrevDayCount(date, 'tuesday')).toBe(3);
    expect(getPrevDayCount(date, 'wednesday')).toBe(2);
    expect(getPrevDayCount(date, 'thursday')).toBe(1);
    expect(getPrevDayCount(date, 'friday')).toBe(0);
  });

  it('', () => {
    //@ts-expect-error
    console.log(getPrevDayCount(date, ''));
    //@ts-expect-error
    console.log(getPrevDayCount(date, 12));
  });
  it('getPrevMonthDate는 두번째 매개변수만큼의 길이를 가진 배열을 반환합니다.', () => {
    expect(getPrevMonthDate(date, 1)).toHaveLength(1);
    expect(getPrevMonthDate(date, 2)).toHaveLength(2);
    expect(getPrevMonthDate(date, 3)).toHaveLength(3);
    expect(getPrevMonthDate(date, 4)).toHaveLength(4);
    expect(getPrevMonthDate(date, 5)).toHaveLength(5);
    expect(getPrevMonthDate(date, 6)).toHaveLength(6);
    expect(getPrevMonthDate(date, 7)).toHaveLength(7);
    expect(getPrevMonthDate(date, 0)).toHaveLength(0);
    expect(getPrevMonthDate(date, 100)).toHaveLength(100);
  });
});
