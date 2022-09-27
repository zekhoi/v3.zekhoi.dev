import clsxm from "@/lib/clsxm";

import { ButtonProps } from "@/types/global";

const Button = ({
  className = "rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-danger-500 active:bg-danger-700 hover:scale-[1.03] active:scale-[0.97]",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={clsxm(className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
