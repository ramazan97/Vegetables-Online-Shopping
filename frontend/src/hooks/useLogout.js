import { useAuthContext } from "./useAuthContext";
import { useUrunContext } from "./useUrunContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //   --
  const { dispatch: notDispatch } = useUrunContext();

  const logout = () => {
    localStorage.removeItem("kullanici");

    dispatch({ type: "LOGOUT" });
    notDispatch({ type: "NOT_DOLDUR", payload: null });
  };

  return { logout };
};
