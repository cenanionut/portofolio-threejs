import { Glitch } from '@react-three/postprocessing';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [];

export const myProjects = [
  {
    title: 'Yelpcamp - Search the nearest campground',
    desc: 'A web application built as part of "The Web Developer Bootcamp 2024" course on Udemy. Yelpcamp is a camp review platform that allows users to search for, create, and rate camping locations.',
    subdesc:
      'Features: User authentication (Sign Up, Log In); CRUD functionality for campsites; Image uploads with Cloudinary integration; Dynamic views with EJS templating engine',
    href: 'https://cnnyelpcamp.onrender.com',
    github: 'https://github.com/cenanionut/yelpcamp',
    texture: '/textures/project/new_project1.mp4',
    logo: '/assets/project-logo_new1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
    ],
  },
  {
    title: 'Intelligent Solar Panel System',
    desc: 'Bachelor\'s Thesis: "Development of an Intelligent Solar Panel System". The project aims to optimize the energy production of solar panels.',
    subdesc:
      'Once logged in, users can view real-time electrical data related to their equipment, including voltage, current intensity, current power, and stored/saved energy.',
    href: 'https://solarpowercnn.web.app',
    github: 'https://github.com/cenanionut/solarpower',
    texture: '/textures/project/new_project2.mp4',
    logo: '/assets/solar-panel.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      {
        id: 4,
        name: 'Arduino',
        path: '/assets/arduino.png',
      },
    ],
  },
  {
    title: 'Kitchen - Culinary Design Showcase',
    desc: 'A visually engaging platform highlighting creative CSS animations and web design. It brings culinary themes to life with seamless animations, dynamic styling, and intuitive interactions.',
    subdesc:
      'Built with precision, Kitchen integrates SCSS, JavaScript, and Firebase Hosting to create an immersive and responsive user experience, showcasing the power of modern web development tools.',

    href: 'https://cnn-kitchen.web.app',
    github: 'https://github.com/cenanionut/kitchen',
    texture: '/textures/project/new_project3.mp4',
    logo: '/assets/chef.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'SASS',
        path: '/assets/sass.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
    ],
  },
  {
    title: 'Build your own burger',
    desc: 'A web application that allows the user to order a custom burger by selecting ingredients through the graphical interface. After signing in and logging in, the user can access order history and the status of active orders.',
    subdesc:
      'A web application developed using React.js as part of the Udemy course - React The Complete Guide, with Firebase as the backend.',
    href: 'https://react-my-burger-82051.web.app/',

    texture: '/textures/project/new_project4.mp4',
    logo: '/assets/burger.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [15, -12, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-20, 10, 0],
    targetPosition: isSmall ? [-5, -8, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -20, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Endava',
    pos: 'Web Developer',
    duration: '2021 - Present',
    title:
      'Experienced Application Management Engineer skilled in web development, debugging, Agile, delivering new products, maintaining existing ones, and continuously learning technologies.',
    icon: '/assets/DAVA.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Ultratech Int',
    pos: 'Electronic Technician',
    duration: '2021',
    title:
      'Repaired industrial electronic machines, specialized in Human Machine Interfaces, maintained power inverters, implemented preventative measures, and mentored new colleagues to ensure optimal performance and minimal downtime.',
    icon: '/assets/ultra.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Freelance (Self employed)',
    pos: 'Online Computer Science Tutor',
    duration: 'Seasonal 2020',
    title:
      'Taught C++ programming online to high school students, designed assessments, and evaluated progress to enhance learning and retention.',
    icon: '/assets/tutor.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Clock Advertising',
    pos: 'Sales Team Lead',
    duration: '2019 - 2020',
    title:
      'Led a sales team at festivals, promoting products, managing schedules, analyzing performance, providing feedback, and coordinating resources effectively.',
    icon: '/assets/clock.jpeg',
    animation: 'salute',
  },
];

export const certificates = [
  {
    id: 1,
    name: 'The Modern React Bootcamp (Hooks, Context, NextJS, Router)',
    pos: 'Udemy',
    duration: 'In progress',
    title: 'Technologies: React, React Hooks, Context API, Next.js, React Router, Styled Components, JSS, and more.',
    icon: '/assets/atom.png',
  },
  {
    id: 1,
    name: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
    pos: 'Udemy',
    duration: 'In progress',
    title: 'Technologies: React, Hooks, Redux, React Router, Next.js, Best Practices and way more.',
    icon: '/assets/atom (2).png',
  },
  {
    id: 1,
    name: "Typescript: The Complete Developer's Guide",
    pos: 'Udemy',
    duration: 'In progress',
    title: 'Technologies: Typescript, React, Redux, Node.js, Express, MongoDB, and more.',
    icon: '/assets/typescript.png',
  },
  {
    id: 1,
    name: 'The Web Developer Bootcamp 2024',
    pos: 'Udemy',
    duration: 'Issued Nov 2024',
    title:
      'Technologies: HTML, CSS, JavaScript, Node.js, Express, MongoDB, RESTful APIs, Bootstrap, Semantic UI, Authentication, Authorization, and more.',
    icon: '/assets/web.png',
  },
  {
    id: 2,
    name: 'CS50x: Introduction to Computer Science',
    pos: 'Harvard University',
    duration: 'Issued Nov 2024',
    title:
      'Technologies: C, Python, SQL, Algorithms, Data Structures, Cybersecurity, Artificial Intelligence, and more.',
    icon: '/assets/cs50.png',
  },
  {
    id: 3,
    name: 'Learn to Code in Python: Programming beginner to advanced',
    pos: 'Udemy',
    duration: 'Issued Jan 2025',
    title: 'Technologies: Python, Object-Oriented Programming, Data Analysis, Web Scraping, Automation, and more.',
    icon: '/assets/python.png',
  },
  {
    id: 4,
    name: 'Automate the Boring Stuff with Python Programming',
    pos: 'Udemy',
    duration: 'Issued Jan 2023',
    title: 'Technologies: Python, Web Scraping, Automation, Data Analysis, Regular Expressions, and more.',
    icon: '/assets/auto.png',
  },
  {
    id: 5,
    name: 'Arduino Programming and Hardware Fundamentals with Hackster',
    pos: 'Udemy',
    duration: 'Issued Nov 2020',
    title: 'Technologies: Arduino, Electronics, Microcontrollers, Sensors, Actuators, and more.',
    icon: '/assets/arduino2.png',
  },
  {
    id: 5,
    name: 'Fundamentals of digital marketing',
    pos: 'Google',
    duration: 'Issued May 2022',
    title: 'Technologies: SEO, SEM, Social Media, Content Marketing, Email Marketing, and more.',
    icon: '/assets/google.png',
  },
];
