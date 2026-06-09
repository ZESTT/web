import { motion } from "framer-motion";

const ProgressBar = ({ progress }: { progress: number }) => {
  const widthPercent = Math.min(progress * 100, 100);
  return (
    <div className="w-full h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${widthPercent}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </div>
  );
};

export default ProgressBar;