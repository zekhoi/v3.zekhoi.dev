// eslint-disable-next-line @typescript-eslint/no-var-requires
const site = require("./site.config");

module.exports = {
  titleTemplate: "%s | " + site.name,
  defaultTitle: site.name,
  description: site.description,
  canonical: site.domain || "https://zekhoi.dev",
  noindex: false,
  nofollow: false,
  openGraph: {
    url: process.env.MYDOMAIN,
    title: site.name,
    description: site.description,
    images: [
      {
        url: site.domain + site.thumbnail,
        width: 1920,
        height: 1080,
        alt: site.description,
      },
    ],
    site_name: site.name,
  },
  twitter: {
    handle: "@zekhoi",
    site: "@zekhoi",
    cardType: "summary_large_image",
  },
};
