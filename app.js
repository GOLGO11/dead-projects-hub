const deathReasons = [
  "No users",
  "Too early",
  "Too boring",
  "Too hard",
  "No distribution",
  "No money",
  "Founder lost faith",
  "Built for myself only",
  "Killed by bigger company",
  "Weekend project never returned",
];

const seedIdeas = [
  {
    id: "calendar-haters",
    title: "A calendar app for people who hate calendars",
    description:
      "It tried to hide meetings behind tiny acts of emotional mercy. The prototype was lovely. The calendar permissions were not.",
    epitaph: "It promised less time management and became another thing to manage.",
    deathReason: "Too hard",
    stage: "Prototype",
    lastWords: "I still believe time is a design problem. I just no longer believe I am the designer.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 18,
    createdAt: "2026-06-02T10:30:00.000Z",
    resurrections: [
      {
        name: "Mira",
        projectName: "AntiCal",
        url: "",
        note: "I want to rebuild this as a weekly ritual, not a calendar replacement.",
        createdAt: "2026-06-05T14:12:00.000Z",
      },
    ],
  },
  {
    id: "notion-alternative",
    title: "A Notion alternative that became a Notion page",
    description:
      "A modular workspace for founders who wanted fewer blocks and more momentum. The roadmap lived in Notion until the irony became fatal.",
    epitaph: "It died exactly where it was born: inside a competitor's template.",
    deathReason: "No distribution",
    stage: "Landing page",
    lastWords: "The product was clear. The reason to switch was not.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 31,
    createdAt: "2026-06-04T18:10:00.000Z",
    resurrections: [],
  },
  {
    id: "ai-todo",
    title: "An AI todo app that created more tasks than it solved",
    description:
      "It broke vague ambitions into actionable steps, then broke those steps into smaller steps, then broke the founder.",
    epitaph: "The machine was productive. The human was tired.",
    deathReason: "Built for myself only",
    stage: "Beta",
    lastWords: "Automation without taste is just anxiety with an API key.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 42,
    createdAt: "2026-06-06T09:00:00.000Z",
    resurrections: [
      {
        name: "Jon",
        projectName: "One Thing",
        url: "",
        note: "Maybe the resurrection is the opposite: AI deletes tasks until one remains.",
        createdAt: "2026-06-07T11:20:00.000Z",
      },
      {
        name: "Rae",
        projectName: "Done Enough",
        url: "",
        note: "I would fork this into a tool that declares tasks emotionally complete.",
        createdAt: "2026-06-08T16:45:00.000Z",
      },
    ],
  },
  {
    id: "solo-social",
    title: "A social network for people who don't like posting",
    description:
      "Users could exist quietly, signal taste, and never perform. Unfortunately, a network effect requires at least mild behavior.",
    epitaph: "Everyone loved the idea in private.",
    deathReason: "No users",
    stage: "Launched",
    lastWords: "The silent majority is bad at onboarding.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 27,
    createdAt: "2026-06-08T20:00:00.000Z",
    resurrections: [],
  },
  {
    id: "habit-tracker",
    title: "A habit tracker abandoned after 3 days",
    description:
      "It had streaks, reflections, badges, gentle reminders, and a founder who ignored all of them by Thursday.",
    epitaph: "Its first failed habit was being used.",
    deathReason: "Founder lost faith",
    stage: "Prototype",
    lastWords: "I learned that shame is not a retention strategy.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 15,
    createdAt: "2026-06-09T12:45:00.000Z",
    resurrections: [],
  },
  {
    id: "cofounder-solo",
    title: "A cofounder matching app built by a solo founder",
    description:
      "It matched people by ambition, working style, and preferred failure mode. The founder never found someone to help ship it.",
    epitaph: "A marketplace with supply, demand, and one lonely maintainer.",
    deathReason: "Weekend project never returned",
    stage: "Landing page",
    lastWords: "The matching algorithm worked better than my courage.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 22,
    createdAt: "2026-06-10T08:20:00.000Z",
    resurrections: [],
  },
  {
    id: "newsletter-discovery",
    title: "A newsletter discovery app killed by better bookmarks",
    description:
      "It ranked newsletters by topic, taste, and freshness. Users used it once, saved three links, and returned to forgetting things in their inbox.",
    epitaph: "It could find great writing, but not a recurring reason to exist.",
    deathReason: "No distribution",
    stage: "Beta",
    lastWords: "Discovery is a feature until it becomes a habit. We never crossed that line.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 19,
    createdAt: "2026-06-01T16:30:00.000Z",
    resurrections: [],
  },
  {
    id: "micro-saas-pricing",
    title: "A SaaS pricing tool nobody wanted to pay for",
    description:
      "It generated pricing pages, plans, feature gates, and confidence. The only thing it could not generate was a founder with enough traffic.",
    epitaph: "It optimized prices for products that had no customers yet.",
    deathReason: "Too early",
    stage: "Prototype",
    lastWords: "Pricing is painful only after demand exists.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 24,
    createdAt: "2026-05-29T10:00:00.000Z",
    resurrections: [],
  },
  {
    id: "chrome-extension-forgot",
    title: "A Chrome extension I forgot to install myself",
    description:
      "It cleaned up tabs, summarized pages, and promised focus. The founder tested it in one browser profile and then lived in another.",
    epitaph: "Its retention problem started with its creator.",
    deathReason: "Founder lost faith",
    stage: "Prototype",
    lastWords: "If I do not feel the pain every day, I should not build the medicine.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 12,
    createdAt: "2026-05-27T08:00:00.000Z",
    resurrections: [],
  },
  {
    id: "startup-name-generator",
    title: "A startup name generator with better names than businesses",
    description:
      "It created sharp names, domains, and taglines. Users loved the output, then went back to having no validated problem.",
    epitaph: "Naming was the fun part. Building was the trapdoor.",
    deathReason: "Built for myself only",
    stage: "Launched",
    lastWords: "A good name can hide a weak idea for about one afternoon.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 35,
    createdAt: "2026-05-25T12:00:00.000Z",
    resurrections: [],
  },
  {
    id: "founder-therapy-bot",
    title: "A founder therapy bot that needed boundaries",
    description:
      "It let builders vent after launches, churn, bugs, and investor silence. The product felt useful, then ethically heavier than planned.",
    epitaph: "It was comforting enough to become uncomfortable.",
    deathReason: "Too hard",
    stage: "Beta",
    lastWords: "Some products need more care than a solo maker can promise.",
    projectUrl: "",
    allowResurrection: false,
    flowers: 29,
    createdAt: "2026-05-22T19:00:00.000Z",
    resurrections: [],
  },
  {
    id: "open-source-bounty-board",
    title: "An open-source bounty board with no bounties",
    description:
      "Maintainers posted tiny tasks. Contributors browsed them. Sponsors admired the mission from a fiscally safe distance.",
    epitaph: "Everyone agreed it should exist. Nobody agreed to fund it.",
    deathReason: "No money",
    stage: "Launched",
    lastWords: "Marketplaces need liquidity. Ideals need invoices.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 17,
    createdAt: "2026-05-20T11:40:00.000Z",
    resurrections: [],
  },
  {
    id: "local-events-map",
    title: "A local events map for people who stay home",
    description:
      "It mapped small meetups, art nights, popups, and strange neighborhood rituals. The target users bookmarked it during peak introversion.",
    epitaph: "It made going outside look beautifully optional.",
    deathReason: "No users",
    stage: "Landing page",
    lastWords: "The map was alive. The audience was in bed.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 14,
    createdAt: "2026-05-18T13:15:00.000Z",
    resurrections: [],
  },
  {
    id: "indie-hacker-dating",
    title: "A dating app for indie hackers",
    description:
      "Profiles included MRR, preferred database, sleep debt, and emotional availability. The last field caused the most churn.",
    epitaph: "It found product-market fit with jokes, not couples.",
    deathReason: "Too boring",
    stage: "Just a note",
    lastWords: "Some ideas are better as tweets than terms of service.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 48,
    createdAt: "2026-05-14T09:30:00.000Z",
    resurrections: [],
  },
  {
    id: "voice-notes-crm",
    title: "A voice-notes CRM for founders who hate CRMs",
    description:
      "Users recorded messy thoughts after calls. It extracted follow-ups, sentiment, and next steps. Then users remembered they also hate follow-ups.",
    epitaph: "It turned conversations into tasks, which was technically the problem.",
    deathReason: "No users",
    stage: "Prototype",
    lastWords: "A CRM cannot save someone from not wanting a CRM.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 21,
    createdAt: "2026-05-11T17:50:00.000Z",
    resurrections: [],
  },
  {
    id: "pitch-deck-roaster",
    title: "A pitch deck roaster that was too honest",
    description:
      "It reviewed decks with brutal clarity and investor-style skepticism. Founders asked for feedback, then requested a softer setting.",
    epitaph: "It converted decks into truth and truth into churn.",
    deathReason: "Too early",
    stage: "Beta",
    lastWords: "Honesty needs packaging. Cruelty has bad retention.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 33,
    createdAt: "2026-05-08T15:25:00.000Z",
    resurrections: [],
  },
  {
    id: "personal-api",
    title: "A personal API for people who wanted better introductions",
    description:
      "It let users publish structured facts about their work, interests, and asks. People liked the concept but still sent vague DMs.",
    epitaph: "It made humans machine-readable. Humans continued being humans.",
    deathReason: "No distribution",
    stage: "Launched",
    lastWords: "Protocols are elegant. Social behavior is soup.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 26,
    createdAt: "2026-05-04T10:10:00.000Z",
    resurrections: [],
  },
  {
    id: "tiny-acquisition-club",
    title: "A tiny acquisition club with nothing to acquire",
    description:
      "It matched builders who wanted to sell tiny projects with buyers who wanted shortcut assets. Most projects were either too tiny or too personal.",
    epitaph: "The assets were real. The transferability was not.",
    deathReason: "No money",
    stage: "Landing page",
    lastWords: "A side project is often a diary with a Stripe account.",
    projectUrl: "",
    allowResurrection: true,
    flowers: 30,
    createdAt: "2026-05-01T07:20:00.000Z",
    resurrections: [],
  },
];

