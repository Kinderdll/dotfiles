vim.cmd("let g:netrw_liststyle = 3")

local opt = vim.opt

opt.relativenumber = true
opt.number = true

-- tabs & indentation
opt.tabstop = 2 -- 2 spaces for tabs (prettier default)
opt.shiftwidth = 2 -- 2 spaces for indent width
opt.expandtab = true -- expand tab to spaces
opt.autoindent = true -- copy indent from current line when starting new one

opt.wrap = false 

-- search settings 
opt.ignorecase = true --ignore case when searching
opt.smartcase = true -- if you include mixed case in your search, assumes you want case-sensitive

opt.cursorline = true

-- turn on termguicolors for tokynight colorsheme to work
-- (have to use iterm2 or any other true color terminal)

opt.termguicolors = true
opt.background = "dark" --colorschemes that can be light or dark will be dark
opt.signcolumn = "yes" --show sign column so that text doesnt shift

-- backspace
opt.backspace = "indent,eol,start" -- allow backspace on indent, end of line or instert mode start position

-- clibpoard
opt.clipboard:append("unnamedplus") -- use system clipboard as default register

-- split windows
opt.splitright = true -- split vertical window to the right
opt.splitbelow = true -- split horizontal windows to the bottom
