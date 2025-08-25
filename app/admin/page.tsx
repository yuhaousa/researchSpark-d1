"use client"
import {
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Eye,
  MessageSquare,
  Download,
  Clock,
  Award,
  Activity,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Settings,
  FileText,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { name: "Dashboard", icon: BarChart3, href: "/admin", active: true },
    { name: "User Management", icon: Users, href: "/admin/users", active: false },
    { name: "Paper Management", icon: FileText, href: "/admin/papers", active: false },
    { name: "Course Management", icon: GraduationCap, href: "/admin/courses", active: false },
    { name: "Settings", icon: Settings, href: "/admin/settings", active: false },
  ]

  const keyMetrics = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Active users this month",
    },
    {
      title: "Research Papers",
      value: "10,234",
      change: "+8.2%",
      trend: "up",
      icon: BookOpen,
      description: "Papers in database",
    },
    {
      title: "Learning Sessions",
      value: "45,892",
      change: "+23.1%",
      trend: "up",
      icon: Activity,
      description: "Completed this month",
    },
    {
      title: "Engagement Rate",
      value: "78.4%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      description: "Average user engagement",
    },
  ]

  const dailyLoginData = [
    { day: "Mon", logins: 1247 },
    { day: "Tue", logins: 1389 },
    { day: "Wed", logins: 1156 },
    { day: "Thu", logins: 1523 },
    { day: "Fri", logins: 1678 },
    { day: "Sat", logins: 892 },
    { day: "Sun", logins: 734 },
  ]

  const trendingPapers = [
    {
      title: "AI-Driven Personalization in Hospitality",
      author: "Dr. Sarah Chen",
      views: 2847,
      downloads: 892,
      discussions: 45,
      category: "AI & Technology",
    },
    {
      title: "Sustainable Tourism: The Future is Green",
      author: "Prof. Emma Thompson",
      views: 2156,
      downloads: 634,
      discussions: 32,
      category: "Sustainability",
    },
    {
      title: "Post-Pandemic Hotel Operations",
      author: "Dr. Michael Rodriguez",
      views: 3421,
      downloads: 1205,
      discussions: 67,
      category: "Operations",
    },
  ]

  const userActivity = [
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      activity: "Published new paper",
      time: "2 hours ago",
      avatar: "JW",
    },
    {
      name: "Sarah Martinez",
      role: "Hotel Manager",
      activity: "Completed AI course",
      time: "4 hours ago",
      avatar: "SM",
    },
    {
      name: "Prof. Lisa Park",
      role: "University Professor",
      activity: "Started discussion thread",
      time: "6 hours ago",
      avatar: "LP",
    },
    {
      name: "Michael Chen",
      role: "Industry Analyst",
      activity: "Downloaded 3 papers",
      time: "8 hours ago",
      avatar: "MC",
    },
  ]

  const courseProgress = [
    {
      course: "AI in Hospitality",
      enrolled: 1247,
      completed: 892,
      progress: 71,
    },
    {
      course: "Sustainable Practices",
      enrolled: 934,
      completed: 623,
      progress: 67,
    },
    {
      course: "Digital Transformation",
      enrolled: 1567,
      completed: 1203,
      progress: 77,
    },
    {
      course: "Customer Experience",
      enrolled: 823,
      completed: 534,
      progress: 65,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold font-serif text-foreground">Admin</span>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="border-b bg-card sticky top-0 z-30">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold font-serif text-foreground">Dashboard</h1>
                </div>
                <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                  ResearchHub Analytics
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 py-8">
          {/* Key Metrics */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">Platform Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="border-emerald-100">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      {metric.trend === "up" ? (
                        <ArrowUp className="h-3 w-3 text-emerald-600" />
                      ) : (
                        <ArrowDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className={metric.trend === "up" ? "text-emerald-600" : "text-red-500"}>
                        {metric.change}
                      </span>
                      <span>from last month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center space-x-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <span>Daily Login Activity</span>
                </CardTitle>
                <CardDescription>User login patterns over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyLoginData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-muted-foreground" />
                      <YAxis axisLine={false} tickLine={false} className="text-muted-foreground" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                      />
                      <Bar dataKey="logins" fill="rgb(16 185 129)" radius={[4, 4, 0, 0]} name="Daily Logins" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Peak day: <span className="font-semibold text-foreground">Friday (1,678 logins)</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Weekly average: <span className="font-semibold text-foreground">1,231 logins/day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Trending Papers */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <span>Trending Research Papers</span>
                </CardTitle>
                <CardDescription>Most viewed and discussed papers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingPapers.map((paper, index) => (
                    <div key={index} className="flex items-start justify-between p-4 bg-emerald-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-foreground mb-1">{paper.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">by {paper.author}</p>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-emerald-100 text-emerald-700 border-emerald-200"
                        >
                          {paper.category}
                        </Badge>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          <span>{paper.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Download className="h-3 w-3" />
                          <span>{paper.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <MessageSquare className="h-3 w-3" />
                          <span>{paper.discussions}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center space-x-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span>Course Completion Rates</span>
                </CardTitle>
                <CardDescription>Learning module progress and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseProgress.map((course, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm text-foreground">{course.course}</h4>
                        <span className="text-xs text-muted-foreground">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 mb-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{course.enrolled} enrolled</span>
                        <span>{course.completed} completed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-emerald-600" />
                  <span>Recent User Activity</span>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>Latest actions from platform users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                        {activity.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-sm text-foreground">{activity.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {activity.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.activity}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
