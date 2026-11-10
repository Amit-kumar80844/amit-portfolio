# Amit Kumar — Personal Software Engineering Portfolio

A production-grade, dark editorial personal engineering portfolio for **Amit Kumar**, Computer Science and Engineering undergraduate at IIIT Kottayam (Class of 2027).

Positioned as: **"A Software Engineer who builds products, mobile applications, and scalable backend systems."**

---

## Technical Highlights

- **Design System**: Dark editorial aesthetic with charcoal base (`#090B0A`), warm white typography (`#F3F4EF`), muted slate secondary text (`#9A9F99`), and electric lime accents (`#B7F36B`).
- **Interactive 3D Storage Simulation**: High-fidelity procedural 3D model built with Three.js (`threejs` skill) demonstrating LSM-Tree memory and storage hierarchies (MemTable skip-list, 32KB WAL chunks, Level 0 SSTables, and Level 1 compactions) with ACESFilmic tone-mapping, `RoomEnvironment`, and a collapsible bottom HUD dock.
- **Projects & Case Studies**: 10 comprehensive project records with deep architectural breakdowns, failure mode analyses, trade-offs, and Lua/C++ code excerpts.
- **Recruiter-Friendly Resume Viewer**: One-click printable and saveable formatted Curriculum Vitae matching industry standards.
- **Strict Anti-Slop & UX Compliance**: Clean unboxed metadata with typographic separators, zero fake progress bars, zero hallucinated benchmark numbers, responsive sticky navigation adhering to the Top Bar Contract, and keyboard accessibility (ESC to close dialogs).

---

## Project Structure & Content Editing Guide

All content is fully decoupled from UI components in typed TypeScript configurations:

```
src/
├── content/
│   ├── profile.ts       # Personal bio, education, headline, contact URLs, avatar path
│   ├── projects.ts      # Projects database with architecture diagrams, rationales, challenges
│   └── extraData.ts     # Experience (AutonoPros), skills, open-source PRs, achievements, articles
├── components/
│   ├── Navbar.tsx       # 3-zone sticky navigation with mobile drawer
│   ├── Hero.tsx         # Asymmetric 2-column hero with studio portrait
│   ├── About.tsx        # Engineering narrative, principles, and education details
│   ├── ProjectsSection.tsx # Category-filtered dynamic Bento showcase
│   ├── ProjectModal.tsx # Full case study deep-dive modal
│   ├── Experience.tsx   # Verified chronological internship timeline
│   ├── SkillsSection.tsx# Categorized capabilities without fake progress bars
│   ├── EngineeringSection.tsx # Technical writing + 3D LSM simulation
│   ├── StorageEngine3D.tsx    # Three.js PBR procedural simulation
│   ├── CredentialsSection.tsx # Open-source contributions & competitive programming
│   ├── ContactSection.tsx     # Copy-email interaction, social links & contact form
│   ├── ResumeModal.tsx  # Printable Curriculum Vitae modal
│   └── Footer.tsx       # Minimalist footer with dynamic copyright year
└── types/
    └── portfolio.ts     # Central TypeScript type definitions
```

### How to Update Content:

1. **Add a New Project**: Open `/src/content/projects.ts` and append a new object conforming to the `Project` interface.
2. **Update Experience or Roles**: Edit `experienceData` in `/src/content/extraData.ts`.
3. **Update Algorithmic Achievements (LeetCode/GFG)**: Update `achievementsData` in `/src/content/extraData.ts`.
4. **Publish New Technical Articles**: Add a record with markdown content to `articlesData` in `/src/content/extraData.ts`.
5. **Update Personal Profile / Contact Info**: Modify `profileData` in `/src/content/profile.ts`.

---

## Development & Build Commands

```bash
# Start development server
npm run dev

# Run TypeScript typechecks
npm run lint

# Production build
npm run build
```
