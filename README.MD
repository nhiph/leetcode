w3: js dive deep
w4: dsa
w5: react
w6: node - test
w7: advanced
w8,9,10: project-itv

# 1. Variables
- Primitive type - immutable: 7 types of data 
    + undefined: k gia tri k co y
    + null: k gia tri co y, typeOf null -> object ??
    + boolean: true/ false
    + number: special numbers NAN, Inf, -Inf, -0
    + bigInt: calcultate for number too large more than 8 digits
    + string: 
    + symbol: 

- Reference type - mutable: Object, Func

=> 2 important thing to remembers
- left = right 
    + left: variable in planet
    + right: expression, star outside planet, try to implicite parse expression to value outside planet and reach the value (of primitive value) or reach to the address (of reference value)

- Mutable & immutable

- Equality of Values
    + ==: auto parse the same type => compare value
    + ===: compare type & compare value
    + strict: NaN === NaN : false
    + loose: [] == '': true, true == [1]: true, false == [0]: false  
# 2. Git
- records changes
- recovery files
- avoid conflict when develop
- 4 env: workspace (working env) (changed code), index (save every thing in local - git added), local repo (committed), remote repo (pushed)

add, pull, push, checkout, cherry pick, revert, reset, copy change from other branch, squash into 1 commit, merge, rebase, stash, status
git init: create a local repo
git remote add: connect local repo to remote repo
git clone: get clone remote repo
git add: 
worksapce => index => local => remote


- best practise: small & focused commit, clear & consise message, branch frequency to isolate changes, pr, do not commit half done code, use one git workflow or convention
secure github acc with 2 factor authentication, use ssh keys instead of https

# 3. Software Development Life cycle
+ the procees of design coding test and maintain app
+ to make sure effective, on time ,quality

Phase
+ Planning: 
    - discuss requirments 
    - clear details of end users
    - overal & detail UI 
+ Requirement analysis: BA || PO
    - check existing feature already cover new requirement
    - check risk analysis when add new features
    - have final document of software requirments
+ design: solution design works with BA || PO
    - architecture/system: design api, ....
    - UI/UX
    - has final deisgn document specification & features 
+ implementation:
    - after grooming meeting, developer will implement code
+ testing
    - unit test/ component test/ e2e / (user acceptance test)
    - bug => implementation
    - conflict, if QA & Dev conficq smt not in requirement analysis => BA || PO will get involved to decide again
+ deploy
+ maintain
## 3.1 type of models

### Waterfall
### Interative - cyclic Model
     - adapt with increasement, requirement increase time to time
### Agile Model
    - adapt with changes and continuous CI, CD, not increasement, break work into small to delivery small task, then recive feedback and move feedback to later sprint
## 3.2 framework
    - Scrumb
    - Kanban
    - Extreme Programming (XP)

# 4. Conditional statements
Resources to practice leetcode:

    - 30 days of js (leetcode)
    - top interview 150 leetcode
    - leetcode 75

    - js advanced: https://www.udemy.com/course/understand-javascript/?couponCode=ST1MT31025G3#reviews
    - fulstack: https://fullstackopen.com/en/
    - https://github.com/getify/You-Dont-Know-JS
    - https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOooPNubzepPru14_7L0FX6rf5ZEuJ66fGMQl2jXYk-gr-67vQtvr&couponCode=ST1MT31025G3
    - java concept https://www.learncs.online/
    - Node, react app, webpack, babel, swagge, oauth, restful API, graphqL, java, springboot, db
    - https://www.javascripttutorial.net/
    - https://ui.dev/
    

## 4.1 type conversion & type coercion
- conversion: force by developer Ex: Number('13')
- coercion: js engine auto convert
- rules to convert 
- undefined == null // true, undefined === null // false (data type of undefined of undefined, null is object)


- mutability & immutability

- syntax for conditions: 
    + Ternary: expression ? True : False
    + Nullish coalescing operator: left ?? right (only right when left null or undefined)
    + Logical OR: val1 || val2 

- Best practises
    + Can use lookupTable or mapKeyVal or Enum to generate fixed data
    + Avoid nested if/else, consolidate conditions in one if/else, name for variable with meaningful condition
    + Early return, multi-exist point
    + wrap logic inside block {}

- switch/case


# 5. Loops & Recursive
    
# 6. Functions & Scope
## 6.1 Functions
- there're 3 ways to declare a funciton
- behind the scene: 
    + allocation memory
    + execution phase

- var, setTimout, setInterval auto allocate in Global 
- rest args in func

## 6.2. Scope in JS
- global: var, function declaration will be hosted in global scope
- function: var
- block: const, let
- scope chain: priority order in scope: 
    + block current => block nearest => script => global

## 6.3 Closure

## 6.4 Eecution context

## 6.5 HOC

## 6.6 Callback

## 6.7 iife
- immediately invoke function expression

## 6.8 this Obj

# 7. Async - sync
- js is a single threaded, for long task (async task) will move to macro task to avoid blocking remaining tasks

- promise.all, use promise.allSettled 

- in promise chain, the 1 promise force resolve or reject, 
- but from second promise: return value from promise 1 will success in promise 2
- but from second promise: return Promise.reject from promise 1 will failed in promise 2

- priority: promise > setTimeout(fn, 0) > 

# 8. Seft Assignment
# 9. DSA
## 9.1 DSA
- Data structure: A way of organize and store data in computer for accesing and using effectively
- Algorithm: a step of instructions to gude step by step to solve a specific problem
- How does a computer store data?
    - Register: directly assessed by CPU, cpu will get from Cache or Main Memory
    - Cache: keep memory in Ram for acees quickly
    - Main Memory: Ram - (capacity: storage for  active programs - watch in acitve monitor for Ram using/ RAM max)
    - Electron Disk: SSD (used mostly) (volumn: storage permanent)
    - Magnetic Disk: HDD (many years ago) (volumn: storage permanent) recently, most computer not use HDD anymore

    Ex: this computer Ram : 16GB, 
## 9.2 BigO Notation
- 1: constant 
- log(n): logarithm 
- n: linear
- nlog(n): log-linear
- n^2: (quadratic) 
- 2^n (expotential) not recommended
- n! (worse) not recommended

## 9.1 Data structure in use
- How does array store in Ram? pro vs cons and compared to linked list
    - array will create new address when add an element
    - linked list will refer to a node when a, no need to create a new address
## 9.1 Basic Algo
    - Try BFS, DFS
## 9.1 Q & A

