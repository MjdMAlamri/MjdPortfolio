import React from "react";
import { Link } from "react-router-dom";
import { Github, Gamepad2, Joystick } from "lucide-react";

const GAMES = [
  {
    id: 1,
    title: "CS392 Game Development Project",
    desc:
      "Designed and developed a fun, fast-paced game where players control a fish that must eat smaller fishes to survive. The project focused on gameplay balance, level progression, and creating an engaging player experience with clear visual feedback and challenge escalation.",
    img: "https://images.unsplash.com/photo-1749544811972-4ff163f3ad49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "/MjdAlamri-GameDev.pdf",
  },
  {
    id: 2,
    title: "Count & Run",
    desc:
      "Built an AI-powered educational game that transforms math learning into an interactive experience through gesture and handwriting recognition. Designed to boost student engagement while enabling teachers to track progress and personalize learning.",
    img: "https://images.unsplash.com/photo-1749544811712-bfa0f7aec2f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "https://math-gesture-program.netlify.app/numbers",
  },
  {
    id: 3,
    title: "2D XO!",
    desc:
      "Advanced rules version with AI and online mode via Firebase. Elegant UI with match history.",
    img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    repo: "https://mjdalamrisimplegame.netlify.app",
  },
];

export default function GameDevPage() {
  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="section">
        {/* Header (icons black, like Python page) */}
        <div className="text-center mb-14">
          <div className="flex justify-center gap-6 mb-6">
            <Gamepad2 className="w-12 h-12 text-black" />
            <Joystick className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl font-extrabold">Game Development</h1>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto text-sm leading-6">
            A collection of my web and 2D games focused on polished player experience, readable code,
            smart state management, and smooth deployment.
          </p>
        </div>

        {/* Projects grid (same card style as Python page) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GAMES.map((p) => (
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

        {/* Back to Home (same button style) */}
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
