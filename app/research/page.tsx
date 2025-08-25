"use client"
import { Search, Filter, BookOpen, Calendar, User, Eye, Download, Star, Tag, ArrowRight, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ResearchPage() {
  const researchPapers = [
    {
      id: 1,
      title: "AI-Driven Personalization in Modern Hospitality: A Comprehensive Analysis",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      abstract:
        "This study examines the implementation of artificial intelligence in hospitality personalization, analyzing data from 500+ hotels worldwide to understand customer satisfaction improvements and operational efficiency gains.",
      category: "AI & Technology",
      publishedDate: "2024-01-15",
      views: 2847,
      downloads: 342,
      rating: 4.8,
      tags: ["AI", "Personalization", "Customer Experience", "Hotel Operations"],
      linkedCourses: 3,
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Tourism Practices: Environmental Impact and Economic Viability",
      authors: ["Prof. Emma Thompson", "Dr. James Wilson"],
      abstract:
        "An in-depth analysis of sustainable tourism practices across 200 destinations, measuring environmental impact reduction and long-term economic benefits for local communities.",
      category: "Sustainability",
      publishedDate: "2024-01-10",
      views: 1923,
      downloads: 287,
      rating: 4.6,
      tags: ["Sustainability", "Environmental Impact", "Tourism", "Economics"],
      linkedCourses: 2,
      featured: false,
    },
    {
      id: 3,
      title: "Post-Pandemic Hotel Operations: Adapting to New Consumer Behaviors",
      authors: ["Dr. Lisa Park", "Prof. David Kim"],
      abstract:
        "This research explores how hotels have adapted their operations post-COVID-19, analyzing changes in consumer behavior, safety protocols, and technology adoption across the industry.",
      category: "Operations",
      publishedDate: "2024-01-08",
      views: 3156,
      downloads: 445,
      rating: 4.9,
      tags: ["Operations", "COVID-19", "Consumer Behavior", "Safety"],
      linkedCourses: 4,
      featured: true,
    },
    {
      id: 4,
      title: "Digital Transformation in Restaurant Management Systems",
      authors: ["Dr. Maria Garcia", "Prof. Robert Chen"],
      abstract:
        "A comprehensive study on digital transformation trends in restaurant management, covering POS systems, inventory management, and customer relationship management technologies.",
      category: "Technology",
      publishedDate: "2024-01-05",
      views: 1654,
      downloads: 198,
      rating: 4.4,
      tags: ["Digital Transformation", "Restaurant", "POS Systems", "CRM"],
      linkedCourses: 2,
      featured: false,
    },
    {
      id: 5,
      title: "Revenue Management Optimization Through Machine Learning",
      authors: ["Prof. Alex Johnson", "Dr. Nina Patel"],
      abstract:
        "This paper presents novel machine learning approaches to revenue management in hospitality, demonstrating significant improvements in pricing strategies and occupancy rates.",
      category: "Revenue Management",
      publishedDate: "2024-01-03",
      views: 2234,
      downloads: 356,
      rating: 4.7,
      tags: ["Machine Learning", "Revenue Management", "Pricing", "Optimization"],
      linkedCourses: 3,
      featured: false,
    },
    {
      id: 6,
      title: "Cultural Sensitivity in Global Hospitality Brands",
      authors: ["Dr. Yuki Tanaka", "Prof. Ahmed Hassan"],
      abstract:
        "An exploration of cultural adaptation strategies employed by international hospitality brands, analyzing success factors and common pitfalls in cross-cultural service delivery.",
      category: "Cultural Studies",
      publishedDate: "2023-12-28",
      views: 1445,
      downloads: 167,
      rating: 4.5,
      tags: ["Cultural Sensitivity", "Global Brands", "Service Delivery", "Cross-Cultural"],
      linkedCourses: 1,
      featured: false,
    },
  ]

  const categories = [
    "All",
    "AI & Technology",
    "Sustainability",
    "Operations",
    "Revenue Management",
    "Cultural Studies",
  ]
  const sortOptions = ["Most Recent", "Most Viewed", "Highest Rated", "Most Downloaded"]

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
                Research Portal
              </Badge>
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
              <a href="#" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Collaboration
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
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
              Research <span className="text-emerald-600">Discovery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore cutting-edge research papers in hospitality and related industries. Connect academic insights with
              practical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search research papers, authors, or topics..."
                  className="pl-10 h-12 border-emerald-200 focus:border-emerald-500"
                />
              </div>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All"
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-gray-500" />
                <select className="text-sm border border-emerald-200 rounded-md px-3 py-1 focus:outline-none focus:border-emerald-500">
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Research Papers</h2>
            <p className="text-gray-600">Showing {researchPapers.length} papers</p>
          </div>

          <div className="space-y-6">
            {researchPapers.map((paper) => (
              <Card
                key={paper.id}
                className={`border-emerald-100 hover:shadow-lg transition-shadow cursor-pointer ${paper.featured ? "ring-2 ring-emerald-200" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {paper.category}
                        </Badge>
                        {paper.featured && (
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {paper.linkedCourses} Linked Courses
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-xl leading-tight mb-2 hover:text-emerald-600 transition-colors">
                        {paper.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{paper.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed mb-4">{paper.abstract}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1 text-sm text-amber-600">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{paper.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{paper.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{paper.downloads} downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{paper.linkedCourses} courses</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                      >
                        View Courses
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => (window.location.href = `/research/${paper.id}`)}
                      >
                        Read Paper
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              Load More Papers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
