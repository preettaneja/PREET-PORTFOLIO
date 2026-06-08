"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const [cursorActive, setCursorActive] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 250,
    damping: 28,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 250,
    damping: 28,
  });

  const scrollProgress = useTransform(scrollY, [0, 1600], ["0%", "100%"]);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const activateCursor = () => setCursorActive(true);
    const deactivateCursor = () => setCursorActive(false);

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, .cursor-hover"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", activateCursor);
      element.addEventListener("mouseleave", deactivateCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", activateCursor);
        element.removeEventListener("mouseleave", deactivateCursor);
      });
    };
  }, [mouseX, mouseY]);

  const heroOpacity = useTransform(scrollY, [180, 760], [1, 0]);
  const heroY = useTransform(scrollY, [180, 760], [0, -55]);

  const imageOpacity = useTransform(scrollY, [180, 760], [1, 0]);
  const imageY = useTransform(scrollY, [180, 760], [0, 45]);
  const imageScale = useTransform(scrollY, [180, 760], [1, 0.95]);

  const featuredProjects = [
    {
      label: "healthtech build",
      title: "Pillbox-Live",
      text: "An Arduino-based smart medication reminder prototype with alerts, dashboard logic, and real-world healthcare intent.",
      tag: "IoT · Healthcare · Arduino",
      link: "https://github.com/preettaneja/Pillbox-Live",
    },
    {
      label: "data for safety",
      title: "Tiger-Conflict-Intelligence-Hub",
      text: "A human-wildlife conflict risk platform using dummy location data, SQL, and R Programming to classify low, medium, and high-risk zones.",
      tag: "SQL · R · Risk Analysis",
      link: "https://github.com/preettaneja/Tiger-Conflict-Intelligence-HUb",
    },
    {
      label: "business system",
      title: "SYNAPSE / B2B Sales Platform",
      text: "A B2B sales platform prototype designed to organise product information, reduce data loss, and support traditional businesses moving digital.",
      tag: "Frontend · Database · Workflow",
      link: "https://github.com/preettaneja/B2B-sales-platform",
    },
    {
      label: "research",
      title: "Conversational XAI",
      text: "A research direction focused on making AI decisions easier to question, understand, and trust through natural conversation.",
      tag: "AI · Explainability · Research",
      link: "",
    },
  ];

  const allProjects = [
    ...featuredProjects,
    {
      label: "optimisation",
      title: "Fuel-Optimization-Lagrange",
      text: "A Python-based route optimisation project using Lagrange multipliers to reduce delivery distance, save fuel, manage time, and improve rider efficiency.",
      tag: "Python · Lagrange · Logistics",
      link: "https://github.com/preettaneja/fuel-optimization-lagrange",
    },
    {
      label: "image processing",
      title: "Laplacian-Image-CDLL",
      text: "A Python/OpenCV image processing project that combined Laplacian filtering with a Circular Doubly Linked List for image recreation and state tracking.",
      tag: "Python · OpenCV · CDLL",
      link: "https://github.com/preettaneja/laplacian-image-cdll",
    },
    {
      label: "concept design",
      title: "XR Haptic Glove",
      text: "A conceptual XR haptic glove designed for assisted limb interaction, rehabilitation support, surgery simulation, training, gaming, and immersive experiences.",
      tag: "XR · Haptics · Assistive Tech",
      link: "https://github.com/preettaneja/xr-haptic-glove",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-[#F7F2F5]">
      {/* SOCIAL DOCK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-5 right-5 z-[9997] hidden items-center gap-1 rounded-full border border-[#2A222A] bg-[#111014]/80 px-3 py-2 shadow-2xl shadow-[#C65A86]/10 backdrop-blur-xl xl:flex"
      >
        {[
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/preet-taneja-b01686325",
          },
          {
            label: "GitHub",
            href: "https://github.com/preettaneja",
          },
          {
            label: "Pinterest",
            href: "https://in.pinterest.com/preeeehehe/",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/_preeetttttaneja_/",
          },
          {
            label: "Email",
            href: "mailto:preetxtaneja@gmail.com",
          },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.label === "Email" ? "_self" : "_blank"}
            rel={social.label === "Email" ? undefined : "noopener noreferrer"}
            className="cursor-hover rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#B8AEB5] transition hover:bg-[#C65A86] hover:text-white"
          >
            {social.label}
          </a>
        ))}
      </motion.div>

      {/* CUSTOM CURSOR */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: cursorActive ? 1.7 : 1,
          opacity: cursorActive ? 0.9 : 0.65,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E58CB3]/70 bg-[#C65A86]/10 shadow-[0_0_35px_rgba(198,90,134,0.35)] backdrop-blur-md md:block"
      />

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorActive ? 0.8 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E58CB3] shadow-[0_0_18px_rgba(229,140,179,0.9)] md:block"
      />

      {/* SCROLL PROGRESS */}
      <div className="fixed right-5 top-1/2 z-[9998] hidden -translate-y-1/2 rounded-full border border-[#2A222A] bg-[#111014]/70 p-1 backdrop-blur-md md:block">
        <div className="relative h-36 w-1.5 overflow-hidden rounded-full bg-[#2A222A]">
          <motion.div
            style={{ height: scrollProgress }}
            className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-[#C65A86] to-[#E58CB3]"
          />
        </div>
      </div>

      {/* DYNAMIC BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#2A222A_1px,transparent_0)] bg-[length:34px_34px] opacity-25" />

        <div className="absolute inset-y-0 left-0 w-[24vw] bg-gradient-to-r from-[#C65A86]/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[24vw] bg-gradient-to-l from-[#A43E68]/10 to-transparent" />

        {[
          {
            size: "h-64 w-64",
            left: "8%",
            top: "12%",
            color: "bg-[#C65A86]/12",
            duration: 24,
            delay: 0,
            path: {
              x: [0, 90, 40, -30, 0],
              y: [0, 40, 120, 60, 0],
              scale: [1, 1.15, 0.95, 1.08, 1],
            },
          },
          {
            size: "h-80 w-80",
            left: "70%",
            top: "22%",
            color: "bg-[#A43E68]/12",
            duration: 28,
            delay: 1,
            path: {
              x: [0, -100, -60, 40, 0],
              y: [0, 70, 150, 60, 0],
              scale: [1, 0.9, 1.18, 1.05, 1],
            },
          },
          {
            size: "h-56 w-56",
            left: "38%",
            top: "62%",
            color: "bg-[#E58CB3]/10",
            duration: 32,
            delay: 2,
            path: {
              x: [0, 70, 140, 60, 0],
              y: [0, -80, -30, 90, 0],
              scale: [1, 1.1, 0.92, 1.2, 1],
            },
          },
          {
            size: "h-44 w-44",
            left: "16%",
            top: "78%",
            color: "bg-[#C65A86]/10",
            duration: 30,
            delay: 3,
            path: {
              x: [0, 120, 80, -20, 0],
              y: [0, -60, -130, -40, 0],
              scale: [1, 0.95, 1.18, 1.05, 1],
            },
          },
        ].map((bubble, index) => (
          <motion.div
            key={index}
            animate={bubble.path}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full blur-3xl ${bubble.size} ${bubble.color}`}
            style={{
              left: bubble.left,
              top: bubble.top,
            }}
          />
        ))}

        {[
          {
            left: "12%",
            top: "28%",
            duration: 16,
            delay: 0,
            x: [0, 60, 20, -30, 0],
            y: [0, -40, 80, 30, 0],
          },
          {
            left: "20%",
            top: "68%",
            duration: 19,
            delay: 1,
            x: [0, 90, 50, -20, 0],
            y: [0, 50, -40, -80, 0],
          },
          {
            left: "36%",
            top: "18%",
            duration: 21,
            delay: 0.5,
            x: [0, -70, -20, 50, 0],
            y: [0, 60, 120, 40, 0],
          },
          {
            left: "52%",
            top: "64%",
            duration: 18,
            delay: 2,
            x: [0, 80, 130, 40, 0],
            y: [0, -70, -20, 60, 0],
          },
          {
            left: "68%",
            top: "24%",
            duration: 22,
            delay: 1.2,
            x: [0, -100, -40, 30, 0],
            y: [0, 40, 100, 50, 0],
          },
          {
            left: "82%",
            top: "58%",
            duration: 20,
            delay: 0.4,
            x: [0, -70, -120, -40, 0],
            y: [0, -50, 20, 90, 0],
          },
          {
            left: "90%",
            top: "80%",
            duration: 24,
            delay: 1.8,
            x: [0, -120, -70, 20, 0],
            y: [0, -80, -140, -40, 0],
          },
          {
            left: "42%",
            top: "86%",
            duration: 17,
            delay: 2.5,
            x: [0, 70, 120, 50, 0],
            y: [0, -60, -20, 80, 0],
          },
        ].map((dot, index) => (
          <motion.div
            key={index}
            animate={{
              x: dot.x,
              y: dot.y,
              opacity: [0.25, 0.8, 0.45, 0.7, 0.25],
              scale: [1, 1.4, 0.85, 1.25, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#E58CB3]/70 shadow-[0_0_18px_rgba(229,140,179,0.55)]"
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-center px-6 pb-10 pt-16 md:px-14 md:pt-20 xl:px-20">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-140px] top-[-140px] h-80 w-80 rounded-full bg-[#C65A86]/30 blur-3xl"
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.14, 0.24, 0.14] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-[#A43E68]/30 blur-3xl"
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <motion.span
                whileHover={{
                  scale: 1.12,
                  y: -4,
                  rotate: -1,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 18,
                }}
                className="cursor-hover rounded-full border border-[#2A222A] bg-[#111014]/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#C65A86] shadow-[#C65A86]/0 transition hover:border-[#C65A86]/70 hover:bg-[#C65A86]/10 hover:text-[#F7F2F5] hover:shadow-[0_0_28px_rgba(198,90,134,0.28)]"
              >
                Preet Taneja
              </motion.span>

              <span className="rounded-full border border-[#2A222A] bg-[#111014]/80 px-4 py-2 text-xs text-[#B8AEB5]">
                ideas · taste · curiosity · systems
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-0 top-[23%] h-32 w-[42rem] rounded-full bg-[#C65A86]/20 blur-3xl"
            />

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="group max-w-6xl cursor-default text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl xl:text-9xl"
            >
              <motion.span
                whileHover={{
                  scale: 1.015,
                  x: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="cursor-hover inline-block transition duration-500 group-hover:text-[#F7D8E6]"
              >
                coffee, chaos, and ideas
              </motion.span>

              <br />

              <motion.span
                whileHover={{
                  scale: 1.02,
                  x: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="cursor-hover inline-block bg-gradient-to-r from-[#F7F2F5] via-[#E58CB3] to-[#C65A86] bg-clip-text text-transparent transition duration-500 hover:from-[#E58CB3] hover:via-[#F7F2F5] hover:to-[#C65A86]"
              >
                I can&apos;t stop building.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-[#B8AEB5] md:text-xl"
            >
              Hi, I&apos;m Preet and I like turning thoughts, observations and
              random sparks into things that feel useful, intentional and a
              little personal.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.38 }}
              className="mt-4 max-w-2xl text-base leading-7 text-[#8F848C]"
            >
              Currently exploring AI, design-led products, real-world projects,
              and smarter ways to make technology feel more human.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="cursor-hover rounded-full bg-[#C65A86] px-7 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg shadow-[#C65A86]/20 transition hover:-translate-y-1 hover:bg-[#A43E68]"
              >
                View the work
              </a>

              <a
                href="#contact"
                className="cursor-hover rounded-full border border-[#2A222A] bg-[#111014]/70 px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#F7F2F5] transition hover:-translate-y-1 hover:border-[#C65A86] hover:text-[#E58CB3]"
              >
                Let&apos;s connect
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity: imageOpacity, y: imageY, scale: imageScale }}
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="cursor-hover relative mx-auto w-full max-w-md xl:max-w-lg"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-[#C65A86]/20 blur-3xl" />

            <a
              href="https://www.instagram.com/_preeetttttaneja_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Preet Taneja's Instagram profile"
              className="block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[3rem] border border-[#2A222A] bg-[#111014]/80 p-4 shadow-2xl shadow-[#C65A86]/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C65A86]/70 hover:shadow-[#C65A86]/25">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#2A1823] to-[#09090B]">
                  <img
                    src="/preet-cutout.png"
                    alt="Preet Taneja"
                    className="h-[500px] w-full object-cover object-top transition duration-500 hover:scale-105 xl:h-[560px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/50 to-transparent p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#E58CB3]">
                      tap into the feed
                    </p>
                    <p className="mt-2 text-xl font-medium">
                      instagram, visuals, and little life updates
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-16 rounded-2xl border border-[#2A222A] bg-[#111014]/90 px-4 py-3 text-sm text-[#B8AEB5] shadow-xl backdrop-blur md:-left-8"
            >
              AI, but human
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-24 rounded-2xl border border-[#2A222A] bg-[#111014]/90 px-4 py-3 text-sm text-[#B8AEB5] shadow-xl backdrop-blur md:-right-6"
            >
              pretty, but useful
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative mx-auto max-w-[1500px] px-6 pb-10 pt-4 md:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75 }}
          className="grid gap-8 rounded-[2rem] border border-[#2A222A] bg-[#111014]/60 p-6 backdrop-blur md:grid-cols-[0.75fr_1.25fr] md:p-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C65A86]">
              about me
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              life outside the build.
            </h2>
          </div>

          <div className="grid gap-4 text-sm leading-7 text-[#B8AEB5] md:grid-cols-3">
            <p>
              Food, fashion, driving, good visuals, and random articles keep my
              head full of small ideas.
            </p>

            <p>
              Somewhere between my notes app, camera roll, and browser tabs, I
              keep finding things I want to make better.
            </p>

            <p className="text-[#8F848C]">
              Aviation stays quietly in the background — not the whole story,
              but definitely part of how I look at movement and ambition.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-6 md:px-14 xl:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75 }}
          className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C65A86]">
              selected work
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              the main builds that say more than a bio.
            </h2>
          </div>

          <p className="max-w-2xl self-end text-base leading-7 text-[#8F848C]">
            A curated mix of healthcare, data intelligence, business systems,
            and explainable AI — the projects that best show how I think, build,
            and communicate ideas.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="cursor-hover group min-h-[290px] rounded-[2rem] border border-[#2A222A] bg-[#111014]/70 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-[#C65A86]/60 hover:bg-[#151017]/80"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[#C65A86]">
                  {project.label}
                </p>

                <span className="rounded-full border border-[#2A222A] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#8F848C]">
                  featured
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-medium tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#8F848C]">
                {project.text}
              </p>

              <div className="mt-8 h-[1px] w-full bg-[#2A222A] transition group-hover:bg-[#C65A86]/60" />

              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#B8AEB5]">
                {project.tag}
              </p>
            </motion.div>
          ))}

          <motion.button
            type="button"
            onClick={() => setShowAllProjects(true)}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="cursor-hover group min-h-[220px] rounded-[2rem] border border-dashed border-[#C65A86]/40 bg-[#111014]/45 p-6 text-left backdrop-blur transition hover:-translate-y-2 hover:border-[#C65A86] hover:bg-[#C65A86]/10 md:col-span-2"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#C65A86]">
              more projects
            </p>

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                  open the archive of everything I&apos;ve built so far.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8F848C]">
                  Early experiments, course projects, prototypes, research
                  ideas, and the smaller builds that still shaped the way I
                  think.
                </p>
              </div>

              <div className="rounded-full bg-[#C65A86] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition group-hover:bg-[#A43E68]">
                View all →
              </div>
            </div>
          </motion.button>
        </div>
      </section>

      {/* ALL PROJECTS MODAL */}
      {showAllProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-[#09090B]/80 px-4 py-8 backdrop-blur-xl"
          onClick={() => setShowAllProjects(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[86vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-[#2A222A] bg-[#111014] p-6 shadow-2xl shadow-[#C65A86]/20 md:p-8"
          >
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#C65A86]">
                  project archive
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  everything built, explored, or shaped.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8F848C]">
                  A fuller view of my projects — from featured builds to early
                  experiments and concept-driven work.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAllProjects(false)}
                className="cursor-hover rounded-full border border-[#2A222A] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#B8AEB5] transition hover:border-[#C65A86] hover:text-[#E58CB3]"
              >
                back to portfolio
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {allProjects.map((project) => (
                <div
                  key={project.title}
                  className="cursor-hover rounded-3xl border border-[#2A222A] bg-[#09090B]/60 p-5 transition hover:border-[#C65A86]/60 hover:bg-[#C65A86]/10"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C65A86]">
                    {project.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#8F848C]">
                    {project.text}
                  </p>

                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#B8AEB5]">
                    {project.tag}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-hover mt-5 inline-flex rounded-full border border-[#2A222A] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#E58CB3] transition hover:border-[#C65A86] hover:bg-[#C65A86]/15 hover:text-white"
                    >
                      Open GitHub →
                    </a>
                  ) : (
                    <p className="mt-5 inline-flex rounded-full border border-[#2A222A] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8F848C]">
                      GitHub soon
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CONTACT */}
      <section
        id="contact"
        className="relative mx-auto max-w-[1500px] px-6 pb-28 pt-8 md:px-14 xl:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75 }}
          className="rounded-[2rem] border border-[#2A222A] bg-[#111014]/70 p-8 text-center backdrop-blur md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#C65A86]">
            contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            let&apos;s build, discuss, or just exchange ideas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8F848C]">
            Open to projects, internships, collaborations, research ideas, and
            conversations that start with “what if?”
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:preetxtaneja@gmail.com"
              className="cursor-hover inline-flex rounded-full bg-[#C65A86] px-7 py-3 text-sm font-medium uppercase tracking-wide text-white shadow-lg shadow-[#C65A86]/20 transition hover:-translate-y-1 hover:bg-[#A43E68]"
            >
              email me
            </a>

            <a
              href="https://www.linkedin.com/in/preet-taneja-b01686325"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover inline-flex rounded-full border border-[#2A222A] px-6 py-3 text-sm font-medium uppercase tracking-wide text-[#F7F2F5] transition hover:border-[#C65A86] hover:text-[#E58CB3]"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}