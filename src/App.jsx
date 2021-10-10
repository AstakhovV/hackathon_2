import React, { useEffect, useState } from "react";
import AppRouter from "./Components/Route/AppRouter";
import { withRouter } from "react-router-dom";
import NavBar from "./Components/Route/NavBar";
import Breadcrumbs from "./Components/UI/Breadcrumbs";

export default withRouter(function App({ location }) {
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [crumbs, setCrumbs] = useState([currentPath]);
  const selectedItem = (crumb) => {
    if (crumb === "Home") {
      setCrumbs(["Home"]);
      window.location.href = "/hackathon_2/";
    } else {
      setCrumbs([...crumbs], crumb);
      window.location.href = "/hackathon_2/" + crumb;
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
  }, [location]);

  return (
    <>
      <NavBar />
      <Breadcrumbs crumbs={crumbs} selectedItem={selectedItem} />
      <AppRouter />
    </>
  );
});
