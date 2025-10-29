// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// interface Props {
//   onTimeChange?: (date: Date | null) => void;
//   initialTime?: Date;
// }

// const CustomTimePicker = ({ initialTime, onTimeChange }: Props) => {
//   const [selectedTime, setSelectedTime] = useState<Date | null>(
//     initialTime || null
//   );

//   const handleTimeChange = (date: Date | null) => {
//     setSelectedTime(date);
//   };

//   return (
//     <div className="caret-transparent">
//       <DatePicker
//         selected={selectedTime}
//         onChange={handleTimeChange}
//         showTimeSelect
//         showTimeSelectOnly
//         timeFormat="HH:mm"
//         timeIntervals={15}
//          placeholderText="Select Appointment Time"
//         dateFormat="h:mm aa"
//         className="block w-60 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>
//   );
// };

// export default CustomTimePicker;
