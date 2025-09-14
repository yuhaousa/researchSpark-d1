"use client"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  User,
  MessageSquare,
  Plus,
  Hash,
  FileText,
  ChevronRight,
  Send,
  Edit3,
  Star,
  Eye,
  Download,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function PaperReaderPage() {
  const params = useParams()
  const router = useRouter()
  const paperId = params.id
  const { theme, setTheme } = useTheme()
  
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Dr. Emily Johnson",
      timestamp: "2024-01-20 10:30 AM",
      section: "Introduction",
      content: "This is a fascinating approach to AI personalization. I wonder if the authors considered the privacy implications of collecting such detailed user data.",
      avatar: "EJ"
    },
    {
      id: 2,
      user: "Prof. Michael Chen",
      timestamp: "2024-01-20 2:15 PM",
      section: "Methodology",
      content: "The sample size of 500+ organizations is impressive. However, it would be interesting to see a breakdown by organization size and type.",
      avatar: "MC"
    },
    {
      id: 3,
      user: "Sarah Williams",
      timestamp: "2024-01-21 9:45 AM",
      section: "Results",
      content: "The 23% increase in user satisfaction is significant. Has this been validated in independent studies?",
      avatar: "SW"
    }
  ])

  // Mock paper data
  const paper = {
    id: 1,
    title: "AI-Driven Personalization in Modern Systems: A Comprehensive Analysis",
    authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
    publishedDate: "2024-01-15",
    views: 2847,
    downloads: 342,
    rating: 4.8,
    readingTime: "45 min",
    pages: 28,
  }

  // Paper outline/sections
  const paperOutline = [
    { id: "abstract", title: "Abstract", level: 1, page: 1 },
    { id: "introduction", title: "Introduction", level: 1, page: 2 },
    { id: "background", title: "Background and Related Work", level: 1, page: 4 },
    { id: "ai-systems", title: "AI in Technology Systems", level: 2, page: 5 },
    { id: "personalization-tech", title: "Personalization Technologies", level: 2, page: 7 },
    { id: "methodology", title: "Methodology", level: 1, page: 9 },
    { id: "data-collection", title: "Data Collection", level: 2, page: 10 },
    { id: "analysis-framework", title: "Analysis Framework", level: 2, page: 12 },
    { id: "results", title: "Results and Findings", level: 1, page: 15 },
    { id: "user-satisfaction", title: "User Satisfaction Metrics", level: 2, page: 16 },
    { id: "operational-efficiency", title: "Operational Efficiency", level: 2, page: 19 },
    { id: "discussion", title: "Discussion", level: 1, page: 22 },
    { id: "implications", title: "Practical Implications", level: 2, page: 23 },
    { id: "limitations", title: "Limitations", level: 2, page: 25 },
    { id: "conclusion", title: "Conclusion", level: 1, page: 26 },
    { id: "references", title: "References", level: 1, page: 27 },
  ]

  const [currentSection, setCurrentSection] = useState("abstract")

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: "Current User",
        timestamp: new Date().toLocaleString(),
        section: paperOutline.find(section => section.id === currentSection)?.title || "General",
        content: newComment,
        avatar: "CU"
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push(`/research/${paperId}`)}
                className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-950"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Paper Details
              </Button>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <span className="text-lg font-bold font-serif text-foreground">Paper Reader</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{paper.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>{paper.downloads}</span>
                </div>
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{paper.rating}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-950"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6 min-h-[calc(100vh-120px)]">
          {/* Left Column - Paper Outline */}
          <div className="col-span-3">
            <Card className="h-full border-emerald-100 dark:border-emerald-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif flex items-center gap-2">
                  <Hash className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  Paper Outline
                </CardTitle>
                <CardDescription>Navigate through sections</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto">
                  {paperOutline.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setCurrentSection(section.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors border-l-2 ${
                        currentSection === section.id
                          ? "border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                          : "border-transparent text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${section.level === 2 ? "ml-4" : ""}`}>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform ${
                            currentSection === section.id ? "rotate-90" : ""
                          }`} 
                        />
                        <div>
                          <div className="font-medium text-sm">{section.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">Page {section.page}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Paper Content */}
          <div className="col-span-6">
            <Card className="h-full border-emerald-100 dark:border-emerald-900">
              <CardHeader className="border-b dark:border-emerald-900">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-serif leading-tight mb-2">
                      {paper.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{paper.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                    {paperOutline.find(section => section.id === currentSection)?.title}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose max-w-none h-[calc(100vh-300px)] overflow-y-auto dark:prose-invert prose-emerald">
                  {currentSection === "abstract" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Abstract</h2>
                      <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        This study examines the implementation of artificial intelligence in system personalization, 
                        analyzing data from 500+ organizations worldwide to understand user satisfaction improvements and 
                        operational efficiency gains.
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        Through comprehensive analysis of AI-driven personalization strategies across diverse 
                        organizations, we demonstrate significant improvements in user experience metrics. Our findings 
                        reveal that organizations implementing advanced AI personalization systems achieve an average 23% 
                        increase in user satisfaction scores and 18% improvement in operational efficiency.
                      </p>
                    </div>
                  )}
                  
                  {currentSection === "introduction" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        Modern technology systems have undergone significant transformation in recent years, driven by 
                        technological advances and changing user expectations. Artificial intelligence (AI) has 
                        emerged as a critical enabler of personalized user experiences, allowing organizations to anticipate 
                        and meet individual preferences at unprecedented scale.
                      </p>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        This research investigates the implementation and impact of AI-driven personalization across 
                        a diverse portfolio of technology organizations. We examine how machine learning algorithms, predictive 
                        analytics, and automated recommendation systems contribute to enhanced user satisfaction and 
                        operational efficiency.
                      </p>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Research Objectives</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Analyze the implementation patterns of AI personalization across different organization types</li>
                        <li>Measure the impact on user satisfaction and operational metrics</li>
                        <li>Identify best practices and common challenges in AI deployment</li>
                        <li>Provide recommendations for future AI personalization strategies</li>
                      </ul>
                    </div>
                  )}
                  
                  {currentSection === "methodology" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Methodology</h2>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        Our research employed a mixed-methods approach, combining quantitative analysis of operational 
                        data with qualitative insights from industry stakeholders. The study encompassed 523 
                        organizations across 25 countries, representing various market segments and operational scales.
                      </p>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Data Collection Framework</h3>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        Data collection occurred over an 18-month period (January 2022 - June 2023), allowing for 
                        comprehensive analysis of seasonal variations and implementation maturity. We gathered both 
                        pre- and post-implementation metrics to establish clear baseline comparisons.
                      </p>
                      <h4 className="text-lg font-medium mb-2 text-foreground">Primary Data Sources:</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-4 text-muted-foreground">
                        <li>User satisfaction surveys (n=47,892)</li>
                        <li>Operational efficiency metrics</li>
                        <li>System performance data</li>
                        <li>Staff productivity measurements</li>
                        <li>System performance analytics</li>
                      </ul>
                    </div>
                  )}
                  
                  {currentSection === "results" && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Results and Findings</h2>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        Our analysis reveals significant positive impacts across multiple performance dimensions. 
                        Organizations implementing comprehensive AI personalization strategies consistently outperformed 
                        control groups across all measured metrics.
                      </p>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Key Performance Improvements</h3>
                      <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Primary Outcomes</h4>
                        <ul className="space-y-2 text-emerald-700 dark:text-emerald-400">
                          <li>• User satisfaction: +23% average improvement</li>
                          <li>• Operational efficiency: +18% improvement in resource utilization</li>
                          <li>• System performance: +15% increase in overall metrics</li>
                          <li>• User retention rates: +31% improvement</li>
                          <li>• Staff productivity: +22% enhancement</li>
                        </ul>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        These improvements were consistent across different organization categories, though enterprise-level organizations 
                        showed marginally higher gains in user satisfaction metrics, while smaller organizations 
                        demonstrated greater operational efficiency improvements.
                      </p>
                    </div>
                  )}
                  
                  {/* Add more sections as needed */}
                  {!["abstract", "introduction", "methodology", "results"].includes(currentSection) && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-foreground">
                        {paperOutline.find(section => section.id === currentSection)?.title}
                      </h2>
                      <p className="leading-relaxed mb-4 text-muted-foreground">
                        This section contains detailed content for {paperOutline.find(section => section.id === currentSection)?.title}. 
                        In a real implementation, this would be the actual paper content loaded dynamically based on the selected section.
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        The content would include charts, graphs, tables, and detailed analysis relevant to this particular 
                        section of the research paper. Interactive elements and cross-references to other sections would 
                        enhance the reading experience.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Comments */}
          <div className="col-span-3">
            <Card className="h-full border-emerald-100 dark:border-emerald-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-serif flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  Comments & Notes
                </CardTitle>
                <CardDescription>
                  {comments.length} comment{comments.length !== 1 ? 's' : ''} on this paper
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto px-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-l-2 border-emerald-200 dark:border-emerald-800 pl-4 py-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center text-xs font-medium text-emerald-700 dark:text-emerald-300">
                          {comment.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-sm text-foreground">{comment.user}</div>
                          <div className="text-xs text-muted-foreground">{comment.timestamp}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs mb-2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                        {comment.section}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">{comment.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Add Comment Section */}
                <div className="border-t dark:border-emerald-900 p-4 mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Edit3 className="h-4 w-4" />
                      <span>Add comment to: {paperOutline.find(section => section.id === currentSection)?.title}</span>
                    </div>
                    <Textarea
                      placeholder="Share your thoughts, questions, or insights about this section..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[80px] resize-none border-emerald-200 focus:border-emerald-500 dark:border-emerald-800 dark:focus:border-emerald-400 dark:bg-background"
                    />
                    <Button 
                      onClick={addComment}
                      size="sm" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                      disabled={!newComment.trim()}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Add Comment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}