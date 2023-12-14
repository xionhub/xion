import { renderHook } from '@testing-library/react';
import { useDatePicker } from './use-datepicker';

describe('date picker', () => {
  const _2023_11_14 = [2023, 11, 14, 0, 0, 0] as const;

  // date 객체 특성상 그렇습니다..
  const DAY_OF_2023_11_25 = 26;
  const MONTH_OF_2023_11_25 = 10;
  const DAY_OF_2024_01_05 = 6;
  const MONTH_OF_2024_01_05 = 0;
  it('항상 weekCalendarList는 6 * 7 형태의 2차원배열이며 총요소가 42개입니다.', () => {
    const date = new Date(..._2023_11_14);
    const { result } = renderHook(() => useDatePicker(date));
    const calendarList = result.current.weekCalendarList;
    const IS_ALL_LIST_LENGTH_7 = calendarList.every((row) => row.length === 7);
    expect(calendarList).toHaveLength(6);
    expect(IS_ALL_LIST_LENGTH_7).toBe(true);
  });

  it('전월에 대한 정보를 알아야합니다.', () => {
    const date = new Date(..._2023_11_14);
    const { result } = renderHook(() => useDatePicker(date));
    const START_DATE = result.current.weekCalendarList[0][0];
    expect(START_DATE.getDate()).toBe(DAY_OF_2023_11_25);
    expect(START_DATE.getMonth()).toBe(MONTH_OF_2023_11_25);
  });

  it('다음달에 대한 정보를 알아야합니다.', () => {
    const date = new Date(..._2023_11_14);
    const { result } = renderHook(() => useDatePicker(date));
    const END_DATE = result.current.weekCalendarList[5][6];
    console.log(END_DATE);
    expect(END_DATE.getDate()).toBe(DAY_OF_2024_01_05);
    expect(END_DATE.getMonth()).toBe(MONTH_OF_2024_01_05);
  });
});
