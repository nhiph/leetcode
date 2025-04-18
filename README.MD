w3: js dive deep
w4: dsa
w5: react
w6: node - test
w7: advanced
w8,9,10: project-itv

# 1. Variables

- Primitive type - immutable: 7 types of data

  - undefined: k gia tri k co y
  - null: k gia tri co y, typeOf null -> object ??
  - boolean: true/ false
  - number: special numbers NAN, Inf, -Inf, -0
  - bigInt: calcultate for number too large more than 8 digits
  - string:
  - symbol:

- Reference type - mutable: Object, Func

=> 2 important thing to remembers

- left = right

  - left: variable in planet
  - right: expression, star outside planet, try to implicite parse expression to value outside planet and reach the value (of primitive value) or reach to the address (of reference value)

- Mutable & immutable

- Equality of Values
  - ==: auto parse the same type => compare value
  - ===: compare type & compare value
  - strict: NaN === NaN : false
  - loose: [] == '': true, true == [1]: true, false == [0]: false

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

- the procees of design coding test and maintain app
- to make sure effective, on time ,quality

Phase

- Planning:
  - discuss requirments
  - clear details of end users
  - overal & detail UI
- Requirement analysis: BA || PO
  - check existing feature already cover new requirement
  - check risk analysis when add new features
  - have final document of software requirments
- design: solution design works with BA || PO
  - architecture/system: design api, ....
  - UI/UX
  - has final deisgn document specification & features
- implementation:
  - after grooming meeting, developer will implement code
- testing
  - unit test/ component test/ e2e / (user acceptance test)
  - bug => implementation
  - conflict, if QA & Dev conficq smt not in requirement analysis => BA || PO will get involved to decide again
- deploy
- maintain

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

  - Ternary: expression ? True : False
  - Nullish coalescing operator: left ?? right (only right when left null or undefined)
  - Logical OR: val1 || val2

- Best practises

  - Can use lookupTable or mapKeyVal or Enum to generate fixed data
  - Avoid nested if/else, consolidate conditions in one if/else, name for variable with meaningful condition
  - Early return, multi-exist point
  - wrap logic inside block {}

- switch/case

# 5. Loops & Recursive

# 6. Functions & Scope

## 6.1 Functions

- there're 3 ways to declare a funciton
- behind the scene:

  - allocation memory
  - execution phase

- var, setTimout, setInterval auto allocate in Global
- rest args in func

## 6.2. Scope in JS

- global: var, function declaration will be hosted in global scope
- function: var
- block: const, let
- scope chain: priority order in scope:
  - block current => block nearest => script => global

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
  - Main Memory: Ram - (capacity: storage for active programs - watch in acitve monitor for Ram using/ RAM max)
  - Electron Disk: SSD (used mostly) (volumn: storage permanent)
  - Magnetic Disk: HDD (many years ago) (volumn: storage permanent) recently, most computer not use HDD anymore

  Ex: this computer Ram : 16GB,

## 9.2 BigO Notation

- 1: constant, not depend on input Ex: for (1 -> 1000)
- log(n): logarithm: binary search
- n: linear
- nlog(n): log-linear
- n^2: (quadratic)
- 2^n (expotential) not recommended
- n! (worse) not recommended

## 9.1 Data structure in use

- How does array store in Ram? pro vs cons and compared to linked list
  - array will create new address when add an element, create many memory every time add ele, consume memory
  - linked list will refer to a node when a, no need to create a new address

## 9.1 Basic Algo

    - Try BFS, DFS

## 9.1 Q & A

# 10 DSA Basic

// fragmentation
// random access

## 10.1 Stack: history

## 10.2 Queue: order priority

## 10.3 Hash Table: set, map, O(1) for operatons add, delete, edit

- Research Hash Table
- Hash table has 3 components
  - key, hash function, bucket
- Hash table allows to store key-value pairs
- Refer to Set vs Map in JS

## 10.4 Algorithm

    Binary search: O(logn) < Interpolation search O(log(logn))

## 10.5

    - BFS: go to nearest node
    - DFS: first choose one direction => then go until can not process furthur

## 10.6

- sliding window: keep moving follow fixed size until the end of the array, need to know the elements inside a range size
- two pointers:
  - start/ end
  - start/ start + n

nab codility belt:

- yellow: 2 easy 1 med
- brown: 2 med
- black: 1 hard

# 11. REACT BASIC

- load html one time for first time, then use update by state, load het logic js,...
- React is a Javascript library for building User Interface
- DOM: Document Object Model
- Engine: Virtual Dom with React Reconcilation, compare which element different, Dom draw updated node, no need to render all dom tree
- Vite: use rollup to bundler - create react use wedpack
- Compare compiler with bundler
- stateless & stalefull component
- lifecycle
- declarative && imperative

- React.memo (find out compare old prop with new prop)
- useMemo
- useCallback
- design composition in react/ inheritance
  Ex: children init insde granparent and pass to parent,
  Ex
  <Grandpa>
  <Parent>
  <Child></Child>
  </Parent>
  </Grandpa>

  Order render:
  parent > children

  - parent render => children render => children mount => parent mount
  - abort controller or dung ignore

  - useEffect (no wait layout paint), useLayoutEffect (wait screen paint and run)
  - ways to pass state from child to parent =>
    - global store
    - render prop
    - move state manage in context/ ref imperial
    - move to parent to manage and pass prop

- Questions for React

- 1: event.stopPagination(): prevent child to parent
- 2: why label have htmlFor: when user click label will refer to relevant input
- 3: not use key
- 4: 2 ways binding, bind value to state, bind onchange to value
- 5:

# 12. Node
## 12.1 NodeJS
- JS runtime built on Chrom's V8 engine
- Event-driven, non-blocking I/O model
- Fast, scalable, efficient
- OS Operation, LibUV (async I/O), 

## 12.2 Databse
- ACID
  - Atomic
  - Consistency
  - Isolation
  - Durability

- 2 types of DB: SQL & NoSQL
  - NoSQL: quick & easily scalability => high avialeble but not consistency when distribute traffic during scaling. 
  - SQL: make sure consistency

  => CAP theo rem: trade off when chosing type of database (Consistency | Availability | Partition Tolerence)
  
## 12.3 Intergrat React with Nodejs
- React after build become static files, including codebase. 
- After frontend build, Proxy mechanism & Reverse Proxy (through nginx: roles as a web server, load balancer to distribute your static code to server) to prefer to server in package.json
## 12.4 NodeJS
- Local: FE => PROXY => BE => DB
- Cloud: 
  - Before deploy: write docker file and wrap into docker image => help to avoid affects by environment
  
=> Every thing is connected by proxy
- Side car pattern

## 12.5 Some Middlewares in Express
- Body Parser: When sending api to BE, the request payload under the type of html || xml || yaml, BE can not read this file => need to parse these types into json like (body parser)
- Morgan: hanlde log level information like (ERROR, INFO), help a lot in cloud to show log level => Should enable morgan and format type of returned information
- CORS: preflight
- Cookie parser: 

- Strategies: Saml, JWT, OAUTH, LDAP, PASSKEY
- XSS attack, store in cookies will avoid XSS attack

## 12.6 Best Practices
- Use HTTPs
- Environment variables fro secrets
- Valid input thoroughly
- Use secure cookies


keyworks: OSI model, harshicorp
