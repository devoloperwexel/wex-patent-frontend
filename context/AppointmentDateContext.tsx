"use client"

import { createContext, useState, useContext, ReactNode } from "react";

export type AppointmentDateContextType = {
  appointmentDate?: Date;
  setAppointmentDate: (date: Date) => void;
};

export const AppointmentDateContext = createContext<
  AppointmentDateContextType | undefined
>(undefined);

type AppointmentDateProviderProps = {
  children: ReactNode;
};

export const AppointmentDateProvider: React.FC<
  AppointmentDateProviderProps
> = ({ children }) => {
  const [appointmentDate, setAppointmentDate] = useState<Date>();

  return (
    <AppointmentDateContext.Provider
      value={{ appointmentDate, setAppointmentDate }}
    >
      {children}
    </AppointmentDateContext.Provider>
  );
};

