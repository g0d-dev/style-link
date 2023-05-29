import baseInstance from ".";
const RESOURCE = "/search";

export const getSearchResult = async (inputText, setFn) => {
  const response = await baseInstance.get(`${RESOURCE}/${inputText}`);
  setFn(response);
};
