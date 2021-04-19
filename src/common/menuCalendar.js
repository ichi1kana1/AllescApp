import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";
import "date-fns";
import AprilMenu from "../common/april.json";

export function MenuCalendar() {
  const date = useState(new Date());

  //state の日付と同じ表記に変換
  function getFormatDate(date) {
    return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
      "0" + date.getDate()
    ).slice(-2)}`;
  }

  //日付の内容を出力
  function getTileContent({ date }) {
    const day = getFormatDate(date);
    console.log(day);
    var message = null;

    return (
      <p>
        {AprilMenu.map((element) => {
          if (day === element.startDate) {
            return <p>{element.content}</p>;
          }
        })}
      </p>
    );
  }
  return (
    <Calendar
      locale="ja-JP"
      // value={date}
      // tileClassName={getTileClass}
      tileContent={getTileContent}
    />
  );
}
