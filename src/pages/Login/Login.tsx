import './Login.css';

export function Login() {
    const google = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
  
    const facebook = () => {
      window.open("http://localhost:5000/auth/facebook", "_self");
    };
  
    return (
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
              <img src="https://cdn-icons-png.flaticon.com/512/7782/7782690.png" alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
              <img src="https://cdn-icons-png.flaticon.com/512/747/747543.png" alt="" className="icon" />
              Facebook
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    );
  };