import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  User, 
  Play, 
  Star,
  Target,
  AlertTriangle,
  FileText,
  Download,
  Copy,
  Heart,
  MessageCircle,
  ThumbsUp,
  Globe,
  Search,
  Database,
  Key,
  Zap,
  CheckCircle,
  ChevronRight,
  Eye,
  BarChart3
} from "lucide-react";

export default function WorkflowDetail() {
  const { workflowName } = useParams<{ workflowName: string }>();

  // Mock workflow data - in real app, fetch based on workflowName
  const workflow = {
    name: workflowName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Web Application Security Assessment",
    description: "Comprehensive security testing workflow for web applications including OWASP Top 10 vulnerabilities, authentication bypass testing, and automated reporting with AI-powered analysis.",
    author: {
      name: "SecurityExpert_2024",
      avatar: "/placeholder.svg",
      reputation: 4.9,
      workflows: 23
    },
    stats: {
      rating: 4.8,
      runs: 1247,
      likes: 89,
      duration: "2-4 hours",
      difficulty: "Intermediate",
      lastUpdated: "2024-01-15"
    },
    steps: [
      {
        id: 1,
        title: "Initial Reconnaissance",
        description: "Perform target enumeration and information gathering using automated tools and manual techniques.",
        icon: Search,
        tools: ["Nmap", "Amass", "Subfinder"],
        estimatedTime: "30-45 minutes",
        details: [
          "Subdomain enumeration and discovery",
          "Port scanning and service detection",
          "Technology stack identification",
          "Directory and file enumeration"
        ]
      },
      {
        id: 2,
        title: "Vulnerability Scanning",
        description: "Automated vulnerability assessment using industry-standard tools and custom scripts.",
        icon: Target,
        tools: ["OWASP ZAP", "Nuclei", "Custom Scripts"],
        estimatedTime: "45-60 minutes",
        details: [
          "OWASP Top 10 vulnerability scanning",
          "CVE database cross-referencing",
          "Custom payload testing",
          "False positive filtering"
        ]
      },
      {
        id: 3,
        title: "Authentication Testing",
        description: "Test authentication mechanisms, session management, and access controls.",
        icon: Key,
        tools: ["Burp Suite", "SQLMap", "Custom Tools"],
        estimatedTime: "60-90 minutes",
        details: [
          "Login mechanism analysis",
          "Session token security testing",
          "Password policy evaluation",
          "Multi-factor authentication bypass attempts"
        ]
      },
      {
        id: 4,
        title: "Database Security",
        description: "Assess database security including SQL injection and data exposure vulnerabilities.",
        icon: Database,
        tools: ["SQLMap", "NoSQLMap", "Custom Queries"],
        estimatedTime: "45-60 minutes",
        details: [
          "SQL injection vulnerability testing",
          "NoSQL injection assessment",
          "Database privilege escalation",
          "Data leakage detection"
        ]
      },
      {
        id: 5,
        title: "Exploitation & PoC",
        description: "Develop proof-of-concept exploits for identified vulnerabilities.",
        icon: Zap,
        tools: ["Metasploit", "Custom Exploits", "Burp Suite"],
        estimatedTime: "60-90 minutes",
        details: [
          "Exploit development and testing",
          "Proof-of-concept creation",
          "Impact assessment",
          "Risk validation"
        ]
      },
      {
        id: 6,
        title: "Report Generation",
        description: "Generate comprehensive security assessment reports with AI-powered insights.",
        icon: FileText,
        tools: ["AI Report Generator", "Custom Templates"],
        estimatedTime: "30-45 minutes",
        details: [
          "Executive summary generation",
          "Technical findings documentation",
          "Risk prioritization matrix",
          "Remediation recommendations"
        ]
      }
    ],
    tools: [
      { name: "Nmap", icon: "🔍" },
      { name: "Burp Suite", icon: "🕷️" },
      { name: "SQLMap", icon: "🗄️" },
      { name: "OWASP ZAP", icon: "⚡" },
      { name: "Metasploit", icon: "💥" },
      { name: "Nuclei", icon: "🎯" }
    ],
    compliance: ["OWASP", "PCI DSS", "ISO 27001", "NIST"],
    tags: ["Web Security", "Penetration Testing", "Vulnerability Assessment", "OWASP", "Automation"],
    comments: [
      {
        id: 1,
        author: "PentestPro",
        avatar: "/placeholder.svg",
        content: "Excellent workflow! The AI-powered reporting feature saves hours of manual work. Highly recommended for web app assessments.",
        timestamp: "2 days ago",
        likes: 12
      },
      {
        id: 2,
        author: "CyberDefender",
        avatar: "/placeholder.svg",
        content: "Used this for our recent security audit. The automation is impressive and the results were comprehensive.",
        timestamp: "1 week ago",
        likes: 8
      }
    ]
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">{/* Add padding top for fixed navbar */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Breadcrumb 
              items={[
                { label: 'Workflows', href: '/workflows' },
                { label: workflowName || 'Workflow Detail', href: `#` }
              ]}
            />
          </div>
          <div className="container mx-auto px-6 py-12">
            {/* Header Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Public Workflow
                </Badge>
                {workflow.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-white/70 border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{workflow.name}</h1>
              <p className="text-xl text-white/80 mb-6 max-w-4xl leading-relaxed">{workflow.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{workflow.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span>{workflow.stats.rating}/5 ({workflow.stats.runs} runs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{workflow.stats.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Updated {workflow.stats.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Play className="h-5 w-5 mr-2" />
                  Run Workflow
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Copy className="h-5 w-5 mr-2" />
                  Copy to My Workflows
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  <Download className="h-5 w-5 mr-2" />
                  Export JSON
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="workflow" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/5 border-white/10">
                    <TabsTrigger value="workflow" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                      Workflow Overview
                    </TabsTrigger>
                    <TabsTrigger value="steps" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                      Detailed Steps
                    </TabsTrigger>
                    <TabsTrigger value="community" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                      Community
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="workflow">
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Workflow Steps Overview */}
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center gap-2">
                            <Target className="h-6 w-6 text-orange-400" />
                            Workflow Steps
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {workflow.steps.map((step, index) => (
                              <motion.div
                                key={step.id}
                                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                                    {step.id}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <step.icon className="h-4 w-4 text-orange-400" />
                                      <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                                        {step.title}
                                      </h3>
                                    </div>
                                    <p className="text-white/70 text-sm mb-2">{step.description}</p>
                                    <div className="flex items-center gap-2 text-xs text-white/50">
                                      <Clock className="h-3 w-3" />
                                      <span>{step.estimatedTime}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-white/30 group-hover:text-orange-400 transition-colors" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Tools & Compliance */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2">
                              <Shield className="h-5 w-5 text-orange-400" />
                              Tools Used
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                              {workflow.tools.map((tool, index) => (
                                <Tooltip key={index}>
                                  <TooltipTrigger>
                                    <div className="flex items-center gap-2 p-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
                                      <span className="text-lg">{tool.icon}</span>
                                      <span className="text-white/80 text-sm">{tool.name}</span>
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Click to learn more about {tool.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-orange-400" />
                              Compliance
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {workflow.compliance.map((standard, index) => (
                                <Badge key={index} variant="outline" className="border-green-500/30 text-green-400">
                                  {standard}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="steps">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Accordion type="single" collapsible className="space-y-4">
                        {workflow.steps.map((step, index) => (
                          <AccordionItem key={step.id} value={`step-${step.id}`} className="border border-white/10 rounded-lg bg-white/5">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5">
                              <div className="flex items-center gap-4 text-left">
                                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
                                  {step.id}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <step.icon className="h-5 w-5 text-orange-400" />
                                    <h3 className="font-semibold text-white">{step.title}</h3>
                                  </div>
                                  <p className="text-white/70 text-sm">{step.description}</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                              <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-white/60">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>Estimated time: {step.estimatedTime}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Shield className="h-4 w-4" />
                                    <span>Tools: {step.tools.join(", ")}</span>
                                  </div>
                                </div>
                                <Separator className="bg-white/10" />
                                <div>
                                  <h4 className="font-medium text-white mb-3">Step Details:</h4>
                                  <ul className="space-y-2">
                                    {step.details.map((detail, detailIndex) => (
                                      <li key={detailIndex} className="flex items-start gap-2 text-white/70 text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="community">
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center gap-2">
                            <MessageCircle className="h-5 w-5 text-orange-400" />
                            Comments & Discussions
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {workflow.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4">
                              <Avatar>
                                <AvatarImage src={comment.avatar} />
                                <AvatarFallback>{comment.author[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-medium text-white">{comment.author}</span>
                                  <span className="text-white/50 text-sm">{comment.timestamp}</span>
                                </div>
                                <p className="text-white/80 mb-3">{comment.content}</p>
                                <div className="flex items-center gap-4">
                                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    {comment.likes}
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Author Info */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarImage src={workflow.author.avatar} />
                        <AvatarFallback>{workflow.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-white">{workflow.author.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-white/60">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>{workflow.author.reputation}</span>
                          <span>•</span>
                          <span>{workflow.author.workflows} workflows</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      Follow Author
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Rating:</span>
                      <span className="text-white">{workflow.stats.rating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Total Runs:</span>
                      <span className="text-white">{workflow.stats.runs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Last Updated:</span>
                      <span className="text-white">{workflow.stats.lastUpdated}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Workflows */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Related Workflows</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {["API Security Testing", "Mobile App Assessment", "Network Penetration Test"].map((title, index) => (
                      <div key={index} className="p-3 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h4 className="font-medium text-white text-sm mb-1">{title}</h4>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span>4.{7 + index}</span>
                          <span>•</span>
                          <span>{500 + index * 100} runs</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </TooltipProvider>
  );
}