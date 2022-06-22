import './header.scss'

const Header = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers?.map((header) => (<th key={header}>{header}</th>))}
      </tr>
    </thead>
  );
};

export default Header;
