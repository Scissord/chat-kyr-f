import { FC } from 'react';
import { IconSun, IconMoon } from "@icons";
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export const ColorModeButton: FC = () => {
  const theme = useAppSelector(selectTheme);
  const color = 'white'

  return (
		<>
			{
        theme === 'light'
          ? <IconMoon fill={color}/>
          : <IconSun fill={color}/>
      }
		</>
	)
};
