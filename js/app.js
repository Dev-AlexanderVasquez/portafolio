const { useEffect, useState } = React;

function FloatingCard({ icon, title, top, left }) {
  return (
    <div className="floating-card" style={{ top, left }}>
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

  // LÓGICA DEL MENÚ DENTRO DE REACT
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    if (!menuToggle || !navLinks) return;

    const handleMenuClick = () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.className = navLinks.classList.contains("active") 
          ? "ri-close-line" 
          : "ri-menu-3-line";
      }
    };

    const handleLinkClick = () => {
      navLinks.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      if (icon) icon.className = "ri-menu-3-line";
    };

    menuToggle.addEventListener("click", handleMenuClick);
    links.forEach(link => link.addEventListener("click", handleLinkClick));

    // Limpieza de eventos al desmontar
    return () => {
      menuToggle.removeEventListener("click", handleMenuClick);
      links.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  return (
    <div className="animation-wrapper">
      <div className="glow-circle" style={{ transform: `rotate(${rotation}deg)` }}></div>
      <img
              src="img/Hero/AlexanderVasquezv2.png"
              alt="Alexander Vasquez" class="Developer"
            />
      <FloatingCard icon="ri-code-s-slash-fill" title="Frontend Developer" top="10%" left="-20%" />
      <FloatingCard icon="ri-reactjs-line" title="React UI" top="70%" left="70%" />
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("react-animation")
).render(<HeroAnimation />);