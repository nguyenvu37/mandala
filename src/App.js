import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import routes from "./routes";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Waiting from "./common/waiting";
import "./sass/style.scss";
import "react-animated-slider/build/horizontal.css";
import "react-credit-cards/es/styles-compiled.css";
import { NotificationContainer } from "react-notifications";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={require("./assets/img/welcome.jpg")} alt="Loading..." />
        </div>
      ) : (
        <Suspense
          fallback={
            <Waiting
              custom={{ position: "relative", top: "300px", left: "50%" }}
            />
          }
        >
          <Router>
            <Switch>
              {routes.map((config, i) => {
                const component = lazy(() => import(`${config.component}`));
                return (
                  <Route
                    key={"routes" + i}
                    exact
                    title={config.title}
                    path={config.path}
                    component={component}
                  />
                );
              })}
            </Switch>
          </Router>
          <NotificationContainer />
        </Suspense>
      )}
    </Fragment>
  );
}

export default App;
