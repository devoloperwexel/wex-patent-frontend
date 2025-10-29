import { Box, Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { language } = useLanguage();
  const {
    contact,
    company,
    help,
    imprint,
    term,
    about,
    pricing,
    blog,
    faqLabel,
    contactUs,
    phone,
    fax,
  } = lngs[language.toLowerCase() as keyof typeof lngs].home;

  const { email } = lngs[language.toLowerCase() as keyof typeof lngs].profile;
  return (
    <footer style={{ backgroundColor: "#A51008" }}>
      <Box width={"100%"} color={"#ffffff"}>
        <Box
          display={"flex"}
          justifyContent="space-around"
          paddingTop={6}
          paddingBottom={3.5}
          marginTop={8}
        >
          <div>
            <Link href="/">
              <Image src={"/images/logo2.png"} alt="" width={80} height={50} />
            </Link>
            <Typography sx={{ fontWeight: "700" }} marginTop={1}>
              Wexelcode GmbH
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Maisacher Str. 118
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              82256 Fürstenfeldbruck, Germany
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              {contact}
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>
              {`${phone} : 08141 3538 433`}
            </Typography>
            {/* <Typography sx={{ fontWeight: "300" }}>
              {`${fax} : 08141 3538 434`}
            </Typography> */}
            <Typography sx={{ fontWeight: "300" }}>
              {`${email} : contact@wexelcode.de`}
            </Typography>
          </div>
          {/* <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              {company}
            </Typography>
            <Typography sx={{ fontWeight: "300" }}>{about}</Typography>
            <Typography sx={{ fontWeight: "300" }}>{pricing}</Typography>
            <Typography sx={{ fontWeight: "300" }}>{blog}</Typography>
          </div> */}
          <div>
            <Typography
              sx={{ fontWeight: "700" }}
              fontSize={20}
              marginBottom={2}
            >
              {help}
            </Typography>
            <Link href="/contact">
              <Typography sx={{ fontWeight: "300" }}>{contactUs}</Typography>
            </Link>
          </div>
        </Box>
        <Box paddingY={2} sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 1)" }}>
          <Typography align="center" fontSize={13}>
            <Link href="/imprint" style={{ marginRight: 4 }}>
              {imprint}
            </Link>
            <Link href="/terms" style={{ marginRight: 4 }}>
              {term}
            </Link>
            <Link href="/contact" style={{ marginRight: 4 }}>
              {contactUs}
            </Link>
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
