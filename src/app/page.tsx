
"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Stethoscope,
  Wind,
  X,
  Microscope,
  Download,
  Clock3,
  Sparkles,
} from "lucide-react";

const skills = [
  "Patient Evaluation",
  "Hemodynamic Assessment",
  "Vital Signs Monitoring",
  "Administration of Oxygen Therapy",
  "Airway Intervention Techniques",
  "Blood Gas Analysis",
  "Infection Prevention",
  "Clinical Record Keeping",
  "Critical Care Protocols",
  "Sample Collection Management",
  "Basic Life Support",
  "Computer Applications",
];

const certifications = [
  { year: "2024", title: "Introduction to Psychology", type: "Learning" },
  { year: "2024", title: "Soft Skills", type: "Professional" },
  { year: "2025", title: "FACCT Conference â€“ SRM, Poonamallee", type: "Conference" },
  { year: "2026", title: "Criticare Conference", type: "Conference" },
  { year: "2026", title: "Introduction to Cognitive Psychology", type: "Learning" },
  { year: "2026", title: "Lifeline Paramedic Trauma Summit â€“ Kauvery Hospital, Trichy", type: "Summit" },
];

const focusAreas = [
  {
    icon: Activity,
    number: "01",
    title: "Patient Monitoring",
    description:
      "Patient evaluation, vital signs monitoring and hemodynamic assessment in critical care environments.",
  },
  {
    icon: Wind,
    number: "02",
    title: "Respiratory Care",
    description:
      "Clinical exposure to oxygen therapy, airway management and ventilator-related equipment.",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Critical Care Support",
    description:
      "Assisting healthcare professionals in intensive care and emergency care procedures.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Patient Safety",
    description:
      "Following infection prevention practices, clinical documentation and care protocols.",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" className="brand">
            <span className="brand-icon">
              <HeartPulse size={22} />
            </span>
            <span>
              DHANUSH<span className="accent">.</span>
            </span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
            {navigation.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let's Connect <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid-bg" />

        <div className="hero-inner">
          <div className="hero-left">
            <div className="status-pill">
              <span className="status-light" />
              CRITICAL CARE TECHNOLOGIST Â· INTERN
            </div>

            <p className="hero-kicker">
              WELCOME TO MY PROFESSIONAL PORTFOLIO
            </p>

            <h1>
              Dhanush Raj
              <span className="hero-name-accent"> N.</span>
            </h1>

            <h2>
              Caring for Life.
              <br />
              <span>Committed to Excellence.</span>
            </h2>

            <p className="hero-description">
              A dedicated Critical Care Technology professional in
              training, with clinical exposure to patient assessment,
              hemodynamic monitoring, life-support equipment and intensive
              care practices. Driven by compassion, continuous learning
              and quality patient care.
            </p>

            <div className="hero-actions">
              <a href="#about" className="primary-button">
                Explore My Journey <ArrowDownRight size={18} />
              </a>

              <a href="/resume.pdf" download className="outline-button">
                Download Resume <Download size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Thiruvallur, Tamil Nadu
              </span>
              <span className="meta-divider" />
              <span>
                <Activity size={15} /> Healthcare & Critical Care
              </span>
            </div>
          </div>

          <div className="hero-right">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />

            <div className="medical-visual">
              <div className="visual-top">
                <span>PROFESSIONAL PROFILE</span>
                <span className="live-indicator" />
              </div>

              {/* CIRCULAR PROFILE PHOTO */}
              <div className="profile-photo">
                <Image
                  src="/profile.PNG"
                  alt="Dhanush Profile Photo"
                  fill
                  priority
                  sizes="(max-width: 768px) 230px, 300px"
                  className="profile-photo-image"
                />
              </div>

              <div className="visual-name">Dhanush Raj N</div>
              <div className="visual-role">
                Critical Care Technologist
              </div>

              <div className="visual-separator" />

              <div className="visual-detail">
                <span>INSTITUTION</span>
                <strong>Saveetha Medical College</strong>
              </div>

              <div className="visual-detail">
                <span>QUALIFICATION</span>
                <strong>B.Sc. (Hons) Â· Critical Care</strong>
              </div>

              <div className="visual-detail">
                <span>ACADEMIC GPA</span>
                <strong>7.97 / 10</strong>
              </div>

              <div className="visual-footer">
                <HeartPulse size={17} />
                <span>CARE Â· COMPASSION Â· COMMITMENT</span>
              </div>
            </div>

            <div className="float-card float-top">
              <div className="float-icon">
                <ShieldCheck size={21} />
              </div>
              <div>
                <strong>Patient Safety</strong>
                <small>Clinical Priority</small>
              </div>
            </div>

            <div className="float-card float-bottom">
              <div className="float-icon">
                <Stethoscope size={21} />
              </div>
              <div>
                <strong>Critical Care</strong>
                <small>Clinical Training</small>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown size={16} />
        </a>

        <div className="hero-bottom-line" />
      </section>

      {/* INTRO STRIP */}
      <section className="intro-strip">
        <div>
          <Activity />
          <span>Clinical Monitoring</span>
        </div>
        <div>
          <HeartPulse />
          <span>Critical Care</span>
        </div>
        <div>
          <ShieldCheck />
          <span>Patient Safety</span>
        </div>
        <div>
          <BookOpen />
          <span>Continuous Learning</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-label">01 / ABOUT ME</span>
          <h2>
            More Than a Profession.
            <br />
            <span>A Commitment to Care.</span>
          </h2>
          <p>
            Discover my background, clinical exposure and professional
            aspirations.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <span className="small-accent">MY INTRODUCTION</span>
            <h3>Learning today to make a difference tomorrow.</h3>

            <p>
              I am Dhanush Raj N, a Critical Care Technologist intern at
              Saveetha Medical College and Hospitals, Chennai. I am
              pursuing a B.Sc. (Hons) in Critical Care Technology, with a
              strong interest in patient monitoring and intensive care.
            </p>

            <p>
              During my internship, I have gained practical exposure to
              patient assessment, vital signs monitoring and hemodynamic
              parameters. I have also trained in the operation of
              multiparameter monitors, ventilators, infusion pumps and
              other life-support systems.
            </p>

            <p>
              My goal is to continuously strengthen my clinical knowledge,
              technical capabilities and teamwork while contributing to
              safe and effective patient care.
            </p>

            <a href="#experience" className="simple-link">
              Discover my experience <ArrowRight size={17} />
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <GraduationCap />
              </div>
              <strong>7.97</strong>
              <span>Academic GPA</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Stethoscope />
              </div>
              <strong>Clinical</strong>
              <span>Internship Training</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Award />
              </div>
              <strong>BLS</strong>
              <span>Basic Life Support Certified</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Sparkles />
              </div>
              <strong>Learning</strong>
              <span>Professional Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <span className="section-label">02 / EXPERIENCE</span>
          <h2>
            My Clinical <span>Journey.</span>
          </h2>
          <p>
            Building knowledge through hands-on clinical training and
            teamwork.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-side">
            <div className="experience-number">01</div>
            <span>SEPTEMBER 2026 â€” PRESENT</span>
            <div className="experience-line" />
            <p>PROFESSIONAL EXPERIENCE</p>
          </div>

          <article className="experience-card">
            <div className="experience-card-top">
              <span className="current-tag">
                <span /> CURRENT INTERNSHIP
              </span>
              <Activity size={25} />
            </div>

            <h3>Critical Care Technologist</h3>
            <h4>Intern Â· Saveetha Medical College and Hospitals</h4>

            <p className="experience-location">
              <MapPin size={15} /> Chennai, Tamil Nadu, India
            </p>

            <div className="experience-divider" />

            <h5>Key Responsibilities & Clinical Exposure</h5>

            <ul>
              <li>
                Assisted in patient assessment and continuous monitoring
                of vital signs and hemodynamic parameters.
              </li>
              <li>
                Maintained clinical documentation in intensive care
                settings.
              </li>
              <li>
                Received training in multiparameter monitors, ventilators,
                infusion pumps and life-support systems.
              </li>
              <li>
                Assisted healthcare professionals in airway management,
                oxygen therapy and emergency procedures.
              </li>
              <li>
                Collaborated with multidisciplinary teams while
                following infection-control practices.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Patient Monitoring</span>
              <span>Critical Care</span>
              <span>Clinical Documentation</span>
              <span>Teamwork</span>
            </div>
          </article>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section focus-section">
        <div className="section-heading">
          <span className="section-label">03 / CLINICAL INTERESTS</span>
          <h2>
            Areas of <span>Focus.</span>
          </h2>
          <p>
            Key clinical areas that shape my learning and professional
            development.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article className="focus-card" key={item.number}>
                <div className="focus-top">
                  <span>{item.number}</span>
                  <Icon size={27} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="focus-bottom">
                  <ArrowRight size={19} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-label">04 / COMPETENCIES</span>
          <h2>
            Skills & <span>Expertise.</span>
          </h2>
          <p>
            Clinical and technical skills developed through academic and
            practical exposure.
          </p>
        </div>

        <div className="skills-panel">
          <div className="skills-intro">
            <div className="skills-icon">
              <Microscope size={34} />
            </div>

            <span className="small-accent">MY CAPABILITIES</span>
            <h3>Knowledge backed by practical learning.</h3>

            <p>
              Developing a strong foundation in critical care technology,
              patient monitoring and clinical support.
            </p>

            <div className="skills-note">
              <CheckCircle2 size={18} />
              <span>Focused on continuous clinical development</span>
            </div>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <CheckCircle2 size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <span className="section-label">05 / EDUCATION & LEARNING</span>
          <h2>
            Academic <span>Foundation.</span>
          </h2>
          <p>
            My educational background and professional learning
            milestones.
          </p>
        </div>

        <div className="education-layout">
          <div className="education-column">
            <h3 className="column-heading">
              <GraduationCap /> Education
            </h3>

            <article className="education-card">
              <span className="year-tag">2024 â€” 2027</span>
              <h4>B.Sc. (Hons), Critical Care Technology</h4>
              <p>Saveetha College of Allied Health Sciences</p>

              <div className="education-bottom">
                <span>GPA</span>
                <strong>7.97</strong>
              </div>

              <small>Expected completion Â· August 2027</small>
            </article>

            <article className="education-card">
              <span className="year-tag">COMPLETED Â· 2023</span>
              <h4>Higher Secondary Education</h4>
              <p>
                Bharathidhasanar Matric Higher Secondary School
              </p>

              <div className="education-bottom">
                <span>Percentage</span>
                <strong>79%</strong>
              </div>
            </article>
          </div>

          <div className="certification-column">
            <h3 className="column-heading">
              <Award /> Certifications & Events
            </h3>

            <div className="certification-list">
              {certifications.map((cert) => (
                <article className="certification-card" key={cert.title}>
                  <div className="cert-icon">
                    <Award size={20} />
                  </div>

                  <div className="cert-content">
                    <span>
                      {cert.year} Â· {cert.type}
                    </span>
                    <h4>{cert.title}</h4>
                  </div>

                  <ArrowDownRight size={19} />
                </article>
              ))}
            </div>

            <div className="bls-note">
              <ShieldCheck size={21} />
              <div>
                <strong>Basic Life Support (BLS)</strong>
                <span>Certification stated in the resume</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-glow" />

        <div className="contact-inner">
          <span className="section-label">06 / GET IN TOUCH</span>

          <h2>
            Let's Build a Connection.
            <br />
            <span>Let's Make a Difference.</span>
          </h2>

          <p>
            I welcome professional connections, learning opportunities and
            conversations related to critical care technology.
          </p>

          <div className="contact-grid">
            <a
              href="mailto:dd65028@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <span>EMAIL ME</span>
                <strong>dd65028@gmail.com</strong>
              </div>
              <ArrowRight size={19} />
            </a>

            <a
              href="tel:+919629122559"
              className="contact-item"
            >
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <span>CALL ME</span>
                <strong>+91 9629122559</strong>
              </div>
              <ArrowRight size={19} />
            </a>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <span>LOCATION</span>
                <strong>Thiruvallur, Tamil Nadu</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock3 />
              </div>
              <div>
                <span>PROFESSIONAL ROLE</span>
                <strong>Critical Care Technologist Intern</strong>
              </div>
            </div>
          </div>

          <a
            href="mailto:dd65028@gmail.com"
            className="primary-button contact-button"
          >
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <HeartPulse size={21} />
          </span>
          <span>
            DHANUSH<span className="accent">.</span>
          </span>
        </a>

        <p>Dedicated to Care. Committed to Excellence.</p>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={19} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>
        </div>

        <span className="footer-copy">
          Â© 2026 Dhanush Raj N. All rights reserved.
        </span>

        <a href="#home" className="footer-top">
          <ArrowDownRight size={20} />
        </a>
      </footer>
    </main>
  );
}

