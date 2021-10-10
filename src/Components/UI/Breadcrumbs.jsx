import React from "react";

const Breadcrumbs = ({ crumbs, selectedItem }) => {
  const breadcrumbs = {
    backgroungColor: "white",
    border: "1px solid rgba(0,0,0,0.125)",
    borderRadius: "0.37rem",
    paddingLeft: "10px",
  };

  const isLast = (index) => {
    return index === crumbs.length - 1;
  };

  return (
    <nav className="row justify-content-center mt-4 ml-4">
      <ol className="breadcrumb" style={breadcrumbs}>
        {crumbs.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";

          return (
            <li key={ci} className="breadcrumb-item align-items-center">
              <button
                className={`btn btn-link ${disabled}`}
                onClick={() => selectedItem(crumb)}
              >
                {crumb}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
