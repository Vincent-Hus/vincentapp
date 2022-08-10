import { User } from "./compon/form/register";

const localStorageKey = "__auth_Provider_Token__";
export const getToken = window.localStorage.getItem(localStorageKey);
export const handelUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.Token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`https://localhost:7006/api/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      return handelUserResponse(await response.json());
    }
  });
};

export const register = (data: {
  username: string;
  password: string;
  Email?: string;
}) => {
  return fetch(`https://localhost:7006/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      return handelUserResponse(await response.json());
    }
  });
};
