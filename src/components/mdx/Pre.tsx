import { ComponentPropsWithRef } from "react";

const Pre = (props: ComponentPropsWithRef<"pre">) => {
  return (
    <pre {...props}>
      {props.children}
      <style jsx>{`
        pre {
          position: relative;
          padding-top: 2.5rem;
        }
      `}</style>
    </pre>
  );
};

export default Pre;
