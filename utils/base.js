import { deleteCookie } from "cookies-next";

export function css(selector, style, value) {
  selector?.style[style] = value;
}

export function deleteEl(e) {
  e.parentNode.removeChild(e);
}

export const clearLocalStorage = () => {
  localStorage.clear('persist:root');
  localStorage.removeItem('current_user');
  localStorage.removeItem('token');
  setTimeout(function () {
    window.location.pathname = routes.signin;
  }, 500);
};

export function doLogout() {
  deleteCookie("auth_access_token");
  deleteCookie("auth_user_name");
  deleteCookie("auth_user_email");
  deleteCookie("auth_user_image");
  deleteCookie("auth_user_id");
  deleteCookie("auth_user_token");
}
export function checkParent(parent, child) {
  if (parent.contains(child))
      return true;
      return false;
}



export function getBound (ref) {
  if (!ref.current) return
  return ref.current.getBoundingClientRect ();
}