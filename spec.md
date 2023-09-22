# KataDSA

## Working Parts

**Technologies**
- Vercel
- Supabase
- Next.js

**Accounts**
- Github Developers api
- Vercel
- Supabase
- Kou.d Blue Github organization

**APIs**
- Github
- IPQualitySource
- Google Safe Browsing Lookup

## Web Client

**Routes**
| Route                     | Page                  |
| ------------------------- | --------------------- |
| /                         | Homepage              |
| /kata                     | Kata problems         |
| /kata/{problem}           | Kata details          |
| /data-structure           | Data structures       |
| /data-structure/{problem} | DS details            |
| /algorithm                | Algorithm problems    |
| /algorithm/{problem}      | Algorithm details     |
| /programmer               | Sear programmers      |
| /programmer/{username}    | Programmer profile    |
| /project/{problem}        | Project details       |

If details are too short, do not create a details page

**Components**
- Create
  - RegisterForm
  - LoginForm
  - AddProjectForm
- List
  - Search (Dummy element: out-of-scope)
  - ProblemCard
  - ProjectCard
  - ProgrammerCard
- Read
  - About and ProblemDescriptions
  - ProblemDetails
  - ProjectDetails
  - ProgrammerDetails
- Update
  - EditProfileForm
  - EditProjectForm

### Site Template
- Header
  - Site logo => home
  - Menu => Kata | Data structures | Algorithms
  - Change color mode
- Footer
  - Developer [smkou]
  - Organization [koudblue]
  - Copyright
- Navigation [Fixed: vertical]
  - [Top right] Go to Account
  - [Bottom right] Back to Top

**Color Modes**
- Light or Dark (base colors for whitespace and text)
- Accents (colors for elements)

### Homepage
**Route:** /
- Menubar
- Search programmers => ACTION: Go to Programmer
- About KataDSA
- Problems: Kata, Data structures, Algorithms
- Footer

**ACTION:** Query by username, project name, and project source
Queries paginated: up to 10 results per page
- How are programmers sorted?

### Programmer
**Route:** /programmer
**Page:**
- Search
- List - ProgrammerCard
**Template**
-------------------------------------------------------------------
[programmer]        [professional] [open_source] [academic] [hobby]

Languages...
Tools-Frameworks...

Learning: [learning_source]
Certifications: [certification_source][auto-mail: out-of-scope, un/confirmed: out-of-scope]

[current_status]                                            CONTACT
-------------------------------------------------------------------
**Data**
- programmer: username (optional: name)
- professional, open_source, academic, hobby: no. of projects
- 

### KataDSA Problems
**Route:** /kata, /data-structure, /algorithm
**Page:** List - ProblemCard
**ProblemCard**
------------------------------------------------
Title                                    [scope]
Description...

[source] [resources]                      ACTION
------------------------------------------------
**Data**
- scope: function | class | module | program
- source: (link) = origin of problem
- resources: (links) = learn more or view source
- ACTION: (button)
  - unauthenticated: search project
  - authenticated: add project | go to project page
Add project:
- Adds project to user's projects
- Go to Github page for template

### Problem Details
**Route:** /kata/{problem-name}, /algorithm/{problem-name}
**Template**
------------------------------------------------
Title                                    [scope]
Extended description...

[source] [resources]                      ACTION
------------------------------------------------
**Data**
- scope: function | class | module | program
- source: (link) = origin of problem
- resources: (links) = learn more or view source
- ACTION: (button)
  - no-auth: search project
  - auth: add project | go to project page
Add project:
- Adds project to user's projects
- Go to Github page for template

### Project Details
**Route:** /programmer/{project-name}
**Template**
------------------------------------------------
Title [programmer]              [scope] [status]
Extended description...
User comment...

Project Status Timeline...

[source] [resources]                      ACTION
------------------------------------------------
**Data**
- ACTION:
  - no-auth: (buttons) contact programmer
  - auth: (button) edit project

### Programmer Profile

**Page Template**
- User information
- Projects
- Navigation: contact programmer, 

### Programmer Account

Project
- status link: required for changing the status of a project
- source links: required for confirming the sources of a project
- type links: required to confirm project type

Project type
- professional: org page
- open source: org page
- academic: course page and uni page
- hobby
Confirm: Programmer = Owner | Collaborator
- if not listed, do not add project to profile
Commits by Programmer / Total Commits
- if 0, do not add project to profile
Repo -> started
Host -> complete | ongoing

## Web Server

- User
  - Create: Register or Sign up
  - Read: Login and Account page
  - Update
- Problem
- Project