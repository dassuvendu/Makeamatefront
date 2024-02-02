import React from "react";
import { Link } from "react-router-dom";
import {
  allTagIcon,
  chatMemoriesIcon,
  editoChoiseIcon,
  mostpopularIcon,
  newIcon,
  recentHitsIcon,
  trendingIcon,
} from "../../assets/images/images";
import TagsList from "../../pages/Tags/TagsList";
import {
  AiFillBulb,
  AiFillCreditCard,
  BiSolidUser,
  BsPencilFill,
} from "../../assets/icons";
import { FilterType } from "../../Constants/Constants";

const Sidebar = () => {
  const token = localStorage.getItem("userToken");

  if (token) {
    return (
      <div className="sidebar_area px-3 md:px-0">
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-none">
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/create-character"
            >
              <AiFillBulb className="iconcolor text-2xl mr-2" />
              Create a Character
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/edit-character"
            >
              <BsPencilFill className="iconcolor text-xl mr-2" />
              Edit Character
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/profile"
            >
              <BiSolidUser className="iconcolor text-2xl mr-1" />
              My Profile
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/pricing"
            >
              <AiFillCreditCard className="iconcolor text-2xl mr-2" />
              Pricing
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/subscription-history"
            >
              <AiFillCreditCard className="iconcolor text-2xl mr-2" />
              Subscription History
            </Link>
          </li>
          <li className="mb-0 md:mb-1">
            <div className="group">
              <Link className="flex items-center text-base md:text-base lg:text-base font-medium text-black">
                <img src={allTagIcon} className="mr-2" />
                All tags
              </Link>
              <TagsList />
            </div>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/dashboard"
              state={{ filter: FilterType.POPULAR }}
            >
              <img src={mostpopularIcon} className="mr-2" />
              Most Popular
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/dashboard"
              state={{ filter: FilterType.POPULAR }}
            >
              <img src={trendingIcon} className="mr-2" />
              Trending
            </Link>
          </li>
          <li className="mb-0 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/dashboard"
              state={{ filter: FilterType.EDITERS_CHOICE }}
            >
              <img src={editoChoiseIcon} className="mr-2" />
              Editors' Choice
            </Link>
          </li>
          {/* <li className='mb-0 md:mb-3 text-center'>
            <Link
              className='flex items-center text-base md:text-base lg:text-base font-medium text-black'
              to='/'
            >
              <img src={chatMemoriesIcon} className='mr-2' />
              Chat Memories
            </Link>
          </li> */}
          {/* <li className='mb-0 md:mb-3 text-center'>
            <Link
              className='flex items-center text-base md:text-base lg:text-base font-medium text-black'
              to='/dashboard'
              state={{ filter: FilterType.RECENT_HITS }}
            >
              <img src={recentHitsIcon} className='mr-2' />
              Recent Hits
            </Link>
          </li> */}
          <li className="mb-4 md:mb-3 text-center">
            <Link
              className="flex items-center text-base md:text-base lg:text-base font-medium text-black"
              to="/"
            >
              <img src={newIcon} className="mr-2" />
              New
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="sidebar_area px-3 md:px-0">
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-none">
          <li className="mb-0 md:mb-3">
            <div className="group">
              <Link className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black">
                <img src={allTagIcon} className="mr-2" />
                All tags
              </Link>
              <TagsList />
            </div>
          </li>
          <li className="mb-0 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
              state={{ filter: FilterType.POPULAR }}
            >
              <img src={mostpopularIcon} className="mr-2" />
              Most Popular
            </Link>
          </li>
          <li className="mb-0 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
              state={{ filter: FilterType.POPULAR }}
            >
              <img src={trendingIcon} className="mr-2" />
              Trending
            </Link>
          </li>
          <li className="mb-0 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
              state={{ filter: FilterType.EDITERS_CHOICE }}
            >
              <img src={editoChoiseIcon} className="mr-2" />
              Editors' Choice
            </Link>
          </li>
          {/* <li className="mb-0 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
            >
              <img src={chatMemoriesIcon} className="mr-2" />
              Chat Memories
            </Link>
          </li> */}
          {/* <li className="mb-0 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
              state={{ filter: FilterType.RECENT_HITS }}
            >
              <img src={recentHitsIcon} className="mr-2" />
              Recent Hits
            </Link>
          </li> */}
          <li className="mb-4 md:mb-6 text-center">
            <Link
              className="flex items-center text-base md:text-lg lg:text-xl font-medium text-black"
              to="/"
            >
              <img src={newIcon} className="mr-2" />
              New
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
