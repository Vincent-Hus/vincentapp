export interface User {
  user_id: string;
  password: string;
  email: string;
  token: string;
}
const localStorageKey = "__auth_Provider_Token__";

export const getToken = window.localStorage.getItem(localStorageKey);

export const handelUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { user_id: string; password: string }) => {
  return fetch(`https://localhost:7006/api/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      return handelUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = async (data: {
  user_id: string;
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
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
