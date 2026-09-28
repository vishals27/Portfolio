import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";


const experiences = [
    {
        id: 1,
        role: "Software Developer",
        company: "Cogitate Technology Solutions",
        duration: "May 2023 – Present",
        responsibilities: [
            "Developed and maintained enterprise insurance applications using C#, ASP.NET Core, ASP.NET MVC, React.js, JavaScript, and SQL Server.",
            "Built and enhanced RPS insurance workflows covering quote, bind, endorsement, renewal, cancellation, reinstatement, and multi-policy processing.",
            "Developed and integrated REST APIs using .NET Core, Entity Framework, LINQ, and SQL Server for policy, form, and business-process operations.",
            "Implemented Azure Functions for asynchronous processing, document generation, and background business workflows, integrating with .NET Core APIs and external services.",
            "Built and enhanced React.js-based dynamic forms and UI components, integrating frontend workflows with backend APIs and insurance business rules.",
            "Implemented document-generation workflows using Azure Functions, .NET Core APIs, and template-based document processing.",
            "Worked on Low-Code/No-Code insurance configuration features covering forms, fees and taxes, rate factors, underwriting questions, carrier, and product-specific functionality.",
            "Performed production support, debugging, issue analysis, deployment activities, and client-facing technical support across UAT and production environments."
        ]
    },
    {
        id: 2,
        role: "Associate Developer",
        company: "Cogitate Technology Solutions",
        duration: "May 2022 – Apr 2023",
        responsibilities: [
            "Developed insurance-domain applications using C#, ASP.NET MVC, JavaScript, jQuery, HTML, CSS, and SQL Server.",
            "Implemented dynamic insurance forms and business functionality on a Low-Code/No-Code platform based on BRD and business requirements.",
            "Developed and enhanced APIs for form generation, policy workflows, validation, and data processing using .NET technologies.",
            "Worked on SQL Server queries, stored procedures, data validation, and policy-related data processing for insurance workflows.",
            "Implemented JavaScript-based validations, conditional logic, auto-fill functionality, and reusable form components.",
            "Supported integration of frontend forms with backend APIs and contributed to enhancements across multiple Commercial Lines of Business.",
            "Participated in debugging, defect resolution, UAT support, deployments, and production issue analysis while maintaining existing application functionality."
        ]
    }
];



const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience__container">
                {experiences.map(({ id, role, company, duration, responsibilities }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="experience__item"
                    >
                        <div className="desc">
                            <h3 className="experience__role">{role}</h3>
                            <p className="experience__company">{company}</p>
                            <p className="experience__duration">{duration}</p>
                        </div>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="experience__responsibilities"
                        >
                            {responsibilities.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
