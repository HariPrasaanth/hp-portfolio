import React, { useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface MobileMenuProps {
  sections: Section[];
  activeSection?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mobile-menu sm:hidden sticky top-0 bg-white z-50">
      <button
        className="mobile-menu__toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      {open && (
        <ul className="mobile-menu__list">
          {sections.map((section) => (
            <li key={section.id} className="mobile-menu__item">
              <button
                className={`mobile-menu__link${
                  activeSection === section.id
                    ? " mobile-menu__link--active"
                    : ""
                }`}
                onClick={() => handleNavigate(section.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                }}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .mobile-menu {
          position: relative;
        }
        .mobile-menu__toggle {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
        }
        .mobile-menu__list {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .mobile-menu__item {
          border-bottom: 1px solid #eee;
        }
        .mobile-menu__link {
          display: block;
          padding: 1rem;
          text-decoration: none;
          color: #333;
          cursor: pointer;
        }
        .mobile-menu__link--active {
          background: #00bfa6;
          color: #fff;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0, 191, 166, 0.15);
        }
        .mobile-menu__link:hover {
          background: #f5f5f5;
        }
      `}</style>
    </nav>
  );
};

export default MobileMenu;
