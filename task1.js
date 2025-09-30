// Biography using variables and objects
var name = "Muhammad Umer";
var age = 20;
var occupation = "Computer Science Student";

const biography = {
    name: name,
    age: age,
    occupation: occupation,
    address: {
        city: "Islamabad",
        country: "Pakistan"
    },
    education: {
        current: {
            degree: "Bachelor in Computer Science",
            institution: "Air University",
            year: 2025
        },
        interests: ["Programming", "Web Development", "AI/ML"]
    },
    skills: {
        programming: ["JavaScript", "Python", "C++"],
        frameworks: ["React", "Node.js"],
        databases: ["MongoDB", "MySQL"]
    }
};

console.log(`Hi, I'm ${biography.name}, a ${biography.age}-year-old ${biography.occupation}.`);
console.log(`I live in ${biography.address.city}, ${biography.address.country}.`);
console.log(`Currently pursuing ${biography.education.current.degree} at ${biography.education.current.institution}.`);
console.log(`My key skills include: ${biography.skills.programming.join(', ')}`);