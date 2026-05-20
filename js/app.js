const { useEffect, useState } = React;

function FloatingCard({ icon, title, top, left }) {

  return (

    <div
      className="floating-card"
      style={{
        top,
        left
      }}
    >
      <i className={icon}></i>
      <span>{title}</span>
    </div>

  );
}

function HeroAnimation() {

  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setRotation(prev => prev + 1);

    }, 40);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="animation-wrapper">

      <div
        className="glow-circle"
        style={{
          transform: `rotate(${rotation}deg)`
        }}
      ></div>

      <img
        className="profile-image"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
      />

      <FloatingCard
        icon="ri-code-s-slash-fill"
        title="Frontend Developer"
        top="10%"
        left="-10%"
      />

      <FloatingCard
        icon="ri-reactjs-line"
        title="React UI"
        top="70%"
        left="70%"
      />

    </div>

  );
}

ReactDOM.createRoot(
  document.getElementById("react-animation")
).render(<HeroAnimation />);