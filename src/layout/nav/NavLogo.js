import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';

const NavLogo = () => {
  return (
    <div className="logo position-relative">
      <Link to={DEFAULT_PATHS.APP}>
        <div className="imgs">
          <img src="/img/favicon/favicon2.png" alt="logo" />
        </div>
      </Link>
    </div>
  );
};
export default React.memo(NavLogo);
