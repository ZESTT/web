import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PhaseCardFull from './PhaseCardFull';
import { phases } from '../data/curriculum';

interface Props {
  phaseBgImages: { [key: string]: string };
}

const HorizontalSlider = ({ phaseBgImages }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);
  const smoothX = useSpring(dragX, { damping: 30, stiffness: 200 });
  const totalSlides = phases.length;
  const minX = -(totalSlides - 1) * 100; // -400%
  const maxX = 0;

  // تحديد المؤشر النشط بناءً على القيمة الحالية
  useEffect(() => {
    const unsubscribe = smoothX.onChange((x) => {
      const index = Math.round(Math.abs(x) / 100);
      setActiveIndex(Math.min(totalSlides - 1, Math.max(0, index)));
    });
    return () => unsubscribe();
  }, [smoothX, totalSlides]);

  // تحويل التمرير العمودي إلى أفقي
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      // نتحكم فقط إذا كان العنصر المستهدف داخل الحاوية
      if (!container.contains(e.target as Node)) return;

      const currentX = dragX.get();
      const delta = e.deltaY;
      let newX = currentX - delta * 1.2; // عكس الإشارة: التمرير لأسفل يحرك الكروت لليسار (ناقص)

      // تطبيق الحدود
      if (newX > maxX) newX = maxX;
      if (newX < minX) newX = minX;

      const atStart = currentX >= maxX - 0.5;
      const atEnd = currentX <= minX + 0.5;
      const isScrollingDown = delta > 0;
      const isScrollingUp = delta < 0;

      // الخروج من القسم إذا كان في البداية أو النهاية واستمر التمرير في نفس الاتجاه
      if ((atStart && isScrollingUp) || (atEnd && isScrollingDown)) {
        return; // يسمح بالتمرير العمودي للخروج
      }

      e.preventDefault();
      dragX.set(newX);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [dragX, minX, maxX]);

  // دعم اللمس (للأجهزة اللوحية والهواتف)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (!container.contains(e.target as Node)) return;
      touchStartY = e.touches[0].clientY;
      startX = dragX.get();
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaY = e.touches[0].clientY - touchStartY;
      let newX = startX - deltaY * 1.2;

      if (newX > maxX) newX = maxX;
      if (newX < minX) newX = minX;

      const atStart = newX >= maxX - 0.5;
      const atEnd = newX <= minX + 0.5;
      const isMovingDown = deltaY > 0;
      const isMovingUp = deltaY < 0;

      if ((atStart && isMovingUp) || (atEnd && isMovingDown)) {
        return;
      }

      e.preventDefault();
      dragX.set(newX);
      startX = newX;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
    };
  }, [dragX, minX, maxX]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <motion.div
        className="flex h-full"
        style={{ x: smoothX }}
        drag="x"
        dragConstraints={{ left: minX, right: maxX }}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {phases.map((phase, idx) => (
          <div key={phase.id} className="w-screen flex-shrink-0 h-full">
            <PhaseCardFull
              phase={phase}
              bgImage={phaseBgImages[`phase${idx + 1}`]}
              phaseNumber={idx + 1}
            />
          </div>
        ))}
      </motion.div>

      {/* نقاط التنقل */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {phases.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const targetX = -idx * 100;
              dragX.set(targetX);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-purple-500 w-6' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;