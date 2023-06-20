import { legacy_createStore as createStore } from "redux";
import contents from "./modules/contents";

const store = createStore(contents);

export default store;
