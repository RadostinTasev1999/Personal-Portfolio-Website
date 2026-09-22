import IconBook from "../ui/icons/Learn";
import IconLocation from "../ui/icons/Location";
import IconStudent from "../ui/icons/Study";
import IconWork from "../ui/icons/Work";

export const logo = `<rt.dev />`;

export const sectionHeadings = {
  about: {
    heading: 'About',
    header:'Beyond the code',
    text: 'JavaScript Web Developer / 3 + years in Software Development'
  },
  skills: {
    heading: 'Skills',
    header: 'Technologies I use to build',
    text: ''
  },
  experience: {
    heading: 'Education & Experience',
    header: 'Learning, building, and growing along the way',
    text: 'An overview of my professional and educational experience'
  },
  contact: {
    heading: 'Contact Me',
    header: 'Lets Get In Touch',
    text: 'Lets discuss your project idea'
  },
  resume: {
    heading:'Resume',
    header:'',
    text: ''
  },
  projects: {
    heading: 'Projects',
    header: '',
    text: ''
  }
};

export const skills = {
    languages: ['JavaScript','TypeScript','HTML','CSS'],
    frameworks: ['React', 'Vite','Angular','Next.js'],
    tools: ['Git','GitHub','GitHub Actions','Jenkins']
};

export const skillTypes = [
  {
    id:1,
    skillType: "languages",
    skills: [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'TypeScript'
      },
      {
        id: 3,
        name: 'HTML'
      },
      {
        id: 4,
        name: 'CSS'
      }
    ]
  },
  {
    id:2,
    skillType: "frameworks",
    skills: [
              {
                id: 1,
                name:'React'}, 
              {
                id: 2,
                name:'Vite'},
              {
                id: 3,
                name:'Angular'},
              {
                id: 4,
                name:'Next.js'}
            ]
  },
  {
    id:3,
    skillType: "tools",
    skills: [
              {
                id: 1,
                name:'Git'
              },
              {
                id: 2,
                name:'GitHub'
              },
              {
                id: 3,
                name:'GitHub Actions'
              },
              {
                id: 4,
                name:'Jenkins'
              }
            ]
  }
];


export const statistics = [
  {
    id: 1,
    name: 'GitHub contributions since 2025',
    stat: "755"
  },
  {
    id: 2,
    name: 'Contributions to repositories',
    stat: '54'
  },
  {
    id: 3,
    name: 'Full Stack project',
    stat: '1'
  },
  {
    id: 4,
    name: 'Project shipped',
    stat: '1'
  }
];

export const navigationLinks = [
  {
    name: 'Home',
    link: '/#main-container',
    id: 1
  },
  {
    name: 'About',
    link: '/#about',
    id: 2
  },
  {
    name: 'Skills',
    link: '/#skills',
    id: 3
  },
  {
    name: 'Experience',
    link: '/#timeline-section',
    id: 4
  },
  {
    name: 'Resume',
    link: '/#resume-section',
    id: 5
  },
  {
    name: 'Contact',
    link: '/#contact-section',
    id: 6
  }
];

export const valueCards = [
  {
    id:1,
    heading: 'Collaborative',
    text: 'Maintain open communication with teammates / Fast and clear discussion under time pressure'
  },
  {
    id:2,
    heading: 'Open minded',
    text: 'Continuously learn new information and apply knowledge in development practice'
  },
  {
    id:3,
    heading: 'Consistent work',
    text: 'Plan / Execute / Reflect on outcome'
  }
];

