import React, { useState } from "react";

function Header() {
  // Initial rectangles configuration for the hamburger menu
  const initialRects = [
    // Static background layers
    { key: "bg1", props: { width: 82, height: 71, fill: "#00339F" } },
    { key: "bg2", props: { y: 22.2483, width: 56.1676, height: 48.7517, fill: "#F5E256" } },
    { key: "bg3", props: { y: 46.5634, width: 28.0838, height: 24.4366, fill: "#CB181F" } },
    // Horizontal bars (default state)
    { key: "bar1", props: { x: 35, y: 16, width: 37, height: 6, fill: "#F5E256", transform: "rotate(0 53.5 19)" } },
    { key: "bar2", props: { x: 18, y: 29, width: 45, height: 6, fill: "#CB181F", transform: "rotate(0 40.5 32)" } },
    { key: "bar3", props: { x: 11, y: 42, width: 37, height: 6, fill: "#00339F", transform: "rotate(0 29.5 45)" } },
  ];

  // Animated rectangles configuration for the X state
  const animatedRects = [
    // Static background (unchanged)
    { key: "bg1", props: { width: 82, height: 71, fill: "#00339F" } },
    { key: "bg2", props: { y: 22.2483, width: 56.1676, height: 48.7517, fill: "#F5E256" } },
    { key: "bg3", props: { y: 46.5634, width: 28.0838, height: 24.4366, fill: "#CB181F" } },
    // Cross pattern bars
    { key: "bar1", props: { x: 44.6133, y: 41.1047, width: 37, height: 6, fill: "#F5E256", transform: "rotate(-138.272 44.6133 41.1047)" } },
    { key: "bar2", props: { x: 57.3008, y: 52.4198, width: 45, height: 6, fill: "#CB181F", transform: "rotate(-138.272 57.3008 52.4198)" } },
    { key: "bar3", props: { x: 64.7637, y: 59.0757, width: 37, height: 6, fill: "#00339F", transform: "rotate(-138.272 64.7637 59.0757)" } },
    { key: "bar4", props: { x: 33.8408, y: 36.0942, width: 37, height: 6, fill: "#F5E256", transform: "rotate(-42.705 33.8408 36.0942)" } },
    { key: "bar5", props: { x: 21.3486, y: 47.6241, width: 45, height: 6, fill: "#CB181F", transform: "rotate(-42.705 21.3486 47.6241)" } },
    { key: "bar6", props: { x: 14, y: 54.4061, width: 37, height: 6, fill: "#00339F", transform: "rotate(-42.705 14 54.4061)" } },
  ];

  // Menu items configuration
  const menu = [
    // { label: "Accueil", path: "/home" },
    { label: "Histoire", path: "/history" },
    { label: "Galerie", path: "/gallery" },
    { label: "Events", path: "/events" },
    { label: "Billetterie", path: "/ticketing" },
    { label: "Infos pratiques", path: "/info" },
  ];

  function AnimatedLogo() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [rects, setRects] = useState(initialRects);

    React.useEffect(() => {
      if (active) {
        // Switch to X configuration AND open menu simultaneously
        setRects(animatedRects);
        setOpen(true);
      } else {
        // Close menu AND switch back to hamburger simultaneously
        setOpen(false);
        setRects(initialRects);
      }
    }, [active]);

    const handleMenuItemClick = (path: string) => {
      // Close menu when item is clicked
      setActive(false);
      console.log(`Navigating to: ${path}`);
      // Add your navigation logic here
    };

    return (
      <div style={{ position: 'relative' }}>
        {/* Hamburger/X Icon */}
        <svg
          width="55"
          height="48"
          viewBox="0 0 82 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            cursor: "pointer", 
            transition: "all 0.4s cubic-bezier(.4,2,.6,1)",
            zIndex: 1001,
            position: 'relative'
          }}
          onClick={() => setActive((a) => !a)}
        >
          {rects.map(({ key, props }) => (
            <rect
              key={key}
              {...props}
              style={{
                transition: "all 0.4s cubic-bezier(.4,2,.6,1)",
              }}
            />
          ))}
        </svg>

        {/* Triangular Menu */}
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '55%',
            height: '100vh',
            background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)',
            clipPath: open 
              ? 'polygon(0% 0%, 60% 0%, 0% 100%)' 
              : 'polygon(0% 0%, 0% 0%, 0% 0%)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: open ? 1 : 0,
            zIndex: 999,
            padding: '120px 60px 60px 60px',
            boxShadow: open ? '20px 0 40px rgba(0, 0, 0, 0.4)' : 'none',
            overflow: 'hidden'
          }}
        >
          {/* Menu Items */}
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            paddingTop: '20px'
          }}>
            {menu.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleMenuItemClick(item.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '22px',
                  fontWeight: '300',
                  lineHeight: '28px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  transform: open ? 'translateX(0)' : 'translateX(-30px)',
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${index * 0.1}s` : '0s',
                  borderBottom: '1px solid transparent',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.color = '#F5E256';
                  target.style.transform = 'translateX(10px)';
                  target.style.borderBottomColor = '#F5E256';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.color = '#FFFFFF';
                  target.style.transform = 'translateX(0)';
                  target.style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #00339F, #F5E256)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            opacity: open ? 0.7 : 0,
            transition: 'opacity 0.8s ease',
            transitionDelay: '0.5s'
          }} />
        </div>

        {/* Background overlay when menu is open */}
        {open && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              zIndex: 998,
              opacity: open ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
            onClick={() => setActive(false)}
          />
        )}
      </div>
    );
  }

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '1rem',
      padding: '2rem 5rem',
      position: 'relative',
      zIndex: 1001
    }}>
      <AnimatedLogo />
      
      <h2 style={{
        fontSize: '2.5rem',
        margin: 0,
        lineHeight: 1,
        color: '#FFFFFF',
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        Musée Matisse
      </h2>
    </header>
  );
}

export default Header;