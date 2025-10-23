import { useState, useEffect } from "react"; 
const TABLET_BREAKPOINT = 768;
export function useDetectMobile() {
  const [isLikelyMobile, setIsLikelyMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkDeviceSize = () => {
      setIsLikelyMobile(window.innerWidth < TABLET_BREAKPOINT);
    };
    checkDeviceSize();

    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);
  return isLikelyMobile ?? false;
}