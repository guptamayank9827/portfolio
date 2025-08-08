//icons
import UTD from '../icons/utd.png';
import Fundwave from '../icons/fundwave.png';
import Pingal from '../icons/pingal.svg';

export const COMPANIES = {
  utd: {
    name: "The University of Texas at Dallas",
    location: "Richardson, TX, USA",
    logo: UTD
  },
  fundwave: {
    name: "Fundwave Technologies",
    location: "New Delhi, India",
    logo: Fundwave
  },
  pingal: {
    name: "Pingal Technologies",
    location: "Mumbai, India",
    logo: Pingal
  }
};

export const EXPERIENCES = [
  {
    keyword: "grader",
    role: "Computer Science Grader",
    type: "part",
    company: COMPANIES["utd"],
    startDate: "January 2024",
    endDate: "May 2025",
    works: [
      "Evaluated and designed assignment questions and comprehensive solutions for CS courses Discrete Mathematics, and Design and Analysis of Algorithms, ensuring alignment with course objectives and learning outcomes",
      "Resolved students' academic queries, providing clear explanations to strengthen conceptual understanding"
    ],
    summary: "Evaluated assignments and provided feedback to students, enhancing their understanding of core concepts in Discrete Mathematics and Algorithms."
  },
  {
    keyword: "staff",
    role: "Staff Engineer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "July 2022",
    endDate: "June 2023",
    works: [
      "Architected 2 microservices in Node.js, Express.js & MongoDB, containerized using Docker, decoupling critical functionalities from a monolithic server, reducing system latency by 20% for related API endpoints",
      "Led the Captable project from concept to deployment, enabling funds to forecast portfolios and investment returns, driving 1.4x customer growth for the product line.",
      "Planned and led 18 agile technical sprints, backlog grooming, and code reviews, ensuring adherence to clean code practices and on-time high-quality feature delivery"
    ],
    summary: "Led the development of microservices and the Captable project, enhancing system performance and driving customer growth."
  },
  {
    keyword: "senior",
    role: "Senior Engineer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "January 2021",
    endDate: "June 2022",
    works: [
      "Spearheaded the development of a Captable management tool using the MERN stack (MongoDB, Express.js, React.js, Node.js), empowering funds track equity ownership, contributing to 12% of the company's ARR",
      "Engineered 35 custom Excel functions using Office JavaScript API, enabling clients to generate real-time customizable reports, reducing manual reporting effort by 90%",
      "Designed, published, and maintained 8 reusable UI components using TypeScript, React.js, and Lit -html, seamlessly integrating into 5 internal products through CI/CD pipelines using Git workflows.",
      "Released and documented 24 RESTful OpenAPI endpoints using Typescript and YAML, published on Swagger, providing clients with efficient access to high-demand portfolio data"
    ],
    summary: "Led the development of a Captable management tool and engineered custom Excel functions, significantly enhancing client reporting capabilities."
  },
  {
    keyword: "full",
    role: "Full Stack Developer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "July 2019",
    endDate: "December 2020",
    works: [
      "Built a full-featured Dealflow dashboard using the MERN stack to streamline investment evaluation workflows, significantly enhancing decision-making efficiency for fund managers",
      "Enhanced the website's UI/UX using HTML, CSS, JS, and optimized the asset pipeline with Gulp tasks, reducing overall website size by 35% and improving page load speed by 25%",
      "Conceived a Gmail add-on using Google Apps Script to integrate users' email inboxes with the Dealflow product",
      "Boosted website discoverability by improving SEO performance, driving the company's website into the top 3 Google search results for 70% of targeted keywords, increasing inbound traffic and product discovery"
    ],
    summary: "Developed a Dealflow dashboard and optimized the company website, enhancing user experience and increasing inbound traffic."
  },
  {
    keyword: "analyst",
    role: "Data Analyst Intern",
    type: "intern",
    company: COMPANIES["pingal"],
    startDate: "May 2018",
    endDate: "July 2018",
    works: [
      "Deployed an automated web scraper using Selenium and BeautifulSoup to extract quarterly financial data for 500+ companies listed on the Bombay Stock Exchange",
      "Cleaned and analyzed over 10,000 data points using pandas and matplotlib to generate visual insights and forecast company performance trends"
    ],
    summary: "Developed an automated web scraper and analyzed financial data, providing insights into company performance trends."
  }
];