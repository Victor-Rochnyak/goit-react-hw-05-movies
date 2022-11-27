
import { Header, Nav,NavItem} from './AppBar.styled';
const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movie' },
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
