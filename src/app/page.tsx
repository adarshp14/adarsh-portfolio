import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiTensorflow, SiOpenai, SiMongodb, SiPostgresql, 
  SiRedis, SiDocker, SiGooglecloud, SiGit, 
  SiTailwindcss, SiExpress, SiFastapi, SiSpring 
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

const techStack = [
  // Frontend
  { icon: SiReact, name: "React", category: "Frontend", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", category: "Frontend", color: "#000000" },
  { icon: SiTypescript, name: "TypeScript", category: "Frontend", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", category: "Frontend", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Frontend", color: "#06B6D4" },
  
  // Backend
  { icon: SiNodedotjs, name: "Node.js", category: "Backend", color: "#339933" },
  { icon: SiPython, name: "Python", category: "Backend", color: "#3776AB" },
  { icon: FaJava, name: "Java", category: "Backend", color: "#ED8B00" },
  { icon: SiExpress, name: "Express.js", category: "Backend", color: "#000000" },
  { icon: SiSpring, name: "Spring Boot", category: "Backend", color: "#6DB33F" },
  { icon: SiFastapi, name: "FastAPI", category: "Backend", color: "#009688" },
  
  // AI/ML
  { icon: SiTensorflow, name: "TensorFlow", category: "AI/ML", color: "#FF6F00" },
  { icon: SiOpenai, name: "OpenAI", category: "AI/ML", color: "#412991" },
  
  // Database
  { icon: SiMongodb, name: "MongoDB", category: "Database", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Database", color: "#4169E1" },
  { icon: SiRedis, name: "Redis", category: "Database", color: "#DC382D" },
  
  // DevOps
  { icon: SiDocker, name: "Docker", category: "DevOps", color: "#2496ED" },
  { icon: FaAws, name: "AWS", category: "DevOps", color: "#FF9900" },
  { icon: SiGooglecloud, name: "Google Cloud", category: "DevOps", color: "#4285F4" },
  { icon: SiGit, name: "Git", category: "DevOps", color: "#F05032" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-4">
            <Image
              src="/Adarsh.jpeg"
              alt="Adarsh Pandey"
              width={96}
              height={96}
              className="rounded-full object-cover shadow-lg border-2 border-gray-600"
            />
          </div>
          
          <h1 className="text-2xl font-semibold text-white mb-2">
            Adarsh Pandey
          </h1>
          
          <p className="text-gray-400 mb-4 text-sm">
            India
          </p>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white transition-colors text-xs px-3 py-1"
            asChild
          >
            <a href="/Adarsh_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-3 h-3" />
              View Resume
            </a>
          </Button>
        </section>

        {/* Bio Section */}
        <section className="text-center mb-6 space-y-3">
          <p className="text-gray-300 leading-relaxed">
            A <strong className="text-white">Generalist Engineer</strong> who thrives wherever a solution is needed. I&apos;m fascinated by how{" "}
            <strong className="text-white">GenAI</strong> can transform the way we work and create. Currently exploring how human intelligence can work with artificial intelligence to create abundance.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            you can find me on{" "}
            <a 
              href="https://www.linkedin.com/in/adarsh-pandey-2017/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3" />
              LinkedIn
            </a>
            ,{" "}
            <a 
              href="https://github.com/adarshp14" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              Github
            </a>
            ,{" "}
            <a 
              href="https://x.com/AdarshPandey355" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Twitter className="w-3 h-3" />
              X
            </a>
            , or{" "}
            <a 
              href="mailto:adarshpofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Email
            </a>
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Tech Stack Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 justify-items-center">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center"
                >
                  <div className="p-2 rounded-lg bg-gray-900/30 border border-gray-800 transition-all duration-300 hover:scale-110 hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30">
                    <IconComponent 
                      className="w-5 h-5 transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg" 
                      style={{ 
                        color: tech.color,
                        filter: 'brightness(0.9)',
                        ...(tech.color === "#000000" && { color: "#ffffff" })
                      }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-gray-700">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            I built
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* AI Portrait Studio */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">AI Portrait Studio</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Full-stack AI portrait generation platform with custom styling capabilities.
              </p>
              <a 
                href="https://github.com/adarshp14/ai-portrait-frontend" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            </div>

            {/* Universal SQL Agent */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Universal SQL Agent</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-powered SQL query and database interaction tool bridging natural language with databases.
              </p>
              <a 
                href="https://github.com/adarshp14/universal-sql-agent" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            </div>

            {/* AgentInsights */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">AgentInsights</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-driven analytics platform providing professional insights and business intelligence.
              </p>
              <a 
                href="https://github.com/adarshp14/AgentInsights" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            </div>

            {/* Deep Research V1 */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Deep Research V1</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-powered research assistance tool that gathers and synthesizes information from multiple sources.
              </p>
              <a 
                href="https://github.com/adarshp14/deep-research-v1" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            </div>

            {/* Guardian Crew */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Guardian Crew</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Security and monitoring solution that provides comprehensive system oversight and threat detection.
              </p>
              <a 
                href="https://github.com/adarshp14/GuardianCrew" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
              >
                <Github className="w-3 h-3" />
                View Repo
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}