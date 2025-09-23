## 📦 Dependency Notes

This project uses `depcheck` to scan for unused dependencies. Below is a breakdown of the packages flagged and their current status.

### ✅ Packages Kept (Even if Marked Unused)

| Package | Reason |
|--------|--------|
| `@tailwindcss/typography` | Used for rendering Markdown/blog content using `prose` classes. Even if not directly referenced, it's useful for future styling. |
| `class-variance-authority` | Required internally by `shadcn/ui` for managing Tailwind class variants. |
| `radix-ui` | Also a core dependency of `shadcn/ui` for interactive components (e.g. dialogs, dropdowns). |
| `autoprefixer`, `postcss`, `tailwindcss` | Essential for Tailwind CSS processing. |

### ❌ Packages Removed or Can Be Removed

| Package | Reason |
|--------|--------|
| `lucide-react` | Used for icons. If no `<Icons.* />` components are used, this can be safely removed. |
| `fs` | Node.js native module. Does not need to be listed in `package.json`. |
| `tw-animate-css` | Optional utility for animations. Can be removed if not used. |
| `eslint`, `eslint-config-next` | Can be removed if not running linting in local or CI environments. |

> Tip: To remove unused packages, run:

```bash
npm uninstall lucide-react fs tw-animate-css
```

