import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { parseJson } from '@utils';

type PrivateRouteTypes = {
  children: ReactNode
};

export const PrivateRoute = (props: PrivateRouteTypes) => {
  const { children } = props;

  // Получение данных из localStorage
  const userString = localStorage.getItem("user");
  const accessToken = localStorage.getItem("accessToken");

  // Парсинг данных
  const user = parseJson(userString);

  if (user && accessToken) {
    return children;
  }

  // user is not authenticated
  return <Navigate to='/login' />;
}