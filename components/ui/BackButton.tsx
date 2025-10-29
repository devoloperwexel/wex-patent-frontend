import React from "react";
import ContainedButton from "./ContainedButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLanguage } from "hooks/useLanguage";
import { languages } from "i18n/languages";

type Props = {
  onClick: () => void;
};
const BackButton = ({ onClick }: Props) => {
  const { language } = useLanguage();
  const { back } = languages[language.toLowerCase() as keyof typeof languages];

  return (
    <ContainedButton startIcon={<ArrowBackIosNewIcon />} onClick={onClick}>
      {back}
    </ContainedButton>
  );
};

export default BackButton;
