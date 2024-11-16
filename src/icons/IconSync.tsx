import * as React from "react";
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export function IconSync(props: React.SVGProps<SVGSVGElement>) {
  const theme = useAppSelector(selectTheme);

  return (
    <svg
      viewBox="0 0 24 24"
      fill={theme === 'dark' ? 'white' : 'black'}
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M17.65 6.35A7.958 7.958 0 0012 4a8 8 0 00-8 8 8 8 0 008 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18a6 6 0 01-6-6 6 6 0 016-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
    </svg>
  );
};
