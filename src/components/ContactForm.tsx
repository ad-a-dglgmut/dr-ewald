import { DATA_EN, DATA_DEU } from "@/service/data";
import { $toastContent, $toastStyle } from "@/service/stateStore";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactFont = () => {
  const [contact, setContact] = useState<string>("");
  let lang: any;
  if (
    window.location.pathname === "/" ||
    window.location.pathname.slice(0, 3) === "/de"
  ) {
    lang = DATA_DEU;
  } else {
    lang = DATA_EN;
  }
  const scrWidth = window.innerWidth;

  const getContact = (event: any) => {
    if (event.currentTarget) {
      setContact(event.currentTarget.value);
    }
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    emailjs.send(
      "service_fo49vua",
      "template_jse3e3q",
      {
        message: JSON.stringify(contact),
      },
      "MseNp_851WIBfmDQx"
    );
  };

  const openToast = () => {
    $toastContent.set(lang.sentMessage)
    $toastStyle.set("transform opacity-100 duration-300")
    console.log("test")

  }
  return (
    <form className="mt-6 mb-6" onSubmit={submitHandler}>
      <div className={` flex `}>
        <input
          onChange={getContact}
          type="text"
          className=" mr-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          placeholder={lang.inputPlaceholder}
        />

            <button
              className="text-white rounded text-sm bg-orange-500 font-semibold pl-2 pr-2 w-24"
              type="submit"
              onClick={openToast}
            >
              {lang.btnMsg}
            </button>
          {/* <div>{lang.sentMessage}</div> */}
      </div>
    </form>
  );
};

export default ContactFont;
