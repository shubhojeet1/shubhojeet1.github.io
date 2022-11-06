//  icons
import {
  FiYoutube,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";


// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/pr1.jpeg";
import Project2 from "./assets/img/projects/pr2.jpeg";
import Project3 from "./assets/img/projects/pr3.jpeg";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about me",
    href: "about",
  },
  {
    name: "skills",
    href: "about",
  },
  {
    name: "project",
    href: "portfolio",
  },
  // {
  //   name: 'contact',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
  {
    name: "resume",
    href: "home",
    
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/shubhojeet1",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/shubhojeet1",
  },
];


// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Lifestylestores.com Clone",
    category: "TECH STACKS: HTML, Css, Javascript, Advance Css",
    source:"https://github.com/shubhojeet1/Lifestylestores.com-Clone",
    live:"https://splendorous-duckanoo-ae27f9.netlify.app/",
    despo: "Lifestyle is a true omni-channel player with its online store lifestylestores.com where customers can shop from the convenience of their home. 15k+Customers"
    
    
    
  },
  
  {
    id: "2",
    image: Project2,
    name: "Sephora.nnow.com Clone",
    category: "TECH STACKS : Reactjs,ChakraUI,Firebase,Redux",
    source:"https://github.com/shubhojeet1/Sephora.nnow.com-Clone",
    live:"https://scintillating-dango-a969f1.netlify.app/",
    despo:"Sephora is a global beauty chain that offers a wide range of classic and emerging brands in makeup, skincare, fragrance, body care and haircare categories"
  },
  {
    id: "3",
    image: Project3,
    name: "Weather App",
    category: "TECH STACKS: HTML, Css, Javascript, Advance Css",
    source:"https://github.com/masai-course/SHUBHOJEET_fp03_002/commit/0a2bb523a447cd379edbf6c64a21cfbb3f22daba",
    live:"https://inquisitive-starship-8df0a6.netlify.app/",
    despo:"This weather app is one of best free weather apps with full features: Local weather, weather map (weather map service) and weather widgets"
  },
  // {
  //  image: <img src="https://github-readme-stats.vercel.app/api?username=shubhojeet1&show_icons=true&locale=en&theme=radical" alt="monumarquis" height="139" />,
       
  //  image: <img src="https://github-readme-streak-stats.herokuapp.com/?user=shubhojeet1&show_icons=true&locale=en&theme=radical" alt="monumarquis" />,
  // },
  // {
  //   id: "4",
  //   image: Project4,
  //   name: "project name 4",
  //   category: "branding",
  // },
  // {
  //   id: "5",
  //   image: Project5,
  //   name: "project name 5",
  //   category: "web development",
  // },
  // {
  //   id: "6",
  //   image: Project6,
  //   name: "project name 6",
  //   category: "web development",
  // },
];


// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image:
      "https://media0.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952f2tzzhgaacs16r6qc70g8s7labhgrwhuicih0wc3&rid=giphy.gif&ct=s",
  },
  {
  image:
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TypeScript_ESLint_logo.svg/240px-TypeScript_ESLint_logo.svg.png"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/240px-Redux.png"
  },
  {
  image  :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/240px-Bootstrap_logo.svg.png"
  },
  {
    image:"https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png"
  },
  {
    image:"https://cdn4.iconfinder.com/data/icons/bettericons/354/github-128.png"
  },
  {
   image:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
  },
  {
    image:"https://cdn.iconscout.com/icon/free/png-128/figma-3521426-2944870.png"
  },
  {
    image:"https://keenethics.com/wp-content/uploads/2021/10/Express.js.svg"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&usqp=CAU"
  },
  {
    image:"https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png"
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at :- jeetduke1234@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bokaro steel city, Jharkhand",
    description: "",
  },
];
