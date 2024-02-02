/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { Suspense } from "react";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const OutsideLayout = ({ children }) => {
  console.log("out ->", children);
  // // Checking if an user already logged in
  // const token = !!localStorage.getItem('userToken');
  // if (token) {
  //   return <Navigate to='/dashboard' />;
  // }
  return (
    <div className="container-fluid overflow-hidden p-0">
      <Header />
      <ScrollToTop />
      <div className="wrapper_section mb-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="md:flex md:px-3">
            <div className="md:w-3/12 lg:w-1/6">
              <Sidebar />
            </div>
            <div className="md:w-9/12 lg:w-5/6">
              <Suspense fallback={"loading.."}>
                <Outlet />
                {/* {child} */}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default OutsideLayout;
