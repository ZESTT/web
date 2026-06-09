import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import FloatingTools from '../components/FloatingTools';
import Head from 'next/head';

const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false });

const phaseBgImages = {
  hero: '/images/grads/grad1.JPG',
};

const graduates = [
  '/images/grads/grad1.JPG',
  '/images/grads/grad2.JPG',
  '/images/grads/grade3.JPG',
  '/images/grads/grad4.JPG',
  '/images/grads/grad5.JPG',
  '/images/grads/grad6.JPG',
];

const testimonials = [
  '/images/grads/IMG_2679.jpg',
  '/images/grads/IMG_2680.jpg',
  '/images/grads/IMG_2681.jpg',
  '/images/grads/IMG_2682.jpg',
  '/images/grads/IMG_2683.jpg',
  '/images/grads/IMG_2684.jpg',
  '/images/grads/IMG_2685.jpg',
  '/images/grads/IMG_2686.jpg',
  '/images/grads/IMG_2687.jpg',
  '/images/grads/IMG_2688.jpg',
  '/images/grads/IMG_2689.jpg',
  '/images/grads/IMG_2690.jpg',
  '/images/grads/IMG_2691.jpg',
  '/images/grads/IMG_2692.jpg',
  '/images/grads/IMG_2693.jpg',
  '/images/grads/IMG_2694.jpg',
  '/images/grads/IMG_2695.jpg',
  '/images/grads/IMG_2696.jpg',
  '/images/grads/IMG_2697.jpg',
  '/images/grads/IMG_2698.jpg',
  '/images/grads/IMG_2699.jpg',
  '/images/grads/IMG_2700.jpg',
  '/images/grads/IMG_2701.jpg',
  '/images/grads/IMG_2702.jpg',
];

const promotionalVideos = [
  { src: '/videos/promo1.mp4', title: 'Introduction to Web Development' },
  { src: '/videos/promo2.mp4', title: 'Frontend Mastery' },
  { src: '/videos/promo3.mp4', title: 'Backend & Database' },
];

const projects = [
  { name: 'Portfolio', url: 'https://jqueryy.netlify.app/' },
  { name: 'Product Management System', url: 'https://harmonious-torte-beb11b.netlify.app/' },
];

interface TopicItem {
  id: string;
  phaseTitle: string;
  topicTitle: string;
}

