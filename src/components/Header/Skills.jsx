import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
    "C#",
    ".NET Core",
    ".NET Framework",
    "REST APIs",
    "Azure Cloud",
    "EF Core",
    "SQL",
    "JavaScript",
    "TypeScript",    
    "React.js",
    "Next.js",
    "Redux",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
    "Node.js",
    "Azure Functions",
    "GraphQL API",
    "RESTful APIs",
    "JSON",
    "Azure Cosmos DB",
    "APIM",
    "MongoDB",
    "Jest",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Jenkins",
    "Docker",
    "Generative AI",
    "Cursor",
    "ChatGPT"
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h1>Skills</h1>
            <div className="skills-container">
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="skills-list"
                >
                    {skills.map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="skill-item"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Skills;
