import { atom } from "recoil";

const counterState = atom<any>({
  key: "counterState/state", // unique ID (with respect to other atoms/selectors)
  default: { number: 0, status: null }, // default value (aka initial value)
});
export default counterState;
