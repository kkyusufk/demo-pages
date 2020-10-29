import sample1 from "./Assets/Carousel Images/slide-1.png";
import sample2 from "./Assets/Carousel Images/slide-2.png";
import sample3 from "./Assets/Carousel Images/slide-3.png";
import sample4 from "./Assets/Carousel Images/slide-4.png";

import portfolioImage from "./Assets/Portfolio Images/Rectangle 37.png";
import portfolioImage1 from "./Assets/Portfolio Images/Rectangle 37-1.png";
import portfolioImage2 from "./Assets/Portfolio Images/Rectangle 37-2.png";
import portfolioImage3 from "./Assets/Portfolio Images/Rectangle 37-3.png";
import portfolioImage4 from "./Assets/Portfolio Images/Rectangle 37-4.png";
import portfolioImage5 from "./Assets/Portfolio Images/Rectangle 37-5.png";
import portfolioImage6 from "./Assets/Portfolio Images/Rectangle 37-6.png";

export const images = [
  { src: sample1, title: "Kapiva", subtitle: "Brand Creation & Packaging" },
  { src: sample2, title: "Stockal", subtitle: "Web Design for Fintech" },
  { src: sample3, title: "Swiggy", subtitle: "Branding For Food Tech" },
  { src: sample4, title: "Simba", subtitle: "Branding and Beers" },
];

export const portfolioData = [
  {
    id: "stockal",
    type: "Communication",
    src: portfolioImage,
    title: "Stockal",
    subtitle: "Web Design for Fintech",
  },
  {
    id: "kapiva",
    type: "Brandings",
    src: portfolioImage1,
    title: "Kapiva",
    subtitle: "Brand Creation & Packaging",
  },
  {
    id: "bloom",
    type: "User Experience",
    src: portfolioImage2,
    title: "Bloom Hotels",
    subtitle: "UX/UI for Hospitality",
  },
  {
    id: "sugar",
    type: "Packaging",
    src: portfolioImage3,
    title: "Sugar X Shirley",
    subtitle: "Limited Edition Packaging",
  },
  {
    id: "swiggy",
    type: "Branding",
    src: portfolioImage4,
    title: "Swiggy",
    subtitle: "Branding For Food Tech",
  },
  {
    id: "canarim",
    type: "Branding",
    src: portfolioImage5,
    title: "Canarim",
    subtitle: "Branding for Konkani Restaurant",
  },
  {
    id: "antidote",
    type: "Branding",
    src: portfolioImage6,
    title: "Antidote Coffee",
    subtitle: "Branding and Packaging",
  },
];

export const team = [
  {
    id: "abhisek",
    name: "Abhisek Sarda",
    description: "Founder & Creative Director. Lego and Edison Bulb Lover",
  },
  {
    id: "indranil",
    name: "Indranil Udupi",
    description: "Project Manager. Turns up headphones way too loud",
  },
  {
    id: "sanjana",
    name: "Sanjana Hegde",
    description: "Graphic Designer. Chef and quisher of dog's faces",
  },
  {
    id: "priyanka",
    name: "Priyanka Poulose",
    description:
      "Graphic Designer. Architect too, once upon a time. Aspiring crazy cat lady",
  },
  {
    id: "vidit",
    name: "Vidit Agarwal",
    description: "Graphic Designer. Inhouse weeaboo & Dark Web enthusiast.",
  },
  {
    id: "chris",
    name: "Chris D'souza",
    description:
      "UI/UX Designer. Legitimately needs OCD treatment and to chill out a bit.",
  },
  {
    id: "jude",
    name: "Jude Gonsalves",
    description:
      "UI/UX Designer. Baker. You *have* to try his brookies sometime. Seriously.",
  },
  {
    id: "ishan",
    name: "Ishan Nahata",
    description:
      "UI/UX Designer. Enigma. Inhouse memelord. Dry humour kinda person",
  },
  {
    id: "jitesh",
    name: "Jitesh Gupta",
    description:
      "Studio Assistant. Dejected that TikTok is now banned. Still loves his bike though.",
  },
  {
    id: "prakash",
    name: "Prakash Solanki",
    description:
      "Studio Assistant. Kindest eyes and smile. But sounds scary when angry.",
  },
  {
    id: "bodoni",
    name: "Bodoni",
    description: "Chairperson. Loves his beanbag. Might secretly be a cat.",
  },
  {
    id: "gotham",
    name: "Gotham",
    description: "Definitely a dog, no doubt about it.",
  },
];

const jobDetails = {
  "UI/UX Designer": {
    get headingOne() {
      return "What we’re looking for";
    },
    get headingTwo() {
      return "Someone who’s articulate, organised, T-Shaped, conscientious, hardworking and innovative – A designer with an engineer’s mind";
    },
    get criteriaOne() {
      return "You need to have at least 2-4 years of work experience in designing User Experiences, Interfaces and Websites.";
    },
    get criteriaTwo() {
      return "Passion for user-centric critical analysis and problem-solving. Experience with User Research methods - user personas, journey mapping, and competitor analysis.";
    },
    get criteriaThree() {
      return "Intermediate to Advanced knowledge of Sketch or Figma, Illustrator, Invision, Protopie, After Effects or other prototyping tools. Knowledge about web and app development as we as experience in doing development handovers.";
    },
    get criteriaFour() {
      return "Digital usability best practices knowledge.";
    },
    get headingThree() {
      return "Your key responsibilities";
    },
    get headingFour() {
      return "Work on projects end-to-end; right from research, UX design, UI implementation to handovers. Websites, mobile apps and web apps; B2B & B2C.";
    },
  },
};

