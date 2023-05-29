const escapeKeyDown = () => {
  window.onkeydown = function (event) {
    if (event.key === "Escape") {
      console.log("escape pressed");
    }
  };
};

export default escapeKeyDown;
