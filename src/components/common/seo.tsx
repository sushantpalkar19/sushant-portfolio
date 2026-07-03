import { useEffect } from "react";
import { SITE_CONFIG } from "@/constants/site";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
};

function setMetaByName(name: string, content?: string) {
  if (!content) {
    return;
  }

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property: string, content?: string) {
  if (!content) {
    return;
  }

  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href?: string) {
  if (!href) {
    return;
  }

  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export function Seo({ title, description, canonical, image, noindex = false }: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMetaByName("description", description ?? SITE_CONFIG.description);
    setMetaByName("robots", noindex ? "noindex" : "index, follow");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description ?? SITE_CONFIG.description);
    setMetaByName("twitter:image", image ?? `${SITE_CONFIG.siteUrl}/images/og-cover.svg`);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description ?? SITE_CONFIG.description);
    setMetaByProperty("og:url", canonical ?? SITE_CONFIG.siteUrl);
    setMetaByProperty("og:image", image ?? `${SITE_CONFIG.siteUrl}/images/og-cover.svg`);

    setCanonical(canonical ?? SITE_CONFIG.siteUrl);
  }, [canonical, description, image, noindex, title]);

  return null;
}
