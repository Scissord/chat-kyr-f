import { FC, useContext, useState } from "react";
import { useLoginMutation } from "@store/api/authApi";
import { useAppDispatch, useNavigate } from "@hooks";
import { setUser, setAccessToken } from "@store/reducers/authSlice";
import { ViewContext } from "@context";

const css = {
  container: `
    flex w-[80%] lg:w-[60%] h-[80vh] lg:h-[70vh] border border-gray-300
    dark:border-neutral-200 rounded-xl shadow-2xl
    shadow-neutral-400 dark:shadow-none
  `,
  left_section: `
    hidden xl:flex items-center justify-center w-1/2
    border-r border-gray-300 dark:border-neutral-200
    h-full rounded-xl
  `,
  right_section: `
    w-full xl:w-1/2 h-full flex flex-col items-center
    justify-between py-6 lg:py-12
  `,
}

interface SignupError {
  data?: {
    error: string;
  };
  message?: string;
};

const SignIn: FC = () => {
  const context = useContext(ViewContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isError, isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const res = await login({ name, password }).unwrap();
      dispatch(setUser(res.user));
      dispatch(setAccessToken(res.accessToken));
      navigate("/");
    } catch (error) {
      console.error('Failed to login:', error);
      const typedError = error as SignupError;
      console.error("Login failed:", typedError);
      console.error("Login failed:", error);
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    }
  };

  return (
    <div className={css.container}>
      <section className={css.left_section}>
        <img src="pics/auth-form-bg.svg" alt="auth-form-bg"/>
      </section>
      <section className={css.right_section}>
        <img src="pics/logo.png" alt="logo" className="w-16 sm:w-20"/>
        <p className="text-3xl font-bold text-black dark:text-white">Приветствуем!</p>
        <p
          className="text-lg text-gray-400 break-words text-center px-6"
        >
          Пожалуйста введите данные для продолжения.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 w-[70%]">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow w-full"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd" />
            </svg>
            <input
              type="password"
              className="grow w-full"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button onClick={() => handleLogin()} className="btn btn-active btn-secondary text-white" disabled={isLoading}>
          Войти
        </button>
        {isError && <div className="text-red-500">Ошибка, попробуйте ещё раз.</div>}
      </section>
    </div>
  );
};

export default SignIn
