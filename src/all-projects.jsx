import React from "react";
import { Github,Laptop,Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PythonPage = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Math Learning Platform - Gradation project (Accenture)",
      desc: "Built an AI-driven learning platform that transforms math education through gesture and handwriting recognition. The system enhances engagement by turning problem-solving into an interactive experience while enabling teachers to monitor progress, design quizzes, and access real-time performance analytics.",
      img: "https://images.unsplash.com/photo-1749544811972-4ff163f3ad49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
      repo: "https://math-gesture-program.netlify.app",
    },
    {
      id: 2,
      title: "Youth Travel Experience Solution - Accenture Innovation Hub",
      desc: "Participated in Accenture’s Innovation Hub Challenge, where our team designed an innovative solution to enhance the youth travel journey with greater engagement. The project involved building a comprehensive business case covering feasibility, costs, and value proposition, alongside a proposed digital experience (App) supported by UI/UX design prototypes.",
      img: "https://images.unsplash.com/photo-1749544811712-bfa0f7aec2f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
      repo: "/UIUXProject - MjdAlamri.pdf",
    },
    {
      id: 3,
      title: "Smart Hotel Review Sentiment Analysis System – Accenture Data & AI Associate Capstone Project",
      desc: "Developed a system that analyzes hotel guest reviews, performs sentiment classification, and presents insights through dashboards. The solution helps travelers make confident booking decisions, enables hotels to improve service quality, and supports Saudi Vision 2030 tourism goals by enhancing guest experiences.",
      img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
      repo: "/MjdAlamri - Smart Hotel Review Sentiment Analysis System.pdf",
    },
    {
        id: 4,
        title: "BusMap - Graduation Project (University)",
        desc: "I led a team of four students in designing, coding and implementing The BusMap mobile app, the app is designed to revolutionize the efficiency and safety of public transportation by leveraging artificial intelligence (AI) to optimize bus routes. Used React Native framework with JavaScript and MySQL database.",
        img: "https://images.unsplash.com/photo-1749544811209-ad251ef039f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
        repo: "https://github.com/MjdMAlamri/python-projects/blob/main/HousePricePrediction.ipynb",
      },
      {
        id: 5,
        title: "NoraStu+ - IS350 Project Management Project",
        desc: "In this project, I led a team and we selected an existing app and made improvements by either adding new features or enhancing existing ones. The project involved creating key project management documents, including the Project Charter, Project Scope Statement, WBS, WBS Dictionary, RACI, Risk Register, and a Gantt Chart to ensure structured execution and timely delivery.",
        img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
        repo: "/MjdAlamri - NoraStu+ Sample of work.pdf",
      },
      {
        id: 6,
        title: "CS385 Software Engineering Project",
        desc: "In this project, I led a team with designed a new app from scratch, defining its requirements and creating essential diagrams, including context, use case, class, sequence, activity, state, and architecture diagrams, to ensure a well-structured system design.",
        img: "https://images.unsplash.com/photo-1749544811369-d08d34e3b3ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
        repo: "https://github.com/MjdMAlamri/python-projects/blob/main/HousePricePrediction.ipynb",
      },
  ];

  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="section">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center gap-6 mb-6">
          <Laptop className="w-12 h-12 text-black" />
          <Sparkles className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl font-extrabold">My Projects</h1>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto text-sm leading-6">
          Explore a variety of projects across different fields. Click any project to view its live demo or visual overview of the project.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-gray-300 bg-gray-50 hover:bg-gray-100 transition overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

        {/* Back to Home */}
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
};

export default PythonPage;
