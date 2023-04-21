import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  expressjs,
  spring,
  meta,
  warriorsgym,
  freelancer,
  shopify,
  geritch,
  gpt3,
  springCrud,
  java,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    link: 'https://wikipedia.org/wiki/HTML5'
  },
  {
    name: 'CSS 3',
    icon: css,
    link: 'https://wikipedia.org/wiki/CSS'
  },
  {
    name: 'JavaScript',
    icon: javascript,
    link: 'https://wikipedia.org/wiki/JavaScript'
  },
  {
    name: 'TypeScript',
    icon: typescript,
    link: 'https://wikipedia.org/wiki/TypeScript'
  },
  {
    name: 'React JS',
    icon: reactjs,
    link: 'https://wikipedia.org/wiki/react_(software)'
  },
  {
    name: 'Java SE',
    icon: java,
    link: 'https://wikipedia.org/wiki/Java_(programming_language)'
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    link: 'https://en.wikipedia.org/wiki/Tailwind_CSS'
  },
  {
    name: 'Node JS',
    icon: nodejs,
    link: 'https://wikipedia.org/wiki/node.js'
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    link: 'https://wikipedia.org/wiki/mongodb'
  },
  {
    name: 'Nextjs',
    icon: nextjs,
    link: 'https://wikipedia.org/wiki/next.js'
  },
  {
    name: 'Expressjs',
    icon: expressjs,
    link: 'https://en.wikipedia.org/wiki/Express.js'
  },
  {
    name: 'Git',
    icon: git,
    link: 'https://wikipedia.org/wiki/git'
  },
  {
    name: 'Spring',
    icon: spring,
    link: 'https://wikipedia.org/wiki/spring_framework'
  },
]

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'WarriorsGym.co',
    icon: warriorsgym,
    iconBg: '#383E56',
    date: 'Oct 2022 - Dec 2022',
    points: [
      'Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding',
      'Coded websites using HTML, CSS, JavaScript and jQuery languages',
      'Oversaw back-end development using Node.js to maintain website integrity, security and efficiency',
      'Generated web hosting presence to accommodate specified needs, uploading and maintaining files on account.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - March 2023',
    points: [
      'Developing and maintaining web applications as an independent developer.',
      'Discussed site and app requirements with clients to produce actionable development plans and budgets.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Worked flexible hours; night, weekend, and holiday shifts.',
    ],
  },
]

const projects = [
  {
    name: 'Restaurant',
    description:
      'A dynamic and interactive single-page React app. The website features an elegant and modern design that reflects the restaurants atmosphere and menu. The website is fully responsive and optimized for all devices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vitejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    page_deploy: "https://franbz1.github.io/ui-react-2",
    image: geritch,
    source_code_link: 'https://github.com/franbz1/ui-react-2',
  },
  {
    name: 'Landing Page GPT-3',
    description:
      'A single-page React app built to showcase ChatGPT-3, an AI-powered chatbot. The landing page features a modern design with a clean layout. The page is fully responsive and optimized for all screen sizes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'responsive',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt3,
    page_deploy: 'https://franbz1.github.io/ui-react-1/',
    source_code_link: 'https://github.com/franbz1/ui-react-1',
  },
  {
    name: 'Crud in Spring',
    description:
      'This project focused on developing a CRUD system using the Spring framework. The system was designed using an MVC architecture and dependency injection. The project utilized Hibernate and Tomcat, for deployment.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: springCrud,
    source_code_link: 'https://github.com/franbz1/crud-spring',
  },
]

export { technologies, experiences, projects }
