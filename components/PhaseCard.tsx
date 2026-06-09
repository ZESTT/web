import { motion } from "framer-motion";
import { Phase } from "../data/curriculum";

interface Props {
  phase: Phase;
  index: number;
}

const PhaseCard = ({ phase, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.2 }
      }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {phase.title}
          </h3>
          <span className="text-sm font-mono bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
            {phase.defaultHours} ساعة
          </span>
        </div>
        
        <ul className="space-y-2 mt-4">
          {phase.topics.slice(0, 4).map((topic, i) => (
            <li key={i} className="text-gray-300 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              {topic.title}
              {topic.hours && <span className="text-purple-400 text-xs ml-auto">{topic.hours} س</span>}
            </li>
          ))}
          {phase.topics.length > 4 && (
            <li className="text-purple-400 text-xs mt-2">+ {phase.topics.length - 4} مواضيع أخرى</li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default PhaseCard;