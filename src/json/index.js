let avatar = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/profile.png');

let info = {
    about: {
        avatar: avatar,
        getAvatar: () => {
            let a = avatar;
            delete a.toString;
            delete a.images;
            return a;
        },
        name: "Jonathan Lovera",
        title: "Full-stack Developer",
        description: "I am a developer that loves learning and new challenges. <br /><span class='hide-on-small-only'>I am always seeking to improve myself and my craft.</span>",
        sections: [
            {
                description: "Writing clean code is a passion of mine and so a primary goal is to always write well designed code that is easy to change and also easy to test. I try to write my code in such a way that any other developer could easily understand. I always like to write reusable code. For example, this website is rendered from one JSON file. <div class='center-align'><a href='https://github.com/jonlov/jonlov.github.io/blob/master/src/json/index.js' target='_BLANK'>(Checkout JSON file)</a></div><br /><br /> It's not just important that the code works, the perfomance and the way it's aproaching the problem also make the difference.<div class='center-align'><a href='https://github.com/jonlov/jonlov.github.io' target='_BLANK'>(Have a look of this website code)</a></div>",
                image: "code.png"
            }, {
                description: "Design is not my core, but is my desire to share my ideas with the designers. So I deliver the software with a basic design. <br/><br/>When it comes to responsive web design, it's not an extra feature for me. I always create the websites in such a way that it can be viewed on any device.",
                image: "design.png"
            }, {
                style: {
                    backgroundColor: "#130500",
                    color: "#fff"
                },
                description: "I am a very creative person. So I always love to come up with new things and new ideas. I want to make things that make a difference.",
                descriptionClass: "center-align",
                image: "ideas.png"
            }
        ],
        pitchs: ["I am ready for new challenges, do you have one for me? <br /> Let's get to work!"],
        skills: {
            Backend: [
                "Java", "NodeJS", "Ruby on Rails", "PHP"
            ],
            Frontend: [
                "HTML5",
                "CSS3",
                "JQuery",
                "ReactJS", {
                    icon: "angular",
                    name: "AngularJS"
                },
                "Bootstrap",
                "Materialize"
            ],
            Databases: [
                "Mysql", "MongoDB"
            ],
            CMS: ["WordPress"],
            DevTools: [
                "Sass",
                "Less",
                "Bower",
                "Webpack",
                "Gulp",
                "Grunt",
                "Git"
            ],
            DevOps: [
                "AWS", "Heroku", "Openshift", "Digital Ocean"
            ],
            Design: [
                "UI", "UX" //,"IA"
            ]
        },
        phone: "+61411063652",
        phoneBeautified: "+(61) 411 063 652",
        email: "jonathan@rootplace.com",
        github: "jonlov",
        gitlab: "0n"
    },
    projects: [
            {
                title: "More projects coming",
                description: "",
                url: "",
                avatar: "",
                images: [],
                skills: []
            },
        {
            title: "Divorce Negotiations",
            description: "",
            url: "http://divorcenegotiations.com.au",
            avatar: "divorceNegotiations.png",
            images: [],
            skills: [
                "Css3",
                "PHP",
                "ReactJS",
                "JQuery",
                "Html5"
            ]
        },
        {
            title: "Klobic",
            description: "",
            url: "https://klobic.com",
            avatar: "klobic.png",
            images: [],
            skills: [
                "Css3",
                "PHP",
                "Mysql",
                "ReactJS",
                "JQuery",
                "Html5"
            ]
        }, {
            title: "Rudimentary",
            description: "",
            url: "https://rudimentary.com.au",
            avatar: "rudimentary.png",
            images: [],
            skills: ["JQuery", "Html5", "Css3"]
        }, {
            title: "Angelina",
            description: "",
            url: "http://angelinamusica.com",
            avatar: "angelina.png",
            images: [],
            skills: ["PHP", "JQuery", "Html5", "Css3"]
        }, {
            title: "Jhon Music",
            description: "",
            url: "https://jhonmusic.com",
            avatar: "jhon-music.png",
            images: [],
            skills: ["PHP", "JQuery", "Html5", "Css3"]
        }, {
            title: "Yesy Milano",
            description: "",
            url: "http://yesymilano.com",
            avatar: "yesy-milano.png",
            images: [],
            skills: ["PHP", "JQuery", "Html5", "Css3"]
        }, {
            title: "Anjully Lozano",
            description: "",
            url: "http://anjullylozano.com",
            avatar: "anjully-lozano.png",
            images: [],
            skills: ["WordPress", "PHP", "Html5", "Css3"]
        }
    ]
}

// Let webpack compile all project images
// and then substitute each avatar on each project
// with the hash of the new compiled image
info.projects.map((project, index) => {
    if (project.avatar) {
        let projectAvatar = require(`responsive-loader?placeholder=true&name=./img/portfolio/[hash].&sizes[]=400&sizes[]=600&sizes[]=800!img/portfolio/${project.avatar}`);
        project.avatar = projectAvatar;
        info.projects[index] = project;
    }
});

// Let webpack compile all sections images
// and then substitute each avatar on each section
// with the hash of the new compiled image
info.about.sections.map((section, index) => {
    if (section.image) {
        let sectionImage = require(`responsive-loader?placeholder=true&name=./img/sections/[hash].&sizes[]=400&sizes[]=550&sizes[]=700!img/sections/${section.image}`);
        section.image = sectionImage;
        info.about.sections[index] = section;
    }
});

export default info;
