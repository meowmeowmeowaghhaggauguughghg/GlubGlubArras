/*jslint node: true */
"use strict";

// Seed math

exports.random = x => {
  return x * Math.random();
};

exports.randomAngle = () => {
  return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.irandom = i => {
  let max = Math.floor(i);
  return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
  let x1, x2, w;
  do {
    x1 = 2 * Math.random() - 1;
    x2 = 2 * Math.random() - 1;
    w = x1 * x1 + x2 * x2;
  } while (0 == w || w >= 1);

  w = Math.sqrt((-2 * Math.log(w)) / w);
  return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
  let range = max - min;
  let output = exports.gauss(0, range / clustering);

  while (output < 0) {
    output += range;
  }

  while (output > range) {
    output -= range;
  }

  return output + min;
};

exports.gaussRing = (radius, clustering) => {
  let r = exports.random(Math.PI * 2);
  let d = exports.gauss(radius, radius * clustering);
  return {
    x: d * Math.cos(r),
    y: d * Math.sin(r)
  };
};

exports.chance = prob => {
  return exports.random(1) < prob;
};

exports.dice = sides => {
  return exports.random(sides) < 1;
};

exports.choose = arr => {
  return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
  let o = [];
  for (let i = 0; i < n; i++) {
    o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
  }
  return o;
};

exports.chooseChance = (...arg) => {
  let totalProb = 0;
  arg.forEach(function(value) {
    totalProb += value;
  });
  let answer = exports.random(totalProb);
  for (let i = 0; i < arg.length; i++) {
    if (answer < arg[i]) return i;
    answer -= arg[i];
  }
};

exports.chooseBotName = () => {
  return exports.choose([
    "Alice",
    "Bob",
    "TANK",
    "TZANK",
    "Panzer",
    "Macarena",
    "i.imgur.com/J3p2ra8.mp4",
    "@@@@@@@@@@@@@@@@@@@@@",
    "AK-47",
    "stinky",
    "Impasta",
    "[F-22]",
    "dont look at me",
    "Bob Marley",
    "vietnam",
    "1234567890",
    "kill me if you are gay",
    "ppap",
    "Robocop",
    "Virus",
    "#DiepioIsBetter",
    "baka",
    "馬鹿",
    "사랑해",
    "愛してる",
    "Я тебя люблю",
    "jag älskar dig",
    "Larus",
    "bruh",
    "man i love trampolining",
    "arras mayhem",
    "https://arras.neocities.org",
    "???",
    "A named tank",
    "[IA]",
    "SPEEEEEEEEEEEEEEED",
    "woomy",
    "Tankster",
    "Xbox Fridge",
    "[SF] Seagull",
    "EZIC",
    "I CANT TURN OFF CAPS LOCK",
    "Rick Astley",
    "cocoa puffs",
    "doki doki",
    "bob",
    "arras-mayhem.glitch.me",
    "COME AT ME BRO",
    "████████",
    "Peter",
    "bots bots we are the bots",
    "Gamer",
    "WOW! I so bad",
    "TommyVN",
    "Road Rash",
    "fatty fat fat",
    "Spin2Team",
    "arras.io",
    "sinx",
    "plz dont hurt me",
    "lysol",
    "factory is op",
    "Alpha",
    "Askeys",
    "אני אוהב אותך",
    "no",
    "Delta",
    "F-117 Nighthawk",
    "Windows",
    "Diep.io",
    "Anime",
    "doki doki",
    "Maven",
    "Taiyou Paradise",
    "69",
    "i like ur cut g",
    "feed me",
    "CX",
    "انا احبك",
    "MOE",
    "Diep.ro PianoYT",
    "Mayhem",
    "Multiboxers",
    "Feztival",
    "bhai",
    "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ",
    "j'aime les baguettes 🥖",
    "دوستت دارم",
    "no abusing",
    "Halal Certified Tank",
    "[MG] MasterOv",
    "spin = team",
    "join discord 4 bt",
    "UwU",
    "⫷Angle⫸",
    "noob",
    "ƤℜɆĐ₳₮Øℜ",
    "^._.^",
    "Tôi mến bạn",
    "👹",
    "OwO",
    "🚌. 🏃",
    "我爱你 💖",
    "nani",
    "😒",
    "💕i love you💕",
    "OMAE WA MOU SHINDEIRU",
    "qwertyuiop",
    "Seagull",
    "I hate Mondays",
    "awau",
    "01134",
    "Yuuka Hinazuki",
    "BLYAT",
    "hi im a tank",
    "COVID-69",
    "!@#$%^&*()_+",
    "pack man",
    "Simon",
    "R2-D2",
    "Shrek",
    "umineko",
    "Spin2Team",
    "iPhone",
    "c",
    "Spamton EX",
    "999999999999",
    "i love you",
    "Not an AI",
    "peepeepoopoo",
    "Team?",
    "hehehehehehehe",
    "Arras",
    "Sea",
    "Spicy Ramen"
  ]);
};

exports.chooseBaseName = () => {
  return exports.choose([
    "Base-chan (*^▽^*)",
    "Donald Trump",
    "Protector",
    "YOU SHALL NOT PASS",
    "Goalie",
    "defend the castle",
    "i love you",
    "hi im a base",
    "Overpowered",
    "Base-kun",
    "Base V2™",
    "you guys are so screwed now",
    "Duke Nukem",
    "Omega Flowey",
    "Thanos",
    "Stop! You violated the law!",
    "Home Run",
    "daddy",
    "Girlfriend",
    "dont look at me",
    "awau",
    "T3rror1337"
  ]);
};

exports.chooseBossName = (code, n) => {
  switch (code) {
    case "a":
      return exports.chooseN(
        [
          "Archimedes",
          "Akilina",
          "Anastasios",
          "Athena",
          "Alkaios",
          "Amyntas",
          "Aniketos",
          "Artemis",
          "Anaxagoras",
          "Apollon"
        ],
        n
      );
    case "ragnarok":
      return exports.chooseN(
        ["Ragnarok", "LAGNAROK", "ragna-rock", "Ragna-na-na-na-narock", "ragnarok eats everything"],
        n
      );
    case "castle":
      return exports.chooseN(
        [
          "Berezhany",
          "Lutsk",
          "Dobromyl",
          "Akkerman",
          "Palanok",
          "Zolochiv",
          "Palanok",
          "Mangup",
          "Olseko",
          "Brody",
          "Isiaslav",
          "Kaffa",
          "Bilhorod"
        ],
        n
      );
    case "fallen":
      return exports.chooseN(
        [
          "Alice",
          "Bob",
          "TANK",
          "Panzer",
          "Macarena",
          "i.imgur.com/J3p2ra8.mp4",
          "@@@@@@@@@@@@@@@@@@@@@",
          "AK-47",
          "stinky",
          "Impasta",
          "[F-22]",
          "dont look at me",
          "Bob Marley",
          "vietnam",
          "1234567890",
          "kill me if you are gay",
          "ppap",
          "Robocop",
          "Virus",
          "#DiepioIsBetter",
          "baka",
          "馬鹿",
          "사랑해",
          "愛してる",
          "Я тебя люблю",
          "jag älskar dig",
          "Larus",
          "bruh",
          "man i love trampolining",
          "arras mayhem",
          "https://arras.neocities.org",
          "???",
          "A named tank",
          "[IA]",
          "SPEEEEEEEEEEEEEEED",
          "woomy",
          "Tankster",
          "Xbox Fridge",
          "[SF] Seagull",
          "EZIC",
          "I CANT TURN OFF CAPS LOCK",
          "Rick Astley",
          "cocoa puffs",
          "doki doki",
          "bob",
          "arras-mayhem.glitch.me",
          "COME AT ME BRO",
          "████████",
          "Peter",
          "bots bots we are the bots",
          "Gamer",
          "WOW! I so bad",
          "TommyVN",
          "Road Rash",
          "fatty fat fat",
          "Spin2Team",
          "arras.io",
          "sinx",
          "plz dont hurt me",
          "Alpha",
          "Askeys",
          "אני אוהב אותך",
          "no",
          "Delta",
          "F-117 Nighthawk",
          "Windows",
          "Diep.io",
          "Anime",
          "doki doki",
          "Maven",
          "Taiyou Paradise",
          "69",
          "i like ur cut g",
          "feed me",
          "CX",
          "انا احبك",
          "MOE",
          "Diep.ro PianoYT",
          "Mayhem",
          "Multiboxers",
          "Feztival",
          "bhai",
          "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ",
          "j'aime les baguettes 🥖",
          "دوستت دارم",
          "no abusing",
          "Halal Certified Tank",
          "[MG] MasterOv",
          "spin = team",
          "join discord 4 bt",
          "UwU",
          "⫷Angle⫸",
          "noob",
          "ƤℜɆĐ₳₮Øℜ",
          "^._.^",
          "Tôi mến bạn",
          "👹",
          "OwO",
          "🚌. 🏃",
          "我爱你 💖",
          "nani",
          "😒",
          "💕i love you💕",
          "OMAE WA MOU SHINDEIRU",
          "qwertyuiop",
          "Seagull",
          "I hate Mondays",
          "awau",
          "01134",
          "Yuuka Hinazuki",
          "BLYAT",
          "hi im a tank",
          "COVID-69",
          "!@#$%^&*()_+",
          "pack man",
          "Simon",
          "R2-D2",
          "Shrek",
          "umineko",
          "Spin2Team",
          "iPhone",
          "c",
          "Spamton EX",
          "999999999999",
          "i love you",
          "Not an AI",
          "peepeepoopoo",
          "Team?",
          "hehehehehehehe",
          "Arras",
          "Sea",
          "Spicy Ramen"
        ],
        n
      );
    default:
      return "God";
  }
};
