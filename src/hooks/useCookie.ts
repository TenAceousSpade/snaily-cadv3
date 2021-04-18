import { NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";
import { Auth } from "@lib/consts";
import config from "@lib/config.server";

export function useCookie(
  res: NextApiResponse,
  token: string,
  name: string = "snaily-cad-session",
  expires: Date = new Date(Date.now() + Auth.CookieExpires),
) {
  const options: CookieSerializeOptions = {
    expires: expires,
    httpOnly: true,
    path: "/",
    sameSite: config.allowIframes === true ? "none" : "lax",
  };

  res.setHeader("Set-Cookie", serialize(name, token, options));
}
