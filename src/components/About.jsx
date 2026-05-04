import './About.css';

const About = () => {
  const highlights = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: 'BS AI', label: 'FAST NUCES' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>AI Developer & Machine Learning Engineer</h3>
            <p>
              I'm Muhammad Abdullah, an AI Developer based in Islamabad, Pakistan. I recently graduated
              with a BS in Artificial Intelligence from FAST NUCES, and I'm passionate about building
              intelligent systems that solve real-world problems.
            </p>
            <p>
              Currently working at <strong>Zigron | DentaSmart</strong>, I architect multi-agent
              conversational systems, develop high-performance RAG pipelines, and engineer real-time
              voice AI infrastructure. I specialize in LangChain, LangGraph, and cutting-edge ML frameworks
              to create scalable AI solutions.
            </p>
            <p>
              My expertise spans from deep learning and computer vision to natural language processing
              and voice AI. I enjoy tackling complex challenges and turning innovative ideas into
              production-ready applications.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-number">{item.number}</span>
                  <span className="highlight-label">{item.label}</span>
                </div>
              ))}
            </div>

            <a href="/Muhammad_Abdullah_Resume.pdf" className="btn btn-primary" download>
              Download Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>

          <div className="about-image">
            <div className="about-card">
              <div className="card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="card-content">
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Muhammad Abdullah"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"AI Developer"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="property">location</span>: <span className="string">"Islamabad, PK"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="property">expertise</span>: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"LangChain"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"LangGraph"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Computer Vision"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Voice AI"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  &nbsp;&nbsp;<span className="property">available</span>: <span className="boolean">true</span>
                  <br />
                  {'}'};
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
