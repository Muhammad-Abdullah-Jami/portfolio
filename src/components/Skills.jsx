import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'ML/DL Frameworks',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'LangChain', 'LangGraph', 'AI Agents'],
    },
    {
      title: 'Core AI Concepts',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      skills: ['Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP', 'Data Science', 'Digital Image Processing'],
    },
    {
      title: 'Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
        </svg>
      ),
      skills: ['Python', 'C', 'C++', 'JavaScript', 'SQL'],
    },
    {
      title: 'Libraries & Tools',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'NLTK', 'Selenium', 'BeautifulSoup', 'Asyncio'],
    },
    {
      title: 'Databases',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Pinecone', 'PGVector'],
    },
    {
      title: 'DevOps & Deployment',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      skills: ['Docker', 'Jenkins CI/CD', 'Ollama', 'n8n Automation', 'FastAPI', 'WebSockets'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
