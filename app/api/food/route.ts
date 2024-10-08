import { NextResponse } from "next/server"
import { foodData } from "../../foodData"

export async function GET() {
  return NextResponse.json({ foodData })
}
