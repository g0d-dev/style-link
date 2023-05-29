const escapeKeyDown = (setFn, boolean) => {
  window.onkeydown = function (event) {
    if (event.key === "Escape") {
      console.log("a");
      setFn(boolean);
    }
  };
};

export default escapeKeyDown;
