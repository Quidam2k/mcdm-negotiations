# MCDM Negotiation Tracker

A browser-based DM tool for running structured negotiation encounters in D&D 5e/5.5e, based on Matt Colville's negotiation rules from [MCDM's Drawsteel](https://mcdm.gg/).

The rules were adapted for D&D 5e by [Matthew Perkins](https://www.youtube.com/@DungeonMasteritize).

![Dashboard Screenshot](https://img.shields.io/badge/status-usable_tonight-green)

## What Is This?

Not every social interaction needs dice. But when players have a **plausible request**, the NPC has **some interest** in negotiating, and there's **some reason they wouldn't immediately agree** — these rules give structure to the conversation without reducing it to a single Persuasion check.

This dashboard tracks the two core stats (**Interest** and **Patience**), handles argument resolution, displays NPC motivations and pitfalls, and shows the current offer based on interest level — all in one screen the DM keeps open during play.

## Quick Start

```bash
git clone https://github.com/Quidam2k/mcdm-negotiations.git
cd mcdm-negotiations
python -m http.server 8089
# Open http://localhost:8089
```

Or just open `index.html` directly in your browser — no server required.

The included example encounter (`encounters/wands_light_project.js`) loads automatically so you can see how it all works.

## How It Works

### The Dashboard

The tracker shows:

- **Interest** (0–5) — How willing the NPC is to grant the request. Goes up and down. Reaching 5 ends the negotiation with full agreement.
- **Patience** (0–5) — How willing the NPC is to keep talking. Only goes down. Reaching 0 ends the negotiation immediately.
- **Motivations** — Core beliefs. Appealing to these is effective (each can only be successfully appealed once).
- **Pitfalls** — Values the NPC would be insulted to have attributed to them. Triggering these is automatic failure — no roll.
- **Outcome Table** — What the NPC offers at each interest level, customized per encounter.
- **Argument Helper** — Select the argument type (motivation / pitfall / neither / lie) and roll result to see the mechanical outcome.

### Player Actions

On their turn, a player can:

1. **Get a Read** (Insight check) — Learn a motivation or pitfall
2. **Make an Argument** (Persuasion/Intimidation/Deception) — Try to shift interest
3. **Accept an Offer** — Ask the NPC to make their current offer; accept or reject it

### Roll Bands

| Roll | Result |
|------|--------|
| 11 or lower | Failure |
| 12–16 | Partial |
| 17+ | Success |

## Creating Your Own Encounters

Encounters are JavaScript files that set `window.ENCOUNTER_DATA`. Drop them in the `encounters/` folder and reference them in `index.html`.

### Minimal Example

```js
window.ENCOUNTER_DATA = {
  npc: {
    name: "Captain Reva",
    title: "Harbor Watch Commander",
    attitude: "suspicious",
    description: "Weathered, no-nonsense. Arms crossed."
  },

  request: "Allow the party to take a ship out of quarantined harbor.",

  motivations: ["Protection", "Higher Authority"],
  pitfalls: ["Greed"],

  outcomes: [
    "No, and she reports you to the Magistrate.",
    "No.",
    "No, but she tells you about a smuggler who might help.",
    "Yes, but you take a Watch officer with you.",
    "Yes.",
    "Yes, and she provides a naval escort."
  ]
};
```

### Full Example

See [`encounters/wands_light_project.js`](encounters/wands_light_project.js) for a complete encounter with:

- Detailed outcome narrations (read-aloud text for each interest level)
- Scenes (narrative moments the DM reads at key points)
- Trait reveals (what the DM reads when a player successfully reads a motivation/pitfall)
- Argument reactions (NPC responses for each argument outcome type)

### Encounter Data Reference

| Field | Required | Description |
|-------|----------|-------------|
| `npc.name` | Yes | NPC name |
| `npc.title` | No | NPC title/role |
| `npc.attitude` | Yes | `hostile`, `suspicious`, `neutral`, `open`, `friendly`, or `trusting` — sets starting Interest/Patience |
| `npc.description` | No | Physical description |
| `request` | Yes | What the players are asking for |
| `motivations` | Yes | Array of trait names (suggest 3) |
| `pitfalls` | Yes | Array of trait names (suggest 2) |
| `outcomes` | Yes | Array of 6 strings — what the NPC offers at Interest 0–5 |
| `outcomeNarrations` | No | Array of 6 template literals — full read-aloud text per interest level |
| `scenes` | No | Object of named scenes with `title` and `text` |
| `reveals` | No | Object keyed by trait name — read-aloud text when a Get a Read reveals that trait |
| `reactions` | No | Object keyed by outcome type — NPC flavor text for argument results |

### Starting Values by Attitude

| Attitude | Interest | Patience |
|----------|----------|----------|
| Hostile | 1 | 2 |
| Suspicious | 2 | 2 |
| Neutral | 2 | 3 |
| Open | 3 | 3 |
| Friendly | 3 | 4 |
| Trusting | 3 | 5 |

### The 12 Personality Traits

Each can be a motivation or a pitfall:

**Benevolence** · **Discovery** · **Freedom** · **Greed** · **Higher Authority** · **Justice** · **Legacy** · **Peace** · **Power** · **Protection** · **Revelry** · **Vengeance**

Custom traits beyond these 12 are also supported.

## Project Structure

```
mcdm-negotiations/
  index.html          -- The dashboard (self-contained HTML/CSS/JS)
  encounters/         -- Encounter data files
    wands_light_project.js  -- Example encounter
  CLAUDE.md           -- Instructions for Claude Code (AI assistant)
```

## Credits

- **Negotiation rules:** [Matt Colville / MCDM](https://mcdm.gg/) — from the Drawsteel RPG
- **D&D 5e adaptation:** [Matthew Perkins](https://www.youtube.com/@DungeonMasteritize)
- **This tool:** Built with [Claude Code](https://claude.ai/code)

## License

[MIT](LICENSE)
