import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'api-rate-limiter',
    slug: 'api-rate-limiter',
    title: 'Distributed API Rate Limiter SDK',
    oneLiner: 'High-throughput rate-limiting engine implementing Token Bucket & Sliding Window Counter via atomic Redis Lua scripts.',
    category: 'Backend',
    tags: ['Java 21', 'Spring Boot', 'Redis', 'Docker', 'Lua Scripts', 'Distributed Systems'],
    coverImage: '/src/assets/images/rate_limiter_arch_1794253974439.jpg',
    githubUrl: 'https://github.com/Amit-kumar80844/api-rate-limiter-sdk',
    status: 'Completed',
    featured: true,
    order: 1,
    caseStudy: {
      problemStatement: 'Uncontrolled traffic spikes and DDoS bursts can overwhelm microservices downstream. Existing in-memory rate limiters fail across horizontally scaled container instances without unified distributed synchronization.',
      whyIBuiltIt: 'To master low-latency concurrency control in distributed systems, specifically benchmarking how atomic Lua scripts inside Redis eliminate race conditions without distributed locks.',
      productOverview: 'A drop-in SDK and standalone gateway filter for Spring Boot microservices that enforces per-client, per-endpoint throughput limits using configurable token bucket and sliding window log algorithms with fallback circuit breakers.',
      architectureComponents: [
        { name: 'Gateway Filter Interceptor', role: 'Intercepts incoming HTTP requests, extracts API keys/IP headers, and checks token quota before hitting controllers', tech: 'Spring WebFilter' },
        { name: 'Redis Token Cluster', role: 'Maintains stateful token counters and bucket fill timestamps atomically in memory', tech: 'Redis Standalone / Cluster' },
        { name: 'Atomic Lua Evaluator', role: 'Executes refill calculations and decrement operations on Redis in a single network roundtrip', tech: 'Redis Lua Engine' },
        { name: 'Fallback Circuit Breaker', role: 'Fails open gracefully if Redis experiences downtime, preserving service availability with logged telemetry', tech: 'Resilience4j' }
      ],
      techRationale: [
        { tech: 'Redis + Lua Scripts', reason: 'Guarantees atomicity without multi-phase locking (2PC) or distributed consensus overhead on high-frequency paths.' },
        { tech: 'Java 21 Virtual Threads', reason: 'Allows non-blocking I/O across thousands of concurrent clients without thread pool exhaustion.' },
        { tech: 'Docker Compose Testbed', reason: 'Replicates distributed network latency and node failover scenarios deterministically.' }
      ],
      coreFeatures: [
        'Dual algorithm support: Token Bucket (burst absorption) and Sliding Window Counter (smooth rate pacing)',
        'Atomic decrement via single-roundtrip Redis Lua script',
        'Load-tested with 100,000+ requests, throttling 99.995% excess traffic without service degradation',
        'Multi-tiered quota configuration based on API key tiers (Free, Pro, Enterprise)',
        'Deterministic HTTP 429 response headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
        'Local in-memory fallback cache when remote Redis roundtrips degrade beyond 50ms'
      ],
      backendDesign: 'Designed as a layered Spring Boot starter with an auto-configured filter bean. Quotas are defined through YAML configurations with dynamic tenant overrides stored in Redis hashes.',
      engineeringChallenges: [
        {
          challenge: 'Race conditions during simultaneous token acquisition under high multi-threaded traffic bursts',
          solution: 'Bundled the token count retrieval, time-delta refill arithmetic, and token decrement into an atomic Lua script executed natively by the Redis engine.',
          tradeoff: 'Lua execution holds the single-threaded Redis process for microseconds, requiring strictly bounded, O(1) script runtimes.'
        },
        {
          challenge: 'Redis latency degradation causing cascading API latency',
          solution: 'Implemented asynchronous token replenishment and local fallback ring-buffers with a 100ms timeout budget before failing open.',
          tradeoff: 'Failing open risks temporary backend over-utilization in exchange for preventing complete site outages.'
        }
      ],
      learnings: [
        'Why distributed locks are often an anti-pattern when atomic storage primitives can solve the invariant directly.',
        'How client-side jitter and exponential backoff prevent the "thundering herd" problem upon rate limit reset.',
        'Practical profiling of JVM thread behavior under 10k concurrent simulated requests.'
      ],
      futureImprovements: [
        'Add gRPC interceptor support alongside HTTP/REST.',
        'Integrate Prometheus/Grafana metrics exporter for real-time drop-rate visualization.',
        'Implement hierarchical token buckets for multi-tenant organizations.'
      ],
      codeExcerpt: {
        filename: 'token_bucket.lua',
        language: 'lua',
        snippet: `-- Atomic Token Bucket in Redis Lua
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refill_rate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])

local data = redis.call("HMGET", key, "tokens", "last_updated")
local tokens = tonumber(data[1])
local last_updated = tonumber(data[2])

if tokens == nil then
    tokens = capacity
    last_updated = now
else
    local delta = math.max(0, now - last_updated)
    tokens = math.min(capacity, tokens + (delta * refill_rate))
    last_updated = now
end

if tokens >= requested then
    tokens = tokens - requested
    redis.call("HMSET", key, "tokens", tokens, "last_updated", last_updated)
    redis.call("EXPIRE", key, math.ceil(capacity / refill_rate) * 2)
    return {1, tokens}
else
    redis.call("HMSET", key, "tokens", tokens, "last_updated", last_updated)
    return {0, tokens}
end`,
        explanation: 'Single atomic round-trip script performing time-delta recalculation and token consumption, preventing race conditions without mutexes.'
      }
    }
  },
  {
    id: 'store-management-system',
    slug: 'store-management-system',
    title: 'Intelligent Store Management System',
    oneLiner: 'Scalable enterprise inventory & retail platform with Django REST Framework backend, MongoDB, React client, Gemini API insights, and Razorpay.',
    category: 'Backend',
    tags: ['React.js', 'Django REST Framework', 'MongoDB', 'Python', 'Gemini API', 'Razorpay', 'JWT Auth'],
    githubUrl: 'https://github.com/Amit-kumar80844/store-management-system',
    status: 'Completed',
    featured: true,
    order: 2,
    caseStudy: {
      problemStatement: 'Retail and inventory management suffers from stock-outs, delayed sales telemetry, and fragmented payment reconciliation across disparate systems.',
      whyIBuiltIt: 'Led a team of 4 software engineers to architect a production-grade store management backend, integrating generative inventory forecasting and secure payment gateways.',
      productOverview: 'A comprehensive retail operations system featuring real-time inventory tracking, role-based access control, Gemini-powered sales intelligence, Razorpay automated checkout, and automated low-stock email triggers.',
      architectureComponents: [
        { name: 'Django REST Backend', role: 'Exposes scalable RESTful endpoints for inventory, customer records, and orders', tech: 'Django REST Framework' },
        { name: 'Document Database', role: 'Stores flexible product catalog schemas, transaction records, and user audit logs', tech: 'MongoDB' },
        { name: 'AI Insights Engine', role: 'Analyzes inventory velocity and generates plain-language restocking recommendations', tech: 'Gemini API' },
        { name: 'Payment & Notification Gateway', role: 'Handles secure card/UPI transactions and automated low-stock alerts', tech: 'Razorpay & Gmail SMTP' }
      ],
      techRationale: [
        { tech: 'Django REST Framework', reason: 'High security standards, built-in ORM abstractions, and fast developer velocity for complex business logic.' },
        { tech: 'MongoDB', reason: 'Accommodates dynamic product attribute variation (sizes, specifications, batches) without fragile relational migrations.' },
        { tech: 'Gemini API', reason: 'Generates real-time natural language sales analytics and proactive inventory reordering suggestions.' }
      ],
      coreFeatures: [
        'JWT authentication & granular role-based access control (Admin, Manager, Cashier)',
        'Gemini API integration for automated inventory analysis and executive sales summaries',
        'Razorpay payment gateway integration for automated order capture and invoice generation',
        'Automated Gmail-based low-stock notification triggers alerting store managers before stockouts',
        'Led architectural design, MongoDB schema definitions, and API contracts across 4 developers'
      ],
      engineeringChallenges: [
        {
          challenge: 'Preventing duplicate payment capture during network drops or double submissions',
          solution: 'Implemented idempotent payment verification webhooks with Razorpay signature verification and transaction state locks.',
          tradeoff: 'Requires storing webhook event IDs in MongoDB to prevent replay attacks.'
        }
      ],
      learnings: [
        'Team leadership: defining API contracts and JSON schemas before implementation prevents integration bottlenecks.',
        'Proper webhook verification and event idempotency under real-world payment flows.'
      ],
      futureImprovements: [
        'Add barcode and QR code scanner integration on mobile web.',
        'Implement predictive demand forecasting using seasonal sales trends.'
      ]
    }
  },
  {
    id: 'image-downloader',
    slug: 'image-downloader',
    title: 'Reactive Image Downloader & Cache Engine',
    oneLiner: 'Android image fetching architecture in Jetpack Compose paired with a Spring Boot caching backend and Redis.',
    category: 'Android',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Coil', 'Spring Boot', 'Redis'],
    coverImage: '/src/assets/images/tripbreak_android_mockup_1794253975318.jpg',
    githubUrl: 'https://github.com/Amit-kumar80844/image-downloader-android',
    status: 'Completed',
    featured: true,
    order: 2,
    caseStudy: {
      problemStatement: 'High-resolution mobile image browsing frequently leads to UI jank, memory thrashing (OOM errors), and redundant network queries on unstable mobile networks.',
      whyIBuiltIt: 'To engineer an end-to-end multi-tier caching pipeline bridging client-side Android memory management with a high-throughput backend proxy.',
      productOverview: 'An Android application built with modern Jetpack Compose and MVVM architecture, featuring resilient background download queues, LRU disk caching, and a companion Spring Boot proxy that optimizes image payloads before mobile transmission.',
      architectureComponents: [
        { name: 'Compose UI Tier', role: 'Declarative grid rendering with lazy layout recycling and shimmer loading placeholders', tech: 'Jetpack Compose' },
        { name: 'ViewModel & StateFlow', role: 'Maintains unidirectional UI state and survives activity configuration changes', tech: 'Android ViewModel & Coroutines' },
        { name: 'Download Worker Pipeline', role: 'Handles resumable image chunk downloads with background WorkManager constraints', tech: 'WorkManager & OkHttp' },
        { name: 'Backend Image Proxy', role: 'Compresses, resizes, and caches image representations before streaming to mobile clients', tech: 'Spring Boot & Redis' }
      ],
      techRationale: [
        { tech: 'Kotlin Coroutines + Flow', reason: 'Structured concurrency prevents lifecycle leaks and enables clean cancellation when views scroll out of viewport.' },
        { tech: 'Coil Image Loader', reason: 'Lightweight, built for Kotlin, integrates seamlessly with Compose Painter abstractions and OKHttp caching.' },
        { tech: 'Redis Backend Cache', reason: 'Stores pre-scaled image variants by device resolution, minimizing mobile bandwidth consumption.' }
      ],
      coreFeatures: [
        'Declarative modern Compose UI with smooth thumbnail-to-fullscreen transitions',
        '3-tier caching hierarchy: Memory (LruCache) -> Local Disk (App Cache) -> Remote Redis Proxy',
        'Network-aware download scheduling (pauses on metered connections, resumes automatically)',
        'Progress tracking with bytes-transferred indicators and cancel/retry support'
      ],
      engineeringChallenges: [
        {
          challenge: 'Bitmap memory bloat causing OutOfMemoryError during rapid grid scrolling',
          solution: 'Configured hardware bitmap decoding (ARGB_8888 downsampled to RGB_565 when alpha not needed) with exact bounding box sampling prior to memory allocation.',
          tradeoff: 'Slight loss in color depth for non-transparent imagery, yielding a 50% reduction in heap memory footprint.'
        },
        {
          challenge: 'Stale cached images after remote updates',
          solution: 'Implemented HTTP ETag verification headers on conditional GET requests with Redis TTL invalidation.',
          tradeoff: 'Introduces a micro 304 Not Modified handshake before loading from local disk.'
        }
      ],
      learnings: [
        'How to design clean MVI/MVVM unidirectional data flows in Android.',
        'Proper lifecycle scoping for background network workers in Android 14+.',
        'Optimizing byte buffers and zero-copy streaming between HTTP streams and file descriptors.'
      ],
      futureImprovements: [
        'Add support for AVIF and WebP lossless format auto-negotiation.',
        'Implement peer-to-peer Wi-Fi Direct image sharing between nearby devices.'
      ]
    }
  },
  {
    id: 'textify-ocr',
    slug: 'textify-ocr',
    title: 'Textify — Real-Time On-Device OCR Scanner',
    oneLiner: 'CameraX-powered Android OCR scanner utilizing Google ML Kit and OpenCV image pre-processing with Room database persistence.',
    category: 'Android',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit', 'OpenCV', 'Room DB'],
    githubUrl: 'https://github.com/Amit-kumar80844/textify-ocr-android',
    status: 'Completed',
    featured: true,
    order: 3,
    caseStudy: {
      problemStatement: 'Extracting clean text from physical documents often fails under uneven lighting, perspective skew, and without active internet connectivity.',
      whyIBuiltIt: 'To construct an entirely on-device, offline-first computer vision utility that operates at 30fps without dispatching sensitive personal documents to external cloud APIs.',
      productOverview: 'An Android tool combining CameraX image analysis pipelines with Google ML Kit text recognition models, enhanced by OpenCV perspective correction and persistent SQLite search via Android Room.',
      architectureComponents: [
        { name: 'CameraX ImageAnalysis Stream', role: 'Captures YUV_420_888 frame buffers directly from camera hardware with zero frame dropping', tech: 'Android CameraX' },
        { name: 'OpenCV Pre-Processor', role: 'Performs adaptive thresholding, edge detection, and perspective homography transformation', tech: 'OpenCV Android SDK' },
        { name: 'ML Kit OCR Engine', role: 'Performs offline neural network inference to detect Latin character bounding boxes and text blocks', tech: 'Google ML Kit On-Device' },
        { name: 'Room Persistence Layer', role: 'Indexes extracted document transcripts with FTS4 full-text search and category tags', tech: 'Room & SQLite' }
      ],
      techRationale: [
        { tech: 'CameraX API', reason: 'Abstracts device-specific camera quirks, orientation handling, and lifecycle-aware lifecycle binding.' },
        { tech: 'On-Device ML Kit', reason: 'Zero latency overhead, eliminates server costs, and guarantees user document privacy.' },
        { tech: 'Room FTS', reason: 'Enables sub-millisecond keyword lookup across hundreds of scanned document archives.' }
      ],
      coreFeatures: [
        'Live viewfinder bounding box rendering overlaid on recognized text blocks',
        'Automatic edge detection and trapezoid perspective warping via OpenCV',
        'Offline text extraction with high accuracy across print, receipts, and signs',
        'Full-text searchable history with copy-to-clipboard, export as TXT/PDF, and TTS readout'
      ],
      engineeringChallenges: [
        {
          challenge: 'Camera preview lag when running continuous OpenCV transforms on every frame',
          solution: 'Decoupled frame capture from processing by dropping backpressure buffers and executing OCR only when device accelerometer detects stable positioning.',
          tradeoff: 'OCR analysis occurs at ~6fps while viewfinder continues rendering at native 60fps.'
        }
      ],
      learnings: [
        'Native JNI bridging between Kotlin and C++ OpenCV libraries.',
        'Handling multi-orientation image rotations across varied Android manufacturer sensors.'
      ],
      futureImprovements: [
        'Add multi-language script support (Devanagari, Cyrillic, Kanji).',
        'Integrate on-device table extraction and CSV export.'
      ]
    }
  },
  {
    id: 'weather-app',
    slug: 'weather-app',
    title: 'Precision Weather & Atmospheric Station',
    oneLiner: 'Clean architectural Android weather app powered by Open-Meteo APIs, device geolocation, and offline Room caching.',
    category: 'Android',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Open-Meteo', 'Location Services', 'Room DB'],
    githubUrl: 'https://github.com/Amit-kumar80844/weather-app-compose',
    status: 'Completed',
    featured: false,
    order: 4,
    caseStudy: {
      problemStatement: 'Many weather apps are bloated with ad tracking, consume excessive background battery for GPS, and fail completely during brief connectivity drops.',
      whyIBuiltIt: 'To demonstrate strict Clean Architecture (Domain/Data/UI layers) and reactive offline-first state handling in modern Android.',
      productOverview: 'A minimalist atmospheric tracking application displaying hourly forecasts, UV indexes, precipitation probabilities, and interactive wind vectors with cached offline viewing.',
      architectureComponents: [
        { name: 'Data Repository', role: 'Single source of truth coordinating remote Open-Meteo REST calls with local Room database cache', tech: 'Kotlin Coroutines & Flow' },
        { name: 'Domain Use Cases', role: 'Encapsulates business rules such as temperature unit conversions and severe weather threshold evaluation', tech: 'Clean Architecture Use Cases' },
        { name: 'Compose UI Layer', role: 'Responsive layout rendering dynamic atmospheric gradients matching real-time solar elevation', tech: 'Jetpack Compose Canvas' }
      ],
      techRationale: [
        { tech: 'Open-Meteo API', reason: 'Open-source, highly accurate numerical weather models with zero API key requirement and generous rate limits.' },
        { tech: 'Room DB', reason: 'Provides instant UI hydration upon cold app startup before network refresh.' }
      ],
      coreFeatures: [
        'Real-time GPS coordinate resolution with FusedLocationProviderClient',
        '48-hour granular meteogram graphs and 7-day extended forecasts',
        'Offline-first persistence with automatic background cache refresh',
        'Dynamic weather animations rendered directly on hardware-accelerated Compose Canvas'
      ],
      engineeringChallenges: [
        {
          challenge: 'Battery drain from continuous GPS polling',
          solution: 'Switched to opportunistic location requests with significant displacement filters (5km threshold) and cached last known coordinates.',
          tradeoff: 'Forecast updates are delayed until meaningful physical movement occurs.'
        }
      ],
      learnings: [
        'Structuring Android apps with clean unidirectional data flow and repository patterns.',
        'Custom canvas drawing techniques for smooth spline bezier curves in Jetpack Compose.'
      ],
      futureImprovements: [
        'Add Android Home Screen AppWidget support with Glance API.'
      ]
    }
  },
  {
    id: 'url-shortener',
    slug: 'url-shortener',
    title: 'High-Throughput Distributed URL Shortener',
    oneLiner: 'Base62 encoded link redirection service backed by Node.js, Express, MongoDB, and Redis caching.',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Base62 Encoding', 'Docker'],
    githubUrl: 'https://github.com/Amit-kumar80844/url-shortener-backend',
    status: 'Completed',
    featured: false,
    order: 5,
    caseStudy: {
      problemStatement: 'Sharing lengthy URLs with telemetry parameters results in broken links and poor readability. High-volume redirection requires sub-5ms lookup latency under heavy read-to-write ratios.',
      whyIBuiltIt: 'To explore URL hashing, Base62 bi-directional ID translation, and cache hit ratio optimization in high read-volume web services.',
      productOverview: 'A link shortening backend service with analytics tracking, custom alias support, and a Redis read-through cache layer serving 301/302 redirects with minimal database roundtrips.',
      architectureComponents: [
        { name: 'API Gateway & Router', role: 'Handles link creation, parameter validation, and redirection requests', tech: 'Express.js' },
        { name: 'Base62 ID Generator', role: 'Converts monotonically increasing database sequence IDs into 7-character alphanumeric tokens', tech: 'Custom Base62 Algorithm' },
        { name: 'Redis Cache Layer', role: 'Caches active alias-to-URL mappings with LRU eviction to serve lookups under 2ms', tech: 'Redis' },
        { name: 'Persistent Store', role: 'Saves full link metadata, creation timestamps, and click analytics event logs', tech: 'MongoDB' }
      ],
      techRationale: [
        { tech: 'Base62 Encoding', reason: 'Avoids collision resolution overhead common to MD5/SHA-256 truncation approaches.' },
        { tech: 'Redis Cache', reason: '99% of redirection traffic hits memory, isolating MongoDB from high-frequency read spikes.' }
      ],
      coreFeatures: [
        'Deterministic Base62 token generation supporting up to 3.5 trillion unique shortcodes',
        'Redis read-through cache with sub-3ms average redirect latency',
        'Comprehensive click analytics (referrer, user-agent, geolocation, timestamp)',
        'Rate-limited creation endpoints to curb spam link generation'
      ],
      engineeringChallenges: [
        {
          challenge: 'Database ID counter bottleneck in distributed deployment',
          solution: 'Implemented range-based token allocation where each node pre-allocates blocks of 1,000 IDs from a central Redis atomic counter.',
          tradeoff: 'Potential gap in sequential IDs if an application instance crashes before utilizing its full reserved block.'
        }
      ],
      learnings: [
        'Differences between HTTP 301 (Permanent Redirect - browser cached) and 302 (Found - passes through server for accurate analytics).',
        'Cache stampede mitigation using mutex locks on cache misses.'
      ],
      futureImprovements: [
        'Migrate from Node.js to Go for minimal memory footprint per instance.',
        'Add QR code generation endpoint.'
      ]
    }
  },
  {
    id: 'food-demand-prediction',
    slug: 'food-demand-prediction',
    title: 'Smart Canteen Demand Prediction & Analytics',
    oneLiner: 'Data warehousing and predictive modeling system built with R, SQLite, and Shiny to minimize commercial kitchen food waste.',
    category: 'Data Engineering',
    tags: ['R', 'SQLite', 'Shiny', 'Data Warehousing', 'Time Series Analysis', 'Forecasting'],
    githubUrl: 'https://github.com/Amit-kumar80844/food-demand-prediction',
    status: 'Completed',
    featured: false,
    order: 6,
    caseStudy: {
      problemStatement: 'Institutional canteens consistently overproduce food by 20-35% due to unpredictable attendance, causing immense financial waste and environmental degradation.',
      whyIBuiltIt: 'To apply time-series forecasting and relational data star-schema modeling to solve a tangible sustainability challenge on campus.',
      productOverview: 'An end-to-end data pipeline that ingests historical meal consumption, weather factors, and academic calendar dates to predict weekly ingredient replenishment quotas.',
      architectureComponents: [
        { name: 'Star-Schema Data Warehouse', role: 'Organizes transaction fact tables and dimension tables (Menu, Date, Weather, Event)', tech: 'SQLite' },
        { name: 'Time-Series Forecasting Model', role: 'Applies ARIMA and seasonal decomposition to forecast demand quantities', tech: 'R forecast package' },
        { name: 'Interactive Analytics Dashboard', role: 'Visualizes historical waste metrics, variance analysis, and ordering recommendations', tech: 'R Shiny' }
      ],
      techRationale: [
        { tech: 'R & Shiny', reason: 'Unmatched statistical computing libraries and rapid interactive data dashboard development.' },
        { tech: 'SQLite Warehouse', reason: 'Embedded, zero-maintenance relational database ideal for localized institutional operations.' }
      ],
      coreFeatures: [
        'Weekly meal demand forecasting with 85%+ directional accuracy',
        'Automatic ingredient requirement breakdown from forecast quantities',
        'Interactive variance analysis comparing actual consumption against projected targets'
      ],
      engineeringChallenges: [
        {
          challenge: 'Sudden demand collapses during unannounced student holidays and exam seasons',
          solution: 'Engineered feature flags incorporating the academic calendar into regression covariates.',
          tradeoff: 'Requires manual calendar sync at the start of each semester.'
        }
      ],
      learnings: [
        'Data warehousing principles (Fact vs. Dimension tables, ETL hygiene).',
        'Evaluation of statistical error metrics (MAPE, RMSE) in real-world supply chains.'
      ],
      futureImprovements: [
        'Port forecasting engine to Python (Prophet/LightGBM) with FastAPI deployment.'
      ]
    }
  },
  {
    id: 'driver-drowsiness-detection',
    slug: 'driver-drowsiness-detection',
    title: 'Computer Vision Driver Drowsiness Guard',
    oneLiner: 'Real-time eye-aspect-ratio (EAR) and facial landmark monitoring pipeline with MediaPipe and Python.',
    category: 'AI / ML',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Embedded Simulation'],
    githubUrl: 'https://github.com/Amit-kumar80844/driver-drowsiness-detection',
    status: 'Completed',
    featured: false,
    order: 7,
    caseStudy: {
      problemStatement: 'Driver fatigue accounts for over 20% of commercial transit accidents worldwide. Early auditory warning can avert catastrophic collisions.',
      whyIBuiltIt: 'To experiment with geometric facial landmark ratios and real-time computer vision inference on constrained hardware.',
      productOverview: 'A video analysis pipeline that computes Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) continuously from 468 3D facial landmarks to detect microsleeps and yawning.',
      architectureComponents: [
        { name: 'Face Mesh Extractor', role: 'Localizes 468 3D facial landmarks from real-time webcam video feed', tech: 'Google MediaPipe' },
        { name: 'Geometric State Classifier', role: 'Computes Euclidean distance ratios between eyelid and lip boundaries', tech: 'NumPy / Python' },
        { name: 'Alert Trigger Engine', role: 'Fires progressive auditory and visual alarms when fatigue thresholds persist', tech: 'Pygame Audio / OpenCV GUI' }
      ],
      techRationale: [
        { tech: 'MediaPipe Face Mesh', reason: 'High-performance lightweight pipeline capable of 30+ FPS on standard CPU without dedicated GPU.' },
        { tech: 'Euclidean Aspect Ratios', reason: 'Scale and distance invariant; immune to head proximity variations relative to the lens.' }
      ],
      coreFeatures: [
        'Continuous EAR calculation with customizable fatigue duration thresholds',
        'Yawn frequency detection via Mouth Aspect Ratio (MAR)',
        'Head-pose estimation to flag extended gaze distraction away from the road',
        'Audio alarm dispatch with visual HUD warning'
      ],
      engineeringChallenges: [
        {
          challenge: 'False triggers caused by natural momentary blinking',
          solution: 'Implemented a sliding temporal window checking if EAR remains below threshold for >= 20 consecutive frames before firing alerts.',
          tradeoff: 'Adds a ~600ms latency buffer before sounding the alarm.'
        }
      ],
      learnings: [
        'Real-time frame processing pipelines and memory management in OpenCV.',
        'Tradeoffs between neural network classifiers versus geometric heuristic filters on edge devices.'
      ],
      futureImprovements: [
        'Port to Android using CameraX and Android ML Kit for in-vehicle phone mounts.'
      ]
    }
  },
  {
    id: 'quickexam-ai',
    slug: 'quickexam-ai',
    title: 'QuickExam AI — Automated Assessment Engine',
    oneLiner: 'Spring Boot backend integrated with Groq LLM API for rapid, syllabus-aligned question paper generation.',
    category: 'Backend',
    tags: ['Java', 'Spring Boot', 'Groq API', 'REST API', 'JSON Schema Validation'],
    githubUrl: 'https://github.com/Amit-kumar80844/quickexam-ai',
    status: 'Completed',
    featured: false,
    order: 8,
    caseStudy: {
      problemStatement: 'Educators spend dozens of hours manually drafting balanced examination papers across difficulty tiers and Bloom taxonomy levels.',
      whyIBuiltIt: 'To build a robust backend pipeline orchestrating structured prompt engineering and strict JSON schema validation with high-speed LLM inference.',
      productOverview: 'A test generation service that takes syllabus topics, difficulty distributions, and question formats to produce structured, exportable exam papers in seconds.',
      architectureComponents: [
        { name: 'Exam Generation Service', role: 'Constructs validated prompt contexts and coordinates LLM invocations', tech: 'Spring Boot 3' },
        { name: 'Inference Provider', role: 'Ultra-low latency LLM inference with structured JSON output formatting', tech: 'Groq Cloud API (Llama 3)' },
        { name: 'Schema Validator', role: 'Ensures generated payload matches exact question/option/answer key schema', tech: 'Jackson / Everit JSON Schema' }
      ],
      techRationale: [
        { tech: 'Groq LPUs', reason: 'Delivers 300+ tokens/sec, reducing exam generation latency from 15s to under 2 seconds.' },
        { tech: 'Spring Boot 3', reason: 'Mature enterprise validation framework and strongly-typed DTO parsing.' }
      ],
      coreFeatures: [
        'Configurable question types: Multiple Choice (MCQ), Short Answer, Numerical, and Long Essay',
        'Strict adherence to Bloom taxonomy cognitive levels (Knowledge -> Evaluation)',
        'Automated generation of answer keys and marking rubrics',
        'Export formats: PDF and LaTeX'
      ],
      engineeringChallenges: [
        {
          challenge: 'LLMs occasionally returning malformed JSON or hallucinated keys',
          solution: 'Enforced system-prompt grammar constraints and implemented a retry filter with automated correction prompts.',
          tradeoff: 'Slightly increases token usage during rare malformed responses.'
        }
      ],
      learnings: [
        'Robust integration patterns when interacting with non-deterministic AI endpoints.',
        'Prompt templating and parameter injection hygiene in Java.'
      ],
      futureImprovements: [
        'Add support for formula typesetting with MathJax / KaTeX rendering.'
      ]
    }
  },
  {
    id: 'plant-disease-detection',
    slug: 'plant-disease-detection',
    title: 'Agricultural Plant Disease Segmentation',
    oneLiner: 'Computer vision pipeline combining MobileNetV3-Small classification with U-Net lesion segmentation.',
    category: 'AI / ML',
    tags: ['Python', 'PyTorch', 'MobileNetV3', 'U-Net', 'Computer Vision'],
    githubUrl: 'https://github.com/Amit-kumar80844/plant-disease-detection',
    status: 'Completed',
    featured: false,
    order: 9,
    caseStudy: {
      problemStatement: 'Crop diseases cause severe agricultural yield loss when undetected in early vegetative stages. Farmers need rapid visual diagnostics without lab tests.',
      whyIBuiltIt: 'To investigate dual-stage computer vision: first identifying the disease class, then segmenting the exact infected leaf surface area.',
      productOverview: 'A lightweight deep learning pipeline utilizing MobileNetV3-Small for disease classification across 38 crop categories, paired with a U-Net architecture for infected lesion mask segmentation.',
      architectureComponents: [
        { name: 'Classifier Backbone', role: 'Predicts crop species and pathogen identity (bacterial, fungal, viral, healthy)', tech: 'MobileNetV3-Small' },
        { name: 'Segmentation Head', role: 'Generates binary pixel masks highlighting necrotic spots on leaf surfaces', tech: 'U-Net Architecture' },
        { name: 'Inference Wrapper', role: 'Serves predictions with bounding box overlays and severity index scoring', tech: 'PyTorch / OpenCV' }
      ],
      techRationale: [
        { tech: 'MobileNetV3-Small', reason: 'Optimized for mobile edge deployment with minimal parameter count and low FLOPs.' },
        { tech: 'U-Net', reason: 'Skip connections preserve fine-grained spatial details necessary for tiny lesion boundary detection.' }
      ],
      coreFeatures: [
        'Dual-stage inference: 38-class classification + pixel-level lesion segmentation',
        'Severity index score based on infected area percentage calculation',
        'Data augmentation pipeline (rotation, color jitter, blur) to resist outdoor lighting variations'
      ],
      engineeringChallenges: [
        {
          challenge: 'Severe class imbalance in agricultural public datasets (e.g. PlantVillage)',
          solution: 'Applied Focal Loss and weighted random sampling during PyTorch training epochs.',
          tradeoff: 'Increased initial training convergence time.'
        }
      ],
      learnings: [
        'Training semantic segmentation architectures with Dice loss and IoU metrics.',
        'Model quantization techniques for shrinking PyTorch models for edge execution.'
      ],
      futureImprovements: [
        'Convert to ONNX runtime and deploy as an offline Android app with NNAPI acceleration.'
      ]
    }
  },
  {
    id: 'mini-inference',
    slug: 'mini-inference',
    title: 'MiniInference — Systems-Oriented Model Runner',
    oneLiner: 'CPU/GPU inference-oriented system exploring tensor execution, memory layout, and systems engineering.',
    category: 'Systems',
    tags: ['C++20', 'Systems Engineering', 'Memory Allocation', 'SIMD', 'Model Execution'],
    githubUrl: 'https://github.com/Amit-kumar80844/mini-inference',
    status: 'Active Development',
    featured: true,
    order: 10,
    caseStudy: {
      problemStatement: 'Heavy frameworks like PyTorch and TensorFlow introduce significant runtime overhead and megabytes of dependencies for simple forward-pass model deployments.',
      whyIBuiltIt: 'To demystify neural network runtime internals by implementing tensor operations, matrix multiplication kernels, and memory arena pooling from scratch in modern C++20.',
      productOverview: 'A minimalist C++20 inference engine focused on cache-conscious tensor representations, contiguous buffer memory reuse, and vectorized matrix multiplication without third-party mathematical runtime bloat.',
      architectureComponents: [
        { name: 'Tensor Representation', role: 'N-dimensional contiguous memory layout with strided indexing and shape broadcasting', tech: 'C++20 std::span & Concepts' },
        { name: 'Arena Memory Allocator', role: 'Pre-allocates intermediate activation buffers, eliminating malloc/free overhead during inference loops', tech: 'Monotonic Bump Allocator' },
        { name: 'Execution Kernel Engine', role: 'Implements tiled GEMM (General Matrix Multiply) with SIMD vectorization primitives', tech: 'C++20 & AVX2 Intrinsics' },
        { name: 'Computation Graph Parser', role: 'Topological sort of node operations for sequential pipeline execution', tech: 'C++ Graph Traversal' }
      ],
      techRationale: [
        { tech: 'C++20', reason: 'Zero-cost abstractions, std::span, and concepts provide compile-time safety without runtime penalty.' },
        { tech: 'Arena Allocator', reason: 'Eliminates memory fragmentation and ensures L1/L2 CPU cache friendly traversal.' }
      ],
      coreFeatures: [
        'Zero external runtime dependencies — pure standard C++20',
        'Contiguous row-major tensor buffers with zero-copy slice and view operations',
        'Tiled cache-conscious matrix multiplication minimizing memory bus bottlenecks',
        'Deterministic execution timing with microsecond telemetry logging'
      ],
      engineeringChallenges: [
        {
          challenge: 'CPU cache misses causing severe slowdowns during large matrix multiplications',
          solution: 'Implemented 2D block tiling matching L1/L2 cache line sizes (64 bytes), keeping working submatrices inside CPU caches.',
          tradeoff: 'Increased code complexity over naive triple-nested loops.'
        }
      ],
      learnings: [
        'Memory access patterns (spatial vs. temporal locality) dominate systems performance far more than raw instruction count.',
        'Designing lock-free data structures and avoiding heap thrashing in the critical execution path.'
      ],
      futureImprovements: [
        'Add Vulkan / OpenCL compute shader backend for cross-platform GPU dispatch.',
        'Implement 8-bit integer quantization (INT8) for weights.'
      ]
    }
  }
];
