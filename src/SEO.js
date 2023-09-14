import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@utils/SEOConfig";
import logo from "@assets/logo.png";

const MetaTag = () => {
  return (
    <Helmet
      title={"2023 CARDINAL : 응답하라 서강"}
      meta={[
        { itemProp: "keywords", content: "분실물" },
        { itemProp: "name", content: config?.title },
        { itemProp: "description", content: config?.description },
        { itemProp: "image", content: config?.imgsrc },
        {
          property: "og:site_name",
          content: config.title,
        },
        {
          itemProp: "og:url",
          content: `https://www.sgucardinal.com`,
        },
        { rel: "canonical", href: `https://www.sgucardinal.com` },
        {
          itemProp: "og:image",
          content: config?.imgsrc ? config?.imgsrc : logo,
        },
        {
          itemProp: "og:description",
          content: config?.description,
        },
        {
          itemProp: "twitter:title",
          content: config?.title,
        },
        {
          itemProp: "twitter:description",
          content: config?.description,
        },
        {
          itemProp: "twitter:image",
          content: config?.imgsrc ? config?.imgsrc : logo,
        },
      ]}
    />
  );
};

export default MetaTag;
