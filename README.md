# Dead Projects Hub

A tiny MVP for burying abandoned ideas, leaving flowers, and recording resurrection attempts.

## Run

Open `index.html` in a browser. The app uses Supabase when `supabase-config.js`
is configured, and falls back to `localStorage` for local preview.

## Supabase setup

Fill in `supabase-config.js`, then add this schema in Supabase.

A publishable key is safe to expose to the browser, but protect data with Row
Level Security policies. Use a backend/API proxy if a key must never be visible
to visitors.

```js
window.DEAD_PROJECTS_SUPABASE = {
  url: "https://your-project.supabase.co",
  publishableKey: "sb_publishable_your-public-key",
};
```

```sql
create table if not exists dead_projects (
  id text primary key,
  title text not null,
  description text not null,
  epitaph text not null,
  death_reason text not null,
  stage text not null,
  last_words text not null,
  project_url text default '',
  allow_resurrection boolean default true,
  flowers integer default 0,
  created_at timestamptz not null,
  resurrections jsonb default '[]'::jsonb
);
```

If you enable Row Level Security for the prototype, add public read/write
policies for `dead_projects`.

## MVP scope

- Graveyard landing page with seed dead projects
- Sort by latest, flowers, or resurrection count
- Bury a new idea
- Tombstone detail page
- Screenshot-friendly share card
- Copy-ready X post text
- Leave flowers
- Record resurrection attempts

## Next production steps

- Add real auth
- Add public share URLs
- Add moderation and spam controls
- Add screenshot uploads
