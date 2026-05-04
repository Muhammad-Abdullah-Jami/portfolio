import './Services.css';

const Services = () => {
  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <path d="M12 22V12M12 12L3.29 7M12 12l8.71-5"/>
        </svg>
      ),
      title: 'AI Agent Development',
      description: 'Build intelligent multi-agent systems using LangChain and LangGraph. Create autonomous AI workflows with sophisticated reasoning and decision-making capabilities.',
      features: ['Multi-Agent Systems', 'LangGraph Workflows', 'Autonomous Agents', 'State Management'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
          <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8"/>
        </svg>
      ),
      title: 'Voice AI Solutions',
      description: 'Develop real-time voice assistants with low-latency speech-to-speech pipelines. Integrate STT, LLM, and TTS for seamless conversational experiences.',
      features: ['Voice Assistants', 'STT/TTS Integration', 'Real-time Processing', 'WebSocket APIs'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
          <path d="M11 8v6M8 11h6"/>
        </svg>
      ),
      title: 'RAG Pipeline Development',
      description: 'Design high-performance Retrieval-Augmented Generation systems with vector databases. Optimize semantic search and context-aware responses.',
      features: ['Vector Databases', 'Semantic Search', 'Document Processing', 'Context Management'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
      ),
      title: 'Computer Vision',
      description: 'Implement image classification, object detection, and visual analysis systems using deep learning frameworks like YOLOv8, PyTorch, and TensorFlow.',
      features: ['Object Detection', 'Image Classification', 'YOLOv8', 'Custom Models'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      ),
      title: 'NLP & Text Processing',
      description: 'Build natural language processing solutions for text analysis, sentiment detection, and language understanding using state-of-the-art transformer models.',
      features: ['Text Analysis', 'Sentiment Detection', 'Language Models', 'Text Generation'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      ),
      title: 'AI Consulting & Strategy',
      description: 'Strategic guidance on AI implementation, architecture design, and technology selection. Help businesses leverage AI effectively for their unique needs.',
      features: ['Architecture Design', 'Tech Selection', 'Implementation Strategy', 'Best Practices'],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Services I Offer</h2>
          <p>Specialized AI development services to bring your ideas to life</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
