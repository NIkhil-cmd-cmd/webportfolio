import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nikhil',
    lastName: 'Krishnaswamy',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'AI & Machine Learning Engineer',
    avatar: '/images/avatar.jpg',
    location: 'America/Los_Angeles',
    languages: ['English', 'Tamil']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about AI, machine learning, and share insights on the intersection of technology and healthcare.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Nikhil-cmd-cmd'
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://linkedin.com/in/nikhil-krishnaswamy'
    },
    {
        name: 'Email',
        icon: 'mail',
        link: 'mailto:krishnaswamynikhil@gmail.com'
    }
]

const home = {
    headline: <>AI Engineer and Researcher</>,
    subline: <>I'm a student researcher and AI engineer at {' '}
        <InlineCode>Cupertino High School</InlineCode>, focused on developing innovative solutions in healthcare and AI. 
        Currently working on multiple projects including AI4Health and brain-computer interfaces.</>,
    description: <>Building the future of healthcare with AI</>,
}

const about = {
    title: 'About Me',
    content: <>I'm passionate about leveraging AI and technology to solve real-world healthcare challenges. 
    With experience in machine learning, EEG data analysis, and app development, I strive to create impactful solutions.</>,
    education: [
        {
            school: 'Cupertino High School',
            degree: 'High School Diploma',
            year: '2022 - 2026'
        },
        {
            school: 'De Anza College',
            degree: 'Concurrent Enrollment',
            year: '2023 - Present'
        },
        {
            school: 'UCLA',
            degree: 'Principles and Practices of Computing',
            year: '2023'
        }
    ],
    experience: [
        {
            role: 'Founder & CEO',
            company: 'Alliance AI4Health',
            description: 'Leading a global non-profit focused on ethical AI solutions in healthcare',
            year: '2024 - Present'
        },
        {
            role: 'Lab Intern',
            company: 'UC Santa Cruz',
            description: 'Conducted EEG research and data analysis',
            year: '2024'
        },
        {
            role: 'Machine Learning Intern',
            company: 'Nextsense',
            description: 'Implementing ML models for EEG data processing',
            year: '2024'
        }
    ],
    skills: [
        'Python', 'Java', 'Swift', 'Machine Learning',
        'TensorFlow', 'OpenAI', 'EEG Analysis', 'Photography',
        'Adobe Suite', 'Figma'
    ]
}

const work = {
    title: 'Featured Projects',
    description: 'A collection of my recent work in AI and healthcare',
    featured: [
        {
            title: 'Healthify',
            description: 'iOS personal wellbeing app with on-device AI',
            link: '/work/healthify'
        },
        {
            title: 'Share-On',
            description: 'Mental health platform for teens',
            link: '/work/share-on'
        },
        {
            title: 'Seizure Detection ML',
            description: 'EEG-based seizure prediction system',
            link: '/work/seizure-detection'
        }
    ]
}

const blog = {
    title: 'Latest Posts',
    description: 'Thoughts on AI, healthcare, and technology'
}

const gallery = {
    title: 'Photography',
    description: 'A collection of my photography work',
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        }
        // ... rest of the images
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };