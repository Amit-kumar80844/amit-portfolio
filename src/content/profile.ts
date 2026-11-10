import { Profile } from '../types/portfolio';

export const profileData: Profile = {
  name: 'Amit Kumar',
  role: 'Backend Engineer',
  headline: 'Building software that works beyond the happy path.',
  tagline: 'Backend Engineer / Systems / Android Developer',
  supportingText: 'I build high-throughput backend services, distributed systems, and mobile applications — with a focus on clean architecture, performance, and real-world engineering.',
  status: 'Open for Backend Engineering Internships & New Grad Roles',
  availabilityNotice: 'Open for Summer/Fall 2026 internships & 2027 full-time software engineering roles.',
  location: 'IIIT Kottayam, Kerala & Patna, Bihar, India',
  institution: 'Indian Institute of Information Technology, Kottayam',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  graduationYear: '2027',
  cgpa: '8.26 / 10',
  email: 'amitkr80844@gmail.com',
  github: 'https://github.com/Amit-kumar80844',
  linkedin: 'https://www.linkedin.com/in/amit-kumar21/',
  leetcode: 'https://leetcode.com/u/Amit_maur/',
  codeforces: 'https://codeforces.com/profile/amitsingh80020',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/amitkumar2023',
  codolio: 'https://codolio.com/profile/amitkumar21',
  resumePdfUrl: '/Amit_Kumar_Resume.pdf',
  avatarUrl: '/src/assets/images/amit_kumar_portrait_1794253972558.jpg',
  coreFocus: [
    'Scalable Backend Architecture (Spring Boot, Django REST Framework)',
    'Distributed Systems & Caching (Redis Lua, Token Bucket)',
    'Android Application Development (Kotlin, Jetpack Compose, XML)',
    'Data Structures & Algorithms (750+ Solved, 1551 LeetCode Peak)'
  ]
};

export const aboutData = {
  narrative: [
    "I am a Computer Science undergraduate at IIIT Kottayam (Class of 2027) with a deep drive for building systems that remain resilient when failure modes strike. My journey spans writing clean, reactive Android architectures in Jetpack Compose to designing distributed token-bucket rate limiters with Redis and Spring Boot.",
    "Rather than treating engineering as assembling templates, I focus on the underlying mechanics: how memory allocators avoid fragmentation, how atomic compare-and-swap operations eliminate locks in concurrent skip-lists, and how mobile state machines handle lifecycle teardowns without memory leaks.",
    "At AutonoPros, I contributed to the production TripBreak Android application using Kotlin and Jetpack Compose, gaining firsthand appreciation for clean architectural separation (MVVM/MVI) and smooth user experiences."
  ],
  engineeringPhilosophy: [
    {
      principle: 'Graceful Degradation',
      description: 'Systems should fail predictably, isolate blast radiuses, and return typed status contracts rather than crash unhandled.'
    },
    {
      principle: 'Deterministic Mechanics',
      description: 'Understanding memory models, cache locality, and I/O amplification beats guessing under high load.'
    },
    {
      principle: 'Clean Architectural Boundaries',
      description: 'Decoupling domain logic from UI frameworks and storage engines ensures testability, longevity, and clear ownership.'
    }
  ],
  education: {
    institution: 'Indian Institute of Information Technology, Kottayam',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'August 2023 – May 2027',
    cgpa: '8.26 / 10',
    location: 'Kottayam, Kerala, India',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks'
    ],
    highlights: [
      'Solved 750+ DSA problems across LeetCode and GeeksforGeeks with a peak LeetCode rating of 1551.',
      'Selected among the top 1,000 participants from over 40,000 applicants for AlgoUniversity DP Camp.',
      'Completed Telstra Software Engineering Job Simulation (Spring Boot APIs, Cucumber, SonarQube).'
    ]
  }
};
