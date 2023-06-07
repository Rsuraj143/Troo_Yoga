import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ServiceData } from "../ServiceComponent/ServiceData";
import { BlogData } from "../BlogComponent/BlogData";
import { HeaderData } from "../Header/HeaderData";

const BannerGlobal = () => {
  const [heading, setHeading] = useState();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    const pathnamee = location.pathname.split("/").filter((p) => !!p);
    const breadcrumbs = pathnamee.map((e, i) => ({
      title: e,
      path: `/${pathnamee.slice(0, i + 1).join("/")}`,
    }));
    setBreadcrumbs(breadcrumbs);
  }, [location]);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      if (pathName.includes("Classes_Details")) {
        const sData = ServiceData.find((e) => e.id == id);
        setHeading(sData.name);
      }
      if (pathName.includes("Blog_Details")) {
        const bData = BlogData.find((e) => e.id == id);
        setHeading(bData.name);
      }
    } else {
      const data = HeaderData.find((data) => {
        if (data?.subNav) {
          const subTitel = data?.subNav?.find((s) => s.path === pathName);
          if (subTitel) {
            return data;
          }
        } else if (data.path === pathName) {
          return data;
        }
      });

      if (data?.subNav) {
        const obj = data?.subNav.find((s) => s.path === pathName);
        setHeading(obj.heading);
      } else {
        setHeading(data.heading);
      }
    }
  }, []);

  return (
    <section className="breadcrumb_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ol className="breadcrumb">
              {breadcrumbs.map((breadcrumb, index) => (
                <li
                  className={`breadcrumb-item${
                    index === breadcrumbs.length - 1 ? " active" : ""
                  }`}
                >
                  <Link key={index} to={breadcrumb.path}>
                    {breadcrumb.title.replace(/_/g, " ")}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="breadcrumb_outer">
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerGlobal;
