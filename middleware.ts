import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }
  const pathname = request.nextUrl.pathname;
  console.log(`input: ${pathname} -> output: /no-variant${pathname}`);
  return NextResponse.rewrite(new URL(`/no-variant${pathname}`, request.url));
}

// export const config = {
//   matcher: ["/", "/shop", "/product", "/who-we-are", "/about", "/contact"],
// };
