"use client";


import InstagramSVG from "@/components/icons/InstagramSvg";
import LinkedinSvg from "@/components/icons/LinkedinSvg";
import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Link, Typography } from "@mui/material";
import CustomAccordion from "@/components/ui/CustomAccordion";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const Faq = () => {
  const { language } = useLanguage();
  const { faq, feelingInq, moreQuestions, weWouldLove, contactUs, faqLabel } =
    lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box
      id="faq"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: 12,
        marginTop: 14,
      }}
    >
      <div style={{ width: "60%" }}>
        <Typography fontSize={40} fontWeight="bold">
          {faqLabel}
        </Typography>
        <Typography fontSize={22}>{feelingInq}</Typography>
        <Typography fontSize={40} fontWeight="bold" marginTop={6}>
          {moreQuestions}
        </Typography>
        <Typography fontSize={22}>{weWouldLove}</Typography>
        <Link href="/contact">
          {" "}
          <ContainedButton
            sx={{ width: 170, height: 45, marginTop: 2, marginBottom: 3 }}
          >
            {contactUs}
          </ContainedButton>
        </Link>
        <Box display={"flex"} gap={3} paddingLeft={2.4}>
          <Link href={"https://www.instagram.com/wexel_code"}>
            <InstagramSVG />
          </Link>
          <Link href={"https://www.linkedin.com/company/85636861"}>
            <LinkedinSvg />
          </Link>
        </Box>
      </div>
      <div>
        {faq.map((e, i) => (
          <CustomAccordion key={i} title={e.title} text={e.text} />
        ))}
      </div>
    </Box>
  );
};

export default Faq;
