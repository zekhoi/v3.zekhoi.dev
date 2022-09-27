import { techList } from "@/components/icons/TechIcons";

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<"ul">;

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">;

export type SVGForCardProps = {
  className: string;
};

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;
