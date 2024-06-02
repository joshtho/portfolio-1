import gala from "./assets/Gala.png"
import westay from "./assets/WeStay.png"
import medium from "./assets/Medium.png"

export const projects = [
    {
      name: "Gala",
      desc: `Web application that lets a user save data on their favorite artists and their artworks.`,
      img: { static: gala },
      highlights: [
        "Created React.js frontend with React-router-dom v6 to have seamless client-side navigation.",
        "Implemented Redux toolkit for state management and fetch calls to deliver better communication between components.",
        "Generated Ruby on Rails database with ActiveRecord and SQLite for an API with BCrypt for security."
      ],
      stack: "React - Ruby on Rails - Redux toolkit",
      repo: "https://github.com/joshtho/Gala",
      videoId: "Oj-Q_PpfJPM",
      url: ''
    },
    {
      name: "WeStay",
      desc: `A vacation application where users can save their favorite Airbnbs and Vrbos, ect...`,
      img: { static: westay},
      highlights: [
        "Built a React.js frontend with React-Router-dom v6 for seamless client-side navigation.",
        "Utilized a database with Ruby on Rails that uses ActiveRecord and SQL for an API with BCrypt for security."
      ],
      stack: "React - Ruby on Rails ",
      repo: "https://github.com/joshtho/WeStay",
      videoId: "nuQ-BWluMl4",
      url: ''
    },
    {
      name: "Medium",
      desc: `My Medium.com mainpage that contains all my technical blogs`,
      img: { static: medium },
      highlights: [
        
      ],
      stack: "",
      repo: "https://medium.com/@joshua.thompson0010",
      videoId: "",
      url: "https://medium.com/@joshua.thompson0010"
    },
]