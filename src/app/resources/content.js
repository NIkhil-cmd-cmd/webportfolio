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
    display: false,
    title: <></>,
    description: <></>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/NIkhil-cmd-cmd',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nikhil-krishnaswamy',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:krishnaswamynikhil@gmail.com',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Hi, I'm Nikhil 👋</>,
    subline: <>this is my personal portfolio website.</>
}

const about = {
    label: 'About',
    title: 'About me ->', 
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com/nikhil-krishnaswamy'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Student researcher and AI engineer focused on developing innovative solutions in healthcare technology.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Solo Intern',
                timeframe: 'Sep 2024 - Present',
                role: 'AI/ML Engineer',
                achievements: [
                    <>Pioneered apps and models for on-device AI, built Healthify iOS wellbeing app</>,
                    <>Ran clinical tests of the app at Johns Hopkins University</>,
                    <>Developed innovative healthcare technology solutions</>
                ],
                images: []
            },
            {
                company: 'UC Santa Cruz',
                timeframe: 'Jun 2024 - Aug 2024',
                role: 'Lab Intern',
                achievements: [
                    <>Conducted EEG research on tDCS stimulation effects on speech production</>,
                    <>Processed and analyzed EEG data, generated ERP graphs</>,
                    <>Gained hands-on experience with electroencephalography (EEG)</>
                ],
                images: []
            },
            {
                company: 'Alliance AI4Health',
                timeframe: 'Jan 2024 - Present',
                role: 'Founder & CEO',
                achievements: [
                    <>Founded global non-profit fostering ethical AI solutions in healthcare</>,
                    <>Hosted hackathon with 325 participants and multiple sponsor partnerships</>,
                    <>Led 8-week Python/Java bootcamp for 100+ students globally</>
                ],
                images: []
            },
            {
                company: 'AI Pioneers Club',
                timeframe: 'Mar 2023 - Present',
                role: 'Founder & President',
                achievements: [
                    <>Established AI club with 50+ active members at Cupertino High School</>,
                    <>Partnered with ML@Berkeley for cutting-edge AI research exposure</>,
                    <>Conducted regular workshops and hands-on learning projects</>
                ],
                images: []
            },
            {
                company: 'Stanford University',
                timeframe: 'Jun 2023 - Present',
                role: 'Research Intern',
                achievements: [
                    <>Published research on ML-based seizure detection using EEG data</>,
                    <>Working with post-doc on novel TVB research for seizure suppression</>,
                    <>Developed innovative brain stimulation analysis approaches</>
                ],
                images: []
            },
            {
                company: 'Share-On',
                timeframe: 'Mar 2024 - Present',
                role: 'Co-founder & CTO',
                achievements: [
                    <>Developed mental health platform with AI chatbot for teens</>,
                    <>Grew platform to 5,000+ users in 3 months</>,
                    <>Awarded BEEP and i.invest grants totaling $1,000</>
                ],
                images: []
            },
            {
                company: 'Nextsense',
                timeframe: 'Jan 2024 - May 2024',
                role: 'Machine Learning Intern',
                achievements: [
                    <>Implemented DSP techniques and trained ML models on EEG data</>,
                    <>Contributed to advancing in-ear EEG hardware neurotechnology</>,
                    <>Applied signal processing expertise to neurological data</>
                ],
                images: []
            },
            {
                company: 'Awards',
                timeframe: '2020 - 2024',
                role: 'Academic & Professional Recognition',
                achievements: [
                    <>1st Place, School Photographers of America Student Competition</>,
                    <>i.Invest National Entrepreneurship Pitch Competition Winner - $500 grant</>,
                    <>Photography Superior Award, JEA NSMC</>,
                    <>Gold Presidential Volunteer Service Award - 300+ hours</>,
                    <>Young Artist Platinum Award for Photography</>,
                    <>Winner of ImpactHacks and Hack4Earth - Brain Tumor Classification CNN</>,
                    <>FutureHacks5 Most Unique Award - Mental Health Chatbot</>,
                    <>4x Award of Excellence, PTA Reflections for Photography</>,
                    <>MVP, JV Tennis Team - Doubles 1</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Cupertino High School',
                description: <>High School Diploma (2022 - 2026), GPA: 4.0 | AP Scores: Calculus AB (5), Precalculus (5), Physics One (5), CS Principles (5), CS Applications (4)</>,
            },
            {
                name: 'De Anza College',
                description: <>Concurrent Enrollment (2023 - Present) | Entrepreneurship, Business, iOS Development, Python, Java, Physics, Digital Photography</>,
            },
            {
                name: 'UC Scout',
                description: <>AP Computer Science & Psychology (2022 - Present)</>,
            },
            {
                name: 'UCLA',
                description: <>Principles and Practices of Computing (2023)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Programming',
                description: <>Proficient in Python, Java, Swift/Objective-C, HTML/CSS, DSP</>,
                images: []
            },
            {
                title: 'Machine Learning',
                description: <>Experience with TensorFlow, OpenAI, Sklearn, RAG, Embeddings, LLMs, OpenCV</>,
                images: []
            },
            {
                title: 'Data Science',
                description: <>Skilled in Matplotlib, Numpy, Pandas, DSP, The Virtual Brain</>,
                images: []
            },
            {
                title: 'Design',
                description: <>Expertise in Photography, Adobe Suite (Lightroom, Photoshop, Premiere Pro, After Effects, Illustrator), Linearity Curve, Figma</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: '',
    display: false,
    title: '',
    description: '',
    icon: ''
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `AI and healthcare projects by ${person.name}`,
    items: [
        {
            title: 'Healthify',
            description: 'iOS personal wellbeing app with on-device AI, clinically tested at Johns Hopkins',
            image: '/images/projects/healthify.jpg',
            link: '/work/healthify'
        },
        {
            title: 'Seizure Detection ML',
            description: 'EEG-based supervised learning models for seizure prediction',
            image: '/images/projects/seizure.jpg',
            link: '/work/seizure-detection'
        },
        {
            title: 'Share-On Platform',
            description: 'Mental health platform with AI chatbot for teens',
            image: '/images/projects/share-on.jpg',
            link: '/work/share-on'
        }
    ]
}

const gallery = {
    label: 'Photography',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/File 27.jpg', 
            alt: 'image 27',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 26.jpg', 
            alt: 'image 26',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 25.jpg', 
            alt: 'image 25',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 24.jpg', 
            alt: 'image 24',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 23.jpg', 
            alt: 'image 23',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 21.jpg', 
            alt: 'image 21',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 20.jpg', 
            alt: 'image 20',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 19.jpg', 
            alt: 'image 19',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 18.jpg', 
            alt: 'image 18',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 17.jpg', 
            alt: 'image 17',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 16.jpg', 
            alt: 'image 16',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 15.jpg', 
            alt: 'image 15',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 14.jpg', 
            alt: 'image 14',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 13.jpg', 
            alt: 'image 13',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 12.jpg', 
            alt: 'image 12',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 11.jpg', 
            alt: 'image 11',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 10.jpg', 
            alt: 'image 10',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 9.jpg', 
            alt: 'image 9',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 8.jpg', 
            alt: 'image 8',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 7.jpg', 
            alt: 'image 7',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 6.jpg', 
            alt: 'image 6',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 5.jpg', 
            alt: 'image 5',
            orientation: 'vertical'
        }, 
        { 
            src: '/images/gallery/File 4.jpg', 
            alt: 'image 4',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 3.jpg', 
            alt: 'image 3',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 2.jpg', 
            alt: 'image 2',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/File 1.jpg', 
            alt: 'image 1',
            orientation: 'vertical'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };