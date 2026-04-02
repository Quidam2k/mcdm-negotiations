# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A web-based tool for designing and running MCDM-style negotiation encounters in D&D 5.5e. Based on Matt Colville's negotiation rules from Drawsteel, adapted for use in Todd's existing campaigns (Undermountain, Absence of Alternatives, Cloudfang Keep).

Two main functions:
1. **Live Dashboard** — A browser-based "game board" the DM keeps open during play to track a negotiation encounter in real time (interest, patience, motivations, pitfalls, argument outcomes)
2. **Design Templates** — Structured templates for prepping negotiation encounters, intended to be filled out with Claude's help given campaign/character context

Stretch goal: Foundry VTT module.

## The Negotiation Rules System

Sources: Matthew Perkins' video transcript and written script (in `reference/`), adapting Matt Colville's Drawsteel negotiation rules for D&D 5e. The rules below are the canonical reference — don't re-parse the source files.

### When to Use Negotiations

Not every social interaction is a negotiation. These rules apply when ALL of these are true:
- Players have a **plausible request** (written down explicitly)
- The NPC has **some interest** in negotiating
- The NPC has **some reason not to immediately agree**

Key principle: "Negotiation is not a process that changes an NPC's character. Rather, the heroes are trying to make an NPC understand how behaving differently would actually be in character."

### NPC Stats: Interest and Patience

**Interest** (0-5): How willing the NPC is to grant the party's request.
- Goes up and down during negotiation
- If it reaches **5**, negotiation ends — NPC fully agrees
- Determines the outcome/offer when negotiation ends

**Patience** (0-5): How willing the NPC is to continue the conversation.
- Only goes **down**
- If it reaches **0**, negotiation ends immediately — NPC makes final offer based on current interest

### Starting Values by NPC Attitude

| Attitude | Interest | Patience |
|----------|----------|----------|
| Hostile | 1 | 2 |
| Suspicious | 2 | 2 |
| Neutral | 2 | 3 |
| Open | 3 | 3 |
| Friendly | 3 | 4 |
| Trusting | 3 | 5 |

**Situational modifiers:**
- Extremely bad reputation: Interest -1
- Extremely good reputation: Patience +1 (max 5)
- One player speaks NPC's native language (not Common): Patience +1
- Three+ players speak that language: Patience +2
- Patience max is always 5

### Outcome Table (Interest Level -> Offer)

| Interest | Result | Pattern |
|----------|--------|---------|
| 0 | No, and something bad | Hostile rejection + consequence |
| 1 | No | Flat refusal |
| 2 | No, but something good | Refusal + consolation/side quest |
| 3 | Yes, but something bad | Agreement with significant caveat |
| 4 | Yes | Clean agreement |
| 5 | Yes, and something good | Full agreement + bonus reward |

The DM should prep what each level means for the specific request. Example for "Princess, arrest your advisor":
- 0: "Your challenge has deepened my trust in them. Get out."
- 1: "No."
- 2: "No, but if you must meddle, find my missing father."
- 3: "I'll look into it, but I'll only suspend them from duties."
- 4: "I'll confine my advisor to quarters during an investigation."
- 5: "I'll lock them up, and here's a reward for your loyalty."

### NPC Personality: Motivations and Pitfalls

Each NPC has **motivations** (core beliefs — appealing to these is effective) and **pitfalls** (values the NPC would be insulted to have attributed to them). Sweet spot: **3 motivations, 2 pitfalls**.

**The 12 Drawsteel Personality Traits** (each can be a motivation OR a pitfall):

| Trait | As Motivation | As Pitfall |
|-------|--------------|------------|
| **Benevolence** | Shares with others, values generosity | Sees charity as weakness |
| **Discovery** | Seeks new lore, artifacts, places | Fears the unknown |
| **Freedom** | Wants no authority above or below | Sees lawlessness as chaos |
| **Greed** | Desires wealth and resources | Insulted by being "bought" |
| **Higher Authority** | Loyal to a person/power above them | Scoffs at serving another |
| **Justice** | Wants righteous rewarded, wicked punished | Doesn't see the world as inherently just |
| **Legacy** | Desires fame and lasting impact | Sees vanity/reputation as pointless |
| **Peace** | Wants a quiet, stable life | Thrives in chaos and upheaval |
| **Power** | Wants authority over others | Dislikes ruling over people |
| **Protection** | Has people/things they protect above all | Sees no duty to protect others |
| **Revelry** | Values fun, celebration, hedonism | Sees frivolity as a waste |
| **Vengeance** | Has someone they want punished | Believes vengeance solves nothing |

Custom traits beyond these 12 are allowed.

### Player Actions During Negotiation

Players can: **Get a Read**, **Make an Argument**, or **Accept an Offer**.

#### Check Result Bands

