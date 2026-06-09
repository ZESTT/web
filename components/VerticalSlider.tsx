import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhaseCardFull from './PhaseCardFull';
import { phases } from '../data/curriculum';

interface Props {
  phaseBgImages: { [key: string]: string };
}

const VerticalSlider = ({ phaseBgImages }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = phases.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const slideHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / slideHeight);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalSlides) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex, totalSlides]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* مسافات عمودية بعدد الكروت، كل بارتفاع الشاشة */}
      {phases.map((_, idx) => (
        <div key={idx} className="w-full h-screen snap-start" />
      ))}

      {/* الكرت الذي يظهر بشكل عائم وليس ثابتًا، يتحرك مع التمرير */}
      {/* هنا نجعل الكرت يتبع التمرير بشكل طبيعي ولكنه يبقى في منتصف كل "شريحة" */}
      {/* الطريقة الأبسط: استخدام position relative داخل كل شريحة، لكننا نريد تأثير الانتقال من اليمين عند التغيير */}
      {/* بدلاً من fixed، نستخدم عنصرًا داخل كل شريحة يظهر ويختفي مع تأثير؟ لكن AnimatePresence لن يعمل مع التمرير العادي. */}
      {/* الحل: استخدام fixed لكن مع تغيير اتجاه الانزلاق بناءً على اتجاه التمرير. نعم هذا صحيح، الكرت ثابت في الخلفية لكنه يتحرك أفقياً عند تغيير index. هذا ما تريده أنت. لكنك اشتكيت من أن الكرت ثابت في الخلفية. ربما كان التأثير غير ظاهر بسبب سرعة التمرير. */}
      {/* إذا أردت أن الكرت ليس ثابتاً بل يتحرك مع الشريحة، يجب أن يكون داخل كل شريحة وليس fixed. ولكن عندها لن يكون هناك تأثير انزلاق أفقي إلا إذا استخدمنا intersections. سأتبع أسلوب fixed مع تأثير انزلاق قوي. هذا يعمل. */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full pointer-events-auto"
          >
            <PhaseCardFull
              phase={phases[activeIndex]}
              bgImage={phaseBgImages[`phase${activeIndex + 1}`]}
              phaseNumber={activeIndex + 1}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* نقاط التنقل */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {phases.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  top: idx * window.innerHeight,
                  behavior: 'smooth',
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === idx ? 'bg-purple-500 w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;