import React, { useState } from "react";
import SmallCalendarNew from "./SmallCalenderNew";
import AppointmentCardNew from "./AppointmentCardNew";
import { format } from "date-fns";
import Appointment from "models/appointment.model";
import { useRouter } from "next/navigation";
import { languages } from "i18n/languages";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n";
import "dayjs/locale/de"; // Import German locale
import "dayjs/locale/en";
import { de, enGB } from "date-fns/locale";

type Props = {
  appointments: Appointment[];
};
const Appointments = ({ appointments }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const router = useRouter();
  const handleView = (id: string) => router.push(`/appointments/${id}`);
  const { language } = useLanguage();
  const upcomingAppointments = [
    {
      title: "1st Consultation",
      name: "Sam Lewis",
      date: "2024-03-11",
      time: "09:20 AM - 11:30 AM",
    },
    {
      title: "Follow up",
      name: "Suzie Smith",
      date: "2024-03-20",
      time: "11:40 AM - 01:30 PM",
    },
  ];

  const addMinutesToIsoDate = (isoDateString: string, minutesToAdd: number) => {
    const date = new Date(isoDateString);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    return date.toISOString();
  };

  const filteredAppointments = selectedDate
    ? upcomingAppointments.filter(
        (appointment) =>
          format(new Date(appointment.date), "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd")
      )
    : [];
  const lng =
    languages[language.toLowerCase() as keyof typeof languages].dashboard1.new;

  const { upcoming, appointmentHistory } =
    lngs[language.toLowerCase() as keyof typeof languages].dashboard;
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-primary-color font-semibold text-lg text-center mb-4">
        {upcoming}
      </h2>
      <SmallCalendarNew
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      {selectedDate && (
        <div className="mb-4">
          <h3 className="text-center font-medium text-gray-700 mb-2 text-sm pt-3">
            {lng.appointmentsOn} {format(selectedDate, "MMMM dd, yyyy")}
          </h3>
          <div className="overflow-y-auto max-h-64">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((upcomingAppointments, index) => (
                <AppointmentCardNew
                  key={index}
                  title={upcomingAppointments.title}
                  name={upcomingAppointments.name}
                  date={format(
                    new Date(upcomingAppointments.date),
                    "dd, mm, yyyy"
                  )}
                  time={upcomingAppointments.time}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                {lng.noAppointmentDate}
              </div>
            )}
          </div>
        </div>
      )}

      <h2 className="text-primary-color font-semibold text-lg text-center mt-4 mb-4">
        {appointmentHistory}
      </h2>
      {/* List Section */}
      <div
        className="max-h-64 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-[#F0F0F2]
  dark:[&::-webkit-scrollbar-thumb]:bg-primary-color"
      >
        {appointments && appointments.length > 0 ? (
          <div
            className="max-h-full pr-8 relative"
            style={{ paddingRight: "15px" }}
          >
            <div
              className="absolute left-3 top-0 h-full"
              style={{ borderLeft: "2px solid #A51008", paddingRight: "5px" }}
            ></div>

            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="mb-8 flex items-start relative"
              >
                <div className="w-6 h-6 bg-primary-color rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <p className="text-black/70 font-medium">
                    {lng.with}{" "}
                    <span className="underline">
                      {appointment.doctorDetail.user.name}
                    </span>
                  </p>
                  <div className="text-gray-500 text-[13px] font-light">
                    {format(appointment.createdAt, "EEEE, dd MMMM yyyy", {
                      locale: language === "EN" ? enGB : de,
                    })}{" "}
                    <br />
                    {format(appointment.appointmentTime, "hh:mm")} -{" "}
                    {format(
                      addMinutesToIsoDate(appointment.appointmentTime, 30),
                      "hh:mm"
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleView(appointment.id)}
                  className="flex ml-auto items-center p-2 text-primary-color border border-primary-color rounded-md hover:bg-primary-color hover:text-white"
                >
                  {lng.view}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className=" text-center">{lng.noAppointment}</div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
