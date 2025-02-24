import React from 'react';
import { ArrowRight } from 'lucide-react';

const App = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#1a202c',
      fontFamily: 'Arial, sans-serif'
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1.5rem 1rem',
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
      padding: '0 1rem',
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
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Sarah</div>
        <div style={styles.navButtons}>
          <button style={styles.navButton}>Early Access</button>
          <button style={styles.navButton}>Join our Slack</button>
        </div>
      </nav>

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
    </div>
  );
};

export default App;
