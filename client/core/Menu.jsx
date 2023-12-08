import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link, withRouter } from 'react-router-dom';
import auth from './../auth/auth-helper';
import cart from './../cart/cart-helper';

const Menu = withRouter(({ history }) => {
  const isActive = (path) => {
    return history.location.pathname === path ? { color: '#bef67a' } : { color: '#ffffff' };
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
          NEW WEBSEC WEARS
        </Typography>
        <div>
          <Link to="/">
            <Button style={isActive('/')} color="inherit">
              Home
            </Button>
          </Link>
          <Link to="/shops/all">
            <Button style={isActive('/shops/all')} color="inherit">
              All Shops
            </Button>
          </Link>
          <Link to="/cart">
            <Button style={isActive('/cart')} color="inherit">
              Cart
              <Badge color="secondary" badgeContent={cart.itemTotal()}>
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>
        </div>
        <div>
          {auth.isAuthenticated() ? (
            <span>
              {auth.isAuthenticated().user.seller && (
                <Link to="/seller/shops">
                  <Button style={isActive('/seller/')} color="inherit">
                    My Shops
                  </Button>
                </Link>
              )}
              <Link to={`/user/${auth.isAuthenticated().user._id}`}>
                <Button style={isActive(`/user/${auth.isAuthenticated().user._id}`)} color="inherit">
                  My Profile
                </Button>
              </Link>
              <Button color="inherit" onClick={() => auth.clearJWT(() => history.push('/'))}>
                Sign out
              </Button>
            </span>
          ) : (
            <span>
              <Link to="/signup">
                <Button style={isActive('/signup')} color="inherit">
                  Sign up
                </Button>
              </Link>
              <Link to="/signin">
                <Button style={isActive('/signin')} color="inherit">
                  Sign In
                </Button>
              </Link>
            </span>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default Menu;
