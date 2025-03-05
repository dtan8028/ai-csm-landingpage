import React from 'react';
import { ArrowRight } from 'lucide-react';

const App = () => {
  const styles = {
    // Main container styles - Clean white theme
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#111',
      fontFamily: 'Arial, sans-serif'
    },
    nav: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '24px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1000,
      backgroundColor: 'white'
    },
    navContent: {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#111',
      letterSpacing: '-0.5px'
    },
    navButton: {
      color: '#111',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      fontSize: '16px',
      fontWeight: '500'
    },
    main: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 20px',
      display: 'grid',
      gridTemplateColumns: window.innerWidth >= 992 ? '1fr 1fr' : '1fr',
      gap: '60px',
      alignItems: 'center'
    },
    leftColumn: {
      maxWidth: '600px',
      justifySelf: window.innerWidth >= 992 ? 'start' : 'center'
    },
    contentBox: {
      marginBottom: '40px'
    },
    heading: {
      fontSize: window.innerWidth >= 768 ? '56px' : '42px',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.1',
      letterSpacing: '-1.5px',
      color: '#111'
    },
    paragraph: {
      fontSize: window.innerWidth >= 768 ? '20px' : '18px',
      lineHeight: '1.5',
      color: '#555'
    },
    formContainer: {
      display: 'flex',
      maxWidth: '520px',
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      border: '1px solid #eee'
    },
    emailInput: {
      flexGrow: 1,
      padding: '16px',
      fontSize: '16px',
      border: 'none',
      outline: 'none'
    },
    ctaButton: {
      backgroundColor: '#e9e429',
      color: '#111',
      fontWeight: '600',
      padding: '16px 24px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
    rightColumn: {
      justifySelf: window.innerWidth >= 992 ? 'end' : 'center',
      display: 'flex',
      alignItems: 'center'
    },
    productImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
    },
    productWindowContainer: {
      width: '100%',
      maxWidth: '400px'
    },
    productWindow: {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #eee',
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
    },
    windowHeader: {
      height: '2rem',
      backgroundColor: '#f8f8f8',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      gap: '0.5rem'
    },
    windowDot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      backgroundColor: '#ddd'
    },
    windowContent: {
      padding: '1rem',
      aspectRatio: '4/5'
    },
    pulseLine: {
      height: '1rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '0.25rem',
      marginBottom: '1rem'
    },
    pulseRect: {
      height: '8rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '0.25rem',
      marginBottom: '1rem'
    },
    // Trusted by section
    trustedBy: {
      maxWidth: '1280px',
      margin: '0 auto',
      marginTop: '80px',
      paddingTop: '40px',
      borderTop: '1px solid #eee',
      textAlign: 'center'
    },
    trustedTitle: {
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#888',
      marginBottom: '24px',
      textAlign: 'center'
    },
    logos: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '40px'
    },
    logoItem: {
      opacity: 0.7,
      transition: 'opacity 0.3s ease',
      '&:hover': {
        opacity: 1
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Sarah</div>
          <button style={styles.navButton}>Sign in</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.main}>
        <div style={styles.leftColumn}>
          <div style={styles.contentBox}>
            <h1 style={styles.heading}>
              The Customer Success Manager of the Future
            </h1>
            
            <p style={styles.paragraph}>
              The AI agent that delivers personalized product adoption, 
              to unlock user value, reduce churn and fuel scalable growth.
            </p>
          </div>

          <div style={styles.formContainer}>
            <input 
              type="email" 
              placeholder="What's your work email?" 
              style={styles.emailInput}
            />
            <button style={styles.ctaButton}>
              Get started for free
            </button>
          </div>
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
                  <div style={{...styles.pulseLine, width: '80%'}}></div>
                  <div style={{...styles.pulseLine, width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div style={styles.trustedBy}>
        <div style={styles.trustedTitle}>Trusted by teams at</div>
        <div style={styles.logos}>
          {/* Placeholder for logo items - would be replaced with actual logos */}
          <div style={styles.logoItem}>Company 1</div>
          <div style={styles.logoItem}>Company 2</div>
          <div style={styles.logoItem}>Company 3</div>
          <div style={styles.logoItem}>Company 4</div>
          <div style={styles.logoItem}>Company 5</div>
        </div>
      </div>
    </div>
  );
};

export default App;