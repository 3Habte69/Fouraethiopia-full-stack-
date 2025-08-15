import { NextRequest, NextResponse } from "next/server";
import { generateUploadUrl } from "@vercel/blob";
/**
 * Creates a single-use signed upload URL. Client uploads the file directly to Vercel Blob.
 * Requires env VERCEL_BLOB_RW_TOKEN.
 */
export async function POST(req: NextRequest) {
  const { filename, contentType } = await req.json();
  if (!filename) return NextResponse.json({ error: "Missing filename" }, { status: 400 });
  const { url } = await generateUploadUrl({ contentType: contentType || "application/octet-stream", token: process.env.VERCEL_BLOB_RW_TOKEN });
  return NextResponse.json({ uploadUrl: url });
}
