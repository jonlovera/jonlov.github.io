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
        description: "I'm a developer that loves to learn and new challenges.",
        skills: {
            Backend: [
                'Java', 'NodeJS', 'Ruby on Rails', 'PHP'
            ],
            Frontend: [
                'HTML5',
                'CSS3',
                'JQuery',
                'ReactJS',
                'AngularJS',
                'Boostrap',
                'Materialize'
            ],
            Databases: [
                'Mysql', 'MongoDB'
            ],
            CMS: ['WordPress'],
            DevTools: [
                'Sass',
                'Less',
                'Bower',
                'Webpack',
                'Gulp',
                'Grunt',
                'Git'
            ],
            DevOps: [
                'AWS', 'Heroku', 'Openshift', 'Digi'
            ],
            Design: [
                'UI', 'UX' //,'IA'
            ]
        },
        phone: "+61411063652",
        phoneBeautified: "+(61) 411 063 652",
        email: "jonlovera18@gmail.com",
        github: "jonlov",
        gitlab: "0n"
    },
    projects: [
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
    let projectAvatar = require(`responsive-loader?placeholder=true&name=./img/portfolio/[hash].&sizes[]=400&sizes[]=600&sizes[]=800!img/portfolio/${project.avatar}`);
    project.avatar = projectAvatar;
    info.projects[index] = project;
});

export default info;
