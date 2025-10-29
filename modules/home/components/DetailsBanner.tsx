"use client"

import AimSvg from "@/components/icons/AimSvg";
import PhysiosSvg from "@/components/icons/PhysiosSvg";
import TubeSVG from "@/components/icons/TubeSvg";
import { Box, styled, Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner3.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const DetailsBanner = () => {
  const { language } = useLanguage();
  const {
    personalizedTreatment,
    rigorous_science,
    built_by_physios,
    made_by_physios,
    adheres_to_gold_standard,
    whereAdvanced,
  } = lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 12,
          paddingLeft: 16,
        }}
      >
        <Box
          display={"flex"}
          gap={4}
          marginBottom={7}
          marginTop={8}
          alignItems={"center"}
        >
          <AimSvg />
          <div className="div">
            <Typography fontWeight={700}>{personalizedTreatment}</Typography>
            <Typography>{whereAdvanced}</Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={3} marginBottom={7} alignItems={"center"}>
          <TubeSVG />
          <div className="div">
            <Typography fontWeight={700}>{rigorous_science}</Typography>
            <Typography>{adheres_to_gold_standard}</Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <PhysiosSvg />
          <div className="div">
            <Typography fontWeight={700}>{made_by_physios}</Typography>
            <Typography>{built_by_physios}</Typography>
          </div>
        </Box>
      </Box>
      <ImageBox />
    </Box>
  );
};

export default DetailsBanner;
