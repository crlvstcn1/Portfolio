import React, { useState, useEffect, useRef } from 'react';

// Enhanced Scroll-Reveal Component
function AnimatedSection({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.12 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.98)',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  // Live Terminal Message Switcher
  const terminalLogs = [
    "GoHighLevel CRM Support: Operational",
    "Tawk.to Live Chat Queue: 0 Pending",
    "Subscription & Billing Support: Active",
    "Customer Support Desk: Online",
  ];
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Live Clock Component for Time Zone Availability
  const [timePH, setTimePH] = useState('');
  const [timeUS, setTimeUS] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimePH(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit' }));
      setTimeUS(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }));
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What tools and platforms do you specialize in?",
      a: "I specialize in supporting customers using GoHighLevel (GHL) CRM, handling Tawk.to live chat tickets, managing subscriptions and billing concerns, and communicating via Slack."
    },
    {
      q: "Are you comfortable with non-voice support and live chat multi-tasking?",
      a: "Yes! With over 5 years of non-voice experience at enterprise customer service organizations and US-based digital communities, I excel at handling high-volume concurrent live chat queues efficiently while preserving data accuracy."
    },
    {
      q: "Can you work US Eastern (ET) or Pacific (PT) shift hours?",
      a: "Absolutely. I am fully equipped for remote work from Caloocan, Philippines with 100% flexibility to match US business hours or global overnight schedules."
    },
    {
      q: "How fast can you onboard into a new client workflow?",
      a: "Immediately. Because of my strong background in technical troubleshooting, subscription management, and customer support, I ramp up on new tools, SOPs, and internal workflows with minimal supervision."
    }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('crlvstcn@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#04060b',
        color: '#f1f5f9',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '40px 32px 140px 32px',
        position: 'relative',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* Force root background globally to override browser defaults */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body, #root {
          background-color: #04060b !important;
          color: #f1f5f9;
          margin: 0;
          padding: 0;
          width: 100%;
        }
      `}</style>

      {/* Subtle Live-Chat / Ticketing Watermark Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(0, 220, 130, 0.04) 0%, transparent 40%),
          radial-gradient(circle at 85% 75%, rgba(56, 189, 248, 0.04) 0%, transparent 40%),
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      {/* Full width responsive wrapper */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
        
        {/* Top Navbar Header */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#00dc82',
                  color: '#04060b',
                  fontWeight: '800',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0, 220, 130, 0.35)',
                }}
              >
                CV
              </div>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#ffffff' }}>
                  Carlo Visitacion
                </h2>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '2px 0 0 0', fontFamily: 'monospace', fontWeight: '600' }}>
                  Operations • Client Advocacy • Technical Support
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              {/* Glowing Support Status Live Badge Animation */}
              <span
                style={{
                  backgroundColor: 'rgba(0, 220, 130, 0.08)',
                  color: '#00dc82',
                  border: '1px solid rgba(0, 220, 130, 0.3)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 0 12px rgba(0, 220, 130, 0.15)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#00dc82',
                    display: 'inline-block',
                    boxShadow: '0 0 10px #00dc82',
                  }}
                ></span>
                Online • Ready for Live Chat & Tickets
              </span>
            </div>
          </nav>
        </AnimatedSection>

        {/* Hero Section with Split-Screen Layout & Professional Headshot */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px', flexWrap: 'wrap' }}>
            
            {/* Left Column: Title & Bio */}
            <div style={{ flex: '1 1 560px' }}>
              {/* Animated Live Status Terminal Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#0b0f17',
                  border: '1px solid rgba(0, 220, 130, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#94a3b8',
                  fontFamily: 'monospace',
                  marginBottom: '20px',
                  boxShadow: '0 0 20px rgba(0, 220, 130, 0.08)',
                }}
              >
                <span style={{ color: '#00dc82', fontWeight: 'bold' }}>&gt;_ SYSTEM STATUS:</span>
                <span style={{ color: '#38bdf8', transition: 'all 0.3s ease' }}>{terminalLogs[logIndex]}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(32px, 4.2vw, 48px)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.03em',
                }}
              >
                <span style={{ color: '#ffffff' }}>Customer Support & Technical Operations Specialist</span>
                <br />
                <span style={{ color: '#00dc82' }}>
                  Platform Reliability & Troubleshooting Expert
                </span>
              </h1>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#94a3b8',
                  margin: '0 0 20px 0',
                }}
              >
                Results-driven professional specializing in subscription & billing support, omni-channel customer resolution, platform troubleshooting, ticket triage, and technical client assistance.
              </p>

              {/* Interactive Tech Tool Badges / Brand Logo Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <span style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', color: '#38bdf8', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', fontFamily: 'monospace' }}>🟢 GoHighLevel (GHL)</span>
                <span style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', color: '#00dc82', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', fontFamily: 'monospace' }}>💬 Tawk.to</span>
                <span style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', color: '#fbbf24', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', fontFamily: 'monospace' }}>📊 Microsoft Excel</span>
                <span style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', color: '#c084fc', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', fontFamily: 'monospace' }}>💬 Slack</span>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => scrollToSection('experience')}
                  style={{
                    backgroundColor: '#00dc82',
                    color: '#04060b',
                    border: 'none',
                    padding: '14px 26px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 25px rgba(0, 220, 130, 0.3)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  View Work History →
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    backgroundColor: '#0b0f17',
                    color: '#f8fafc',
                    border: '1px solid #374151',
                    padding: '14px 26px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  💬 Get In Touch
                </button>
              </div>
            </div>

            {/* Right Column: Professional Friendly Headshot in Glowing Border Card */}
            <div style={{ display: 'flex', justifyContent: 'center', flex: '1 1 280px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '260px',
                  height: '300px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #0b0f17 0%, #161e2e 100%)',
                  border: '2px solid rgba(0, 220, 130, 0.4)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 220, 130, 0.18)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                {/* Profile Image (Ensure 'profile.jpg' is in your public folder) */}
                <img
                  src="/profile.jpg"
                  alt="Carlo Visitacion"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </section>

          {/* 4 Stat Cards + Live Time Widget */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginTop: '50px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 8px 0', textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: '700' }}>Total Experience</p>
              <p style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>5+ Years</p>
            </div>
            <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 8px 0', textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: '700' }}>Specialties</p>
              <p style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Client Advocacy & Tech Ops</p>
            </div>
            <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 8px 0', textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: '700' }}>Core Tech Stack</p>
              <p style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0 }}>GoHighLevel • Tawk.to • Excel</p>
            </div>
            
            {/* Live Time Clock Widget */}
            <div style={{ backgroundColor: '#0b0f17', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '24px', borderRadius: '12px' }}>
              <p style={{ fontSize: '12px', color: '#38bdf8', margin: '0 0 8px 0', textTransform: 'uppercase', fontFamily: 'monospace', fontWeight: '700' }}>🌐 Live Shift Clock</p>
              <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: '700', margin: '0 0 2px 0' }}>PH: {timePH}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>US ET: {timeUS}</div>
            </div>
          </div>
        </AnimatedSection>

        {/* The Tools You'll Master Section */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <section style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.02em', fontFamily: 'serif' }}>
              The Tools You'll <span style={{ color: '#fbbf24', borderBottom: '2px solid #fbbf24', paddingBottom: '2px' }}>Master</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', margin: '0 0 44px 0' }}>
              We'll guide you step-by-step using:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', textAlign: 'left' }}>
              
              {/* Tool Card 1: GoHighLevel */}
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #2b1f11 0%, #17120a 100%)', border: '1px solid rgba(251, 191, 36, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
                  🟢
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fbbf24', margin: '0 0 12px 0', fontFamily: 'serif' }}>GoHighLevel (GHL)</h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: '1.7' }}>
                  The CRM & automation backbone. Used for answering technical inquiries, subscription management, cancellations, and refund processing.
                </p>
              </div>

              {/* Tool Card 2: Tawk.to */}
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #2b1f11 0%, #17120a 100%)', border: '1px solid rgba(251, 191, 36, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
                  💬
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fbbf24', margin: '0 0 12px 0', fontFamily: 'serif' }}>Tawk.to Live Chat</h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: '1.7' }}>
                  Real-time ticket queue management and instant customer support. Enables multi-chat handling and fast response resolution.
                </p>
              </div>

              {/* Tool Card 3: Microsoft Excel */}
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #2b1f11 0%, #17120a 100%)', border: '1px solid rgba(251, 191, 36, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
                  📊
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fbbf24', margin: '0 0 12px 0', fontFamily: 'serif' }}>Microsoft Excel</h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: '1.7' }}>
                  Data entry, database validation, and supply chain inventory tracking matrices built for precision and accuracy.
                </p>
              </div>

              {/* Tool Card 4: Slack */}
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '20px', padding: '36px 32px', boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #2b1f11 0%, #17120a 100%)', border: '1px solid rgba(251, 191, 36, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' }}>
                  💬
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fbbf24', margin: '0 0 12px 0', fontFamily: 'serif' }}>Slack Collaboration</h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: '1.7' }}>
                  Internal team communication channel for escalating urgent technical issues and coordinating with remote stakeholders.
                </p>
              </div>

            </div>
          </section>
        </AnimatedSection>

        {/* Work Experience Section */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <section id="experience" style={{ scrollMarginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ fontSize: '20px', color: '#00dc82' }}>💼</span>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Work Experience</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '18px', margin: 0, color: '#ffffff', fontWeight: '700' }}>Digital Community & Client Experience Specialist</h3>
                  <span style={{ color: '#00dc82', fontSize: '13px', fontFamily: 'monospace', fontWeight: '600' }}>03/2026 – 10/2026</span>
                </div>
                <p style={{ color: '#38bdf8', fontSize: '14px', margin: '0 0 16px 0', fontWeight: '600' }}>Circle of Greatness (US-based)</p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.75', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Delivered premium non-voice omni-channel customer support using Tawk.to live chat and dedicated email workflows.</li>
                  <li>Answered technical concerns, subscriptions, cancellations, and refunds using GoHighLevel (GHL).</li>
                  <li>Managed digital access, subscription inquiries, and product tracking within e-commerce marketplaces.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '18px', margin: 0, color: '#ffffff', fontWeight: '700' }}>Client Advocacy Representative</h3>
                  <span style={{ color: '#00dc82', fontSize: '13px', fontFamily: 'monospace', fontWeight: '600' }}>06/2023 – 10/2025</span>
                </div>
                <p style={{ color: '#38bdf8', fontSize: '14px', margin: '0 0 16px 0', fontWeight: '600' }}>Conduent Philippines</p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.75', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Supported enterprise clients via real-time live chat regarding intricate technical systems and complex billing concerns.</li>
                  <li>Managed high-volume parallel chat conversations concurrently while preserving data accuracy and consumer satisfaction.</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '18px', margin: 0, color: '#ffffff', fontWeight: '700' }}>Administrative Operations Specialist</h3>
                  <span style={{ color: '#00dc82', fontSize: '13px', fontFamily: 'monospace', fontWeight: '600' }}>07/2018 – 03/2019</span>
                </div>
                <p style={{ color: '#38bdf8', fontSize: '14px', margin: '0 0 16px 0', fontWeight: '600' }}>High Tower Storage & Trading Centre, Inc.</p>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', lineHeight: '1.75', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Encoded, validated, and managed supply chain databases and inventory assets matrices using advanced Microsoft Excel functions.</li>
                  <li>Collaborated with external product suppliers and warehouse managers to guarantee verification of asset inventories.</li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Client Success Highlights & Impact Metrics */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ fontSize: '20px', color: '#00dc82' }}>🚀</span>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Operational Impact & Client Commitments</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '14px', textAlign: 'left' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#00dc82', marginBottom: '6px' }}>99%+</div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px 0' }}>Client Satisfaction Rate</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>Consistent top-tier CSAT across non-voice live chat, technical ticket escalations, and subscriber billing support.</p>
              </div>

              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '14px', textAlign: 'left' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#38bdf8', marginBottom: '6px' }}>Expert</div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px 0' }}>Subscription & Billing Support</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>Efficient management of subscriber renewals, account status changes, refund processing, and technical billing queries.</p>
              </div>

              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '14px', textAlign: 'left' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#fbbf24', marginBottom: '6px' }}>Parallel</div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px 0' }}>Multi-Chat Efficiency</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>Proven capability to manage concurrent live chats simultaneously on Tawk.to without sacrificing speed or accuracy.</p>
              </div>

              <div style={{ backgroundColor: '#0b0f17', border: '1px solid #1f2937', padding: '24px', borderRadius: '14px', textAlign: 'left' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#34d399', marginBottom: '6px' }}>100% Flex</div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 8px 0' }}>US Shift Alignment</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>Full availability for US Eastern, Pacific, or global team hours with minimal onboarding ramp-up time.</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Interactive FAQ Accordion */}
        <AnimatedSection style={{ marginBottom: '110px' }}>
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ fontSize: '20px', color: '#00dc82' }}>❓</span>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Frequently Asked Questions</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#0b0f17',
                      border: '1px solid #1f2937',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '16px',
                        fontWeight: '600',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ color: '#00dc82', fontSize: '18px', fontWeight: 'bold' }}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 24px 20px 24px',
                          color: '#94a3b8',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          paddingTop: '16px',
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </AnimatedSection>

        {/* GET IN TOUCH SECTION */}
        <AnimatedSection style={{ marginTop: '40px' }}>
          <div
            id="contact"
            style={{
              backgroundColor: '#0b0f17',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '48px 28px',
              textAlign: 'center',
              boxShadow: '0 12px 40px rgba(0,0,0,0.9)',
              scrollMarginTop: '30px',
            }}
          >
            <h2 style={{ fontSize: '30px', color: '#f8fafc', fontWeight: '800', marginBottom: '14px' }}>
              Get In Touch
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.6' }}>
              Available for full-time remote contracts in Client Support, Technical Operations, and CRM Support.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '32px' }}>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('crlvstcn@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#161e2e',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34d399',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                <span>crlvstcn@gmail.com</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText('+639283533576');
                  alert('Phone number copied to clipboard!');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#161e2e',
                  border: '1px solid rgba(20, 184, 166, 0.4)',
                  color: '#2dd4bf',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                <span>+63 928 353 3576</span>
              </button>

              <a
                href="/resume.pdf"
                download="Carlo_Visitacion_Resume.pdf"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#00dc82',
                  color: '#04060b',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0, 220, 130, 0.3)',
                }}
              >
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links with Logos */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/crlvstcn" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161e2e', border: '1px solid #374151', color: '#38bdf8', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/crlvstcn" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161e2e', border: '1px solid #374151', color: '#60a5fa', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                Facebook
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/crlvstcn_" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161e2e', border: '1px solid #374151', color: '#f472b6', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>

              {/* Telegram */}
              <a href="https://t.me/xxrimuruu" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161e2e', border: '1px solid #374151', color: '#38bdf8', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.195 1.006.132.832.935z"/></svg>
                Telegram
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@crlvstcn" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#161e2e', border: '1px solid #374151', color: '#a7f3d0', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.242V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.853 4.853 0 0 1-1.003-.104z"/></svg>
                TikTok
              </a>
            </div>

            <div style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace' }}>
              Caloocan, Philippines • Flexible US Eastern & Global Working Hours
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* Floating Action Pill Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0b0f17',
          border: '1px solid #374151',
          borderRadius: '30px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
          zIndex: 1000,
        }}
      >
        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>Hire Carlo:</span>
        <button
          onClick={copyEmail}
          style={{
            backgroundColor: '#00dc82',
            color: '#04060b',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '12px',
          }}
        >
          {copied ? '✓ Copied' : 'Copy Email'}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          style={{
            backgroundColor: 'transparent',
            color: '#38bdf8',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '12px',
          }}
        >
          Contact →
        </button>
      </div>
    </div>
  );
}