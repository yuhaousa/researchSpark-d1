"use client"
import {
  BarChart3,
  Users,
  BookOpen,
  Eye,
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
  Clock,
  Award,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function CourseManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { name: "Dashboard", icon: BarChart3, href: "/admin", active: false },
    { name: "User Management", icon: Users, href: "/admin/users", active: false },
    { name: "Paper Management", icon: FileText, href: "/admin/papers", active: false },
    { name: "Course Management", icon: GraduationCap, href: "/admin/courses", active: true },
    { name: "Settings", icon: Settings, href: "/admin/settings", active: false },
  ]

  const courses = [
    {
      id: 1,
      title: "AI in Hospitality: Fundamentals and Applications",
      instructor: "Dr. Sarah Chen",
      category: "AI & Technology",
      status: "Active",
      enrolled: 1247,
      completed: 892,
      completionRate: 71,
      duration: "6 weeks",
      linkedPapers: 3,
      modules: 12,
      createdDate: "2024-01-10",
      lastUpdated: "2024-01-20",
    },
    {
      id: 2,
      title: "Sustainable Tourism Practices",
      instructor: "Prof. Emma Thompson",
      category: "Sustainability",
      status: "Active",
      enrolled: 934,
      completed: 623,
      completionRate: 67,
      duration: "4 weeks",
      linkedPapers: 2,
      modules: 8,
      createdDate: "2024-01-15",
      lastUpdated: "2024-01-22",
    },
    {
      id: 3,
      title: "Digital Transformation in Hotels",
      instructor: "Dr. Michael Rodriguez",
      category: "Technology",
      status: "Draft",
      enrolled: 0,
      completed: 0,
      completionRate: 0,
      duration: "5 weeks",
      linkedPapers: 4,
      modules: 10,
      createdDate: "2024-01-25",
      lastUpdated: "2024-01-25",
    },
    {
      id: 4,
      title: "Customer Experience Analytics",
      instructor: "Prof. Lisa Park",
      category: "Analytics",
      status: "Active",
      enrolled: 1567,
      completed: 1203,
      completionRate: 77,
      duration: "8 weeks",
      linkedPapers: 5,
      modules: 16,
      createdDate: "2024-01-05",
      lastUpdated: "2024-01-18",
    },
    {
      id: 5,
      title: "Revenue Management Strategies",
      instructor: "Dr. James Wilson",
      category: "Business",
      status: "Paused",
      enrolled: 823,
      completed: 534,
      completionRate: 65,
      duration: "6 weeks",
      linkedPapers: 2,
      modules: 12,
      createdDate: "2024-01-12",
      lastUpdated: "2024-01-19",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "Draft":
        return "bg-gray-100 text-gray-700 border-gray-200"
      case "Paused":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <Play className="h-3 w-3" />
      case "Paused":
        return <Pause className="h-3 w-3" />
      default:
        return <Edit className="h-3 w-3" />
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
                  <h1 className="text-2xl font-bold font-serif text-foreground">Course Management</h1>
                </div>
                <Badge variant="secondary" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">
                  {courses.length} Courses
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
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
                    <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                    <p className="text-2xl font-bold text-foreground">156</p>
                  </div>
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                    <p className="text-2xl font-bold text-foreground">124</p>
                  </div>
                  <Play className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Enrollments</p>
                    <p className="text-2xl font-bold text-foreground">45,892</p>
                  </div>
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg. Completion</p>
                    <p className="text-2xl font-bold text-foreground">72%</p>
                  </div>
                  <Award className="h-8 w-8 text-emerald-600" />
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
                    <Input placeholder="Search courses by title, instructor, or category..." className="pl-10" />
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
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
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

          {/* Courses Table */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif">Learning Courses</CardTitle>
              <CardDescription>Manage and monitor all learning courses in the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Details</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Enrollment</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-1">{course.title}</h4>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{course.createdDate}</span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                              {course.instructor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{course.instructor}</p>
                            <Badge variant="outline" className="text-xs">
                              {course.category}
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${getStatusColor(course.status)} flex items-center space-x-1`}
                        >
                          {getStatusIcon(course.status)}
                          <span>{course.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">{course.enrolled.toLocaleString()} enrolled</div>
                          <div className="text-xs text-muted-foreground">{course.completed} completed</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Completion Rate</span>
                            <span className="font-medium">{course.completionRate}%</span>
                          </div>
                          <Progress value={course.completionRate} className="h-2" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <BookOpen className="h-3 w-3" />
                            <span>{course.modules} modules</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <FileText className="h-3 w-3" />
                            <span>{course.linkedPapers} papers</span>
                          </div>
                        </div>
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
                              View Course
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Course
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="h-4 w-4 mr-2" />
                              Manage Students
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="h-4 w-4 mr-2" />
                              Link Papers
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete Course
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
