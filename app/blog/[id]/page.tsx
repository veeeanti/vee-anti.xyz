import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Tag, FileText } from "lucide-react"

// This would normally fetch from your database
const getBlogPost = (id: string) => {
  return {
    id: Number.parseInt(id),
    title: "Why I Can't Stop Tinkering with Android ROMs",
    content: `
# The Addiction is Real

Okay, so here's the thing - I have a problem. It's 2 AM, I have work tomorrow, and I'm sitting here with my phone in download mode, about to flash yet another custom ROM. Why? Because I saw someone mention a new build on XDA and thought "hey, this one might finally be perfect."

## How It Started

It all began innocently enough. My phone was getting slow, the manufacturer stopped pushing updates, and I thought "how hard could it be to install a custom ROM?" 

*Narrator: It was not easy.*

## The Rabbit Hole

Three hours later, I had:
- Unlocked the bootloader (goodbye warranty)
- Installed TWRP recovery
- Made my first Nandroid backup (which I still have, like a digital security blanket)
- Flashed my first custom ROM

And it was... amazing. My phone felt new again. Faster, cleaner, with features I didn't even know I wanted.

## The Problem

But here's where things went sideways. One ROM led to another. "Oh, this one has better battery life." "This one has more customization options." "This one is based on the latest Android version."

Before I knew it, I was flashing ROMs like other people change clothes. Weekly. Sometimes daily.

## Current Status

I've probably flashed over 50 different ROMs across various devices. My current daily driver is running some obscure ROM that three people have heard of, but it has this one feature that I absolutely can't live without.

My friends think I'm crazy. My family has given up asking why my phone looks different every time they see it.

But you know what? I regret nothing. Well, except for that one time I soft-bricked my phone right before an important call. That was... stressful.

## The Lesson

If you're thinking about getting into custom ROMs, my advice is simple: don't. Unless you want to join me in this beautiful, chaotic world of endless tinkering and 2 AM flashing sessions.

Because once you start, you can't stop. Trust me, I've tried.

*Currently running: Some random ROM build from yesterday that I'll probably replace tomorrow*
    `,
    tags: ["Android", "ROMs", "Rambling"],
    publishedAt: "2024-01-15",
    readTime: "5 min read",
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="min-h-screen hl-background">
      <div className="fixed inset-0 circuit-overlay" />
      <div className="fixed inset-0 hex-pattern" />
      <div className="fixed inset-0 scan-lines" />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <Link href="/blog">
          <Button variant="ghost" className="text-orange-400 hover:bg-orange-500/10 mb-8 font-mono">
            <ArrowLeft className="w-4 h-4 mr-2" />
            RETURN_TO_BLOG
          </Button>
        </Link>

        {/* Article Header */}
        <article className="hud-element rounded-lg overflow-hidden">
          <header className="p-8 border-b border-orange-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded flex items-center justify-center glow-border">
                <FileText className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-orange-400 font-mono text-sm">BLOG_POST_ENTRY</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-orange-500/20 text-orange-300 border-orange-500/30 font-mono text-xs glow-border"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag.toUpperCase()}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-white mb-6 leading-tight font-mono holo-text">{post.title}</h1>

            <div className="flex items-center gap-6 text-orange-400 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                PUBLISHED:{" "}
                {new Date(post.publishedAt)
                  .toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\//g, ".")}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                DURATION: {post.readTime.toUpperCase()}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="p-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line font-mono text-sm">{post.content}</div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            className="glow-border text-orange-400 hover:bg-orange-500/20 bg-transparent font-mono"
          >
            ← PREVIOUS_LOG
          </Button>
          <Button
            variant="outline"
            className="glow-border text-orange-400 hover:bg-orange-500/20 bg-transparent font-mono"
          >
            NEXT_LOG →
          </Button>
        </div>
      </div>
    </div>
  )
}
