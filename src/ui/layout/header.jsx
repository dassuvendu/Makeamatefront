import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal, Label, TextInput } from "flowbite-react";
import logo from "../../assets/imagesource/logo.png";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  FaFacebookF,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
  PiDiscordLogoFill,
  AiOutlineGoogle,
} from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/AuthSlice";
import Login from "../../auth/login";
import { editProfile } from "../../reducers/MyProfileSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const { profile } = useSelector((state) => state.profile);

  const loginHandler = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
  };

  const token = !!localStorage.getItem("userToken");

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem, flag = null) => {
    setActiveMenuItem(menuItem);
    console.log("nenuItem", menuItem);
    if (flag == "blog") {
      location.href = "https://makeamate.com/blog/";
    }
  };

  // logout function
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      dispatch(editProfile());
    }
  }, [token]);

  return (
    <>
      <div className="header_section w-full max-w-7xl mx-auto">
        <div className="pt-3 pb-3 px-3 md:px-3 md:pt-6 md:pb-12 flex">
          <div className="w-1/6">
            <Link to="/">
              <img src={logo} className="md:w-24 lg:w-36" />
            </Link>
          </div>
          <div className="w-5/6">
            <div className="header_top flex justify-between mb-0 md:mb-12 flex-row-reverse md:flex-row md:contents xl:flex">
              <div className="main_menu w-1/5 md:w-full lg:w-3/5">
                <Navbar fluid rounded className="bg-transparent">
                  <div className="flex md:order-2">
                    <Navbar.Toggle className="text-black bg-transparent hover:bg-transparent" />
                  </div>
                  <Navbar.Collapse className="w-80 rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item1")}
                        active
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item2" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        // to={token ? '/inside-about-us' : '/about-us'}
                        to="/about-us"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item3" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item3")}
                        to="/create-character"
                      >
                        Create a Character
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        className={
                          activeMenuItem === 'item4' ? 'active' : 'text-black'
                        }
                        onClick={() => handleMenuItemClick('item4')}
                        to='/profile'
                      >
                        Profile
                      </NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink
                        className={
                          activeMenuItem === 'item5' ? 'active' : 'text-black'
                        }
                        onClick={() => handleMenuItemClick('item5')}
                        to='/pricing'
                      >
                        Pricing
                      </NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink
                        className={
                          activeMenuItem === 'item6' ? 'active' : 'text-black'
                        }
                        onClick={() => handleMenuItemClick('item6')}
                        to='/bonus'
                      >
                        Bonus
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item6" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item7", "blog")}
                        // to="https://makeamate.com/blog/"
                        to="javascript:void(0)"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item6" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item8")}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </Navbar.Collapse>
                </Navbar>
              </div>
              <div className="flex items-center justify-end w-4/5 md:w-full lg:w-2/5 mt-0 lg:mt-0">
                <ul className="flex justify-end gap-1 mr-1 md:mr-4">
                  <li>
                    <Link className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-pink-500 text-sm lg:text-lg text-white flex justify-center items-center transition ease-in-out hover:bg-cyan-600">
                      {/* <FaTelegramPlane /> */}
                      <FaInstagramSquare />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-800 text-sm lg:text-lg text-white flex justify-center items-center transition ease-in-out hover:bg-blue-700"
                      to="https://discord.gg/3SDDT7rUnA"
                      target="_blank"
                    >
                      {/* <FaFacebookF /> */}
                      <PiDiscordLogoFill />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-cyan-400 text-sm lg:text-lg text-white flex justify-center items-center transition ease-in-out hover:bg-cyan-500"
                      to="https://twitter.com/makeamatedotcom"
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-red-700 text-sm lg:text-lg text-white flex justify-center items-center transition ease-in-out hover:bg-red-800"
                      to="https://www.youtube.com/channel/UCUwCq7EjEbq9MKGUIASMVzQ"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
                <ul className="flex justify-end items-center gap-1 md:ml-2">
                  {!token && (
                    <li>
                      <Button
                        onClick={loginHandler}
                        className="create_character_btn shadow-xl w-auto h-6 lg:w-auto lg:h-8 px-0 rounded-full text-sm lg:text-lg flex justify-center items-center transition ease-in-out"
                      >
                        <AiOutlineLogin className=" hover:text-white mr-1" />{" "}
                        <p className="text-[10px] md:text-sm capitalize">
                          Login/Register
                        </p>
                      </Button>
                    </li>
                  )}
                  {token && (
                    <>
                      {profile?.details?.first_name && (
                        <li className="mr-2">
                          <p>
                            Welcome,{" "}
                            <span className="font-bold text-red-800">
                              {profile.details.first_name}
                            </span>
                          </p>
                        </li>
                      )}
                      <li>
                        <Button
                          onClick={() => handleLogout()}
                          className="create_character_btn shadow-xl w-auto h-6 lg:w-auto lg:h-8 px-0 rounded-full text-sm lg:text-lg flex justify-center items-center transition ease-in-out"
                        >
                          <AiOutlineLogout className=" hover:text-white mr-1" />
                          <p className="text-sm">Logout</p>
                        </Button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="header_bottom md:mt-6 lg:mt-0">
              <h1 className="text-base md:text-3xl lg:text-6xl md:pr-20 lg:pr-40 font-medium text-black pl-3">
                Create character ai chatbot <span>with your custom story</span>
              </h1>
            </div>
          </div>
        </div>
        {/* Login Modal start here */}
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      </div>
    </>
  );
};

export default Header;
