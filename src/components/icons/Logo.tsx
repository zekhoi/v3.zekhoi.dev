import { useRouter } from "next/router";

import clsxm from "@/lib/clsxm";

import UnstyledLink from "@/components/links/UnstyledLink";

const Logo = () => {
  const router = useRouter();
  const isActive = router.asPath === "/";

  return (
    <UnstyledLink className="text-2xl font-extrabold" href="/">
      zekhoi
      <span
        className={clsxm({
          ["text-danger-500"]: isActive,
          ["text-primary-500"]: !isActive,
        })}
      >
        .
      </span>
    </UnstyledLink>
  );
};

export default Logo;
