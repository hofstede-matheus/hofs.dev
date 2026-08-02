---
name: add-project
description: Add a new project entry to the projects list on the hofs.dev static site (apps/hofs.dev/public/index.html), including downloading its icon into local assets. Use when the user wants to list, add, or showcase a new project/app/side-project on hofs.dev.
---

# Add a project to hofs.dev

Adds one entry to the `#projects` list in
[apps/hofs.dev/public/index.html](../../../apps/hofs.dev/public/index.html).

## What you need

Ask the user for anything missing before editing:

1. **Name** — becomes the `title` attribute (the tooltip/label).
2. **URL** — where the icon links to.
3. **Icon** — a local file path, or a URL to download. If they have neither, see
   "No image" below.
4. **Position** — optional. Default is **last**; only place it elsewhere if the
   user explicitly says so.

## Rules

### 1. New projects go last

Insert the new `<a class="icon">` block **at the end of the second
`.icons-projects` div**, after the last existing entry — unless the user
explicitly asks for another position ("first", "after Collectin", …).

### 2. Images must be local assets — never remote URLs

The `src` must always be `assets/<file>`. Never point `src` at a GitHub
user-attachments link, a CDN, or any other remote URL, even temporarily. A past
commit (`c5f901e`) exists solely to undo that.

If the user gives you an image URL, download it into
`apps/hofs.dev/public/assets/`:

```sh
curl -fL -o apps/hofs.dev/public/assets/<name>.<ext> "<url>"
```

Then verify it actually landed and is a real image:

```sh
file apps/hofs.dev/public/assets/<name>.<ext>
```

Name the file after the project, lowercase (e.g. `nomadscreen.png`), matching
the style of its neighbours. Keep the original extension — `.png` and `.svg`
are both already in use.

### 3. If you cannot download the image, add no image

If the download fails (network blocked, 404, auth wall, the response isn't an
image) or you have no usable source file:

- **Do not** invent or generate a placeholder icon.
- **Do not** fall back to linking the remote URL.
- Add the entry **without an `<img>`**, and **tell the user plainly** that the
  image could not be saved locally and that they need to drop the file into
  `apps/hofs.dev/public/assets/` and point the entry at it.

## Markup

Match the surrounding formatting exactly: 4-space base indent inside the div,
a blank line between entries, `height="60" width="60"`.

With an image:

```html
                <a class="icon" target="_blank" href="https://example.hofs.dev/">
                    <img height="60" width="60" src="assets/example.png" title="Example" />
                </a>
```

If the `title` is long, wrap it onto its own line like the Collectin entry does:

```html
                <a class="icon" target="_blank" href="https://collectin.hofs.dev/">
                    <img height="60" width="60" src="assets/collectin.png"
                        title="Collectin: Organize your LinkedIn saved posts into collections" />
                </a>
```

Without an image (fallback case only):

```html
                <a class="icon" target="_blank" href="https://example.hofs.dev/">Example</a>
```

## After editing

- Confirm the entry is in the intended position and that `src` starts with
  `assets/`.
- Do **not** commit unless the user explicitly asks.
- Mention that merging to `master` deploys the site live via the
  `Deploy hofs.dev` workflow.
