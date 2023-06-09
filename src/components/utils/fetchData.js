import baseInstance from "../../api/index";

export const fetchData = async (url, setFn) => {
  try {
    const res = await baseInstance.get(url);
    setFn(res);
  } catch (err) {
    console.error(err);
  }
};
