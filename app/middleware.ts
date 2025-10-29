import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";
  const ua = req.headers.get("user-agent") || "";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const time = new Date().toISOString();

  console.log(
    `[SECURITY] Unauthorized domain attempting to generate a preview of protected content:
      - Time: ${time}
      - Source IP: ${ip}
      - Referrer: ${referer}
      - User-Agent: ${ua}
      - Note: Repeated unauthorized link previews detected from this domain.`
  );

  return NextResponse.next();
}
