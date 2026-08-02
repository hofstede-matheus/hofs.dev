# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

`hofs.dev` is a pnpm + Turborepo monorepo holding Matheus Hofstede's personal
site and a few side projects, all deployed to Firebase Hosting / App Hosting.

- Package manager: **pnpm** (`packageManager: pnpm@10.30.3`), Node `>=20.9.0`
- Task runner: **Turborepo** (`turbo.json`)
- Workspaces: `apps/*`, `packages/*` (`pnpm-workspace.yaml`)

## Layout

| Path | What it is |
| --- | --- |
| [apps/hofs.dev/](apps/hofs.dev/) | The main static site — plain HTML/CSS, no build step. Entry point is [public/index.html](apps/hofs.dev/public/index.html). |
| [apps/beta-landing/](apps/beta-landing/) | Create React App landing page for the Beta app (`beta.hofs.dev`). |
| [apps/het-or-de-web/](apps/het-or-de-web/) | Next.js 14 app for Het or De (`hetorde.hofs.dev`), on Firebase App Hosting. |
| [packages/typescript-config/](packages/typescript-config/) | Shared `tsconfig` bases consumed as `@hofs.dev/typescript-config`. |
| [firebase.json](firebase.json) | Hosting targets for all sites, defined at the monorepo root. |
| [.github/workflows/](.github/workflows/) | Per-app deploy workflows, triggered by path filters on `master`. |

## Commands

Run from the repo root:

```sh
pnpm install          # install workspace deps
pnpm dev              # turbo run dev (persistent, per-app)
pnpm build            # turbo run build
pnpm lint             # turbo run lint
pnpm check-types      # turbo run check-types
```

`apps/hofs.dev` is a static site: its `build` script is a no-op and there is
nothing to compile. To preview it, open
[apps/hofs.dev/public/index.html](apps/hofs.dev/public/index.html) directly or
serve the `public/` folder with any static server.

## The main site (`apps/hofs.dev`)

Everything lives under `public/`:

- `index.html` — the whole page; two sections, `#social` and `#projects`
- `style.css` — hand-written CSS, no framework
- `assets/` — **all** images, icons and fonts, committed to the repo
- `cv/` — deployed separately to `cv.hofs.dev`

Conventions to keep:

- **Images are always local.** Every `<img src>` points at `assets/…`. Do not
  reference images hosted on GitHub user-attachments, CDNs, or any other remote
  URL — a past commit existed purely to undo that mistake.
- Social icons are `160x160`; project icons are `60x60`.
- Each project is an `<a class="icon" target="_blank">` wrapping a single
  `<img>` whose `title` attribute is the visible label (there is no `alt`
  text in this file — match the surrounding style).
- Indentation is 4 spaces, and entries are separated by a blank line.
- Asset filenames are lowercase; existing ones mix `snake_case` and
  `kebab-case`, so follow whichever neighbours use.

To add a project to the list, use the `add-project` skill in
[.claude/skills/add-project/](.claude/skills/add-project/).

## Deploys

Pushes to `master` that touch an app's paths trigger that app's workflow, which
deploys straight to the live Firebase channel. There is no staging step — treat
anything merged to `master` as published.

## Conventions

- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`).
- Never create a commit without the user explicitly asking for that commit.
- Work on a branch; `master` is the default/PR target branch.
