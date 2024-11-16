import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorLayout } from "@layout";
import { PrivateRoute } from '@components';
import { NotFound } from '@pages/NotFound';
import { SocketContextProvider, View } from '@context';
import routes from '@routes';

function App() {
  return (
    <SocketContextProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.layout === "app" ? (
                  <PrivateRoute>
                    <View
                      title={route.title}
                      layout={route.layout}
                      display={route.element}
                    />
                  </PrivateRoute>
                ) : route.layout === 'auth' && (
                  <View
                    title={route.title}
                    layout={route.layout}
                    display={route.element}
                  />
                )
              }
            />
          ))}

          {/* 404 */}
          <Route
            path="*"
            element={
              <ErrorLayout display={NotFound}/>
            }
          />
        </Routes>
      </Router>
    </SocketContextProvider>
  );
};

export default App;
