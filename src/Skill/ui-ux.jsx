import React from "react";
import { Link } from "react-router-dom";
import { Palette, Sparkles, Github } from "lucide-react";

const UIUX_PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Math Learning Platform - Gradation project (Accenture)",
    desc:
      "Designed an AI-driven learning platform with an intuitive, user-centered interface that redefines math education through gesture and handwriting recognition. The platform transforms problem-solving into an engaging, interactive experience, enabling teachers to effortlessly track progress, create quizzes, and view real-time analytics.",
    img: "https://images.unsplash.com/photo-1749544811972-4ff163f3ad49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "https://math-gesture-program.netlify.app",
  },
  {
    id: 2,
    title: "Youth Travel Experience Solution - Accenture Innovation Hub",
    desc:
      "Participated in Accenture’s Innovation Hub Challenge, where our team designed an innovative solution to enhance the youth travel journey with greater engagement. The project involved building a comprehensive business case covering feasibility, costs, and value proposition, alongside a proposed digital experience supported by UI/UX design prototypes.",
    img: "https://images.unsplash.com/photo-1749544811712-bfa0f7aec2f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "/UIUXProject - MjdAlamri.pdf",
  },
  {
    id: 3,
    title: "Smart Hotel Review Sentiment Analysis System",
    desc:
      "Developed a system that analyzes hotel guest reviews, performs sentiment classification, and visualizes insights through an intuitive, user-friendly dashboard. Designed and optimized the UI/UX to ensure clarity and engagement, empowering travelers to make confident booking decisions and helping hotels enhance service quality in line with Saudi Vision 2030 tourism goals.",
    img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "/MjdAlamri - Smart Hotel Review Sentiment Analysis System.pdf",
  },
  {
    id: 4,
    title: "CareerBridge – AI-Powered Career Readiness App",
    desc:
      "CareerBridge is an AI-driven platform designed to bridge the gap between education and the job market. It helps students and professionals identify skill gaps, follow personalized career roadmaps, and prepare for their dream roles through smart CV analysis and AI-powered interview practice. By combining guided learning with actionable insights, CareerBridge transforms education into employability.",
    img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "/CareerBridge Prototype.pdf",
  },
  {
    id: 5,
    title: "GastroAI – AI-Powered Smart Fridge Assistant",
    desc:
      "Smart Fridge Assistant is an AI-powered app that turns your fridge into a personal chef. By detecting ingredients from a single photo, it generates customized recipes and creates a smart shopping list in a HungerStation-style interface. It saves time, reduces food waste, and makes daily meal planning effortless for every family.",
    img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "/GastroAI Team Prototype.pdf",
  },
];

export default function UIUXPage() {
  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="section">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center gap-6 mb-6">
            <Palette className="w-12 h-12 text-black" />
            <Sparkles className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-4xl font-extrabold">UI/UX</h1>
          <p className="mt-3 text-black/70 max-w-2xl mx-auto text-sm leading-6">
            Selected interface and experience work design systems, responsive layouts, and user-centered flows.
          </p>

          {/* Skills row */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-black font-semibold text-sm">Tools used:</span>
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 text-white text-xs font-medium shadow-sm">
                React Native
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 text-white text-xs font-medium shadow-sm">
                Figma
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {UIUX_PROJECTS.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-gray-300 bg-gray-50 hover:bg-gray-100 transition overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-black/70 leading-6 mb-3">{p.desc}</p>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:underline"
                >
                  <Github className="w-4 h-4" /> View Sample Work
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Back */}
        <div className="flex justify-center mt-16">
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
