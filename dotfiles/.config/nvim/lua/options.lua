vim.cmd("let g:newtrw_liststyle = 3")
vim.g.mapleader = " "
local opt = vim.opt

opt.relativenumber = true
opt.number = true

-- tabs & identation
opt.tabstop = 2    -- 2 spaces for tabs
opt.shiftwidth = 2 -- 2 spaces for indent
opt.expandtab = true
opt.autoindent = true
opt.wrap = true

-- search settings
opt.ignorecase = true
opt.smartcase = true
opt.cursorline = true

-- termguicolors
opt.termguicolors = true
opt.background = "dark"
opt.signcolumn = "yes"

-- backspace
opt.backspace = "indent,eol,start" -- allow backspace on indent , end of line and insert mode start position

-- splitwindows
opt.splitright = true
opt.splitbelow = true

-- cliboard
opt.clipboard:append("unnamedplus") -- use systemclipboard


vim.keymap.set("n", "<leader>h", ":nohlsearch<CR>")
vim.wo.number = true

vim.keymap.set("n", "<leader>sv", "<C-w>v", { desc = "Split window vertically" })     -- split window vertically
vim.keymap.set("n", "<leader>sh", "<C-w>s", { desc = "Split window horizontally" })   -- split window horizontally
vim.keymap.set("n", "<leader>se", "<C-w>=", { desc = "Make splits equal size" })      -- make split windows equal width & height
vim.keymap.set("n", "<leader>sx", "<cmd>close<CR>", { desc = "Close current split" }) -- close current split windowi


-- Folding
opt.foldmethod = "indent"
opt.foldlevel = 3
