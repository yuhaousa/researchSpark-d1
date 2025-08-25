"use client"
import {
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Eye,
  MessageSquare,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Settings,
  FileText,
  GraduationCap,
  Menu,
  X,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function PaperManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { name: "Dashboard", icon: BarChart3, href: "/admin", active: false },
    { name: "User Management", icon: Users, href: "/admin/users", active: false },
    { name: "Paper Management", icon: FileText, href: "/admin/papers", active: true },
    { name: "Course Management", icon: GraduationCap, href: "/admin/courses", active: false },
    { name: "Settings", icon: Settings, href: "/admin/settings", active: false },
  ]

  const papers = [
    {
      id: 1,
      title: "AI-Driven Personalization in Hospitality Services",
      author: "Dr. Sarah Chen",
      category: "AI & Technology",
      status: "Published",
      publishDate: "2024-01-15",
      views: 2847,
      downloads: 892,
      discussions: 45,
      linkedCourses: 3,
    },
    {
      id: 2,
      title: "Sustainable Tourism: Environmental Impact Assessment",
      author: "Prof. Emma Thompson",
      category: "Sustainability",
      status: "Under Review",
      publishDate: "2024-01-20",
      views: 2156,
      downloads: 634,
      discussions: 32,
      linkedCourses: 2,
    },
    {
      id: 3,
      title: "Post-Pandemic Hotel Operations and Recovery Strategies",
      author: "Dr. Michael Rodriguez",
      category: "Operations",
      status: "Published",
      publishDate: "2024-01-10",
      views: 3421,
      downloads: 1205,
      discussions: 67,
      linkedCourses: 4,
    },
    {
      id: 4,
      title: "Digital Transformation in Restaurant Management",
      author: "Prof. Lisa Park",
      category: "Technology",
      status: "Draft",
      publishDate: "2024-01-25",
      views: 1234,
      downloads: 456,
      discussions: 23,
      linkedCourses: 1,
    },
    {
      id: 5,
      title: "Customer Experience Analytics in Hospitality",
      author: "Dr. James Wilson",
      category: "Analytics",
      status: "Published",
      publishDate: "2024-01-12",
      views: 1876,
      downloads: 723,
      discussions: 38,
      linkedCourses: 2,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "Under Review":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Draft":
        return "bg-gray-100 text-gray-700 border-gray-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

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
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold font-serif text-foreground">Paper Management</h1>
                </div>
                <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                  {papers.length} Papers
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Paper
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 py-8">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Papers</p>
                    <p className="text-2xl font-bold text-foreground">10,234</p>
                  </div>
                  <FileText className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Published</p>
                    <p className="text-2xl font-bold text-foreground">8,567</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Under Review</p>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                  </div>
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                    <p className="text-2xl font-bold text-foreground">2.4M</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="border-emerald-100 mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search papers by title, author, or keywords..." className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="ai">AI & Technology</SelectItem>
                      <SelectItem value="sustainability">Sustainability</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="review">Under Review</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Papers Table */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif">Research Papers</CardTitle>
              <CardDescription>Manage and monitor all research papers in the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Details</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {papers.map((paper) => (
                    <TableRow key={paper.id}>
                      <TableCell>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1">{paper.title}</h4>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{paper.publishDate}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                              {paper.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{paper.author}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {paper.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={`text-xs ${getStatusColor(paper.status)}`}>
                          {paper.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
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
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          {paper.linkedCourses} linked
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Paper
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <GraduationCap className="h-4 w-4 mr-2" />
                              Manage Courses
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Paper
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
