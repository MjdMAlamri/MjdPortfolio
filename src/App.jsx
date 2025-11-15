import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
  Linkedin, Mail, Download, Github, Star, Sparkles, Laptop, BarChart3, ExternalLink,
  GitBranch, Code2, Palette, Timer, Presentation, ShieldCheck, Rocket, Workflow, Gamepad2, Award, Trophy, BadgeCheck,Medal,ScrollText
} from "lucide-react";
import ScrollToTop from "./ScrollToTop";
import PythonPage from "./Skill/python";
import GameDevPage from "./Skill/game-development";
import UIUXPage from "./Skill/ui-ux";
import DataVizPage from "./Skill/data-visualization-and-analytics";
import AllProjectsPage from "./all-projects";

/* helper to build clean URLs for future pages */
const slugify = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ---------------- NAV ---------------- */
const Nav = () => {
  const [active, setActive] = useState("#home");
  const tickingRef = useRef(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "Certifications & Awards" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    if (!sections.length) return;

    const headerH = 64;       // sticky header height (h-16)
    const markerRatio = 0.35; // 35% down the viewport from the top

    // recompute cached tops on load/resize/content shifts
    let tops = [];
    const computeTops = () => {
      tops = sections.map((s) => s.offsetTop);
    };

    const pickActive = () => {
      const doc = document.documentElement;
      const scrollY = window.scrollY || doc.scrollTop || 0;
      const viewportH = window.innerHeight;
      const docH = Math.max(
        doc.scrollHeight,
        doc.offsetHeight,
        doc.clientHeight,
        document.body.scrollHeight,
        document.body.offsetHeight
      );

      // If at (or very near) the bottom, force last section active
      const nearBottom = viewportH + scrollY >= docH - 2;
      if (nearBottom) {
        const last = sections[sections.length - 1];
        const id = last?.id ? `#${last.id}` : "#home";
        setActive((prev) => (prev !== id ? id : prev));
        return;
      }

      // Marker line used for selecting a section
      const markerY = scrollY + headerH + viewportH * markerRatio;

      // Find the section whose range is [top, nextTop)
      let chosen = sections[0];
      for (let i = 0; i < sections.length; i++) {
        const start = tops[i];
        const end = i < sections.length - 1 ? tops[i + 1] : Infinity;
        if (markerY >= start && markerY < end) {
          chosen = sections[i];
          break;
        }
      }

      const id = chosen?.id ? `#${chosen.id}` : "#home";
      setActive((prev) => (prev !== id ? id : prev));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        pickActive();
      });
    };

    const onResize = () => {
      computeTops();
      pickActive();
    };

    // initial
    computeTops();
    pickActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // in case fonts/images shift layout after load
    const raf = requestAnimationFrame(onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleClick = (href) => (e) => {
    e.preventDefault();
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-gray-200 text-black">
      <nav className="section h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleClick("#home")}
          className="flex items-center gap-2 font-semibold text-black"
        >
          <Sparkles className="w-5 h-5 text-black-400" />
          <span>Mjd Alamri</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleClick(l.href)}
                aria-current={active === l.href ? "page" : undefined}
                className={`transition ${
                  active === l.href
                    ? "text-black font-bold border-b-2 border-black pb-1"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/MjdMAlamri/CV/raw/main/Mjd%20M%20Alamri_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2 text-sm font-semibold hover:opacity-90"
        >
          Resume <Download className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
};


/* ---------------- SECTIONS (HOME) ---------------- */
const Hero = () => (
  <section id="home" className="w-full bg-[#2b2b2b] text-white">
    <div className="section grid lg:grid-cols-2 gap-8 items-center py-16 sm:py-24">
      <div className="space-y-6">
        <p className="text-2xl sm:text-3xl">Hello I’m</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Mjd Alamri</h1>
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          <span className="inline-block bg-white text-black px-2 rounded-lg mx-1">Computer Science</span>
          <span className="inline-block border-2 border-white px-2 rounded-lg mx-1">Graduate</span>
        </h2>

        <p className="max-w-lg text-white/80 text-sm leading-6">
        of Princess Nourah University with ITIL and DP-900 certifications, 
        experienced through internships at Accenture and SABIC. 
        I’m motivated by the intersection of technology, governance, and data; Inspired by opportunities to help organizations evolve through smart, efficient, and future-ready solutions.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mjd-alamri-pnu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black hover:opacity-90 transition"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:mjdmalamri@gmail.com"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black hover:opacity-90 transition"
          >
            <Mail />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="aspect-square rounded-full bg-[#3a3a3a] border border-white/10 flex items-center justify-center">
          <Laptop className="w-32 h-32 text-white/80" />
        </div>
        <div className="absolute top-[5%] left-[8%] w-[90px] drop-shadow">
          <Star className="w-full h-auto text-white/70" />
        </div>
        <div className="absolute top-[6%] right-[10%] w-[130px] drop-shadow">
          <Sparkles className="w-full h-auto text-white/70" />
        </div>
        <div className="absolute bottom-[8%] left-[6%] w-[120px] drop-shadow">
          <Github className="w-full h-auto text-white/70" />
        </div>
        <div className="absolute bottom-[8%] right-[8%] w-[100px] drop-shadow">
          <Rocket className="w-full h-auto text-white/70" />
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { icon: <Palette />, title: "UI/UX" },
    { icon: <BarChart3 />, title: "Data Visualization & Analytics" },
    { icon: <Workflow />, title: "Python & Machine Learning" },
    { icon: <Gamepad2 />, title: "Game Development" },
    { icon: <Code2 />, title: "React Native" },
    { icon: <ShieldCheck />, title: "Incident & Problem Management" },
    { icon: <Rocket />, title: "Problem Solving" },
    { icon: <Laptop />, title: "Leadership" },
    { icon: <Presentation />, title: "Presentation Skills" },
    { icon: <Timer />, title: "Time Management" },
  ];

  return (
    <section id="skills" className="w-full bg-white text-black py-20 sm:py-28">
      <div className="section">
      <h3 className="text-center text-3xl sm:text-4xl font-bold">
  My <span className="inline-block">Skills</span>
</h3>

<h6 className="text-center text-sm sm:text-base font-medium text-black/60 mt-2">
    Click on a skill to view related projects.
</h6>


        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((s) => {
  const linkedSkills = [
    "UI/UX",
    "Data Visualization & Analytics",
    "Python & Machine Learning",
    "Game Development",
    "React Native",
  ];

  const isLinked = linkedSkills.includes(s.title);
  const href = `/skill/${slugify(s.title)}`;

  const cardClasses =
    "rounded-2xl border border-gray-300 bg-gray-50 p-6 text-center transition group";

  if (isLinked) {
    return (
      <Link
        key={s.title}
        to={href}
        aria-label={`Open ${s.title}`}
        className={`${cardClasses} hover:bg-gray-100 hover:border-gray-400 cursor-pointer`}
      >
        <div className="mx-auto w-10 h-10 flex items-center justify-center mb-3 text-black group-hover:scale-110 transition">
          {s.icon}
        </div>
        <div className="text-sm font-semibold text-black">{s.title}</div>
      </Link>
    );
  }

  // Static card (no link)
  return (
    <div
      key={s.title}
      className={`${cardClasses} opacity-90 cursor-default`}
    >
      <div className="mx-auto w-10 h-10 flex items-center justify-center mb-3 text-black">
        {s.icon}
      </div>
      <div className="text-sm font-semibold text-black">{s.title}</div>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const items = [
    {
      company: "Accenture",
      role: "Data & AI Associate internship",
      date: "Jul 2025 – Oct 2025",
      bullets: [
        "Strengthened consulting readiness skills, case study problem-solving, teamwork, business communication, and client presentation.",
        "Won first place in the Innovation Hub competition with a functional prototype that combined creativity with collaboration.",
        "Participated in the LEARN 2025 Event with our Math Gestures (EdVenture) project.",
        "Organized multiple student activities and events, fostering engagement and collaboration among peers.",
      ],
    },
    {
      company: "SABIC",
      role: "IT Infrastructure & Operations COOP trainee",
      date: "Jan 2025 – May 2025",
      bullets: [
        "Observed how large-scale projects are structured across phases (initiation to closure).",
        "Contributed to service assurance by generating weekly incident reports and tracking system performance and KPIs.",
        "Coordinated incident lifecycle (detection → resolution).",
        "Hands-on with Exchange Admin Center and PowerShell.",
      ],
    },
    {
      company: "Nearat school",
      role: "Financial System Administrator (Volunteer)",
      date: "Sep 2022 – June 2023",
      bullets: [
        "Automated payroll operations and scheduling systems for accuracy and timely salary disbursements.",
        "Maintained financial records, data cleaning, and spreadsheet management.",
        "Built reporting templates for real-time insights into trends and resource allocation.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#2b2b2b] text-white py-16 sm:py-20">
      <div className="section">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">My Experience</h3>
        <div className="mt-8 space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#3a3a3a] border border-gray-600 rounded-2xl p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-white">
                  {item.role}, <span className="text-gray-300">{item.company}</span>
                </p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <ul className="mt-3 text-sm text-gray-300 space-y-1 list-disc pl-5">
                {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="w-full bg-white text-black">
    <div className="section grid md:grid-cols-2 gap-10 items-center py-16">
      {/* Left side: Blurred card with badge */}
      <div className="rounded-2xl border border-gray-200 p-6 flex items-center justify-center bg-gray-50">
        <div
          className="w-52 h-64 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(245,245,245,0.6))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
         <BadgeCheck className="text-black" style={{ width: "120px", height: "120px" }}/>

        </div>
      </div>

      {/* Right side: Certifications */}
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold">
          Certifications <span className="inline-block"></span>
        </h3>
        <p className="mt-4 text-black/80 leading-7 text-sm">
          • DP-900 - Microsoft Azure Data Fundamentals &nbsp;&nbsp;&nbsp;&nbsp; Sep 2025<br />
          • ITIL® 4 Foundation – PeopleCert &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar 2025
        </p>
      </div>


<div>
        <h3 className="text-3xl sm:text-4xl font-bold">
        Honors & Awards <span className="inline-block"></span>
        </h3>
        <p className="mt-4 text-black/80 leading-7 text-sm">
        • Second Class Honors Degree (Computer Science) from Princess Nourah University<br />
        • Successfully passed the PNU comprehensive Exit Exam evaluating mastery of core subjects across the four-year degree<br />
        • Won first Place in Accenture Innovation Hub Competition <br />
        • Won at the SparkUp Challenge 2025 by KSU and Alinma Bank with CareerBridge App<br />
           </p>
      </div>
      <div className="rounded-2xl border border-gray-200 p-6 flex items-center justify-center bg-gray-50">
        <div
          className="w-52 h-64 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(245,245,245,0.6))",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
         <Award className="text-black" style={{ width: "120px", height: "120px" }}/>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      no: "01",
      title: "AI-Powered Math Learning Platform",
      desc: "Gradation project from Accenture",
      img: "https://images.unsplash.com/photo-1749544811972-4ff163f3ad49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    },
    {
      no: "02",
      title: "Youth Travel Experience Solution",
      desc: "Accenture Innovation Hub Project",
      img: "https://images.unsplash.com/photo-1749544811712-bfa0f7aec2f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    },
    {
      no: "03",
      title: "Smart Hotel Review Sentiment Analysis System",
      desc: "Accenture Data & AI Associate Capstone Project",
      img: "https://images.unsplash.com/photo-1749544811061-28c9d6acad55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    },
    {
      no: "04",
      title: "BusMap",
      desc: "University Graduation Project",
      img: "https://images.unsplash.com/photo-1749544811209-ad251ef039f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2478",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#2b2b2b] text-white py-16 sm:py-20">
      <div className="section">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">My Projects</h3>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {projects.map((p) => (
            <article
              key={p.no}
              className="grid sm:grid-cols-2 gap-6 items-start bg-[#3a3a3a] border border-gray-600 rounded-2xl p-6"
            >
              {/* Project Image */}
              <div className="aspect-[16/11] bg-gray-700 flex items-center justify-center rounded-xl overflow-hidden">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                  src={p.img}
                />
              </div>
              <div>
                <div className="text-3xl font-extrabold mb-2 text-white">{p.no}</div>
                <h4 className="text-xl font-bold text-white">{p.title}</h4>
                <p className="text-gray-300 text-sm leading-6 mt-2">{p.desc}</p>
                <Link
  to="/projects"
  className="inline-flex items-center gap-2 text-gray-200 mt-3 hover:underline"
>
  <ExternalLink className="w-4 h-4" /> More info
</Link>

              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
      <Link
  to="/projects"
  className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
>
  More →
</Link>

      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="w-full bg-white text-black">
    <div className="section grid lg:grid-cols-2 gap-10 items-start py-16">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
          Let’s <span className="border-2 border-black px-2 rounded-md">Connect!</span>
        </h3>
        <p className="text-black/70 text-sm leading-6 mt-4 max-w-md">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/mjd-alamri-pnu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-300 text-black hover:bg-gray-100 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:mjdmalamri@gmail.com"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-gray-300 text-black hover:bg-gray-100 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Layouts ---------- */
// Home only: show Nav
function LayoutWithNav() {
  return (
    <div className="text-black">
      <style>{`section[id]{scroll-margin-top:100px}`}</style>
      <Nav />
      <Outlet />
    </div>
  );
}

/* ---------------------- ROUTES ---------------------- */
export default function App() {
  return (
    <>
      {/* Moved outside <Routes> */}
      <ScrollToTop />

      <Routes>
        {/* Home (with Nav) */}
        <Route element={<LayoutWithNav />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Experience />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
        </Route>

        {/* Skill pages (NO Nav) */}
        <Route path="/skill/python" element={<PythonPage />} />
        <Route path="/skill/python-and-machine-learning" element={<PythonPage />} /> {/* optional alias */}
        <Route path="/skill/game-development" element={<GameDevPage />} />
        <Route path="/skill/ui-ux" element={<UIUXPage />} />
        <Route path="/skill/data-visualization-and-analytics" element={<DataVizPage />} />
        <Route path="/skill/react-native" element={<UIUXPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />

        {/* Fallback → Home (with Nav) */}
        <Route element={<LayoutWithNav />}>
          <Route
            path="*"
            element={
              <>
                <Hero />
                <Skills />
                <Experience />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
