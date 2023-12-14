import {
  getDaysInMonth,
  subMonths,
  addDays,
  startOfMonth,
  addMonths,
} from 'date-fns';
import React from 'react';

const CALENDER_LENGTH = 42;
const DAY_OF_WEEK = 7;

enum DayEnum {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}
interface UseDatePickerProps {
  startDay: keyof typeof DayEnum;
}

export const useDatePicker = (
  injectDate: Date,
  option: UseDatePickerProps = { startDay: 'sunday' },
) => {
  const [date, dispatch] = React.useState(injectDate);
  const startOfMonthDate = startOfMonth(date);
  const totalMonthDays = getDaysInMonth(date);
  const lastDayOfPrevMonth = getDaysInMonth(subMonths(date, 1));

  const firstDayOfWeek = startOfMonthDate.getDay();

  // Adjust prevDayCount based on the chosen start day
  const prevDayCount =
    (firstDayOfWeek - DayEnum[option.startDay!] + DAY_OF_WEEK) % DAY_OF_WEEK;

  const prevDayList = Array.from({ length: prevDayCount }).map((_, i) => {
    return addDays(
      new Date(date.getFullYear(), date.getMonth() - 1, 1),
      lastDayOfPrevMonth - prevDayCount + i,
    );
  });

  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) =>
    addDays(startOfMonthDate, i),
  );

  const firstDayOfNextMonth = startOfMonth(addMonths(date, 1));

  const nextDayCount =
    CALENDER_LENGTH - currentDayList.length - prevDayList.length;

  const nextDayList = Array.from({ length: nextDayCount }).map((_, i) => {
    return addDays(firstDayOfNextMonth, i);
  });
  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);
  const weekCalendarList = currentCalendarList.reduce(
    (acc: Date[][], cur, idx) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(cur);
      return acc;
    },
    [],
  );

  return { weekCalendarList, date, dispatch };
};
