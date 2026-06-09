// components/TrackSelector.tsx
import { motion } from 'framer-motion';

interface Props {
  selected: 'node' | 'laravel';
  onSelect: (track: 'node' | 'laravel') => void;
}

const TrackSelector = ({ selected, onSelect }: Props) => {
  return (
    <div className="flex gap-3 bg-gray-700/40 p-1 rounded-full">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect('node')}
        className={`px-4 py-1 rounded-full transition ${
          selected === 'node' ? 'bg-purple-600 text-white' : 'text-gray-300'
        }`}
      >
        Node.js
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect('laravel')}
        className={`px-4 py-1 rounded-full transition ${
          selected === 'laravel' ? 'bg-purple-600 text-white' : 'text-gray-300'
        }`}
      >
        Laravel
      </motion.button>
    </div>
  );
};

export default TrackSelector;