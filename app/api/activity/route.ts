import { NextResponse } from "next/server"

// This would connect to your actual database
// For now, we'll simulate the data

export async function GET() {
  try {
    // In a real app, you'd query your database here
    // SELECT * FROM (
    //   SELECT 'blog' as type, title, 'BLOG_POST_CREATED' as action, created_at as timestamp FROM blog_posts WHERE published = true
    //   UNION ALL
    //   SELECT 'project' as type, title, 'PROJECT_UPDATED' as action, updated_at as timestamp FROM projects
    // ) ORDER BY timestamp DESC LIMIT 10

    const activities = [
      {
        id: "1",
        type: "blog",
        title: "Android ROM Flashing Adventures",
        action: "BLOG_POST_CREATED",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        type: "android",
        title: "System Tweaker Pro v2.1",
        action: "PROJECT_UPDATED",
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "3",
        type: "software",
        title: "Config Backup Tool",
        action: "PROJECT_RELEASED",
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ]

    return NextResponse.json(activities)
  } catch (error) {
    console.error("Error fetching activity:", error)
    return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 })
  }
}
