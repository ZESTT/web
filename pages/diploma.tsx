// pages/diploma.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { phases, totalHours } from '../data/curriculum';
import TrackSelector from '../components/TrackSelector';
import ProgressBar from '../components/ProgressBar';
import Head from 'next/head';

export default function DiplomaDetails() {
  const [selectedTrack, setSelectedTrack] = useState<'node' | 'laravel'>('node');

  // محتوى المسارين لتعديل المرحلة الرابعة
  const trackContent = {
    node: {
      title: 'Track A: Node.js Path',
      topics: [
        'Node.js & Express: RESTful API Development',
        'MVC Architecture',
        'Database Integration (MongoDB & Mongoose)',
        'JWT, Bcrypt Authentication',
        'Real-time with Socket.IO',
      ],
      hours: 100,
    },
    laravel: {
      title: 'Track B: PHP & Laravel Path',
      topics: [
        'OOP PHP Concepts',
        'Laravel Routing, Controllers, Views',
        'MySQL & Eloquent ORM',
        'Migrations & Seeding',
        'Sanctum/Fortify Authentication',
        'API Resources & Middleware',
      ],
      hours: 100,
    },
  };

  return (
    <>
      <Head>
        <title>تفاصيل المنهج - دبلومة الويب</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            📖 منهج دبلومة الويب المتكاملة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-400 mb-12"
          >
            إجمالي الساعات: <span className="text-purple-400 font-bold">{totalHours}</span> ساعة تدريب عملي
          </motion.p>

          <div className="space-y-8">
            {phases.map((phase, idx) => {
              // تعديل المرحلة الرابعة لعرض المسار المختار
              if (phase.id === 4) {
                const track = trackContent[selectedTrack];
                return (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700"
                  >
                    <div className="flex justify-between flex-wrap gap-4 items-start">
                      <h2 className="text-2xl font-bold">{phase.title}</h2>
                      <TrackSelector selected={selectedTrack} onSelect={setSelectedTrack} />
                    </div>
                    <ProgressBar progress={track.hours / totalHours} />
                    <div className="mt-4 p-4 bg-gray-900/50 rounded-xl">
                      <h3 className="text-xl font-semibold text-purple-300">{track.title}</h3>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
                        {track.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm text-gray-400">عدد الساعات: {track.hours} ساعة</p>
                    </div>
                  </motion.div>
                );
              }

              // باقي المراحل تعرض بشكل عادي
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h2 className="text-2xl font-bold">{phase.title}</h2>
                    <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                      {phase.defaultHours} ساعة
                    </span>
                  </div>
                  <ProgressBar progress={phase.defaultHours / totalHours} />
                  <ul className="mt-4 grid md:grid-cols-2 gap-2">
                    {phase.topics.map((topic, i) => (
                      <li key={i} className="text-gray-300 flex justify-between border-b border-gray-700 pb-1">
                        <span>▹ {topic.title}</span>
                        {topic.hours && <span className="text-purple-400 text-sm">{topic.hours} س</span>}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              سجل في الدبلومة الآن
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}