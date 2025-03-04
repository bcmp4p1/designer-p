import { useEffect, useState } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'The problem' },
  { id: 'smart-hints', label: 'Smart Hints' },
  { id: 'tray-system', label: 'Tray System' },
  { id: 'transaction-speed', label: 'Transaction Speed' },
  { id: 'secure-key-storage', label: 'Secure Key Storage' },
  { id: 'tone-of-voice', label: 'Tone of Voice' },
  { id: 'retrospective', label: 'Retrospective' },
];

export const Menu = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="menu">
      <h3>CONTENTS</h3>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id} className={activeSection === id ? 'active' : ''}>
            <button onClick={() => scrollToSection(id)}>{label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
