import { useState, useEffect } from 'react';
import { Camera, Code, Zap, Phone, Github, Linkedin, Menu, X, Send, CheckCircle, AlertCircle, MapPin, Award, Briefcase, Users, Rocket, Link, Stethoscope, MailOpen } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const ease = 0.15;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: any) => {
      if (e.target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    />
  );
};

// Glass Card Component
const GlassCard = ({ children, className = '', hover = false }: { children: React.ReactNode, className?: string, hover?: boolean }) => (
  <div className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}>
    {children}
  </div>
);

// Tag Component
const Tag = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <span className="tag">
    {Icon && <Icon size={14} />}
    {children}
  </span>
);

// Stat Component
const StatCard = ({ icon: Icon, number, label }: { icon: any, number: string, label: string }) => (
  <div className="stat-card">
    <Icon className="stat-icon" size={32} />
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

// Navigation
const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }: { currentPage: string, setCurrentPage: (p: string) => void, mobileMenuOpen: boolean, setMobileMenuOpen: (b: boolean) => void }) => {
  const pages = ['home', 'about', 'experience', 'projects', 'contact'];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand" onClick={() => setCurrentPage('home')}>
          <img src="/nav-logo.png" alt="Logo" className="nav-logo" />
          Abhay Korat
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          {pages.map(page => (
            <a
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setMobileMenuOpen(false);
              }}
              className={currentPage === page ? 'active' : ''}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="page home-page">
    <GlassCard className="hero-card">
      <div className="profile-container">
        <div className="star-field" />
        <div className="cyber-orbit orbit-1" />
        <div className="cyber-orbit orbit-2" />
        <div className="cyber-orbit orbit-3" />
        <div className="profile-image-wrapper">
          <img src="/spaceprofile.png" alt="Abhay Korat" className="profile-image" />
          <div className="hologram-overlay" />
        </div>
      </div>

      <h1 className="hero-title">
        Abhay Korat
      </h1>
      <h2 className="hero-subtitle">
        Lead Software Engineer | Mobile Architecture
      </h2>
      <p className="hero-tagline">
        Flutter & Native (iOS/Android) Expert • 11+ Years Building Scalable Fintech & Enterprise Solutions
      </p>

      <div className="hero-buttons">
        <button className="btn btn-primary" onClick={() => setCurrentPage('projects')}>
          View Projects
        </button>
        <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>
          Get In Touch
        </button>
      </div>

      <div className="hero-tags">
        <Tag icon={Code}>Flutter · Dart · Swift · Kotlin</Tag>
        <Tag icon={Zap}>Clean Architecture · BLoC · MVVM</Tag>
        <Tag icon={Camera}>CI/CD · Fastlane · Firebase</Tag>
        <Tag icon={Briefcase}>Fintech · Enterprise · White-Label</Tag>
      </div>

      <div className="stats-grid">
        <StatCard icon={Award} number="11+" label="Years Experience" />
        <StatCard icon={Code} number="50+" label="Apps works" />
        <StatCard icon={Users} number="12+" label="Team Members Led" />
        <StatCard icon={Rocket} number="40%" label="Faster Releases" />
      </div>
    </GlassCard>
  </div>
);

// About Page
const AboutPage = () => {
  const coreSkills = [
    { category: 'Mobile Development', skills: ['Flutter', 'Dart', 'Swift', 'Objective-C', 'Kotlin', 'Java', 'iOS SDK', 'Android SDK'] },
    { category: 'Architecture & Patterns', skills: ['Clean Architecture', 'MVVM', 'BLoC/Cubit', 'Provider', 'Modular Architecture', 'Dependency Injection'] },
    { category: 'State Management', skills: ['BLoC', 'Cubit', 'Provider', 'Riverpod', 'GetX'] },
    { category: 'CI/CD & DevOps', skills: ['GitLab CI/CD', 'Fastlane', 'GitHub Actions', 'CodeMagic', 'Firebase App Distribution'] },
    { category: 'Backend & Cloud', skills: ['Firebase', 'REST APIs', 'GraphQL', 'Socket.io', 'Payment Gateways', 'Local Storage'] },
    { category: 'Tools & Testing', skills: ['Jira', 'Postman', 'Charles Proxy', 'XCTest', 'Flutter Integration Tests'] }
  ];

  return (
    <div className="page about-page">
      <GlassCard>
        <h2 className="section-title">Professional Summary</h2>
        <p className="section-text">
          Results-driven Lead Software Engineer with 11+ years of experience designing and delivering scalable,
          secure, high-traffic mobile applications in Fintech and Enterprise domains. Expert in Flutter, Dart,
          Swift, Kotlin, and end-to-end mobile architecture (Clean Architecture, MVVM, BLoC, modularization,
          dynamic theming, CI/CD). Proven track record leading engineering teams, mentoring developers,
          establishing coding standards, and driving on-time delivery of complex, multi-platform products.
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="section-title">Core Competencies</h2>
        <ul className="feature-list">
          <li>Architecting scalable mobile platforms supporting high-volume user onboarding and secure payment processing</li>
          <li>Designing white-label Flutter architectures for multi-brand deployment with dynamic theming and configurations</li>
          <li>Leading cross-functional teams of 12+ engineers with code reviews, sprint planning, and technical mentorship</li>
          <li>Implementing CI/CD pipelines reducing release cycles by 40% and improving deployment efficiency</li>
          <li>Optimizing app performance with 25% size reduction and 35% faster startup times</li>
          <li>Establishing engineering standards, reusable component libraries, and modular architecture patterns</li>
        </ul>
      </GlassCard>

      <GlassCard>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-section">
          {coreSkills.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map(skill => (
                  <div key={skill} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="section-title">Domain Expertise</h2>
        <div className="domain-grid">
          <div className="domain-card">
            <Award size={32} className="domain-icon" />
            <h3>Fintech</h3>
            <p>KYC/AML verification, Payment workflows, Secure authentication, Trading platforms</p>
          </div>
          <div className="domain-card">
            <Briefcase size={32} className="domain-icon" />
            <h3>Enterprise</h3>
            <p>Multi-tenancy, White-label apps, Role-based access, Offline-first architecture</p>
          </div>
          <div className="domain-card">
            <Stethoscope size={32} className="domain-icon" />
            <h3>Healthcare & Insurance</h3>
            <p>Real-time data feeds, Health & Fitness, Routine, inventory, Appointments, notifier streaming, High-volume coredata</p>
          </div>
          <div className="domain-card">
            <Zap size={32} className="domain-icon" />
            <h3>High-Performance</h3>
            <p>Real-time data feeds, Socket integration, Market streaming, High-volume transactions</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="section-title">Education</h2>
        <div className="education-section">
          <div className="education-item">
            <h3>Bachelor of Engineering – Computer Science & Engineering</h3>
            <p className="education-detail">Dr. Subhash University, Junagadh | 2012 – 2014</p>
          </div>
          <div className="education-item">
            <h3>Diploma in Computer Engineering</h3>
            <p className="education-detail">R.N.G. Patel Institute of Technology, Bardoli | 2008 – 2011</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Experience Page
const ExperiencePage = () => {
  const experiences = [
    {
      company: 'Finoux Solutions Private Limited',
      location: 'Mumbai, Maharashtra',
      role: 'Lead Software Engineer',
      period: 'Jul 2024 – Present',
      achievements: [
        'Architecting next-gen Fintech & Enterprise mobile platforms supporting high-volume user onboarding, KYC/AML verification, and payment processing',
        'Designed white-label Flutter architecture enabling single codebase deployment across multiple brands and environments',
        'Established modular architecture and CI/CD pipelines using GitHub Actions + CodeMagic, reducing release cycles by 40%',
        'Mentoring team of 12+ engineers, conducting code reviews, and driving sprint planning'
      ]
    },
    {
      company: 'Sunflower Lab',
      location: 'Vadodara, Gujarat',
      role: 'Senior Flutter Developer',
      period: 'Jun 2022 – May 2024',
      achievements: [
        'Led development of large-scale Flutter applications using BLoC, Flavors, and clean architecture patterns',
        'Reduced app size by 25% and improved startup time by 35% through performance optimization',
        'Implemented automated CI/CD pipelines with Fastlane and Firebase App Distribution',
        'Mentored junior developers and conducted architecture reviews'
      ]
    },
    {
      company: 'Knackit',
      location: 'Bengaluru, Karnataka',
      role: 'Founding Engineer – iOS & Flutter Expert',
      period: 'Sep 2020 – May 2022',
      achievements: [
        'Built core product from scratch using Flutter and native iOS/Android modules as founding member',
        'Established reusable component library and architecture patterns adopted company-wide',
        'Collaborated with founders to define technical roadmap and prioritize features',
        'Reduced app size by 50+ MB by replacing FFmpeg with native background method channels'
      ]
    },
    {
      company: 'CoderKube Technologies',
      location: 'Surat, Gujarat',
      role: 'Team Lead',
      period: 'Apr 2019 – Aug 2020',
      achievements: [
        'Led end-to-end delivery of multiple client projects with task allocation and quality management',
        'Drove adoption of cross-platform Flutter strategy, reducing duplicate code by 60%',
        'Managed project timelines and coordinated with stakeholders'
      ]
    },
    {
      company: 'BlueBell Apps',
      location: 'Copenhagen, Denmark',
      role: 'Mobile Application Developer',
      period: 'Feb 2017 – Mar 2019',
      achievements: [
        'Contract-based iOS development with continuous integration and delivery',
        'Integrated Bank Verification, dynamic forms UI, multipart data handling',
        'Implemented In-App Purchases, AdMob, and social media authentication'
      ]
    },
    {
      company: 'IBL Infotech',
      location: 'Surat, Gujarat',
      role: 'Senior iOS Developer',
      period: 'Apr 2014 – Jan 2017',
      achievements: [
        'Delivered 15+ production iOS apps using Swift and Objective-C',
        'Integrated VOIP (CallKit), video streaming, and push notifications',
        'Implemented In-App Purchases, AdMob, and Facebook Graph Auth'
      ]
    }
  ];

  return (
    <div className="page experience-page">
      <h1 className="page-title">Professional Experience</h1>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <GlassCard key={idx} hover className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-meta">
                  <span className="experience-location">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
            </div>
            <ul className="achievement-list">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: 'XTSApp',
      description: 'Enterprise trading platform with dynamic theming, white-label branding, and real-time market feeds via multiple socket channels.',
      features: [
        'Buy/Sell engine with portfolio management and watchlist',
        'Real-time order updates with streaming mechanisms',
        'Encrypted local storage + secure session management',
        'Advanced charting and holdings/positions tracking'
      ],
      tags: ['Flutter', '.NET', 'MySQL', 'Sockets', 'Firebase', 'Clean Architecture', 'BLoC'],
      link: 'https://symphonyfintech.com/xts/'
    },
    {
      title: 'BullForce',
      description: 'Comprehensive fintech platform with KYC/AML onboarding, trading capabilities, and payment processing.',
      features: [
        'Aadhar/PAN/Bank verification for onboarding',
        'UPI/NetBanking/SIP/SWP workflows',
        'Advanced scanners and dynamic market insights',
        'Real-time positions, watchlists, and order book'
      ],
      tags: ['Flutter', '.NET', 'MySQL', 'Sockets', 'CI/CD', 'BLoC', 'Payment Gateways'],
      link: 'https://bullforce.co'
    },
    {
      title: 'Spark - IRISH',
      description: 'Dynamic page rendering engine with multi-platform secure authentication and responsive UI/UX.',
      features: [
        'Conditional routing with dynamic page rendering',
        'Microsoft Auth + deep link implementation',
        'Single-space UI layout for multiple device form factors',
        'Code obfuscation and platform-specific security hardening'
      ],
      tags: ['Flutter', 'JavaScript', 'React', 'Swift', 'Kotlin', 'CI/CD', 'MVVM', 'GetX'],
      link: 'https://play.google.com/store/apps/details?id=com.wealthspectrum.app.spark&pcampaignid=web_share'
    },
    {
      title: 'AlleyData',
      description: 'Universal health and fitness application with comprehensive data synchronization and offline capabilities.',
      features: [
        'Health tracking, routine management, and appointments',
        'CoreData synchronization with API responses',
        'Secure session management with notifiers',
        'Universal UI for iPhone and iPad'
      ],
      tags: ['iOS', 'Swift', 'CoreData', 'RxSwift', 'Coredata', 'MVVM', 'CI/CD'],
      link: 'https://alleydata.com/'
    },
    {
      title: 'Knackit',
      description: 'Founding member project with wallet, rewards, and multi-language support.',
      features: [
        'Reduced app size by 50+ MB with native background methods',
        'Wallet, Rewards, Coins, and Transactional modules',
        'Localization for 12 Indian languages',
        'Reusable component library adopted across teams'
      ],
      tags: ['Flutter', 'Swift', 'Kotlin', 'Laravel', 'MongoDB', 'CI/CD', 'Payment Gateways'],
      highlight: 'Founders raised $1.5M funding',
      link: 'https://www.crunchbase.com/organization/knackit'
    },
    {
      title: 'Agrimedia',
      description: 'Award-winning application in agriculture sector of India 2019.',
      features: [
        'News module with dynamic images, videos, and deep links',
        'Multilingual support (Hindi, English, Gujarati)',
        'Q&A module for farmers to post and resolve issues',
        'Analytics pipeline for user interactions'
      ],
      tags: ['Swift', 'MVC', 'PHP', 'MySQL'],
      highlight: 'Award-winning app 2019',
      link: 'https://apps.apple.com/in/app/agrimedia/id1434653553'
    },
    {
      title: 'Legacy Vault',
      description: 'Location-based service with real-time tracking and social features.',
      features: [
        'Dynamic map annotations with Google Maps SDK',
        'Offline location tracking with periodic sync',
        'Google Places API check-in/out system',
        'Real-time chat with Socket.io'
      ],
      tags: ['Flutter', 'Swift', 'Kotlin', 'Java', 'MySQL', 'Firebase', 'CI/CD'],
      link: 'https://www.legacyvaultapp.com'
    },
    {
      title: 'Benefact4',
      description: 'Social donation platform with timeline feeds and media sharing.',
      features: [
        'Donation feed with timeline and multi-layer filters',
        'Widget-based social sharing with screenshot composer',
        'Multipart uploads for media content',
        'Subscription management and analytics tracking'
      ],
      tags: ['Flutter', 'Java', 'MySQL', 'Firebase', 'CI/CD', 'Payment Gateways'],
      link: 'https://www.heeythere.com'
    },
    {
      title: 'Baby led weaning guide recipes',
      description: 'Social donation platform with timeline feeds and media sharing.',
      features: [
        'Multi-language localization (DE, FR, EN, IT)',
        'Universal UI for iPhone + iPad',
        'WebKit rendering for WHO nutrition content',
        'In-App Purchases for premium content',
        'Payment processing with Subscription plans (iOS + Android)'
      ],
      tags: ['Swift', 'Localization', 'Auto-layout', 'In-app purchase', 'WebKit', 'Alamofire', 'Coredata'],
      link: 'https://www.babyledrecipes.com/apps.html'
    }
  ];

  return (
    <div className="page projects-page">
      <h1 className="page-title">Featured Projects</h1>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <GlassCard key={idx} hover className="project-card">
            <div className="project-header">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view">
                  View <Link size={14} />
                </a>
              )}
              {project.highlight && (
                <span className="project-highlight">
                  <Award size={16} />
                  {project.highlight}
                </span>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! I will get back to you soon.'
      });
      setLoading(false);
      setFormData({ name: '', email: '', mobile: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page contact-page">
      <GlassCard className="contact-container">
        <div className="contact-grid">
          <div className="contact-content">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={20} />
                <span>Surat, Gujarat, India</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <a href="tel:+919998529350">+91 9998529350</a>
              </div>
              <div className="contact-item">
                <MailOpen size={40} />
                <a href="mailto:koratabhaym@gmail.com">koratabhaym@gmail.com</a>
              </div>
              <div className="contact-item">
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/abhaykorat" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/abhaykorat
                </a>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <a href="https://github.com/abhuzz" target="_blank" rel="noopener noreferrer">
                  github.com/abhuzz
                </a>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message or project inquiry..."
                  disabled={loading}
                />
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  {status.message}
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                disabled={loading || !formData.name || !formData.email || !formData.message}
              >
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>

          <div className="contact-visual">
            <div className="astronaut-wrapper">
              <img src="/contact-bg.jpg" alt="Abhay in Space" className="astronaut-image" />
              <div className="visual-overlay" />
              <div className="visual-glow" />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Main App
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'experience': return <ExperiencePage />;
      case 'projects': return <ProjectsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <CustomCursor />
      <div className="animated-bg" />

      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <p>© 2024 Abhay Korat. Lead Software Engineer | Mobile Architecture Specialist</p>
        <p className="footer-tagline">Building scalable mobile solutions • Flutter • iOS • Android</p>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: none;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #e2e8f0;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          position: relative;
        }

        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0c4a6e 50%, #312e81 75%, #0f172a 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #2563eb;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease, border-color 0.2s ease;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .glass-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.2);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }

        .nav-content {
          max-width: 1600px;
          width: 90%;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .nav-logo {
          width: 35px;
          height: 35px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #2563eb;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #e2e8f0;
          font-size: 1.5rem;
        }

        .main-content {
          max-width: 1600px;
          width: 90%;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          min-height: calc(100vh - 150px);
        }

        .page {
          animation: fadeIn 0.5s ease;
          width: 100%;
        }

        .home-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 200px);
          width: 100%;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-card {
          text-align: center;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: visible;
        }

        .profile-container {
          position: relative;
          width: 320px;
          height: 320px;
          margin: 0 auto -1.75rem; /* Negative margin to cover half the title height */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          z-index: 10;
        }

        .star-field {
          position: absolute;
          width: 400px;
          height: 400px;
          background-image: 
            radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 80px 120px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 190px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 210px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 150px 210px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 190px, #fff, rgba(0,0,0,0));
          background-size: 250px 250px;
          animation: flicker 4s ease-in-out infinite;
          opacity: 0.4;
          z-index: 1;
        }

        .cyber-orbit {
          position: absolute;
          border: 1px dashed rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          z-index: 1;
        }

        .orbit-1 {
          width: 280px;
          height: 280px;
          animation: rotateOrbit 12s linear infinite;
        }

        .orbit-2 {
          width: 320px;
          height: 320px;
          animation: rotateOrbit 18s linear infinite reverse;
          border-color: rgba(37, 99, 235, 0.2);
        }

        .orbit-3 {
          width: 380px;
          height: 380px;
          animation: rotateOrbit 25s linear infinite;
          border-width: 2px;
          border-style: dotted;
          opacity: 0.5;
        }

        .profile-image-wrapper {
          position: relative;
          z-index: 2;
          width: 260px;
          height: 260px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.4));
          animation: float 6s ease-in-out infinite;
        }

        .hologram-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            transparent 0%,
            rgba(6, 182, 212, 0.1) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
          pointer-events: none;
          animation: scanline 8s linear infinite;
          opacity: 0.3;
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #e2e8f0, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #93c5fd;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(37, 99, 235, 0.1);
          border-color: rgba(37, 99, 235, 0.4);
          transform: translateY(-4px);
        }

        .stat-icon {
          color: #2563eb;
          margin-bottom: 0.75rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .btn {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-primary:hover {
          box-shadow: 0 6px 30px rgba(37, 99, 235, 0.6);
        }

        .btn-secondary {
          background: rgba(37, 99, 235, 0.1);
          color: #3b82f6;
          border: 2px solid #2563eb;
        }

        .about-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }

        .section-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cbd5e1;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-list li {
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .feature-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
        }

        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          text-align: center;
          color: #93c5fd;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }

        .domain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .domain-card {
          padding: 1.5rem;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .domain-card:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.4);
          transform: translateY(-4px);
        }

        .domain-icon {
          color: #22c55e;
          margin-bottom: 1rem;
        }

        .domain-card h3 {
          font-size: 1.25rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .domain-card p {
          color: #94a3b8;
          line-height: 1.6;
        }

        .education-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .education-item h3 {
          font-size: 1.1rem;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .education-detail {
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .experience-card {
          position: relative;
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .experience-company {
          font-size: 1.25rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .experience-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
        }

        .experience-period {
          color: #22c55e;
          font-weight: 500;
        }

        .achievement-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .achievement-list li {
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .achievement-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .project-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-view {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.3);
          border-radius: 8px;
          color: #60a5fa;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-view:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: #60a5fa;
          color: #e2e8f0;
          box-shadow: 0 0 15px rgba(96, 165, 250, 0.6);
          transform: translateY(-2px);
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
        }

        .project-highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: #fb923c;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .project-description {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .project-features {
          flex: 1;
        }

        .project-features h4 {
          font-size: 1rem;
          color: #3b82f6;
          margin-bottom: 0.75rem;
        }

        .project-features ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .project-features li {
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .project-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-tag {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }

        .contact-content {
          padding: 3rem;
        }

        .contact-visual {
          position: relative;
          background: #0f172a;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          overflow: hidden;
        }

        .astronaut-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .astronaut-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 0 50px rgba(37, 99, 235, 0.2);
          animation: float 8s ease-in-out infinite;
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(15, 23, 42, 0.4), transparent, rgba(15, 23, 42, 0.4));
          pointer-events: none;
        }

        .visual-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          pointer-events: none;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-visual {
            height: 400px;
            order: -1;
          }
          .contact-content {
            padding: 2rem;
          }
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
        }

        .contact-item a {
          color: #3b82f6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #2563eb;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: #cbd5e1;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: #e2e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 500;
        }

        .status-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #86efac;
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          color: #64748b;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .footer-tagline {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #475569;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            padding: 1rem 2rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .nav-links-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .domain-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default App;