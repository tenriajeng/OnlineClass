import { atom } from "recoil";

export const AuthAtom = atom({
    key: "authenticate", // * unique Key (with respect to other atoms/selectors)
    default: false, // * default value (aka initial value)
});