const storageKey = "dead-projects-club:v2";
const waitlistKey = "dead-projects-club:waitlist:v1";
const supabaseConfig = window.DEAD_PROJECTS_SUPABASE || {};
const supabasePublicKey = supabaseConfig.publishableKey || supabaseConfig.anonKey;
const supabaseUrl = supabaseConfig.url?.replace(/\/$/, "");
const supabaseClient =
  supabaseUrl && supabasePublicKey && window.supabase
    ? window.supabase.createClient(supabaseUrl, supabasePublicKey)
    : null;
const ideasTable = supabaseConfig.ideasTable || "dead_projects";
const waitlistTable = supabaseConfig.waitlistTable || "waitlist";
let activeSort = "latest";

function readLocalIdeas() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) {
    localStorage.setItem(storageKey, JSON.stringify(seedIdeas));
    return seedIdeas;
  }

  try {
    return JSON.parse(stored);
  } catch {
    localStorage.setItem(storageKey, JSON.stringify(seedIdeas));
    return seedIdeas;
  }
}

function saveLocalIdeas(ideas) {
  localStorage.setItem(storageKey, JSON.stringify(ideas));
}

function toDbIdea(idea) {
  return {
    id: idea.id,
    title: idea.title,
    description: idea.description,
    epitaph: idea.epitaph,
    death_reason: idea.deathReason,
    stage: idea.stage,
    last_words: idea.lastWords,
    project_url: idea.projectUrl || "",
    allow_resurrection: idea.allowResurrection,
    flowers: idea.flowers,
    created_at: idea.createdAt,
    resurrections: idea.resurrections || [],
  };
}