export const openings = [
  {
    name: "New Business Manager",
    description: "Build and Manage Client Relationships",
  },
  {
    name: "UI/UX Designer",
    description: "Craft the next generation of Experiences and Interfaces.",
    details: jobDetails["UI/UX Designer"],
  },
  {
    name: "Project Manager",
    description: "Get things done!",
  },
  {
    name: "Senior Graphic Designer",
    description: "Build and Manage Bold Brands",
  },
  {
    name: "HR and Studio Manager",
    description: "Manage our studio space and help build our team.",
  },
];

export const blogs = [
  {
    id: "Blog-1",
    author: "Abhisek Sarda",
    date: "14 Jan 2020",
    title: "Why can't you leave a good thing alone?",
    src: "https://source.unsplash.com/random",
  },
  {
    id: "Blog-2",
    author: "Abhisek Sarda",
    date: "15 Nov 2016",
    title:
      "Noteworthy or Not-worthy? A Design Critique of the new Rs. 2,000 note",
    src: "https://source.unsplash.com/random",
  },
];

export const HOME = {
  get headingOne() {
    return "Opposite works with emerging companies to build brands and design experiences";
  },
  get headingTwo() {
    return "See Full Portfolio";
  },
  get headingThree() {
    return "We work with challenger brands on breaking status quo.";
  },
  get headingFour() {
    return "About Us";
  },
};

export const OURWORK = {
  get headingOne() {
    return "Opposite’s Portfolio of Work";
  },
  get headingTwo() {
    return "From billion dollar behemoths to emerging brands.";
  },
};

export const ABOUT = {
  get headingOne() {
    return "About Opposite";
  },
  get headingTwo() {
    return "We work with challenger brands on breaking the status quo.";
  },
  get headingThree() {
    return "We've built brands and experiences that you love. Brands your see everywhere,everyday, and brands that you've never heard about - but are leaders in their industry";
  },
  get headingFour() {
    return "Focussing on projects that requires us to put our heart and soul into them";
  },
  get headingFive() {
    return "We work with small brands on big projects, not big brands on small projects.";
  },
  get headingSix() {
    return "We've never been very excited about working with a large well-known brand on a small marketing project just to get them on our portfolio. We'd much rather work with founders and creators to build a new brand.";
  },
  get headingSeven() {
    return "Domain-agnostic. With experience across 20+ industries";
  },
  get headingEight() {
    return "Artificial Intelligence, Automobile, Consumer Tech, Cultural, Ecommerce, Education, Enterprise, Entertainment, Events, Fashion, Financial Services, Food & Beverages, Hardware, Healthcare + Pharma, Hospitality, Media, Real Estate, Retail, SaaS, Technology, Research, Telecom, Travel, Venture Capital";
  },
  get headingNine() {
    return "Meet the Team";
  },
};

export const CAREERS = {
  get headingOne() {
    return "Careers at Opposite";
  },
  get headingTwo() {
    return "When we say we’re the best to work with, we mean it. The only thing missing is you.";
  },
  get headingThree() {
    return "Current openings, in Bombay";
  },
  get headingFour() {
    return "Show up, make incredible work, and live the life you want";
  },
  get headingFive() {
    return "We cherish the joys of creating and crafting, of seeing our work come alive.";
  },
  get headingSix() {
    return "We work with our hands. And our minds.";
  },
  get headingSeven() {
    return "We cherish the joys of creating and crafting, of seeing our work come alive.";
  },
  get headingEight() {
    return "Lots of beer to drink too";
  },
  get headingNine() {
    return "We cherish the joys of creating and crafting, of seeing our work come alive.";
  },
};

export const CONTACT = {
  get headingOne() {
    return "Contact Opposite";
  },
  get headingTwo() {
    return "We love working with innovative, challenger brands and products";
  },
  get headingThree() {
    return "Tell us about your company and how you’d like us to help.";
  },
};

export const FOOTER = {
  HOME: {
    get headingOne() {
      return "Ready to start a project?";
    },
    get headingTwo() {
      return "Get in Touch";
    },
  },
  OURWORK: {
    get headingOne() {
      return "Ready to start a project?";
    },
    get headingTwo() {
      return "Get in Touch";
    },
  },
  ABOUT: {
    get headingOne() {
      return "Want to join the team?";
    },
    get headingTwo() {
      return "See Career Openings";
    },
  },
  CAREERS: {
    get headingOne() {
      return "Get to know us better.";
    },
    get headingTwo() {
      return "About us";
    },
  },
  BLOG: {
    get headingOne() {
      return "Get to know us better.";
    },
    get headingTwo() {
      return "About us";
    },
  },
  CONTACT: {
    get headingOne() {
      return "Get to know us better.";
    },
    get headingTwo() {
      return "About us";
    },
  },
};

export const BLOGDETAILS = [
  {
    id: "Blog-1",
    text: `Design has evolved through varied cultural and art progressions. 
    The Postmodern began with a liberalisation of ideas without any set adherence to rational order and formal organization. The movement has been an expressive and playful time for designers with a number of conspicuous trends – retro, techno, punk, grunge, beach, parody, and pastiche. There has been no singular defined design language or demi-gods; it is an anarchy of sorts. 
    
    The Postmodern is an ever-evolving organism, a mangled up mix of counter culture’s, aesthetics driven by nostalgic revivals, juxtaposed with advances in material technologies. Everyone and everything fits in this cacophonous bandwagon; the Postmodern is a never-ending journey we continue straddling, wandering, defining and redefining ourselves to suit its meanderings and hysterics. 
    
    The quote below pretty much sums it up.`,
  },
];
