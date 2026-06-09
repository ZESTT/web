// components/FloatingTools.tsx (نسخة مع توزيع مثالي)
import { useScroll, useTransform, motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiLaravel, SiTypescript } from 'react-icons/si';

const tools = [
  { Icon: FaReact, color: '#61DAFB', startX: 5, startY: 15, endX: 85, endY: 70, startRotate: 0, endRotate: 360, startScale: 1, endScale: 1.3 },
  { Icon: SiTailwindcss, color: '#38BDF8', startX: 75, startY: 65, endX: 20, endY: 25, startRotate: 0, endRotate: -360, startScale: 1, endScale: 1.2 },
  { Icon: FaNodeJs, color: '#68A063', startX: 45, startY: 40, endX: 65, endY: 55, startRotate: 0, endRotate: 180, startScale: 1, endScale: 1.4 },
  { Icon: FaGitAlt, color: '#F14E32', startX: 85, startY: 25, endX: 30, endY: 80, startRotate: 0, endRotate: 540, startScale: 1, endScale: 1.2 },
  { Icon: FaGithub, color: '#FFFFFF', startX: 30, startY: 75, endX: 70, endY: 20, startRotate: 0, endRotate: -180, startScale: 1, endScale: 1.5 },
  { Icon: FaJsSquare, color: '#F7DF1E', startX: 90, startY: 50, endX: 10, endY: 45, startRotate: 0, endRotate: 720, startScale: 1, endScale: 1.1 },
  { Icon: FaHtml5, color: '#E34F26', startX: 15, startY: 55, endX: 80, endY: 35, startRotate: 0, endRotate: 360, startScale: 1, endScale: 1.3 },
  { Icon: FaCss3Alt, color: '#1572B6', startX: 55, startY: 85, endX: 45, endY: 10, startRotate: 0, endRotate: -540, startScale: 1, endScale: 1.2 },
  { Icon: SiMongodb, color: '#47A248', startX: 60, startY: 10, endX: 40, endY: 90, startRotate: 0, endRotate: 270, startScale: 1, endScale: 1.4 },
  { Icon: SiExpress, color: '#FFFFFF', startX: 35, startY: 30, endX: 65, endY: 60, startRotate: 0, endRotate: -360, startScale: 1, endScale: 1.2 },
  { Icon: SiLaravel, color: '#FF2D20', startX: 20, startY: 85, endX: 80, endY: 15, startRotate: 0, endRotate: 450, startScale: 1, endScale: 1.5 },
  { Icon: SiTypescript, color: '#3178C6', startX: 70, startY: 45, endX: 30, endY: 50, startRotate: 0, endRotate: 180, startScale: 1, endScale: 1.3 },
];

export default function FloatingTools() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {tools.map((tool, i) => {
        const x = useTransform(scrollYProgress, [0, 1], [tool.startX, tool.endX]);
        const y = useTransform(scrollYProgress, [0, 1], [tool.startY, tool.endY]);
        const rotate = useTransform(scrollYProgress, [0, 1], [tool.startRotate, tool.endRotate]);
        const scale = useTransform(scrollYProgress, [0, 1], [tool.startScale, tool.endScale]);
        return (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-5xl lg:text-6xl"
            style={{
              left: useTransform(x, (v) => `${v}%`),
              top: useTransform(y, (v) => `${v}%`),
              rotate: rotate,
              scale: scale,
              color: tool.color,
              filter: `drop-shadow(0 0 8px ${tool.color})`,
              transition: 'all 0.1s linear'
            }}
          >
            <tool.Icon />
          </motion.div>
        );
      })}
    </div>
  );
}