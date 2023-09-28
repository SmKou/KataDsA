# Capstone Proposal: KataDsA

**Student Name:** Stella Marie
**Project Name:** KataDSA (Kata Data structures Algorithms)
**Project Purpose/Goal:** KataDsA is a projects organizer for programmers that includes searchable profiles, github fetching for project content and assessment, and organization of template projects for solving problems.

## Minimum (viable) Features of MVP

**Client**
- Homepage
  - Search -> Programmers
- Programmers
  - Profile
    - Project Details
- Kata
  - Prompt | Project : Details
- Data Structures
  - Prompt | Project : Details
- Algorithms
  - Prompt | Project : Details
- Register
  - AccountForm: add user
- Login (auth: Logout)
  - Account
  - AccountSettings
  - AccountForm: edit user
  - ProjectForm: add project
  - ProjectForm: edit project

**Server**
| Route                                 | Response                              |
| ------------------------------------- | ------------------------------------- |
| /login                                | User login: Github or email           |
| /logout                               | Logout session                        |
| /register                             | Create new user                       |
| /programmer                           | List of programmers (paginate, query) |
| /programmer/public/{username}         | Programmer profile (searchable)       |
| /programmer/{username}                | Programmer profile                    |
| GET /programmer/{username}            | _auth_ Programmer account             |
| POST                                  | _auth_ Create: Programmer account     |
| PUT                                   | _auth_ Update: Programmer account     |
| DELETE                                | _auth_ Delete: Programmer account     |
| /project/{username}                   | List of user's projects               |
| /project/{username}/{project-name}    | Project details for user project      |
| POST                                  | _auth_ Create: Project                |
| PUT                                   | _auth_ Update: Project                |
| DELETE                                | _auth_ Delete: Project                |
| /project/{project-type}               | List of prompts (paginate, query)     |
| /project/{project-type}/{project-name}| Prompt or Project details             |

**Database**
Users
Contacts
Settings
Institutions
- User_Education
- User_Occupations

Projects
Sources
Resources
Project_Resources

User_Projects
Project_Updates

### Technologies and Resources

**Tools**
- Vercel
- SupaBase

**Frameworks**
- Next.js (React)

**Libraries**
- Tailwind
- PostCSS
- AutoPrefixer
- Ping

**APIs**
- Github Developers (Octokit)
- IPQualityScore
- Google Safe Browsing (Lookup)

**Modules**
- Color modes
    - Light
    - Dark
    - Color blind (if needed)

## Stretch Goals
- Github api: Auto-populate project information
- Learning status
  - Add links to courses and bootcamps
  - Add certificate urls

## BackLog

**Programmer Experience**
- Label projects: professional, open source, academic, or hobby
- Add LinkedIn api: fetch profile information
- Add Youtube api: conference video links and fetch video title and description
- Professional verification
- Open source verification
- Academic verification
- Database: Add ProOpenSource_Project and Education_Project

**User Authenticity Verification**
- Upload certificates and degree documents
- Lookup registrar contact for accedited institution
- Constuct email with list and send for confirmation
- Affirm attendance
  - real name
  - accredited institution
  - class or course
  - degree and graduation month-year

**Project Status**
- KataDSA Project versions
- Verify user version update
- Code tracker tokens and file locations

**In-place Submission**
- Code editor
- Side-by-side view

**Project Presentation**
- Add project presentation support
    - Iframe loading
    - Mockup replication
    - Image slideshow

**Profile Customization**
- Add custom project statuses
- Custom profile layouts and aesthetics
- Cartoon profile images
- Custom banners

### Technologies and Resources

**Libraries**
- CodeMirror components

**Modules**
- Page layout

**APIs**
- Canvas / WebGL (possible: Pixi.js)