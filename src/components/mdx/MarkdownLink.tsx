import clsx from "clsx";
import NextLink from "next/link";

import { UnstyledLinkProps } from "@/types/global";

const MarkdownLink = ({
  children,
  href,
  newTab,
  className = "font-bold hover:scale-[1.03] active:scale-[0.97] border-dashed border-b border-primary-500",
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    newTab !== undefined
      ? newTab
      : href && !href.startsWith("/") && !href.startsWith("#");
  if (!isNewTab) {
    return (
      <NextLink href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </a>
  );
};

export default MarkdownLink;
