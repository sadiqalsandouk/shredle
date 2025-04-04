import { NextResponse } from "next/server"
import { createClient } from "@/app/supabase/server"
import { validateUsername } from "@/app/utils/profanityFilter"

// GET endpoint to fetch leaderboard data
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get("limit") || "10")

    const supabase = await createClient()

    // Let's check if the leaderboard table exists
    // If not, we'll create it on the fly
    const { error: tableExistsError } = await supabase
      .from("leaderboard")
      .select("id")
      .limit(1)

    if (tableExistsError) {
      console.log("Table might not exist, creating it:", tableExistsError)

      // Create table if it doesn't exist
      const { error: createTableError } = await supabase.rpc(
        "create_leaderboard_table_if_not_exists"
      )

      if (createTableError) {
        console.error("Failed to create table:", createTableError)
        return NextResponse.json(
          {
            error: "Leaderboard not available yet. Please try again later.",
            details: createTableError.message,
          },
          { status: 500 }
        )
      }
    }

    // Now try to fetch the data
    const { data, error } = await supabase
      .from("leaderboard")
      .select("*")
      .order("score", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Leaderboard fetch error:", error)
      return NextResponse.json(
        {
          error: "Failed to fetch leaderboard",
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error("Leaderboard route error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}

// POST endpoint to submit a new score
export async function POST(req: Request) {
  try {
    const { playerName, score } = await req.json()

    // Server-side validation
    const validation = validateUsername(playerName)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || "Invalid username" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if leaderboard table exists and create it if not
    const { error: tableExistsError } = await supabase
      .from("leaderboard")
      .select("id")
      .limit(1)

    if (tableExistsError) {
      // Create the leaderboard table with a simplified schema
      const { error: createError } = await supabase.rpc(
        "create_leaderboard_table_if_not_exists"
      )

      if (createError) {
        console.error("Failed to create leaderboard table:", createError)
        return NextResponse.json(
          {
            error: "Couldn't submit score. Please try again later.",
            details: createError.message,
          },
          { status: 500 }
        )
      }
    }

    // Insert the score with validated name
    const { data, error } = await supabase
      .from("leaderboard")
      .insert([
        {
          player_name: playerName.trim(),
          score: score,
          date: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Leaderboard insert error:", error)
      return NextResponse.json(
        {
          error: "Failed to save score",
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Leaderboard post error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}
