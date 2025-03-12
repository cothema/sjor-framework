"use client"

import {getCookie, setCookie} from "cookies-next";
import {FC, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

type SetConsentType = (consent: boolean) => void;

type CookieConsentProps = {
  setCookiesConsent: SetConsentType;
}

export const CookiesConsentDialog: FC<CookieConsentProps> = ({setCookiesConsent}) => {
  const [showConsentDialog, setShowConsentDialog] = useState(false);

  useEffect(() => {
    const checkCookie = async () => {
      const consentValue: string | undefined = await getCookie("localConsent") as string | undefined;
      setShowConsentDialog(consentValue !== "true" && consentValue !== "false");
      setCookiesConsent(consentValue === "true");
    };
    checkCookie();
  }, []);

  const acceptCookie = () => {
    setShowConsentDialog(false);
    setCookie("localConsent", "true", {});
    setCookiesConsent(true);
  };

  const declineCookie = () => {
    setShowConsentDialog(false);
    setCookie("localConsent", "false", {});
    setCookiesConsent(false);
  };

  if (!showConsentDialog) {
    return;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-black text-base mr-8">
          K účelům zlepšování služeb a cílení reklam využíváme cookies.
          Souhlasem nám pomůžete rozvíjet naše služby. <a href={"/podminky#"}>Více o podmínkách <FontAwesomeIcon
          icon={faArrowRight}/></a>
        </span>
        <div>
          <button className="bg-gray-700 py-2 px-6 mx-2 my-1 rounded text-white font-bold"
                  onClick={() => declineCookie()}>
            Nesouhlasím
          </button>
          <button className="bg-green-600 py-2 px-6 mx-2 my-1 rounded text-white font-bold"
                  onClick={() => acceptCookie()}>
            Souhlasím&nbsp;<FontAwesomeIcon icon={faCheck}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsentDialog;
