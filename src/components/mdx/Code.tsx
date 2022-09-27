import { ComponentPropsWithRef, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiCheckCircle, HiClipboard } from "react-icons/hi";

const Code = (props: ComponentPropsWithRef<"code">) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const language = props.className?.includes("language")
    ? props.className.replace("language-", "").replace(" code-highlight", "")
    : null;

  return (
    <code {...props} data-code-type={language && "code-block"}>
      {language ? (
        <div ref={textRef} className="overflow-x-auto">
          {props.children}
        </div>
      ) : (
        <span>{props.children}</span>
      )}

      {language && (
        <div className="absolute top-0 left-6 rounded-b bg-primary-500 px-3 py-1">
          <span className="select-none font-bold uppercase text-white">
            {language}
          </span>
        </div>
      )}
      {language && (
        <CopyToClipboard
          text={textRef?.current?.textContent ?? ""}
          onCopy={() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
          }}
        >
          <button className="absolute top-2 right-2 hidden rounded border border-gray-600 p-2 text-lg transition-colors hover:bg-gray-700 md:block">
            {isCopied ? (
              <HiCheckCircle className="text-green-400" />
            ) : (
              <HiClipboard />
            )}
          </button>
        </CopyToClipboard>
      )}
    </code>
  );
};
export default Code;
