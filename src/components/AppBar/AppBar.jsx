
import { Header, Nav,NavItem} from './AppBar.styled';
const navItems = [
  { href: 'Home', text: 'Home' },
  { href: 'Movie', text: 'Movie' },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav >
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Nav>
    </Header>
  );
};
