/* eslint-disable @typescript-eslint/no-var-requires */
const { domain } = require("./site.config");
module.exports = {
  siteUrl: domain,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
