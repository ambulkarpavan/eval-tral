import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAi } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {isAuthenticated} = useSelector((state) => state.auth.data);
  const [logindata, setLogindata] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleOnChange= (e) =>{
    const {name,value} = e.target;
    setLogindata({
      ...logindata,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAi(logindata));
  };

  useEffect(() => {
    if(isAuthenticated){
      navigate(location.state.pathname || "/" , {replace: true});
    }
  }, [navigate,isAuthenticated]);

  return (
    <div>
      Login
      <form 
      onSubmit={handleSubmit}
      style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        margin:"auto",
        maxWidth:"200px"
      }}
      >
        <input data-cy="login-email" 
        name="email"
        type="email"
        placeholder="Enter email"
        value={logindata.email}
        onChange={handleOnChange}

        />
        <input data-cy="login-password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={logindata.password}
        onChange={handleOnChange}
        />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
