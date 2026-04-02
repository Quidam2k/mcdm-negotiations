// Encounter: Light Restoration Project — Lady Olanhar Wands
// House Wands, North Ward, Waterdeep
// 15th of Hammer, 1495 DR

window.ENCOUNTER_DATA = {
  npc: {
    name: "Lady Olanhar Wands",
    title: "Designated Heir of House Wands",
    attitude: "neutral",
    description: "Tall, sharp-featured, dark hair threaded with silver at the temples. Deep blue robes with minimal adornment, plain silver ring. Watchful, intelligent eyes that catalogue everything."
  },

  request: "Provide House Wands' ruby dust reserves and enchanter expertise to the Waterdeep Light Restoration Project.",

  motivations: ["Protection", "Higher Authority", "Justice"],
  pitfalls: ["Greed", "Legacy"],

  // Short outcome descriptions (shown in the outcomes panel)
  outcomes: [
    "Refuses and actively discourages other noble houses from supporting the project. Party's reputation takes a hit in noble circles.",
    "Refuses politely. Suggests the party focus on destroying the Nightfall Pearl instead of treating symptoms.",
    "Refuses the ruby dust, but provides a letter of introduction with her personal endorsement for the Jewelers' Guild. Door left open for a future revisit.",
    "Agrees to a LIMITED pilot: one ward only (Trades Ward). Wands enchanter Tertius oversees all work. Components returned if the project underperforms.",
    "Agrees to provide sufficient ruby dust for a full citywide installation.",
    "Full commitment: ruby dust, Wands enchanters to assist, and letters of endorsement to Houses Thann and Eltorchul. Offers the party a personal favor — potentially a consultation with Maskar himself."
  ],

  // Full read-aloud narration for each outcome
  outcomeNarrations: [
    // 0 — No, and...
`Lady Olanhar rises from her chair. It is not a dramatic gesture — there is nothing theatrical about it. She simply stands, and the meeting is over.

"I agreed to this meeting because I respect the Grey Hands and the work you've done against the amplifier network. But this conversation has not inspired my confidence in the Light Restoration Project — or in the judgment of those advocating for it."

She moves toward the door and opens it. The servant in slate-gray is already waiting.

"I will be sharing my assessment with the other noble houses who have received similar requests. I suspect they will find my perspective... informative."

[Context dialog here.]

She inclines her head — a courtesy, but a cold one.

"Good day. I trust you can find your way out. The wards will guide you if you can't."

The servant escorts you downstairs. By the time you reach the street, you can feel doors closing across the North Ward that you didn't even know were open.`,

    // 1 — No
`Lady Olanhar sets down her teacup with an air of finality.

"I appreciate your time, and I understand the impulse behind this project. But House Wands cannot commit its reserves to a venture I'm not convinced represents the best use of finite resources. The darkness will end when the source is destroyed — that should be where the city's energy is focused."

She stands, signaling the meeting's end.

[Context dialog here.]

"I wish you well with the Pearl. Truly. That is where your talents are needed most."

She offers a handshake — firm, genuine, but unmistakably a goodbye.`,

    // 2 — No, but...
`Lady Olanhar is quiet for a long moment. When she speaks, there's something almost reluctant in her voice — the sound of someone who wants to say yes but can't quite get there.

"I can't release the ruby dust. Not now, not at this scale, not with so much uncertainty about what the coming weeks will demand. I hope you understand — it isn't a judgment on the project. It's a judgment on what I can responsibly commit."

She pauses, then reaches into a desk drawer and produces a sealed letter.

"But I'm not unsympathetic. This is a letter of introduction to the Jewelers' Guild, bearing my personal endorsement. The Jewelers control the ruby supply chain at the source. My name may open a door that the Chandlers' guild seal cannot."

[Context dialog here.]

"And if the pilot phase produces results... come back to me. I'll look at the data with fresh eyes."

It's not what you came for. But it's not nothing.`,

    // 3 — Yes, but...
`Lady Olanhar drums her fingers on the desk once — a rare break in her composure. She's thinking. Really thinking.

"You've made your case. I don't agree with all of it, but I'm... persuaded that the project has merit worth testing."

She raises a finger.

"A limited release. Enough ruby dust for a pilot installation in one ward — the Trades Ward, where the Chandlers are headquartered and the need is most visible. My enchanter, Tertius, will oversee the work personally. He reports to me. Nothing is cast without his review."

Her tone firms.

"If components are wasted, or if the enchantment schema doesn't perform as Mavis claims, the arrangement ends immediately and I'll expect the unused materials returned to my vaults within the day. Are we clear?"

[Context dialog here.]

"Don't make me regret this."

It's a yes — but it's a yes on a very short leash.`,

    // 4 — Yes
`Lady Olanhar is quiet for several seconds after your final argument. The silence stretches long enough to become uncomfortable — and then she nods. Once. Decisively.

"Very well. I'll authorize the release. My steward will coordinate with Mavis's people and the Chandlers on quantities and logistics. We have enough ruby dust in reserve to sustain a citywide installation, and I'll commit it to the project."

She rises and extends her hand.

[Context dialog here.]

"You've given me reason to believe this is worth doing, and worth doing properly. I don't give that lightly."

There's the ghost of a smile on her face — the first you've seen.

"Now. I believe you have a Pearl to deal with. Do try to resolve that as well, won't you? I'd hate to fund an eternal lighting project."`,

    // 5 — Yes, and...
`Lady Olanhar stands. For the first time in the meeting, her composure isn't a wall — it's a foundation. She looks at each of you in turn, and what you see in her expression isn't just agreement. It's respect.

"You've convinced me. Not just of the project — of the people behind it. House Wands will provide the ruby dust, in full, for a citywide installation. And I'm going to do more than open the vaults."

She moves to her desk and begins writing as she speaks.

"I'm assigning a team of Wands enchanters to the effort. Tertius will lead them. They'll work alongside Mavis's guild and the Chandlers to accelerate the timeline. I want light in the Trades Ward within three days, and the rest of the city within a tenday."

She seals the letter and hands it to you.

"That is a letter to Lady Cassandra Thann and Lord Thesp Eltorchul, with my personal endorsement of the project and a request that they contribute what resources they can. The Wands name carries weight in those houses. Use it."

[Context dialog here.]

She pauses at the door, and when she turns back, her expression has softened.

"One more thing. You've done my family a service today — not the ruby dust, but the reminder of what it's for. If there is a matter in which House Wands can be of personal assistance to you... come find me. My grandfather's schedule is not entirely my own to command, but I have some influence."

She lets that offer hang in the air. A consultation with Maskar Wands — for the right question, say, a curse that no one else in the city seems able to break — that could be worth more than all the ruby dust in Waterdeep.`
  ],

  // ─── SCENES ──────────────────────────────────────────

  scenes: {
    mavis: {
      title: "Mavis Arrives at the Evenstar",
      text:
`You're at the Evenstar when the front door bangs open and Mavis walks in like she owns the place — which, given the look on her face, she might as well. It's immediately clear she hasn't slept. Her hair is pulled back in a hasty knot, there are dark circles under her eyes, and she's carrying a satchel that clinks with tools and what sounds like at least three empty glass bottles.

But she's smiling.

She spots your table, strides over, and sits down without waiting for an invitation. She sets something on the table between the breakfast plates.

Iryi's D20. It catches even the dim light, and something about it looks... different. More alive.

"I cracked it. Took me all night, but I cracked it." She turns it in her fingers, admiring her own work with undisguised satisfaction. "Once a day, the bearer can enter — no genie pact required. The fundamental architecture of the vessel is intact."

She slides it across the table to Iryi with the careful reverence of someone returning a newborn to its parents.

[Pause for Iryi's reaction and any party interaction with the D20.]

Then, as the excitement settles, Mavis's expression shifts. The satisfied craftsman gives way to something more serious. She leans back in her chair and crosses her arms.

"Listen. While I had the D20 open and I was mapping its resonance structure, something clicked. I've been working with the Guild of Chandlers and Lamplighters — you know them, the lamplighters — and we've had a project on the table for a while. Continual Flame lanterns, citywide. But last night I cracked something bigger."

She digs into her satchel and spreads a set of careful diagrams across the table between the teacups — lantern housings, enchantment arrays, crystalline refraction diagrams, something that looks like a sundial mechanism.

"I figured out how to make Continual Flame shed actual sunlight. Not warm-tinted light, not an approximation. Sunlight. The real spectrum."

She lets that land for a moment.

"You understand what that means. The crops in the city gardens are dying. The window boxes, the greenhouses, the rooftop plots that feed half the Dock Ward — all of it, dying. People are getting sick. Children aren't sleeping right, the elderly are weakening, the temples of healing are overwhelmed. And that's just the human cost."

She leans forward.

"Now think about what else sunlight means. In a city where vampires are operating freely and drow are launching ambushes in the streets."

She taps the diagram.

"Every one of these lanterns becomes a weapon. Sunlight on every major street, every market square, every bridge and harbor walk. Vampires can't operate in sunlit areas — disadvantage on everything, they burn. Drow can't stand it either. You wouldn't just be restoring light to the city. You'd be cutting the enemy's territory in half overnight."

She sits back and takes a breath.

"The Chandlers have the infrastructure — lampposts, distribution routes, crews who know every street corner in every ward. My guild has the enchantment expertise and now the breakthrough to make it sunlight. The lanterns attune to the time of day — warm gold in the morning, full bright through afternoon, fading to a gentle glow in the evening. After the Pearl is gone, they're just... better lampposts. Permanent. The investment isn't wasted."

She gestures vaguely upward, toward the sky that hasn't shown the sun in weeks.

"Here's the problem. Regular ruby dust won't do it. Standard Continual Flame, sure — you can buy that from any component shop. But to get the sunlight spectrum, the enchantment needs solar-attuned ruby dust. Rubies that have been through a specific alchemical refinement process that aligns their crystalline structure with the solar spectrum. It's old magic — really old. And in Waterdeep, there is exactly one family that has the technique, the equipment, and the stockpile."

She lets that hang.

"House Wands. They've been refining the stuff for centuries as part of their research. They've got vaults of it. You can't buy it from the Jewelers' Guild. You can't substitute something else. And you can't just throw gold at the problem, because the Wands aren't selling — they've never sold it. It's not a product to them, it's a research material."

[Context dialog here — party questions, reactions.]

"The Wands family has maintained one of the largest private reserves of arcane components in the city for generations. Ruby dust among them. Lady Olanhar Wands controls access — Lord Maskar is... occupied with matters I can't speak to. But Olanhar is the one who makes these decisions, and she is shrewd, principled, and conservative in the family tradition. She's not going to simply open the vaults because someone asks nicely."

"The Chandlers and I have been trying to get a meeting with her for two tendays. She's been polite, but evasive. Then I mentioned your names, and suddenly we had a meeting within the hour."

She smiles, a little wryly.

"Being the most famous adventuring party in Waterdeep has its uses. She's agreed to receive you at the Wands Villa in the North Ward this afternoon. I'd go myself, but... I'm a craftswoman, not a diplomat. And frankly, she intimidates the hell out of me."

[Context dialog here — party discussion, questions, planning.]

"One more thing. Don't try to buy her. You can't — the solar-attuned dust isn't for sale at any price, and even implying it should be will offend her. And don't tell her this will make House Wands famous. They've been famous since before Waterdeep had walls. Just... talk to her like she's a person who cares about this city. Because I think she does. She just needs to believe this isn't a waste of something her family has spent centuries creating."`
    },

    walkup: {
      title: "Walk to Wands Villa",
      text:
`The North Ward is quieter than the rest of the city — it always is, but the contrast feels sharper now. Even under the pall of the Nightfall Pearl, money buys a measure of comfort. Here, the lampposts have been fitted with enchanted stones that cast a pale, steady glow. The streets are clean and patrolled. It is a reminder, in miniature, of exactly what the rest of Waterdeep doesn't have.

The Wands Villa sits at the corner of Shando Street and the Magecourt — a handsome stone manor that manages to look both ancient and impeccably maintained. Ivy traces the stonework in geometric patterns that probably aren't natural. The windows are dark, but it's the intentional dark of privacy, not neglect.

The wards on the building are subtle but unmistakable to anyone with arcane training. Grumpf, you feel them as a low hum in your back teeth — layered deep, abjuration and divination and something else you can't quite place. This building has been warded by generations of Wands wizards, each adding to what came before. It's not hostile. It's just... aware of you.

[If players comment on the wards or want to investigate: "They're old. Really old. The oldest layers predate anything in Blackstaff Tower. Each generation of Wands wizards has added their own protections, building on the work of those before them. It's not a fortress — it's a family home that has been loved by very powerful people for a very long time."]

A servant in slate-gray livery opens the door before you knock.

"The Grey Hands," he says. It is not a question. "Lady Olanhar is expecting you. This way, please."

You're led through a foyer lined with bookshelves — not decorative ones, functional ones, every shelf full, some with books stacked horizontally on top where they've run out of vertical space. Through a corridor hung with modest portraits. Up a flight of stairs with worn treads. This is a house that is lived in and worked in, not displayed.

The study on the second floor is warm, well-lit by a series of Continual Flame lanterns mounted in brass sconces along the walls. The irony is not lost.

[Pause for player reactions to the room.]`
    },

    opening: {
      title: "The Negotiation Begins",
      text:
`Lady Olanhar Wands stands as you enter. She is tall — taller than most of you — with sharp features and dark hair threaded with silver at the temples. She wears deep blue robes with minimal adornment, and the only jewelry visible is a plain silver ring on her left hand. Her eyes are watchful and intelligent, and when she looks at each of you in turn, you get the distinct impression she's cataloguing you.

"Welcome. Thank you for coming." Her voice is measured — warm enough to be courteous, but carefully controlled. "I've heard a great deal about your work against the amplifier network. The city owes you more than most people realize. Please, sit."

There's tea already set out. Good tea — you can smell cardamom and something floral.

She waits for you to settle before continuing.

"I'll be direct, because I suspect you prefer it. Mavis's people have been persistent, and I've reviewed the Light Restoration proposal. The enchantment schema is technically sound — creative, actually. The Chandlers' distribution infrastructure is well-suited to the task. My hesitation is not about whether it would work."

She pauses, choosing her next words with visible precision.

"My hesitation is about whether it's wise. House Wands has maintained its component reserves precisely because we don't spend them on every well-intentioned project that comes through our door. The ruby dust in our vaults is irreplaceable on any reasonable timeline. Supply caravans aren't running. The Jewelers' Guild is rationing. Every faction in the city is competing for the same finite pool of arcane materials."

She folds her hands on the desk.

"So. Convince me."

[The negotiation begins. Interest: 2, Patience: 3.]`
    }
  },

  // ─── TRAIT REVEALS (Get a Read: Success) ──────────────

  reveals: {
    "Protection":
`You study her as she speaks, and something clicks. When she mentioned "irreplaceable resources," her gaze drifted — just for a heartbeat — to a framed portrait on the wall behind her. A family portrait, dozens of faces, many of them young. And you remember what you've heard: House Wands has been under attack. Something from beyond — creatures that target the less powerful members of the family. She's not hoarding resources out of greed. She's keeping a stockpile because she's terrified of running out when her family needs defending most.

Motivation: PROTECTION — She carries the safety of her family and her people as a personal burden. Arguments about protecting the vulnerable will resonate with her.`,

    "Higher Authority":
`There's a small shrine tucked into an alcove by the window — Mystra's symbol, rendered in silver, with fresh offerings of spell components arranged with obvious care. This isn't decorative piety. Lady Olanhar glances toward it unconsciously when she speaks about magical responsibility, the way a sailor checks the horizon. When she says "the responsible use of the Art," she means it the way a priest means scripture. There is a right way to use magic. There are authorities — divine, institutional, traditional — that define that way. And she believes in them utterly.

Motivation: HIGHER AUTHORITY — She reveres Mystra and respects proper magical institutions. Invoking the Watchful Order, the Blackstaff, or divine mandate will carry real weight with her.`,

    "Justice":
`You catch it in an unguarded moment. When she mentioned the finite pool of arcane materials and "every faction competing," something flickered across her face — not frustration, but anger. Controlled, quiet anger. You follow her gaze out the window, toward the lamplit North Ward streets — and then beyond, toward the darker wards where the common folk have no enchanted lampposts, no magical stopgaps, just the unbroken dark. You've seen that look before. It's the expression of someone who knows the system is unfair and hates that she's part of the problem. Deep down, the inequity of this crisis bothers her more than she's letting on.

Motivation: JUSTICE — She's Lawful Good to her core. The fact that the darkness falls hardest on common folk while nobles sit in well-lit parlors genuinely troubles her. Appeals to fairness and equity will find fertile ground.`,

    "Greed":
`You notice what's absent more than what's present. The study is tastefully appointed but deliberately understated — no gold leaf, no jeweled ornaments, no displays of wealth. The bookshelves are full of well-worn volumes, not collector's editions. Her robes are fine quality but completely unadorned. Everything in this room says the same thing: we have wealth, but we don't worship it. And the way she's framed every objection so far — not once has she mentioned cost, value, or return on investment. This is someone for whom "we'll make it worth your while" isn't an incentive. It's an insult.

Pitfall: GREED — Do NOT frame this as a transaction. Offering payment, implying a financial exchange, or trying to "buy" the ruby dust will offend her deeply. She'll see it as crass and reductive.`,

    "Legacy":
`She hasn't mentioned the Wands name once. Not a single "as a Wands" or "our family legacy" or "for a thousand years." The family crest is present in the room — carved into the mantelpiece, woven into the border of the rug — but it's old. Inherited, not commissioned. The frame around the family portrait is tarnished silver that no one has bothered to polish. She wears the name like armor she was born into, not a banner she's trying to wave. A thousand years of magical preeminence is simply... the water she swims in. Telling her the Wands name will benefit from this project would be like telling the ocean it could use more salt.

Pitfall: LEGACY — Do NOT try to flatter the family name or suggest this will enhance their reputation. She'll find it patronizing at best, and at worst, she'll conclude you don't understand who you're talking to.`
  },

  // ─── ARGUMENT REACTIONS ──────────────────────────────

  reactions: {
    // Get a Read
    "read-fail":
`You try to read her, but Lady Olanhar is a wizard of considerable power and a lifetime of political meetings. She notices you studying her — a flicker of awareness crosses her features, and her expression closes like a book being shut. Whatever she was about to let slip is locked away behind a polite mask.

[Context dialog here.]

She adjusts her posture — just slightly, just enough to tell you that your scrutiny has been noted and is not appreciated.`,

    "read-partial":
`You study Lady Olanhar carefully, but she's practiced at this — decades of high-stakes meetings with people far more dangerous than you. Every gesture is controlled, every expression curated. You get the sense that there's real depth behind the composure, convictions she cares about deeply, but you can't quite pierce the professional veneer. She's good at this.`,

    "read-success":
`Something about the way she moves, the way her attention shifts, gives her away — just for a moment, but a moment is enough...`,

    // Appeal to Motivation
    "mot-fail":
`You were reaching for something real — you could feel it — but the argument didn't quite land. Maybe it was the phrasing, maybe the timing. Lady Olanhar listens to the end, and her expression doesn't change, which is the problem. She shifts slightly in her chair, and when she responds, there's a new edge of formality in her voice.

[Context dialog here.]

The opening was there, but you didn't step through it cleanly. She's still listening, but you sense her patience has thinned.`,

    "mot-partial":
`You see it land. Lady Olanhar's chin dips — barely a nod, but an acknowledgment. She takes a deliberate breath before responding, and when she does, her tone has warmed by a fraction. Something in what you said connected with something she believes. But she's not giving ground freely — she's a Wands, and concessions come measured and deliberate.

[Context dialog here.]

She reaches for her tea, takes a measured sip. She's considering. But the clock is still ticking.`,

    "mot-success":
`Something shifts behind Lady Olanhar's eyes. She doesn't smile — she's too composed for that — but the careful wall between courtesy and conviction develops a visible crack. She uncrosses her hands, and when she responds, the measured quality of her voice has given way to something more present. More honest.

[Context dialog here.]

For the first time in this meeting, you feel like you're talking to the person behind the title.`,

    // Appeal to Pitfall
    "pitfall-Greed":
`The temperature in the room drops. Lady Olanhar goes very still — the kind of stillness that precedes a storm in someone too disciplined to raise their voice. When she speaks again, each word is placed with surgical precision, and her eyes have gone flat and hard.

[Context dialog here.]

She straightens in her chair, and the distance between you feels like it just doubled. You have made a significant miscalculation.`,

    "pitfall-Legacy":
`Lady Olanhar's expression doesn't change. That's what makes it devastating. She regards you with the perfect, practiced patience of someone who has heard this exact approach a thousand times, from a thousand petitioners who thought they could flatter a Wands into compliance.

[Context dialog here.]

When she sets down her teacup, the soft click of porcelain on saucer sounds very, very final.`,

    "pitfall":
`The NPC is visibly offended. Their interest and patience both decrease.`,

    // Appeal to Neither
    "neut-fail":
`Lady Olanhar's expression tightens — not with anger, but with something worse: the beginnings of disappointment. She expected more from the Grey Hands, and this line of reasoning hasn't lived up to the reputation.

[Context dialog here.]

She shifts her weight, and you notice her glance toward the window. Not checking the time — there's no sun to check by — but the gesture is unmistakable. This conversation is one step closer to ending.`,

    "neut-partial":
`Lady Olanhar acknowledges the point with a measured nod, but she doesn't build on it. "I take your meaning," she says, and the phrase is courteous but clearly a door closing on that particular line of reasoning.

[Context dialog here.]

She's still engaged, but you can tell she's waiting for something more compelling.`,

    "neut-success":
`It's not the strongest argument you could have made, but Lady Olanhar respects the reasoning. She tilts her head, considering, and for a moment you see the scholar in her — the part that weighs evidence regardless of whether she likes the conclusion.

[Context dialog here.]

She makes a small concession in her tone, an acknowledgment that you've earned. But there's a cost — you've spent time on an indirect approach, and she's not someone with infinite patience for indirection.`,

    // Lie Caught
    "lie-caught":
`Lady Olanhar stops. Just — stops. Mid-sentence, mid-thought, mid-courtesy. Her eyes narrow, and in that moment you see the Wizard behind the diplomat. She has spent her entire adult life surrounded by people trying to deceive her, and she is very, very good at noticing.

[Context dialog here.]

The air in the room feels heavier. When she resumes speaking, every word is a test.`
  }
};
