import { motion } from 'framer-motion';
import { Phase } from '../data/curriculum';

interface Props {
  phase: Phase;
  bgImage: string;
  phaseNumber: number;
}

const borderColors = [
  'from-pink-500 to-rose-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-yellow-500',
  'from-purple-500 to-indigo-500',
];

const PhaseCardFull = ({ phase, bgImage, phaseNumber }: Props) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-transparent bg-gradient-to-br ${borderColors[phaseNumber-1]} shadow-2xl`}
        >
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              {phase.title}
            </h2>
            <span className="bg-black/40 px-4 py-2 rounded-full text-purple-200 font-mono">
              {phase.defaultHours} ساعة
            </span>
          </div>
          <div className="mb-4 text-purple-300 text-sm">المرحلة {phaseNumber} من 5</div>
          <ul className="space-y-3 mt-6 max-h-[50vh] overflow-y-auto custom-scroll pr-2">
            {phase.topics.map((topic, idx) => (
              <li key={idx} className="flex flex-wrap justify-between items-start gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-purple-400/70">
                <span className="text-gray-200 flex-1 text-sm sm:text-base">📌 {topic.title}</span>
                {topic.hours && <span className="text-purple-300 text-sm font-mono">{topic.hours} ساعة</span>}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-white/20 text-center text-gray-300 text-sm">
            🎯 بعد هذه المرحلة: مشاريع عملية متكاملة
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhaseCardFull;