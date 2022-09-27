import NextLink from "next/link";

import UnstyledLink from "@/components/links/UnstyledLink";

import { socials } from "~root/site.config";

const Footer = () => {
  return (
    <footer className="mt-4 w-screen bg-white py-4 dark:bg-gray-900">
      <div className="container-custom justify-center border-t border-gray-300 pt-6 dark:border-gray-600">
        <div className="flex flex-col text-center">
          <div className="my-4 flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
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
          <p className="my-2 flex items-center justify-center space-x-4 text-xs font-semibold text-gray-600 dark:text-gray-300 sm:text-sm">
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