function fromDbIdea(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    epitaph: row.epitaph,
    deathReason: row.death_reason,
    stage: row.stage,
    lastWords: row.last_words,
    projectUrl: row.project_url || "",
    allowResurrection: row.allow_resurrection,
    flowers: row.flowers || 0,
    createdAt: row.created_at,
    resurrections: row.resurrections || [],
  };
}

async function getIdeas() {
  if (!supabaseClient) return readLocalIdeas();

  const { data, error } = await supabaseClient
    .from(ideasTable)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.warn("Supabase read failed, using local fallback.", error);
    return readLocalIdeas();
  }

  if (data.length) return data.map(fromDbIdea);

  const { error: seedError } = await supabaseClient
    .from(ideasTable)
    .upsert(seedIdeas.map(toDbIdea), { onConflict: "id" });

  if (seedError) {
    console.warn("Supabase seed failed, using local fallback.", seedError);
    return readLocalIdeas();
  }

  return seedIdeas;
}

async function saveIdea(idea) {
  if (!supabaseClient) {
    const ideas = readLocalIdeas();
    const nextIdeas = ideas.some((item) => item.id === idea.id)
      ? ideas.map((item) => (item.id === idea.id ? idea : item))
      : [idea, ...ideas];
    saveLocalIdeas(nextIdeas);
    return;
  }

  const { error } = await supabaseClient.from(ideasTable).upsert(toDbIdea(idea), {
    onConflict: "id",
  });

  if (error) throw error;
}

