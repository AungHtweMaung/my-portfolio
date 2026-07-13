import profileImage from './assets/images/profile.jpg'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Vue', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Python', 'Laravel', 'Django'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MSSQL', 'PostgreSQL'],
  },
  {
    category: 'Deployment',
    items: ['Vultr', 'DigitalOcean', 'Hostinger', 'Git', 'GitHub', 'Linux Servers', 'Docker', 'Nginx'],
  },
]

const projects = [
  {
    name: 'HRMS Project',
    type: 'Human Resource Management System',
    summary:
      'Participated in building employee management workflows including attendance, leave tracking, payroll support, and role-based access.',
    stack: ['Laravel', 'MySQL', 'Blade', 'jQuery'],
  },
  {
    name: 'FDA Project',
    type: 'Regulatory Management System',
    summary:
      'Contributed to features for application processing, approval steps, document handling, and reporting for regulatory operations.',
    stack: ['Laravel', 'MySQL', 'Blade', 'REST APIs'],
  },
  {
    name: 'Laravel AI Image Checker',
    type: 'Image Validation System',
    summary:
      'Developed an AI-powered image validation tool integrated with Laravel, enabling automated image quality assessment and compliance checking.',
    stack: ['LaravelAI SDK', 'Openai Api', 'Gemini', 'MySQL'],
  },
  {
    name: 'Menu Order System',
    type: 'Restaurant Ordering Platform',
    summary:
      'Developed ordering and kitchen flow modules with menu management, order status updates, qr code and table session management and daily sales visibility.',
    stack: ['Laravel', 'React', 'MySQL', 'Bootstrap', 'Hostinger VPS'],
  },
  {
    name: 'AUSphere Project',
    type: 'University Campus Project',
    summary: 'Developed a comprehensive university campus management system with user roles, course registration, academic calendar, real time chat feature, push notifications, caching and mail feature.',
    stack: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
  },
  {
    name: 'Personal Blog',
    type: 'Blog Platform',
    summary: 'Built a personal blog platform, responsive design, and SEO optimization.',
    stack: ['Python', 'Django', 'MySQL', 'Bootstrap'],
  },
  
]

export default function App() {
  return (
    <div className="page">
      <header className="hero-section">
        <div className="hero-noise" />
        <nav className="nav-bar">
          <span className="brand-text">Aung.dev</span>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <section className="hero-content container reveal">
          <div className="hero-text-block">
            <p className="tag-text">Laravel Developer</p>
            <h1>
              I build reliable backend systems
              <br />
              and elegant frontend experiences.
            </h1>
            <p className="hero-lead-text">
              Php Laravel Developer focused on clean architecture, practical
              performance, and modern product design.
            </p>
            <div className="hero-action-group">
              <a className="btn btn-solid" href="#contact">
                Let&apos;s work together
              </a>
              <a className="btn btn-ghost" href="#projects">
                View my work
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src={profileImage} alt="Portrait of Aung" className="hero-image" />
          </div>
        </section>
      </header>

      <main className="container">
        <section className="about-section reveal">
          <h2>About Me</h2>
          <p>
            I am a Laravel developer who cares about maintainable code and
            business impact. I enjoy designing APIs, optimizing SQL-heavy
            features, and pairing backend logic with responsive interfaces that
            feel smooth and polished.
          </p>
        </section>

        <section className="skills-section reveal">
          <h2>Core Skills</h2>
          <div className="skills-group-grid">
            {skillGroups.map((group) => (
              <article key={group.category} className="skills-group-card">
                <h3 className="skills-group-title">{group.category}</h3>
                <div className="chip-grid">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section reveal">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="card-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section reveal">
          <h2>Contact</h2>
          <p>Ph - <a className="contact-phone" href="tel:09951813416">
            09951813416
          </a></p>
          

          <p>Gmail - <a className="contact-email" href="mailto:aunghtwemaung121@gmail.com">
            aunghtwemaung121@gmail.com
          </a></p>
        </section>
      </main>
    </div>
  )
}
