import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAi } from "../../store/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const{isAuthenticated}= useSelector((state) => state.auth.data);

  const handleLogin = () =>{
    dispatch(logoutAi);
  }
  return (
    <div data-cy="navbar" 
    style={{
      display:"flex",
      gap:"20px",
      justifyContent:"space-between",
      padding:"10px"
    }}
    >
      <div >
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">Logo</Link>
      </div>
      <div style={{display:"flex", gap:"20px"}}>
        <div data-cy="navbar-cart-items-count">Cart</div>
        <button data-cy="navbar-login-logout-button" onClick={handleLogin}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
