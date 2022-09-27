import { HiMenu } from "react-icons/hi";

import clsxm from "@/lib/clsxm";

import { ButtonProps } from "@/types/global";
const MenuButton = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsxm(
        "flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-500",
        className
      )}
      {...rest}
    >
      <HiMenu className="h-5 w-5" />
    </button>
  );
};

export default MenuButton;