export const timelineItems = [
  {
    id: 1,
    year: '2023 - 2026',
    position: 'Front-End Developer with JavaScript',
    company: 'Software University',
    bullets: [
      {
        id: 1,
        name: 'Computer Networking Fundamentals'
      },
      {
        id: 2,
        name: 'Programming Basics'
      },
      {
        id: 3,
        name: 'Programming Fundamentals'
      },
      {
        id: 4,
        name: 'JS Advanced'
      },
      {
        id: 5,
        name: 'HTML & CSS'
      },
      {
        id: 6,
        name: 'JS Applications'
      },
      {
        id: 7,
        name: 'JS Back-End'
      },
      {
        id: 8,
        name: 'ReactJS'
      },
      {
        id: 9,
        name: 'Angular'
      },
      {
        id: 10,
        name: 'Software Engineering and DevOps'
      },
    ],
    url: 'https://softuni.bg/certificates/details/259367/6159310e'
  },
  {
    id: 2,
    year: '2024 - 2026',
    position: 'Computer analyst software support - Microsoft Office 365',
    company: 'Concentrix',
    bullets: [
      {
        id: 1,
        name: 'Delivered L1 Technical Support for Microsoft Teams incidents'
      },
      {
        id: 2,
        name: 'Collaborated with engineering teams to report software bugs and advocate for product enhancements.'
      },
      {
        id: 3,
        name: 'Utilized debugging tools (e.g., Fiddler, WireShark, Devtools) to perform root cause analysis and identify technical solutions.'
      },
      {
        id: 4,
        name: 'Authored technical documentation to standardize troubleshooting procedures and assist in knowledge sharing across teams'
      }
    ],
    url: ''
  }
];

export const aboutFacts = [
  {
    id: 1,
    icon: IconStudent,
    text: 'Prof. Qual. Front-End Developer with JavaScript'
  },
  {
    id: 2,
    icon: IconLocation,
    text: 'Bulgaria, Europe'
  },
  {
    id: 3,
    icon: IconWork,
    text: 'Open to Full Time roles and Freelance projects'
  },
  {
    id: 4,
    icon: IconBook,
    text: 'Passionate continuous learner, seeking for the next challenge'
  },

];

export const aboutText = [
  {
    id:1,
    text: "Hello There! My name is Radostin Tasev - a JavaScript Web Developer graduate from Software University."
  },
  {
    id:2,
    text: "I am currently building personal projects with React and Next.js."
  },
  {
    id:3,
    text: "I do also focus on improving my problem solving skills through solving Data Structure and Algorithm problems."
  },
  {
    id:4,
    text: "I am passionate continuous learner, always tackling new challenges to deepen my understadning in software technologies."
  }
];

export const resumeTags = [
  {
    id:1,
    tag: 'React 19'
  },
  {
    id: 2,
    tag: 'TypeScript'
  },
  {
    id: 3,
    tag: 'Next.js'
  },
  {
    id: 4,
    tag: 'Angular'
  }
];

export const name = {
  firstName: 'Radostin',
  lastName: 'Tasev'
};

export const projectCardsData = [
  {
    id: 1,
    img: '/TechDevice.png',
    title: 'Tech Devices React App',
    text: 'Enable people to collaborate on Tech topics by discussing various product updates,bugs, fixes etc.',
    tags : [
      {
        id: 1,
        name:'React'
      },
      {
        id: 2,
        name:'TaiwlindCss'
      },
      {
        id: 3,
        name:'Vite'
      }
    ],
    url: 'https://github.com/RadostinTasev1999/React-Project-2025'
  },
  {
    id: 2,
    img: '/Bridge.jpg',
    title: 'LifeStyle Forum Angular',
    text: 'Enable users to share stories and ideas on topics, including Travel, Lifestyle, Technology, Culture and Food.',
    tags : [
      {
        id: 1,
        name:'Angular'
      },
      {
        id: 2,
        name:'TypeScript'
      },
      {
        id: 3,
        name:'Bootstrap'
      }
    ],
    url: 'https://github.com/RadostinTasev1999/Angular-Project-Final-2025'
  }
];

export const resumeHighlights = [
  {
    id: 1,
    heading: "What I focus on",
    items: [
      {
        id: 1,
        text: 'Responsive UI using TailwindCss'
      },
      {
        id: 2,
        text: 'Reusability of UI components'
      }
    ]
  },
  {
    id: 2,
    heading: "Recent Achievements",
    items: [
      {
        id: 1,
        text: 'HackerRank Problem Solving Basic certificate',
        url: 'https://www.hackerrank.com/certificates/iframe/78efaddf9488'
      },
      {
        id: 2,
        text: 'HackerRank JavaScript Basic certificate',
        url: 'https://www.hackerrank.com/certificates/iframe/c6a712646abd'
      }
    ]
  }
];

export const biographyText = "I build responsive user interfaces and interactive user experience with React, TypeScript and Next.js.";