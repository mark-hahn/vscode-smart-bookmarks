exports.languageData = {

  marker: "//>",

  suffixes: [
    "cpp", "cc", "cxx", "c++", "h", "hpp", "hxx", "hh", 
  ],

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
  
  tokens: [
    "+", "-", "*", "/", "%", "++", "--", "=", "+=", "-=", "*=", "/=", "%=",
    "==", "!=", ">", "<", ">=", "<=", "&&", "||", "!", "&", "|", "^", "~",
    "<<", ">>", "<<=", ">>=", "&=", "|=", "^=", "->", ".", ".*", "->*",
    "::", "?", ":", "(", ")", "{", "}", "[", "]", ",", ";", ":", "::", 
    ".", "->", "...", "#", "##", "{", "}", "[", "]", "(", ")", ".", "->",
    "::", ":", ";", ",",
  ],
}