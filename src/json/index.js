const avatar = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/profile.png');

const info = {
  about: {
    avatar,
    getAvatar: () => {
      const a = avatar;
      delete a.toString;
      delete a.images;
      return a;
    },
    name: 'Jonathan Lovera',
    title: 'Full-stack Developer',
    description: 'I am a developer who loves new challenges.', // <br /><span class='hide-on-small-only'>I am always seeking to improve myself and my craft.</span>",
    sections: [
      {
        title: 'Coding',
        description:
          "Quality software should always have clean code. I am passionate about writing code that is easy to read, easy to test, and easy to change. This website, for example, is rendered from one <a href='https://github.com/jonlov/jonlov.github.io/blob/master/src/json/index.js' target='_BLANK'>JSON file</a>.",
        image: 'code.png',
      },
      {
        title: 'Design',
        description:
          'As a developer, I work closely with designers to bring my code to life. Responsive web design and tasteful formatting allows each website to be rendered beautifully on any device.',
        image: 'design.png',
      },
      {
        style: {
          backgroundColor: '#130500',
          color: '#fff',
        },
        description:
          'I am a very creative person.  I love to solve problems, come up with new ideas, and create software that makes a difference.',
        descriptionClass: 'center-align',
        image: 'ideas.png',
      },
    ],
    pitchs: ["I am ready for new challenges, do you have one for me? <br /> Let's get to work!"],
    skills: {
      Backend: ['Java', 'NodeJS', 'Ruby on Rails', 'PHP'],
      Frontend: [
        'HTML5',
        'CSS3',
        'JQuery',
        'ReactJS',
        {
          icon: 'angular',
          name: 'AngularJS',
        },
        'Bootstrap',
        'Materialize',
      ],
      Databases: ['Mysql', 'MongoDB'],
      CMS: ['WordPress'],
      DevTools: ['Sass', 'Less', 'Bower', 'Webpack', 'Gulp', 'Grunt', 'Git'],
      DevOps: ['AWS', 'Heroku', 'Openshift', 'Digital Ocean'],
      Design: [
        'UI',
        'UX', //,"IA"
      ],
    },
    phone: '+61411063652',
    phoneBeautified: '+(61) 411 063 652',
    email: 'hello@jonlov.com',
    github: 'jonlov',
    gitlab: '0n',
  },
  projects: [
    {
      title: 'FlowerUP',
      description: '',
      url: 'https://flowerup.es',
      avatar: 'flowerUP.png',
      images: [],
      skills: ['Ruby on Rails', 'PostgreSQL', 'JQuery', 'Css3', 'Html5'],
    },
    {
      title: 'Divorce Negotiations',
      description: '',
      url: 'http://divorcenegotiations.com.au',
      avatar: 'divorceNegotiations.png',
      images: [],
      skills: ['PHP', 'ReactJS', 'Css3', 'Html5'],
    },
    {
      title: 'Klobic',
      description: '',
      url: 'https://klobic.com',
      avatar: 'klobic.png',
      images: [],
      skills: ['PHP', 'MySQL', 'ReactJS', 'JQuery', 'Css3', 'Html5'],
    },
    {
      title: 'Rudimentary',
      description: '',
      url: 'https://rudimentary.com.au',
      avatar: 'rudimentary.png',
      images: [],
      skills: ['JQuery', 'Css3', 'Html5'],
    },
    {
      title: 'Angelina',
      description: '',
      url: 'https://jonlov.github.io/Angelina',
      avatar: 'angelina.png',
      images: [],
      skills: ['PHP', 'JQuery', 'Css3', 'Html5'],
    },
    {
      title: 'Jhon Music',
      description: '',
      url: 'https://jonlov.github.io/Jhon-Music',
      avatar: 'jhon-music.png',
      images: [],
      skills: ['PHP', 'JQuery', 'Css3', 'Html5'],
    },
    {
      title: 'Yesy Milano',
      description: '',
      url: 'https://jonlov.github.io/Yesy-Milano',
      avatar: 'yesy-milano.png',
      images: [],
      skills: ['PHP', 'AngularJS', 'Css3', 'Html5'],
    },
    {
      title: 'Anjully Lozano',
      description: '',
      url: 'http://anjullylozano.com',
      avatar: 'anjully-lozano.png',
      images: [],
      skills: ['WordPress', 'PHP', 'MySQL', 'Css3', 'Html5'],
    },
  ],
};

// Let webpack compile all project images
// and then substitute each avatar on each project
// with the hash of the new compiled image
info.projects.map((project, index) => {
  if (project.avatar) {
    const projectAvatar = require(`responsive-loader?placeholder=true&name=./img/portfolio/[hash].&sizes[]=400&sizes[]=600&sizes[]=800!img/portfolio/${
      project.avatar
    }`);
    project.avatar = projectAvatar;
    info.projects[index] = project;
  }
});

// Let webpack compile all sections images
// and then substitute each avatar on each section
// with the hash of the new compiled image
info.about.sections.map((section, index) => {
  if (section.image) {
    const sectionImage = require(`responsive-loader?placeholder=true&name=./img/sections/[hash].&sizes[]=400&sizes[]=550&sizes[]=700!img/sections/${
      section.image
    }`);
    section.image = sectionImage;
    info.about.sections[index] = section;
  }
});

export default info;
