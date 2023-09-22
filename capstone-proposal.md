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
[/]
- Homepage
    - Search programmers: username, project name, technologies
    - About KataDsA
        - Kata: A kata is a martial arts term for a system of individual training exercises. Web apps offering coding challenges like CodeWars, CodeKata, and Coding Dojo for example, have small coding exercises they call kata.
        - Data structure:  According to Wikipedia, a data structure is a data organization, management, and storage format that is usually chosen for efficient access to data. We can take this to mean a programming construct that holds accessible local and/or shared memory.
        - Algorithm: According to Wikipedia, an algorithm is a finite sequence of rigorous instructions.
[/{problem-type}]
problem-type: kata | data-structure | algorithm
- Katas | Data structures | Algorithms
    - Search problems: status, entity name, source
        - Add to profile | Get Github template project
        - View status
[/{problem-type}/{problem-name}]
- Details page
    - Title
    - Source
    - Status
    - Extended description
    - Resources
[/programmer]
- Programmers [list returned from search query]
[/programmer/username]
- Progrmmer profile
    - Stats
        - No. of projects (by type): academic | professional | open source | hobby
        - Languages
        - Tools and frameworks
    - Projects
        - Title
        - Status and links
        - Description
[/user-account/username]
- Programmer account
    - Modify information
        - Github username
        - Languages, tools and frameworks
        - Learning and Certifications
    - Manage projects
        - Add link (change project status)
        - Add to information: resources or description
    - Add project
  
### Web API
[/]
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
- Authentication (Github)
- User information
- Project information

### Github repo: Kou.d Blue
- Data structures template project
- Algorithms template project
- Kata template project (per kata)

### Technologies and Resources

**Tools**
- Vite

**Frameworks**
- Vue.js | React | SvelteKit | Lit & Htmx

**Libraries**
- Express
- Knex
- Bcrypt

**APIs**
- Github REST API

**Modules**
- Color modes
    - Light
    - Dark
    - Color blind (if needed)

**Other Resources**
- Postgres (database)
- Supabase (host)

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
- Code editor
- Side-by-side view

### Technologies and Resources

**Libraries**
- CodeMirror components

**Modules**
- Page layout