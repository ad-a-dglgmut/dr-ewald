import { $toastContent, $toastStyle } from "@/service/stateStore";
import { useStore } from "@nanostores/react";
import { Toast } from "flowbite-react";

const ToastElem = () => {
  const toastContent = useStore($toastContent);
  const toastStyle = useStore($toastStyle);
  return (
    <div className={toastStyle}>
      <Toast>
        <div className="ml-3 mr-10 text-sm font-normal">{toastContent} </div>
        <Toast.Toggle onDismiss={()=>$toastStyle.set("transform opacity-0 duration-300")}/>
      </Toast>
    </div>
  );
};

export default ToastElem;
