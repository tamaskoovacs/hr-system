import { HeaderProps } from 'interfaces/interfaces';
import './header.scss';

const Header: React.FC<HeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers?.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
