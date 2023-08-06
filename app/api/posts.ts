import { NextResponse } from "next/server";

import { getAllPostsFromNotion } from "@/services/posts";
import { getErrorMessage } from "@/utils/get-error-message";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const allPost = await getAllPostsFromNotion();
    return NextResponse.json({ posts: allPost });
  } catch (e) {
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