const allTopics: TopicItem[] = [
  { id: 'p1t1', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'How the Web Works (Client-Server, HTTP, URLs)' },
  { id: 'p1t2', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'HTML5: Semantic Elements, Forms, Media' },
  { id: 'p1t3', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'CSS3: Selectors, Box Model, Colors, Typography' },
  { id: 'p1t4', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'CSS Layout: Flexbox, Grid, Positioning' },
  { id: 'p1t5', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'Responsive Web Design (Media Queries, Mobile First)' },
  { id: 'p1t6', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'CSS Animations & Transitions' },
  { id: 'p1t7', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'CSS Frameworks: Tailwind CSS (Utility-first)' },
  { id: 'p1t8', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'Bootstrap 5 Basics' },
  { id: 'p1t9', phaseTitle: 'Phase 1: Web Fundamentals & HTML/CSS', topicTitle: 'Project: Build a Responsive Landing Page' },

  { id: 'p2t1', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'JavaScript Basics: Variables, Data Types, Operators' },
  { id: 'p2t2', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Control Flow: Conditionals, Loops' },
  { id: 'p2t3', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Functions: Declaration, Expressions, Arrow Functions' },
  { id: 'p2t4', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Scope, Hoisting, Closures' },
  { id: 'p2t5', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Arrays & Objects: Methods, Destructuring' },
  { id: 'p2t6', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'DOM Manipulation (Selectors, Events, Dynamic Content)' },
  { id: 'p2t7', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Async JavaScript: Callbacks, Promises, Async/Await' },
  { id: 'p2t8', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Fetch API & AJAX (Consuming REST APIs)' },
  { id: 'p2t9', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Error Handling (try/catch, throw)' },
  { id: 'p2t10', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Modern JavaScript (ES6+): Spread/Rest, Modules, Template Literals' },
  { id: 'p2t11', phaseTitle: 'Phase 2: JavaScript Core & ES6+', topicTitle: 'Project: Interactive Dashboard with API Integration' },

  { id: 'p3t1', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'React Intro: Components, JSX, Virtual DOM' },
  { id: 'p3t2', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Functional Components & Props' },
  { id: 'p3t3', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'State Management (useState, useEffect)' },
  { id: 'p3t4', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Handling Forms & User Input' },
  { id: 'p3t5', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Conditional Rendering & Lists (map, key)' },
  { id: 'p3t6', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'React Router (SPA Navigation)' },
  { id: 'p3t7', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Context API (Global State)' },
  { id: 'p3t8', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Custom Hooks' },
  { id: 'p3t9', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Performance Optimization (memo, useCallback, useMemo)' },
  { id: 'p3t10', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Styling in React (CSS Modules, Styled Components, Tailwind)' },
  { id: 'p3t11', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'API Integration in React (Axios/Fetch)' },
  { id: 'p3t12', phaseTitle: 'Phase 3: Advanced Frontend (React.js)', topicTitle: 'Project: E-commerce Frontend with Product Catalog & Cart' },

  { id: 'p4t1', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Node.js Runtime: Event Loop, Modules (CommonJS)' },
  { id: 'p4t2', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'NPM & Package Management' },
  { id: 'p4t3', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Building a Server with Express.js' },
  { id: 'p4t4', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Routing & Middleware' },
  { id: 'p4t5', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Handling Requests (GET, POST, PUT, DELETE)' },
  { id: 'p4t6', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Environment Variables & Configuration' },
  { id: 'p4t7', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'RESTful API Design' },
  { id: 'p4t8', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Error Handling & Logging' },
  { id: 'p4t9', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'File Uploads (Multer)' },
  { id: 'p4t10', phaseTitle: 'Phase 4: Backend with Node.js & Express', topicTitle: 'Project: REST API for Task Manager' },

  { id: 'p5t1', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'SQL vs NoSQL (Intro to MongoDB)' },
  { id: 'p5t2', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Mongoose ODM: Schemas, Models, Queries' },
  { id: 'p5t3', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'CRUD Operations with MongoDB' },
  { id: 'p5t4', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Data Validation & Sanitization' },
  { id: 'p5t5', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Authentication: JWT (JSON Web Tokens)' },
  { id: 'p5t6', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Password Hashing (bcrypt)' },
  { id: 'p5t7', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Authorization (Roles, Permissions)' },
  { id: 'p5t8', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Session Management (express-session, cookies)' },
  { id: 'p5t9', phaseTitle: 'Phase 5: Database & Authentication', topicTitle: 'Project: User Authentication API (Register, Login, Protected Routes)' },

  // Phase 6: Advanced Backend Concepts (10 topics) - excluding socket.io from main curriculum, will add as extra
  { id: 'p6t1', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Async Error Handling (Wrapper Functions)' },
  { id: 'p6t2', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Security Best Practices (Helmet, CORS, Rate Limiting)' },
  { id: 'p6t3', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Environment Split (dev, prod)' },
  { id: 'p6t4', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Email Sending (Nodemailer)' },
  { id: 'p6t5', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Payments Integration (Stripe/PayPal)' },
  { id: 'p6t6', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Caching with Redis (Optional)' },
  { id: 'p6t7', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'File Storage (Cloudinary, AWS S3)' },
  { id: 'p6t8', phaseTitle: 'Phase 6: Advanced Backend Concepts', topicTitle: 'Project: Real-time Chat Application (Basic)' },

  // Extra from Academy: Introduction to WebSockets (Socket.IO) - just intro
  { id: 'extra1', phaseTitle: 'Extra from Academy', topicTitle: 'Introduction to WebSockets (Socket.IO) - Basic Concepts & Setup' },
];

const ConfettiBackground = () => {
  const [shapes, setShapes] = useState<Array<{ id: number; type: string; left: string; delay: number; duration: number; size: string }>>([]);

  useEffect(() => {
    const types = ['✨', '⭐', '🎓', '💻', '🚀', '⚡', '🎉', '🌟', '💡', '🔧'];
    const newShapes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 8 + Math.random() * 12,
      size: `${Math.random() * 20 + 10}px`,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute text-white/20 select-none"
          style={{ left: shape.left, fontSize: shape.size, top: '-5%' }}
          animate={{ y: ['0vh', '120vh'], rotate: [0, 360], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: shape.duration, delay: shape.delay, repeat: Infinity, ease: 'linear' }}
        >
          {shape.type}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const timelineRef = useRef<HTMLElement>(null);
  const instructorRef = useRef<HTMLElement>(null);
  const videosRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const graduatesRef = useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <title>IT Gate Academy | Web Development Diploma</title>
        <meta name="description" content="Web Development Diploma - Full-Stack with Node.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${phaseBgImages.hero})` }}
      >
        <FloatingTools />
        <ParticleBackground />
        <motion.div
          className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
              IT Gate Academy
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold"
          >
            <ReactTyped
              strings={['Web Development Diploma', 'Full-Stack Program', 'Become a SoftWare Engineer']}
              typeSpeed={80}
              backSpeed={50}
              loop
              className="text-white"
            />
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={() => {
            if (timelineRef.current) timelineRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ========= CURRICULUM TIMELINE ========= */}
      <section ref={timelineRef} className="relative py-24 bg-black overflow-hidden">
        <ConfettiBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">RoadMap</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4">{allTopics.length}+ topics covered</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full hidden md:block" />
            {allTopics.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const showPhaseTitle = idx === 0 || allTopics[idx-1]?.phaseTitle !== item.phaseTitle;
              return (
                <div key={item.id} className="relative mb-8 last:mb-0">
                  {showPhaseTitle && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex justify-center my-6"
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                        {item.phaseTitle}
                      </div>
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.02 * (idx % 15) }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col md:flex-row items-center justify-between"
                  >
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-1 md:pr-6' : 'md:order-3 md:pl-6'} mb-6 md:mb-0`}>
                      <div className="group relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400 text-xl">📌</span>
                          <h3 className="text-white font-semibold text-base sm:text-lg">{item.topicTitle}</h3>
                        </div>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full" />
                      </div>
                    </div>
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center shadow-md shadow-purple-500/50">
                      <span className="text-white font-bold text-xs">{idx + 1}</span>
                    </div>
                    <div className="w-full md:w-5/12 md:order-2" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========= INSTRUCTOR SECTION ========= */}
      <section ref={instructorRef} className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Instructor</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/20">
                  <Image
                    src="/images/JA.JPG"
                    alt="Ahmed Halabi"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2"> ENG Ahmed Halabi</h3>
                <p className="text-purple-400 text-lg mb-4">Senior Software Engineer & Technical Instructor</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">7+ years experience</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">5 years university teaching</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">300+ real projects</span>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Ahmed Halabi is a passionate software engineer with over 7 years of industry experience,
                  having built and delivered multiple large-scale web applications. He has been teaching
                  web development for the past 5 years at various universities and colleges, training
                  hundreds of students to become professional developers. His deep expertise in both
                  frontend and backend technologies, combined with his engaging teaching style, ensures
                  that every student gains practical, job-ready skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========= VIDEOS ========= */}
      <section ref={videosRef} className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Lets See Our Vibe</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotionalVideos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-video relative">
                  <video className="w-full h-full object-cover" controls preload="metadata">
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-bold text-lg">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= PROJECTS ========= */}
      <section ref={projectsRef} className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Example Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
                  <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm inline-block">View Project</div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TESTIMONIALS ========= */}
      <section ref={testimonialsRef} className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Students Reviews</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full hidden md:block" />
            {testimonials.map((img, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0"
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-1 md:pr-6' : 'md:order-3 md:pl-6'} mb-6 md:mb-0`}>
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                      <img
                        src={img}
                        alt={`Testimonial ${idx + 1}`}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center shadow-md shadow-purple-500/50">
                    <span className="text-white font-bold text-sm">⭐</span>
                  </div>
                  <div className="w-full md:w-5/12 md:order-2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========= GRADUATES ========= */}
      <section ref={graduatesRef} className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Our Graduates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full hidden md:block" />
            {graduates.map((img, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0"
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-1 md:pr-6' : 'md:order-3 md:pl-6'} mb-6 md:mb-0`}>
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
                      <div className="aspect-[4/3] relative">
                        <Image src={img} alt={`Graduate ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center shadow-md shadow-purple-500/50">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                  <div className="w-full md:w-5/12 md:order-2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}