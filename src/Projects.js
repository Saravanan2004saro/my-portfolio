import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'CODE AUTOMATION AND EVALUATION: The Code Automation and Evaluation project aims to streamline the software development process by automating code generation, testing, and evaluation. By leveraging advanced algorithms and machine learning techniques, this project provides developers with tools to automatically generate code snippets based on user specifications and coding standards. Additionally, it incorporates robust evaluation metrics to assess code quality, efficiency, and security vulnerabilities. The ultimate goal is to enhance productivity, reduce manual errors, and facilitate continuous integration and deployment, allowing developers to focus on creativity and innovation rather than repetitive tasks. ' },
        { title: 'Project 2', description: 'AI RECEPTIONIST:The AI Receptionist project is designed to enhance patient experience and streamline operations in hospitals. Utilizing advanced artificial intelligence, this virtual receptionist assists patients with scheduling appointments, providing information about services, and answering common queries in real-time. The AI system can efficiently manage patient check-ins, direct them to the appropriate departments, and even facilitate communication with medical staff. By automating these tasks, the AI Receptionist reduces wait times, minimizes administrative burdens, and allows healthcare professionals to focus more on patient care, ultimately improving the overall efficiency of hospital operations. ' },
        
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
