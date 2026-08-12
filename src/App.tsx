import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Network,
  Play,
  Server,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  github?: string;
  live?: string;
  visual: 'sos' | 'genimg' | 'petverse' | 'movie' | 'rickshaw';
  overview: string;
  features: string[];
};

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Research', 'Contact'];
const technologies = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'GitHub', 'AWS', 'OpenAI'];

const projects: Project[] = [
  {
    number: '01', title: 'AI-Powered Emergency Alert & SOS System',
    description: 'An emergency response platform that broadcasts SOS alerts to nearby responders, with AI-powered alert ranking and real-time map-based tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI', 'Maps'], accent: 'coral', visual: 'sos',
    live: 'https://bipod-shongket.vercel.app',
    overview: 'Bipod Shongket turns emergency communication into a faster, more coordinated experience for people who need help and responders who can provide it.',
    features: ['SOS broadcast and alert ranking', 'Real-time responder map', 'MERN application architecture'],
  },
  {
    number: '02', title: 'PetVerse — Full Stack Pet Shop',
    description: 'A modern MERN-stack e-commerce platform featuring responsive UI, product management, authentication and complete CRUD functionality.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vite'], accent: 'blue', visual: 'petverse',
    github: 'https://github.com/CSE470g11/PetVerse',
    overview: 'PetVerse is a complete product experience designed around simple discovery, clear product management and reliable full-stack foundations.',
    features: ['Product management and CRUD', 'Authentication-ready user flow', 'Responsive storefront experience'],
  },
  {
    number: '03', title: 'GenIMG — AI Image Generator',
    description: 'A full-stack AI image generation platform using Hugging Face FLUX with image generation APIs and a community feed for sharing images.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'FLUX'], accent: 'amber', visual: 'genimg',
    live: 'https://gen-img-ai-image-generator.vercel.app/',
    overview: 'GenIMG explores the creative side of applied AI, combining a simple generation flow with a social feed for sharing visual experiments.',
    features: ['Hugging Face FLUX integration', 'Community feed for generated work', 'Full-stack image generation workflow'],
  },
  {
    number: '04', title: 'Movie Recommendation System',
    description: 'A recommendation engine combining collaborative filtering and content-based techniques to improve movie recommendations.',
    tags: ['Python', 'Machine Learning', 'Collaborative Filtering'], accent: 'mint', visual: 'movie',
    github: 'https://github.com/SazidFaiaz/Movie-recommendation-system-using-the-combination-of-collaborative-filtering',
    overview: 'A research-led recommendation project exploring how collaborative signals and content scores can work together for more relevant results.',
    features: ['Hybrid recommendation approach', 'Collaborative filtering', 'Content-based scoring'],
  },
  {
    number: '05', title: 'Automated Auto Rickshaw Speed & Zone Management',
    description: 'An embedded system that monitors vehicle speed and restricted-zone violations with automated enforcement.',
    tags: ['Embedded Systems', 'Sensors', 'Automation'], accent: 'purpleless', visual: 'rickshaw',
    overview: 'A hardware-focused system for monitoring speed and restricted zones using relay-based motor cutoff and servo-controlled braking.',
    features: ['Speed monitoring', 'Restricted-zone detection', 'Automated motor and brake control'],
  },
];

const skillGroups = {
  Programming: ['Python', 'C/C++', 'JavaScript', 'SQL', 'Bash'],
  Frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  'AI / ML': ['OpenAI API', 'Prompt Engineering', 'NLP', 'LLM Concepts', 'Machine Learning', 'Data Preprocessing'],
  DevOps: ['Linux', 'Docker', 'Git', 'GitHub', 'GitLab', 'CI/CD', 'GitHub Actions', 'Jenkins', 'AWS Basics'],
  Tools: ['Postman', 'VS Code', 'Jira', 'Azure', 'PyCharm', 'NetBeans', 'LaTeX'],
  Foundations: ['DSA', 'OOP', 'System Design', 'Networking', 'Version Control'],
};

function SectionLabel({ children, number }: { children: ReactNode; number: string }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function ButtonLink({ children, href = '#contact', secondary = false, external = false }: { children: ReactNode; href?: string; secondary?: boolean; external?: boolean }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}{secondary ? <ArrowUpRight size={16} /> : <ChevronRight size={16} />}</a>;
}

