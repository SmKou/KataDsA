# Capstone Proposal: KataDsA

**Student Name:** Stella Marie
**Project Name:** KataDsA (Kata Data structures Algorithms)
**Project Purpose/Goal:** KataDsA is a projects organizer for programmers that includes searchable profiles, github fetching for project content and assessment, and organization of template projects for practicing and learning data structures and algorithms.

## Minimum (viable) Features of MVP
- Web App (frontend client)
- Web Api (backend server)
- Database
- Github template projects

### Web App
- Search programmers
    - Username
    - Project name
    - Technologies used or known
- User profile page
    - Stats
        - No. of projects
        - No. of projects by type: academic, professional, open source, hobby
        - Languages
        - Tools and frameworks
    - Projects
        - Status: Not started (no link), In progress (github repo), Complete (host)
- Trackers
    - Browse template projects, add to profile and go to github repo to download
    - Kata page
    - Data structures page
    - Algorithms page
- User account page

KataDsA

- Meaning: Kata Data structures Algorithms
- What is a Kata?
  A kata is a martial arts term for a system of individual training exercises. Web apps offering coding challenges like CodeWars, CodeKata, and Coding Dojo for example, have small coding exercises they call kata.
- What is a Data structure?
  According to Wikipedia, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. We can take this to mean a programming construct that holds accessible local and/or shared memory.
- What is an Algorithm?
  According to Wikipedia, an algorithm is a finite sequence of rigorous instructions.

### Web API
- User authentication
    - MFA
    - JWT
    - Encryption
- Link github to user
- Add projects to user account
- Fetch github repo details
    - readme
    - languages

### Database
- User information
    - User analysis
- Project information

### Github repo: Kou.d Blue
- Data structures template project
- Algorithms template project
- Kata template project (per kata)

### Technologies and Resources

**Tools**
- Vite

**Frameworks**
- Vue.js (in-consideration)
  - alternatives: React | SvelteKit | Lit

**Libraries**
- Tailwind CSS
- Express
- Knex
- Bcrypt
- Octokit

**APIs**
- Github REST API

**Modules**
- Color modes
    - Light
    - Dark
    - Color blind (if needed)

**Other Resources**

- Postgres (databse)
- [Render.com](http://render.com/) (host)

## Stretch Goals
- Learning status
    - Add links to courses and bootcamps
    - Upload certificates or certificate urls
- Add project presentation support
    - Iframe loading
    - Mockup replication
    - Image slideshow
- Add custom project statuses
- Custom profile layouts and aesthetics
- Cartoon profile images
- Custom banners

### Technologies and Resources

**APIs**
- Canvas / WebGL (possible: Pixi.js)

## Later Goals
- Github login
- Code editor
- Side-by-side view

### Technologies and Resources

**Libraries**
- CodeMirror components

**Modules**
- Page layout