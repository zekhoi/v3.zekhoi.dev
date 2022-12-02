import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import clsxm from "@/lib/clsxm";

import { ButtonProps } from "@/types/global";

const ThemeButton = ({ className, ...rest }: ButtonProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={clsxm(
        "flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-500",
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <HiOutlineMoon className="w-5 h-5" />
      ) : (
        <HiOutlineSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeButton;
