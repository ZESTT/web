// components/PhaseSection.tsx
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phase } from '../data/curriculum';

interface Props {
  phase: Phase;
  bgImage: string;
  id: string;
  phaseNumber: number;
}

const borderColors = [
  'from-pink-500 to-rose-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-yellow-500',
  'from-purple-500 to-indigo-500',
];

// قمنا بتحديد النوع Variants هنا لضمان مطابقة التوقيع
const getVariants = (phaseNum: number): Variants => {
  switch (phaseNum) {
    case 1:
      return {
        hidden: { opacity: 0, x: -200, rotateY: -45 },
        visible: { opacity: 1, x: 0, rotateY: 0, transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 } }
      };
    case 2:
      return {
        hidden: { opacity: 0, x: 200, rotateY: 45 },
        visible: { opacity: 1, x: 0, rotateY: 0, transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 } }
      };
    case 3:
      return {
        hidden: { opacity: 0, y: -200, rotateX: 45 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 } }
      };
    case 4:
      return {
        hidden: { opacity: 0, y: 200, rotateX: -45, scale: 0.8 },
        visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 } }
      };
    default:
      return {
        hidden: { opacity: 0, scale: 0.5, rotate: -10, skewX: -20 },
        visible: { opacity: 1, scale: 1, rotate: 0, skewX: 0, transition: { type: 'spring', stiffness: 70, damping: 12, duration: 0.9 } }
      };
  }
};

const PhaseSection = ({ phase, bgImage, id, phaseNumber }: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const variants = getVariants(phaseNumber);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-transparent bg-gradient-to-br ${borderColors[phaseNumber - 1]} bg-origin-border shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
          style={{ backgroundClip: 'padding-box' }}
        >
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {phase.title}
            </h2>
            <span className="bg-black/40 px-4 py-2 rounded-full text-purple-200 font-mono border border-purple-400/50 backdrop-blur-sm">
              {phase.defaultHours} ساعة
            </span>
          </div>
          <div className="mb-4 text-purple-300 text-sm">المرحلة {phaseNumber} من 5</div>
          <ul className="space-y-3 mt-6">
            {phase.topics.map((topic, idx) => (
              <li key={idx} className="flex flex-wrap justify-between items-start gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-purple-400/70">
                <span className="text-gray-200 flex-1 text-sm sm:text-base">📌 {topic.title}</span>
                {topic.hours && <span className="text-purple-300 text-sm font-mono">{topic.hours} ساعة</span>}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-gray-300 text-sm">
            🎯 بعد هذه المرحلة: ستتمكن من بناء مشاريع عملية متكاملة باستخدام أحدث التقنيات.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhaseSection;