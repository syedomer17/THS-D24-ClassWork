const questionsPool = {
  javaScript: [
    {
      question: "What is the output of console.log(typeof null);",
      options: [" object", " null", " undefined", "function"],
      answer: 0,
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: [" String", " Number", " Boolean", " Character"],
      answer: 3,
    },
    {
      question: "What will console.log(2 + '2') output?",
      options: [" 22", " 4", " NaN", " undefined"],
      answer: 0,
    },
    {
      question: "How do you declare a variable in ES6?",
      options: [" let", " var", " const", " All of the above"],
      answer: 3,
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "JSON.toObject()",
      ],
      answer: 1,
    },
    {
      question: "What is the output of console.log(0 == false);",
      options: [" true", " false", " undefined", " Error"],
      answer: 0,
    },
    {
      question: "What does NaN stand for in JavaScript?",
      options: ["Not a Name", "Not a Number", "Not a Null", "None at Node"],
      answer: 1,
    },
    {
      question:
        "Which operator is used to check both value and type in JavaScript?",
      options: [" ==", " =", " ===", " !="],
      answer: 2,
    },
    {
      question: "What is the output of console.log([1, 2] + [3, 4]);",
      options: [" [1, 2, 3, 4]", " 1234", " Error", " NaN"],
      answer: 1,
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      options: [" constant", " const", " let", " var"],
      answer: 1,
    },
    {
      question: "What will typeof NaN return?",
      options: ["number", "NaN", "undefined", "object"],
      answer: 0,
    },
    {
      question: "How can you create an array in JavaScript?",
      options: [
        "let arr = (1, 2, 3);",
        "let arr = [1, 2, 3];",
        "let arr = {1, 2, 3};",
        "let arr = <1, 2, 3>;",
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the map() function in JavaScript?",
      options: [
        "To filter elements of an array",
        "To modify each element of an array and return a new array",
        "To sort an array",
        "To find an element in an array",
      ],
      answer: 1,
    },
    {
      question: "Which function is used to delay execution in JavaScript?",
      options: [" setTimeout()", " delay()", " wait()", " pause()"],
      answer: 0,
    },
    {
      question: "What will console.log(1 + '1' - 1); output?",
      options: [" 11", " 10", " NaN", " undefined"],
      answer: 1,
    },
    {
      question: "Which of the following is a falsy value in JavaScript?",
      options: [" 0", " '' ", " null", " All of the above"],
      answer: 3,
    },
    {
      question: "Which statement is correct about let and var?",
      options: [
        "let is block-scoped; var is function-scoped",
        "Both are block-scoped",
        "Both are function-scoped",
        "let is function-scoped; var is block-scoped",
      ],
      answer: 0,
    },
    {
      question: "How do you check if a variable is undefined?",
      options: [
        "typeof variable === 'undefined'",
        "variable === undefined",
        "typeof variable == undefined",
        "Both a and b",
      ],
      answer: 3,
    },
  ],
  Python: [
    {
      question: "What is the output of print(type(3))?",
      options: [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>",
        "<class 'complex'>",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is used to define a function in Python?",
      options: ["def", "func", "function", "lambda"],
      answer: 0,
    },
    {
      question: "What is the result of 10 // 3 in Python?",
      options: ["3.33", "3", "4", "3.0"],
      answer: 1,
    },
    {
      question: "What is the correct file extension for Python files?",
      options: [".py", ".python", ".pyt", ".txt"],
      answer: 0,
    },
    {
      question: "How do you insert comments in Python code?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "# This is a comment",
        "<!-- This is a comment -->",
      ],
      answer: 2,
    },
    {
      question: "Which of the following is not a valid Python data type?",
      options: ["list", "tuple", "dict", "array"],
      answer: 3,
    },
    {
      question: "What is the output of print(bool(0))?",
      options: ["True", "False", "Error", "None"],
      answer: 1,
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["class", "def", "struct", "type"],
      answer: 0,
    },
    {
      question: "Which function is used to get the length of a list in Python?",
      options: ["length()", "len()", "count()", "size()"],
      answer: 1,
    },
    {
      question: "What does the open() function in Python do?",
      options: [
        "Opens a file",
        "Creates a file",
        "Deletes a file",
        "Renames a file",
      ],
      answer: 0,
    },
    {
      question:
        "Which of the following is the correct syntax for importing a module?",
      options: [
        "import module_name",
        "include module_name",
        "using module_name",
        "require module_name",
      ],
      answer: 0,
    },
    {
      question: "How do you create a tuple in Python?",
      options: ["Using ()", "Using []", "Using {}", "Using <>"],
      answer: 0,
    },
    {
      question: "Which of the following is not a loop in Python?",
      options: ["for", "while", "do-while", "None of the above"],
      answer: 2,
    },
    {
      question: "What is the output of print(2**3)?",
      options: ["6", "8", "9", "Error"],
      answer: 1,
    },
    {
      question:
        "What is the default value of the end parameter in the print() function?",
      options: ["\\n", " ", "None", "\\t"],
      answer: 0,
    },
    {
      question: "What is the output of print('Hello'[1])?",
      options: ["H", "e", "l", "o"],
      answer: 1,
    },
    {
      question: "How do you check the type of an object in Python?",
      options: ["type()", "object()", "class()", "typeof()"],
      answer: 0,
    },
    {
      question: "Which of the following is immutable in Python?",
      options: ["list", "tuple", "set", "dictionary"],
      answer: 1,
    },
    {
      question: "How do you start a block of code in Python?",
      options: [
        "With braces {}",
        "With indentation",
        "With parentheses ()",
        "With a colon :",
      ],
      answer: 3,
    },
    {
      question: "What is the output of print(3 * 'ab')?",
      options: ["'ababab'", "'3ab'", "'ab3'", "'Error'"],
      answer: 0,
    },
  ],
  C: [
    {
      question:
        "Which of the following is used to start the execution of a C program?",
      options: ["main()", "start()", "execute()", "run()"],
      answer: 0,
    },
    {
      question: "Which data type is used to store a single character in C?",
      options: ["int", "char", "float", "double"],
      answer: 1,
    },
    {
      question: 'What is the output of printf("%d", 5+3);?',
      options: ["8", "53", "Error", "None"],
      answer: 0,
    },
    {
      question: "Which symbol is used to indicate a pointer in C?",
      options: ["*", "&", "%", "#"],
      answer: 0,
    },
    {
      question: "What is the correct way to declare an integer variable in C?",
      options: ["int x;", "integer x;", "var x;", "x int;"],
      answer: 0,
    },
    {
      question: "Which of the following loops is not available in C?",
      options: ["for", "while", "do-while", "foreach"],
      answer: 3,
    },
    {
      question:
        "Which library function is used to find the length of a string in C?",
      options: ["strlen()", "length()", "strlength()", "size()"],
      answer: 0,
    },
    {
      question: "How do you include a standard library in a C program?",
      options: ["#include", "import", "use", "require"],
      answer: 0,
    },
    {
      question: "Which keyword is used to define a constant in C?",
      options: ["const", "final", "static", "constant"],
      answer: 0,
    },
    {
      question: "What is the result of 10 % 3 in C?",
      options: ["1", "3", "0", "Error"],
      answer: 0,
    },
    {
      question: "Which function is used to dynamically allocate memory in C?",
      options: ["malloc()", "alloc()", "new()", "allocate()"],
      answer: 0,
    },
    {
      question: "What is the file extension for C source files?",
      options: [".c", ".cpp", ".cs", ".h"],
      answer: 0,
    },
    {
      question: "How do you terminate a statement in C?",
      options: [
        "With a semicolon (;)",
        "With a period (.)",
        "With a comma (,)",
        "With a colon (:)",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is not a valid storage class in C?",
      options: ["auto", "static", "dynamic", "extern"],
      answer: 2,
    },
    {
      question: "What is the output of printf(\"%c\", 'A' + 1);?",
      options: ["B", "A", "Error", "66"],
      answer: 0,
    },
    {
      question: "Which operator is used to access members of a structure in C?",
      options: [".", "->", "*", "&"],
      answer: 0,
    },
    {
      question: "What is the value of sizeof(int) on most systems?",
      options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
      answer: 0,
    },
    {
      question:
        "Which header file is required for input and output operations in C?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      answer: 0,
    },
    {
      question: "How do you write a single-line comment in C?",
      options: ["// comment", "/* comment */", "# comment", "-- comment"],
      answer: 0,
    },
    {
      question:
        "What does the return 0 statement signify in the main() function?",
      options: [
        "Program executed successfully",
        "Program terminated with an error",
        "Program is incomplete",
        "None of the above",
      ],
      answer: 0,
    },
  ],
  TypeScript: [
    {
      question: "Which keyword is used to declare a variable in TypeScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: 3,
    },
    {
      question: "What is TypeScript?",
      options: [
        "A JavaScript framework",
        "A superset of JavaScript",
        "A programming language unrelated to JavaScript",
        "A runtime for JavaScript",
      ],
      answer: 1,
    },
    {
      question: "Which file extension is used for TypeScript files?",
      options: [".ts", ".js", ".tsx", ".tjs"],
      answer: 0,
    },
    {
      question: "How do you define a function in TypeScript?",
      options: [
        "function myFunc() {}",
        "func myFunc() {}",
        "def myFunc() {}",
        "myFunc() => {}",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a valid TypeScript data type?",
      options: ["number", "string", "boolean", "All of the above"],
      answer: 3,
    },
    {
      question: "How do you define an interface in TypeScript?",
      options: [
        "interface MyInterface {}",
        "struct MyInterface {}",
        "class MyInterface {}",
        "module MyInterface {}",
      ],
      answer: 0,
    },
    {
      question: "What does the `readonly` modifier do in TypeScript?",
      options: [
        "Prevents the variable from being reassigned",
        "Makes the variable accessible only within the class",
        "Allows the variable to be modified only within a function",
        "None of the above",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a benefit of TypeScript?",
      options: [
        "Static typing",
        "Improved tooling support",
        "Better code maintainability",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "What is the default access modifier in TypeScript?",
      options: ["public", "private", "protected", "readonly"],
      answer: 0,
    },
    {
      question: "How do you specify an optional parameter in TypeScript?",
      options: [
        "With a question mark (?) after the parameter name",
        "With an exclamation mark (!) after the parameter name",
        "By using the `optional` keyword",
        "By omitting the parameter in the function definition",
      ],
      answer: 0,
    },
    {
      question: "What does `strictNullChecks` do in TypeScript?",
      options: [
        "Allows null and undefined to be assigned to any type",
        "Disables type checking for null and undefined",
        "Enforces stricter checks for null and undefined",
        "Ignores null and undefined in type definitions",
      ],
      answer: 2,
    },
    {
      question:
        "Which utility type makes all properties in an object type optional?",
      options: ["Partial", "Readonly", "Required", "Pick"],
      answer: 0,
    },
    {
      question: "How do you compile TypeScript code?",
      options: [
        "Using the `tsc` command",
        "Using the `node` command",
        "Using the `npm` command",
        "Using the `typescript` command",
      ],
      answer: 0,
    },
    {
      question: "What is the purpose of the `extends` keyword in TypeScript?",
      options: [
        "To inherit properties and methods from another class",
        "To define a variable with extended scope",
        "To declare a global variable",
        "To make a property optional",
      ],
      answer: 0,
    },
    {
      question: "What does the `never` type signify in TypeScript?",
      options: [
        "A variable that always has a null value",
        "A value that will never occur",
        "A type that is not defined",
        "A variable that can hold any value",
      ],
      answer: 1,
    },
    {
      question: "How do you handle modules in TypeScript?",
      options: [
        "Using the `import` and `export` keywords",
        "Using the `require` keyword",
        "Using the `module` keyword",
        "Using the `include` keyword",
      ],
      answer: 0,
    },
    {
      question: "What is the `unknown` type in TypeScript?",
      options: [
        "A type that represents a variable with an unknown value",
        "A type that represents an object without defined properties",
        "A safer version of the `any` type",
        "A type that represents undefined",
      ],
      answer: 2,
    },
    {
      question: "What does `type assertion` do in TypeScript?",
      options: [
        "It converts one type to another",
        "It tells the compiler to treat a variable as a specific type",
        "It validates the type of a variable at runtime",
        "It enforces stricter type checks",
      ],
      answer: 1,
    },
    {
      question:
        "Which decorator is used to define a class as injectable in TypeScript?",
      options: ["@Injectable", "@Inject", "@Component", "@Service"],
      answer: 0,
    },
    {
      question:
        "How do you specify the return type of a function in TypeScript?",
      options: [
        "function myFunc(): string {}",
        "function myFunc: string {}",
        "function myFunc -> string {}",
        "function myFunc { string }",
      ],
      answer: 0,
    },
  ],
};
module.exports = questionsPool;