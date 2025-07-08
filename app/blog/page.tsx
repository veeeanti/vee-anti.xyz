import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

// Mock data - this will come from your database
const blogPosts = [
  {
    id: 1,
    title: "Why I Can't Stop Tinkering with Android ROMs",
    excerpt:
      "Another late night, another custom ROM flash. Here's why I keep doing this to myself and my poor phone...",
    content: "Full content here...",
    tags: ["Android", "ROMs", "Rambling"],
    publishedAt: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building My First Proper Android App (And Why It Took Forever)",
    excerpt: "Spoiler alert: I rewrote it 4 times because I'm apparently a perfectionist now. Here's the journey...",
    content: "Full content here...",
    tags: ["Android", "Development", "Learning"],
    publishedAt: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Software I Actually Use Daily (2024 Edition)",
    excerpt:
      "My current setup, the tools I can't live without, and some random software recommendations nobody asked for...",
    content: "Full content here...",
    tags: ["Software", "Tools", "Recommendations"],
    publishedAt: "2024-01-05",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen hl-background">
      <div className="fixed inset-0 circuit-overlay" />
      <div className="fixed inset-0 hex-pattern" />
      <div className="fixed inset-0 scan-lines" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-orange-400 hover:bg-orange-500/10 mb-4 font-mono">
              <ArrowLeft className="w-4 h-4 mr-2" />
              RETURN_TO_MAIN
            </Button>
          </Link>
          <div className="border-l-4 border-orange-500 pl-6">
            <h1 className="text-4xl font-bold text-white mb-2 font-mono holo-text">BLOG_SYSTEM</h1>
            <p className="text-xl text-orange-300 font-mono">Personal logs and technical documentation</p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hud-element hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-orange-500/20 text-orange-300 border-orange-500/30 font-mono text-xs glow-border"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.toUpperCase()}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-white text-2xl hover:text-orange-400 transition-colors font-mono">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 text-sm text-orange-400 mb-4 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-mono font-bold shadow-lg shadow-orange-500/30">
                    READ_LOG
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
