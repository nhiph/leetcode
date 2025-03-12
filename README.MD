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
    