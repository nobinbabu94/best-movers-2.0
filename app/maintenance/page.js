export const metadata = {
  title: 'Site Temporarily Unavailable | Best Movers',
  description: 'This website is temporarily unavailable. Please check back later.',
};

export default function MaintenancePage() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
          padding: '20px',
        }}>
          {/* Animated background orbs */}
          <div style={{
            position: 'fixed', top: '-150px', left: '-150px',
            width: '400px', height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            animation: 'pulse 6s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'fixed', bottom: '-100px', right: '-100px',
            width: '350px', height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite reverse',
            pointerEvents: 'none',
          }} />

          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.15); opacity: 1; }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
          `}</style>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '60px 50px',
            maxWidth: '520px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 0.8s ease forwards',
          }}>
            {/* Icon */}
            <div style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 28px auto',
              fontSize: '36px',
              boxShadow: '0 0 30px rgba(99,102,241,0.5)',
            }}>
              🔧
            </div>

            {/* Status indicator */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.3)',
              borderRadius: '999px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#fbbf24',
                display: 'inline-block',
                animation: 'blink 1.5s ease-in-out infinite',
              }} />
              <span style={{ color: '#fbbf24', fontSize: '13px', fontWeight: '500', letterSpacing: '0.05em' }}>
                TEMPORARILY UNAVAILABLE
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: '700',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
            }}>
              Site Under Maintenance
            </h1>

            {/* Description */}
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '16px',
              lineHeight: '1.7',
              margin: '0 0 36px 0',
            }}>
              We're currently performing some updates to bring you a better experience.
              We'll be back online shortly.
            </p>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
              margin: '0 0 28px 0',
            }} />

            {/* Contact info */}
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '14px',
              margin: '0',
            }}>
              Need help? Contact us at{' '}
              <a
                href="mailto:info@bestmovers.com"
                style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}
              >
                info@bestmovers.com
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
