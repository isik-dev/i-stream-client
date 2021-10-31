import { SIGN_IN, SIGN_OUT } from "./types";
// Below are two very simple functions that are referred to as action creators that will return an object with single values!!
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
