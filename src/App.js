import React from 'react';
import { ArrowRight, Command, Eye } from 'lucide-react';

const App = () => {
  // Custom CircularProgressBar component
  const CircularProgressBar = ({ value, text, size = 96, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / 100) * circumference;
    
    return (
      <div style={{ width: size, height: size, position: 'relative' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#3182ce"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size/2} ${size/2})`}
          />
        </svg>
        {/* Text in the middle */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size / 4,
            fontWeight: 'bold',
            color: '#3182ce'
          }}
        >
          {text}
        </div>
      </div>
    );
  };

  const styles = {
    // Main container styles
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#1a202c',
      fontFamily: 'Arial, sans-serif'
    },
    nav: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '1.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      borderBottom: '1px solid #e2e8f0'
    },
    navContent: {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    navButtons: {
      display: 'flex',
      gap: '1.5rem'
    },
    navButton: {
      color: '#4a5568',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      fontSize: '1rem'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '5rem 1rem 0',
      display: 'flex',
      minHeight: '80vh'
    },
    leftColumn: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingRight: '2rem'
    },
    contentBox: {
      marginBottom: '2rem'
    },
    heading: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    blueText: {
      color: '#3182ce'
    },
    paragraph: {
      fontSize: '1.25rem',
      color: '#4a5568',
      lineHeight: '1.6'
    },
    ctaButton: {
      backgroundColor: '#3182ce',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      width: 'fit-content'
    },
    rightColumn: {
      width: '50%',
      display: 'flex',
      alignItems: 'center'
    },
    productWindowContainer: {
      position: 'relative',
      width: '100%'
    },
    productWindow: {
      width: '100%',
      aspectRatio: '4/3',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    windowHeader: {
      height: '2rem',
      backgroundColor: '#f7fafc',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      gap: '0.5rem'
    },
    windowDot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      backgroundColor: '#cbd5e0'
    },
    windowContent: {
      padding: '1rem'
    },
    pulseLine: {
      height: '1rem',
      backgroundColor: '#f7fafc',
      borderRadius: '0.25rem',
      marginBottom: '1rem'
    },
    pulseRect: {
      height: '8rem',
      backgroundColor: '#f7fafc',
      borderRadius: '0.25rem',
      marginBottom: '1rem'
    },
    chatWindow: {
      position: 'absolute',
      right: '-1.5rem',
      bottom: '-1.5rem',
      width: '12rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    chatHeader: {
      padding: '0.75rem',
      borderBottom: '1px solid #f7fafc'
    },
    chatLine: {
      width: '100%',
      height: '1rem',
      backgroundColor: '#f7fafc',
      borderRadius: '0.25rem'
    },
    chatBody: {
      padding: '0.75rem'
    },
    chatSpace: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    decorativeGradient: {
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
      height: '100%',
      filter: 'blur(60px)',
      opacity: '0.2',
      background: 'linear-gradient(135deg, #3182ce 0%, #9f7aea 100%)'
    },
    
    // PowerfulFeatures section styles - updated to light theme
    featuresContainer: {
      backgroundColor: '#f7fafc',
      color: '#1a202c',
      padding: '4rem 1rem'
    },
    featuresInner: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featuresTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
      gap: '1.5rem'
    },
    featureCard: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '2rem',
      position: 'relative',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    },
    featureHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2rem'
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    featureSubtitle: {
      color: '#718096',
      marginTop: '0.5rem'
    },
    featureDesc: {
      color: '#4a5568'
    },
    commandBox: {
      backgroundColor: '#f7fafc',
      borderRadius: '0.25rem',
      padding: '0.75rem',
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      marginTop: '1rem',
      marginBottom: '2rem',
      border: '1px solid #e2e8f0'
    },
    commandRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem'
    },
    commandDivider: {
      borderTop: '1px solid #e2e8f0',
      paddingTop: '0.5rem',
      marginTop: '0.5rem'
    },
    shortcutContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    shortcutKey: {
      width: '3rem',
      height: '3rem',
      backgroundColor: '#f7fafc',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      border: '1px solid #e2e8f0',
      color: '#4a5568'
    },
    shortcutPlus: {
      margin: '0 0.5rem',
      color: '#4a5568'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation - Fixed Header */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Sarah</div>
          <div style={styles.navButtons}>
            <button style={styles.navButton}>Early Access</button>
            <button style={styles.navButton}>Join our Slack</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.main}>
        <div style={styles.leftColumn}>
          <div style={styles.contentBox}>
            <h1 style={styles.heading}>
              The Customer Success Manager 
              <br />
              <span style={styles.blueText}>of the Future</span>
            </h1>
            
            <p style={styles.paragraph}>
              The AI agent that delivers personalized product adoption, 
              to unlock user value, reduce churn and fuel scalable growth.
            </p>
          </div>

          <button style={styles.ctaButton}>
            Register For Early Access
            <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
          </button>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.productWindowContainer}>
            {/* Main Product Window */}
            <div style={styles.productWindow}>
              {/* Window Header */}
              <div style={styles.windowHeader}>
                <div style={styles.windowDot}></div>
                <div style={styles.windowDot}></div>
                <div style={styles.windowDot}></div>
              </div>
              {/* Window Content - Product UI */}
              <div style={styles.windowContent}>
                <div>
                  <div style={{...styles.pulseLine, width: '75%'}}></div>
                  <div style={{...styles.pulseLine, width: '50%'}}></div>
                  <div style={styles.pulseRect}></div>
                  <div style={{...styles.pulseLine, width: '66%'}}></div>
                </div>
              </div>
            </div>
            
            {/* AI Assistant Chat Window - Overlaid */}
            <div style={styles.chatWindow}>
              <div style={styles.chatHeader}>
                <div style={styles.chatLine}></div>
              </div>
              <div style={styles.chatBody}>
                <div style={styles.chatSpace}>
                  <div style={{...styles.chatLine, width: '75%'}}></div>
                  <div style={styles.chatLine}></div>
                  <div style={{...styles.chatLine, width: '66%'}}></div>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div style={styles.decorativeGradient}></div>
          </div>
        </div>
      </div>

      {/* Powerful Features Section - Updated to light theme */}
      <div style={styles.featuresContainer}>
        <div style={styles.featuresInner}>
          <h2 style={styles.featuresTitle}>Powerful Features</h2>
          
          <div style={styles.featuresGrid}>
            {/* Feature 1: Visual Learning */}
            <div style={styles.featureCard}>
              <div style={styles.featureHeader}>
                <div>
                  <h3 style={styles.featureTitle}>Visual Learning</h3>
                  <p style={styles.featureSubtitle}>Shows, not tells</p>
                </div>
                <CircularProgressBar value={92} text="92%" />
              </div>
              <p style={styles.featureDesc}>
                Our AI demonstrates tasks in real-time, making learning intuitive and memorable
              </p>
            </div>

            {/* Feature 2: Contextual Assistance */}
            <div style={styles.featureCard}>
              <div>
                <h3 style={styles.featureTitle}>Contextual Assistance</h3>
                <div style={styles.commandBox}>
                  <div style={styles.commandRow}>
                    <Command style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#718096' }} />
                    <span style={{ color: '#4a5568' }}>Type a goal or search...</span>
                  </div>
                  <div style={styles.commandDivider}>
                    <div style={styles.commandRow}>
                      <Eye style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#3b82f6' }} />
                      <span style={{ color: '#4a5568' }}>Create new workflow</span>
                    </div>
                  </div>
                  <div style={styles.commandDivider}>
                    <div style={styles.commandRow}>
                      <Eye style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#3182ce' }} />
                      <span style={{ color: '#4a5568' }}>Show me how to...</span>
                    </div>
                  </div>
                </div>
              </div>
              <p style={styles.featureDesc}>
                Navigate seamlessly with our goal-oriented assistance
              </p>
            </div>

            {/* Feature 3: 24/7 Support */}
            <div style={styles.featureCard}>
              <div style={styles.featureHeader}>
                <div>
                  <h3 style={styles.featureTitle}>24/7 Support</h3>
                  <p style={styles.featureSubtitle}>Always available</p>
                </div>
                <div style={styles.shortcutContainer}>
                  <div style={styles.shortcutKey}>
                    ⌘
                  </div>
                  <span style={styles.shortcutPlus}>+</span>
                  <div style={styles.shortcutKey}>
                    S
                  </div>
                </div>
              </div>
              <p style={styles.featureDesc}>
                Get instant support whenever you need it, reducing resolution time from days to minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
