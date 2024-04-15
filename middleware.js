const configData = require("./config");

let locales = configData.lang;
let localesWithVersion = configData.lang.map(
  (language) => `${language}${configData.splitter}${configData.current_version}`
);

// Get the preferred locale, similar to the above or using a library
const defaultLocale = "en";

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  let locale;
  const { pathname } = request.nextUrl;
  if (
    request.nextUrl.pathname === "/about" ||
    request.nextUrl.pathname === "/tos" ||
    request.nextUrl.pathname === "/contact" ||
    request.nextUrl.pathname === "/privacy-policy" ||
    request.nextUrl.pathname === "/copyright" ||
    request.nextUrl.pathname === "/robots.txt" ||
    request.nextUrl.pathname === "/favicon.ico" ||
    request.nextUrl.pathname.startsWith("/sitemap") ||
    request.nextUrl.pathname.startsWith("/opengraph")
  ) {
    return;
  }
  const pathnameHasLocale = localesWithVersion.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  const pathnameStartWithLocale = locales.some((l) => {
    if (pathname.startsWith(`/${l}`)) {
      locale = l;
      return true;
    }
    return false;
  });
  if (pathnameHasLocale) return;
  else if (pathnameStartWithLocale) {
    request.nextUrl.pathname = `/${locale}${configData.splitter}${configData.current_version}`;
    return Response.redirect(request.nextUrl, 308);
  }
  // Redirect if there is no locale
  //locale = getLocale(request)
  request.nextUrl.pathname = `/${defaultLocale}${configData.splitter}${configData.current_version}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl, 308);
}

export const config = {
  matcher: [
    "/((?!_next).*)", // Existing matcher to skip paths not containing "_next"
  ],
};
