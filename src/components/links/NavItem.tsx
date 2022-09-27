import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { NavItemProps } from "@/types/layout";

const NavItem = ({ href, label }: NavItemProps) => {
  const router = useRouter();
  const paths = router.route.split("/");
  const route = "/" + paths[1];
  const isActive = route === href;

  return (
    <NextLink href={href}>
      <a
        className={clsx(
          isActive
            ? "font-bold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-300",
          "rounded p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-500 sm:px-3 sm:py-2 md:inline-block"
        )}
      >
        <span>{label}</span>
      </a>
    </NextLink>
  );
};

export default NavItem;