| Roll | Result |
|------|--------|
| 11 or lower | Failure |
| 12-16 | Partial success/failure |
| 17+ | Success |

#### Action: Get a Read (Insight check)

| Result | Effect |
|--------|--------|
| Failure (<=11) | Patience -1 (NPC realizes they're being read, gets annoyed) |
| Partial (12-16) | No effect (NPC is hard to read) |
| Success (17+) | Learn one Motivation OR Pitfall (player's choice which type) |

#### Action: Make an Argument

The DM determines which table to use based on what the player's argument appeals to:

**Appeals to a Motivation** (best case — each motivation can only be successfully appealed ONCE):

| Result | Effect |
|--------|--------|
| Failure (<=11) | Patience -1 |
| Partial (12-16) | Interest +1, Patience -1 |
| Success (17+) | Interest +1 (no patience cost!) |

**Appeals to a Pitfall** (worst case — NO ROLL, automatic failure):
- Interest -1, Patience -1

**Appeals to Neither** (neutral argument):

| Result | Effect |
|--------|--------|
| Failure (<=11) | Interest -1, Patience -1 |
| Partial (12-16) | Patience -1 |
| Success (17+) | Interest +1, Patience -1 |

**Telling a Lie** (player makes Deception instead of Persuasion/Intimidation):

Lies don't have their own table. The player rolls on whichever table their argument falls under (motivation, pitfall, or neither). BUT: if the roll fails to gain Interest (+1), the NPC catches the lie and Interest decreases by 1 **in addition to** whatever penalty the argument table already imposed. This means a failed lie on a neutral argument costs Interest -2 and Patience -1.

#### Action: Accept an Offer

Player asks the NPC to make an offer. The NPC offers based on current interest level (see Outcome Table). The offer is final — players accept or reject. If rejected, negotiation can continue if patience remains.

### Running Without Prep (Improv Mode)

For zero-prep use: roll random starting interest/patience, roll random motivations/pitfalls from the 12 traits, and run the argument tables as-is. The outcome table results can be improvised.

## Architecture

### Tech Stack
- **Frontend:** HTML, CSS, JavaScript (vanilla or lightweight framework)
- **No backend required** — everything runs in-browser
- **Data persistence:** LocalStorage for saving prepped encounters

### Planned Components

**Dashboard (live play):**
- Interest tracker (0-5 scale, visual indicator)
- Patience tracker (0-5 scale, visual indicator, counts down)
- Motivation/pitfall display (with checkboxes for "already appealed")
- Argument resolution helper (select table type -> show outcomes by roll band)
- Outcome table display (what happens at each interest level)
- Current offer preview (based on current interest)

**Encounter Designer (prep):**
- NPC name, attitude selector (sets default interest/patience)
- Motivation/pitfall picker (from the 12 traits + custom)
- Outcome table editor (fill in the 6 results for this specific negotiation)
- Player request field
- Export/save encounter as JSON

**Templates (for Claude-assisted design):**
- Structured prompts for creating negotiation encounters given campaign context
- Located in a `templates/` directory

### File Structure (planned)
```
mcdm_negotiations/
  CLAUDE.md
  index.html          -- Dashboard entry point
  designer.html       -- Encounter designer/prep tool
  css/
  js/
  templates/          -- Negotiation design templates for use with Claude
  encounters/         -- Saved encounter JSON files
  reference/          -- Source material (transcript, tracker PDFs, images)
```

### Reference Materials (in `reference/`)
- Video transcript (`.vtt`) and audio (`.m4a`) — Matthew Perkins' explainer video
- Negotiation Tracker PDFs (A4 and US Letter) — the printable player handout from Perkins' Patreon, which serves as the UI reference for the dashboard
- The tracker uses `●` for Interest and `■` for Patience in its notation

## Running the Dashboard

Open `index.html` directly in a browser (file:// works fine), or serve it:
```bash
cd "Q:/DnD/mcdm_negotiations"
python -m http.server 8089
# then open http://localhost:8089
```

## Design Principles

- **Usable tonight** — Pragmatic, working-first approach. Ship the dashboard MVP before perfecting it.
- **D&D 5.5e context** — Checks are Persuasion, Intimidation, Deception, Insight (D&D skills). The three roll bands (<=11, 12-16, 17+) are fixed DCs, not variable.
- **DM-facing** — This is a DM tool. Players don't see the dashboard. Keep the UI information-dense, not flashy.
- **Offline-capable** — No server, no database. Runs from local files or a simple HTTP server.

## Relationship to Parent Project

This lives under `Q:\DnD\mcdm_negotiations\` within the larger D&D workspace (`Q:\DnD\`). Campaign context files for designing negotiations live in the parent project's campaign folders (see parent CLAUDE.md for paths). When designing a negotiation for a specific campaign, read the relevant campaign context and character context files from the parent directory.
