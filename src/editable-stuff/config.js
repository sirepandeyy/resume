// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aman",
  middleName: "",
  lastName: "Pandey",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sirepandeyy",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/photo/?fbid=1020831445006252&set=a.709555176133882",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sirepandey/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/aman-pandey-4988961b6/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/aman.jpeg"),
  imageSize: 375,
  message:
    "My name is Aman Pandey I'm a Full Stack Web Developer. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️. Aside from my Work, I like to create open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. In my free time you can find me watching movies or boxing",
  
  resume: "https://docs.google.com/document/d/1UBgZab1VQN1KHyvHlAwJF8n0HoLt44g5ndWkSnVakik/edit",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sirepandeyy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/aman.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/aman.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 70 },
    { name: "C/C++", value: 65 },
    { name: "Java", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "Api Development", value:60 },
    { name: "Nestjs Orm", value: 70},
    { name: "Nodejs", value:70 },
    { name: "JavaScript", value: 60 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Creativity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 70 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
   "Lets connect",
  email: "aman.pandey_cs18@gla.ac.in",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/trak.jfif'),
      date: 'June 2021 – Present',
    },

  ]
}

 //Blog SECTION
 const blog = {
   show: true,
 };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
