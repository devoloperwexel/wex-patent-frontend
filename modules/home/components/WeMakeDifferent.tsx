"use client"

import HeartSVG from "@/components/icons/HeartSvg";
import ThumbUpSVG from "@/components/icons/ThumbUpSvg";
import { Box, styled, Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const ImageBox = styled(Box)({
  width: "40%",
  height: "700px",
  backgroundImage: "url(/images/banner2.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const WeMakeDifferent = () => {
  const { language } = useLanguage();
  const {
    we_make_a_difference,
    personalized_physiotherapy,
    accessibility,
    fair_and_simple,
    pay_if_right,
    quality_care,
    certified_treatment,
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
          paddingTop: 12,
          paddingLeft: 16,
        }}
      >
        <Typography fontSize={50} fontWeight="bold" sx={{ lineHeight: 1.3 }}>
          {we_make_a_difference}
        </Typography>
        <Typography marginTop={1.4} marginBottom={1.5} fontSize={21}>
          {personalized_physiotherapy}
          <br />
          {accessibility}
        </Typography>

        <Box
          display={"flex"}
          gap={4}
          marginBottom={7}
          marginTop={8}
          alignItems={"center"}
        >
          <HeartSVG />
          <div className="div">
            <Typography fontWeight={700}>{fair_and_simple}</Typography>
            <Typography>{pay_if_right}</Typography>
          </div>
        </Box>
        <Box display={"flex"} gap={4} alignItems={"center"}>
          <ThumbUpSVG />
          <div className="div">
            <Typography fontWeight={700}>{quality_care}</Typography>
            <Typography>{certified_treatment}</Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default WeMakeDifferent;
