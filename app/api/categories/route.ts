import { type NextRequest, NextResponse } from "next/server"
import type { Category } from "@/lib/types"

// Mock database - replace with actual database calls
const categories: Category[] = [
  {
    id: "android",
    name: "Android",
    description: "Mobile applications and Android system modifications",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "software",
    name: "Software",
    description: "Desktop applications and system utilities",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "web",
    name: "Web",
    description: "Web applications and browser extensions",
    created_at: "2024-01-01T00:00:00Z",
  },
]

export async function GET() {
  return NextResponse.json(categories)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newCategory: Category = {
      id: body.name.toLowerCase().replace(/\s+/g, "-"),
      created_at: new Date().toISOString(),
      ...body,
    }

    categories.push(newCategory)
    return NextResponse.json(newCategory, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
  }
}
