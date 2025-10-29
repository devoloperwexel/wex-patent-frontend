"use client";

import ContainedButton from "@/components/ui/ContainedButton";
import { Box, styled, Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";
import { useRouter } from "next/navigation";

const SecondBox = styled(Box)({
  width: "50%",
  height: "600px",
  backgroundImage: "url(/images/main-banner.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const Banner = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/signin");
  };
  const { language } = useLanguage();
  const { experienceOpt, healthWith, yrSmart, getStartedNow } =
    lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#F9F5F5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontSize={50} fontWeight="bold" sx={{ lineHeight: 1.3 }}>
            {experienceOpt}
            <br /> {healthWith}
            <span style={{ color: "#A51008", marginLeft: "6px" }}>
              WexelCode
            </span>
          </Typography>
          <Typography marginTop={1.6} marginBottom={1.5} fontSize={21}>
            {yrSmart}
          </Typography>
          <ContainedButton onClick={handleClick} sx={{ height: 50 }}>
            {getStartedNow}
          </ContainedButton>
        </Box>
      </Box>

      <SecondBox />
    </Box>
  );
};

export default Banner;
