import apiInstance from "..";
import { ApiEndPoints } from "../../../Utils/Constants";
import { AppLoader } from "../../../Utils/Function";
import { IApiSuccess } from "../../../Utils/Types/types";
import { authStore } from "../../Store/Auth";
import { ILoginReq, ILoginRes } from "./types";

const { actions } = authStore.getState()

export const authApi = {
  async login(data: ILoginReq): Promise<IApiSuccess<ILoginRes>> {
    console.log('data: ', data);
    AppLoader(true);
    return apiInstance
      .post(ApiEndPoints.auth.login, data)
      .then((res) => {
        actions.authSuccess(res);
        return res
      })
      .finally(() => AppLoader(false));
  }
}