export interface Topic {
  title: string;
  hours?: number;
}

export interface Phase {
  id: number;
  title: string;
  topics: Topic[];
  defaultHours: number;
}

export const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Frontend Development Fundamentals",
    defaultHours: 50,
    topics: [
      { title: "Semantic HTML5 structure", hours: 8 },
      { title: "Advanced CSS3 (Box Model, Flexbox, CSS Grid)", hours: 12 },
      { title: "Responsive Web Design (Media Queries)", hours: 8 },
      { title: "CSS Animations and Transitions", hours: 6 },
      { title: "Tailwind CSS: Utility-first styling", hours: 10 },
      { title: "Bootstrap 5: Rapid UI prototyping", hours: 6 },
    ],
  },
  {
    id: 2,
    title: "Phase 2: JavaScript & Interactive Web",
    defaultHours: 80,
    topics: [
      { title: "Variables, Scopes, and Hoisting", hours: 6 },
      { title: "Data Structures and Algorithms basics", hours: 12 },
      { title: "Functions, Arrow Functions, and Closures", hours: 8 },
      { title: "DOM Manipulation and Event Handling", hours: 12 },
      { title: "Asynchronous Programming (Promises, Async/Await)", hours: 14 },
      { title: "Working with RESTful APIs (Fetch API)", hours: 10 },
    ],
  },
  {
    id: 3,
    title: "Phase 3: Advanced Frontend Engineering",
    defaultHours: 70,
    topics: [
      { title: "Components Architecture (Functional Components)", hours: 12 },
      { title: "State Management (useState, useEffect)", hours: 14 },
      { title: "React Router (SPA Navigation)", hours: 8 },
      { title: "Handling Forms and Data Validation", hours: 10 },
      { title: "Integration with external APIs", hours: 16 },
    ],
  },
  {
    id: 4,
    title: "Phase 4: Backend Engineering (Choose Track)",
    defaultHours: 100,
    topics: [
      { title: "Track A: Node.js & Express (RESTful API, MVC, MongoDB, Socket.IO)", hours: 100 },
      { title: "Track B: PHP & Laravel (OOP, Routing, MySQL, Eloquent, Sanctum)", hours: 100 },
    ],
  },
  {
    id: 5,
    title: "Phase 5: Professional Tools & Production",
    defaultHours: 50,
    topics: [
      { title: "Git & GitHub (Workflow, Branching, Merging)", hours: 15 },
      { title: "Deployment on Vercel, Heroku", hours: 10 },
      { title: "Agile methodologies", hours: 10 },
      { title: "Capstone Project (Full-stack portfolio piece)", hours: 15 },
    ],
  },
];

export const totalHours = phases.reduce((sum, p) => sum + p.defaultHours, 0);