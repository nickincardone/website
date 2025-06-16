export interface Resume {
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  education: {
    school: string;
    date: string;
    degree: string;
    concentration: string;
  };
  experience: Array<{
    title: string;
    company: string;
    dates: string;
    bullets: string[];
  }>;
  languages: Array<{
    name: string;
    subSkills: string[];
  }>;
  skills?: Array<{
    name: string;
    subSkills: string[];
  }>;
}

const resume: Resume = {
  // ...existing code from resume.js...
};

export default resume;
