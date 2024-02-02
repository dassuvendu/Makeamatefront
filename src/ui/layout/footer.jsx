import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  return (
    <div className="footer_container py-4 md:py-6 px-4">
      <div className="md:flex text-center justify-between w-full max-w-7xl mx-auto">
        <div className="mb-1 md:mb-0">
          <ul className="flex items-center justify-center">
            <li className="px-2">
              <Link
                to="/community-guidelines"
                className="text-xs md:text-sm text-white"
              >
                Community Guidelines
              </Link>
            </li>
            <li className="px-2">
              <Link
                to="/privacy-policy"
                className="text-xs md:text-sm text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="px-2">
              <Link
                to="/Terms-of-Use"
                className="text-xs md:text-sm text-white"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xs md:text-sm text-white">
          makeamate © {today.getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
