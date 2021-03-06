module.exports = {
  "acolyte": {
    "description": "“Can’t all be the High Priest, they said. Can’t all wield the White Spire, they said. Scrub the floor, they told me. The Cthonic Overgod don’t want a messy floor, do he? They said it’d be enlightenment and magic. Feh. It’s bruised knees and dishpan hands. If only I’d been a cleric, instead.”",
    "instinct": "To serve dutifully",
    "name": "Acolyte",
    "tags": [
      ""
    ],
    "moves": [
      "Follow dogma",
      "Offer eternal reward for mortal deeds"
    ],
    "key": "acolyte"
  },
  "adventurer": {
    "description": "“Scum of the earth, they are. A troupe of armored men and women come sauntering into town, brandishing what, for all intents and purposes, is enough magical and mundane power to level the whole place. Bringing with them bags and bags of loot, still dripping blood from whatever poor sod they had to kill to get it. An economical fiasco waiting to happen, if you ask me. The whole system becomes completely uprooted. Dangerous, unpredictable murder-hobos. Oh, wait, you’re an adventurer? I take it all back.”",
    "instinct": "To adventure or die trying",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Sword",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Adventurer",
    "tags": [
      "horde",
      "intelligent"
    ],
    "moves": [
      "Go on a fool’s errand",
      "Act impulsively",
      "Share tales of past exploits"
    ],
    "key": "adventurer"
  },
  "bandit": {
    "description": "Desperation is the watchword of banditry. When times are tough, what else is there to do but scavenge a weapon and take up with a clan of nasty men and women? Highway robbery, poaching, scams and cons and murder most foul but we’ve all got to eat so who can blame them? Then again, there’s evil in the hearts of some and who’s to say that desperation isn’t a need  to sate one’s baser lusts? Anyway—it’s this or starve, sometimes.",
    "instinct": "To rob",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Dirk",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Bandit",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Steal something",
      "Demand tribute"
    ],
    "key": "bandit"
  },
  "bandit_king": {
    "description": "Better to rule in hell than serve in heaven.",
    "instinct": "To lead",
    "armor": 1,
    "hp": 12,
    "attacks": [
      {
        "name": "Trusty knife",
        "damage": "b[2d10]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Bandit King",
    "tags": [
      "solitary",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Make a demand",
      "Extort",
      "Topple power"
    ],
    "key": "bandit_king"
  },
  "fool": {
    "description": "There’s not but one person in all the King’s court allowed to speak the truth. The real, straight-and-honest truth about anything. The fool couches it all in bells and prancing and chalky face-paint, but who else gets to tell the King what’s what? You can trust a fool, they say, especially when he’s made you red-faced and you’d just as soon drown him in a cesspit.",
    "instinct": "To mock",
    "name": "Fool",
    "tags": [
      ""
    ],
    "moves": [
      "Expose injustice",
      "Play a trick"
    ],
    "key": "fool"
  },
  "guardsman": {
    "description": "Noble protector or merely drunken lout, it often makes no difference to these sorts. Falling shy of a noble knight, the proud town guard is an ancient profession nonetheless. These folks of the constabulary often dress in the colors of their lord (when you can see it under the mud) and, depending on the richness of that lord, might even have a decent weapon and some armor that fits. Those are the lucky ones. Even so, someone has to be there to keep an eye on the gate when the Black Riders have been spotted in the woods. Too many of us owe our lives to these souls—remember that the next time one is drunkenly insulting your mother, hmm?",
    "instinct": "To do as ordered",
    "armor": 1,
    "hp": 6,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d8",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Guardsman",
    "tags": [
      "group",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Uphold the law",
      "Make a profit"
    ],
    "key": "guardsman"
  },
  "halfling_thief": {
    "description": "It would be foolish, now, to draw conclusions about folks just because they happen to be good at one thing or another. Then again, a spade’s a spade, isn’t it. Or maybe just the goodly, soft-and-sweet type of Halfling have the mind to stay in their grassy-hill homes and aren’t the type you find in the slums and taverns of the mannish world. Perhaps they’re there to cut your purse for calling them “halfling” in the first place. Not all take so kindly to the title. Or they’re playing a game, pretending to be a child in need of alms—and your arrogant eyes can’t even see the difference until too late. Well, it matters little. They’re gone with your coin before you even realize you deserved it.",
    "instinct": "To live a life of stolen luxury",
    "armor": 1,
    "hp": 12,
    "attacks": [
      {
        "name": "Dagger",
        "damage": "w[2d8]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Halfling Thief",
    "tags": [
      "solitary",
      "small",
      "intelligent",
      "stealthy",
      "devious"
    ],
    "moves": [
      "Steal",
      "Put on the appearance of friendship"
    ],
    "key": "halfling_thief"
  },
  "hedge_wizard": {
    "description": "Not all those who wield the arcane arts are adventuring wizards. Nor necromancers in mausoleums or sorcerers of ancient bloodline. Some are just old men and women, smart enough to have discovered a trick or two. It might make them a bit batty to come by that knowledge, but if you’ve a curse to break or a love to prove, might be that a hedge wizard will help you, if you can find his rotten hut in the swamp and pay the price he asks.",
    "instinct": "To learn",
    "name": "Hedge Wizard",
    "tags": [
      "magical"
    ],
    "moves": [
      "Cast almost the right spell (for a price)",
      "Make deals beyond their ken"
    ],
    "key": "hedge_wizard"
  },
  "high_priest": {
    "description": "Respected by all who gaze upon them, the high priests and abbesses of Dungeon World are treated with a sort of reverence. Whether they pay homage to Ur-thuu-hak, God of Swords, or whisper quiet prayers to Namiah, precious daughter of peace, they know a thing or two that you and I won’t ever know. The gods speak to them as a hawker-of-wares might speak to us in the marketplace. For this, for the bearing-of-secrets and the knowing-of-things, we give them a wide berth as they pass in their shining robes.",
    "instinct": "To lead",
    "name": "High Priest",
    "tags": [
      ""
    ],
    "moves": [
      "Set down divine law",
      "Reveal divine secrets",
      "Commission divine undertakings"
    ],
    "key": "high_priest"
  },
  "hunter": {
    "description": "The wilds are home to more than just beasts of horn and scale. There are men and women out there, too—those who smell blood on the wind and stalk the plains in the skins of their prey. Whether with a trusty longbow bought on a rare trip into the city or with a knife of bone and sinew, these folk have more in common with the things they track and eat than with their own kind. Solemn, somber and quiet, they find a sort of peace in the wild.",
    "instinct": "To survive",
    "armor": 1,
    "hp": 6,
    "attacks": [
      {
        "name": "Ragged bow",
        "damage": "d6",
        "tags": [
          "near",
          "far"
        ]
      }
    ],
    "name": "Hunter",
    "tags": [
      "group",
      "intelligent"
    ],
    "moves": [
      "Bring back news from the wilds",
      "Slay a beast"
    ],
    "key": "hunter"
  },
  "knight": {
    "description": "What youngster doesn’t cling to the rail at the mighty joust, blinded by the sun on their glittering armor, wishing they could be the one adorned in steel and riding to please the King and Queen? What peasant youth with naught but a loaf of bread and a lame sow doesn’t wish to trade it all in for the lance and the bright pennant? A knight is many things—a holy warrior, a sworn sword, a villain sometimes, too, but a knight cannot help but be a symbol to all who see her. A knight means something.",
    "instinct": "To live by a code",
    "armor": 4,
    "hp": 12,
    "attacks": [
      {
        "name": "Sword",
        "damage": "b[2d10]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Knight",
    "tags": [
      "solitary",
      "intelligent",
      "organized",
      "cautious"
    ],
    "moves": [
      "Make a moral stand",
      "Lead soldiers into battle"
    ],
    "key": "knight"
  },
  "merchant": {
    "description": "“Ten foot poles. Get your ten foot poles, here. Torches, bright and hot. Mules, too—stubborn but immaculately bred. Need a linen sack, do you? Right over here! Come and get your ten foot poles!”",
    "instinct": "To profit",
    "name": "Merchant",
    "tags": [
      ""
    ],
    "moves": [
      "Propose a business venture",
      "Offer a “deal”"
    ],
    "key": "merchant"
  },
  "noble": {
    "description": "Are they granted their place by the gods, perhaps? Is that why they’re able to pass their riches and power down by birth? Some trick or enchantment of the blood, maybe. The peasant bends his knee and scrapes and toils and the noble wears the finery of his place and, they say, we all have our burdens to bear. Seems to me that some of us have burdens of stone and some carry their weight in gold. It’s a tough life.",
    "instinct": "To rule",
    "name": "Noble",
    "tags": [
      ""
    ],
    "moves": [
      "Issue an order",
      "Offer a reward"
    ],
    "key": "noble"
  },
  "peasant": {
    "description": "Covered in muck, downtrodden at the bottom of the great chain of being, we all stand on the backs of those who grow our food on their farms. Some peasants do better than others, but none will ever see a coin of gold in their day. They’ll dream at night of how someday, somehow, they’ll fight a dragon and save a princess. Don’t act like you weren’t one before you lost what little sense you had, adventurer.",
    "instinct": "To get by",
    "name": "Peasant",
    "tags": [
      ""
    ],
    "moves": [
      "Plead for help",
      "Offer a simple reward and gratitude"
    ],
    "key": "peasant"
  },
  "rebel": {
    "description": "In the countryside they’d be called outlaw and driven off or killed. The city, though, is full of places to hide. Damp basements to pore over maps and to plan and plot against a corrupt system. Like rats, they gnaw away at order, either to supplant it anew or just erode the whole thing. The line between change and chaos is a fine one—some rebels walk that thin line and others just want to see it all torched. Disguise, a knife in the dark or a thrown torch at the right moment are all tools of the rebel. The burning brand of anarchy is a common fear amongst the nobles of Dungeon World. These men and women are why.",
    "instinct": "To upset order",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Axe",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Rebel",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Die for a cause",
      "Inspire others"
    ],
    "key": "rebel"
  },
  "soldier": {
    "description": "For a commoner with a strong arm, sometimes it’s this or be a bandit. It’s wear the colors and don ill-fitting armor and march into the unknown with a thousand other scared men and women conscripted to fight the wars of our time. They could be hiding out in the woods instead, living off poached elk and dodging the king’s guard. Better to risk one’s life in service to a cause. To bravely toss one’s lot in with one’s fellows and hope to come out the other side still in one piece. Besides, the nobles need strong men and women. What is it they say? A handful of soldiers beats a mouthful of arguments.",
    "instinct": "To fight",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d6",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Soldier",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "March into battle",
      "Fight as one"
    ],
    "key": "soldier"
  },
  "spy": {
    "description": "Beloved of kings but never truly trusted. Mysterious, secretive and alluring, the life of a spy is, if you ask a commoner, full of romance and intrigue. They’re a knife in the dark and a pair of watchful eyes. A spy can be your best friend, your lover or that old man you see in the market every day. One never knows. Hells, maybe you’re a spy—they say there’s magic that can turn folks’ minds without them ever knowing it. How can we trust you?",
    "instinct": "To infiltrate",
    "name": "Spy",
    "tags": [
      ""
    ],
    "moves": [
      "Report the truth",
      "Double cross"
    ],
    "key": "spy"
  },
  "tinkerer": {
    "description": "It’s said that if you see a tinker on the road and you don’t offer him a swig of ale or some of your food that he’ll leave a curse of bad luck behind. A tinker is a funny thing. These strange folk often travel the roads between towns with their oddment carts and favorite mules. With a ratty dog and always a story to tell. Sometimes the mail, too, if you’re lucky and live in a place where Queen’s Post won’t go. If you’re kind, maybe they’ll sell you a rose that never wilts or a clock that chimes with the sound of faerie laughter. Or maybe they’re just antisocial peddlers. You never know, right?",
    "instinct": "To create",
    "name": "Tinkerer",
    "tags": [
      ""
    ],
    "moves": [
      "Offer an oddity at a price",
      "Spin tales of great danger and reward in far-off lands"
    ],
    "key": "tinkerer"
  },
  "aboleth": {
    "description": "Deep below the surface of the world, in freshwater seas untouched by the sun, dwell the aboleth. Fish the size of whales, with strange growths of gelatinous feelers used to probe the lightless shores. They’re served by slaves: blind albino victims of any race unfortunate enough to stumble on them, drained of thought and life by the powers of the aboleth’s alien mind. In the depths they plot against each other, fishy cultists building and digging upward towards the surface until someday, they’ll breach it. For now, they sleep and dream and guide their pallid minions to do their bidding.",
    "instinct": "To command",
    "armor": 0,
    "hp": 18,
    "attacks": [
      {
        "name": "Tentacle",
        "damage": "d10+3",
        "tags": [
          "reach"
        ]
      }
    ],
    "name": "Aboleth",
    "tags": [
      "group",
      "huge",
      "intelligent"
    ],
    "moves": [
      "Invade a mind",
      "Turn minions on them",
      "Put a plan in motion"
    ],
    "key": "aboleth"
  },
  "apocalypse_dragon": {
    "description": "The end of all things shall be a burning—of tree and earth and of the air itself. It shall come upon the plains and mountains not from beyond this world but from within it. Birthed from the womb of deepest earth shall come the Dragon that Will End the World. In its passing all will become ash and bile and the Dungeon World a dying thing will drift through planar space devoid of life. They say to worship the Apocalypse Dragon is to invite madness. They say to love it is to know oblivion. The awakening is coming.",
    "instinct": "To end the world",
    "armor": 5,
    "hp": 26,
    "attacks": [
      {
        "name": "Bite",
        "damage": "b[2d12]+9",
        "tags": [
          "reach",
          "forceful",
          "messy",
          "4 piercing"
        ]
      }
    ],
    "name": "Apocalypse Dragon",
    "tags": [
      "solitary",
      "huge",
      "magical",
      "divine"
    ],
    "moves": [
      "Set a disaster in motion",
      "Breathe forth the elements",
      "Act with perfect foresight"
    ],
    "key": "apocalypse_dragon"
  },
  "chaos_spawn": {
    "description": "Driven from the city, a cultist finds sanctuary in towns and villages. Discovered there, he flees to the hills and scratches his devotion on the cave walls. Found out again, he is chased with knife and torch into the depths, crawling deeper and deeper until, in the deepest places, he loses his way. First, he forgets his name. Then he forgets his shape. His chaos gods, most beloved, bless him with a new one.",
    "instinct": "To undermine the established order",
    "armor": 1,
    "hp": 19,
    "attacks": [
      {
        "name": "Chaotic touch",
        "damage": "d10",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Chaos Spawn",
    "tags": [
      "solitary",
      "amorphous"
    ],
    "moves": [
      "Rewrite reality",
      "Unleash chaos from containment"
    ],
    "key": "chaos_spawn"
  },
  "chuul": {
    "description": "Your worst seafood nightmare come to life. A vicious sort of half-man half-crawdad, cursed with primal intelligence and blessed with a pair of razor-sharp claws. Strange things lurk in the stinking pools in caverns best forgotten and the chuul is one of them. If you spot one, your best hope is a heavy mace to crack its shell and maybe a little garlic butter. Mmmm.",
    "instinct": "To split",
    "armor": 4,
    "hp": 10,
    "attacks": [
      {
        "name": "Claws",
        "damage": "d8+1",
        "tags": [
          "close",
          "reach",
          "messy",
          "3 piercing"
        ]
      }
    ],
    "name": "Chuul",
    "tags": [
      "group",
      "large",
      "cautious"
    ],
    "moves": [
      "Split something in two with mighty claws",
      "Retreat into water"
    ],
    "key": "chuul"
  },
  "deep_elf_assassin": {
    "description": "It was not so simple a thing as a war over religion or territory. No disagreement of queens led to the great sundering of the elves. It was sadness. It was the very diminishing of the world by the lesser races. The glory of all the elves had built was cracking and turning to glass. Some, then, chose to separate themselves from the world; wracked with tears they turned their backs on men and dwarves. There were others, though, that were overcome with something new. A feeling no elf had felt before. Spite. Hatred filled these elves and twisted them and they turned on their weaker cousins. Some still remain after the great exodus below. Some hide amongst us with spider-poisoned blades, meting out that strangest of punishments: elven vengeance.",
    "instinct": "To spite the surface races",
    "armor": 1,
    "hp": 6,
    "attacks": [
      {
        "name": "Poisoned blade",
        "damage": "d8",
        "tags": [
          "close",
          "1 piercing"
        ]
      }
    ],
    "name": "Deep Elf Assassin",
    "tags": [
      "group",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Poison them",
      "Unleash an ancient spell",
      "Call reinforcements"
    ],
    "key": "deep_elf_assassin"
  },
  "deep_elf_swordmaster": {
    "description": "The deep elves lost the sweetness and gentle peace of their bright cousins ages ago, but they did not abandon grace. They move with a swiftness and beauty that would bring a tear to any warrior’s eye. In the dark, they’ve practiced. A cruelty has infested their swordsmanship—a wickedness comes to the fore. Barbed blades and whips replace the shining pennant-spears of elven battles on the surface. The swordmasters of the deep elf clans do not merely seek to kill, but to punish with every stroke of their blades. Wickedness and pain are their currency.",
    "instinct": "To punish unbelievers",
    "armor": 2,
    "hp": 6,
    "attacks": [
      {
        "name": "Barbed blade",
        "damage": "b[2d8]+2",
        "tags": [
          "close",
          "1 piercing"
        ]
      }
    ],
    "name": "Deep Elf Swordmaster",
    "tags": [
      "group",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Inflict pain beyond measure",
      "Use the dark to advantage"
    ],
    "key": "deep_elf_swordmaster"
  },
  "deep_elf_priest": {
    "description": "The spirits of the trees and the lady sunlight are far, far from home in the depths where the deep elves dwell. New gods were found there, waiting for their children to come home. Gods of the spiders, the fungal forests, and things that whisper in the forbidden caves. The deep elves, ever attuned to the world around them, listened with hateful intent to their new gods and found a new source of power. Hate calls to hate and grim alliances were made. Even among these spiteful ranks, piety finds a way to express itself.",
    "instinct": "To pass on divine vengeance",
    "armor": 0,
    "hp": 14,
    "attacks": [
      {
        "name": "Smite",
        "damage": "d10+2",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Deep Elf Priest",
    "tags": [
      "solitary",
      "divine",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Weave spells of hatred and malice",
      "Rally the deep elves",
      "Pass on divine knowledge"
    ],
    "key": "deep_elf_priest"
  },
  "dragon": {
    "description": "They are the greatest and most terrible things this world will ever have to offer.",
    "instinct": "To rule",
    "armor": 5,
    "hp": 16,
    "attacks": [
      {
        "name": "Bite",
        "damage": "b[2d12]+5",
        "tags": [
          "reach",
          "messy",
          "4 piercing"
        ]
      }
    ],
    "name": "Dragon",
    "tags": [
      "solitary",
      "huge",
      "terrifying",
      "cautious",
      "hoarder"
    ],
    "moves": [
      "Bend an element to its will",
      "Demand tribute",
      "Act with disdain"
    ],
    "key": "dragon"
  },
  "gray_render": {
    "description": "On its own, the render is a force of utter destruction. Huge and leathery, with a maw of unbreakable teeth and claws to match, the render seems to enjoy little more than tearing things apart. Stone, flesh, or steel, it matters little. However, the gray render is so rarely found alone. They bond with other creatures. Some at birth, others as fully-grown creatures, and a gray render will follow their bonded master wherever they go, bringing them offerings of meat and protecting them while they sleep. Finding an un-bonded render means certain riches, if you survive to sell it.",
    "instinct": "To serve",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Rending claws",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful",
          "3 piercing"
        ]
      }
    ],
    "name": "Gray Render",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Tear something apart"
    ],
    "key": "gray_render"
  },
  "magmin": {
    "description": "Dwarf-shaped and industrious, the magmin are among the deepest-dwellers of Dungeon World. Found in cities of brass and obsidian built nearest the molten core of the planet, the magmin live a life devoted to craft—especially that of fire and magical items related to it. Surly and strange, they do not often deign to speak to petitioners who appear at their gates, even those who have somehow found a way to survive the hellish heat. Even so, they respect little more than a finely made item and to learn to forge from a magmin craftsman means unlocking secrets unknown to surface blacksmiths. Like so much else, visiting the magmin is a game of risk and reward.",
    "instinct": "To craft",
    "armor": 4,
    "hp": 7,
    "attacks": [
      {
        "name": "Flaming hammer",
        "damage": "d6+2",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Magmin",
    "tags": [
      "horde",
      "intelligent",
      "organized",
      "hoarder"
    ],
    "moves": [
      "Offer a trade or deal",
      "Strike with fire or magic",
      "Provide just the right item, at a price"
    ],
    "key": "magmin"
  },
  "minotaur": {
    "description": "“Head of a man, body of a bull. No, wait, I’ve got that backwards. It’s the bull’s head and the man’s body. Hooves sometimes? Is that right? I remember the old king said something about a maze? Blast! You know I can’t think under this kind of pressure. What was that? Oh gods, I think it’s coming…”",
    "instinct": "To contain",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Axe",
        "damage": "d10+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Minotaur",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Confuse them",
      "Make them lost"
    ],
    "key": "minotaur"
  },
  "naga": {
    "description": "Ambitious and territorial above nearly all else, the naga are very rarely found without a well-formed and insidious cult of followers. You’ll see it in many mountain towns—a snake sigil scrawled on a tavern wall or a local church burned to the ground. People going missing in the mines. Men and women wearing the mark of the serpent. At the core of it all lies a naga: an old race now fallen into obscurity, still preening with the head of a man over its coiled, serpent body. Variations of these creatures exist depending on their bloodline and original purpose, but they are all master manipulators and magical forces to be reckoned with.",
    "instinct": "To lead",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Naga",
    "tags": [
      "solitary",
      "intelligent",
      "organized",
      "hoarder",
      "magical"
    ],
    "moves": [
      "Send a follower to their death",
      "Use old magic",
      "Offer a deal or bargain"
    ],
    "key": "naga"
  },
  "salamander": {
    "description": "“The excavation uncovered what the reports called a basalt gate. Black stone carved with molten runes. When they dug it up, the magi declared it inert but further evidence indicates that was an incorrect claim. The entire team went missing. When we arrived, the gate was glowing. Its light filled the whole cavern. We could see from the entrance that the area had become full of these creatures—like men with red and orange skin, tall as an ogre but with a snake’s tail where their legs ought to be. They were clothed, too—some had black glass armor. They spoke to each other in a tongue that sounded like grease in a fire. I wanted to leave but the sergeant wouldn’t listen. You’ve already read what happened next, sir. I know I’m the only one that got back, but what I said is true. The gate is open, now. This is just the beginning!”",
    "instinct": "To consume in flame",
    "armor": 3,
    "hp": 7,
    "attacks": [
      {
        "name": "Flaming spear",
        "damage": "b[2d6]+3",
        "tags": [
          "close",
          "reach",
          "near"
        ]
      }
    ],
    "name": "Salamander",
    "tags": [
      "horde",
      "large",
      "intelligent",
      "organized",
      "planar"
    ],
    "moves": [
      "Summon elemental fire",
      "Melt away deception"
    ],
    "key": "salamander"
  },
  "bulette": {
    "description": "A seasoned caravan guard learns to listen for the calls of a scout or sentry with a keen ear. A few extra seconds after the alarm is raised can mean life or death. Different cries mean different responses, too—a call of “orcs!” means draw your sword and steady for blood but a call of “bandits!” says you might be able to bargain. One alarm from the scouts that always, always means it’s time to pack up, whip your horse and run for the hills? “LAND SHARK!”",
    "instinct": "To devour",
    "armor": 3,
    "hp": 20,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+5",
        "tags": [
          "close",
          "forceful",
          "3 piercing"
        ]
      }
    ],
    "name": "Bulette",
    "tags": [
      "solitary",
      "huge",
      "construct"
    ],
    "moves": [
      "Drag prey into rough tunnels",
      "Burst from the earth",
      "Swallow whole"
    ],
    "key": "bulette"
  },
  "chimera": {
    "description": "Well-known and categorized, the chimera is a perfected creature. From the codices of the Mage’s Guild to the famous pages of Cullaina’s Creature Compendium, there’s no confusion about what chimera means. Two parts lioness, one part serpent, head of a she-goat, and all the vicious magic one can muster. The actual ritual might vary, as might a detail or two—more creative sorcerers switch the flame breath for acid, perhaps. Used as a guardian, an assassin or merely an instrument of chaos unchained, it matters little. The chimera is the worst sort of abomination: an intentional affront to all natural life.",
    "instinct": "To do as commanded",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+1",
        "tags": [
          "reach"
        ]
      }
    ],
    "name": "Chimera",
    "tags": [
      "solitary",
      "large",
      "construct"
    ],
    "moves": [
      "Belch forth flame",
      "Run them over",
      "Poison them"
    ],
    "key": "chimera"
  },
  "derro": {
    "description": "It’s typical to think that all the malignant arcane monsters made in this world are birthed by wizards, sorcerers, and their ilk. That the colleges and towers of Dungeon World are womb to every bleak experiment. There are mistakes made in the depths of the earth, too. These ones, the derro, are the mistakes of a long-forgotten dwarven alchemist. The derro don’t forget, though. Twisted and hateful, the derro can be spotted by their swollen skulls, brain-matter grown too large. They do not speak except in thoughts to one another and plot in the silent dark to extract sweetest revenge—that of the created on the creator.",
    "instinct": "To replace dwarves",
    "armor": 2,
    "hp": 3,
    "attacks": [
      {
        "name": "Pickaxe",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Derro",
    "tags": [
      "horde",
      "devious",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Fill a mind with foreign thoughts",
      "Take control of a beast’s mind"
    ],
    "key": "derro"
  },
  "digester": {
    "description": "It’s okay, magical experimentation is a messy science. For every beautiful pegasus there’s a half-done creature that wasn’t quite right. We understand. The goblin-elephant you thought was such a great idea. The Gelatinous Drake. Just examples. No judgement here. Anyway, we’ve got something for that. We call it the Digester. Yes, just like it sounds. Strange looking, I know, and the smell isn’t the best, but this thing—it’ll eat magic like Svenloff the Stout drinks ale. Next time one of these unfortunate accidents occurs, just point the Digester at it and all your troubles drain away. Just keep an eye on it. Damn thing ate my wand last week.",
    "instinct": "To digest",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Acid",
        "damage": "d10+1 ignores armor",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Digester",
    "tags": [
      "solitary",
      "large",
      "construct"
    ],
    "moves": [
      "Eat away at something",
      "Draw sustenance"
    ],
    "key": "digester"
  },
  "ethereal_filcher": {
    "description": "Things go missing. A sock, a silver spoon, your dead mother’s bones. We blame the maid, or bad luck, or just a moment of stupid forgetfulness and we move on. We never get to see the real cause of these problems. The spidery thing with human hands and eyes as blue as the deep Ethereal plane from whence the creature comes. We never see the nest it makes of astral silver webbing and stolen objects arranged in some mad pattern. We never watch it assemble its collection of halfling finger-bones, stolen from the hands of the sleeping. We’re lucky, that way.",
    "instinct": "To steal",
    "armor": 1,
    "hp": 12,
    "attacks": [
      {
        "name": "Stolen dagger",
        "damage": "w[2d8]",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Ethereal Filcher",
    "tags": [
      "solitary",
      "devious",
      "planar"
    ],
    "moves": [
      "Take something important to its planar lair",
      "Retreat to the Ethereal plane",
      "Use an item from its lair"
    ],
    "key": "ethereal_filcher"
  },
  "ettin": {
    "description": "What could possibly be better than an idiotic angry hill giant? One with two heads. Fantastic idea, really. Grade A stuff.",
    "instinct": "To smash",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Club",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Ettin",
    "tags": [
      "solitary",
      "large",
      "construct"
    ],
    "moves": [
      "Attack two enemies at once",
      "Defend its creator"
    ],
    "key": "ettin"
  },
  "girallon": {
    "description": "The pounding of the jungle drums calls to it. The slab of meat on the sacrificial stone to lure in the great ape. Girallon, they call it—a name from the long-forgotten tongue of the kings who bred the beast. Taller than a building, some say. Cloaked in ivory fur with tusks as long as scimitars. Four arms? Six? The rumors are hard to verify. Every year it is the same: some explorer visits the jungle villages seeking the ape and returns, never quite the same, never with a trophy. The pounding of the drums goes on.",
    "instinct": "To rule",
    "armor": 1,
    "hp": 20,
    "attacks": [
      {
        "name": "Rending hands",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Girallon",
    "tags": [
      "solitary",
      "huge"
    ],
    "moves": [
      "Answer the call of sacrifice",
      "Drive them from the jungle",
      "Throw someone"
    ],
    "key": "girallon"
  },
  "iron_golem": {
    "description": "A staple of the enchanter’s art. Every golemist and mechano-thaumaturge in the kingdoms knows this. Iron is a misnomer, though. These guardians are crafted of any metal, really: steel, copper, or even gold, in some small cases. As much an art as a science, the crafting of a fine golem is as respected in the Kingdoms as a bridge newly built or a castle erected in the mountains. Unceasing watchdog, stalwart defender, the iron golem lives to serve, following its orders eternally. Any enchanter worth his salt can craft one, if he can afford the materials. If not…",
    "instinct": "To serve",
    "armor": 3,
    "hp": 10,
    "attacks": [
      {
        "name": "Metal fists",
        "damage": "d8+5",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Iron Golem",
    "tags": [
      "group",
      "large",
      "construct"
    ],
    "moves": [
      "Follow orders implacably",
      "Use a special tool or adaptation, built-in"
    ],
    "key": "iron_golem"
  },
  "flesh_golem": {
    "description": "Stolen bits and pieces in the night. Graveyards stealthily uprooted and maybe tonight an arm, a leg, another head (the last one came apart too soon). Even the humblest hedge-enchanter can make do with what he can and, with a little creativity, well—it’s not only the college that can make life, hmm? We’ll show them.",
    "instinct": "To live",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Miscellaneous Claws and Teeth",
        "damage": "d6+2",
        "tags": [
          "close",
          "forceful"
        ]
      }
    ],
    "name": "Flesh Golem",
    "tags": [
      "horde"
    ],
    "moves": [
      "Follow orders",
      "Detach a body part"
    ],
    "key": "flesh_golem"
  },
  "kraken": {
    "description": "”A cephalo-what? No, boy. Not “a kraken” but “the kraken.” I don’t know what nonsense they taught you at that school you say you’re from, but here, we know to respect the Hungerer. Right, that’s what we call it, The Hungerer in the Deep to be more proper. Ain’t no god, though we’ve got those, too. It’s a squid! A mighty squid with tentacles thicker ‘round than a barrel and eyes the size of the full moon. Smart, too, the Hungerer. Knows just when to strike—when you’re all too drunk or too tired or run out of clean water, that’s when he gets you. No, I ain’t ever seen him. I’m alive, aren’t I?”",
    "instinct": "To rule the ocean",
    "armor": 2,
    "hp": 20,
    "attacks": [
      {
        "name": "Giant tentacles",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Kraken",
    "tags": [
      "solitary",
      "huge"
    ],
    "moves": [
      "Drag a person or ship to a watery grave",
      "Wrap them in tentacles"
    ],
    "key": "kraken"
  },
  "manticore": {
    "description": "If the chimera is the first step down a dark path, the manticore is a door that can’t be closed once it’s been opened. A lion, a scorpion, the wings of a drake. All difficult to obtain but not impossible and just animals, anyway. The last component, the hissing hateful face of the beast, is the ingredient that makes a manticore so cruel. Young or old, man or woman, it matters not but that they are human, living and breathing, married to the creature with twisted magic. All sense of who they are is lost, and maybe that’s a blessing, but the beast is born from human suffering. No wonder, then, that they’re all so eager to kill.",
    "instinct": "To kill",
    "armor": 3,
    "hp": 16,
    "attacks": [
      {
        "name": "Stinger",
        "damage": "d10+1",
        "tags": [
          "close",
          "reach",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Manticore",
    "tags": [
      "solitary",
      "large",
      "construct"
    ],
    "moves": [
      "Poison them",
      "Rip something apart"
    ],
    "key": "manticore"
  },
  "owlbear": {
    "description": "Body of a bear. Feathers of an owl. Beak, claws, and excellent night vision. What’s not to love?",
    "instinct": "To hunt",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Claws",
        "damage": "d10",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Owlbear",
    "tags": [
      "solitary",
      "construct"
    ],
    "moves": [
      "Strike from darkness"
    ],
    "key": "owlbear"
  },
  "pegasus": {
    "description": "Don’t go thinking that every creature not natural-born is a horrible abomination. Don’t imagine for a second that they’re all tentacles and screaming and blood or whatever. Take this noble beast, for example. Lovely thing, isn’t it? A fine white horse with the wings of a swan. Don’t look like it ought to be able to fly, but it does. The elves work miracles, in their own way. They breed true—that’s the purity of elf-magic at work. Hatching from little crystal eggs and bonded with their riders for life. There’s still some beauty in the world, mark my words.",
    "instinct": "To carry aloft",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Sharp hooves",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Pegasus",
    "tags": [
      "group",
      "construct"
    ],
    "moves": [
      "Carry a rider into the air",
      "Give their rider an advantage"
    ],
    "key": "pegasus"
  },
  "rust_monster": {
    "description": "A very distinctive-looking creature. Something like a reddish cricket, I think. Long crickety legs, anyhow. Blind, too, as I understand it—they feel their way around with those long moth-looking tendrils. Feed that way, too. Sift through piles of metal for the choicest bits. That’s what they eat, don’t matter the type, neither. Their merest touch turns it all to rusted flakes. Magic lasts longer but under the scrutiny of a rust monster, it’s a foregone conclusion. Only the gods know where they came from, but they’re a curse if you value your belongings.",
    "instinct": "To decay",
    "armor": 3,
    "hp": 6,
    "attacks": [
      {
        "name": "Corrosive touch",
        "damage": "d8",
        "tags": [
          "close",
          "ignores armor"
        ]
      }
    ],
    "name": "Rust Monster",
    "tags": [
      "group",
      "construct"
    ],
    "moves": [
      "Turn metal to rust",
      "Gain strength from consuming metal"
    ],
    "key": "rust_monster"
  },
  "xorn": {
    "description": "Dwarf-made elemental garbage muncher. Shaped like a trash bin with a radius of arms to feed excess rock and stone into its gaping maw. They eat stone and excrete light and heat. Perfect for operating a mine or digging out a quarry. Once one gets lost in the sewers below a city, though, or in the foundation of a castle? You’re in deep trouble. They’ll eat and eat until you’ve got nothing left but to collapse the place down on it and move somewhere else. Ask Burrin, Son of Fjornnvald, exile from his clan. I bet he could tell you a story about a xorn.",
    "instinct": "To eat",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Maw",
        "damage": "d10",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Xorn",
    "tags": [
      "solitary",
      "large",
      "construct"
    ],
    "moves": [
      "Consume stone",
      "Give off a burst of light and heat"
    ],
    "key": "xorn"
  },
  "formian_drone": {
    "description": "With good cause, they say that these creatures (like all insects, really) are claimed by the powers of Law. They are order made flesh—a perfectly stratified society in which every larva, hatchling and adult knows its place in the great hive. The formian is some strange intersection of men and ants. (Though there are winged tribes that look like wasps out in the Western Desert, I’ve heard. And some with great sawtooth arms like mantids in the forests of the east.) Tall, with a hard shell and a harder mind, these particular formians are the bottom caste. They work the hills and honeycombs with single-minded joy that can be known only by such an alien mind.",
    "instinct": "To follow orders",
    "armor": 4,
    "hp": 7,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Formian Drone",
    "tags": [
      "horde",
      "organized",
      "cautious"
    ],
    "moves": [
      "Raise the alarm",
      "Create value for the hive",
      "Assimilate"
    ],
    "key": "formian_drone"
  },
  "formian_taskmaster": {
    "description": "It takes two hands to rule an empire: one to wield the scepter and one to crack the whip. These ant-folk are that whip. Lucky for them, with two extra arms, that’s a lot of whip to crack. They oversee the vast swarms of worker drones that set to build the mighty caverns and ziggurats that dot the places that formians can be found. One in a hundred, these brutes stand two or three feet taller than their pale, near-mindless kin and have a sharper, crueler wit to match. They’ll often ignore the soft races (as we’re known) if we don’t interfere in a project, but get in the way of The Great Work and expect nothing less than their full attention. You don’t want their full attention.",
    "instinct": "To command",
    "armor": 3,
    "hp": 6,
    "attacks": [
      {
        "name": "Spiked whip",
        "damage": "d8",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Formian Taskmaster",
    "tags": [
      "group",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Order drones into battle",
      "Set great numbers in motion"
    ],
    "key": "formian_taskmaster"
  },
  "formian_centurion": {
    "description": "Whether in the form of a legionnaire, part of the formian standing army, or as a praetorian guard to the queen, every formian hive contains a great number of these most dangerous insectoids. Darker in carapace, often scarred with furrows and the ceremonial markings that set them apart from their drones, the formian centurions are their fighting force and rightly so. Born, bred and living for the singular purpose of killing the enemies of their hive, they fight with one mind and a hundred swords. Thus far, the powers of Law have seen fit to spare mankind a great war with these creatures, but we’ve seen them in skirmish—descending sometimes on border towns with their wings flickering in the heat or spilling up from a sandy mound to wipe clean a newly-dug mine. Theirs is an orderly bloodshed, committed with no pleasure but the completion of a goal.",
    "instinct": "To fight as ordered",
    "armor": 3,
    "hp": 7,
    "attacks": [
      {
        "name": "Barbed spear",
        "damage": "b[2d6]+2",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Formian Centurion",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Advance as one",
      "Summon reinforcements",
      "Give a life for the hive"
    ],
    "key": "formian_centurion"
  },
  "formian_queen": {
    "description": "At the heart of every hive, no matter its size or kind, lives a queen. As large as any giant, she sits protected by her guard, served by every drone and taskmaster with her own, singular purpose: to spread her kind and grow the hive. To birth the eggs. To nurture. We do not understand the minds of these creatures but it is known they can communicate with their children, somehow, over vast distances and that they begin to teach them the ways of earth and stone and war while still pale and wriggling larvae, without a word. To kill one is to set chaos on the hive; without their queen, the rest turn on one another in a mad, blind rage.",
    "instinct": "To spread formians",
    "armor": 3,
    "hp": 24,
    "attacks": [
      {
        "name": "Crushing mandibles",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Formian Queen",
    "tags": [
      "solitary",
      "huge",
      "organized",
      "intelligent",
      "hoarder"
    ],
    "moves": [
      "Call every formian it spawned",
      "Release a half-formed larval mutation",
      "Organize and issue orders"
    ],
    "key": "formian_queen"
  },
  "gnoll_tracker": {
    "description": "Once they scent your blood, you can’t escape. Not without intervention from the gods, or the duke’s rangers at least. The desert scrub is a dangerous place to go exploring on your own and if you fall and break your leg or eat the wrong cactus, well, you’ll be lucky if you die of thirst before the gnolls find you. They prefer their prey alive, see—cracking bones and the screams of the dying lend a sort of succulence to a meal. Sickening creatures, no? They’ll hunt you, slow and steady, as you die. If you hear laughter in the desert wind, well, best pray Death comes to take you before they do.",
    "instinct": "To prey on weakness",
    "armor": 1,
    "hp": 6,
    "attacks": [
      {
        "name": "Bow",
        "damage": "d8",
        "tags": [
          "near",
          "far"
        ]
      }
    ],
    "name": "Gnoll Tracker",
    "tags": [
      "group",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Doggedly track prey",
      "Strike at a moment of weakness"
    ],
    "key": "gnoll_tracker"
  },
  "gnoll_emissary": {
    "description": "Oh, an emissary! How nice. I suspect you didn’t know the gnolls had ambassadors, did you? Yes, even these mangy hyenas have to make nice sometimes. No, no, not with us. Nor the dwarves, neither. No, the emissary is the one, among his packmates, who trucks directly with their dripping demon lord. Frightening? Too right. Every hound has a master with his hand on the chain. This gnoll hears his master’s voice. Hears it and obeys.",
    "instinct": "To share divine insight",
    "armor": 1,
    "hp": 18,
    "attacks": [
      {
        "name": "Ceremonial dagger",
        "damage": "d10+2",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Gnoll Emissary",
    "tags": [
      "solitary",
      "divine",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Pass on demonic influence",
      "Drive the pack into a fervor"
    ],
    "key": "gnoll_emissary"
  },
  "gnoll_alpha": {
    "description": "Every pack has its top dog. Bigger, maybe—that’d be the simplest way. Often, though, with these lank and filthy mutts, it’s not about size or sharp teeth but about cruelty. About a willingness to kill your brothers and eat them while the pack watches. Willingness to desecrate the pack in a way that cows them to you. If they’re that awful to each other—to their living kin—think about how they must view us. It’s hard to be mere meat in a land of carnivores.",
    "instinct": "To drive the pack",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Sword",
        "damage": "b[2d10]",
        "tags": [
          "close",
          "1 piercing"
        ]
      }
    ],
    "name": "Gnoll Alpha",
    "tags": [
      "solitary",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Demand obedience",
      "Send the pack to hunt"
    ],
    "key": "gnoll_alpha"
  },
  "orc_bloodwarrior": {
    "description": "The orcish horde is a savage, bloodthirsty, and hateful collection of tribes. There are myths and stories that tell of the origin of their rage—a demon curse, a homeland destroyed, elven magic gone wrong—but the truth has been lost to time. Every able orc, be it man or woman, child or elder, swears fealty to the warchief and their tribe and bears the jagged blade of a bloodwarrior. Men are trained to fight and kill—orcs are born to it.",
    "instinct": "To fight",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Jagged blade",
        "damage": "d6+2",
        "tags": [
          "close",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Orc Bloodwarrior",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Fight with abandon",
      "Revel in destruction"
    ],
    "key": "orc_bloodwarrior"
  },
  "orc_berserker": {
    "description": "Stained in the unholy ritual of Anointing By The Night’s Blood, some warriors of the horde rise to a kind of twisted knighthood. They trade their sanity for this honor, stepping halfway into a world of swirling madness. This makes berserkers the greatest of their tribe, though as time passes, the chaos spreads. The rare berserker that lives more than a few years becomes horrible and twisted, growing horns or an extra arm with which to grasp the iron cleavers they favor in battle.",
    "instinct": "To rage",
    "armor": 0,
    "hp": 20,
    "attacks": [
      {
        "name": "Cleaver",
        "damage": "d10+5",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Orc Berserker",
    "tags": [
      "solitary",
      "large",
      "divine",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Fly into a frenzy",
      "Unleash chaos"
    ],
    "key": "orc_berserker"
  },
  "orc_breaker": {
    "description": "“Before you set out across the hordeland, brave sir, hark a moment to the tale of Sir Regnus. Regnus was like you, sir—a paladin of the Order, all a-shine in his plated armor and with a shield as tall as a man. Proud he was of it, too—Mirrorshield, he called himself. Tale goes that he’d set his eyes on rescuing some lost priest, a kidnap from the abbey on the borders. Regnus came across some orcs in his travels, a dozen or so, and thought, as one might, that they’d be no match. Battle was joined and all was well until one of them orcs emerged from the fray with a hammer bigger than any man ought to be able to wield. Built more like an ogre or a troll, they say it was, and with a single swing, it crushed Regnus to the ground, shield and all. It were no ordinary orc, they say. It were a breaker. They can’t make plate of their own, see, so maybe it’s jealousy drives these burly things to crush and shatter the way they do. Effective tactic, though. Careful out there.”",
    "instinct": "To smash",
    "armor": 0,
    "hp": 16,
    "attacks": [
      {
        "name": "Hammer",
        "damage": "d10+3 ignores armor",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Orc Breaker",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Destroy armor or protection",
      "Lay low the mighty"
    ],
    "key": "orc_breaker"
  },
  "orc_one-eye": {
    "description": "In the name of He of Riven Sight and by the First Sacrifice of Elf-Flesh do we invoke the Old Powers. By the Second Sacrifice, I make my claim to what is mine—the dark magic of Night. In His image, I walk the path to Gor-sha-thak, the Iron Gallows! I call to the runes! I call to the clouded sky! Take this mortal organ, eat of the flesh of our enemy and give me what is mine!",
    "instinct": "To hate",
    "armor": 0,
    "hp": 6,
    "attacks": [
      {
        "name": "Inflict Wounds",
        "damage": "d8+2 ignores armor",
        "tags": [
          "close",
          "reach",
          "near",
          "far"
        ]
      }
    ],
    "name": "Orc One-Eye",
    "tags": [
      "group",
      "divine",
      "magical",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Rend flesh with divine magic",
      "Take an eye",
      "Make a sacrifice and grow in power"
    ],
    "key": "orc_one-eye"
  },
  "orc_shaman": {
    "description": "The orcs are as old a race as any. They cast bones in the dirt and called to the gods in the trees and stone as the elves built their first cities. They have waged wars, conquered kingdoms, and fallen into corruption in the aeons it took for men to crawl from their caves and dwarves to first see the light of the sun. Fitting, then, that the old ways still hold. They summon the powers of the world to work, to fight and to protect their people, as they have since the first nights.",
    "instinct": "To strengthen orc-kind",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Elemental blast",
        "damage": "d10 ignores armor",
        "tags": [
          "close",
          "reach",
          "near",
          "far"
        ]
      }
    ],
    "name": "Orc Shaman",
    "tags": [
      "solitary",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Give protection of earth",
      "Give power of fire",
      "Give swiftness of water",
      "Give clarity of air"
    ],
    "key": "orc_shaman"
  },
  "orc_slaver": {
    "description": "Red sails fly in the southern sea. Red sails and ships of bone, old wood and iron. The warfleet of the horde. Orcs down that way have taken to the sea, harassing island towns and stealing away with fishermen and their kin. It’s said the custom is spreading north and the orcs learn the value of free work. Taken to it like a sacred duty—especially if they can get their hands on elves. Hard to think of a grimmer fate than to live out your life on an orcish galley, back bent under the lash.",
    "instinct": "To take",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Whip",
        "damage": "d6",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Orc Slaver",
    "tags": [
      "horde",
      "stealthy",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Take a captive",
      "Pin someone under a net",
      "Drug them"
    ],
    "key": "orc_slaver"
  },
  "orc_shadowhunter": {
    "description": "Not every attack by orcs is torches and screaming and enslavement. Among those who follow He of Riven Sight, poison and murder-in-the-dark are considered sacred arts. Enter the shadowhunter. Orcs cloaked in Night’s magic who slip into camps, towns and temples and end the lives of those within. Do not be so distracted by the howling of the berserkers that you don’t notice the knife at your back.",
    "instinct": "To kill in darkness",
    "armor": 0,
    "hp": 10,
    "attacks": [
      {
        "name": "Poisoned dagger",
        "damage": "d10",
        "tags": [
          "close",
          "reach",
          "1 piercing"
        ]
      }
    ],
    "name": "Orc Shadowhunter",
    "tags": [
      "solitary",
      "stealthy",
      "magical",
      "intelligent"
    ],
    "moves": [
      "Poison them",
      "Melt into the shadows",
      "Cloak them in darkness"
    ],
    "key": "orc_shadowhunter"
  },
  "orc_warchief": {
    "description": "There are chiefs and there are leaders of the tribes among the orcs. There are those who rise to seize power and fall under the machinations of their foes. There is but one Warchief. One orc in all the horde who stands above the rest, bearing the blessings of the One-Eyes and the Shamans both. But one who walks with the elements under Night. But one who bears the Iron Sword of Ages and carries the ancient grudge against the civil races on his shoulders. The Warchief is to be respected, to be obeyed and above all else, to be feared. All glory to the Warchief.",
    "instinct": "To lead",
    "armor": 0,
    "hp": 16,
    "attacks": [
      {
        "name": "Iron Sword of Ages",
        "damage": "b[2d10]+2",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Orc Warchief",
    "tags": [
      "solitary",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Start a war",
      "Make a show of power",
      "Enrage the tribes"
    ],
    "key": "orc_warchief"
  },
  "triton_spy": {
    "description": "A fishing village caught one in their net, some time ago. Part a man and part some scaly sea creature, it spoke in a broken, spy-learned form of the common tongue before it suffocated in the open air. It told the fishermen of a coming tide, an inescapable swell of the power of some deep-sea god and that the triton empire would rise up and drag the land down into the ocean. The tale spread and now, when fishermen sail the choppy seas, they watch and worry that the dying triton’s tales were true. That there are powers deep below that watch and wait. They fear the tide is coming in.",
    "instinct": "To spy on the surface world",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Trident",
        "damage": "w[2d10]",
        "tags": [
          "close",
          "near"
        ]
      }
    ],
    "name": "Triton Spy",
    "tags": [
      "solitary",
      "stealthy",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Reveal their secrets",
      "Strike at weakness"
    ],
    "key": "triton_spy"
  },
  "triton_tidecaller": {
    "description": "Part priest, part outcast among their kind, the tidecaller speaks with the voice of the deeps. They can be known by their mutations—transparent skin, perhaps, or rows of teeth like a shark. Glowing eyes or fingertips, angler-lights in the darkness of their underwater kingdom. They speak in a strange tongue that can call and command creatures of the sea. They ride wild hippocampi and cast strange spells that rot through the wooden decks of ships or encrust them with barnacles heavy enough to sink. It is the tidecallers who come, now, back to the cities of the triton, bearing word that the prophecy is coming to pass. The world of men will drown in icy brine. The tidecallers speak and the lords begin to listen.",
    "instinct": "To bring on The Flood",
    "armor": 2,
    "hp": 6,
    "attacks": [
      {
        "name": "Waves",
        "damage": "d8+2",
        "tags": [
          "near",
          "far",
          "ignores armor"
        ]
      }
    ],
    "name": "Triton Tidecaller",
    "tags": [
      "group",
      "divine",
      "magical",
      "intelligent"
    ],
    "moves": [
      "Cast a spell of water and destruction",
      "Command beasts of the sea",
      "Reveal divine proclamation"
    ],
    "key": "triton_tidecaller"
  },
  "triton_sub-mariner": {
    "description": "The triton are not a militant race by nature. They shy away from battle except when the sahuagin attack, and then they only defend themselves and retreat into the depths where their foes can’t follow. This trend begins to change. As the tidecallers come to rally their people, some triton men and women take up arms. They call these generals “sub-mariners” and build for them armor of shells and hardened glass. They swim in formation, wielding pikes and harpoons and attack the crews of ships that wander too far from port. Watch for their pennants of kelp on the horizon and the conch-cry of a call to battle and keep, if you can, your boats near shore.",
    "instinct": "To wage war",
    "armor": 3,
    "hp": 6,
    "attacks": [
      {
        "name": "Harpoon",
        "damage": "b[2d8]",
        "tags": [
          "close",
          "near",
          "far"
        ]
      }
    ],
    "name": "Triton Sub-Mariner",
    "tags": [
      "group",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Lead tritons to battle",
      "Pull them beneath the waves"
    ],
    "key": "triton_sub-mariner"
  },
  "triton_noble": {
    "description": "The triton ruling houses were chosen, they say, at the dawn of time. Granted lordship over all the races of the sea by some now-forgotten god. These bloodlines continue, passing rulership from father to daughter and mother to son through the ages. Each is allowed to rule their city in whatever way they choose—some alone or with their spouses, others in council of brothers and sisters. In ages past, they were known for their sagacity and bloodlines of even-temper were respected above all else. The tidecallers prophecy is changing that: nobles are expected to be strong, not wise. The nobles have begun to respond, and it is feared by some that the ancient blood is changing forever. It may be too late to turn back. Time and tide wait for none.",
    "instinct": "To lead",
    "armor": 2,
    "hp": 6,
    "attacks": [
      {
        "name": "Trident",
        "damage": "d8",
        "tags": [
          "close",
          "near",
          "far"
        ]
      }
    ],
    "name": "Triton Noble",
    "tags": [
      "group",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Stir tritons to war",
      "Call reinforcements"
    ],
    "key": "triton_noble"
  },
  "assassin_vine": {
    "description": "Among the animals there exists a clear division ‘tween hunter and hunted. All it takes is a glance to know—by fangs and glowing eyes or claws or venomous sting—which of the creatures of this world are meant to kill and which stand to be killed. Such a split, if you have the eyes to see it, cuts the world of leaves and flowers in twain, as well. Druids in their forest circles know it. Rangers, too, might spot such a plant before it’s too late. Lay folk, though, they wander where they oughtn’t—paths into the deep woods covered in creeping vines and with a snap, these hungry ropes snap tight, dragging their meaty prey into the underbrush. Mind your feet, traveller.",
    "instinct": "To grow",
    "armor": 1,
    "hp": 15,
    "attacks": [
      {
        "name": "Thorns",
        "damage": "d10",
        "tags": [
          "close",
          "reach",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Assassin Vine",
    "tags": [
      "solitary",
      "stealthy",
      "amorphous"
    ],
    "moves": [
      "Shoot forth new growth",
      "Attack the unwary"
    ],
    "key": "assassin_vine"
  },
  "blink_dog": {
    "description": "Now you see it, now you don’t. Hounds once owned by a sorcerer lord and imbued with a kind of illusory cloak, they escaped into the woods around his lair and began to breed with wolves and wild dogs of the forest. You can spot them, if you’re lucky, by the glittering silver of their coats and their strange, ululating howls. They have a remarkable talent for being not quite where they appear to be and use it to take down prey much stronger than themselves. If you find yourself facing a pack of blink dogs you might as well close your eyes and fight. You’ll have an easier time when not betrayed by your natural sight. By such sorceries are the natural places of the world polluted with unnatural things.",
    "instinct": "To hunt",
    "armor": 4,
    "hp": 6,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Blink Dog",
    "tags": [
      "group",
      "small",
      "magical",
      "organized"
    ],
    "moves": [
      "Give the appearance of being somewhere they’re not",
      "Summon the pack",
      "Move with amazing speed"
    ],
    "key": "blink_dog"
  },
  "centaur": {
    "description": "“It will be a gathering of clans unseen in this age. Call Stormhoof and Brightspear. Summon Whitemane and Ironflanks. Sound the horn and we shall begin our meeting—we shall speak the words and bind our people together. Too long have the men cut the ancient trees for their ships. The elves are weak and cowardly, friend to these mannish slime. It will be a cleansing fire from the darkest woods. Raise the red banner of war! Today we strike back against these apes and retake what is ours!”",
    "instinct": "To rage",
    "armor": 1,
    "hp": 11,
    "attacks": [
      {
        "name": "Bow",
        "damage": "d6+2",
        "tags": [
          "close",
          "reach",
          "near",
          "1 piercing"
        ]
      }
    ],
    "name": "Centaur",
    "tags": [
      "horde",
      "large",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Overrun them",
      "Fire a perfect bullseye",
      "Move with unrelenting speed"
    ],
    "key": "centaur"
  },
  "chaos_ooze": {
    "description": "The barrier between Dungeon World and the elemental planes is not, as you might hope, a wall of stone. It’s much more porous. Places where the civil races do not often tread can sometimes, how to put this, spring a leak. Like a dam come just a little loose. Bits and pieces of the chaos spill out. Sometimes, they’ll congeal like an egg on a pan—that’s where we get the material for many of the Guild’s magical trinkets. Useful, right? Sometimes, though, it squirms and squishes around a bit and stays that way, warping all it touches into some other, strange form. Chaos begets chaos, and it grows.",
    "instinct": "To change",
    "armor": 1,
    "hp": 23,
    "attacks": [
      {
        "name": "Warping touch",
        "damage": "d10 ignores armor",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Chaos Ooze",
    "tags": [
      "solitary",
      "planar",
      "terrifying",
      "amorphous"
    ],
    "moves": [
      "Cause a change in appearance or substance",
      "Briefly bridge the planes"
    ],
    "key": "chaos_ooze"
  },
  "cockatrice": {
    "description": "“I ain’t ever seen such a thing, sir. Rodrick thought it a chicken, maybe. Poor Rodrick. I figured it to be a lizard of a sort, though he was right—it had a beak and gray feathers like a chicken. Right, well, see, we found it in the woods, in a nest at the foot of a tree while we were out with the sow. Looking for mushrooms, sir. I told Rodrick we were—yes, sir, right sir, the bird—see, it was glaring at Rodrick and he tried to scare it off with a stick to steal the eggs but the thing pecked his hand. Quick it was, too. I tried to get him away but he just got slower and slower and…yes, as you see him now, sir. All frozen up like when we left the dog out overnight in winter two years back. Poor, stupid Rodrick. Weren’t no bird nor lizard, were it, sir?”",
    "instinct": "To defend the nest",
    "armor": 1,
    "hp": 6,
    "attacks": [
      {
        "name": "Beak",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Cockatrice",
    "tags": [
      "group",
      "small",
      "hoarder"
    ],
    "moves": [
      "Start a slow transformation to stone"
    ],
    "key": "cockatrice"
  },
  "dryad": {
    "description": "More beautiful by far than any man or woman born in the civil realms. To gaze upon one is to fall in love. Deep and punishing, too. Thing is, they don’t love—not the fleshy folk who often find them, anyway. Their love is a primal thing, married to the woods—to a great oak that serves as home and mother and sacred place to them. It’s a curse to see one, too, they’ll never love you back. No matter what you do. No matter how you pledge yourself to them, they’ll always spurn you. If ever their oak comes to harm, you’ve not only the dryad’s wrath to contend with, but in every nearby village there’s a score of men with a secret longing in their heart, ready to murder you where you sleep for just a smile from such a creature.",
    "instinct": "To love nature passionately",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Crushing vines",
        "damage": "w[2d8]damage",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Dryad",
    "tags": [
      "solitary",
      "magical",
      "intelligent",
      "devious,"
    ],
    "moves": [
      "Entice a mortal",
      "Merge into a tree",
      "Turn nature against them"
    ],
    "key": "dryad"
  },
  "eagle_lord": {
    "description": "Some the size of horses. Bigger, even—the kings and queens of the eagles. Their cry pierces the mountain sky and woe to those who fall under the shadow of their mighty wings. The ancient wizards forged a pact with them in the primordial days. Men would take the plains and valleys and leave the mountaintops to the eagle lords. These sacred pacts should be honored, lest they set their talons into you. Lucky are the elves, for the makers of their treaties yet live and when danger comes to elvish lands, the eagle lords often serve as spies and mounts for them. Long-lived and proud, some might be willing to trade their ancient secrets for the right price, too.",
    "instinct": "To rule the heights",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Talons",
        "damage": "b[2d8]+1",
        "tags": [
          "close",
          "reach",
          "1 piercing"
        ]
      }
    ],
    "name": "Eagle Lord",
    "tags": [
      "group",
      "large",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Attack from the sky",
      "Pull someone into the air",
      "Call on ancient oaths"
    ],
    "key": "eagle_lord"
  },
  "elvish_warrior": {
    "description": "”As with all things they undertake, the elves approach war as an art. I saw them fight, once. The Battle of Astrid’s Veil. Yes, I am that old, boy, now hush. A warrior-maiden, she was clad in plate that shone like the winter sky. White hair streaming and a pennant of ocean blue tied to her spear. She seemed to glide between the trees the way an angel might, striking out and bathing her blade in blood that steamed in the cold air. I never felt so small before. I trained with the master-at-arms of Battlemoore, you know. I’ve held a sword longer than you’ve been alive, boy, and in that one moment I knew that my skill meant nothing. Thank the gods the elves were with us then. A more beautiful and terrible thing I have never seen.”",
    "instinct": "To seek perfection",
    "armor": 2,
    "hp": 3,
    "attacks": [
      {
        "name": "Sword",
        "damage": "b[2d6]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Elvish Warrior",
    "tags": [
      "horde",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Strike at a weak point",
      "Set ancient plans in motion",
      "Use the woods to advantage"
    ],
    "key": "elvish_warrior"
  },
  "elvish_high_arcanist": {
    "description": "True elvish magic isn’t like the spells of men. Mannish wizardry is all rotes and formulas. They cheat to find the arcane secrets that resound all around them. They are deaf to the arcane symphony that sings in the woods. Elvish magic requires a fine ear to hear that symphony and the voice with which to sing. To harmonize with what is already resounding. Men bind the forces of magic to their will; Elves simply pluck the strings and hum along. The High Arcanists, in a way, have become more and less than any elf. The beat of their blood is the throbbing of all magic in this world.",
    "instinct": "To unleash power",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Arcane fire",
        "damage": "d10 ignores armor",
        "tags": [
          "near",
          "far"
        ]
      }
    ],
    "name": "Elvish High Arcanist",
    "tags": [
      "solitary",
      "magical",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Work the magic that nature demands",
      "Cast forth the elements"
    ],
    "key": "elvish_high_arcanist"
  },
  "griffin": {
    "description": "On first glance, one might mistake the griffin for another magical mistake like the manticore or the chimera. It looks the part, doesn’t it? These creatures have the regal haughtiness of a lion and the arrogant bearing of an eagle, but they temper those with the unshakeable loyalty of both. To earn the friendship of a griffin is to have an ally all your living days. Truly a gift, that. If you’re ever lucky enough to meet one be respectful and deferential above all else. It may not seem it but they can perceive the subtlest slights and will answer them with a sharp beak and talons.",
    "instinct": "To serve allies",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Talons",
        "damage": "d8+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Griffin",
    "tags": [
      "group",
      "large",
      "organized"
    ],
    "moves": [
      "Judge someone’s worthiness",
      "Carry an ally aloft",
      "Strike from above"
    ],
    "key": "griffin"
  },
  "hill_giant": {
    "description": "Ever seen an ogre before? Bigger than that. Dumber and meaner, too. Hope you like having cows thrown at you.",
    "instinct": "Ruin everything.",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Thrown rocks",
        "damage": "d8+3",
        "tags": [
          "reach",
          "near",
          "far",
          "forceful"
        ]
      }
    ],
    "name": "Hill Giant",
    "tags": [
      "group",
      "huge",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Throw something",
      "Do something stupid",
      "Shake the earth"
    ],
    "key": "hill_giant"
  },
  "ogre": {
    "description": "A tale, then. Somewhere in the not-so-long history of the mannish race there was a divide. In days when men were merely dwellers-in-the-mud with no magic to call their own, they split in two: one camp left their caves and the dark forests and built the first city to honor the gods. The others, a wild and savage lot, retreated into darkness. They grew, there. In the deep woods a grim loathing for their softer kin gave them strength. They found dark gods of their own, there in the woods and hills. Ages passed and they bred tall and strong and full of hate. We have forged steel and they match it with their savagery. We may have forgotten our common roots, but somewhere, deep down, the ogres remember.",
    "instinct": "To return the world to darker days",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Club",
        "damage": "d8+5",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Ogre",
    "tags": [
      "group",
      "large",
      "intelligent"
    ],
    "moves": [
      "Destroy something",
      "Fly into a rage",
      "Take something by force"
    ],
    "key": "ogre"
  },
  "razor_boar": {
    "description": "The tusks of the razor boar shred metal plate like so much tissue. Voracious, savage and unstoppable, they tower over their mundane kin. To kill one? A greater trophy of bravery and skill is hard to name, though I hear a razor boar killed the Drunkard King in a single thrust. You think you’re a better hunter than he?",
    "instinct": "To shred",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Tusks",
        "damage": "d10",
        "tags": [
          "close",
          "messy",
          "3 piercing"
        ]
      }
    ],
    "name": "Razor Boar",
    "tags": [
      "solitary"
    ],
    "moves": [
      "Rip them apart",
      "Rend armor and weapons"
    ],
    "key": "razor_boar"
  },
  "satyr": {
    "description": "One of only a very few creatures to be found in the old woods that don’t outright want to maim, kill, or eat us. They dwell in glades pierced by the sun, and dance on their funny goat-legs to enchanting music played on pipes made of bone and silver. They smile easily and, so long as you please them with jokes and sport, will treat our kind with friendliness. They’ve a mean streak, though, so if you cross them, make haste elsewhere; very few things hold a grudge like the stubborn satyr.",
    "instinct": "To enjoy",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Charge",
        "damage": "w[2d8]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Satyr",
    "tags": [
      "group",
      "devious",
      "magical",
      "hoarder"
    ],
    "moves": [
      "Pull others into revelry through magic",
      "Force gifts upon them",
      "Play jokes with illusions and tricks"
    ],
    "key": "satyr"
  },
  "sprite": {
    "description": "I’d classify them elementals, except that “being annoying” isn’t an element.",
    "instinct": "To play tricks",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Dagger",
        "damage": "w[2d4]",
        "tags": [
          "hand"
        ]
      }
    ],
    "name": "Sprite",
    "tags": [
      "horde",
      "tiny",
      "stealthy",
      "magical",
      "devious",
      "intelligent"
    ],
    "moves": [
      "Play a trick to expose someone’s true nature",
      "Confuse their senses",
      "Craft an illusion"
    ],
    "key": "sprite"
  },
  "treant": {
    "description": "Old and tall and thick of bark\nwalk amidst the tree-lined dark\nStrong and slow and forest-born,\ntreants anger quick, we warn\nif to woods with axe ye go\nknow the treants be thy foe",
    "instinct": "To protect nature",
    "armor": 4,
    "hp": 21,
    "attacks": [
      {
        "name": "Walloping branches",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Treant",
    "tags": [
      "group",
      "huge",
      "intelligent",
      "amorphous"
    ],
    "moves": [
      "Move with implacable strength",
      "Set down roots",
      "Spread old magic"
    ],
    "key": "treant"
  },
  "werewolf": {
    "description": "“Beautiful, isn’t it? The moon, I mean. She’s watching us, you know? Her pretty silver eyes watch us while we sleep. Mad, too—like all the most beautiful ones. If she were a woman, I’d bend my knee and make her my wife on the spot. No, I didn’t ask you here to speak about her, though. The chains? For your safety, not mine. I’m cursed, you see. You must have suspected. The sorcerer-kings called it “lycanthropy” in their day—passed on by a bite to make more of our kind. No, I could find no cure. Please, don’t be scared. You have the arrows I gave you? Silver, yes. Ah, you begin to understand. Don’t cry, sister. You must do this for me. I cannot bear more blood on my hands. You must end this. For me.”",
    "instinct": "To shed the appearance of civilization",
    "armor": 1,
    "hp": 12,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+2",
        "tags": [
          "close",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Werewolf",
    "tags": [
      "solitary",
      "intelligent"
    ],
    "moves": [
      "Transform to pass unnoticed as beast or man",
      "Strike from within",
      "Hunt like man and beast"
    ],
    "key": "werewolf"
  },
  "worg": {
    "description": "As horses are to the civil races, so go the worg to the goblins. Mounts, fierce in battle, ridden by only the bravest and most dangerous, are found and bred in the forest primeval to serve the goblins in their wars on men. The only safe worg is a pup, separated from its mother. If you can find one of these, or make orphans of a litter with a sharp sword, you’ve got what could become a loyal protector or hunting hound in time. Train it well, mind you, for the worg are smart and never quite free of their primal urges.",
    "instinct": "To serve",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Worg",
    "tags": [
      "horde",
      "organized"
    ],
    "moves": [
      "Carry a rider into battle",
      "Give its rider an advantage"
    ],
    "key": "worg"
  },
  "abomination": {
    "description": "Corpses sewn onto corpses make up the bulk of these shambling masses of dark magic. Most undead are crafted to be controlled—made to serve some purpose like building a tower or serving as guardians. Not so the abomination. The last aspect of the ritual used to grant fire to their hellish limbs invokes a hatred so severe that the abomination knows but one task: to tear and rend at the very thing it cannot have—life. Many students of the black arts learn to their mortal dismay the most important fact about these hulks; an abomination knows no master.",
    "instinct": "To end life",
    "armor": 1,
    "hp": 20,
    "attacks": [
      {
        "name": "Slam",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Abomination",
    "tags": [
      "solitary",
      "large",
      "construct",
      "terrifying"
    ],
    "moves": [
      "Tear flesh apart",
      "Spill forth putrid guts"
    ],
    "key": "abomination"
  },
  "banshee": {
    "description": "Come away from an encounter with one of these vengeful spirits merely deaf and count yourself lucky for the rest of your peaceful, silent days. Often mistaken at first glance for a ghost or wandering spirit, the banshee reveals a far more deadly talent for sonic assault when angered. And her anger comes easy. A victim of betrayal (often by a loved one) the banshee makes known her displeasure with a roar or scream that can putrefy flesh and rend the senses. If you can help her get her vengeance, they say she might grant rewards. Whether the affection of a spurned spirit is a thing you’d want, well, that’s another question.",
    "instinct": "To get revenge",
    "armor": 0,
    "hp": 16,
    "attacks": [
      {
        "name": "Scream",
        "damage": "d10",
        "tags": [
          "near"
        ]
      }
    ],
    "name": "Banshee",
    "tags": [
      "solitary",
      "magical",
      "intelligent"
    ],
    "moves": [
      "Drown out all other sound with a ceaseless scream",
      "Unleash a skull-splitting noise",
      "Disappear into the mists"
    ],
    "key": "banshee"
  },
  "devourer": {
    "description": "Most folk know that the undead feed on flesh. The warmth, blood and living tissue continue their unholy existence. This is true for most of the mindless dead, animated by black sorcery. Not so the devourer. When a particularly wicked person (often a manipulator of men, an apostate priest or the like) dies in a gruesome way, the dark powers of Dungeon World might bring them back to a kind of life. The devourer, however, does not feed on the flesh of men or elves. The devourer eats souls. It kills with a pleasure only the sentient can enjoy and in the moments of its victims’ expiry, draws breath like a drowning man and swallows a soul. What does it mean to have your soul eaten by such a creature? None dare ask for fear of finding out.",
    "instinct": "To feast on souls",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Smash",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Devourer",
    "tags": [
      "solitary",
      "large",
      "intelligent",
      "hoarder"
    ],
    "moves": [
      "Devour or trap dying soul",
      "Bargain for a soul’s return"
    ],
    "key": "devourer"
  },
  "dragonbone": {
    "description": "Mystical sorcerers debate: is this creature truly undead or is it a golem made of a particularly rare and blasphemous material? The bones, sinews and scales of a dead dragon make up this bleak automaton. Winged but flightless, dragon-shaped but without the mighty fire of such a noble thing, the dragonbone serves its master with a twisted devotion and is often set to assault the keeps and towers of rival necromancers. It would take a being of some considerable evil to twist the remains of a dragon thus.",
    "instinct": "To serve",
    "armor": 2,
    "hp": 20,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+3",
        "tags": [
          "reach",
          "messy",
          "3 piercing"
        ]
      }
    ],
    "name": "Dragonbone",
    "tags": [
      "solitary",
      "huge"
    ],
    "moves": [
      "Attack unrelentingly"
    ],
    "key": "dragonbone"
  },
  "draugr": {
    "description": "In the Nordemark, the men and women tell tales in their wooden halls of a place where the noble dead go. A mead hall atop their heavenly mountain where men of valor go to await the final battle for the world. It is a goodly place. It is a place where one hopes to go after death. And the inglorious dead? Those who fall to poison or in an act of cowardice, warriors though they may be? Well, those mead halls aren’t open to all and sundry. Some come back, frozen and twisted and empowered by jealous rage and wage their eternal war not on the forces of giants or trolls but on the towns of the men they once knew.",
    "instinct": "To take from the living",
    "armor": 2,
    "hp": 7,
    "attacks": [
      {
        "name": "Rusty sword",
        "damage": "d6+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Draugr",
    "tags": [
      "horde",
      "organized"
    ],
    "moves": [
      "Freeze flesh",
      "Call on the unworthy dead"
    ],
    "key": "draugr"
  },
  "ghost": {
    "description": "Every culture tells the story the same way. You live, you love or you hate, you win or you lose, you die somehow you’re not too fond of and here you are, ghostly and full of disappointment and what have you. Some people take it upon themselves, brave and kindly folks, to seek out the dead and help them pass to their rightful rest. You can find them, most times, down at the tavern drinking away the terrors they’ve seen or babbling to themselves in the madhouse. Death takes a toll on the living, no matter how you come by it.",
    "instinct": "To haunt",
    "armor": 0,
    "hp": 16,
    "attacks": [
      {
        "name": "Phantom touch",
        "damage": "d6",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Ghost",
    "tags": [
      "solitary",
      "devious",
      "terrifying"
    ],
    "moves": [
      "Reveal the terrifying nature of death",
      "Haunt a place of importance",
      "Offer information from the other side, at a price"
    ],
    "key": "ghost"
  },
  "ghoul": {
    "description": "Hunger. Hunger hunger hunger. Desperate clinging void-stomach-emptiness hunger. Sharp talons to rend flesh and teeth to tear and crack bones and suck out the soft marrow inside. Vomit up hate and screaming jealous anger and charge on twisted legs—scare the living flesh and sweeten it ever more with the stink of fear. Feast. Peasant or knight, wizard, sage, prince, or priest all make for such delicious meat.",
    "instinct": "To eat",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Talons",
        "damage": "d8",
        "tags": [
          "close",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Ghoul",
    "tags": [
      "group"
    ],
    "moves": [
      "Gnaw off a body part",
      "Gain the memories of their meal"
    ],
    "key": "ghoul"
  },
  "lich": {
    "description": "“At the end, they give you a scroll and a jeweled medallion to commemorate your achievements. Grand Master of Abjuration, I was called, then. Old man. Weak and wizened and just a bit too senile for them—those jealous halfwits. Barely apprentices, and they called themselves The New Council. It makes me sick, or would, if I still could be. They told me it was an honor and I would be remembered forever. It was like listening to my own eulogy. Fitting, in a way, don’t you think? It took me another ten years to learn the rituals and another four to collect the material and you see before you the fruits of my labor. I endure. I live. I will see the death of this age and the dawn of the next. It pains me to have to do this, but, you see, you cannot be permitted to endanger my research. When you meet Death, say hello for me, would you?”",
    "instinct": "To un-live",
    "armor": 5,
    "hp": 16,
    "attacks": [
      {
        "name": "Magical Force",
        "damage": "d10+3",
        "tags": [
          "near",
          "far",
          "ignores armor"
        ]
      }
    ],
    "name": "Lich",
    "tags": [
      "solitary",
      "magical",
      "intelligent",
      "cautious",
      "hoarder",
      "construct"
    ],
    "moves": [
      "Cast a perfected spell of death or destruction",
      "Set a ritual or great working into motion",
      "Reveal a preparation or plan already completed"
    ],
    "key": "lich"
  },
  "mohrg": {
    "description": "You never get away with murder. Not really. You might evade the law, might escape your own conscience in the end and die, fat and happy in a mansion somewhere. When the gods themselves notice your misdeeds, though, that’s where your luck runs out and a mohrg is born. The mohrg is a skeleton—flesh and skin and hair all rotted away. All but their guts—their twisted, knotted guts still spill from their bellies, magically preserved and often wrapped, noose-like, about their necks. They do not think, exactly, but they suffer. They kill and wreak havoc and their souls do not rest. Such is the punishment, both on them for the crime and on all mankind for daring to murder one another. The gods are just and they are harsh.",
    "instinct": "To wreak havoc",
    "armor": 0,
    "hp": 10,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Mohrg",
    "tags": [
      "group"
    ],
    "moves": [
      "Rage",
      "Add to their collection of guts"
    ],
    "key": "mohrg"
  },
  "mummy": {
    "description": "There are cultures who revere the dead. They do not bury them in the cold earth and mourn their passing. These people spend weeks preparing the sacred corpse for its eternal rest. Temples, pyramids, and great vaults of stone are built to house them and are populated with slaves, pets and gold. The better to live in luxury beyond the Black Gates, no? Do not be tempted by these vaults—oh, I know that greedy look! Heed my warnings or risk a terrible fate, for the honored dead do not wish to be disturbed. Thievery will only raise their ire—don’t say I did not warn you!",
    "instinct": "To enjoy eternal rest",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Smash",
        "damage": "d10+2",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Mummy",
    "tags": [
      "solitary",
      "divine",
      "hoarder"
    ],
    "moves": [
      "Curse them",
      "Wrap them up",
      "Rise again"
    ],
    "key": "mummy"
  },
  "nightwing": {
    "description": "Scholars of the necromantic arts will tell you that the appellation “undead” applies not only to those who have lived, died, and been returned to a sort of partway living state. It is the proper name of any creature whose energy originates beyond the Black Gates. The creature men call the nightwing is one such—empowered by the negative light of Death’s domain. Taking the shape of massive, shadowy, winged creatures (some more bat-like, some like vultures, others like some ancient, leathery things) nightwings travel in predatory flocks, swooping down to strip the flesh from cattle, horses and unlucky peasants out past curfew. Watch the night sky for their red eyes. Listen for their screeching call. And hope to the gods you have something to hide under until they pass.",
    "instinct": "To hunt",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Rend",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Nightwing",
    "tags": [
      "horde",
      "stealthy"
    ],
    "moves": [
      "Attack from the night sky",
      "Fly away with prey"
    ],
    "key": "nightwing"
  },
  "shadow": {
    "description": "We call to the elements. We call on fire, ever-burning. We summon water, life-giving. We beseech the earth, stable-standing. We cry to the air, forever-changing. These elements we recognize and give our thanks but ask to pass. The elemental we call upon this night knows another name. We call upon the element of Night. Shadow, we name you. Death’s messenger and black assassin, we claim for our own. Accept our sacrifice and do our bidding ’til the morning come.",
    "instinct": "To darken",
    "armor": 4,
    "hp": 11,
    "attacks": [
      {
        "name": "Shadow touch",
        "damage": "d6+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Shadow",
    "tags": [
      "horde",
      "large",
      "magical",
      "construct"
    ],
    "moves": [
      "Snuff out light",
      "Spawn another shadow from the dead"
    ],
    "key": "shadow"
  },
  "sigben": {
    "description": "“Aswang-hound and hopping whip-tail! Sent by vampires on their two, twisted legs, these ugly things look like the head of a rat or a crocodile, maybe, furry though and sharp of tooth. They have withered wings, but cannot use them and long, whipping tails, spurred with poison tips. Stupid, vengeful and mischievous they cause all kinds of chaos when let out of the strange clay jars in which they’re born. Only a vampire could love such a wretched thing.”",
    "instinct": "To disturb",
    "armor": 2,
    "hp": 11,
    "attacks": [
      {
        "name": "Tail whip",
        "damage": "d6+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Sigben",
    "tags": [
      "horde",
      "large",
      "construct"
    ],
    "moves": [
      "Poison them",
      "Do a vampire’s bidding"
    ],
    "key": "sigben"
  },
  "skeleton": {
    "description": "Dem bones, dem bones, dem dry bones.",
    "instinct": "To take the semblance of life",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Slam",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Skeleton",
    "tags": [
      "horde"
    ],
    "moves": [
      "Act out what it did in life",
      "Snuff out the warmth of life",
      "Reconstruct from miscellaneous bones"
    ],
    "key": "skeleton"
  },
  "spectre": {
    "description": "For some folk, when they pass, Death himself cannot release their grip on the places they love most. A priest whose devotion to the temple is greater than that of his god. A banking guild official who cannot bear to part with his vault. A drunk and his favorite tavern. All make excellent spectres. They act not out of the usual hunger that drives the undead, but jealousy. Jealousy that anyone else might come to love their home as much as they do and drive them out. These places belong to them and these invisible spirits will kill before they’ll let anyone send them to their rest.",
    "instinct": "To drive life from a place",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Withering touch",
        "damage": "d10",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Spectre",
    "tags": [
      "solitary",
      "hoarder"
    ],
    "moves": [
      "Turn their haunt against a creature",
      "Bring the environment to life"
    ],
    "key": "spectre"
  },
  "vampire": {
    "description": "We fear them, because they call to us. So much like us, or how we hope to be: beautiful, passionate, and powerful. They are drawn to us for what they cannot be: warm, kind, and alive. These tormented souls can only hope, at most, to pass their dreadful curse along. Every time they feed they run the risk of passing along their torture to another and in each one lives the twisted seed of its creator. Vampires beget vampires. Suffering begets suffering. Do not be drawn in by their seduction or you may be given their gift—a crown of shadows and the chains of eternal undying grief.",
    "instinct": "To manipulate",
    "armor": 2,
    "hp": 10,
    "attacks": [
      {
        "name": "Supernatural force",
        "damage": "d8+5",
        "tags": [
          "close",
          "forceful",
          "1 piercing"
        ]
      }
    ],
    "name": "Vampire",
    "tags": [
      "group",
      "stealthy",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Charm someone",
      "Feed on their blood",
      "Retreat to plan again"
    ],
    "key": "vampire"
  },
  "wight-wolf": {
    "description": "Like the nightwing, the wight-wolf is a creature not spawned in our world. Somehow slipping the seals of the Black Gates of Death, these spirits take the shape of massive hounds or shadowy wolves and hunt the living for sport. They travel in packs, led by a mighty alpha, but bear a kind of intelligence unknown to true canines. Their wild hunts draw the attention of intelligent undead—liches, vampires and the like—who will sometimes make pacts with the alpha and serve a grim purpose together. Listen for the baying of the hounds of Death and pray that they do not howl for you.",
    "instinct": "To hunt",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Pounce",
        "damage": "d6+1 1 piercing",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Wight-Wolf",
    "tags": [
      "horde",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Encircle prey",
      "Summon the pack"
    ],
    "key": "wight-wolf"
  },
  "zombie": {
    "description": "When there’s no more room in Hell…",
    "instinct": "Braaaaaains",
    "armor": 1,
    "hp": 11,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Zombie",
    "tags": [
      "horde"
    ],
    "moves": [
      "Attack with overwhelming numbers",
      "Corner them",
      "Gain strength from the dead, spawn more zombies"
    ],
    "key": "zombie"
  },
  "bakunawa": {
    "description": "Dragon-Turtle’s sister is a mighty serpent queen. Ten yards of scales and muscle, they say she wakes with a hunger when the sun disappears from the sky. She is attracted by bright light in the darkness and like any snake, the Bakunawa is sneaky. She will seek first to beguile and mislead and will only strike out with violence when no other option is available. When she does, though, her jaws are strong enough to crack the hull of any swamp-boat and certainly enough to slice through a steel breastplate or two. Give the greedy snake your treasures and she might just leave you alone.",
    "instinct": "To devour",
    "armor": 2,
    "hp": 16,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "1 piercing"
        ]
      }
    ],
    "name": "Bakunawa",
    "tags": [
      "solitary",
      "large",
      "intelligent",
      "messy",
      "forceful"
    ],
    "moves": [
      "Lure prey with lies and illusions",
      "Lash out at light",
      "Devour"
    ],
    "key": "bakunawa"
  },
  "basilisk": {
    "description": "“Few have seen a basilisk and lived to tell the tale. Get it? Seen a basilisk? Little bit of basilisk humor there. Sorry, I know you’re looking for something helpful, sirs. Serious stuff, I understand. The basilisk, even without its ability to turn your flesh to stone with a gaze, is a dangerous creature. A bit like a frog, bulbous eyes and six muscled legs built for leaping. A bit like an alligator, with snapping jaws and sawing teeth. Covered in stony scales and very hard to kill. Best avoided, if possible.”",
    "instinct": "To create new statuary",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Basilisk",
    "tags": [
      "solitary",
      "hoarder"
    ],
    "moves": [
      "Turn flesh to stone with a gaze",
      "Retreat into a maze of stone"
    ],
    "key": "basilisk"
  },
  "black_pudding": {
    "description": "How do you kill a pile of goo? A great, squishy pile of goo that also happens to want to dissolve you and slurp you up? That is a good question to which I have no answer. Do let us know when you find out.",
    "instinct": "To dissolve",
    "armor": 1,
    "hp": 15,
    "attacks": [
      {
        "name": "Corrosive touch",
        "damage": "d10",
        "tags": [
          "close",
          "ignores armor"
        ]
      }
    ],
    "name": "Black Pudding",
    "tags": [
      "solitary",
      "amorphous"
    ],
    "moves": [
      "Eat away metal, flesh, or wood",
      "Ooze into a troubling place: food, armor, stomach"
    ],
    "key": "black_pudding"
  },
  "coutal": {
    "description": "As if in direct defiance of the decay and filth of the world, the gods granted us the coutal. As if to say, “there is beauty, even in this grim place.” A serpent in flight on jeweled wings, these beautiful creatures glow with a soft light, as the sun does through stained glass. Bright, wise, and calm, a coutal often knows many things and sees many more. You might be able to make a trade with it in exchange for some favor. They seek to cleanse and to purge and to make of this dark world a better one. Shame we have so few. The gods are cruel.",
    "instinct": "To cleanse",
    "armor": 2,
    "hp": 12,
    "attacks": [
      {
        "name": "Light ray",
        "damage": "d8",
        "tags": [
          "close",
          "ignores armor"
        ]
      }
    ],
    "name": "Coutal",
    "tags": [
      "solitary",
      "intelligent devious"
    ],
    "moves": [
      "Pass judgment on a person or place",
      "Summon divine forces to cleanse",
      "Offer information in exchange for service"
    ],
    "key": "coutal"
  },
  "crocodilian": {
    "description": "It’s a really, really big crocodile. Seriously. So big.",
    "instinct": "To eat",
    "armor": 2,
    "hp": 10,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d8+3",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Crocodilian",
    "tags": [
      "group",
      "large"
    ],
    "moves": [
      "Attack an unsuspecting victim",
      "Escape into the water",
      "Hold something tight in its jaws"
    ],
    "key": "crocodilian"
  },
  "doppelgänger": {
    "description": "Their natural form, if you ever see it, is hideous. Like a creature who stopped growing part-way, before it decided it was elf or man or dwarf. Then again, maybe that’s how you get to be the way a doppelgänger is—without form, without shape to call their own, maybe all they really seek is a place to fit in. If you go out into the world, when you come back home, make sure your friends are who you think they are. They might, instead, be a doppelgänger and your friend might be dead at the bottom of a well somewhere. Then again, depending on your friends, that might be an improvement.",
    "instinct": "To infiltrate",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Dagger",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Doppelgänger",
    "tags": [
      "solitary",
      "devious",
      "intelligent"
    ],
    "moves": [
      "Assume the shape of a person whose flesh it’s tasted",
      "Use another’s identity to advantage",
      "Leave someone’s reputation shattered"
    ],
    "key": "doppelgänger"
  },
  "dragon_turtle": {
    "description": "Bakunawa has a brother. Where she is quick to anger and hungry for gold, he is slow and sturdy. She is a knife and he is a shield. A great turtle that lies in the muck and mire for ages as they pass, mud piled upon his back—sometimes trees and shrubs. Sometimes a whole misguided clan of goblins will build their huts and cook their ratty meals on the shell of the dragon turtle. His snapping jaws may be glacier-slow, but they can rend a castle wall. Careful where you tread.",
    "instinct": "To resist change",
    "armor": 4,
    "hp": 20,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+3",
        "tags": [
          "reach"
        ]
      }
    ],
    "name": "Dragon Turtle",
    "tags": [
      "solitary",
      "huge",
      "cautious"
    ],
    "moves": [
      "Move forward implacably",
      "Bring its full bulk to bear",
      "Destroy structures and buildings"
    ],
    "key": "dragon_turtle"
  },
  "dragon_whelp": {
    "description": "What? Did you think they were all a mile long? Did you think they didn’t come smaller than that? Sure, they may be no bigger than a dog and no smarter than an ape, but a dragon whelp can still belch up a hellish ball of fire that’ll melt your armor shut and drop you screaming into the mud. Their scales, too, are softer than those of their bigger kin, but can still turn aside an arrow or sword not perfectly aimed. Size is not the only measure of might.",
    "instinct": "To grow in power",
    "armor": 3,
    "hp": 16,
    "attacks": [
      {
        "name": "Elemental breath",
        "damage": "d10+2",
        "tags": [
          "close",
          "near"
        ]
      }
    ],
    "name": "Dragon Whelp",
    "tags": [
      "solitary",
      "small",
      "intelligent",
      "cautious",
      "hoarder"
    ],
    "moves": [
      "Start a lair, form a base of power",
      "Call on family ties",
      "Demand oaths of servitude"
    ],
    "key": "dragon_whelp"
  },
  "ekek": {
    "description": "Ugly, wrinkled bird-folk, these. Once, maybe, in some ancient past, they were a race of angelic men from on high, but now they eat rats that they fish from the murk with talon-feet and devour with needle-teeth. They understand the tongues of men and dwarves but speak in little more than gibbering tongues, mimicking the words they hear with mocking laughter. It’s a chilling thing to see a beast so close to man or bird but not quite either one.",
    "instinct": "To lash out",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Talons",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Ekek",
    "tags": [
      "horde"
    ],
    "moves": [
      "Attack from the air",
      "Carry out the bidding of a more powerful creature"
    ],
    "key": "ekek"
  },
  "fire_eels": {
    "description": "These strange creatures are no bigger or smarter than their mundane kin. They have the same vicious nature. Over their relations they have one advantage—an oily secretion that oozes from their skin. It makes them hard to catch. On top of that, with a twist of their body they can ignite the stuff, leaving pools of burning oil atop the surface of the water and roasting prey and predator alike. I hear the slimy things make good ingredients for fire-resistant gear, but you have to get your hands on one, first.",
    "instinct": "To ignite",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Burning touch",
        "damage": "d6-2",
        "tags": [
          "hand",
          "ignores armor"
        ]
      }
    ],
    "name": "Fire Eels",
    "tags": [
      "horde",
      "tiny"
    ],
    "moves": [
      "Catch someone or something on fire (even underwater)",
      "Consume burning prey"
    ],
    "key": "fire_eels"
  },
  "frogman": {
    "description": "Croak croak croak. Little warty munchkins. Some wizard or godling’s idea of a bad joke, these creatures are. They stand as men, dress in scavenged cloth and hold court in their froggy villages. They speak a rumbling pidgin form of the tongue of man and are constantly at war with their neighbors. They’re greedy and stupid but clever enough when they need to defend themselves. Some say, too, their priests have a remarkable skill at healing. Or maybe they’re just really, really hard to kill.",
    "instinct": "To wage war",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Frogman",
    "tags": [
      "horde",
      "small",
      "intelligent"
    ],
    "moves": [
      "Launch an amphibious assault",
      "Heal at a prodigious rate"
    ],
    "key": "frogman"
  },
  "hydra": {
    "description": "A bit like a dragon, wingless though it may be. Heads, nine in number at birth, spring from a muscled trunk and weave a sinuous pattern in the air. A hydra is to be feared—a scaled terror of the marsh. The older ones, though, they have more heads, for every failed attempt to murder it just makes it stronger. Cut off a head and two more grow in its place. Only a strike, true and strong, to the heart can end a hydra’s life. Not time or tide or any other thing but this.",
    "instinct": "To grow",
    "armor": 2,
    "hp": 16,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Hydra",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Attack many enemies at once",
      "Regenerate a body part (especially a head)"
    ],
    "key": "hydra"
  },
  "kobold": {
    "description": "Some are wont to lump these little, rat-like dragon-men in with goblins and orcs, bugbears and hobgoblins. They are smarter and wiser than their kin, however. The kobolds are beholden slaves to dragons and were, in ancient times, their lorekeepers and sorcerer-servants. Their clans, with  names like Ironscale and Whitewing, form around a dragon master and live to serve and do its bidding. Spotting a kobold means more are near—and if more are near then a mighty dragon cannot be far, either.",
    "instinct": "To serve dragons",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d6",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Kobold",
    "tags": [
      "horde",
      "small",
      "stealthy",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Lay a trap",
      "Call on dragons or draconic allies",
      "Retreat and regroup"
    ],
    "key": "kobold"
  },
  "lizardman": {
    "description": "A traveling sorcerer once told me that lizardmen came before we did. That before elves and dwarves and men built even the first of their wattle huts, a race of proud lizard kings strode the land. That they lived in palaces of crystal and worshipped their own scaly gods. Maybe that’s true and maybe it ain’t—now they dwell in places men long forgot or abandoned, crafting tools from volcano-glass and lashing against the works of the civilized world. Maybe they just want back what they lost.",
    "instinct": "To destroy civilization",
    "armor": 2,
    "hp": 6,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d8",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Lizardman",
    "tags": [
      "group",
      "stealthy",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Ambush the unsuspecting",
      "Launch an amphibious assault"
    ],
    "key": "lizardman"
  },
  "medusa": {
    "description": "The medusa are children of a serpent-haired mother, birthing them in ancient times to bear her name across the ages. They dwell near places of civilization—luring folks to their caves with promises of beauty or riches untold. Fine appreciators of art, the medusa curate strange collections of their victims, terror or ecstasy frozen forever in stone. It satisfies their vanity to know they were the last thing seen in so many lives. Arrogant, proud, and spiteful, in their way, they seek what so many do—endless company.",
    "instinct": "To collect",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Claws",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Medusa",
    "tags": [
      "solitary",
      "devious",
      "intelligent",
      "hoarder"
    ],
    "moves": [
      "Turn a body part to stone with a look",
      "Draw someone’s gaze",
      "Show hidden terrible beauty"
    ],
    "key": "medusa"
  },
  "sahuagin": {
    "description": "The shape and craft of men wedded to the hunger and the endless teeth of a shark. Voracious and filled only with hate, these creatures will not stop until all life has been consumed. They cannot be reasoned with, they cannot be controlled or sated. They are hunger and bloodlust, driven up from the depths of the sea to ravage coastal towns and swallow island villages.",
    "instinct": "To spill blood",
    "armor": 2,
    "hp": 3,
    "attacks": [
      {
        "name": "Endless teeth",
        "damage": "d6+4",
        "tags": [
          "close",
          "forceful",
          "messy",
          "1 piercing"
        ]
      }
    ],
    "name": "Sahuagin",
    "tags": [
      "horde",
      "intelligent"
    ],
    "moves": [
      "Bite off a limb",
      "Hurl a poisoned spear",
      "Frenzy at the sight of blood"
    ],
    "key": "sahuagin"
  },
  "sauropod": {
    "description": "Great lumbering beasts, they live in places long since forgotten by the thinking races of the world. Gentle if unprovoked, but mighty if their ire is raised, they trample smaller creatures with the care we might give to crushing an ant beneath our boots. If you see one, drift by and gaze in awe, but do not wake the giant.",
    "instinct": "To endure",
    "armor": 4,
    "hp": 18,
    "attacks": [
      {
        "name": "Trample",
        "damage": "d10+5",
        "tags": [
          "reach"
        ]
      }
    ],
    "name": "Sauropod",
    "tags": [
      "group",
      "huge",
      "cautious"
    ],
    "moves": [
      "Stampede",
      "Knock something down",
      "Unleash a deafening bellow"
    ],
    "key": "sauropod"
  },
  "swamp_shambler": {
    "description": "Some elementals are conjured up in sacred circles etched in chalk. Most, in fact. There’s a sort of science to it. Others, though, aren’t so orderly—they don’t fall under the carefully controlled assignments of fire, air, water, or earth. Some are a natural confluence of vine and mire and fungus. They do not think the way a man might think. They cannot be understood as one might understand an elf. They simply are. Spirits of the swamp. Shamblers in the mud.",
    "instinct": "To preserve and create swamps",
    "armor": 1,
    "hp": 23,
    "attacks": [
      {
        "name": "Lash",
        "damage": "d10+1",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Swamp Shambler",
    "tags": [
      "solitary",
      "large",
      "magical"
    ],
    "moves": [
      "Call on the swamp itself for aid",
      "Meld into the swamp",
      "Reassemble into a new form"
    ],
    "key": "swamp_shambler"
  },
  "troll": {
    "description": "Tall. Real tall. Eight or nine feet when they’re young or weak. Covered all over in warty, tough skin, too. Big teeth, stringy hair like swamp moss and long, dirty nails. Some are green, some gray, some black. They’re clannish and hateful of each other, not to mention all the rest of us. Near impossible to kill, too, unless you’ve fire or acid to spare—cut a limb off and watch. In a few days, you’ve got two trolls where you once had one. A real serious problem, as you can imagine.",
    "instinct": "To smash",
    "armor": 1,
    "hp": 20,
    "attacks": [
      {
        "name": "Club",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Troll",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Undo the effects of an attack (unless caused by a weakness, your call)",
      "Hurl something or someone"
    ],
    "key": "troll"
  },
  "will-o-wisp": {
    "description": "Spot a lantern floating in the darkness, lost traveler in the swamp. Hope—a beacon of shimmering light. You call out to it, but there’s no answer. It begins to fade and so you follow, sloshing through the muck, tiring at the chase, hoping you’re being led to safety. Such a sad tale that always ends in doom. These creatures are a mystery—some say they’re ghosts, others beacons of faerie light. Nobody knows the truth. They are cruel, however. All can agree on that.",
    "instinct": "To misguide",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Ray",
        "damage": "w[2d8-2]",
        "tags": [
          "near"
        ]
      }
    ],
    "name": "Will-o-wisp",
    "tags": [
      "solitary",
      "tiny",
      "magical"
    ],
    "moves": [
      "Lead someone astray",
      "Clear a path to the worst place possible"
    ],
    "key": "will-o-wisp"
  },
  "ankheg": {
    "description": "A hide like plate armor and great crushing mandibles are problematic. A stomach full of acid that can burn a hole through a stone wall makes them all the worse. They’d be bad enough if they were proper insect-sized, but these things have the gall to be as long as any given horse. It’s just not natural! Good thing they tend to stick to one place? Easy for you to say—you don’t have an ankheg living under your corn field.",
    "instinct": "To undermine",
    "armor": 3,
    "hp": 10,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d8+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Ankheg",
    "tags": [
      "group",
      "large"
    ],
    "moves": [
      "Undermine the ground",
      "Burst from the earth",
      "Spray forth acid, eating away at metal and flesh"
    ],
    "key": "ankheg"
  },
  "cave_rat": {
    "description": "Who hasn’t seen a rat before? It’s like that, but nasty and big and not afraid of you anymore. Maybe this one was a cousin to that one you caught in a trap or the one you killed with a knife in that filthy tavern in Darrow. Maybe he’s looking for a little ratty revenge.",
    "instinct": "To devour",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Gnaw",
        "damage": "d6 1 piercing",
        "tags": [
          "close",
          "messy"
        ]
      }
    ],
    "name": "Cave Rat",
    "tags": [
      "horde",
      "small"
    ],
    "moves": [
      "Swarm",
      "Rip something (or someone) apart"
    ],
    "key": "cave_rat"
  },
  "choker": {
    "description": "Some say these things descended from the family of a cruel wizard who forced them to live out their lives underground. They say his experiments led him to fear the sun and ages passed while he descended into unlife, dragging his folk along with him. These things resemble men, in a way. Head, four limbs and all that. Only their skin is wet and rubbery and their arms long and fingers grasping. They hate all life that bears the stink of the sun’s touch, as one might expect. Jealousy, long-instilled, is hard to shake.",
    "instinct": "To deny light",
    "armor": 2,
    "hp": 15,
    "attacks": [
      {
        "name": "Choke",
        "damage": "d10",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Choker",
    "tags": [
      "solitary",
      "stealthy",
      "intelligent"
    ],
    "moves": [
      "Hold someone, wringing the breath from them",
      "Fling a held creature"
    ],
    "key": "choker"
  },
  "cloaker": {
    "description": "Don’t put on that cloak, Gareth. Don’t. You don’t know where it’s been. I tell you, it’s no good. See! It moved! I’m not mad, Gareth, it moved! Don’t do it! No! GARETH!",
    "instinct": "To engulf",
    "armor": 1,
    "hp": 12,
    "attacks": [
      {
        "name": "Constrict",
        "damage": "d10 ignores armor",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Cloaker",
    "tags": [
      "solitary",
      "stealthy"
    ],
    "moves": [
      "Engulf the unsuspecting"
    ],
    "key": "cloaker"
  },
  "dwarven_warrior": {
    "description": "For ages, men believed all dwarves were male and all were of this ilk: stoic and proud warriors. Axe-wielding and plate-wearing. Stout bearded battle-hungry dwarves who would push them, time and time again, back up out of their mines and tunnels with ferocity. It just goes to show how little men know about the elder races. These folk are merely a vanguard, and they bravely do their duty to protect the riches of the Dwarven realm. Earn their trust and you’ve an ally for life. Earn their ire and you’re not likely to regret it very long.",
    "instinct": "To defend",
    "armor": 2,
    "hp": 7,
    "attacks": [
      {
        "name": "Axe",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Dwarven Warrior",
    "tags": [
      "horde",
      "organized"
    ],
    "moves": [
      "Drive them back",
      "Call up reinforcements"
    ],
    "key": "dwarven_warrior"
  },
  "earth_elemental": {
    "description": "Our shaman says that all the things of the world have a spirit. Stones, trees, a stream. Now that I’ve seen the earth roil under my feet and fists of stone beat my friends half to death I’d like to believe that crazy old man. The one I saw was huge—big as a house! It came boiling up from a rockslide out of nowhere and had a voice like an avalanche. I pay my respects, now. Rightly so.",
    "instinct": "To show the strength of earth",
    "armor": 4,
    "hp": 27,
    "attacks": [
      {
        "name": "Smash",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Earth Elemental",
    "tags": [
      "solitary",
      "huge"
    ],
    "moves": [
      "Turn the ground into a weapon",
      "Meld into stone"
    ],
    "key": "earth_elemental"
  },
  "fire_beetle": {
    "description": "Scarabaeus pyractomena! What a delightful creature—see how its carapace glitters in the light of our torches? Not too close now, they’re temperamental, you see. The fire in their belly isn’t just metaphorical, no. Watch as I goad the beast. Aha! A spout of flame! Unexpected, isn’t it? One of these creatures alone, if it comes up from below, can be a hellish nuisance to a farmstead or village. A whole swarm? There’s a reason they call it a conflagration of fire beetles.",
    "instinct": "To enflame",
    "armor": 3,
    "hp": 3,
    "attacks": [
      {
        "name": "Flames",
        "damage": "d6 ignores armor",
        "tags": [
          "near"
        ]
      }
    ],
    "name": "Fire Beetle",
    "tags": [
      "horde",
      "small"
    ],
    "moves": [
      "Undermine the ground",
      "Burst from the earth",
      "Spray forth flames"
    ],
    "key": "fire_beetle"
  },
  "gargoyle": {
    "description": "It’s a sad thing, really. Guardians bred by magi of the past with no more castles to guard. Their ancestors’ sacred task bred into their blood leads them to find a place—ruins mostly, but sometimes a cave or hill or mountain cliff—and guard it as though their masters yet lived below. They’re notoriously good at finding valuables buried below the earth, though. Find one of these winged reptiles and you’ll find yourself a treasure nearby. Just be careful, they’re hard to spot and tend to move in packs.",
    "instinct": "To guard",
    "armor": 2,
    "hp": 3,
    "attacks": [
      {
        "name": "Claw",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Gargoyle",
    "tags": [
      "horde",
      "stealthy",
      "hoarder"
    ],
    "moves": [
      "Attack with the element of surprise",
      "Take to the air",
      "Blend into stonework"
    ],
    "key": "gargoyle"
  },
  "gelatinous_cube": {
    "description": "How many adventurers’ last thoughts were “strange, this tunnel seems cleaner than most?” Too many, and all because of this transparent menace. A great acidic blob that expands to fill a small chamber or corridor and then slides, ever so slowly along, eating everything in its path. It cannot eat stone or metal and will often have them floating in its jelly mass. Blech.",
    "instinct": "To clean",
    "armor": 1,
    "hp": 20,
    "attacks": [
      {
        "name": "Engulf",
        "damage": "d10+1 ignores armor",
        "tags": [
          "hand"
        ]
      }
    ],
    "name": "Gelatinous Cube",
    "tags": [
      "solitary",
      "large",
      "stealthy",
      "amorphous"
    ],
    "moves": [
      "Fill an apparently empty space",
      "Dissolve"
    ],
    "key": "gelatinous_cube"
  },
  "goblin": {
    "description": "Nobody seems to know where these things came from. Elves say they’re the dwarves’ fault—dredged up from a hidden place beneath the earth. Dwarves say they’re bad elvish children, taken away at birth and raised in the dark. The truth of the matter is that goblins have always been here and they’ll be here once all the civilized races have fallen and gone away. Goblins never die out. There’s just too damn many of them.",
    "instinct": "To multiply",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Spear",
        "damage": "d6",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Goblin",
    "tags": [
      "horde",
      "small",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Charge!",
      "Call more goblins",
      "Retreat and return with (many) more"
    ],
    "key": "goblin"
  },
  "goblin_orkaster": {
    "description": "Oh lord, who taught them magic?",
    "instinct": "To tap power beyond their stature",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Acid orb",
        "damage": "d10+1 ignores armor",
        "tags": [
          "near",
          "far"
        ]
      }
    ],
    "name": "Goblin Orkaster",
    "tags": [
      "solitary",
      "small",
      "magical",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Unleash a poorly understood spell",
      "Pour forth magical chaos",
      "Use other goblins for shields"
    ],
    "key": "goblin_orkaster"
  },
  "goliath": {
    "description": "They dwell beneath the earth because they do not belong above it any longer. An undying race of mighty titans fled the plains and mountains in ages past—driven out by men and their heroes. Left to bide their time in the dark, hate and anger warmed by the pools of lava deep below. It’s said that an earthquake is a goliath’s birthing cry. Someday they’ll take back what’s theirs.",
    "instinct": "To retake",
    "armor": 1,
    "hp": 14,
    "attacks": [
      {
        "name": "Mace",
        "damage": "d8+7",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Goliath",
    "tags": [
      "group",
      "huge",
      "organized",
      "intelligent"
    ],
    "moves": [
      "Shake the earth",
      "Retreat, only to come back stronger"
    ],
    "key": "goliath"
  },
  "otyugh": {
    "description": "The mating call of the otyugh is a horrible, blaring cry that sounds like a cross between an elephant dying and an over-eager vulture. The otyugh spends much of its time partly submerged in filthy water and prefers eating garbage over any other food. As a result, it often grows fat and strong on the offal of orcs, goblins and other cave-dwelling sub-humans. Get too close, however, and you’ll have one of its barbed tentacles dragging you into that soggy, razor-toothed maw. If you get away with your life, best get to a doctor, or your victory may be short lived.",
    "instinct": "To befoul",
    "armor": 1,
    "hp": 20,
    "attacks": [
      {
        "name": "Tentacles",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Otyugh",
    "tags": [
      "solitary",
      "large"
    ],
    "moves": [
      "Infect someone with filth fever",
      "Fling someone or something"
    ],
    "key": "otyugh"
  },
  "maggot-squid": {
    "description": "The gods that made this thing were playing some sick joke on the civilized folk of the world. The maggot-squid wields a face full of horrible squirming tentacles that, if they touch you, feel like being struck by lightning. They’ll paralyze you and chew you up slowly while you’re helpless. Best to not let it get to that.",
    "instinct": "To eat",
    "armor": 1,
    "hp": 3,
    "attacks": [
      {
        "name": "Chew",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Maggot-Squid",
    "tags": [
      "horde",
      "small"
    ],
    "moves": [
      "Paralyze with a touch"
    ],
    "key": "maggot-squid"
  },
  "purple_worm": {
    "description": "Iä! Iä! The Purple Worm! Blessed is its holy slime! We walk, unworthy, in its miles of massive tunnels. We are but shadows under its violet and all-consuming glory. Mere acolytes, we who hope someday to return to the great embrace of its tooth-ringed maw. Let it consume us! Let it eat our homes and villages so that we might be taken! Iä! Iä! The Purple Worm!",
    "instinct": "To consume",
    "armor": 2,
    "hp": 20,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+5",
        "tags": [
          "reach",
          "forceful"
        ]
      }
    ],
    "name": "Purple Worm",
    "tags": [
      "solitary",
      "huge"
    ],
    "moves": [
      "Swallow whole",
      "Tunnel through stone and earth"
    ],
    "key": "purple_worm"
  },
  "roper": {
    "description": "Evolutionary happenstance has created a clever underground predator. Disguised as a rocky formation—most often a stalactite or stalagmite—the roper waits for its prey to wander by. When it does, whether it’s a rat, a goblin or a foolhardy adventurer, a mass of thin, whipping tentacles erupts from the thing’s hide. A hundred lashes in the blink of an eye and the stunned prey is being dragged into the roper’s mouth. Surprisingly effective for a thing that looks like a rock.",
    "instinct": "To ambush",
    "armor": 1,
    "hp": 16,
    "attacks": [
      {
        "name": "Bite",
        "damage": "d10+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Roper",
    "tags": [
      "solitary",
      "large",
      "stealthy",
      "intelligent"
    ],
    "moves": [
      "Ensnare the unsuspecting",
      "Disarm a foe",
      "Chew on someone"
    ],
    "key": "roper"
  },
  "rot_grub": {
    "description": "They live in your skin. Or your organ meat. Or your eyeballs. They grow there and then, in a bloody and horrific display, burrow their way out. Disgusting.",
    "instinct": "To infect",
    "armor": 0,
    "hp": 3,
    "attacks": [
      {
        "name": "Burrow",
        "damage": "d6-2",
        "tags": [
          "hand"
        ]
      }
    ],
    "name": "Rot Grub",
    "tags": [
      "horde",
      "tiny"
    ],
    "moves": [
      "Burrow under flesh",
      "Lay eggs",
      "Burst forth from an infected creature"
    ],
    "key": "rot_grub"
  },
  "spiderlord": {
    "description": "Even spiders have their gods, whispered to in webs with little praying arms.",
    "instinct": "To weave webs (literal and metaphorical)",
    "armor": 3,
    "hp": 16,
    "attacks": [
      {
        "name": "Mandibles",
        "damage": "d8+4",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Spiderlord",
    "tags": [
      "solitary",
      "large",
      "devious",
      "intelligent"
    ],
    "moves": [
      "Enmesh in webbing",
      "Put a plot into motion"
    ],
    "key": "spiderlord"
  },
  "troglodyte": {
    "description": "Long-forgotten, our last remaining ancestors dwell in caves in the wild parts of the world. Driven away by our cities and villages, our iron swords and our fire, these ape-men eat their meat raw with sharp-nailed hands and jagged teeth. They strike out at frontier villages wielding clubs and in overwhelming numbers to seize cattle, tools, and poor prisoners to drag into the hills. Known for their viciousness and their stink, they’re an old and dying race we’d all sooner forget existed.",
    "instinct": "To prey on civilization",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Club",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Troglodyte",
    "tags": [
      "group",
      "organized"
    ],
    "moves": [
      "Raid and retreat",
      "Use scavenged weapons or magic"
    ],
    "key": "troglodyte"
  },
  "angel": {
    "description": "“So was it written that the heavens opened up to Avra’hal and did an angel from the clouds emerge to speak unto her and so did it appear to her as her firstborn daughter—beautiful, of ebon skin and golden eyes—and did Avra’hal weep to see it. ‘Be not afraid,’ it commanded her. ‘Go to the villages I have shown you in your dreams and unto them show the word I have written on your soul.’ Avra’hal wept and wept and did agree to do this and did take up her sword and tome and did into the villages go, a great thirst for blood on her lips for the word the angel wrote upon the soul of Avra’hal was ‘kill’.”",
    "instinct": "To share divine will",
    "armor": 4,
    "hp": 18,
    "attacks": [
      {
        "name": "Sword of Flames",
        "damage": "b[2d10]+4",
        "tags": [
          "close",
          "forceful",
          "ignores armor"
        ]
      }
    ],
    "name": "Angel",
    "tags": [
      "solitary",
      "terrifying",
      "divine",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Deliver visions and prophecy",
      "Stir mortals to action",
      "Expose sin and injustice"
    ],
    "key": "angel"
  },
  "barbed_devil": {
    "description": "There are a thousand forms of devil, maybe more. Some common and some unique. Each time the Inquisitors discover a new one they write it into the Tormentors Codex and the knowledge is shared among the abbeys in the hope that atrocities of that particular sort won’t find their way into the world again. The barbed devil has long been known to the brothers and sisters of the Inquisition. It appears only at a site of great violence or when called by a wayward summoner. Covered in sharp quills, this particular demon revels in the spilling of blood, preferably by impaling victims piecemeal or in whole upon its thorns and letting them die there. Cruel but not particularly effective beyond slaughter. A low inquisitorial priority.",
    "instinct": "To rend flesh and spill blood",
    "armor": 3,
    "hp": 16,
    "attacks": [
      {
        "name": "Spines",
        "damage": "d10+3",
        "tags": [
          "close",
          "reach",
          "messy",
          "3 piercing"
        ]
      }
    ],
    "name": "Barbed Devil",
    "tags": [
      "solitary",
      "large",
      "planar",
      "terrifying"
    ],
    "moves": [
      "Impale someone",
      "Kill indiscriminately"
    ],
    "key": "barbed_devil"
  },
  "chain_devil": {
    "description": "Do you think the phrase “drag him to hell” means nothing? It is unfortunately literal, in the case of the chain devil. Appearing differently to each victim, this summoned creature has but a single purpose: to wrap its victim up in binding coils and take it away to a place of torment. Sometimes it will come as a man-shaped mass of rusting iron, hooks and coils of mismatched links. Other times, a roiling tangle of rope or kelp or twisted bloody bedsheets. The results are always the same.",
    "instinct": "To capture",
    "armor": 3,
    "hp": 12,
    "attacks": [
      {
        "name": "Crush",
        "damage": "d10",
        "tags": [
          "close",
          "reach",
          "ignores armor"
        ]
      }
    ],
    "name": "Chain Devil",
    "tags": [
      "solitary",
      "planar"
    ],
    "moves": [
      "Take a captive",
      "Return to whence it came",
      "Torture with glee"
    ],
    "key": "chain_devil"
  },
  "concept_elemental": {
    "description": "The planes are not as literal as our world. Clothed in the elemental chaos are places of stranger stuff than air and water. Here, rivers of time crash upon shores of crystal fear. Bleak storms of nightmare roil and churn in a laughter-bright sky. Sometimes, the spirits of these places can be lured into our world, though they are infinitely more unpredictable and strange than mere fire or earth might be. Easier to make mistakes, too—one might try calling up a wealth elemental and be surprised to find a murder elemental instead.",
    "instinct": "To perfect its concept",
    "name": "Concept Elemental",
    "tags": [
      "solitary",
      "devious",
      "planar",
      "amorphous"
    ],
    "moves": [
      "Demonstrate its concept in its purest form"
    ],
    "key": "concept_elemental"
  },
  "corrupter": {
    "description": "“Surely, my good man, you must know why I am here. Must know who I am. You said the words. You spilled the blood and followed the instructions almost to the letter. Your pronunciation was a bit off but that’s to be expected. I’ve come to give you what you’ve always wanted, friend. Glory, love, money? Paltry things when you’ve the vaults of hell to plumb. Don’t look so shocked, you knew what this was. You have but one thing we desire. Promise it to us, and the world shall be yours for the taking. Trust me.”",
    "instinct": "To bargain",
    "armor": 0,
    "hp": 12,
    "attacks": [
      {
        "name": "Secret dagger",
        "damage": "w[2d8]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Corrupter",
    "tags": [
      "solitary",
      "devious",
      "planar",
      "hoarder"
    ],
    "moves": [
      "Offer a deal with horrible consequences",
      "Plumb the vaults of hell for a bargaining chip",
      "Make a show of power"
    ],
    "key": "corrupter"
  },
  "djinn": {
    "description": "“Stop rubbing that lamp, you idiot. I do not care what you have read, it will not grant you wishes. I brought you here to show you something real, something true. See this mural? It shows the ancient city. The true city that came before. They called it Majilis and it was made of brass by the spirits. They had golem servants and human lovers and, in that day, it was said you could trade them a year of your life for a favor. We are not here to gather treasure this night, fool, we are here to learn. The djinn still sometimes come to these places, and you must understand their history if you are to know how to behave. They are powerful and wicked and proud and you must know them if you hope to survive a summoning. Now, bring the lamp here and we will light it, it grows dark and these ruins are dangerous at night.”",
    "instinct": "To burn eternally",
    "armor": 4,
    "hp": 14,
    "attacks": [
      {
        "name": "Flame",
        "damage": "d8+1",
        "tags": [
          "close",
          "reach",
          "ignores armor"
        ]
      }
    ],
    "name": "Djinn",
    "tags": [
      "group",
      "large",
      "magical"
    ],
    "moves": [
      "Grant power for a price",
      "Summon the forces of the City of Brass"
    ],
    "key": "djinn"
  },
  "hell_hound": {
    "description": "When one reneges on a deal, does not the debtor come for payment? Does the owed party not send someone to collect what is due? So too with the Powers Below. They only want what is theirs. A howling pack of shadows, flame and jagged bone, driven by the hunting horn. They will not cease, they cannot be evaded.",
    "instinct": "To pursue",
    "armor": 1,
    "hp": 10,
    "attacks": [
      {
        "name": "Fiery Bite",
        "damage": "d8",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Hell Hound",
    "tags": [
      "group",
      "planar",
      "organized"
    ],
    "moves": [
      "Follow despite all obstacles",
      "Spew fire",
      "Summon the forces of hell on their target"
    ],
    "key": "hell_hound"
  },
  "imp": {
    "description": "These tiny observer-demons often act as a first-time binding subject by neophyte warlocks. They can be found infesting arcane cabals, drinking potions when no one watches, and chasing pets and servants with tiny pitchforks. A caricature of true demonhood, these little creatures are, thankfully, not too difficult to bind or extinguish.",
    "instinct": "To harass",
    "armor": 1,
    "hp": 7,
    "attacks": [
      {
        "name": "Flame gout",
        "damage": "d6",
        "tags": [
          "close",
          "near",
          "far",
          "ignores armor"
        ]
      }
    ],
    "name": "Imp",
    "tags": [
      "horde",
      "planar",
      "intelligent",
      "organized"
    ],
    "moves": [
      "Send information back to hell",
      "Cause mischief"
    ],
    "key": "imp"
  },
  "inevitable": {
    "description": "All things come to an end. Reality bleeds from the cut of entropy’s knife. At the edge of time itself stand the inevitable. Massive, powerful and seemingly carved from star-stuff themselves, the inevitable intervene only where magic or calamity have undone the skein of fate. Where the arrogant and powerful boil the substance of destiny away and seek to undermine the very laws of reality, the inevitable arrive to guide things back to the proper order. Unshakable, seemingly immune to mortal harm and utterly enigmatic, it is said that the Inevitable are all that will remain when time’s long thread has run out.",
    "instinct": "To preserve order",
    "armor": 5,
    "hp": 21,
    "attacks": [
      {
        "name": "Hammer",
        "damage": "d10+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Inevitable",
    "tags": [
      "group",
      "large",
      "magical",
      "cautious",
      "amorphous",
      "planar"
    ],
    "moves": [
      "End a spell or effect",
      "Enforce a law of nature or man",
      "Give a glimpse of destiny"
    ],
    "key": "inevitable"
  },
  "larvae": {
    "description": "Those who have seen visions of the Planes Below, and survived with their sanity intact, speak of masses of these writhing wretches. Maggots with the faces of men and women, crying out for salvation in a nest of flames. Sometimes, they can be goaded out through a rip in the planar caul and emerge, wriggling and in torment, into our world. Once here, they spread misery and sickness during their mayfly lives before expiring into a slurry of gore. All in all, an enticement to do good deeds in life.",
    "instinct": "To suffer",
    "armor": 0,
    "hp": 10,
    "attacks": [
      {
        "name": "Slime",
        "damage": "w[2d4]",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Larvae",
    "tags": [
      "horde",
      "devious",
      "planar",
      "intelligent"
    ],
    "moves": [
      "Fill them with despair",
      "Beg for mercy",
      "Draw evil attention"
    ],
    "key": "larvae"
  },
  "nightmare": {
    "description": "The herd came from a pact made in the days when folk still inhabited the Blasted Steppes. Horselords, they were, who travelled those lands. Born in the saddle, it was said. One of theirs, in a bid to dominate his peers, made a black pact with some fell power and traded away his finest horses. He had some power, sure—but what’s a thousand year dynasty when a life is so short? Now the fiends of the pit ride on the finest horses ever seen. Coats of shining oil and manes of tormented flame: these are steeds of hell’s cavalry.",
    "instinct": "To ride rampant",
    "armor": 4,
    "hp": 7,
    "attacks": [
      {
        "name": "Trample",
        "damage": "d6+1",
        "tags": [
          "close",
          "reach"
        ]
      }
    ],
    "name": "Nightmare",
    "tags": [
      "horde",
      "large",
      "magical",
      "terrifying",
      "planar"
    ],
    "moves": [
      "Sheath a rider in hellish flame",
      "Drive them away"
    ],
    "key": "nightmare"
  },
  "quasit": {
    "description": "An imp with some ambition. A quasit is a kind of foot soldier in the demon realm. A commoner, armed with fangs or claws or wings or some other thing to give it just a little edge over its hellish peers. Commonly bound by warlocks to carry heavy loads or build bridges or guard their twisted towers, a quasit can take on many forms, none of them pleasant.",
    "instinct": "To serve",
    "armor": 2,
    "hp": 7,
    "attacks": [
      {
        "name": "Hellish weaponry",
        "damage": "d6",
        "tags": [
          "close"
        ]
      }
    ],
    "name": "Quasit",
    "tags": [
      "horde",
      "planar"
    ],
    "moves": [
      "Attack with abandon",
      "Inflict pain"
    ],
    "key": "quasit"
  },
  "the_tarrasque": {
    "description": "The Tarrasque. Legendary unstoppable juggernaut—eater of cities and swallower of ships, horses, and knights. A creature unseen in an age but about whom all kinds of stories are told. One thread of truth weaves through these stories. It cannot be killed. No blade can pierce its stony shell nor spell penetrate the shield it somehow bears. Stories say, though, that the will of one pure soul can send it to slumber, though what that means and, by the gods, where such a thing might be found, pray we do not ever need to learn. It slumbers. Somewhere in the periphery of the planar edge, it sleeps for now.",
    "instinct": "To consume",
    "name": "The Tarrasque",
    "tags": [
      "solitary",
      "huge",
      "planar"
    ],
    "moves": [
      "Swallow a person, group, or place whole",
      "Release a remnant of a long-eaten place from its gullet"
    ],
    "key": "the_tarrasque"
  },
  "word_demon": {
    "description": "All of mortal magic is just words. Spells are prayers, rote formula, runes cast, or songs sung. Letters, words, sentences, and syntax strung together in a language that the whole world itself might understand. By way of words we can make our fellows cry or exult, can paint pictures and whisper desire to the gods. No little wonder, then, that in all that power is intent. That every word we utter, if repeated and meaning or emotion given to it, can spark a kind of unintentional summoning. Word daemons are called by accident, appear at random and are often short-lived, but come to attend a particular word. Capricious, unpredictable and dangerous, yes—but possibly useful, depending on the word.",
    "instinct": "To further their word",
    "name": "Word Demon",
    "tags": [
      "solitary",
      "planar",
      "magical"
    ],
    "moves": [
      "Cast a spell related to their word",
      "Bring their word into abundance"
    ],
    "key": "word_demon"
  }
}