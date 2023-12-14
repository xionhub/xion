import {
  addDays,
  addMonths,
  getDaysInMonth,
  startOfMonth,
  subMonths,
} from 'date-fns';

export const CALENDER_LENGTH = 42;
export const DAY_OF_WEEK = 7;

export enum DayEnum {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

export const getPrevDayCount = (date: Date, startDay: keyof typeof DayEnum) => {
  const prevDayCount =
    (startOfMonth(date).getDay() - DayEnum[startDay] + DAY_OF_WEEK) %
    DAY_OF_WEEK;
  return prevDayCount;
};

export const getPrevMonthDate = (date: Date, length: number) => {
  const lastDayOfPrevMonth = getDaysInMonth(subMonths(date, 1));

  const prevDayList = Array.from({ length }).map((_, i) => {
    return addDays(
      new Date(date.getFullYear(), date.getMonth() - 1, 1),
      lastDayOfPrevMonth - length + i,
    );
  });
  return prevDayList;
};

export const getCurrentMonthDate = (date: Date, length: number) => {
  const startOfMonthDate = startOfMonth(date);
  return Array.from({ length }).map((_, i) => {
    return addDays(startOfMonthDate, i);
  });
};

export const getNextDayCount = (
  currentDayLength: number,
  prevDayLength: number,
) => {
  return CALENDER_LENGTH - currentDayLength - prevDayLength;
};
export const getNextMonthDate = (date: Date, length: number) => {
  const firstDayOfNextMonth = startOfMonth(addMonths(date, 1));
  const nextDayList = Array.from({ length }).map((_, i) => {
    return addDays(firstDayOfNextMonth, i);
  });
  return nextDayList;
};

export const flatTo2DArray = (dateList: Date[]) => {
  return dateList.reduce((acc: Date[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);
};
