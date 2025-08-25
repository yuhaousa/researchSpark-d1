"use client"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  User,
  Eye,
  Download,
  Star,
  Tag,
  Play,
  FileText,
  Lightbulb,
  Building,
  Clock,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useParams, useRouter } from "next/navigation"

export default function PaperDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const paperId = params.id

  // Mock data - in real app, this would be fetched based on paperId
  const paper = {
    id: 1,
    title: "AI-Driven Personalization in Modern Hospitality: A Comprehensive Analysis",
    authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
    abstract:
      "This study examines the implementation of artificial intelligence in hospitality personalization, analyzing data from 500+ hotels worldwide to understand customer satisfaction improvements and operational efficiency gains.",
    fullSummary:
      "This comprehensive research paper presents a detailed analysis of AI-driven personalization strategies in the modern hospitality industry. Through extensive data collection from over 500 hotels across 25 countries, we examine how artificial intelligence technologies are transforming guest experiences and operational efficiency. The study reveals that hotels implementing AI personalization see an average 23% increase in customer satisfaction scores and 18% improvement in operational efficiency. Key findings include the effectiveness of predictive analytics in anticipating guest preferences, the role of machine learning in optimizing room assignments, and the impact of chatbot technologies on customer service delivery.",
    category: "AI & Technology",
    publishedDate: "2024-01-15",
    views: 2847,
    downloads: 342,
    rating: 4.8,
    tags: [
      "AI",
      "Personalization",
      "Customer Experience",
      "Hotel Operations",
      "Machine Learning",
      "Predictive Analytics",
    ],
    keywords: [
      "Artificial Intelligence",
      "Hospitality Technology",
      "Guest Personalization",
      "Customer Satisfaction",
      "Operational Efficiency",
      "Machine Learning",
      "Predictive Analytics",
      "Hotel Management",
      "Service Innovation",
      "Digital Transformation",
    ],
    linkedCourses: 3,
    featured: true,
    readingTime: "45 min",
    pages: 28,
    citations: 156,
  }

  const microLearningModules = [
    {
      id: 1,
      title: "Introduction to AI in Hospitality",
      duration: "15 min",
      type: "Video",
      completed: true,
      description: "Overview of AI applications in hotel operations",
    },
    {
      id: 2,
      title: "Personalization Algorithms",
      duration: "20 min",
      type: "Interactive",
      completed: true,
      description: "Understanding recommendation systems for guest preferences",
    },
    {
      id: 3,
      title: "Implementation Strategies",
      duration: "25 min",
      type: "Case Study",
      completed: false,
      description: "Step-by-step guide to deploying AI personalization",
    },
    {
      id: 4,
      title: "Measuring Success Metrics",
      duration: "18 min",
      type: "Assessment",
      completed: false,
      description: "KPIs and analytics for AI personalization ROI",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Marriott International: AI-Powered Guest Services",
      company: "Marriott International",
      industry: "Luxury Hotels",
      results: "35% increase in guest satisfaction, 28% reduction in service response time",
      description: "Implementation of AI chatbots and predictive analytics across 500+ properties",
    },
    {
      id: 2,
      title: "Hilton's Connected Room Experience",
      company: "Hilton Hotels",
      industry: "Business Hotels",
      results: "42% improvement in room preference accuracy, 15% increase in repeat bookings",
      description: "IoT integration with AI for personalized room environments",
    },
    {
      id: 3,
      title: "Boutique Hotel Chain: Personalized Concierge AI",
      company: "Kimpton Hotels",
      industry: "Boutique Hotels",
      results: "50% reduction in concierge workload, 25% increase in upselling success",
      description: "AI-driven recommendation engine for local experiences and services",
    },
  ]

  const applicationAreas = [
    {
      area: "Guest Experience Optimization",
      applications: [
        "Personalized room preferences",
        "Customized service recommendations",
        "Predictive maintenance alerts",
      ],
      impact: "High",
      implementation: "Medium",
    },
    {
      area: "Revenue Management",
      applications: ["Dynamic pricing optimization", "Demand forecasting", "Upselling automation"],
      impact: "Very High",
      implementation: "High",
    },
    {
      area: "Operational Efficiency",
      applications: ["Staff scheduling optimization", "Inventory management", "Energy consumption optimization"],
      impact: "High",
      implementation: "Medium",
    },
    {
      area: "Marketing & Sales",
      applications: ["Targeted campaign personalization", "Customer segmentation", "Loyalty program optimization"],
      impact: "Medium",
      implementation: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Research
              </Button>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                <h1 className="text-2xl font-bold font-serif text-foreground">ResearchHub</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Home
              </a>
              <a href="/research" className="text-emerald-600 font-medium">
                Research
              </a>
              <a href="/learning" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Learning
              </a>
              <a href="/collaboration" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Collaboration
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Paper Header */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                {paper.category}
              </Badge>
              {paper.featured && (
                <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 leading-tight">
              {paper.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{paper.authors.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{paper.readingTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{paper.pages} pages</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{paper.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>{paper.downloads} downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>{paper.citations} citations</span>
              </div>
              <div className="flex items-center gap-1 text-amber-600">
                <Star className="h-4 w-4 fill-current" />
                <span>{paper.rating} rating</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <FileText className="h-4 w-4 mr-2" />
                Read Full Paper
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
                <TabsTrigger value="learning">Learning Modules</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Paper Summary</CardTitle>
                    <CardDescription>Comprehensive overview of the research findings and methodology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-lg leading-relaxed mb-6">{paper.abstract}</p>
                      <h3 className="text-xl font-semibold mb-4">Detailed Analysis</h3>
                      <p className="leading-relaxed">{paper.fullSummary}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="keywords" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Research Keywords</CardTitle>
                    <CardDescription>Key terms and concepts covered in this research</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {paper.keywords.map((keyword, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm py-2 px-4 bg-emerald-50 border-emerald-200 text-emerald-700"
                        >
                          <Tag className="h-3 w-3 mr-2" />
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learning" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Related Micro-Learning Modules</CardTitle>
                    <CardDescription>Interactive learning content based on this research</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {microLearningModules.map((module) => (
                        <div
                          key={module.id}
                          className="flex items-center justify-between p-4 border border-emerald-100 rounded-lg hover:bg-emerald-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${module.completed ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"}`}
                            >
                              {module.type === "Video" && <Play className="h-4 w-4" />}
                              {module.type === "Interactive" && <Lightbulb className="h-4 w-4" />}
                              {module.type === "Case Study" && <Building className="h-4 w-4" />}
                              {module.type === "Assessment" && <Award className="h-4 w-4" />}
                            </div>
                            <div>
                              <h4 className="font-semibold">{module.title}</h4>
                              <p className="text-sm text-gray-600">{module.description}</p>
                              <div className="flex items-center gap-4 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {module.type}
                                </Badge>
                                <span className="text-xs text-gray-500">{module.duration}</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant={module.completed ? "outline" : "default"}
                            className={
                              module.completed
                                ? "border-emerald-200 text-emerald-700"
                                : "bg-emerald-600 hover:bg-emerald-700"
                            }
                          >
                            {module.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cases" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Case Studies</CardTitle>
                    <CardDescription>Real-world implementations and results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {caseStudies.map((study) => (
                        <div
                          key={study.id}
                          className="border border-emerald-100 rounded-lg p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">{study.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Building className="h-4 w-4" />
                                  {study.company}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {study.industry}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{study.description}</p>
                          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                            <h5 className="font-semibold text-emerald-800 mb-2">Key Results</h5>
                            <p className="text-emerald-700">{study.results}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">Possible Application Areas</CardTitle>
                    <CardDescription>How this research can be applied across different business areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {applicationAreas.map((area, index) => (
                        <div key={index} className="border border-emerald-100 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-lg">{area.area}</h4>
                            <div className="flex gap-2">
                              <Badge
                                variant="outline"
                                className={`text-xs ${area.impact === "Very High" ? "bg-red-50 border-red-200 text-red-700" : area.impact === "High" ? "bg-orange-50 border-orange-200 text-orange-700" : "bg-yellow-50 border-yellow-200 text-yellow-700"}`}
                              >
                                Impact: {area.impact}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={`text-xs ${area.implementation === "High" ? "bg-red-50 border-red-200 text-red-700" : area.implementation === "Medium" ? "bg-yellow-50 border-yellow-200 text-yellow-700" : "bg-green-50 border-green-200 text-green-700"}`}
                              >
                                Complexity: {area.implementation}
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-800">Applications:</h5>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              {area.applications.map((app, appIndex) => (
                                <li key={appIndex}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
