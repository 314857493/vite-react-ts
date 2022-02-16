import React from "react";
import styles from "./App.module.less";
import { RouteBox } from "./Router";
// import routes from "@/Router";
// import { useRoutes } from "react-router";

const App = () => {
  // console.log(routes);
  // const elements = useRoutes(routes);
  // console.log(elements);
  return <div className={styles.App}>{<RouteBox />}</div>;
};

export default App;
