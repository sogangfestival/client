import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@utils/SEOConfig";
import logo from "@assets/logo.png";

const MetaTag = () => {
  return (
    <Helmet>
      <title>2023 CARDINAL : 응답하라 서강</title>
      <meta property="keywords" content="분실물" />
      <meta property="name" content={config?.title} />
      <meta property="description" content={config?.description} />
      <meta property="image" content={config?.imgsrc} />
      <meta property="og:site_name" content={config?.title} />
      <meta property="og:url" content="https://www.sgucardinal.com" />
      <meta property="og:title" content={"2023 CARDINAL : 응답하라 서강"} />
      <link rel="canonical" href="https://www.sgucardinal.com" />
      <meta property="og:image" content={config?.imgsrc || logo} />
      <meta
        property="og:description"
        content={"2023 CARDINAL : 응답하라 서강"}
      />
      <meta property="twitter:title" content={config?.title} />
      <meta property="twitter:description" content={config?.description} />
      <meta property="twitter:image" content={config?.imgsrc || logo} />
    </Helmet>
  );
};

export default MetaTag;