async function saveWaitlistEntry(contact) {
  const entry = { contact, createdAt: new Date().toISOString() };

  if (!supabaseClient) {
    const entries = getWaitlist();
    entries.unshift(entry);
    localStorage.setItem(waitlistKey, JSON.stringify(entries));
    return;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${waitlistTable}`, {
    method: "POST",
    headers: {
      apikey: supabasePublicKey,
      Authorization: `Bearer ${supabasePublicKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      contact,
      created_at: entry.createdAt,
    }),
  });

  if (response.ok) return;

  const errorText = await response.text();
  throw new Error(errorText || `Waitlist request failed with ${response.status}`);
}

function setWaitlistMessage(message, type = "success") {
  const messageEl = document.getElementById("waitlist-message");
  if (!messageEl) return;

  messageEl.textContent = message;
  messageEl.dataset.type = type;
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 56);
}

function uniqueSlug(title, ideas) {
  const base = slugify(title) || "dead-idea";
  let slug = base;
  let index = 2;
  while (ideas.some((idea) => idea.id === slug)) {
    slug = `${base}-${index}`;
    index += 1;
  }
  return slug;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateValue) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateValue));
}

function getWaitlist() {
  const stored = localStorage.getItem(waitlistKey);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function makeShareText(idea) {
  return `I just found a dead project:

${idea.title}

Cause of death: ${idea.deathReason}
Last words: "${idea.lastWords}"

Not every idea deserves to be finished.
But some deserve a second life.

${window.location.href}`;
}

async function copyText(text, button, successLabel) {
  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  button.textContent = successLabel;
  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1800);
}

async function route() {
  const hash = window.location.hash || "#/";
  if (hash === "#/" || hash === "#") {
    await renderHome();
    return;
  }

  if (hash === "#/bury") {
    renderBury();
    return;
  }

  if (hash === "#/waitlist") {
    await renderHome();
    document.getElementById("waitlist")?.scrollIntoView();
    return;
  }

  if (hash.startsWith("#/idea/")) {
    await renderDetail(decodeURIComponent(hash.replace("#/idea/", "")));
    return;
  }

  renderNotFound();
}

function cloneTemplate(id) {
  const template = document.getElementById(id);
  return template.content.cloneNode(true);
}

