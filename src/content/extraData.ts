import { Experience, SkillGroup, OpenSourceContribution, Achievement, TechnicalArticle } from '../types/portfolio';

export const experienceData: Experience[] = [
  {
    id: 'autonopros-intern',
    role: 'Software Developer Intern',
    organization: 'AutonoPros',
    period: 'January 2026 – April 2026',
    location: 'Remote',
    type: 'Internship',
    description: 'Contributed to native Android (Kotlin) and cross-platform Flutter application engineering, facilitating architectural migration and delivering high-velocity features.',
    responsibilities: [
      'Developed Android (Kotlin) and Flutter application features, contributing to the migration from a native Android application to a cross-platform solution.',
      'Created reusable Flutter UI components and integrated REST APIs using a modular architecture, reducing codebase duplication and improving development velocity.',
      'Delivered over 60% of the Flutter application’s core functionality, accelerating project progress and ensuring on-time completion of assigned deliverables.'
    ],
    technologies: ['Android', 'Kotlin', 'Flutter', 'REST APIs', 'Modular Architecture', 'Git'],
    links: [
      { label: 'AutonoPros Certificate', url: '#' }
    ]
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', highlight: true },
      { name: 'C++', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'Kotlin', highlight: true },
      { name: 'Python', highlight: true }
    ]
  },
  {
    category: 'Android Development',
    skills: [
      { name: 'Jetpack Compose', highlight: true },
      { name: 'XML Layouts', highlight: true },
      { name: 'MVVM Architecture', highlight: true },
      { name: 'Retrofit', highlight: true },
      { name: 'Coroutines', highlight: true },
      { name: 'Hilt / Dagger', highlight: true },
      { name: 'Room Database' },
      { name: 'CameraX' }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Spring Boot', highlight: true },
      { name: 'Django REST Framework', highlight: true },
      { name: 'GCP (Google Cloud Platform)' },
      { name: 'REST APIs & JWT Auth', highlight: true },
      { name: 'Token Bucket & Rate Limiting' }
    ]
  },
  {
    category: 'Databases & In-Memory Stores',
    skills: [
      { name: 'Redis (Lua Scripting & Caching)', highlight: true },
      { name: 'MongoDB', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'SQLite / Room' }
    ]
  },
  {
    category: 'DevOps, Cloud & Tooling',
    skills: [
      { name: 'Docker', highlight: true },
      { name: 'Kubernetes', highlight: true },
      { name: 'Git & GitHub Workflows', highlight: true },
      { name: 'Linux / POSIX' }
    ]
  }
];

