import { Typography } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imageUrl: string;
  text: string;
  link: string;
};
const BlogCard = ({ title, imageUrl, text, link }: Props) => {
  const { language } = useLanguage();
  const { learnmore } = lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <div style={{ width: "280px" }}>
      <Typography fontWeight="bold">{title}</Typography>
      <Image
        src={imageUrl}
        alt={""}
        width={280}
        height={180}
        style={{ marginBottom: 12, marginTop: 12 }}
      />
      <Typography sx={{ opacity: 0.7, fontSize: 14, paddingRight: 3 }}>
        {text}
      </Typography>
      <Link href={link}>
        <Typography
          sx={{
            color: "#A51008",
            fontSize: 14,
            paddingRight: 3,
            marginTop: 2.4,
          }}
        >
          {learnmore}
        </Typography>
      </Link>
    </div>
  );
};

export default BlogCard;
