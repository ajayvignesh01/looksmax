import { NextRequest, NextResponse } from "next/server";
import { analyzeImage } from "@/lib/analyze-image";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json();
    const suggestions = await analyzeImage(imageUrl);

    return NextResponse.json({ suggestions });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? `Error processing image URL: ${error.message}`
        : "Error processing image URL";
    return new NextResponse(errorMessage, { status: 400 });
  }
}