export const openSourceData: OpenSourceContribution[] = [
  {
    id: 'mifos-mobile-contrib',
    project: 'OpenMF Mifos Mobile',
    title: 'Login Screen Input Handling & UI/UX Refinement',
    repoUrl: 'https://github.com/openMF/mifos-mobile',
    prUrl: 'https://github.com/openMF/mifos-mobile/pull/2834',
    prNumber: 'PR #2834',
    description: 'Contributed to OpenMF Mifos Mobile under mentor guidance by improving Login Screen input handling, input validation sanitization, and user experience resilience.',
    technologies: ['Kotlin', 'Android SDK', 'UI/UX', 'Gradle'],
    status: 'Merged',
    date: '2025'
  },
  {
    id: 'algo-university-dp',
    project: 'AlgoUniversity DP Fellowship',
    title: 'Top 1,000 / 40,000+ Applicants Selection',
    repoUrl: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/amit-kumar.png',
    prUrl: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/amit-kumar.png',
    description: 'Selected among top 1,000 participants from over 40,000 national applicants, earning certification from the AlgoUniversity Dynamic Programming Intensive Camp.',
    technologies: ['C++', 'Dynamic Programming', 'Graph Theory', 'Algorithms'],
    status: 'Merged',
    date: '2024'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'dsa-problems-solved',
    title: 'Competitive Programming & DSA Problem Solving',
    category: 'Competitive Programming',
    metric: '750+ Problems',
    description: 'Solved over 750 Data Structures & Algorithms problems across LeetCode, Codeforces, and GeeksforGeeks using C++ and Java.',
    verificationUrl: 'https://leetcode.com/u/Amit_maur/'
  },
  {
    id: 'leetcode-peak-rating',
    title: 'LeetCode Contest Performance',
    category: 'Competitive Programming',
    metric: '1551 Peak Rating',
    description: 'Achieved a peak LeetCode contest rating of 1551, actively competing in algorithmic challenges testing edge-case analysis under clock pressure.',
    verificationUrl: 'https://leetcode.com/u/Amit_maur/'
  },
  {
    id: 'algo-university-camp-cert',
    title: 'AlgoUniversity DP Camp Intensive',
    category: 'Competitive Programming',
    metric: 'Top 2.5% Rank',
    description: 'Selected among top 1,000 from 40,000+ applicants nationally in the Dynamic Programming fellowship intensive.',
    verificationUrl: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/amit-kumar.png',
    certificateUrl: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/amit-kumar.png'
  },
  {
    id: 'academic-performance',
    title: 'IIIT Kottayam Academic Track Record',
    category: 'Academics',
    metric: '8.26 CGPA',
    description: 'B.Tech in Computer Science and Engineering at IIIT Kottayam (2023–2027) with high standing in DSA, Operating Systems, DBMS, OOP, and Networks.'
  },
  {
    id: 'telstra-job-sim',
    title: 'Telstra Software Engineering Job Simulation',
    category: 'Certifications',
    metric: 'Certified SWE',
    description: 'Engineered Spring Boot microservice REST APIs, built automated Cucumber test suites, and performed SonarQube code quality analysis.'
  }
];

