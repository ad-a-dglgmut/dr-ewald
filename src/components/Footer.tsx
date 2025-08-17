import { DATA_DEU, DATA_EN } from "@/service/data";
import logo from "../img/logoden.png";

import gzm from "../img/gzm-praxis.png"


const Footer = () => {
  let lang: any;
  if (
    window.location.pathname === "/" ||
    window.location.pathname.slice(0, 3) === "/de"
  ) {
    lang = DATA_DEU;
  } else {
    lang = DATA_EN;
  }
  return (
    <>
      <div className=" bg-slate-100 mt-40 dark:bg-gray-900 mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang.f1}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="">
                  <a >
                    {lang.f2}
                  </a>
                </li>
                <li>
                  <a
                  >
                    {lang.f3}
                  </a>
                </li>
                <li>
                  {lang.f4}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang.follow}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063767641784"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/zahnpraxis?igshid=ZGUzMzM3NWJiOQ=="
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline"></a>
                </li>
                <li>
                  <a>Taxpunktwert 1.15</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            @Parallax 2023
          </span>
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            <a href="http://www.gzm.org/">
              <img src={gzm} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
