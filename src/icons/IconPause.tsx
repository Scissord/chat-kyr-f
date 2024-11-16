// icon:pause | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react";

export function IconPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="white"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2.5em"
      width="2.5em"
      {...props}
    >
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  );
}
