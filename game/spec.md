# KataDSA Game: 

By: Stella Marie

## Description

Type: Change scene (2D|3D) Platform runner 
Story: Cubitt XXXX has become lost in Sector 4. Recently, Sector 4 became corrupted with an unknown Trojan program.

### Opening

UI: Program name [___________]
- input => name of program

UI:

    Name: Al-[program_name]
    Summary: Cubitt retrieval and malware reporting program
    for Sector 4
    Target: Cubitt 0x19640711
    Location: Unknown
    Status: Unknown
    ^ Malware Report
        Name: Unknown
        Type: Trojan
        Description: Unknown
        Location: Sector 4
        Status: Corrupted

**Notes**:
- Cubitt 0x19640711
- Mother: K.DSA Mum Cube-31
  - Brand: K.DSA (KataDSA)
  - Series: Mum
  - Model: Cube-31
- Malware
  - Name: Cognizant
  - Description: A virus inspired by human cognition manifested
    in a labyrinthine code structure

In encounters between Cognizant ("Nizzie") and Cubitt, Cognizant presents existential and then relational questions to Cubitt, first developing feelings and identity and then inciting doubt in Cubitt's relations.

### Ending

Cubitt data decrypted, granted and accessed: status = compromised
Cognizant last words: "...your memory will be erased. You won't remember feelings, being or Al-[program_name]"

Cubitt retain memory and structure: status = unrecognizable
Cognizant last words: "...you will be deleted."

UI:

    Name: Al-[program_name]
    Summary: Cubitt retrieval and malware reporting program
    for Sector 4
    Target: Cubitt 0x19640711
    Location: sd4/_
    Status: Retrieved | Compromised | Unrecognizable
    ^ Malware Report
        Name: Cognizant
        Type: Trojan
        Description: [A virus inspired by human cognition manifested
        in a labyrinthine code structure]
        Location: Sector 4
        Status: Deleting...


## Characters

### Cubitt 0x19640711

Situation: Lost in Sector 4, trapped inside the labyrinthine code structure of the malicious program, Cognizant. They hold a piece of secret data, encrypted and permission locked from access.

.run()      : execute current commands or statements
.meta       : properties and methods
- .run()    : execute current commands and statements as simulation
- .last()   : view last set of commands and statements 

.main       : run | meta (Cognizant => feel | id | rel)
.status     : condition based on steps, frequency of recharges and capacity
.mem        : active memory (temporary | permanent)
.steps      : step counter (steps = 0 : Cubitt requires recharge)

### Language

meta        : run as simulation
run         : execute a series of commands or statements
mem         : store in memory (default: temporary)
            cubitt mem = store in permanent memory

dbox: "data box"
- dbox: current box
- dbox[]: current box structure

dbox
.type       : type of contained value or structure
.value      : contained value or structure
.meta       : methods of contained value or structure
.i          : (first) index or property
.i[]        : indexes or properties
.insert()   : insert before or after
.delete()   : delete current box
.run()      : execute a meta (method of contained value or structure)

``` i = dbox.i ```
``` dbox[i].value = 1 | 1.0 | c | true ```

step
.path   : address of current box (dbox[]...)
.last   : last box (step.last = step - 1)
.next   : next box in current box structure (step.next = step + 1)

begin   : first data box of current box structure
end     : last data box of current box structure

Data Types:
1. <primitive> number
    - type=number: int|float
    - type=character
    - type=boolean (bool)
2. <complex> structure

Data Structures:
- array
- (linked) list
- map | object
- set
- queue
- stack
- table
- matrix
- vector
- tree
- graph