import { useState } from "react";

import './index.styles.css'

const LoginPage = () => {
  const [user, setUser] = useState({mail: '', password: ''});
  const handleInputOnChange = ({ currentTarget: { name, value } }: React.ChangeEvent<HTMLInputElement> ) => {
    setUser((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="loginContainer">
      <div className="inputsContainer">
        <div className="inputWrapper">
          <label htmlFor="mail">Mail</label>
          <input
            type="text"
            name="mail"
            value={user.mail}
            onChange={handleInputOnChange}
            className="editBioInput"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputOnChange}
            className="editBioInput"
          />
        </div>
      </div>
      <button>Log in</button>
    </div>
  )
};

export default LoginPage;