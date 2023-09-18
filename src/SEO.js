import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@utils/SEOConfig";
import logo from "@assets/seo.png";

const MetaTag = () => {
  return (
    <Helmet>
      <title>2023 CARDINAL</title>
      <meta
        property="keywords"
        content="서강대학교, 축제사이트"
        data-rh="true"
      />
      <meta property="name" content={config?.title} data-rh="true" />
      <meta
        property="description"
        content={config?.description}
        data-rh="true"
      />
      <meta property="image" content={config?.imgsrc} data-rh="true" />
      <meta property="og:site_name" content={config?.title} data-rh="true" />
      <meta
        property="og:url"
        content="https://www.sgucardinal.com"
        data-rh="true"
      />
      <meta
        property="og:title"
        content={"2023 CARDINAL : 응답하라 서강"}
        data-rh="true"
      />
      <link rel="canonical" href="https://www.sgucardinal.com" data-rh="true" />
      <meta
        property="og:image"
        content={config?.imgsrc || logo}
        data-rh="true"
      />
      <meta
        property="og:description"
        content={"2023 CARDINAL : 응답하라 서강"}
        data-rh="true"
      />
      <meta property="twitter:title" content={config?.title} data-rh="true" />
      <meta
        property="twitter:description"
        content={config?.description}
        data-rh="true"
      />
      <meta
        property="twitter:image"
        content={config?.imgsrc || logo}
        data-rh="true"
      />
    </Helmet>
  );
};

export default MetaTag;
