const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: ""
};

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export function setUser(user) {
  return { type: SET_USER, payload: user };
}
export function setRoles(roles) {
  return { type: SET_ROLES, payload: roles };
}
export function setTheme(theme) {
  return { type: SET_THEME, payload: theme };
}
export function setLanguage(language) {
  return { type: SET_LANGUAGE, payload: language };
}

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}