async function renderHome() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(cloneTemplate("home-template"));

  const ideas = await getIdeas();
  const featured = [...ideas].sort((a, b) => b.flowers - a.flowers)[0];
  const totalFlowers = ideas.reduce((sum, idea) => sum + idea.flowers, 0);
  const totalResurrections = ideas.reduce((sum, idea) => sum + idea.resurrections.length, 0);

  document.getElementById("featured-title").textContent = featured.title;
  document.getElementById("featured-epitaph").textContent = `"${featured.epitaph}"`;
  document.getElementById("featured-reason").textContent = featured.deathReason;
  document.getElementById("featured-flowers").textContent = `${featured.flowers} flowers`;
  document.getElementById("stat-ideas").textContent = ideas.length;
  document.getElementById("stat-flowers").textContent = totalFlowers;
  document.getElementById("stat-resurrections").textContent = totalResurrections;

  document.querySelector("[data-scroll-to]").addEventListener("click", (event) => {
    const target = document.getElementById(event.currentTarget.dataset.scrollTo);
    target?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.sort === activeSort);
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort;
      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderIdeaGrid();
    });
  });

  document.getElementById("waitlist-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = event.currentTarget.querySelector("button[type='submit']");
    const form = new FormData(event.currentTarget);
    const contact = form.get("contact").trim();

    submitButton.disabled = true;
    submitButton.textContent = "Joining...";
    setWaitlistMessage("Saving your spot...", "pending");

    try {
      await saveWaitlistEntry(contact);
      event.currentTarget.reset();
      setWaitlistMessage("Saved. See you at launch.", "success");
    } catch (error) {
      console.error("Waitlist save failed.", error);
      setWaitlistMessage("Could not save that yet. Please try again.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Join waitlist";
    }
  });

  await renderIdeaGrid();
}

