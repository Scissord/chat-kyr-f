import { FC } from "react";

type IIconMoonProps = {
  fill: string;
};

export const IconMoon: FC<IIconMoonProps> = ({ fill }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      height="1.4em"
			width="1.4em"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}