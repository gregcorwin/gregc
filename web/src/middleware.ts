import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname || "/";

  if (host.includes("email.gregc.io")) {
    // Allow local routes needed for compliance/landing
    if (pathname.startsWith("/unsubscribe") || pathname.startsWith("/email")) {
      return NextResponse.next();
    }
    // Redirect other paths to Fastmail
    return NextResponse.redirect("https://app.fastmail.com/", 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};


