import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@utils/SEOConfig";
import logo from "@assets/logo.png";

const MetaTag = () => {
  return (
    <Helmet>
      <title>2023 CARDINAL : 응답하라 서강</title>
      <meta itemProp="keywords" content="분실물" />
      <meta itemProp="name" content={config?.title} />
      <meta itemProp="description" content={config?.description} />
      <meta itemProp="image" content={config?.imgsrc} />
      <meta property="og:site_name" content={config?.title} />
      <meta itemProp="og:url" content="https://www.sgucardinal.com" />
      <meta property="og:title" content={"2023 CARDINAL : 응답하라 서강"} />
      <link rel="canonical" href="https://www.sgucardinal.com" />
      <meta itemProp="og:image" content={config?.imgsrc || logo} />
      <meta
        itemProp="og:description"
        content={"2023 CARDINAL : 응답하라 서강"}
      />
      <meta itemProp="twitter:title" content={config?.title} />
      <meta itemProp="twitter:description" content={config?.description} />
      <meta itemProp="twitter:image" content={config?.imgsrc || logo} />
    </Helmet>
  );
};

export default MetaTag;
