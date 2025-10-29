"use client";


import { Box, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import { useLanguage } from "hooks/useLanguage";
import { lngs } from "i18n/language1";

const Blog = () => {
  const { language } = useLanguage();
  const { learnBlog } = lngs[language.toLowerCase() as keyof typeof lngs].home;
  return (
    <Box paddingTop={8}>
      <Typography
        fontSize={45}
        fontWeight="bold"
        align="center"
        marginBottom={5}
      >
        {learnBlog}
      </Typography>
      <Box display={"flex"} justifyContent={"center"} gap={14}>
        <BlogCard
          title={
            language === "EN"
              ? "Autumn Is Hiking Season"
              : "Herbstzeit ist Wanderzeit"
          }
          imageUrl="/images/blog1.jpg"
          text={
            language === "EN"
              ? "Autumn is here, marking the peak of the hiking season. Hiking has long been a popular leisure activity among young and old alike and continues to be a growing trend."
              : "Es wird Herbst und somit startet die Hochsaison des Wanderns. Seit langem erfreut sich diese Freizeitbeschäftigung über große Beliebtheit bei Alt und Jung und liegt immer mehr voll im Trend."
          }
          link="/blogs/1"
        />
        <BlogCard
          title={
            language === "EN"
              ? "Modern Physiotherapy"
              : "Moderne Physiotherapie"
          }
          imageUrl="/images/blog2.jpg"
          text={
            language === "EN"
              ? "Physiotherapy has evolved significantly over the past decades and has become an essential part of healthcare today."
              : "Die Physiotherapie hat sich in den letzten Jahrzehnten enorm weiterentwickelt und ist heute ein unverzichtbarer Bestandteil des Gesundheitswesens."
          }
          link="/blogs/2"
        />
        <BlogCard
          title={language === "EN" ? "Back Pain" : "Rückenschmerzen"}
          imageUrl="/images/blog3.jpg"
          text={
            language === "EN"
              ? "Have any of you ever experienced back pain without a clear cause? It appears suddenly and can disrupt our daily lives—whether at work, at home, or during leisure activities."
              : "Wer von euch hatte schon einmal Rückenschmerzen ohne klare Ursache? Sie treten plötzlich auf und beeinträchtigen unseren Alltag, sei es bei der Arbeit, im Haushalt oder in der Freizeit."
          }
          link="/blogs/3"
        />
      </Box>
    </Box>
  );
};

export default Blog;
