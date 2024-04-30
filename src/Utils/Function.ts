import { authStore } from "../Services/Store/Auth";

const { actions } = authStore.getState();

export const AppLoader = (status: boolean) => actions.loaderChange(status);