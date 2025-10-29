"use client";


import { Box, Typography } from "@mui/material";
import WorkItem from "./WorkItem";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const HowItWorks = () => {
  const { language } = useLanguage();
  const {
    howWorks,
    medicalScreening,
    personalizedTreatment,
    callWithPhysio,
    under,
    questionnaire,
    fillOut,
    optimize,
    rehab,
    connectWith,
  } = lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      paddingTop={8}
      paddingBottom={7.5}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
    >
      <Typography fontSize={45} fontWeight="bold">
        {howWorks}
      </Typography>
      <Box
        width={"100%"}
        paddingX={28}
        display={"flex"}
        gap={16}
        justifyContent={"center"}
        marginTop={2}
      >
        <WorkItem arrow title={medicalScreening} url="/images/medical-scan.png">
          {fillOut}
          <br />
          {questionnaire}
        </WorkItem>
        <WorkItem arrow title={callWithPhysio} url="/images/camera.png">
          {connectWith}
          <br />
          {under}
        </WorkItem>
        <WorkItem title={personalizedTreatment} url="/images/injured.png">
          {optimize}
          <br />
          {rehab}
        </WorkItem>
      </Box>
    </Box>
  );
};

export default HowItWorks;
