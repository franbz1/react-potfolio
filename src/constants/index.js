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
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Java SE',
    icon: java,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Nextjs',
    icon: nextjs,
  },
  {
    name: 'Expressjs',
    icon: expressjs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Spring',
    icon: spring,
  },
]

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'WarriorsGym',
    icon: warriorsgym,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
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
