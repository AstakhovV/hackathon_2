import React, { useEffect, useState } from "react";
import AppRouter from "./Components/AppRouter";
import { withRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Breadcrumbs from "./Components/UI/Breadcrumbs";

export default withRouter(function App({ location }) {
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [crumbs, setCrumbs] = useState([currentPath]);
  const selectedItem = (crumb) => {
    if (crumb === "Home") {
      setCrumbs(["Home"]);
      window.location.href = "/";
    } else {
      setCrumbs([...crumbs], crumb);
      window.location.href = "/" + crumb;
    }
  };

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
    const splitPathname = pathname.split("/");
    const filterSplitPathname = splitPathname.filter((item) => {
      return item !== "";
    });
    setCrumbs(["Home", ...filterSplitPathname]);
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <Breadcrumbs crumbs={crumbs} selectedItem={selectedItem} />
      <AppRouter />
    </>
  );
});
