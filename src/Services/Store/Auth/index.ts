import { create } from "zustand";
import apiInstance from "../../Api";
import { IUserData } from "./types";
import { LocalStorageKeys } from "../../../Utils/Constants";

interface IAuthStore {
  isLoading: boolean;
  isLoggedIn: boolean;
}

interface IAuthAction {
  actions: {
    loaderChange: (status: IAuthStore['isLoading']) => void;
    authSuccess: (payload: {data: IUserData}) => void;
  }
}

export const authStore = create<IAuthStore & IAuthAction>((set) => ({

  // Initial State
  isLoading: false,
  isLoggedIn: false,

  // Actions ...
  actions: {
    loaderChange: (status) => set((state) => ({ ...state, isLoading: status })),
    authSuccess: (payload) => set((state) => {
      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${payload.data.authToken}`
      localStorage.setItem(LocalStorageKeys.authToken, JSON.stringify(payload.data.authToken));
      localStorage.setItem(LocalStorageKeys.user, JSON.stringify(payload.data));
      return {
        ...state,
        userData: payload.data,
        isLoggedIn: true
      }
    })
  }

  // ... Actions
}));

