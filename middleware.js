import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";
  const bots = [
    "adsbot", "mediapartners", "crawler", "bot", "spider",
    "facebook", "bingbot", "yandex", "duckduckbot"
  ];

  if (bots.some((b) => ua.includes(b))) {
    return NextResponse.rewrite("/result");
  }

  return NextResponse.next();
}
