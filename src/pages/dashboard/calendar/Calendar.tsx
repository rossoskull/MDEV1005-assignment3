import { useEffect, useState } from "react";
import * as S from "../../../styles";
import { Descriptions } from "antd";

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const Calendar = () => {
  const [details, setDetails] = useState<{
    date: string;
    day: string;
    month: string;
  }>();

  useEffect(() => {
    const date = new Date();

    setDetails({
      date: `${date.getDate()}/${date.getDate()}/${date.getFullYear()}`,
      day: DAYS[date.getDay()],
      month: MONTHS[date.getMonth()]
    });
  }, [])

  return (
    <S.WidgetCard>
      <S.WidgetTitle>Today's Day Details</S.WidgetTitle>
      <Descriptions bordered>
        <Descriptions.Item span={3} label="Date">{details?.date}</Descriptions.Item>
        <Descriptions.Item span={3} label="Day">{details?.day}</Descriptions.Item>
        <Descriptions.Item span={3} label="Month">{details?.month}</Descriptions.Item>
      </Descriptions>
    </S.WidgetCard>
  );
}

export default Calendar;
