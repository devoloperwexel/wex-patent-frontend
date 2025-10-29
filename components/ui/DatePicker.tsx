import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  onDateChange?: (date: Date | null) => void;
  initialDate?: Date;
}

const CustomDatePicker = ({ initialDate }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="caret-transparent">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select Appointment Date"
        className="block w-60 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default CustomDatePicker;
