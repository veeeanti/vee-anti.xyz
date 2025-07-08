import { type NextRequest, NextResponse } from "next/server"
import type { Project } from "@/lib/types"

// Mock database - replace with actual database calls
const projects: Project[] = [
  {
    id: 1,
    title: "Custom ROM Manager",
    slug: "custom-rom-manager",
    description: "A simple tool to manage and flash custom ROMs. Because I got tired of doing it manually every time.",
    category: "android",
    tags: ["Android", "ROM", "Tool"],
    download_url: "https://example.com/download/rom-manager",
    github_url: "https://github.com/veeanti/rom-manager",
    status: "active",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z",
  },
  {
    id: 2,
    title: "System Tweaker Pro",
    slug: "system-tweaker-pro",
    description: "Advanced system tweaking utility for rooted Android devices. Probably voids your warranty.",
    category: "android",
    tags: ["Android", "Root", "System"],
    download_url: "https://example.com/download/system-tweaker",
    github_url: "https://github.com/veeanti/system-tweaker",
    status: "beta",
    created_at: "2024-01-02T00:00:00Z",
    updated_at: "2024-01-05T00:00:00Z",
  },
  {
    id: 3,
    title: "File Organizer Script",
    slug: "file-organizer-script",
    description: "Python script that organizes my chaotic downloads folder. Saves me hours of manual sorting.",
    category: "software",
    tags: ["Python", "Automation", "Utility"],
    download_url: "https://example.com/download/file-organizer",
    github_url: "https://github.com/veeanti/file-organizer",
    status: "stable",
    created_at: "2023-12-15T00:00:00Z",
    updated_at: "2023-12-20T00:00:00Z",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }
  return NextResponse.json(project)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const projectIndex = projects.findIndex((p) => p.id === Number.parseInt(params.id))

    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    const updatedProject = {
      ...projects[projectIndex],
      ...body,
      updated_at: new Date().toISOString(),
    }

    projects[projectIndex] = updatedProject
    return NextResponse.json(updatedProject)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const projectIndex = projects.findIndex((p) => p.id === Number.parseInt(params.id))

  if (projectIndex === -1) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  projects.splice(projectIndex, 1)
  return NextResponse.json({ message: "Project deleted successfully" })
}
