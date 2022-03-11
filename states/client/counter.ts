import { atom } from "recoil";

const counter = atom<any>({
  key: "counterState", // unique ID (with respect to other atoms/selectors)
  default: { number: 0, status: null }, // default value (aka initial value)
});
export default counter;
