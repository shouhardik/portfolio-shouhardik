/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shouhardik's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shouhardik Saha Portfolio",
    type: "website",
    url: "http://shouhardiksaha.com/",
  },
};

//Home Page
const greeting = {
  title: "Shouhardik Saha",
  logo_name: "ShouhardikSaha",
  nickname: "Hardy",
  subTitle:
    "A passionate developer who always looks forward to work on innovative projects!",
  resumeLink:
    "https://drive.google.com/file/d/1I4vvubGkyceMZQtSeMwtXdTDoU59WQkS/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/shouhardik",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shouhardik",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shouhardik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:shouhardiksaha@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI models for detecting skin cancer & alzheimer",
        "⚡ Complex quantitative modelling for environment sustainability & intelligent trafiic systems",
        "⚡ Experience of working with multiple Computer Vision projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing web applications using React, Flask & SpringBoot",
        "⚡ Working on databases like MongoDB, PostgresSQL and mySQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of database",
        "⚡ Setting up EC2 instances, Load Balancer, Storage Volumes & Routing Tables on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/ss4985/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/work",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, San Diego",
      subtitle: "M.S. in Computer Science",
      logo_path: "ucsd1.png",
      alt_name: "UCSD",
      duration: "Sep. 2024 - Jun. 2026",
      descriptions: [
        "⚡Relevant Courses: Probabilistic Reasoning and Learning, Statistical NLP, Recommender System & Web Mining, Computer Vision, Deep Generative Models",
        "⚡Actively looking out for research oppurtunities on campus in the fields of AI,ML & Software Development",
      ],
      website_link: "https://ucsd.edu/",
    },
    {
      title: "SRM Institute of Science & Technology",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "srm.png",
      alt_name: "SRM IST",
      duration: "Jun. 2019 - May 2023",
      descriptions: [
        "⚡ Relevant Courses: Data Structures & Algorithms, Probability & Queuing Theory, Data Mining & Analytics, Artificial Intelligence, Database Management Systems, Object Oriented Programming, Compiler Design, Neuro Fuzzy & Genetic Programming",
        "⚡ Apart from this, I have also done research assistantship under Dr. Arthi B. As part of it, I have worked on computer vision in the areas of healthcare & intelligent traffic systems. I interned under Dr. R. Rajkumar at BrainwaveS Neurorehab Solutions, where I contributed to developing a proof-of-concept health monitoring game system for stroke survivors",
        "⚡ During my time at university, I acted as a workshop facilitator for clubs like Team Envision and IOT Alliance and also conducted recruitment procedure",
        "⚡ Scored GPA: 3.98/4.0",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "- Damien Carey",
      logo_path: "oracle.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1PsbUuy4KtYSFZ91nvyk1ASnH4q1pdsLf/view",
      alt_name: "Oracle University",
      color_code: "#8C151599",
    },
    {
      title: "AWS Essential Training for Developers",
      subtitle: "- LinkedIn",
      logo_path: "link.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/f2082250724cb466ed5e1172ca81aadb5f0408f41229d2bea2a9ec4a5616404c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAf1jw2CiSR%2BSzmQhppRayg%3D%3D",
      alt_name: "linkedin",
      color_code: "#00000099",
    },
    {
      title: "Building Web Applications in PHP",
      subtitle: "- University of Michigan",
      logo_path: "michigan.png",
      certificate_link:
        "https://drive.google.com/file/d/1rgz5HrJ-KIVMCSWLsR-TOzuHlymfYG5A/view",
      alt_name: "Michigan",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction to Programming with MatLab",
      subtitle: "- Vanderbilt University",
      logo_path: "vanderbilt.png",
      certificate_link:
        "https://drive.google.com/file/d/1RpA_d_K1TkkBgGLHoTdL5opBGNS5jb9W/view",
      alt_name: "Vanderbilt",
      color_code: "#0C9D58",
    },
    {
      title: "Getting started with Python",
      subtitle: "- LinkedIn",
      logo_path: "link.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/01b6432bdb46361090df11d285d3b724107d3ee00d5cce26e67d5bb0e77d3ac4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3hLaWd%2FgRHe%2FPKviDJ1euQ%3D%3D",
      alt_name: "linkedin",
      color_code: "#00000099",
    },
    {
      title: "REST API (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "hack.png",
      certificate_link: "https://www.hackerrank.com/certificates/24e362f47522",
      alt_name: "hackerRank",
      color_code: "#FFFFE0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a developer into the areas of full-stack, machine learning, cloud & game development",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Analyst",
          company: "Bounteous Digital Pvt. Ltd.",
          company_url: "https://www.bounteous.com/",
          logo_path: "bounteous.png",
          duration: "May 2023 - May 2024",
          location: "Chennai, TN, India",
          description:
            "Worked on back-end development using Spring Boot, utilizing MVC architecture to manage client project details like resource allocation, billing data (weekly/monthly), hierarchical effort distribution, work breakdown structure. Enhanced front-end capabilities to identify role redundancies leveraging React and Redux. Worked on developing 3D models related to Augmented Reality in the Healthcare Industry. Hands on experience on Three.js, A-Frame. Employed Agile methodology for project management and Git for source control",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Bounteous Digital Pvt. Ltd.",
          company_url: "https://www.bounteous.com/",
          logo_path: "bounteous.png",
          duration: "Jan. 2023 - May 2023",
          location: "Chennai, TN, India",
          description:
            "Developed an e-commerce application using React, Node.js for online shopping. Developed customize cart data and search bar functionality using Debouncing Time Effect to reduce API calls. Developed food ordering app to fetch nearby restaurants using Java with Spring Boot",
        },
        {
          title: "Machine Learning Intern",
          company: "HighRadius",
          company_url: "https://www.highradius.com/",
          logo_path: "HighRadius.png",
          duration: "Jan. 2022 - Apr. 2022",
          location: "Remote",
          description:
            "Worked with machine learning algorithms for classification and regression tasks for data analysis to predict the payment date of an invoice. Built and deployed an AI Enabled B2B Cloud Application to communicate between buyers and sellers using Java, Servlets, and MySQL",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Associate Developer",
          company: "IOTA",
          company_url: "https://www.iotalliance.in/",
          logo_path: "iota_logo.png",
          duration: "Oct. 2020 - Oct. 2021",
          location: "Chennai, TN, India",
          description:
            "Explore software & hardware solutions as a memeber of the club for university projects",
          color: "#4285F4",
        },
        {
          title: "Developer",
          company: "Envision",
          company_url: "https://envision.aaruush.org/",
          logo_path: "envision.png",
          duration: "Aug. 2019 - Jun. 2020",
          location: "Chennai, TN, India",
          description:
            "Explored on Decentralized based solutions in Blockchain. Worked on IOT, programming. Also acted as a program facilitator for technical fest Aarush and Recruitment process",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name:
        "Skin Cancer Classifier with Implementation of Blockchain for Storing Records",
      createdAt: "2023-05-28T16:26:54Z",
      description: "Paper accepted & published at ICIoT 2023",
      url:
        "https://drive.google.com/file/d/1ik48poA2f7pWmbG9byUXtclNO37IzPN2/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shouhardik.jpg",
    description:
      "I am available on social media. Lets collaborate on some cool innovative AI, ML, Fullstack & Cloud projects",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I like to post technical content.",
    link: "https://medium.com/@shouhardiksaha",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "9500 Gilman Dr, La Jolla, CA 92093, United States",
    locality: "La Jolla",
    country: "USA",
    region: "California",
    postalCode: "9500",
    streetAddress: "Gilman Dr",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/25CZTwtcU3zoGhPT7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
