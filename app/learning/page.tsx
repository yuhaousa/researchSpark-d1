"use client"
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp,
  FileText,
  Video,
  Download,
  Filter,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function LearningPage() {
  const courses = [
    {
      id: 1,
      title: "AI-Driven Personalization in Hospitality",
      description: "Master the implementation of artificial intelligence for personalized guest experiences",
      instructor: "Dr. Sarah Chen",
      duration: "6 weeks",
      lessons: 24,
      students: 1247,
      rating: 4.8,
      level: "Intermediate",
      category: "AI & Technology",
      progress: 65,
      linkedPaper: {
        title: "Machine Learning Applications in Hotel Revenue Management",
        authors: "Chen, S., Rodriguez, M., Thompson, E.",
        journal: "Journal of Hospitality Technology",
        year: 2024,
      },
      modules: [
        "Introduction to AI in Hospitality",
        "Guest Behavior Analytics",
        "Recommendation Systems",
        "Implementation Strategies",
        "Case Studies & ROI Analysis",
        "Future Trends & Innovations",
      ],
    },
    {
      id: 2,
      title: "Sustainable Tourism Operations",
      description: "Comprehensive guide to implementing sustainable practices in tourism and hospitality",
      instructor: "Prof. Emma Thompson",
      duration: "4 weeks",
      lessons: 18,
      students: 892,
      rating: 4.9,
      level: "Beginner",
      category: "Sustainability",
      progress: 0,
      linkedPaper: {
        title: "Environmental Impact Assessment of Hotel Operations",
        authors: "Thompson, E., Wilson, J., Park, L.",
        journal: "Sustainable Tourism Review",
        year: 2024,
      },
      modules: [
        "Sustainability Fundamentals",
        "Energy Management Systems",
        "Waste Reduction Strategies",
        "Green Certification Programs",
      ],
    },
    {
      id: 3,
      title: "Post-Pandemic Hotel Operations",
      description: "Adapting hotel operations for the new era of hospitality management",
      instructor: "Dr. Michael Rodriguez",
      duration: "5 weeks",
      lessons: 20,
      students: 1534,
      rating: 4.7,
      level: "Advanced",
      category: "Operations",
      progress: 100,
      linkedPaper: {
        title: "Resilience Strategies in Hospitality: Lessons from COVID-19",
        authors: "Rodriguez, M., Chen, S., Martinez, A.",
        journal: "International Hotel Management Review",
        year: 2023,
      },
      modules: [
        "Crisis Management Framework",
        "Health & Safety Protocols",
        "Digital Transformation",
        "Staff Training & Development",
        "Financial Recovery Strategies",
      ],
    },
    {
      id: 4,
      title: "Revenue Management Analytics",
      description: "Advanced analytics and pricing strategies for hospitality revenue optimization",
      instructor: "Dr. Lisa Park",
      duration: "7 weeks",
      lessons: 28,
      students: 756,
      rating: 4.6,
      level: "Advanced",
      category: "Analytics",
      progress: 25,
      linkedPaper: {
        title: "Dynamic Pricing Models in Hotel Revenue Management",
        authors: "Park, L., Wilson, J., Thompson, E.",
        journal: "Revenue Management Quarterly",
        year: 2024,
      },
      modules: [
        "Revenue Management Fundamentals",
        "Demand Forecasting",
        "Pricing Strategy Development",
        "Market Segmentation",
        "Performance Metrics",
        "Technology Integration",
        "Advanced Analytics",
      ],
    },
  ]

  const featuredCourse = courses[0]

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
                Learning Platform
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-emerald-600 transition-colors font-medium">
                Home
              </a>
              <a
                href="/research"
                className="text-muted-foreground hover:text-emerald-600 transition-colors font-medium"
              >
                Research
              </a>
              <a href="/learning" className="text-emerald-600 font-medium">
                Learning
              </a>
              <a href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors font-medium">
                Collaboration
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                My Progress
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-serif text-gray-900 mb-6">
              Research-Driven
              <span className="text-emerald-600"> Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform cutting-edge research into practical skills. Each course is directly linked to peer-reviewed
              papers and industry applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses, topics, or research papers..."
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
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                <span>50+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-emerald-600" />
                <span>Research-Backed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-emerald-600" />
                <span>Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Featured Course</h2>
            <p className="text-lg text-gray-600">Start with our most popular research-driven course</p>
          </div>
          <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800">{featuredCourse.category}</Badge>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                    {featuredCourse.level}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4">{featuredCourse.title}</h3>
                <p className="text-gray-600 mb-6">{featuredCourse.description}</p>

                <div className="bg-white rounded-lg p-4 mb-6 border border-emerald-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-emerald-600" />
                    Linked Research Paper
                  </h4>
                  <p className="text-sm font-medium text-gray-900">{featuredCourse.linkedPaper.title}</p>
                  <p className="text-sm text-gray-600">
                    {featuredCourse.linkedPaper.authors} • {featuredCourse.linkedPaper.journal} (
                    {featuredCourse.linkedPaper.year})
                  </p>
                  <Button variant="link" className="p-0 h-auto text-emerald-600 text-sm mt-2">
                    <Download className="h-3 w-3 mr-1" />
                    Download Paper
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredCourse.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredCourse.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredCourse.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{featuredCourse.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                      {featuredCourse.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{featuredCourse.instructor}</p>
                    <p className="text-sm text-gray-500">Course Instructor</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-emerald-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Your Progress</h4>
                    <span className="text-emerald-600 font-medium">{featuredCourse.progress}%</span>
                  </div>
                  <Progress value={featuredCourse.progress} className="mb-6" />

                  <h4 className="font-semibold text-gray-900 mb-4">Course Modules</h4>
                  <div className="space-y-3">
                    {featuredCourse.modules.map((module, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {index < Math.floor(featuredCourse.modules.length * (featuredCourse.progress / 100)) ? (
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        ) : index === Math.floor(featuredCourse.modules.length * (featuredCourse.progress / 100)) ? (
                          <Play className="h-5 w-5 text-emerald-600" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span
                          className={`text-sm ${
                            index <= Math.floor(featuredCourse.modules.length * (featuredCourse.progress / 100))
                              ? "text-gray-900 font-medium"
                              : "text-gray-500"
                          }`}
                        >
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                    Continue Learning
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">All Courses</h2>
              <p className="text-lg text-gray-600">Explore our complete library of research-backed courses</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                Sort by Progress
              </Button>
              <Button
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                View All Categories
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="border-emerald-100 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800">{course.category}</Badge>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="font-serif text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-emerald-50 rounded-lg p-3 mb-4 border border-emerald-100">
                    <p className="text-xs font-medium text-emerald-800 mb-1">Linked Research:</p>
                    <p className="text-xs text-emerald-700 font-medium">{course.linkedPaper.title}</p>
                    <p className="text-xs text-emerald-600">
                      {course.linkedPaper.journal} ({course.linkedPaper.year})
                    </p>
                  </div>

                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-emerald-600 font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Video className="h-3 w-3" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-semibold">
                          {course.instructor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-600">{course.instructor}</span>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs px-3 py-1">
                      {course.progress > 0 ? "Continue" : "Start Course"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-white mb-4">Your Learning Journey</h2>
            <p className="text-xl text-emerald-100">Track your progress and achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">12</h3>
              <p className="text-emerald-100">Courses Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">8</h3>
              <p className="text-emerald-100">Certificates Earned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">156</h3>
              <p className="text-emerald-100">Hours Learned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">45</h3>
              <p className="text-emerald-100">Research Papers Read</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
