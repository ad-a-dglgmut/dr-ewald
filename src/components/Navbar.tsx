import logo from "../img/logoden.png";
import "../App.css";
import { DATA_DEU, DATA_EN } from "@/service/data";
import { Dropdown } from "flowbite-react";
import { Navbar } from "flowbite-react";

const NavbarComp = () => {
  const navTog = {
    collapse: {
      base: "w-full 2xl:block 2xl:w-auto",
      list: "mt-4 flex flex-col 2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:text-sm 2xl:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
  };
  let langDec: string;
  let link: string;
  let lang: any;
  const changeLan = (input: string) => {
    if (input === "DEU") {
      if (window.location.pathname === "/") {
        window.open("/de/", "_self");
      } else {
        if (window.location.pathname.slice(0, 3) != "/de") {
          window.open(window.location.pathname.replace("en", "de"), "_self");
        }
      }
    } else {
      if (window.location.pathname === "/") {
        window.open("/en/", "_self");
      } else {
        if (window.location.pathname.slice(0, 3) != "/en") {
          window.open(window.location.pathname.replace("de", "en"), "_self");
        }
      }
    }
  };
  let scrWidth = window.innerWidth;

  if (
    window.location.pathname === "/" ||
    window.location.pathname.slice(0, 3) === "/de"
  ) {
    link = "de";
    lang = DATA_DEU;
    langDec = "DEU";
  } else {
    link = "en";
    lang = DATA_EN;
    langDec = "EN";
  }

  if (scrWidth >= 1800) {
    return (
      <div className=" bg-slate-100 w-full py-4 text-lg font-semibold justify-center flex items-center top-0 fixed z-50 ">
        <div className=" absolute left-12">
          <div className="flex">
            <div className="mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem1}</p>}
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/our-philosophy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar1}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/contact`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/our-team`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/gallery`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/blog`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>Blog</a>
                </div>
              </Dropdown>
            </div>
            <div className="mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem2}</p>}
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/neural-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/focal-interference-field-diagnostics`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS3}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/scenar-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/decoder-dermography`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/material-selection-and-testing`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ozone`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/homeopathy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdSbjorn}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ear-oral-acupuncture`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS8}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-reflex`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS9}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/amalgam-restoration`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS11}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-fear`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar4}</a>
                </div>
              </Dropdown>
            </div>
            <div className="mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem3}</p>}
              >
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/professional-teeth-cleaning`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL1}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/filling-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/root-canal`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/crowns-and-bridges`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/protheses`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/pediatric-dentistry`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/lumineers`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.lTitle}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/teeth-whitening`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/implantology`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL1}</a>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            window.open(`/${link}/`, "_self");
          }}
          className=" rounded-full p-20 left-[39vw] bg-slate-100 absolute hover:cursor-pointer"
        >
          <img src={logo} alt="" />
        </div>

        <div className="h-[92px]"></div>
        <div className="absolute flex h-full items-center right-12">
          <a
            href={`/${link}/periodontitis`}
            className={"mr-6 hover:text-orange-500"}
          >
            {lang.navitem7}
          </a>
          <a
            href={`/${link}/cmd-headache`}
            className={"mr-6 hover:text-orange-500"}
          >
            {lang.navitem5}
          </a>
          <a
            href={`/${link}/holistic-orthodontics`}
            className={"mr-6 hover:text-orange-500"}
          >
            {lang.navitem6}
          </a>
          <div id="select" className=" bg-orange-500 px-3 py-1 rounded-lg">
            <Dropdown
              inline
              label={<p className=" text-white font-semibold">{langDec}</p>}
            >
              <div
                onClick={() => {
                  changeLan("DEU");
                }}
                className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
              >
                <a>DEU</a>
              </div>
              <div
                onClick={() => {
                  changeLan("EN");
                }}
                className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
              >
                <a>EN</a>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  } else if (scrWidth <= 768) {
    return (
      <div className="top-0 fixed z-50 w-full">
        <Navbar fluid className=" bg-slate-100 font-semibold">
          <Navbar.Brand href={`/${link}/`}>
            <img alt="" className="mr-3 py-2" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link>
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem1}</p>}
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/our-philosophy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar1}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/contact`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/our-team`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/gallery`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/blog`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>Blog</a>
                </div>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link>
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem2}</p>}
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/neural-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/focal-interference-field-diagnostics`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS3}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/scenar-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/decoder-dermography`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/material-selection-and-testing`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ozone`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/homeopathy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdSbjorn}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ear-oral-acupuncture`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS8}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-reflex`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS9}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/amalgam-restoration`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS11}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-fear`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar4}</a>
                </div>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link>
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem3}</p>}
              >
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/professional-teeth-cleaning`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL1}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/filling-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/root-canal`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/crowns-and-bridges`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/protheses`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/pediatric-dentistry`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/lumineers`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.lTitle}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/teeth-whitening`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/implantology`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL1}</a>
                </div>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link
              href={`/${link}/periodontitis`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem7}
            </Navbar.Link>
            <Navbar.Link
              href={`/${link}/cmd-headache`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem5}
            </Navbar.Link>
            <Navbar.Link
              href={`/${link}/holistic-orthodontics`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem6}
            </Navbar.Link>
            <Navbar.Link>
              <div id="select" className=" bg-orange-500 px-3 py-1 rounded-lg">
                <Dropdown
                  inline
                  label={
                    <>
                      <p className=" text-white font-semibold">{langDec}</p>
                    </>
                  }
                >
                  <div
                    onClick={() => {
                      changeLan("DEU");
                    }}
                    className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                  >
                    <a> DEU</a>
                  </div>
                  <div
                    onClick={() => {
                      changeLan("EN");
                    }}
                    className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                  >
                    <a>EN</a>
                  </div>
                </Dropdown>
              </div>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div className=" flex justify-center bg-slate-100 w-full px-2 top-0 fixed z-50">
        <div className=" block">
          <div className=" w-full flex mb-5 justify-center">
            <div
              onClick={() => {
                window.open(`/${link}/`, "_self");
              }}
              className=" hover:cursor-pointer"
            >
              <img src={logo} alt="" />
            </div>
          </div>
          <div className=" mb-3 font-semibold flex">
            <div className=" mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem1}</p>}
                className=" mr-6"
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/our-philosophy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar1}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/contact`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/our-team`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/gallery`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/blog`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>Blog</a>
                </div>
              </Dropdown>
            </div>
            <div className=" mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem2}</p>}
                className=" mr-6"
              >
                <div
                  onClick={() => {
                    window.open(`/${link}/neural-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/focal-interference-field-diagnostics`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS3}</a>
                </div>

                <div
                  onClick={() => {
                    window.open(`/${link}/scenar-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/decoder-dermography`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/material-selection-and-testing`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS6}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ozone`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/homeopathy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdSbjorn}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/ear-oral-acupuncture`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS8}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-reflex`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS9}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/amalgam-restoration`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.hdS11}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/dental-fear`, "_self");
                  }}
                  className=" hover:cursor-pointer px-5 py-2 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.homepagesidebar4}</a>
                </div>
              </Dropdown>
            </div>
            <div className="mr-6">
              <Dropdown
                inline
                label={<p className="hover:text-orange-500">{lang.navitem3}</p>}
              >
                <div
                  onClick={() => {
                    window.open(
                      `/${link}/professional-teeth-cleaning`,
                      "_self"
                    );
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL1}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/filling-therapy`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/root-canal`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL3}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/crowns-and-bridges`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL4}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/protheses`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL5}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/pediatric-dentistry`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.tdL7}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/lumineers`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.lTitle}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/teeth-whitening`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL2}</a>
                </div>
                <div
                  onClick={() => {
                    window.open(`/${link}/implantology`, "_self");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>{lang.otL1}</a>
                </div>
              </Dropdown>
            </div>
            <a
              href={`/${link}/periodontitis`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem7}
            </a>
            <a
              href={`/${link}/cmd-headache`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem5}
            </a>
            <a
              href={`/${link}/holistic-orthodontics`}
              className={"mr-6 hover:text-orange-500"}
            >
              {lang.navitem6}
            </a>
            <div id="select" className=" bg-orange-500 px-3 py-1 rounded-lg">
              <Dropdown
                inline
                label={<p className=" text-white font-semibold">{langDec}</p>}
              >
                <div
                  onClick={() => {
                    changeLan("DEU");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>DEU</a>
                </div>
                <div
                  onClick={() => {
                    changeLan("EN");
                  }}
                  className=" hover:cursor-pointer py-2 px-5 hover:text-white hover:bg-orange-500"
                >
                  <a>EN</a>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NavbarComp;
