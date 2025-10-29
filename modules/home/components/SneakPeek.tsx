"use client"

import { Box, styled, Typography } from "@mui/material";
import RowWithCircle from "./RowWithCircle";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner4.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const SneakPeek = () => {
  const { language } = useLanguage();
  const {
    wearable_integrations,
    ai_automation,
    pain_level_monitoring,
    pay_if_right,
    personalized_plan,
    smart_exercise_recommendations,
    progress_tracking_analysis,
    real_time_monitoring,
    sneak,
  } = lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ImageBox />
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 8,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <Typography fontSize={50} fontWeight="bold" align="center">
          {sneak}
        </Typography>
        <Box display={"flex"} justifyContent="space-between" gap={16}>
          <div>
            <RowWithCircle text={pay_if_right} />
            <RowWithCircle text={wearable_integrations} />
            <RowWithCircle text={ai_automation} />
            <RowWithCircle text={pain_level_monitoring} />
          </div>
          <div>
            <RowWithCircle text={personalized_plan} />
            <RowWithCircle text={smart_exercise_recommendations} />
            <RowWithCircle text={progress_tracking_analysis} />
            <RowWithCircle text={real_time_monitoring} />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default SneakPeek;
