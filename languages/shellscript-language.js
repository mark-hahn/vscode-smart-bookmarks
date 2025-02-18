exports.languageData = {

  marker: "#>",

  suffixes: [
    "sh", "bash", "bsh", "csh", "ksh", "zsh", 
  ],

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

  tokens:[
    "+", "-", "*", "/", "%", "**", "=", "+=", "-=", "*=", "/=", "%=",
    "==", "!=", ">", "<", ">=", "<=", "&&", "||", "!", "&", "|", "^",
    "~", "<<", ">>", "<<=", ">>=", "&=", "|=", "^=", "?","-eq", "-ne",
    "-lt", "-le", "-gt", "-ge", "-z", "-n", "-d", "-e", "-f", "-r",
    "-w", "-x", "-s", "-L", "-h", "-p", "-S", "-b", "-c", "-u", "-g",
    "-k", "-O", "-G", "-N", "-nt", "-ot", "-ef", "-o", "-a", "!",
    "(", ")", "{", "}", "[", "]", ",", ";", ":", "|", "&", "&&", "||",
    "!", "=", "==", "!=", "<", ">", "<=", ">=", "<<", ">>", "<<<", ">|",
    ">&", "<&", ";;", "|&", ";&", ";;&",
    ".", "...", ",", ";", ":", "(", ")", "{", "}", "[", "]",
    "$$", "$?", "$#", "$*", "$@", "$0", "$1", "$2", "$3", "$4", "$5",
    "$6", "$7", "$8", "$9", "#",
  ],
}
