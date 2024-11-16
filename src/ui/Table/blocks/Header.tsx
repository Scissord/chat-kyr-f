import { FC } from 'react'
import { IHeader } from '@interfaces';

type HeaderProps = {
  headers: IHeader[];
};

const css = {
  th: `
    bg-white dark:bg-dbg
    text-black dark:text-white
  `,
};

const Header: FC<HeaderProps> = (props) => {
  const { headers } = props;

  return (
    <tr>
      {headers.map((header) => (
        <th
          key={header.value}
          className={css.th}
        >
          {header.label}
        </th>
      ))}
    </tr>
  );
};

export default Header;
