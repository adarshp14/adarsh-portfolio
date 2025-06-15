import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <Image
              src="/profile.svg"
              alt="Adarsh Pandey"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
          
          <h1 className="text-2xl font-semibold text-white mb-2">
            Adarsh Pandey
          </h1>
          
          <p className="text-gray-400 mb-4 text-sm">
            Bengaluru, India
          </p>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white transition-colors text-xs px-3 py-1"
          >
            <FileText className="w-3 h-3" />
            View Resume
          </Button>
        </section>

        {/* Bio Section */}
        <section className="text-center mb-8 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            A <strong className="text-white">Frontend Engineer</strong>, deeply passionate about{" "}
            <strong className="text-white">GenAI</strong>. I&apos;m experimenting with{" "}
            <strong className="text-white">SlidesAI</strong> - a Prompt to PPT builder.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Wrote my first line of code in 2019.{" "}
            <strong className="text-white">Currently part of</strong> &quot;building AI agents easier for everyone&quot;
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            you can find me on{" "}
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3" />
              LinkedIn
            </a>
            ,{" "}
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              Github
            </a>
            , or{" "}
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
            >
              <Twitter className="w-3 h-3" />
              Twitter
            </a>
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-white text-center mb-8">
            I built
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SlidesAI */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">SlidesAI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Just a fun experiment to generate PPT slides using AI. Uses SarvamAI as underlying LLM.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Website
                </a>
              </div>
            </div>

            {/* VoiceNextPI */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">VoiceNextPI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                PoC for a embedded AI support agent. Can be embedded in any website with 1 line script. Uses Gemini Flash.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Website
                </a>
              </div>
            </div>

            {/* LemmaAI */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">LemmaAI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered research assistant that helps you find, analyze, and synthesize information from multiple sources.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <Github className="w-3 h-3" />
                  View Repo
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Website
                </a>
              </div>
            </div>

            {/* Noterr */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Noterr</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Smart note-taking app with AI-powered organization and search capabilities. Built with React and Firebase.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <Github className="w-3 h-3" />
                  View Repo
                </a>
              </div>
            </div>

            {/* Updatly */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Updatly</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Real-time project update tracker for teams. Keep everyone in sync with automated status reports.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}