async function renderIdeaGrid() {
  const grid = document.getElementById("idea-grid");
  const ideas = [...(await getIdeas())];

  ideas.sort((a, b) => {
    if (activeSort === "flowers") return b.flowers - a.flowers;
    if (activeSort === "resurrections") return b.resurrections.length - a.resurrections.length;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  grid.innerHTML = ideas
    .map(
      (idea) => `
        <a class="tombstone-card" href="#/idea/${encodeURIComponent(idea.id)}">
          <div>
            <span class="stone-label">Here lies</span>
            <h3>${escapeHtml(idea.title)}</h3>
            <p>${escapeHtml(idea.epitaph)}</p>
          </div>
          <div class="card-footer">
            <span class="pill">${escapeHtml(idea.deathReason)}</span>
            <span class="pill">${idea.flowers} flowers</span>
            <span class="pill">${idea.resurrections.length} resurrections</span>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderBury() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(cloneTemplate("bury-template"));

  const reasonSelect = document.querySelector("[name='deathReason']");
  reasonSelect.innerHTML = deathReasons
    .map((reason) => `<option>${escapeHtml(reason)}</option>`)
    .join("");

  document.getElementById("bury-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const ideas = await getIdeas();
    const title = form.get("title").trim();
    const idea = {
      id: uniqueSlug(title, ideas),
      title,
      description: form.get("description").trim(),
      epitaph: form.get("epitaph").trim(),
      deathReason: form.get("deathReason"),
      stage: form.get("stage"),
      lastWords: form.get("lastWords").trim(),
      projectUrl: form.get("projectUrl").trim(),
      allowResurrection: form.has("allowResurrection"),
      flowers: 0,
      createdAt: new Date().toISOString(),
      resurrections: [],
    };

    await saveIdea(idea);
    window.location.hash = `#/idea/${encodeURIComponent(idea.id)}`;
  });
}

async function renderDetail(id) {
  const idea = (await getIdeas()).find((item) => item.id === id);
  if (!idea) {
    renderNotFound();
    return;
  }

  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(cloneTemplate("detail-template"));

  document.getElementById("detail-shell").innerHTML = `
    <article class="grave-detail">
      <div class="share-card" id="share-card">
        <p class="detail-kicker">Here lies</p>
        <h2>${escapeHtml(idea.title)}</h2>
        <p>"${escapeHtml(idea.epitaph)}"</p>
        <div class="card-footer">
          <span class="pill">Cause: ${escapeHtml(idea.deathReason)}</span>
          <span class="pill">${idea.flowers} flowers</span>
          <span class="pill">${idea.resurrections.length} resurrection signals</span>
        </div>
      </div>
      <p class="detail-kicker">Here lies</p>
      <h1>${escapeHtml(idea.title)}</h1>
      <p class="epitaph">"${escapeHtml(idea.epitaph)}"</p>
      <div class="card-footer">
        <span class="pill">Died ${formatDate(idea.createdAt)}</span>
        <span class="pill">${escapeHtml(idea.deathReason)}</span>
        <span class="pill">${escapeHtml(idea.stage)}</span>
      </div>

      <div class="detail-block">
        <h2>What it was</h2>
        <p>${escapeHtml(idea.description)}</p>
      </div>
      <div class="detail-block">
        <h2>Founder&apos;s final words</h2>
        <p>${escapeHtml(idea.lastWords)}</p>
      </div>
      ${
        idea.projectUrl
          ? `<div class="detail-block"><h2>Last known link</h2><p><a href="${escapeHtml(idea.projectUrl)}" target="_blank" rel="noreferrer">${escapeHtml(idea.projectUrl)}</a></p></div>`
          : ""
      }
      <div class="detail-actions">
        <button class="primary-button" id="flower-button">Leave a flower (${idea.flowers})</button>
        <button class="ghost-button" id="copy-post-button">Copy X post</button>
        <button class="ghost-button" id="copy-link-button">Copy link</button>
        <a class="ghost-button" href="#/">Back to graveyard</a>
      </div>
    </article>

    <aside class="resurrection-panel">
      <p class="eyebrow">Second life</p>
      <h2>Resurrect this idea</h2>
      ${
        idea.allowResurrection
          ? `
            <form id="resurrection-form" class="burial-form">
              <label>
                Your name
                <input name="name" required maxlength="60" placeholder="A hopeful founder" />
              </label>
              <label>
                New project name
                <input name="projectName" required maxlength="80" placeholder="The gentler version" />
              </label>
              <label>
                Project URL
                <input name="url" type="url" placeholder="https://example.com" />
              </label>
              <label>
                What would you change?
                <textarea name="note" rows="4" required placeholder="I would make this smaller, stranger, and easier to ship."></textarea>
              </label>
              <button class="primary-button" type="submit">Record resurrection</button>
            </form>
          `
          : "<p>This founder asked that the idea rest in peace.</p>"
      }
      <div class="resurrection-list" id="resurrection-list"></div>
    </aside>
  `;

  document.getElementById("flower-button").addEventListener("click", async () => {
    const ideas = await getIdeas();
    const target = ideas.find((item) => item.id === id);
    target.flowers += 1;
    await saveIdea(target);
    await renderDetail(id);
  });

  document.getElementById("copy-post-button").addEventListener("click", (event) => {
    copyText(makeShareText(idea), event.currentTarget, "Copied post");
  });

  document.getElementById("copy-link-button").addEventListener("click", (event) => {
    copyText(window.location.href, event.currentTarget, "Copied link");
  });

  document.getElementById("resurrection-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const ideas = await getIdeas();
    const target = ideas.find((item) => item.id === id);
    target.resurrections.unshift({
      name: form.get("name").trim(),
      projectName: form.get("projectName").trim(),
      url: form.get("url").trim(),
      note: form.get("note").trim(),
      createdAt: new Date().toISOString(),
    });
    await saveIdea(target);
    await renderDetail(id);
  });

  renderResurrections(idea);
}

function renderResurrections(idea) {
  const list = document.getElementById("resurrection-list");
  if (!idea.resurrections.length) {
    list.innerHTML = `<p>No resurrections yet. The soil is quiet.</p>`;
    return;
  }

  list.innerHTML = idea.resurrections
    .map(
      (item) => `
        <div class="resurrection-item">
          <strong>${escapeHtml(item.projectName)}</strong>
          <span class="pill">by ${escapeHtml(item.name)}</span>
          <p>${escapeHtml(item.note)}</p>
          ${
            item.url
              ? `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.url)}</a>`
              : ""
          }
        </div>
      `,
    )
    .join("");
}

function renderNotFound() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="not-found">
      <p class="eyebrow">Nothing buried here</p>
      <h1>This grave is empty.</h1>
      <p class="lede">The idea you are looking for may have been resurrected, renamed, or never existed.</p>
      <a class="primary-button" href="#/">Return to graveyard</a>
    </section>
  `;
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
