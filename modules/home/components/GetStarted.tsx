"use client";

import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";
import { useRouter } from "next/navigation";

const GetStarted = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/signin");
  };
  const { language } = useLanguage();
  const { start_improving_health, now, getStartedNow, exclusive_discounts } =
    lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      sx={{
        backgroundColor: "#F9F5F5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 9.6,
      }}
    >
      <Typography fontSize={44} fontWeight="700">
        {start_improving_health}
        <span style={{ color: "#A51008" }}> {now}</span>
      </Typography>
      <Typography
        fontSize={28}
        color={"#1E1E1E"}
        sx={{ opacity: 0.7, marginBottom: 4, marginTop: 2 }}
      >
        {exclusive_discounts}
      </Typography>
      <ContainedButton
        onClick={handleClick}
        sx={{ height: 50, width: 170, fontSize: 17 }}
      >
        {getStartedNow}
      </ContainedButton>
    </Box>
  );
};

export default GetStarted;
