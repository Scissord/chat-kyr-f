import { FC } from "react";
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export const IconReload: FC = (props: React.SVGProps<SVGSVGElement>) =>  {
  const theme = useAppSelector(selectTheme);

  return (
    <svg
      viewBox="0 0 20 20"
      fill={theme === 'dark' ? 'white' : '#000'}
      height="1.6em"
      width="1.6em"
      {...props}
    >
      <path d="M14.66 15.66A8 8 0 1117 10h-2a6 6 0 10-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z" />
    </svg>
  );
}