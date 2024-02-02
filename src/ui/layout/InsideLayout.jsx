import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { Suspense, useEffect, useState } from "react";
import Login from "../../auth/login";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";

const InsideLayout = () => {
  const navigate = useNavigate();
  const [openLoginModal, setOpenLoginModal] = useState(true);
  const token = !!localStorage.getItem("userToken");

  // Modal close
  useEffect(() => {
    if (!openLoginModal) {
      console.log("openLoginModal ");
      navigate("/");
    }
  }, [openLoginModal]);

  if (!token) {
    // modalOpener();
    return (
      <Login
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
      />
    );
  }

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
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default InsideLayout;
