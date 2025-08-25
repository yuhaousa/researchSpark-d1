"use client"
import {
  MessageSquare,
  Users,
  TrendingUp,
  Heart,
  Search,
  Filter,
  Plus,
  BookOpen,
  Pin,
  Award,
  Eye,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollaborationPage() {
  const forumCategories = [
    {
      id: 1,
      name: "AI & Technology",
      description: "Discuss AI applications in hospitality",
      posts: 234,
      members: 1250,
      color: "bg-blue-100 text-blue-800",
      icon: "🤖",
    },
    {
      id: 2,
      name: "Sustainability",
      description: "Green practices and sustainable tourism",
      posts: 189,
      members: 890,
      color: "bg-green-100 text-green-800",
      icon: "🌱",
    },
    {
      id: 3,
      name: "Operations",
      description: "Hotel and restaurant operations",
      posts: 312,
      members: 1560,
      color: "bg-purple-100 text-purple-800",
      icon: "⚙️",
    },
    {
      id: 4,
      name: "Research Methods",
      description: "Methodology and research techniques",
      posts: 156,
      members: 670,
      color: "bg-orange-100 text-orange-800",
      icon: "📊",
    },
  ]

  const recentDiscussions = [
    {
      id: 1,
      title: "How AI chatbots are transforming guest services",
      author: "Dr. Sarah Chen",
      avatar: "SC",
      category: "AI & Technology",
      replies: 23,
      likes: 45,
      views: 892,
      timeAgo: "2 hours ago",
      isPinned: true,
      linkedPaper: "AI-Driven Personalization in Hospitality",
      excerpt:
        "I've been researching the implementation of AI chatbots in luxury hotels and wanted to share some fascinating findings...",
    },
    {
      id: 2,
      title: "Sustainable practices: ROI vs Environmental Impact",
      author: "Prof. Emma Thompson",
      avatar: "ET",
      category: "Sustainability",
      replies: 18,
      likes: 32,
      views: 654,
      timeAgo: "4 hours ago",
      isPinned: false,
      linkedPaper: "Sustainable Tourism: The Future is Green",
      excerpt:
        "There's an ongoing debate about balancing profitability with environmental responsibility. What are your thoughts?",
    },
    {
      id: 3,
      title: "Post-pandemic operational changes that stuck",
      author: "Michael Rodriguez",
      avatar: "MR",
      category: "Operations",
      replies: 31,
      likes: 67,
      views: 1203,
      timeAgo: "6 hours ago",
      isPinned: false,
      linkedPaper: "Post-Pandemic Hotel Operations",
      excerpt: "Which operational changes from the pandemic era have become permanent fixtures in your establishments?",
    },
    {
      id: 4,
      title: "Best practices for qualitative research in hospitality",
      author: "Dr. Lisa Park",
      avatar: "LP",
      category: "Research Methods",
      replies: 12,
      likes: 28,
      views: 445,
      timeAgo: "1 day ago",
      isPinned: false,
      linkedPaper: "Qualitative Research Methodologies",
      excerpt: "Looking for insights on conducting effective interviews with hospitality professionals...",
    },
  ]

  const trendingTopics = [
    { name: "AI Implementation", posts: 45 },
    { name: "Guest Experience", posts: 38 },
    { name: "Sustainability Metrics", posts: 32 },
    { name: "Staff Training", posts: 29 },
    { name: "Digital Transformation", posts: 26 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                <h1 className="text-2xl font-bold font-serif text-foreground">ResearchHub</h1>
              </div>
              <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                Collaboration Hub
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Home
              </a>
              <a href="/research" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Research
              </a>
              <a href="/learning" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Learning
              </a>
              <a href="/collaboration" className="text-emerald-600 font-medium">
                Collaboration
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Join Discussion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
              Collaborate & <span className="text-emerald-600">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join discussions, share insights, and collaborate with researchers and industry professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                <Plus className="h-5 w-5 mr-2" />
                Start Discussion
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 bg-transparent"
              >
                Browse Forums
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Forum Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search discussions, papers, or topics..."
                      className="pl-10 border-emerald-200 focus:border-emerald-500"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-emerald-50">
                    <TabsTrigger
                      value="recent"
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                    >
                      Recent
                    </TabsTrigger>
                    <TabsTrigger
                      value="trending"
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                    >
                      Trending
                    </TabsTrigger>
                    <TabsTrigger
                      value="unanswered"
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                    >
                      Unanswered
                    </TabsTrigger>
                    <TabsTrigger
                      value="following"
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                    >
                      Following
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="recent" className="mt-6">
                    <div className="space-y-4">
                      {recentDiscussions.map((discussion) => (
                        <Card key={discussion.id} className="border-emerald-100 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <Avatar className="h-12 w-12">
                                <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                                  {discussion.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-2">
                                  {discussion.isPinned && <Pin className="h-4 w-4 text-emerald-600" />}
                                  <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700">
                                    {discussion.category}
                                  </Badge>
                                  <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-emerald-600 cursor-pointer">
                                  {discussion.title}
                                </h3>
                                <p className="text-gray-600 mb-3 line-clamp-2">{discussion.excerpt}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <span className="font-medium text-gray-700">by {discussion.author}</span>
                                    <div className="flex items-center space-x-1">
                                      <MessageCircle className="h-4 w-4" />
                                      <span>{discussion.replies}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <ThumbsUp className="h-4 w-4" />
                                      <span>{discussion.likes}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Eye className="h-4 w-4" />
                                      <span>{discussion.views}</span>
                                    </div>
                                  </div>
                                  {discussion.linkedPaper && (
                                    <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                                      📄 Linked Paper
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trending" className="mt-6">
                    <div className="text-center py-12">
                      <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Trending Discussions</h3>
                      <p className="text-gray-600">Most active discussions this week</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="unanswered" className="mt-6">
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Unanswered Questions</h3>
                      <p className="text-gray-600">Help the community by answering these questions</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="following" className="mt-6">
                    <div className="text-center py-12">
                      <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Following</h3>
                      <p className="text-gray-600">Discussions from people and topics you follow</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Forum Categories */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    Forum Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {forumCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-900">{category.name}</h4>
                          <p className="text-xs text-gray-500">{category.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-emerald-600">{category.posts}</p>
                        <p className="text-xs text-gray-500">posts</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-700 hover:text-emerald-600 cursor-pointer">
                          #{topic.name}
                        </span>
                        <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700">
                          {topic.posts}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card className="border-emerald-100">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Award className="h-5 w-5 mr-2 text-emerald-600" />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">12,450</p>
                    <p className="text-sm text-gray-600">Active Members</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">3,891</p>
                    <p className="text-sm text-gray-600">Discussions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">28,567</p>
                    <p className="text-sm text-gray-600">Total Posts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
