import { motion } from "framer-motion";
const projects = [
    {
      title: "Event Management App",
      description: "Developed a full-stack event management application using the MERN stack, enabling users to create, manage, and track events seamlessly. The platform includes user authentication, event scheduling, ticket booking, and real-time updates to enhance user engagement. The application provides a responsive UI for smooth interaction, with MongoDB for efficient data management, Express.js and Node.js for backend operations, and React for a dynamic front-end experience.",
      imgSrc: "/em.jpg.png",
      previewLink: "https://papaya-gumdrop-7407df.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/GUVI-FINAL-FE",
      beSource: "https://github.com/Mukesh25-dev/GUVI-CAPSTONE-PROJECT-BACKEND",
    },
    {
      title: "Help Your Trip – Travel Cost Estimator",
      description: "Help Your Trip is a front-end webpage built with HTML and CSS, designed to assist travelers in finding hotels and estimating trip costs for specific destinations. The platform displays available hotels along with pricing details, providing a simple and user-friendly interface for seamless trip planning.",
      imgSrc: "/t.jpg.png",
      previewLink: "https://firsttou-task.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Guvi-First-Task",
    },
    {
      title: "E-Courses – Online Learning Platform",
      description: "E-Courses is a responsive front-end webpage built using HTML and Tailwind CSS, designed to showcase various educational courses and student testimonials. With a clean and modern UI, the platform highlights available courses, student feedback, and key features in an engaging layout. The fully responsive design ensures seamless accessibility across all devices.",
      imgSrc: "/c.jpg.png",
      previewLink: "https://thriving-cranachan-c9f3c3.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Guvi-Second-Task",
    },
    {
        title: "ShopCart – React Shopping Cart",
      description: "ShopCart is a React and Tailwind CSS-powered front-end web application that showcases available products with a seamless shopping experience. Users can add and remove items from the cart while dynamically viewing pricing details. The clean UI and smooth interactions enhance the overall shopping experience.",
      imgSrc: "/Shopify_Cart_Engraving.jpg",
      previewLink: "https://tubular-khapse-51e88b.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/React-Router-task",
    },
    {
      title: "M-Watch – Movie Discovery Platform",
      description: "M-Watch is a React and Tailwind CSS-powered front-end web application that showcases a vast collection of movies. Users can browse through various movies and access detailed information about any specific movie they choose. With a sleek UI and seamless navigation, M-Watch offers an engaging and user-friendly experience for movie enthusiasts.",
      imgSrc: "/dUZtBcH.jpg",
      previewLink: "https://cool-malasada-d94c39.netlify.app/",
      feSource: "https://github.com/Mukesh25-dev/Movie-list-project",
    },
  ];
  
  const Project = () => {
    return (
      <section
        id="project"
        className="min-h-screen pt-24 bg-gradient-to-b from-white to-green-100 text-green-900 px-6 py-12"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">A journey through my recent work.</p>
        </div>
  
        <div className="flex flex-col gap-24 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="flex-1">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
  
                {/* Project Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
                    >
                      Preview
                    </a>
                    {project.feSource && (
                      <a
                        href={project.feSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 px-5 py-2 rounded-xl hover:bg-gray-300 transition"
                      >
                        FE Code
                      </a>
                    )}
                    {project.beSource && (
                      <a
                        href={project.beSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 px-5 py-2 rounded-xl hover:bg-gray-300 transition"
                      >
                        BE Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  };
  
  
  
  export default Project;
  