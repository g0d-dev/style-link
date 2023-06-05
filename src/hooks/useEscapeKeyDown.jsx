import { useEffect } from "react";

const useEscapeKeyDown = (setFn) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFn(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setFn]);
};

export default useEscapeKeyDown;
