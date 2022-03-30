import { atom, selector, DefaultValue } from "recoil";

const value = atom<any>({
  key: "inputState/value", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const valueDuplicated = selector({
  key: "inputState/valueDuplicated",
  get: ({ get }) => get(value) + get(value),
  set: ({ set }, newValue) => set(value, newValue ? newValue : ""),
});
export default Object.assign({}, { value, valueDuplicated });
