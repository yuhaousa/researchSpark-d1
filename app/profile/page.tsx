"use client"
import {
  User,
  Building,
  MapPin,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  TrendingUp,
  Edit,
  Save,
  Camera,
  Plus,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"

export default function LearnerProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [newSkill, setNewSkill] = useState("")
  const [newInterest, setNewInterest] = useState("")

  const [profile, setProfile] = useState({
    name: "Sarah Martinez",
    email: "sarah.martinez@grandhotel.com",
    position: "Hotel Operations Manager",
    jobTitle: "Senior Operations Manager",
    organization: "Grand Plaza Hotel & Resort",
    location: "Miami, Florida",
    yearsExperience: "8",
    department: "Operations",
    bio: "Passionate hospitality professional with 8 years of experience in luxury hotel operations. Focused on implementing innovative solutions to enhance guest experience and operational efficiency.",
    learningObjectives: [
      "Master AI-driven personalization techniques",
      "Develop sustainable hospitality practices",
      "Enhance revenue management strategies",
      "Improve guest satisfaction metrics",
    ],
    innovationNeeds: [
      "Digital transformation in guest services",
      "Sustainable operations implementation",
      "Staff training optimization",
      "Revenue optimization tools",
    ],
    skills: [
      { name: "Operations Management", level: 9 },
      { name: "Guest Relations", level: 8 },
      { name: "Team Leadership", level: 7 },
      { name: "Revenue Management", level: 6 },
      { name: "Quality Assurance", level: 8 },
      { name: "Digital Technology", level: 5 },
      { name: "Sustainability Practices", level: 4 },
    ],
    interests: [
      { name: "AI in Hospitality", paperId: "ai-personalization-hotels" },
      { name: "Sustainability", paperId: "sustainable-hotel-operations" },
      { name: "Guest Experience", paperId: "digital-guest-journey" },
      { name: "Digital Innovation", paperId: "iot-smart-hotels" },
      { name: "Staff Development", paperId: "hospitality-training-methods" },
    ],
  })

  const addLearningObjective = () => {
    if (newSkill.trim()) {
      setProfile({
        ...profile,
        learningObjectives: [...profile.learningObjectives, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  const addInnovationNeed = () => {
    if (newInterest.trim()) {
      setProfile({
        ...profile,
        innovationNeeds: [...profile.innovationNeeds, newInterest.trim()],
      })
      setNewInterest("")
    }
  }

  const removeLearningObjective = (index: number) => {
    setProfile({
      ...profile,
      learningObjectives: profile.learningObjectives.filter((_, i) => i !== index),
    })
  }

  const removeInnovationNeed = (index: number) => {
    setProfile({
      ...profile,
      innovationNeeds: profile.innovationNeeds.filter((_, i) => i !== index),
    })
  }

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
                Learner Profile
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
              <a href="/collaboration" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
                Collaboration
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className={isEditing ? "bg-emerald-600 hover:bg-emerald-700" : ""}
              >
                {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                {isEditing ? "Save Profile" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="border-emerald-100">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-2xl font-bold">
                      {profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-3">
                      <Input
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="text-2xl font-bold font-serif"
                      />
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        type="email"
                      />
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-3xl font-bold font-serif text-foreground mb-2">{profile.name}</h1>
                      <p className="text-muted-foreground mb-4">{profile.email}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                      <Building className="h-3 w-3 mr-1" />
                      {profile.organization}
                    </Badge>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                      <User className="h-3 w-3 mr-1" />
                      {profile.position}
                    </Badge>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                      <MapPin className="h-3 w-3 mr-1" />
                      {profile.location}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Professional Information */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Building className="h-5 w-5 mr-2 text-emerald-600" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Position</label>
                  {isEditing ? (
                    <Input
                      value={profile.position}
                      onChange={(e) => setProfile({ ...profile, position: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-foreground font-medium">{profile.position}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Job Title</label>
                  {isEditing ? (
                    <Input
                      value={profile.jobTitle}
                      onChange={(e) => setProfile({ ...profile, jobTitle: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-foreground font-medium">{profile.jobTitle}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Organization</label>
                  {isEditing ? (
                    <Input
                      value={profile.organization}
                      onChange={(e) => setProfile({ ...profile, organization: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-foreground font-medium">{profile.organization}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Years of Experience</label>
                    {isEditing ? (
                      <Select
                        value={profile.yearsExperience}
                        onValueChange={(value) => setProfile({ ...profile, yearsExperience: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-foreground font-medium">{profile.yearsExperience} years</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Department</label>
                    {isEditing ? (
                      <Select
                        value={profile.department}
                        onValueChange={(value) => setProfile({ ...profile, department: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Operations">Operations</SelectItem>
                          <SelectItem value="Front Office">Front Office</SelectItem>
                          <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                          <SelectItem value="Housekeeping">Housekeeping</SelectItem>
                          <SelectItem value="Sales & Marketing">Sales & Marketing</SelectItem>
                          <SelectItem value="Human Resources">Human Resources</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="IT">IT</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-foreground font-medium">{profile.department}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bio */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <User className="h-5 w-5 mr-2 text-emerald-600" />
                  Professional Bio
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={6}
                    placeholder="Tell us about your professional background and interests..."
                  />
                ) : (
                  <p className="text-foreground leading-relaxed">{profile.bio}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Learning Objectives */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif flex items-center">
                <Target className="h-5 w-5 mr-2 text-emerald-600" />
                Learning Objectives
              </CardTitle>
              <CardDescription>What do you want to achieve through your learning journey?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profile.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-foreground">{objective}</span>
                    </div>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeLearningObjective(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <div className="flex space-x-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a new learning objective..."
                      onKeyPress={(e) => e.key === "Enter" && addLearningObjective()}
                    />
                    <Button onClick={addLearningObjective} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Innovation Needs & Interests */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-emerald-600" />
                Innovation Needs & Interests
              </CardTitle>
              <CardDescription>
                Areas where you're seeking innovative solutions or have particular interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profile.innovationNeeds.map((need, index) => (
                  <div key={index} className="flex items-center justify-between bg-amber-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="h-4 w-4 text-amber-600" />
                      <span className="text-foreground">{need}</span>
                    </div>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeInnovationNeed(index)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <div className="flex space-x-2">
                    <Input
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      placeholder="Add an innovation need or interest..."
                      onKeyPress={(e) => e.key === "Enter" && addInnovationNeed()}
                    />
                    <Button onClick={addInnovationNeed} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Award className="h-5 w-5 mr-2 text-emerald-600" />
                  Professional Skills
                </CardTitle>
                <CardDescription>Your expertise levels in key areas (1-10 scale)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                          {skill.level}/10
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                  Research Interests
                </CardTitle>
                <CardDescription>Click to explore related research papers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <Link key={index} href={`/research?interest=${encodeURIComponent(interest.name)}`}>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 transition-colors cursor-pointer">
                        {interest.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Progress */}
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="font-serif flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                Learning Progress
              </CardTitle>
              <CardDescription>Your current learning journey and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">45</div>
                  <p className="text-sm text-muted-foreground">Papers Read</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Certificates Earned</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>AI in Hospitality Specialization</span>
                    <span className="text-emerald-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sustainable Operations Certificate</span>
                    <span className="text-emerald-600 font-medium">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Digital Transformation in Hotels</span>
                    <span className="text-emerald-600 font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
