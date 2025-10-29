import React from "react";
import { Github, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const PythonPage = () => {
  const projects = [
    {
      id: 1,
      title: "Boston Housing Price Prediction using Machine Learning",
      desc: "Conducted exploratory data analysis on the Boston Housing dataset to identify key patterns and correlations, then developed a machine learning model to predict housing prices. The project demonstrates data preprocessing, visualization, and predictive modeling using Python.",
      img: "https://images.unsplash.com/photo-1749544811972-4ff163f3ad49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
      repo: "/MjdAlamri-MLProject.html", // Correct path for public folder
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="section">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center gap-6 mb-6">
            <Brain className="w-12 h-12 text-black" />
            <Database className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-4xl font-extrabold">Python &amp; Machine Learning</h1>
          <p className="mt-3 text-black/70 max-w-2xl mx-auto text-sm leading-6">
            A collection of Python and Machine Learning projects showcasing analytical thinking,
            predictive modeling, and real-world data applications.
          </p>

          {/* Tools section */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-black font-semibold text-sm">Tools used:</span>
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 text-white text-xs font-medium shadow-sm">
                Python
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 text-white text-xs font-medium shadow-sm">
                Jupyter Notebook
              </span>
            </div>
          </div>
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
