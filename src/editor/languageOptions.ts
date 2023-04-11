const languageOptions = [
  {
    id: "ada",
    name: "Ada",
    versions: [
      "GNATMAKE 6.1.1",
      "GNATMAKE 7.2.0",
      "GNATMAKE 8.1.0",
      "GNATMAKE 9.1.0",
      "GNATMAKE 11.1.0",
    ],
  },
  {
    id: "algol",
    name: "Algol 68",
    versions: ["Genie 2.8.5"],
  },
  {
    id: "awk",
    name: "AWK",
    versions: ["GNU Awk 5.1.1, API: 3.1"],
  },
  {
    id: "bash",
    name: "Bash Shell",
    versions: ["4.3.42", "4.4.12", "4.4.19", "5.0.011", "5.1.12"],
  },
  {
    id: "bc",
    name: "BC",
    versions: ["1.06.95", "1.07.1"],
  },
  {
    id: "befunge",
    name: "Befunge",
    versions: ["cfunge 0.9.0"],
  },
  {
    id: "blockly",
    name: "Blockly",
    versions: ["Dart", "Lua", "PHP", "Python"],
  },
  {
    id: "brainfuck",
    name: "Brainf**k",
    versions: ["bfc-0.1"],
  },
  {
    id: "c",
    name: "C",
    versions: [
      "GCC 5.3.0",
      "Zapcc 5.0.0",
      "GCC 7.2.0",
      "GCC 8.1.0",
      "GCC 9.1.0",
      "GCC 11.1.0",
    ],
  },
  {
    id: "c99",
    name: "C-99",
    versions: [
      "GCC 5.3.0",
      "GCC 7.2.0",
      "GCC 8.1.0",
      "GCC 9.1.0",
      "GCC 11.1.0",
    ],
  },
  {
    id: "clisp",
    name: "CLISP",
    versions: [
      "GNU CLISP 2.49 - GNU C 5.2.0 ",
      "GNU CLISP 2.49 - GNU C 6.2.1",
      "GNU CLISP 2.49.93 - GNU 8.1.0",
      "GNU CLISP 2.49.93 - GNU 9.1.0",
      "ecl 21.2.1",
      "sbcl 2.1.9",
      "ccl 1.12.1",
      "abcl 1.8.0",
    ],
  },
  {
    id: "clojure",
    name: "Clojure",
    versions: ["1.8.0", "1.9.0", "1.10.1", "1.10.3"],
  },
  {
    id: "cobol",
    name: "COBOL",
    versions: [
      "GNU COBOL 2.0.0",
      "GNU COBOL 2.2.0",
      "GNU COBOL 3.0",
      "GNU COBOL 3.1.2",
    ],
  },
  {
    id: "coffeescript",
    name: "CoffeeScript",
    versions: ["1.11.1", "2.0.0", "2.3.0", "2.4.1", "2.6.1"],
  },
  {
    id: "cpp",
    name: "C++",
    versions: [
      "GCC 5.3.0",
      "Zapcc 5.0.0",
      "GCC 7.2.0",
      "GCC 8.1.0",
      "GCC 9.1.0",
      "GCC 11.1.0",
    ],
  },
  {
    id: "cpp14",
    name: "C++ 14",
    versions: [
      "g++ 14 GCC 5.3.0",
      "g++ 14 GCC 7.2.0",
      "g++ 14 GCC 8.1.0",
      "g++ 14 GCC 9.1.0",
      "GCC 11.1.0",
    ],
  },
  {
    id: "cpp17",
    name: "C++ 17",
    versions: ["g++ 17 GCC 9.1.0", "g++ 17 GCC 11.1.0"],
  },
  {
    id: "csharp",
    name: "C#",
    versions: [
      "mono 4.2.2",
      "mono 5.0.0",
      "mono 5.10.1",
      "mono 6.0.0",
      "mono-6.12.0",
    ],
  },
  {
    id: "d",
    name: "D",
    versions: [
      "DMD64 D Compiler v2.071.1",
      "DMD64 D Compiler v2.088",
      "DMD64 D Compiler v2.098",
    ],
  },
  {
    id: "dart",
    name: "Dart",
    versions: ["1.18.0", "1.24.2", "1.24.3", "2.5.1", "2.14.4"],
  },
  {
    id: "elixir",
    name: "Elixir",
    versions: ["1.3.4", "1.5.2", "1.6.4", "1.9.1", "1.12.2"],
  },
  {
    id: "erlang",
    name: "Erlang",
    versions: ["22.1", "24"],
  },
  {
    id: "factor",
    name: "Factor",
    versions: ["8.25", "8.28", "8.29", "8.31"],
  },
  {
    id: "falcon",
    name: "Falcon",
    versions: ["0.9.6.8 (Chimera)"],
  },
  {
    id: "fantom",
    name: "Fantom",
    versions: ["1.0.69"],
  },
  {
    id: "fasm",
    name: "FASM",
    versions: ["1.73.27"],
  },
  {
    id: "forth",
    name: "Forth",
    versions: ["gforth 0.7.3"],
  },
  {
    id: "fortran",
    name: "Fortran",
    versions: [
      "GNU 5.3.0",
      "GNU 7.2.0",
      "GNU 8.1.0",
      "GNU 9.1.0",
      "GNU 11.1.0",
    ],
  },
  {
    id: "freebasic",
    name: "FREE BASIC",
    versions: ["1.05.0", "1.07.1", "1.08.1"],
  },
  {
    id: "fsharp",
    name: "F#",
    versions: ["4.1", "4.5.0"],
  },
  {
    id: "gccasm",
    name: "Assembler - GCC",
    versions: ["GCC 6.2.1", "GCC 8.1.0", "GCC 9.1.0", "GCC 11.1.0"],
  },
  {
    id: "go",
    name: "GO Lang",
    versions: ["1.5.2", "1.9.2", "1.10.2", "1.13.1", "1.17.3"],
  },
  {
    id: "groovy",
    name: "Groovy",
    versions: [
      "2.4.6 JVM: 1.7.0_99",
      "2.4.12 JVM: 9.0.1",
      "2.4.15 JVM: 10.0.1",
      "2.5.8 JVM: 11.0.4",
      "3.0.9 JVM: 17.0.1",
    ],
  },
  {
    id: "hack",
    name: "Hack",
    versions: ["HipHop VM 3.13.0"],
  },
  {
    id: "haskell",
    name: "Haskell",
    versions: [
      "ghc 7.10.3",
      "ghc 8.2.1",
      "ghc 8.2.2",
      "ghc 8.6.5",
      "ghc 9.0.1",
    ],
  },
  {
    id: "haxe",
    name: "Haxe",
    versions: ["4.2.4"],
  },
  {
    id: "icon",
    name: "Icon",
    versions: ["9.4.3", "9.5.1"],
  },
  {
    id: "intercal",
    name: "Intercal",
    versions: ["0.30"],
  },
  {
    id: "java",
    name: "Java",
    versions: [
      "JDK 1.8.0_66",
      "JDK 9.0.1",
      "JDK 10.0.1",
      "JDK 11.0.4",
      "JDK 17.0.1",
    ],
  },
  {
    id: "jbang",
    name: "JBang",
    versions: ["0.83.1"],
  },
  {
    id: "jlang",
    name: "J Language",
    versions: ["9.01.10"],
  },
  {
    id: "kotlin",
    name: "Kotlin",
    versions: [
      "1.1.51 (JRE 9.0.1+11)",
      "1.2.40 (JRE 10.0.1)",
      "1.3.50 (JRE 11.0.4)",
      "1.6.0 (JRE 17.0.1+12)",
    ],
  },
  {
    id: "lolcode",
    name: "LOLCODE",
    versions: ["0.10.5"],
  },
  {
    id: "lua",
    name: "Lua",
    versions: ["5.3.2", "5.3.4", "5.3.5", "5.4.3"],
  },
  {
    id: "mozart",
    name: "OZ Mozart",
    versions: ["2.0.0 (OZ 3)"],
  },
  {
    id: "nasm",
    name: "Assembler - NASM",
    versions: ["2.11.08", "2.13.01", "2.13.03", "2.14.02", "2.15.05"],
  },
  {
    id: "nemerle",
    name: "Nemerle",
    versions: ["1.2.0.507"],
  },
  {
    id: "nim",
    name: "Nim",
    versions: ["0.15.0", "0.17.2", "0.18.0", "1.4.8"],
  },
  {
    id: "nodejs",
    name: "NodeJS",
    versions: ["6.3.1", "9.2.0", "10.1.0", "12.11.1", "17.1.0"],
  },
  {
    id: "objc",
    name: "Objective C",
    versions: [
      "GCC 5.3.0",
      "GCC 7.2.0",
      "GCC 8.1.0",
      "GCC 9.1.0",
      "GCC 11.1.0",
    ],
  },
  {
    id: "ocaml",
    name: "Ocaml",
    versions: ["4.03.0", "4.08.1", "4.12.0"],
  },
  {
    id: "octave",
    name: "Octave",
    versions: ["GNU 4.0.0", "GNU 4.2.1", "GNU 4.4.0", "GNU 5.1.0", "GNU 6.4.0"],
  },
  {
    id: "pascal",
    name: "Pascal",
    versions: ["fpc 3.0.0", "fpc-3.0.2", "fpc-3.0.4", "fpc-3.2.2"],
  },
  {
    id: "perl",
    name: "Perl",
    versions: ["5.22.0", "5.26.1", "5.26.2", "5.30.0", "5.34.0"],
  },
  {
    id: "php",
    name: "PHP",
    versions: ["5.6.16", "7.1.11", "7.2.5", "7.3.10", "8.0.13"],
  },
  {
    id: "picolisp",
    name: "Picolisp",
    versions: ["3.1.11.1", "17.11.14", "18.5.11", "18.9.5", "21.6.30"],
  },
  {
    id: "pike",
    name: "Pike",
    versions: ["v8.0", "v8.0.702"],
  },
  {
    id: "prolog",
    name: "Prolog",
    versions: ["GNU Prolog 1.4.4", "GNU Prolog 1.4.5", "GNU Prolog 1.5.0"],
  },
  {
    id: "python2",
    name: "Python 2",
    versions: ["2.7.11", "2.7.15", "2.7.16", "2.7.18"],
  },
  {
    id: "python3",
    name: "Python 3",
    versions: ["3.5.1", " 3.6.3", "3.6.5", "3.7.4", "3.9.9"],
  },
  {
    id: "r",
    name: "R Language",
    versions: ["3.3.1", "3.4.2", "3.5.0", "3.6.1", "4.1.2"],
  },
  {
    id: "racket",
    name: "Racket",
    versions: ["6.11", "6.12", "7.4", "8.3"],
  },
  {
    id: "rhino",
    name: "Rhino JS",
    versions: ["1.7.7.1", "1.7.7.2", "1.7.13"],
  },
  {
    id: "ruby",
    name: "Ruby",
    versions: ["2.2.4", "2.4.2p198", "2.5.1p57", "2.6.5", "3.0.2"],
  },
  {
    id: "rust",
    name: "RUST",
    versions: ["1.10.0", "1.21.0", "1.25.0", "1.38.0", "1.56.1"],
  },
  {
    id: "scala",
    name: "Scala",
    versions: ["2.12.0", "2.12.4", "2.12.5", "2.13.0", "2.13.6"],
  },
  {
    id: "scheme",
    name: "Scheme",
    versions: ["Gauche 0.9.4", "Gauche 0.9.5", "Gauche 0.9.8", "Gauche 0.9.10"],
  },
  {
    id: "smalltalk",
    name: "SmallTalk",
    versions: ["GNU SmallTalk 3.2.92"],
  },
  {
    id: "spidermonkey",
    name: "SpiderMonkey",
    versions: ["38", "45.0.2"],
  },
  {
    id: "sql",
    name: "SQL",
    versions: [
      "SQLite 3.9.2",
      "SQLite 3.21.0",
      "SQLite 3.23.1",
      "SQLite 3.29.0",
      "SQLite 3.37.0",
    ],
  },
  {
    id: "swift",
    name: "Swift",
    versions: ["2.2", "3.1.1", "4.1", "5.1", "5.5"],
  },
  {
    id: "tcl",
    name: "TCL",
    versions: ["8.6", "8.6.7", "8.6.8", "8.6.9", "8.6.12"],
  },
  {
    id: "unlambda",
    name: "Unlambda",
    versions: ["0.1.3", "0.1.4.2"],
  },
  {
    id: "vbn",
    name: "VB.Net",
    versions: [
      "mono 4.0.1",
      "mono 4.6",
      "mono 5.10.1",
      "mono 6.0.0",
      "mono 6.12.0",
    ],
  },
  {
    id: "verilog",
    name: "VERILOG",
    versions: ["10.1", "10.2", "10.3", "11"],
  },
  {
    id: "whitespace",
    name: "Whitespace",
    versions: ["0.3"],
  },
  {
    id: "yabasic",
    name: "YaBasic",
    versions: ["2.769", "2.84.1"],
  },
];

export default languageOptions;
