import config from '../config';
import './About.css';

const About = () => {
  const highlights = [
    { number: config.stats.yearsExperience, label: 'Years Experience' },
    { number: config.stats.projectsDelivered, label: 'Projects Delivered' },
    { number: config.stats.happyClients, label: 'Happy Clients' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Independent AI engineer & ML consultant</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>{config.company.tagline}</h3>
            <p>
              I'm {config.company.name}, an AI engineer based in {config.contact.location}. I build
              intelligent systems that solve real-world business problems and drive measurable results.
            </p>
            <p>
              I architect multi-agent conversational systems, develop high-performance RAG pipelines,
              and engineer real-time voice AI infrastructure. My work with LangChain, LangGraph,
              and modern ML frameworks helps teams ship scalable AI features quickly.
            </p>
            <p>
              From deep learning and computer vision to natural language processing and voice AI,
              I take on complex challenges and turn ideas into production-ready applications.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-number">{item.number}</span>
                  <span className="highlight-label">{item.label}</span>
                </div>
              ))}
            </div>

            <a href={config.resumePath} className="btn btn-primary" download>
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
                  <span className="keyword">const</span> <span className="variable">muhammadAbdullah</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"{config.company.name}"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"AI Engineer & ML Consultant"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="property">location</span>: <span className="string">"{config.contact.location}"</span>,
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
                  &nbsp;&nbsp;<span className="property">available_for_hire</span>: <span className="boolean">true</span>
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
