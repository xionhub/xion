import { getDaysInMonth, startOfMonth } from 'date-fns';
import React from 'react';
import {
  DayEnum,
  getCurrentMonthDate,
  getPrevMonthDate,
  getNextMonthDate,
  getPrevDayCount,
  getNextDayCount,
  flatTo2DArray,
} from './datepicker.util';

interface UseDatePickerProps {
  startDay: keyof typeof DayEnum;
}

export const useDatePicker = (
  injectDate: Date,
  option: UseDatePickerProps = { startDay: 'sunday' },
) => {
  const [date, dispatch] = React.useState(injectDate);

  const curDayList = getCurrentMonthDate(date, getDaysInMonth(date));

  const prevDayCount = getPrevDayCount(date, option.startDay);
  const prevDayList = getPrevMonthDate(date, prevDayCount);

  const nextDayCount = getNextDayCount(curDayList.length, prevDayList.length);
  const nextDayList = getNextMonthDate(date, nextDayCount);

  const flatCalendarList = prevDayList.concat(curDayList, nextDayList);
  const calendar = flatTo2DArray(flatCalendarList);

  return { calendar, date, dispatch };
};
