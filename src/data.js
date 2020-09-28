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
  { src: sample1, title: "Title", subtitle: "This is subtitle" },
  { src: sample2, title: "Title", subtitle: "This is subtitle" },
  { src: sample3, title: "Title", subtitle: "This is subtitle" },
  { src: sample4, title: "Title", subtitle: "This is subtitle" },
];

export const portfolioData = [
  { src: portfolioImage, title: "Stockal", subtitle: "Web Design for Fintech" },
  {
    src: portfolioImage1,
    title: "Kapiva",
    subtitle: "Brand Creation & Packag",
  },
  {
    src: portfolioImage2,
    title: "Bloom Hotels",
    subtitle: "UX/UI for Hospitality",
  },
  {
    src: portfolioImage3,
    title: "Sugar X Shirley",
    subtitle: "Limited Edition Packaging",
  },
  { src: portfolioImage4, title: "Swiggy", subtitle: "Branding For Food Tech" },
  {
    src: portfolioImage5,
    title: "Canarim",
    subtitle: "Branding for Konkani Rest",
  },
  {
    src: portfolioImage6,
    title: "Antidote Coffee",
    subtitle: "Branding and Packaging",
  },
];

export const team = [
  {
    name: "Abhisek Sarda",
    description: "Founder & Creative Director. Lego and Edison Bulb Lover",
  },
  {
    name: "Indranil Udupi",
    description: "Project Manager. Turns up headphones way too loud",
  },
  {
    name: "Sanjana Hegde",
    description: "Graphic Designer. Chef and quisher of dog's faces",
  },
  {
    name: "Priyanka Poulose",
    description:
      "Graphic Designer. Architect too, once upon a time. Aspiring crazy cat lady",
  },
  {
    name: "Vidit Agarwal",
    description: "Graphic Designer. Inhouse weeaboo & Dark Web enthusiast.",
  },
  {
    name: "Chris D'souza",
    description:
      "UI/UX Designer. Legitimately needs OCD treatment and to chill out a bit.",
  },
  {
    name: "Jude Gonsalves",
    description: "UI/UX Designer. Baker. You *have* to try his brookies sometime. Seriously.",
  },
  {
    name: "Ishan Nahata",
    description: "UI/UX Designer. Enigma. Inhouse memelord. Dry humour kinda person",
  },
  {
    name: "Jitesh Gupta",
    description: "Studio Assistant. Dejected that TikTok is now banned. Still loves his bike though.",
  },
  {
    name: "Prakash Solanki",
    description: "Studio Assistant. Kindest eyes and smile. But sounds scary when angry.",
  },
  {
    name: "Bodoni",
    description: "Chairperson. Loves his beanbag. Might secretly be a cat.",
  },
  {
    name: "Gotham",
    description: "Definitely a dog, no doubt about it.",
  },
];

export const blogs = [
  {
    author: "Abhisek Sarda",
    date: "14 Jan 2020",
    title: "Why can't you leave a good thing alone?",
    src: "https://source.unsplash.com/random",
  },
  {
    author: "Abhisek Sarda",
    date: "15 Nov 2016",
    title:
      "Noteworthy or Not-worthy? A Design Critique of the new Rs. 2,000 note",
    src: "https://source.unsplash.com/random",
  },
];

export const HOME = {
  get headingOne() {
    return 'Opposite works with emerging companies to build brands and design experiences';
  },
  get headingTwo() {
    return 'See Full Portfolio'
  },
  get headingThree() {
    return 'We work with challenger brands on breaking status quo. <br /> About Us';
  }
}

export const ABOUT = {
  get headingOne() {
    return 'About Opposite'
  },
  get headingTwo() {
    return 'We work with challenger brands on breaking the status quo.'
  },
  get headingThree() {
    return "We've built brands and experiences that you love. Brands your see everywhere,everyday, and brands that you've never heard about - but are leaders in their industry" 
  },
  get headingFour() {
    return 'Focussing on projects that requires us to put our heart and soul into them'
  },
  get headingFive() {
    return 'We work with small brands on big projects, not big brands on small projects.'
  },
  get headingSix() {
    return "We've never been very excited about working with a large well-known brand on a small marketing project just to get them on our portfolio. We'd much rather work with founders and creators to build a new brand."
  },
  get headingSeven() {
    return 'Domain-agnostic. With experience across 20+ industries'
  },
  get headingEight() {
    return 'Artificial Intelligence, Automobile, Consumer Tech, Cultural, Ecommerce, Education, Enterprise, Entertainment, Events, Fashion, Financial Services, Food & Beverages, Hardware, Healthcare + Pharma, Hospitality, Media, Real Estate, Retail, SaaS, Technology, Research, Telecom, Travel, Venture Capital'
  },
  get headingNine() {
    return 'Meet the Team'
  }
};

export const CAREERS = {
  get headingOne() {
    return 'Careers at Opposite'
  },
  get headingTwo() {
    return 'When we say we’re the best to work with, we mean it. The only thing missing is you.'
  },
  get headingThree() {
    return 'Current openings, in Bombay'
  },
  get headingFour() {
    return 'Show up, make incredible work, and live the life you want'
  },
  get headingFive() {
    return 'We cherish the joys of creating and crafting, of seeing our work come alive.'
  },
  get headingSix() {
    return 'We work with our hands. And our minds.'
  },
  get headingSeven() {
    return 'We work with our hands. And our minds.'
  },
  get headingEight() {
    return 'Lots of beer to drink too'
  },
  get headingNine() {
    return 'We cherish the joys of creating and crafting, of seeing our work come alive.'
  }
}

export const FOOTER = {
  get home() {
    return 'Ready to start a project? <br /> Get in Touch';
  },
  get about() {
    return 'Want to join the team? <br /> See Career Openings'
  },
  get careers() {
    return 'Get to know us better. <br /> About us'
  }
}
