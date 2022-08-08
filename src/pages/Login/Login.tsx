import { useForm, Controller } from "react-hook-form";
import "./Login.css";
import { loginValidation, passwordValidation } from "./validationLogin";

interface Props {
  addUser: (x: any) => void;
}

type FormData = {
  login: string;
  password: string;
};

export function Login({ addUser }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
     if (data) {
      addUser(data);
    }
  });

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper bg-blue-300 opacity-85">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7782/7782690.png"
              alt=""
              className="icon"
            />
            Google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form className="right" onClick={onSubmit}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <input
                placeholder="Username"
                className="input-login"
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <span className="peer-invalid:visible text-red-700 font-light">
            {errors.login?.message}
          </span>
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <input
                className="input-login"
                placeholder="Password"
                type="password"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <span className="peer-invalid:visible text-red-700 font-light">
            {errors.password?.message}
          </span>
          <button className="submit" type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
