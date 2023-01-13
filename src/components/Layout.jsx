import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="movies">Movie</NavItem>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
