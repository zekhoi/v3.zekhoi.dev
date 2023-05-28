import NextLink from "next/link";

import UnstyledLink from "@/components/links/UnstyledLink";

import { socials } from "~root/data/site.config";

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-4 bg-white dark:bg-gray-900">
      <div className="justify-center pt-6 border-t border-gray-300 container-custom dark:border-gray-600">
        <div className="flex flex-col text-center">
          <div className="flex items-center justify-center my-4 space-x-2 text-gray-600 dark:text-gray-300">
            {socials.map(({ href, label }) => (
              <UnstyledLink
                key={`${href}${label}`}
                href={href}
                className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
              >
                {label}
              </UnstyledLink>
            ))}
          </div>
          <p className="flex items-center justify-center my-2 space-x-4 text-xs font-semibold text-gray-600 dark:text-gray-300 sm:text-sm">
            © {new Date().getFullYear()} -{"  "}
            <NextLink href="/">
              <span className="ml-1 font-semibold text-gray-800 dark:text-gray-100">
                Khoironi Kurnia Syah
              </span>
            </NextLink>{" "}
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
