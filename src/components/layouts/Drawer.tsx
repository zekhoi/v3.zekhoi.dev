import { HiX } from "react-icons/hi";

import clsxm from "@/lib/clsxm";

import Button from "@/components/buttons/Button";
import Logo from "@/components/icons/Logo";

import { DrawerProps } from "@/types/layout";

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <>
      <div
        className={clsxm(
          "fixed z-10 h-screen w-screen bg-gray-800 opacity-50 md:hidden",
          {
            ["hidden"]: !isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={clsxm(
          "fixed z-20 h-screen w-72 overflow-y-auto border-r border-gray-400 bg-white duration-300 dark:border-gray-600 dark:bg-gray-900 md:hidden",
          {
            ["translate-x-0 transition-all"]: isOpen,
            ["-translate-x-full transition-all"]: !isOpen,
          }
        )}
      >
        <div className="container px-4 py-4">
          <div className="mb-3 flex justify-between">
            <Logo />
            <Button
              className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiX />
            </Button>
          </div>
          <div className="flex flex-col space-y-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
