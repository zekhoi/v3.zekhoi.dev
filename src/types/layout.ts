import { Dispatch, SetStateAction } from "react";

export type NavItemProps = {
  href: string;
  label: string;
};

export type SectionProps = {
  label?: string;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
};

export type SectionType = {
  data: SectionProps;
};

export type DrawerProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  children: React.ReactNode;
};
