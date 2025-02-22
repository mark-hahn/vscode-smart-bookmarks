/*
  This file is only used the first time the Smart Bookmarks extension is activated.  The data enclosed is used to create one file for each language in the vscode global extension data folder.  These language files are synced across vscode instances.

  These language files can be easily edited.  To edit a language file, bring up any source file of that language making sure the language id (type) on the bottom right of the window is what you want.  Then execute the SmartBookmarks: Open Language File command.  The file will open in another tab.  If the file didn't exist you will get a newly created file.  The only required property is the marker.  All other fields are used for intelligent labelling.  With those empty the label will just be created by shrinking the white-space.

  If you do create a new file please submit it the Smart Bookmarks github repo as an issue.
*/

exports.languagesById = {

/***********************************************************************/
  c: {      marker: "//>",

    caseSensitive: true,

    keywords: [
      "auto", "break", "case", "char", "const", "continue", "default", "do",
      "double", "else", "enum", "extern", "float", "for", "goto", "if",
      "inline", "int", "long", "register", "restrict", "return", "short",
      "signed", "sizeof", "static", "struct", "switch", "typedef", "union",
      "unsigned", "void", "volatile", "while", "_Alignas", "_Alignof",
      "_Atomic", "_Bool", "_Complex", "_Generic", "_Imaginary", "_Noreturn",
      "_Static_assert", "_Thread_local",
      "#define", "#include", "#if", "#ifdef", "#ifndef", "#else", "#elif",
      "#endif", "#pragma", "#error", "#line", "#undef",
    ],
  },

/***********************************************************************/
  cpp: {    marker: "//>",

    caseSensitive: true,

    keywords: [
      "alignas", "alignof", "and", "and_eq", "asm", "auto", "bitand", "bitor",
      "bool", "break", "case", "catch", "char", "char16_t", "char32_t",
      "class", "compl", "concept", "const", "constexpr", "const_cast",
      "continue", "co_await", "co_return", "co_yield", "decltype",
      "default", "delete", "do", "double", "dynamic_cast", "else", "enum",
      "explicit", "export", "extern", "false", "float", "for", "friend",
      "goto", "if", "inline", "int", "long", "mutable", "namespace",
      "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or",
      "or_eq", "private", "protected", "public", "register", "reinterpret_cast",
      "requires", "return", "short", "signed", "sizeof", "static",
      "static_assert", "static_cast", "struct", "switch", "template", 
      "this", "thread_local", "throw", "true", "try", "typedef", "typeid",
      "typename", "union", "unsigned", "using", "virtual", "void", 
      "volatile", "wchar_t", "while", "xor", "xor_eq",
      "integer_constant", "floating_constant", "character_constant",
      "string_literal", "boolean_literal", "nullptr",
      "variable_names", "function_names", "class_names", "namespace_names",
      "#define", "#include", "#if", "#ifdef", "#ifndef", "#else", "#elif",
      "#endif", "#pragma", "#error", "#line", "#undef", "sizeof", "typeid",
      "alignof", "new", "delete",
    ],
  },

/***********************************************************************/
  coffeescript:  {      marker: "#>",

    caseSensitive: true,

    keywords: [
      "and", "break", "by", "catch", "class", "continue", "delete", "do",
      "else", "extends", "false", "finally", "for", "if", "in", "instanceof",
      "is", "loop", "new", "not", "null", "of", "off", "on", "or", "return",
      "super", "switch", "then", "this", "throw", "true", "try", "typeof",
      "unless", "until", "void", "when", "while", "yes", "no",
      "this", "super", "undefined",
    ],
  },

/***********************************************************************/
  csharp: {    marker: "//>",

    caseSensitive: true,

    keywords: [
      "abstract", "as", "base", "bool", "break", "byte", "case", "catch",
      "char", "checked", "class", "const", "continue", "decimal", "default",
      "delegate", "do", "double", "else", "enum", "event", "explicit",
      "extern", "false", "finally", "fixed", "float", "for", "foreach",
      "goto", "if", "implicit", "in", "int", "interface", "internal", "is",
      "lock", "long", "namespace", "new", "null", "object", "operator",
      "out", "override", "params", "private", "protected", "public",
      "readonly", "ref", "return", "sbyte", "sealed", "short", "sizeof",
      "stackalloc", "static", "string", "struct", "switch", "this", "throw",
      "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe",
      "ushort", "using", "virtual", "void", "volatile", "while",
      "add", "alias", "ascending", "async", "await", "by", "descending",
      "dynamic", "equals", "from", "get", "global", "group", "into",
      "join", "let", "nameof", "on", "orderby", "partial", "remove",
      "select", "set", "value", "var", "when", "where", "yield",
      "[Obsolete]", "[Serializable]", "[DllImport]", "[AttributeUsage]",
      "[Conditional]", "[DebuggerStepThrough]", "[Flags]", "[Required]",
    ],
  },

/***********************************************************************/
  go:  {     marker: "//>",

    caseSensitive: true,

    keywords: [
      "break", "case", "chan", "const", "continue", "default", "defer",
      "else", "fallthrough", "for", "func", "go", "goto", "if", "import",
      "interface", "map", "package", "range", "return", "select", "struct",
      "switch", "type", "var", "append", "cap", "close", "complex", "copy",
      "delete", "imag", "len", "make", "new", "panic", "print", "println", 
      "real", "recover",
    ],
  },

/***********************************************************************/
  java: {    marker: "//>",

    caseSensitive: true,

    keywords: [
      "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char",
      "class", "const", "continue", "default", "do", "double", "else", "enum",
      "extends", "final", "finally", "float", "for", "goto", "if", "implements",
      "import", "instanceof", "int", "interface", "long", "native", "new",
      "package", "private", "protected", "public", "return", "short", "static",
      "strictfp", "super", "switch", "synchronized", "this", "throw", "throws",
      "transient", "try", "void", "volatile", "while",
      "goto", "const", "@Override", "@Deprecated", "@SuppressWarnings",
      "@FunctionalInterface", "@SafeVarargs", "@Retention", "@Target",
      "@Documented", "@Inherited"
    ],
  },

/***********************************************************************/
  javascript: {     marker: "//>",

    caseSensitive: true,

    keywords: [
      "break", "case", "catch", "class", "const", "continue", "debugger",
      "default", "delete", "do", "else", "enum", "export", "extends", "false",
      "finally", "for", "function", "if", "import", "in", "instanceof", "new",
      "null", "return", "super", "switch", "this", "throw", "true", "try",
      "typeof", "var", "void", "while", "with", "yield", "let", "static",
      "await", "typeof", "instanceof", "in", "new", "delete", "void",
      "abstract", "boolean", "byte", "char", "double", "final", "float",
      "goto", "int", "long", "native", "package", "private", "protected",
      "public", "short", "synchronized", "throws", "transient", "volatile"
    ],
  },

/***********************************************************************/
  kotlin:  {       marker: "#>",

    caseSensitive: true,

    keywords: [
      "as", "as?", "break", "class", "continue", "do", "else", "false",
      "for", "fun", "if", "in", "!in", "interface", "is", "!is", "null",
      "object", "package", "return", "super", "this", "throw", "true",
      "try", "typealias", "typeof", "val", "var", "when", "while",
      "by", "catch", "constructor", "delegate", "dynamic", "field",
      "file", "finally", "get", "import", "init", "param", "property",
      "receiver", "set", "setparam", "value", "where",
      "abstract", "actual", "annotation", "companion", "const",
      "crossinline", "data", "enum", "expect", "external", "final",
      "infix", "inline", "inner", "internal", "lateinit", "noinline",
      "open", "operator", "out", "override", "private", "protected",
      "public", "reified", "sealed", "suspend", "tailrec", "vararg",
      "@JvmStatic", "@JvmOverloads", "@JvmName", "@Deprecated",
      "@Retention", "@Target", "@Suppress", "@Serializable",
    ],
  },

/***********************************************************************/
  python: {      marker: "#>",

    caseSensitive: true,

    keywords: [
      "False", "await", "else", "import", "pass", "None", "break", "except",
      "in", "raise", "True", "class", "finally", "is", "return", "and",
      "continue", "for", "lambda", "try", "as", "def", "from", "nonlocal",
      "while", "assert", "del", "global", "not", "with", "async", "elif",
      "if", "or", "yield", "and", "or", "not", "in", "is", 
    ],
  },

/***********************************************************************/
  rust: {      marker: "//>",

    caseSensitive: true,

    keywords: [
      "as", "async", "await", "break", "const", "continue", "crate", "dyn",
      "else", "enum", "extern", "false", "fn", "for", "if", "impl", "in",
      "let", "loop", "match", "mod", "move", "mut", "pub", "ref", "return",
      "self", "Self", "static", "struct", "super", "trait", "true", "type",
      "unsafe", "use", "where", "while", "abstract", "become", "box", "do",
      "final", "macro", "override", "priv", "typeof", "unsized", "virtual",
      "yield", "println!", "format!", "vec!", "dbg!", "todo!", "panic!",
      "drop", "print", "println", "eprint", "eprintln",
    ],
  },

/***********************************************************************/
  shellscript:  {        marker: "#>",

    caseSensitive: true,

    keywords: [
      "alias", "bg", "bind", "break", "builtin", "case", "cd", "command",
      "compgen", "complete", "continue", "declare", "dirs", "disown", "do",
      "done", "echo", "elif", "else", "enable", "esac", "eval", "exec",
      "exit", "export", "false", "fc", "fg", "for", "function", "getopts",
      "hash", "help", "history", "if", "in", "jobs", "kill", "let", "local",
      "logout", "popd", "printf", "pushd", "pwd", "read", "readonly",
      "return", "select", "set", "shift", "shopt", "source", "suspend",
      "test", "then", "times", "trap", "true", "type", "typeset",
      "ulimit", "umask", "unalias", "unset", "until", "wait", "while",
      "$UID", "$EUID", "$PPID", "$PWD", "$OLDPWD", "$HOME", "$SHELL", 
      "$PATH", "$IFS", "$RANDOM", "$SECONDS", "$LINENO",
    ],
  },

/***********************************************************************/
  swift: {       marker: "//>",

    caseSensitive: true,

    keywords: [
      "associatedtype", "break", "case", "catch", "class", "continue",
      "default", "defer", "deinit", "do", "else", "enum", "extension",
      "fallthrough", "false", "fileprivate", "func", "guard", "if", "import",
      "in", "init", "inout", "internal", "is", "let", "nil", "open",
      "operator", "private", "protocol", "public", "repeat", "return",
      "self", "Self", "static", "struct", "subscript", "super", "switch",
      "throw", "true", "try", "typealias", "var", "where", "while",
      "@available", "@discardableResult", "@escaping", "@frozen",
      "@inlinable", "@objc", "@propertyWrapper", "@resultBuilder",
      "@testable", "#available", "#colorLiteral", "#file", "#function",
      "#line", "#selector", "#sourceLocation", "#warning",
    ],
  },

/***********************************************************************/
  typescript: {       marker: "//>",

    caseSensitive: true,

    keywords: [
      "abstract", "any", "as", "asserts", "async", "await", "boolean",
      "break", "case", "catch", "class", "const", "continue", "debugger",
      "declare", "default", "delete", "do", "else", "enum", "export",
      "extends", "false", "final", "finally", "for", "from", "function",
      "get", "if", "implements", "import", "in", "infer", "instanceof",
      "interface", "is", "keyof", "let", "module", "namespace", "never",
      "new", "null", "number", "object", "package", "private", "protected",
      "public", "readonly", "require", "return", "set", "static", "string",
      "super", "switch", "symbol", "this", "throw", "true", "try", "type",
      "typeof", "undefined", "unique", "unknown", "var", "void", "while",
      "with", "yield", "instanceof", "in", "new", "delete", "void",
    ],
  },
}