// @flow

class Resume {
  constructor() {
    this.firstName = 'Vishvas';
    this.lastName = 'Nagpal';
    this.email = 'vishvas.nagpal@gmail.com';
    this.mobile = '+91-9555411847';
    this.location = 'Delhi/India';
    this.socialProfiles = [
      { key: 'LinkedIn', value: 'https://www.linkedin.com/in/vishvasnagpal/' },
      { key: 'Git hub', value: 'https://github.com/vishvasNagpal' },
    ];
  }

  description = `I am Vishvas Nagpal. I am a Frontend Developer. I started my career in Jan 2013 by writing HTML and CSS.But I always
      loved Scripting. Along with time, I discovered a lot of things including JS, NodeJS, ExpressJs, ReactJS, Redux, HTML5, CSS3, SASS
      and other FrontEnd Technologies (Web/Mobile). I have experience in developing, Structuring and defining the architecture of
      challenging projects. I always push myself towards accepting challenges, time management, and leadership.`;


  languagesAndTechnologies = ['ReactJs', 'React-Native', 'NodeJs', 'Redux', 'JavaScript', 'ES6', 'HTML', 'CSS', 'JQuery', 'Sencha Touch'];

  keySkills = ['Frontend Technologies', 'Web Development', 'Mobile Apps', 'Responsive Designs', 'Mobile First', 'Offline First Apps'];

  competencies = ['Teamwork', 'Leadership', 'Time Management', 'Team Management'];

  organisations = [
    {
      name: 'Noon.com',
      designation: 'Sr. Software Developer',
      dateOfJoining: { month: 'July', year: '2017' },
      dateOfLeaving: null,
      currentOrganisation: true,
      responsibilities: `I am working with Noon.com as a Frontend Developer. My responsibility mainly revolves around working on the mobile
      application involved with multiple projects.`,
    },
    {
      name: 'Wize Commerce India Private Limited',
      designation: 'Sr. Software Developer',
      dateOfJoining: { month: 'Aug', year: '2015' },
      dateOfLeaving: { month: 'July', year: '2017' },
      currentOrganisation: false,
      responsibilities: `I worked for Wize Commerce(Nextag.com) as a Frontend Developer. My responsibility mainly revolved around both
       Mobile and Web Applications. I took part the complete transformation of all the projects involved, from Java technology to NodeJs.`,
    },
    {
      name: 'Zend Talent Development Private Limited',
      designation: 'Software Developer',
      dateOfJoining: { month: 'May', year: '2013' },
      dateOfLeaving: { month: 'Aug', year: '2015' },
      currentOrganisation: false,
      responsibilities: `I worked for Zend Talent(Hirestorm.com) as a Frontend Developer. My responsibility mainly revolved around both
       Mobile and Web Applications.`,
    },
  ];

  projects = [
    {
      name: 'Noon Express (Logistics)',
      description: `Noon Express is a logistics solution. My role in the project is to take care of the mobile applications involved
       in the project, which revolves around defining the structure and managing flow of the application.`,
      technologies: ['React Native', 'Redux', 'Javascript', 'ES6', 'Ajax', 'CSS', 'JSON', 'etc'],
    },
    {
      name: 'Nextag (Price Comparision Engine)',
      description: `Nextag is a Price Comparison Engine. My Role in this project was a Frontend Developer Which includes Making the
       Architectural Application Design, defining the structure, Managing the data from server, Leading the team.`,
      technologies: ['Nodejs', 'ReactJS', 'ExpressJs', 'Javascript', 'MVC', 'Sass', 'CSS3', 'ECMA6', 'JSON', 'Ajax', 'etc'],
    },
    {
      name: 'Hirestorm Mobile Application',
      description: `Hirestorm is an Applicant Tracking System(Mobile Application). which offers one solution for everything like
       Talent Pools, Job Posting, Social Recruiting, and Agency Managemen. I was responsible for taking care of the end to end development
       of the mobile application.`,
      technologies: ['Sencha Touch', 'HTML5', 'CSS', 'JavaScript', 'SASS', 'AJAX', 'JSON', 'Photoshop'],
    },
    {
      name: 'Hirestorm Web Application',
      description: `HireStorm is an Applicant Tracking System, which offers one solution for everything in the system like Talent Pools,
       Job Posting, Social Recruiting, and Agency Management. I was responsible for taking care of the front end of the application.`,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Jquery', 'SASS', 'Jquery UI', 'Bootstrap', 'Javascript Plugins', 'Photoshop'],
    },
  ];

  education = [
    {
      courseName: 'Master of Computer Applications',
      collageName: 'Swami Devi Dayal Institute of Engg.',
      completedYear: '2013',
    },
    {
      courseName: 'Bachelor of Computer Applications',
      collageName: 'Guru Jambheshwer University',
      completedYear: '2010',
    },
  ]

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getContactDetails() {
    return {
      email: this.email,
      mobile: this.mobile,
      location: this.location,
      socialProfiles: this.socialProfiles,
    };
  }

  getDescription() {
    return this.description;
  }

  getSkills() {
    return [
      {
        key: 'Languages and Technologies',
        skills: this.languagesAndTechnologies,
      },
      {
        key: 'Key Skills',
        skills: this.keySkills,
      },
      {
        key: 'Competencies',
        skills: this.competencies,
      },
    ];
  }

  getOrganisations() {
    return this.organisations;
  }

  getProjects() {
    return this.projects;
  }

  getEducation() {
    return this.education;
  }
}

export default Resume;
