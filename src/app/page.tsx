"use client";

import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiTensorflow, SiOpenai, SiMongodb, SiPostgresql, 
  SiRedis, SiDocker, SiGooglecloud, SiGit, 
  SiTailwindcss, SiExpress, SiFastapi, SiSpring 
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

// Animation variants - Faster animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 150,
      duration: 0.4
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 200,
      duration: 0.3
    }
  }
};

// Experience Counter Component
const ExperienceCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2019-06-01T00:00:00'); // June 1, 2019
    
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);
      
      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const counterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        staggerChildren: 0.1
      }
    }
  };

  const digitVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      className="mb-6 text-center"
      variants={itemVariants}
    >
      <motion.h2 
        className="text-xl font-semibold text-white text-center mb-4"
        variants={itemVariants}
      >
        Experience
      </motion.h2>
      
      <motion.div 
        className="mb-4"
        variants={counterVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-items-center mb-3">
          {[
            { value: timeElapsed.years, label: 'Years' },
            { value: timeElapsed.months, label: 'Months' },
            { value: timeElapsed.days, label: 'Days' },
            { value: timeElapsed.hours, label: 'Hours' },
            { value: timeElapsed.minutes, label: 'Minutes' },
            { value: timeElapsed.seconds, label: 'Seconds' }
          ].map((item) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center"
              variants={digitVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 min-w-[50px]"
                animate={{ 
                  scale: item.label === 'Seconds' ? [1, 1.05, 1] : 1,
                }}
                transition={{ 
                  duration: 0.3,
                  repeat: item.label === 'Seconds' ? Infinity : 0,
                  repeatDelay: 0.7
                }}
              >
                <motion.span 
                  className="text-sm md:text-base font-bold text-white block"
                  key={item.value}
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.span>
              </motion.div>
              <span className="text-xs text-gray-400 mt-1 font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.p 
        className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto"
        variants={itemVariants}
      >
        While you&apos;re reading this, I&apos;m gaining experience solving some complex task. Hit me up if you need help.
      </motion.p>
    </motion.section>
  );
};

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
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div 
        className="max-w-2xl mx-auto px-6 py-6 md:py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.section 
          className="flex flex-col items-center text-center mb-5"
          variants={itemVariants}
        >
          <motion.div 
            className="relative mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/Adarsh.jpeg"
              alt="Adarsh Pandey"
              width={96}
              height={96}
              className="rounded-full object-cover shadow-lg border-2 border-gray-600"
            />
          </motion.div>
          
          <motion.h1 
            className="text-2xl font-semibold text-white mb-2"
            variants={itemVariants}
          >
            Adarsh Pandey
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 mb-4 text-sm"
            variants={itemVariants}
          >
            India
          </motion.p>
          
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.section>

        {/* Bio Section */}
        <motion.section 
          className="text-center mb-5 space-y-3"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            A <strong className="text-white">Generalist Engineer</strong> who thrives wherever a solution is needed. I&apos;m fascinated by how{" "}
            <strong className="text-white">GenAI</strong> can transform the way we work and create. Currently exploring how human intelligence can work with artificial intelligence to create abundance.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            you can find me on{" "}
            <motion.a 
              href="https://www.linkedin.com/in/adarsh-pandey-2017/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="w-3 h-3" />
              LinkedIn
            </motion.a>
            ,{" "}
            <motion.a 
              href="https://github.com/adarshp14" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Github className="w-3 h-3" />
              Github
            </motion.a>
            ,{" "}
            <motion.a 
              href="https://x.com/AdarshPandey355" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Twitter className="w-3 h-3" />
              X
            </motion.a>
            , or{" "}
            <motion.a 
              href="mailto:adarshpofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-3 h-3" />
              Email
            </motion.a>
          </motion.p>
        </motion.section>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-5"
          variants={itemVariants}
        ></motion.div>

        {/* Tech Stack Section */}
        <motion.section 
          className="mb-6"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-xl font-semibold text-white text-center mb-4"
            variants={itemVariants}
          >
            Tech Stack
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 justify-items-center"
            variants={containerVariants}
          >
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative flex flex-col items-center"
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 }
                  }}
                  custom={index}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-gray-900/30 border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-xl hover:shadow-black/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent 
                      className="w-5 h-5 transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg" 
                      style={{ 
                        color: tech.color,
                        filter: 'brightness(0.9)',
                        ...(tech.color === "#000000" && { color: "#ffffff" })
                      }}
                    />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 border border-gray-700 pointer-events-none">
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-5"
          variants={itemVariants}
        ></motion.div>

        {/* Experience Section */}
        <ExperienceCounter />

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-5"
          variants={itemVariants}
        ></motion.div>

        {/* Projects Section */}
        <motion.section variants={itemVariants}>
          <motion.h2 
            className="text-xl font-semibold text-white text-center mb-4"
            variants={itemVariants}
          >
            I built
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {/* AI Portrait Studio */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-sm font-semibold text-white"
                variants={itemVariants}
              >
                AI Portrait Studio
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-xs leading-relaxed"
                variants={itemVariants}
              >
                Full-stack AI portrait generation platform with custom styling capabilities.
              </motion.p>
              <motion.a 
                href="https://github.com/adarshp14/ai-portrait-frontend" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-3 h-3" />
                View Repo
              </motion.a>
            </motion.div>

            {/* Universal SQL Agent */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-sm font-semibold text-white">Universal SQL Agent</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-powered SQL query and database interaction tool bridging natural language with databases.
              </p>
              <motion.a 
                href="https://github.com/adarshp14/universal-sql-agent" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-3 h-3" />
                View Repo
              </motion.a>
            </motion.div>

            {/* AgentInsights */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-sm font-semibold text-white">AgentInsights</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-driven analytics platform providing professional insights and business intelligence.
              </p>
              <motion.a 
                href="https://github.com/adarshp14/AgentInsights" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-3 h-3" />
                View Repo
              </motion.a>
            </motion.div>

            {/* Deep Research V1 */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-sm font-semibold text-white">Deep Research V1</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                AI-powered research assistance tool that gathers and synthesizes information from multiple sources.
              </p>
              <motion.a 
                href="https://github.com/adarshp14/deep-research-v1" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-3 h-3" />
                View Repo
              </motion.a>
            </motion.div>

            {/* Guardian Crew */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-sm font-semibold text-white">Guardian Crew</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Security and monitoring solution that provides comprehensive system oversight and threat detection.
              </p>
              <motion.a 
                href="https://github.com/adarshp14/GuardianCrew" 
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
                whileHover={{ scale: 1.05 }}
              >
                <Github className="w-3 h-3" />
                View Repo
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
}