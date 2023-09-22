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

## Web Client

**Routes**
| Route                     | Page                  |
| --------------------- | --------------------- |
| /                         | Homepage              |
| /kata                     | Kata problems         |
| /kata/{problem}           | Kata details          |
| /data-structure           | Data structures       |
| /algorithm                | Algorithm problems    |
| /algorithm/{problem}      | Algorithm details     |
| /programmer               | Results: programmers  |
| /programmer/{username}    | Programmer profile    |
| /project/{problem}        | Project details       |

### Page Template
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
- Search programmers => ACTION
- About KataDSA
- Problems: Kata, Data structures, Algorithms
- Footer

**ACTION:** Search by query & Go to Programmer
- Username
- Project name
- Project source

Enter search query => List of matching programmers
Queries paginated: up to 10 results per page

### Programmer
**Route:** /programmer

**Page Template**
- Search
- Results

### KataDSA Problems
**Route:** /kata, /data-structure, /algorithm

**Page Template**
- List of problems

**Component**
------------------------------------------------
Title                                    [scope]
Description...

[source] [resources]                      ACTION
------------------------------------------------
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

**Page Template**
------------------------------------------------
Title                                    [scope]
Extended description...

[source] [resources]                      ACTION
------------------------------------------------
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

**Page Template**
------------------------------------------------
Title [programmer]              [scope] [status]
Extended description...
User comment...

Project Status Timeline...

[source] [resources]                      ACTION
------------------------------------------------
- ACTION:
  - no-auth: (buttons) contact programmer
  - auth: (button) edit project

### Programmer Profile

**Page Template**
- User information
- Projects
- Navigation: contact programmer, 

## Web Server

- User
  - Create: Register or Sign up
  - Read: Login and Account page
  - Update
- Problem
- Project