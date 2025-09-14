"use client"
import {
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  Eye,
  ArrowRight,
  CheckCircle,
  Quote,
  Play,
  Award,
  Globe,
  Zap,
  Shield,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Banner slides data
  const bannerSlides = [
    {
      id: 1,
      image: "/hospitality-innovation-lab.png",
      title: "Advancing Research Through Innovation",
      subtitle: "Connecting academic excellence with industry collaboration",
      ctaText: "Explore Research",
      ctaLink: "/research"
    },
    {
      id: 2,
      image: "/placeholder.jpg",
      title: "AI-Powered Learning Platform",
      subtitle: "Transform knowledge into actionable insights with cutting-edge technology",
      ctaText: "Start Learning",
      ctaLink: "/learning"
    },
    {
      id: 3,
      image: "/placeholder-l48ss.png",
      title: "Research Collaboration Network",
      subtitle: "Bridge the gap between academia and real-world applications",
      ctaText: "Join Collaboration",
      ctaLink: "/collaboration"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(timer)
  }, [bannerSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  const trendingArticles = [
    {
      id: 1,
      title: "AI-Driven Personalization in Technology",
      author: "Dr. Sarah Chen",
      readTime: "8 min",
      views: "2.3k",
      category: "AI & Technology",
    },
    {
      id: 2,
      title: "Sustainable Tourism: The Future is Green",
      author: "Prof. Emma Thompson",
      readTime: "6 min",
      views: "1.8k",
      category: "Sustainability",
    },
    {
      id: 3,
      title: "Post-Pandemic System Operations",
      author: "Dr. Michael Rodriguez",
      readTime: "10 min",
      views: "3.1k",
      category: "Operations",
    },
  ]

  const testimonials = [
    {
      name: "Dr. James Wilson",
      role: "Research Director, Technology Institute",
      content:
        "This platform has revolutionized how we conduct and share technology research. The integration between academic work and industry application is seamless.",
      avatar: "JW",
    },
    {
      name: "Sarah Martinez",
      role: "System Operations Manager",
      content:
        "The learning modules connected to research papers have transformed our team's understanding of industry best practices. Highly recommended!",
      avatar: "SM",
    },
    {
      name: "Prof. Lisa Park",
      role: "University of Tourism Studies",
      content:
        "Finally, a platform that bridges the gap between academic research and practical implementation. Our students love the interactive learning approach.",
      avatar: "LP",
    },
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
                Technology Research
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/research" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Research
              </a>
              <a href="/learning" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Learning
              </a>
              <a href="/collaboration" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Collaboration
              </a>
              <a href="/profile" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Profile
              </a>
              <a href="/admin" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Admin
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="outline" size="sm" onClick={() => (window.location.href = "/auth/signin")}>
                  Sign In
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => (window.location.href = "/auth/register")}>
                  Get Started
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="/research"
                  className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2 px-2 rounded-md hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Research
                </a>
                <a
                  href="/learning"
                  className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2 px-2 rounded-md hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learning
                </a>
                <a
                  href="/collaboration"
                  className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2 px-2 rounded-md hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collaboration
                </a>
                <a
                  href="/profile"
                  className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2 px-2 rounded-md hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </a>
                <a
                  href="/admin"
                  className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2 px-2 rounded-md hover:bg-emerald-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </a>
                <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={() => (window.location.href = "/auth/signin")}>
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 w-full" onClick={() => (window.location.href = "/auth/register")}>
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sliding Banner Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div 
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 
                index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-600/60 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold font-serif mb-4 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.title}
                  </h2>
                  <p className={`text-lg md:text-xl lg:text-2xl opacity-90 mb-6 transition-all duration-700 delay-300 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className={`bg-white text-emerald-600 hover:bg-emerald-50 px-6 md:px-8 py-3 transition-all duration-700 delay-500 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    onClick={() => (window.location.href = slide.ctaLink)}
                  >
                    {slide.ctaText}
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm hidden sm:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm hidden sm:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch indicators for mobile */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent sm:hidden" />
        </div>
      </section>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
              🚀 First-of-its-kind Research Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight">
              Where Research Meets
              <span className="text-emerald-600"> Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              The integrated ecosystem combining cutting-edge research, adaptive learning, and industry collaboration.
              Transform academic knowledge into actionable insights across disciplines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                <Play className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 bg-transparent"
              >
                Explore Research
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>10,000+ Research Papers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>500+ Learning Modules</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Industry Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our integrated ecosystem transforms research into actionable knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">AI-Powered Research Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intelligent research discovery and summarization tailored to technology industry needs with advanced
                  AI capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">Adaptive Learning System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized learning paths that adapt to your progress and connect directly to relevant research
                  papers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">Industry Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bridge the gap between academic research and industry application through collaborative tools and
                  insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">Data-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced analytics and optimization algorithms that continuously improve learning outcomes and
                  research impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">Cross-Industry Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built for technology research but designed to scale across industries, creating a universal research-learning
                  ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="font-serif">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Peer-reviewed content and industry-validated learning materials ensure the highest quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">Transform Your Research Journey</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of academic and industry collaboration with our comprehensive platform benefits.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accelerated Learning</h3>
                    <p className="text-gray-600">
                      Reduce research time by 60% with AI-powered summaries and personalized learning paths.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Industry Relevance</h3>
                    <p className="text-gray-600">
                      Connect academic research directly to real-world applications and industry challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative Innovation</h3>
                    <p className="text-gray-600">
                      Foster partnerships between researchers, educators, and industry professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Learning Progress</h3>
                  <Badge className="bg-emerald-100 text-emerald-800">Active</Badge>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>AI in Technology</span>
                      <span className="text-emerald-600 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Sustainable Practices</span>
                      <span className="text-emerald-600 font-medium">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Digital Transformation</span>
                      <span className="text-emerald-600 font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Trending Research</h2>
              <p className="text-xl text-gray-600">Discover the most impactful research papers in technology</p>
            </div>
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingArticles.map((article) => (
              <Card key={article.id} className="border-emerald-100 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-3 bg-emerald-50 text-emerald-700 border-emerald-200">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-serif text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription>by {article.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of researchers, educators, and industry professionals transforming their work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-emerald-100 bg-white">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif text-white mb-6">Ready to Transform Your Research?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the future of research-learning collaboration. Start your journey today with our comprehensive
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3">
              <Award className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-400 text-white hover:bg-emerald-700 px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-emerald-400" />
                <h3 className="text-xl font-bold font-serif">ResearchHub</h3>
              </div>
              <p className="text-gray-400 mb-4">
                The integrated ecosystem for research, learning, and industry collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Research Discovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Learning Modules
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Collaboration Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ResearchHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
