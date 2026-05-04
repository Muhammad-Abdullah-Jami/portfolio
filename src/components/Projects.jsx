import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent Conversational AI System',
      description: 'Architected an advanced AI Chat and Voice ecosystem using LangGraph, FastAPI, and MySQL/PostgreSQL. Features sophisticated state management, recursive flow control, and high-performance RAG pipeline with pgvector.',
      tags: ['LangGraph', 'FastAPI', 'PostgreSQL', 'pgvector', 'WebSockets'],
      type: 'Professional',
      link: '#',
    },
    {
      title: 'Real-Time Voice AI Infrastructure',
      description: 'Designed and deployed a low-latency AI voice assistant utilizing WebSockets and Google Gemini. Built modular STT → LLM → TTS pipeline with optimized Whisper and GPT-4o for clinical reasoning.',
      tags: ['OpenAI', 'Whisper', 'GPT-4o', 'WebSockets', 'Voice AI'],
      type: 'Professional',
      link: '#',
    },
    {
      title: 'Automated Textile Defects Detection',
      description: 'Final Year Project - Developed a Computer Vision system using YOLOv8 and the TILDA dataset for defect classification. Collaborated with industry to integrate custom dataset and deploy as web application.',
      tags: ['YOLOv8', 'Computer Vision', 'Python', 'Web App'],
      type: 'Academic',
      link: '#',
    },
    {
      title: 'Kage no Koe - Local LLM Mind',
      description: 'Research project exploring local open-source LLMs (DeepSeek, Qwen, Llama) using Ollama framework with React UI. Replicates paid AI assistants as free, local-running chatbot.',
      tags: ['Ollama', 'React', 'DeepSeek', 'Llama', 'Local LLM'],
      type: 'Personal',
      github: 'https://github.com/Muhammad-Abdullah-Jami',
    },
    {
      title: 'Stock Price Forecasting System',
      description: 'Built a comprehensive forecasting system comparing LSTM, Random Forest, XGBoost, and SVR models. Random Forest achieved R² scores over 0.99 on historical stock data.',
      tags: ['LSTM', 'Random Forest', 'XGBoost', 'Time Series'],
      type: 'Academic',
      link: '#',
    },
    {
      title: 'EV Price Prediction Analysis',
      description: 'Comparative analysis system using Linear Regression, Random Forest, XGBoost, and SVM for electric vehicle price prediction. XGBoost achieved an R² score of 0.90.',
      tags: ['XGBoost', 'SVM', 'Machine Learning', 'Data Analysis'],
      type: 'Academic',
      link: '#',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <svg className="project-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <span className={`project-type ${project.type.toLowerCase()}`}>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/Muhammad-Abdullah-Jami" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View More on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
