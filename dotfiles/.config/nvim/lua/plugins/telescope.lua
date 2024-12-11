return {
  {
    "nvim-telescope/telescope.nvim",
    tag = "0.1.8", -- or , branch = '0.1.x',
    dependencies = { "nvim-lua/plenary.nvim" },
    config = function()
      local builtin = require("telescope.builtin")
      --vim.keymap.set("n", "<leader>f", builtin.find_files, {})
      --vim.keymap.set("n", "<leader>fg", builtin.live_grep, {})
      --vim.keymap.set("n", "<leader><leader>", builtin.oldfiles, {})
      vim.keymap.set("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "Fuzzy find files in cwd" })
      vim.keymap.set("n", "<leader>fr", "<cmd>Telescope oldfiles<cr>", { desc = "Fuzzy find recent files" })
      vim.keymap.set("n", "<leader>fs", "<cmd>Telescope live_grep<cr>", { desc = "Find string in cwd" })
      vim.keymap.set(
        "n",
        "<leader>fc",
        "<cmd>Telescope grep_string<cr>",
        { desc = "Find string under cursor in cwd" }
      )
    end,
  },
  {
    "nvim-telescope/telescope-ui-select.nvim",
    config = function()
      -- This is your opts table
      require("telescope").setup({
        extensions = {
          ["ui-select"] = {
            require("telescope.themes").get_dropdown({}),
          },
        },
      })
      require("telescope").load_extension("ui-select")
    end,
    -- To get ui-select loaded and working with telescope, you need to call
    -- load_extension, somewhere after setup function:
  },
}
