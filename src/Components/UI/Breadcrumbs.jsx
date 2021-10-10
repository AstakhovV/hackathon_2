import React from "react";
import "../../Layouts/index.scss"

const Breadcrumbs = ({ crumbs, selectedItem }) => {
  const isLast = (index) => {
    return index === crumbs.length - 1;
  };
  return (
        crumbs.length === 1 ? null :
            <nav className="row justify-content-center mt-4 ml-4">
              <ol className="breadcrumb px-4">
                {crumbs.map((crumb, ci) => {
                  const disabled = isLast(ci) ? "disabled" : "";

                  return (
                      <li key={ci} className="breadcrumb-item">
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