export const articlesData: TechnicalArticle[] = [
  {
    id: 'lsm-tree-architecture',
    slug: 'modern-cpp20-lsm-tree-storage-engine',
    title: 'Engineering Blueprint: Designing a Modern C++20 LSM-Tree Storage Engine',
    summary: 'A deep architectural breakdown of Log-Structured Merge-Trees: POSIX crash consistency, lock-free skip-lists, Monkey Bloom filter allocation, and tombstone purging invariants.',
    publishedDate: 'November 2026',
    readTime: '12 min read',
    tags: ['C++20', 'Systems Engineering', 'LSM Trees', 'Storage Engines', 'Distributed Systems'],
    isDraft: false,
    contentMarkdown: `## 1. The Physics of Storage and the LSM Motivation

Understanding the necessity of the LSM-tree requires analyzing the physical limitations of storage hardware. Hard Disk Drives (HDDs) suffer from severe mechanical latency during random seeks, whereas Solid State Drives (SSDs) suffer from write amplification and degraded lifespans due to block-erase mechanics when subjected to random in-place updates.

Traditional B-tree storage engines update data in place. When a workload dictates random insertions, a B-tree must perform O(log N) random disk seeks, dirtying discrete pages that must subsequently be flushed back to disk. This results in heavy I/O bottlenecks and fragmentation.

The Log-Structured Merge-Tree (LSM-tree) circumvents this by buffering all incoming modifications (inserts, updates, and deletes) in a memory-resident structure known as a **MemTable**. When the MemTable reaches a predetermined capacity (e.g. 64MB), its contents are flushed to disk as a strictly sequential, immutable file called a **Sorted String Table (SSTable)**.

Because disk sequential write throughput is orders of magnitude faster than random write throughput, the LSM-tree maximizes hardware utilization.

---

## 2. The Amplification Triad

Engineering any storage engine involves balancing three competing forces:

- **Write Amplification (WA)**: Ratio of physical bytes written to the storage medium versus logical bytes requested by the application. Driven by background compaction passes.
- **Read Amplification (RA)**: Number of physical disk reads or block probes needed to satisfy a single logical point query. Mitigated using Bloom filters and two-level block index caching.
- **Space Amplification (SA)**: Ratio of total disk space consumed to the size of the active, non-superseded dataset. Elevated by historical versions and deletion tombstones awaiting garbage collection.

---

## 3. The Tombstone Purging Invariant

A critical correctness invariant in leveled compaction governs when a deletion tombstone may be physically dropped:

> **Invariant**: A tombstone can only be discarded if (1) it is being merged into the bottom-most level containing any data for that key range, and (2) its sequence number is older than the oldest active read snapshot.

If an engine discards a tombstone prematurely while older versions of that key exist in a lower level (e.g., Level 3), subsequent read queries will miss the tombstone in Level 1/2 and traverse down to Level 3, resurrecting the deleted record and silently corrupting database state.

---

## 4. POSIX VFS Semantics & Crash Consistency

A common pitfall in storage engineering is assuming that calling \`fsync()\` on a file guarantees directory visibility after a sudden power loss:

1. A background compaction finishes, emitting \`000015.sst.tmp\`.
2. The thread issues \`fsync()\` on the temporary file descriptor.
3. The thread issues \`rename("000015.sst.tmp", "000015.sst")\`.
4. Power is lost immediately.

Upon restart, the file may be completely missing from directory listings! Why? Calling \`fsync()\` on a file descriptor only flushes that file's data blocks and direct inode attributes. The \`rename()\` syscall mutates the parent directory's inode. Without explicitly opening the parent directory via \`open(dir_path, O_RDONLY | O_DIRECTORY)\` and invoking \`fsync(dir_fd)\`, the directory entry remains unflushed in the OS page cache, leaving the data stranded on disk.`
  },
  {
    id: 'redis-lua-rate-limiting',
    slug: 'atomic-rate-limiting-with-redis-lua',
    title: 'Eliminating Distributed Race Conditions in API Rate Limiters with Redis Lua',
    summary: 'Why naive multi-step check-and-decrement pipelines fail under burst traffic, and how bundling token refills into single-roundtrip Lua scripts guarantees atomicity.',
    publishedDate: 'October 2026',
    readTime: '8 min read',
    tags: ['Redis', 'Distributed Systems', 'Java', 'Concurrency', 'System Design'],
    isDraft: false,
    contentMarkdown: `## The Multi-Step Race Condition

In high-concurrency microservices, naive rate limiters often read current token state, perform arithmetic in the application server, and write back the updated quota. Under high concurrency, hundreds of requests read the exact same token value simultaneously, resulting in catastrophic quota overshoot.

Distributed locks (Redlock, ZooKeeper) solve this at the cost of multiple network roundtrips and high tail latencies.

## The Atomic Lua Solution

Redis executes Lua scripts atomically in its single-threaded event loop. By passing the client key, capacity, refill rate, and current millisecond timestamp as arguments, the entire refill computation and token decrement occurs without releasing the CPU to other commands.

\`\`\`lua
-- Single round-trip evaluation
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refill_rate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])

local data = redis.call("HMGET", key, "tokens", "last_updated")
local tokens = tonumber(data[1])
local last_updated = tonumber(data[2])
\`\`\`

This reduces network roundtrips from 3 to 1 and provides mathematical guarantees against race conditions.`
  },
  {
    id: 'android-compose-architecture',
    slug: 'unidirectional-state-flow-in-jetpack-compose',
    title: 'Designing Predictable State Machines in Jetpack Compose: Lessons from Production',
    summary: 'Best practices for organizing ViewModel state hierarchies, managing configuration changes, and eliminating recomposition thrashing in modern Android.',
    publishedDate: 'September 2026',
    readTime: '7 min read',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Architecture', 'Mobile'],
    isDraft: false,
    contentMarkdown: `## Unidirectional Data Flow (UDF)

In declarative UI systems like Jetpack Compose, state flows down and events flow up. Treating UI state as a single immutable data class exposed via \`StateFlow<UiState>\` eliminates asynchronous timing bugs where separate LiveData fields update out of order.

Key architectural boundaries:
- **Events**: Sealed interfaces capturing explicit user intentions (e.g. \`RetryDownload\`, \`SearchQueryChanged\`).
- **State**: Single immutable data class consumed by Compose composables via \`collectAsStateWithLifecycle()\`.
- **Side Effects**: Handled through \`SharedFlow\` or \`Channel\` to ensure one-time UI events (Snackbars, Navigation) never trigger repeatedly upon configuration changes.`
  }
];
