import { FC } from "react";

type IIconSunProps = {
  fill: string;
};

export const IconSun: FC<IIconSunProps> = ({ fill }) => {
  return (
		<svg
      fill={fill}
			viewBox="0 0 512 512"
			height="1.4em"
			width="1.4em"
		>
			<path
				fill="none"
				stroke={fill}
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
			/>
			<path
				fill="none"
				stroke={fill}
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M336 256 A80 80 0 0 1 256 336 A80 80 0 0 1 176 256 A80 80 0 0 1 336 256 z"
			/>
		</svg>
  );
}