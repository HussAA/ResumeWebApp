import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Download, FileDown, MailPlus } from "lucide-react";

export const DATA = {
  name: "Hussain Alnakhli",
  initials: "HA",
  url: "https://HussainAlnakhli.com",
  location: "Ontario, Canada",
  locationLink: "https://www.google.com/maps/place/ottawa",
  description:
    "Junior Full Stack Web Developer. Building Solutions & Making Tech Accessible.",
  summary:
    "At the end of 2021, During my IT program, I discovered a passion for web development, which led me to specialize in React. Since then, I have dedicated myself to becoming a skilled web developer by creating multiple websites and expanding my knowledge through online courses. I have always been able to adapt myself to whatever I put my mind to.",
  avatarUrl: "https://avatar.iran.liara.run/public/7",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Postgres",
    "Docker",
    "Linux",
    "Figma",
    "NestJS",
    "Linux",
    "Shopify",
    "Wordpress",
    "Wix",
    "Microsoft Office",
    "Software & Hardware Repairs",
    "Facebook & Google Ads",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mah.hussaina@gmail.com",
    tel: "+16138932003",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hussaa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hussainalnakhli/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "email",
        url: "mailto:mah.hussaina@gmail.com",
        icon: MailPlus,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Hussain Alnakhli - Resume.pdf",
        icon: Download,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Tech Axis Solutions (Founder)",
      href: "/",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: "/atomic.png",
      start: "July 2024",
      end: "Present",
      description:
        ["Founded a software company with currently 2 employees with three main divisions: a local services marketplace platform, a CRM platform for tailoring stores, and a department dedicated to collaborating with businesses to create custom software solutions.",
        ]
    },
    {
      company: "Solv-it",
      badges: [],
      href: "https://solv-it.tech",
      location: "Remote",
      title: "Junior Web Developer",
      logoUrl: "/light-bulb.svg",
      start: "Jan 2022",
      end: "Present",
      description:
        ["Currently working on a complex local service marketplace web app for booking services like home cleaning, using Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, REST API, PostgreSQL, AWS, and Figma for designing.",
          "I created several React auto-detail websites.",
          "Building a custom CRM Application for tailoring clothing stores in the middle east. Tech-Stack used: React, HTML/CSS, JavaScript, Node.js, GraphQL, and Strapi.",
        ]
    },
    {
      company: "CompuFix Kingston",
      href: "https://compufixkingston.com/",
      badges: [],
      location: "Kingston, Ontario",
      title: "Full Stack Web Developer Internship",
      logoUrl: "/CompuFix.png",
      start: "May 2023",
      end: "Aug 2023",
      description:
        ["Developed backend website feature, Heatmap, using React, Node.js, Express.js, PostgreSQL, Maps JavaScript API.", "Implement changes to backend Strapi website, ensuring seamless integration and functionality."]

    },
    {
      company: "CompuFix Kingston",
      href: "https://compufixkingston.com/",
      badges: [],
      location: "Kingston, Ontario",
      title: "IT Specialist Co-op",
      logoUrl: "/CompuFix.png",
      start: "Jan 2023",
      end: "April 2023",
      description:
        ["Diagnose and repair hardware/software issues on desktops and Apple products, ensuring optimal performance.", "Implement necessary changes on WordPress website, enhancing user experience and functionality."]
    },
    {
      company: "Amazon",
      href: "https://sell.amazon.ca/",
      badges: [],
      location: "Remote",
      title: "Amazon FBA Seller",
      logoUrl: "/amazon.png",
      start: "May 2021",
      end: "Dec 2021",
      description:
        ["Managed product sourcing, listing creation, inventory, and marketing for an Amazon FBA business.", "Sold products to customers in the USA, Mexico, and Canada.",]
    },
    {
      company: "Shopify",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Remote",
      title: "E-commerce Business Owner",
      logoUrl: "/shopify.svg",
      start: "Jan 2019",
      end: "Sep 2020",
      description:
        ["Built and managed a Shopify store specializing in fitness products, handling global sales and customer service.", "Coordinated with Asian manufacturers for product sourcing and shipping.", "Executed social media marketing strategies, including Facebook and Google ads."]
    },
    {
      company: "YouTube",
      href: "https://www.youtube.com/",
      badges: [],
      location: "Remote",
      title: "Content Creator - Youtuber",
      logoUrl: "/youtube.png",
      start: "Sep 2014",
      end: "Aug 2015",
      description:
        ["Created and managed video content on YouTube, including scripting, filming, editing, and engaging with fans. Achieved 2 million views through high-quality content and active audience interaction."]
    },
  ],
  education: [
    {
      school: "Harvard University",
      href: "https://pll.harvard.edu/",
      degree: "Computer Science Certificate",
      logoUrl: "/Harvard-Logo.png",
      start: "Sep 2024",
      end: "Dec 2024",
    },
    {
      school: "St. Lawrence College",
      href: "https://www.stlawrencecollege.ca/",
      degree: "Computer Systems Technician",
      logoUrl: "/slc-logo.jpg",
      start: "Sep 2021",
      end: "April 2023",
    },
    {
      school: "Kingston Collegiate and Vocational Institute",
      href: "https://en.wikipedia.org/wiki/Kingston_Collegiate_and_Vocational_Institute",
      degree: "High School Diploma",
      logoUrl: "/kcvi.jpg",
      start: "Sep 2014",
      end: "June 2018",
    },

  ],
  projects: [
    {
      title: "Yalla Marketplace",
      href: "https://github.com/HussAA/LocalServiceWebApp",
      dates: "July 2024 - Present",
      active: true,
      description:
        "An innovative on-demand platform connecting busy individuals with reliable local service providers. Users can easily browse, book, and pay for services like home cleaning, car repairs, delivery, and personal care—all in just a few taps.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "NestJS",
        "TailwindCSS",
        "AWS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HussAA/LocalServiceWebApp",
          icon: <Icons.github className="size-3" />,
        },
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      video: "/Project1.mp4",
    },
    {
      title: "Dima Al-urouba Turnery",
      href: "https://magicui.design",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "The website showcases machine parts such as CNC, lathes, drills, and offers gearbox maintenance services.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://dima-al-urouba-turnery2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HussAA/dima_mechanicalweb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Project2.mp4",
    },
    {
      title: "Detailxpertz",
      href: "https://detailxpertz.netlify.app/",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "DetailXpertz is a modern web app crafted for auto detailing services. It lets users explore services, view pricing, and easily book appointments, all designed to provide a seamless experience for clients seeking expert car care.",
      technologies: [
        "Gatsby.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://detailxpertz.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HussAA/detailxpertz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Project4.mp4",
    },
    {
      title: "Auto Detail Template",
      href: "https://autodetail-template.netlify.app/",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "professional template designed for auto detailing businesses. Showcase services, pricing, and customer testimonials, with easy booking options to attract and engage clients.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",

      ],
      links: [
        {
          type: "Website",
          href: "https://autodetail-template.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HussAA/AutoDetailTemplate",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Project3.1.mp4",
    },
  ],
  Languages: [
    {
      title: "English",
      dates: "",
      location: "",
      description:
        "Fluent",
      image:
        "/english.png",
      links: [],
    },
    {
      title: "Arabic",
      dates: "",
      location: "",
      description:
        "Native",
      image:
        "/arabic.png",
      links: [],
    },
  ],
  certificate: [
    {
      title: "Transport Canada level A security clearance",
      dates: "2024",
      location: "Ottawa, ON",
      description:
        "",
      image:
        "/Maple_Leaf.svg.png",
      links: [],
    },
    {
      title: "Airside Vehicle Operator's Permit",
      dates: "2024",
      location: "Ottawa, ON",
      description:
        "",
      image:
        "/icon_purple.png",
      links: [],
    },
    {
      title: "Restricted Operator Certificate - Aeronautical (ROC-A)",
      dates: "2024",
      location: "Ottawa, ON",
      description:
        "",
      image:
        "/Maple_Leaf.svg.png",
      links: [],
    },
  ],
} as const;
