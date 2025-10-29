import {
  AppointmentDateContext,
  AppointmentDateContextType,
} from "context/AppointmentDateContext";
import { useContext } from "react";

export const useAppointmentDate = (): AppointmentDateContextType => {
  const context = useContext(AppointmentDateContext);
  if (!context) {
    throw new Error(
      "useAppointmentDate must be used within an AppointmentDateProvider"
    );
  }
  return context;
};
