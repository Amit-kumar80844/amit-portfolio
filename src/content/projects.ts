import { Project, ProjectCaseStudy } from '../types/portfolio';
import rateLimiterCover from '../assets/images/rate_limiter_arch_1794253974439.jpg';
import tripbreakCover from '../assets/images/tripbreak_android_mockup_1794253975318.jpg';

const repositoryCaseStudy = (project: string, description: string): ProjectCaseStudy => ({
  problemStatement: description,
  whyIBuiltIt: `The repository README and source code are the source of truth for ${project}.`,
  productOverview: description,
  architectureComponents: [],
  techRationale: [],
  coreFeatures: [],
  engineeringChallenges: [],
  learnings: [],
  futureImprovements: [],
});

const project = (data: Omit<Project, 'caseStudy' | 'oneLiner'> & { description: string }): Project => ({
  ...data,
  oneLiner: data.description,
  caseStudy: repositoryCaseStudy(data.title, data.description),
});

export const projectsData: Project[] = [
  project({ id: 'api-rate-limiter', slug: 'api-rate-limiter-sdk', title: 'API Rate Limiter SDK', description: 'A configurable API rate-limiting SDK for Spring Boot applications, using Redis-backed distributed request tracking and supporting Token Bucket and Sliding Window Counter algorithms.', category: 'Backend', tags: ['Java', 'Spring Boot', 'Redis', 'Gradle', 'AOP', 'Lua'], coverImage: rateLimiterCover, githubUrl: 'https://github.com/Amit-kumar80844/ApiRateLimiterSDK', status: 'Completed', featured: true, order: 1 }),
  project({ id: 'nearfind', slug: 'nearfind', title: 'NearFind', description: 'A hyperlocal delivery application focused on connecting customers, retailers and delivery partners through an order management and delivery workflow.', category: 'Android', tags: ['Kotlin', 'Android', 'Jetpack Compose', 'Room', 'Hilt'], githubUrl: 'https://github.com/Amit-kumar80844/NearFind', status: 'Completed', featured: true, order: 2 }),
  project({ id: 'textify-ocr', slug: 'textify', title: 'Textify – Android OCR Application', description: 'An offline-first Android OCR application that extracts text from images using on-device machine learning, with image processing and local data storage.', category: 'Android', tags: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'OpenCV', 'Room', 'CameraX', 'Hilt'], githubUrl: 'https://github.com/Amit-kumar80844/Textify', status: 'Completed', featured: true, order: 3 }),
  project({ id: 'store-management-system', slug: 'supermarket-management-system', title: 'Supermarket Management System', description: 'A retail management platform with inventory management, role-based access control, sales tracking and AI-assisted business insights.', category: 'Backend', tags: ['Python', 'Django REST Framework', 'MongoDB', 'React', 'JWT', 'Gemini API'], githubUrl: 'https://github.com/TeamProject210/Store-Management-System', status: 'Completed', featured: true, order: 4 }),
  project({ id: 'realtime-api-threat-anomaly', slug: 'realtime-api-threat-anomaly-detection-platform', title: 'Real-Time API Threat & Anomaly Detection Platform', description: 'A distributed data-processing platform designed to analyze API traffic streams and identify suspicious activity and anomalies.', category: 'Data Engineering', tags: ['Apache Kafka', 'Apache Spark', 'Hadoop', 'Hive', 'Python', 'FastAPI'], githubUrl: 'https://github.com/Amit-kumar80844/RealTimeAPIThreatAnomalyDetectionPlatform', status: 'Completed', featured: true, order: 5 }),
  project({ id: 'ask-what-matters', slug: 'ask-what-matters', title: 'Ask What Matters – Clinical Trial Eligibility Reasoning System', description: 'A research-oriented clinical trial eligibility reasoning system that converts natural-language eligibility criteria into logical constraints and uses SMT solving for deterministic SAT/UNSAT analysis.', category: 'AI / ML', tags: ['Python', 'LLMs', 'Gemini API', 'Z3', 'SMT-LIB', 'Clinical NLP'], githubUrl: 'https://github.com/Amit-kumar80844/Ask-What-Matters', status: 'Completed', featured: true, order: 6 }),
  project({ id: 'skillforge', slug: 'skillforge', title: 'SkillForge – Android Learning Application', description: 'Android learning application. See the repository for the implementation details.', category: 'Android', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/Skillforge', status: 'Completed', featured: false, order: 7 }),
  project({ id: 'image-downloader-app', slug: 'image-downloader-app', title: 'Image Downloader – Android Application', description: 'Android application for downloading images from the internet. See the repository for the implementation details.', category: 'Android', tags: [], coverImage: tripbreakCover, githubUrl: 'https://github.com/Amit-kumar80844/Image_DownLoader_App', status: 'Completed', featured: false, order: 8 }),
  project({ id: 'image-downloader-backend', slug: 'image-downloader-backend', title: 'Image Downloader – Backend Service', description: 'Backend service for the image downloader project. See the repository for the implementation details.', category: 'Backend', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/ImageDownloaderBackend', status: 'Completed', featured: false, order: 9 }),
  project({ id: 'url-shortener', slug: 'url-shortener', title: 'URL Shortener', description: 'URL shortener project. See the repository for the implementation details.', category: 'Backend', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/url-shortener', status: 'Completed', featured: false, order: 10 }),
  project({ id: 'personal-finance-tracker', slug: 'personal-finance-tracker', title: 'Personal Finance Tracker', description: 'Personal finance tracking project. See the repository for the implementation details.', category: 'Backend', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/Personal-Finance-tracker', status: 'Completed', featured: false, order: 11 }),
  project({ id: 'sleep-helper', slug: 'sleep-helper', title: 'Sleep Helper – Android Application', description: 'Android sleep helper application. See the repository for the implementation details.', category: 'Android', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/SleepHelperApp', status: 'Completed', featured: false, order: 12 }),
  project({ id: 'secureshare', slug: 'secureshare', title: 'SecureShare – Android Application', description: 'Android application focused on secure sharing. See the repository for the implementation details.', category: 'Android', tags: [], githubUrl: 'https://github.com/Amit-kumar80844/SecureShare', status: 'Completed', featured: false, order: 13 }),
];
