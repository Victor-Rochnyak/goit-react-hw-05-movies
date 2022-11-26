import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
// стилі
import{Div} from './Layout.styled'
export const Layout = () => {
  return (
    <Div >
      <AppBar />
      <Outlet />
      
    </Div>
  );
};
