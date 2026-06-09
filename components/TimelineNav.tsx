// components/TimelineNav.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'البداية' },
  { id: 'phase1', label: 'HTML & CSS' },
  { id: 'phase2', label: 'JavaScript' },
  { id: 'phase3', label: 'React' },
  { id: 'phase4', label: 'Backend' },
  { id: 'phase5', label: 'المشروع النهائي' },
];

const TimelineNav = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white/10 backdrop-blur-md rounded-full py-3 px-2 border border-white/20">
        <div className="flex flex-col gap-4">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === id ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50' : 'bg-gray-400 hover:bg-purple-300'
              }`}
              title={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineNav;