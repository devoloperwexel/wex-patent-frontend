"use client";

import { useLanguage } from "hooks/useLanguage";
import { languages } from "i18n/languages";
import { lngs } from "i18n/language1";
import { useRouter } from "next/navigation";

type Props = {
  isMedicalScreeningComplete: boolean;
};
const Reminder = ({ isMedicalScreeningComplete }: Props) => {
  const router = useRouter();
  const { language } = useLanguage();
  const { reminder } =
    languages[language.toLowerCase() as keyof typeof languages].reminder;

  const { reminder: msg } =
    lngs[language.toLowerCase() as keyof typeof languages].dashboard;
  const { goToScreening: goToScreeningText } =
    lngs[language.toLowerCase() as keyof typeof languages].screening;
  const goToScreening = () => {
    router.push("/medical-screening/questionnaire");
  };
  return (
    <div>
      {!isMedicalScreeningComplete && (
        <div className="bg-[#ECD0CF] p-4  text-center text-2xl flex justify-between items-center w-full">
          <div className="flex">
            <p className="font-black text-black mr-2">{reminder} :</p>
            <p className="font-medium ">{msg}</p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px] px-16"
              onClick={goToScreening}
            >
              {goToScreeningText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminder;