function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual visual-${project.visual}`}>
    <div className="visual-grid" />
    <div className="visual-window">
      <div className="window-bar"><span /><span /><span /><b>{project.visual === 'sos' ? 'emergency.dashboard' : project.visual === 'genimg' ? 'genimg.studio' : project.visual === 'petverse' ? 'petverse.shop' : project.visual === 'movie' ? 'recommend.py' : 'zone-control.exe'}</b></div>
      {project.visual === 'sos' && <div className="sos-screen"><div className="map-lines"><span /><span /><span /></div><div className="sos-alert"><span className="pulse-dot" />SOS ALERT <small>HIGH PRIORITY</small></div><div className="map-pin pin-one" /><div className="map-pin pin-two" /><div className="map-pin pin-three" /><div className="responder-card"><Check size={13} /> 08 responders nearby</div></div>}
      {project.visual === 'genimg' && <div className="gen-screen"><div className="gen-image"><Sparkles size={28} /><span>FLUX / generated</span></div><div className="prompt-line"><span>prompt</span><b>cinematic future / 01</b><ArrowUpRight size={14} /></div><div className="gen-stats"><span>04:23s <small>generation</small></span><span>1024 × 1024 <small>output</small></span></div></div>}
      {project.visual === 'petverse' && <div className="pet-screen"><div className="pet-hero"><span>find a friend<br /><b>for every day</b></span><div className="pet-orb">/\<br />ww</div></div><div className="pet-products"><span>CAT CARE</span><span>DOG FOOD</span><span>TOYS + MORE</span></div></div>}
      {project.visual === 'movie' && <div className="movie-screen"><div className="movie-title">Because you liked <b>Arrival</b></div><div className="movie-posters"><span>01</span><span>02</span><span>03</span></div><div className="score-line"><span>match score</span><b>94.8%</b><i style={{ width: '94%' }} /></div></div>}
      {project.visual === 'rickshaw' && <div className="rickshaw-screen"><div className="speed">42<small>km/h</small></div><div className="zone-ring"><span>ZONE<br />ACTIVE</span></div><div className="terminal-lines"><span>sensor.read()</span><span>if (speed &gt; limit)</span><span>motor.cutoff(true)</span></div></div>}
    </div>
    <div className="visual-code">&lt; / &gt;</div>
    <span className="visual-index">{project.number}</span>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark"><Braces size={18} /></span><span>Md Sazid <b>Faiaz</b></span></a>
      <nav className={menuOpen ? 'nav-open' : ''}>{navItems.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}><span>0{index + 1}</span>{item}</a>)}<ButtonLink href="#contact">Let's Talk</ButtonLink></nav>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> Open to opportunities <span className="eyebrow-line" /></div>
          <p className="hero-kicker">Hello, I'm</p>
          <h1>Md Sazid<br /><em>Faiaz</em></h1>
          <div className="hero-role"><span /> Full Stack Developer <b>·</b> Software Engineer <b>·</b> AI Enthusiast</div>
          <p className="hero-intro">Computer Science and Engineering graduate passionate about building scalable web applications, AI-powered products, and reliable software solutions.</p>
          <div className="hero-actions"><ButtonLink href="#projects">View My Work</ButtonLink><ButtonLink secondary href="mailto:mdsazidfaiaz@gmail.com">Download CV <Download size={15} /></ButtonLink></div>
          <div className="hero-meta"><span><span className="meta-icon"><Globe2 size={14} /></span> Dhaka, Bangladesh</span><span className="meta-rule" /><span>01 <small>/</small> 05 projects</span></div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-photo-wrap"><img src="/images/profile-pic_(2).png" alt="Md Sazid Faiaz" /></div>
          <div className="hero-bracket bracket-left">&lt;<br /><span>/</span></div><div className="hero-bracket bracket-right">&gt;</div>
          <div className="floating-label label-react"><Code2 size={14} /> React.js</div><div className="floating-label label-ai"><Sparkles size={14} /> AI / ML</div><div className="floating-label label-node"><Server size={14} /> Node.js</div>
          <div className="hero-coordinates">23°48' N<br />90°24' E</div>
        </div>
      </section>

      <div className="tech-strip"><div className="tech-track">{[...technologies, ...technologies].map((tech, index) => <span key={`${tech}-${index}`}>{tech}<i>·</i></span>)}</div></div>

      <section id="about" className="about section-wrap section-block">
        <div className="about-copy reveal"><SectionLabel number="01">About me</SectionLabel><h2>Building useful things<br /><em>with intention.</em></h2><p>Computer Science and Engineering graduate from BRAC University with hands-on experience in full-stack web development, software engineering, AI-powered applications, and DevOps fundamentals.</p><p>I enjoy turning complex problems into practical software solutions and building products that are scalable, reliable, and easy to use.</p><div className="interest-list">{['Full Stack Development', 'Artificial Intelligence', 'Software Engineering', 'Cloud & DevOps'].map(item => <span key={item}><Check size={13} /> {item}</span>)}</div></div>
        <div className="about-aside reveal reveal-delay"><div className="stats-grid">{[['3.03', 'CGPA'], ['2026', 'Graduate'], ['5+', 'Major projects'], ['3+', 'Research projects']].map(([number, label]) => <div className="stat-card" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div><div className="mini-timeline">{[['2022', 'Started BSc in CSE'], ['2025', 'Full Stack Developer Experience'], ['2026', 'CSE Graduate']].map(([year, label], index) => <div key={year} className="timeline-item"><b>{year}</b><span className={index === 1 ? 'active' : ''} /><p>{label}</p></div>)}</div></div>
      </section>

      <section className="services section-wrap section-block"><div className="section-heading reveal"><div><SectionLabel number="02">What I do</SectionLabel><h2>From first idea<br /><em>to shipped product.</em></h2></div><p>Practical engineering across the stack, with a curiosity for the systems behind the screen.</p></div><div className="service-grid">{[
        [<Code2 />, 'Full Stack Development', 'Building scalable and responsive web applications using modern frontend and backend technologies.', 'React · Next.js · Node.js · Express'],
        [<Sparkles />, 'AI-Powered Applications', 'Developing intelligent applications using LLMs, APIs, NLP techniques and generative AI.', 'Python · OpenAI · Hugging Face · NLP'],
        [<Database />, 'Backend & APIs', 'Designing RESTful APIs, database architecture and backend systems for reliable applications.', 'Node.js · Express · MongoDB · PostgreSQL'],
        [<Terminal />, 'DevOps & Deployment', 'Working with Git, Docker, Linux, CI/CD and cloud fundamentals for reliable workflows.', 'Docker · GitHub Actions · AWS · Linux'],
      ].map(([icon, title, description, tags], index) => <article className="service-card reveal" key={title as string}><div className="service-top"><span className="service-icon">{icon}</span><small>0{index + 1}</small></div><h3>{title as string}</h3><p>{description as string}</p><span className="service-tags">{tags as string}</span></article>)}</div></section>

      <section id="skills" className="skills section-wrap section-block"><div className="section-heading reveal"><div><SectionLabel number="03">The toolkit</SectionLabel><h2>Technical <em>skills.</em></h2></div><p>Tools I use to think, build, test and bring ideas into the world.</p></div><div className="skills-layout"><div className="skill-intro reveal"><div className="code-card"><div className="window-bar"><span /><span /><span /><b>stack.config.ts</b></div><pre><code><i>const</i> engineer = {'{'}{`\n`}  focus: <em>'useful software'</em>,{`\n`}  stack: <em>'full-stack'</em>,{`\n`}  curiosity: <em>'always on'</em>{`\n`}{'}'}</code></pre></div><div className="skill-callout"><Network size={18} /><span>Always learning,<br /><b>always shipping.</b></span></div></div><div className="skill-groups reveal reveal-delay">{Object.entries(skillGroups).map(([group, skills]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="projects" className="projects section-wrap section-block"><div className="section-heading reveal"><div><SectionLabel number="04">Selected work</SectionLabel><h2>Projects that<br /><em>do the talking.</em></h2></div><p>A selection of projects I've built across web development, AI, recommendation systems and software engineering.</p></div><div className="project-list">{projects.map((project, index) => <article className={`project-card ${index % 2 ? 'project-reverse' : ''} reveal`} key={project.title}><ProjectVisual project={project} /><div className="project-info"><span className="project-number">/{project.number}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><button className="text-button" onClick={() => setActiveProject(project)}>View case study <ArrowUpRight size={16} /></button>{project.github && <a className="icon-button" href={project.github} target="_blank" rel="noreferrer" aria-label="View GitHub"><Github size={17} /></a>}{project.live && <a className="icon-button" href={project.live} target="_blank" rel="noreferrer" aria-label="View live demo"><Play size={16} /></a>}</div></div></article>)}</div><div className="projects-foot"><span>More experiments in progress <i /></span><a href="https://github.com/SazidFaiaz" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a></div></section>

      <section id="experience" className="experience section-wrap section-block"><div className="section-heading reveal"><div><SectionLabel number="05">The journey</SectionLabel><h2>Experience &<br /><em>education.</em></h2></div><p>The moments and environments that have shaped how I approach technology and collaboration.</p></div><div className="journey-grid"><div className="journey-column reveal"><h3 className="column-title">Experience</h3>{[['2025 — 2026', 'Full Stack Developer', 'OAI Venture', 'Developed and maintained scalable MERN-stack web applications, designed RESTful APIs, and optimized backend performance.'], ['2023 — 2025', 'Assistant Director', 'Robotics Club of BRAC University', 'Leadership, technical collaboration and student community involvement.'], ['2024 — 2025', 'Campus Ambassador', 'Programming Hero', 'Community engagement, communication and technology advocacy.']].map(([date, role, company, copy]) => <div className="journey-item" key={role}><span>{date}</span><h3>{role}</h3><b>{company}</b><p>{copy}</p></div>)}</div><div className="journey-column reveal reveal-delay"><h3 className="column-title">Education</h3>{[['2022 — 2026', 'Bachelor of Science in CSE', 'BRAC University', 'CGPA: 3.03'], ['2020', 'Higher Secondary Certificate — Science', 'Rajshahi Government Model School & College', 'GPA: 5.00'], ['2018', 'Secondary School Certificate — Science', 'Sholua High School', 'GPA: 5.00']].map(([date, role, school, copy]) => <div className="journey-item" key={role}><span>{date}</span><h3>{role}</h3><b>{school}</b><p>{copy}</p></div>)}</div></div></section>

      <section id="research" className="research section-wrap section-block"><div className="research-intro reveal"><SectionLabel number="06">Research & AI</SectionLabel><h2>Curious about<br /><em>what's next.</em></h2><p>Exploring the space where intelligent systems, data and human problems meet.</p></div><div className="research-list reveal reveal-delay">{[['01', 'Predicting and Mitigating the Impact of Climate Change Using Deep Learning and Computer Vision Techniques', 'Applied deep learning and computer vision techniques to climate-related datasets for predictive environmental monitoring.', true], ['02', 'Unsupervised Neural Network for Multi-Genre Music Generation', 'Exploring generative neural network models for automatic multi-genre music synthesis using unsupervised learning.', false], ['03', 'Movie Recommendation System Using Collaborative Filtering and Content Score', 'Explored hybrid recommendation techniques combining collaborative filtering with content-based scoring.', false]].map(([number, title, copy, link]) => <article className="research-item" key={title as string}><span>{number as string}</span><div><h3>{title as string}</h3><p>{copy as string}</p>{link && <a href="https://www.researchgate.net/publication/410544259_Multi-Task_Learning_for_Flood_Prediction_Joint_Classification_and_Regression_Using_Hybrid_CNN-BiLSTM_Networks_with_Feature_Gate_Mechanisms" target="_blank" rel="noreferrer">Read publication <ArrowUpRight size={14} /></a>}</div></article>)}</div></section>

      <section className="achievements section-wrap section-block"><div className="section-heading reveal"><div><SectionLabel number="07">Beyond the build</SectionLabel><h2>Small wins,<br /><em>meaningful moments.</em></h2></div></div><div className="achievement-grid">{[['Vice Chancellor Recognition', 'BRAC University', 'Recognized for outstanding contribution during Convocation.'], ['BRAC University Merit Scholarship', 'BRAC University', 'Received approximately 20% tuition scholarship during the first year.'], ['INTRAHACKTIVE Hackathon', '10th position', 'Secured 10th position in the Hackathon segment organized by BRAC University Computer Club.'], ['Bdapps Innovation Summit', 'Showcase', 'Showcased innovative mobile and digital solutions using the bdapps platform.']].map(([title, label, copy]) => <article className="achievement-card reveal" key={title}><span className="achievement-check"><Check size={14} /></span><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section id="contact" className="contact section-wrap section-block"><div className="contact-orbit" /><div className="contact-copy reveal"><SectionLabel number="08">What's next?</SectionLabel><h2>Have a project<br /><em>in mind?</em></h2><p>I'm always interested in discussing software projects, AI applications, and new opportunities.</p><ButtonLink href="mailto:mdsazidfaiaz@gmail.com">Let's Talk</ButtonLink></div><div className="contact-details reveal reveal-delay"><div><span>Email</span><a href="mailto:mdsazidfaiaz@gmail.com">mdsazidfaiaz@gmail.com</a></div><div><span>Phone</span><a href="tel:+8801746734781">+880 1746 734781</a></div><div><span>Location</span><p>Dhaka, Bangladesh</p></div></div></section>
    </main>

    <footer className="footer section-wrap"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Braces size={18} /></span><span>Md Sazid <b>Faiaz</b></span></a><p>Full Stack Developer <span>·</span> Software Engineer</p></div><div className="footer-links"><a href="https://github.com/SazidFaiaz" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/sazid-faiaz/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="mailto:mdsazidfaiaz@gmail.com"><Mail size={17} /> Email</a></div><div className="footer-bottom"><span>© 2026 Md Sazid Faiaz. All rights reserved.</span><a href="#home"><ArrowUp size={15} /> Back to top</a></div></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={19} /></button><ProjectVisual project={activeProject} /><div className="modal-content"><span className="project-number">/{activeProject.number}</span><h2>{activeProject.title}</h2><p>{activeProject.overview}</p><h3>Key features</h3><ul>{activeProject.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul><div className="project-tags">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-actions">{activeProject.live && <ButtonLink href={activeProject.live} external>Live demo</ButtonLink>}{activeProject.github && <ButtonLink href={activeProject.github} secondary external>GitHub <Github size={15} /></ButtonLink>}</div></div></div></div>}
  </div>;
}

export default App;
