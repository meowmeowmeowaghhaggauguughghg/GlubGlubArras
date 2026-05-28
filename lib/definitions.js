// GUN DEFINITION
const combineStats = function(arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12]
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,
    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9
  };
  return args => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();
const g = {
  // Gun info here
  trap: [2, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  swarm: [2.2, 0.25, 0.05, 0.4, 1, 0.75, 1, 4, 1, 1, 1, 5, 1],
  drone: [2, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [2, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [1.3, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [3, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [1, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.1, 1, 1.1, 1.15, 1.15, 1, 3, 1, 1.25],
  subduer: [1.8, 0.25, 1, 1, 1.35, 0.25, 1.25, 1, 1, 1, 1.5, 1, 1.2],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1.5, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  tiny: [1, 1, 1, 0.3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  minit: [1, 1, 1, 0.55, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfsize: [1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 5, 1, 1],
  small: [1, 1, 1, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lesspower: [1, 1, 2, 1, 0.8, 0.8, 0.8, 1, 1, 1, 1, 1, 0.9],
  big: [1, 1, 1, 1.4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  giant: [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  huge: [1, 1, 1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  preda: [1.55, 1, 1, 0.8, 1.3, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [1.5, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  snakeskin: [1.5, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.8, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  mantis: [1.1, 0.1, 1.5, 1, 1, 0.25, 0.6, 1.2, 0.65, 1.5, 1.2, 0.0001, 1.2],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [2.8, 0.4, 1, 1.5, 1, 0.4, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  hurricane: [1.1, 1, 1, 1, 1.3, 1.3, 1.1, 1.5, 1.15, 1, 1, 1, 1],
  tri: [1.2, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  redist: [18, 10, 1, 0.4, 20, 1.5, 15, 1, 1, 2, 1.3, 0.1, 1],
  trifront: [1.2, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1.3, 1.4, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [2, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
  five: [1.5, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  pound: [2, 2, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 2, 0.5, 1, 2, 1.5, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.92, 1.4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  hive: [2, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  beekeeper: [1.4, 0.7, 1, 0.9, 0.8, 0.9, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1
  ],
  spread: [1.3, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1.15, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [0.9, 0.667, 0.95, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  double: [0.9, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1,
    0.25,
    1.5,
    1.2,
    1.35,
    0.25,
    1.25,
    0.8,
    0.65,
    1,
    1.5,
    1.5,
    1.2
  ],
  machgun: [1.4, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.4, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  silencer: [2.3, 0.4, 0.5, 1, 0.5, 0.5, 0.5, 1.1, 1.1, 1.1, 1, 0.8, 1],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1.5, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  corvette: [1.1, 1.2, 0.1, 0.7, 1.2, 0.6, 1.1, 0.8, 1, 0.6, 1, 15, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  mega: [1.7, 1, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  block: [1.9, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  boomerang: [1.4, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [2, 1, 1, 0.85, 1, 1, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  master: [1.4, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [1, 1, 1, 1.4, 0.86, 0.8, 1, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessrecoil: [1, 0.666, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublerecoil: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  bitmorereload: [0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.25, 1.25, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  lessspeed: [1, 1, 1, 1, 1, 1, 1, 0.75, 0.75, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  nospeed: [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  lessdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.7, 1, 1],
  verydense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1],
  morehealth: [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
  lesshealth: [1, 1, 1, 1, 0.8, 1, 1, 1, 1, 1, 1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  morerange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3, 1, 1, 1],
  halfdamage: [1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1],
  moredamage: [1, 1, 1, 1, 1.5, 1.5, 1, 1, 1, 1, 1, 1, 1],
  lessdamage: [1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1, 1, 1, 1],
  bitlessdamage: [1, 1, 1, 1, 0.85, 0.85, 1, 1, 1, 1, 1, 1, 1],
  nospray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  morespray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3.5, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 1, 1, 0.00001, 2, 0, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1, 1, 1, 1, 1, 2, 4.2, 1, 1, 20, 1, 10],
  propeller: [0.5, 0.5, 2, 1, 0.5, 0.2, 0.7, 0.1, 1, 0.05, 1, 0.5, 0.7],
  hyperspeed: [1, 1.1, 1, 1, 1, 1, 2, 4.2, 2, 1, 2, 0.5, 1],
  lancer: [0.8, 0, 1, 0.0001, 0.8, 1.5, 1.1, 0.1, 1, 0.02, 1, 1, 8],
  flail: [0.2, 0, 1, 1, 0.8, 1.5, 1.1, 0.1, 1, 0.02, 1, 1, 8],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
   legminiboss:          [432,   0.1,   1.7,    0.3,    1,      1,      1,      1,      1,      1,      1,      1,      1],
  legmach2:             [1,     0.8,   1.7,    1,      1,      1,      1,      1,      0.8,    1,      1,      3,      1],
  legmach:              [1,     0.8,   1.7,    1,      1,      1,      1,      1,      0.8,    1,      1,      2.5,    1],
  legtrap:       [432,   1,     0.25,   0.6,    4,      1.75,   4,      1.5,    0.5,    1,      1,      15,     3], 
};
const dfltskl = 9;
// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
  healer: 7,
  lancer: 8
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8
};
// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INVISIBLE: [0, 0],
  INDEPENDENT: false,
  MUTE: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "LooseToTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2
  },
  FOOD: {
    LEVEL: -1
  }
};
// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false
};
const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15000,
  SHAPE: -5,
  SIZE: 58,
  DIE_AT_RANGE: false,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 40 * basePolygonHealth,
    REGEN: 0.6
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true
};

exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: 5,
  SIZE: 30,
  DIE_AT_RANGE: false,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: false
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0
  },
  DRAW_HEALTH: false
};
exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  DIE_AT_RANGE: true,
  BODY: {
    PUSHABILITY: 1,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    DAMAGE: 1,
    RESIST: 100,
    RANGE: 600,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 50,
  COLOR: 16,
  ACCEPTS_SCORE: false,
  HITS_OWN_TYPE: "hard"
};
exports.baseball = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  DIE_AT_RANGE: true,
  BODY: {
    PUSHABILITY: 1,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    DENSITY: 1000,
    DAMAGE: 1,
    RESIST: 100,
    RANGE: 0.1,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 50,
  COLOR: 16,
  ACCEPTS_SCORE: false,
  HITS_OWN_TYPE: "hard"
};
exports.largeObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 75,
  SHAPE: -10,
  CONTROLLERS: ["superspin"],
  HITS_OWN_TYPE: "repel"
};
exports.smallObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 37.5,
  SHAPE: -8
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7
};
exports.mazewall3 = {
  CAN_GO_OUTSIDE_ROOM: true,
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Maze Wall",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    DAMAGE: 1,
    RESIST: 100,
    STEALTH: 1
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.mazewall = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  SHAPE: 4,
  DIE_AT_RANGE: false,
  BODY: {
    PUSHABILITY: 1,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    DAMAGE: 1,
    RESIST: 100,
    RANGE: 600,
    STEALTH: 1
  },
  VALUE: 0,
  SIZE: 50,
  COLOR: 16,
  ACCEPTS_SCORE: false,
  HITS_OWN_TYPE: "hard"
};
// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: true
};
exports.growbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  SHOOT_ON_DEATH: true,
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  MOTION_TYPE: "growing",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: true
};
exports.accelbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  SHOOT_ON_DEATH: true,
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  MOTION_TYPE: "accel",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: true
};
exports.mrclean = {
  type: "bullet",
  SIZE: 500,
  SYNC_SKILLS: false,
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 99999,
    RANGE: 9999,
    DENSITY: 1.25,
    SIZE: 500,
    DAMAGE: 999999,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: true
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm"
};

exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.fovswarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 3
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.seekerswarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "repel",
  FACING_TYPE: "looseWithMotion",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 0.3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 6,
    RESIST: 1.6,
    RANGE: 100,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 2
  },
  DIE_AT_RANGE: false,
  BUFF_VS_FOOD: true
};
exports.homingbullet = {
  PARENT: [exports.swarm],
  SHAPE: 0,
  INDEPENDENT: true
};
exports.compassbullet = {
  PARENT: [exports.fovswarm],
  SHAPE: 0,
  INDEPENDENT: true,
  GUNS: [
    {
      POSITION: [18, 8, 0.01, 0, 0, 0, 0]
    }
  ]
};
exports.followerbullet = {
  PARENT: [exports.fovswarm],
  SHAPE: 0,
  INDEPENDENT: true,
  GUNS: [
    {
      POSITION: [22, 8, 0.01, 0, 0, 0, 0]
    }
  ]
};
exports.seekerbullet = {
  PARENT: [exports.seekerswarm],
  SHAPE: 5,
  INDEPENDENT: false,
  GUNS: [
    {
      POSITION: [23, 5, 0.01, 0, 0, 0, 10]
    }
  ]
};
exports.pointerbullet = {
  PARENT: [exports.fovswarm],
  SHAPE: 0,
  MAX_CHILDREN: 20,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.guiderbullet = {
  PARENT: [exports.fovswarm],
  SHAPE: 0,
  INDEPENDENT: true,
  BODY: {
    SPEED: 5
  },
  GUNS: [
    {
      POSITION: [22, 6, 0.01, 0, 0, 0, 0]
    }
  ],
  PROPERTIES: {
    AUTOFIRE: true,
    SHOOT_SETTINGS: combineStats([g.basic, g.doublereload, g.power]),
    TYPE: [
      exports.bullet,
      {
        PERSISTS_AFTER_DEATH: true
      }
    ]
  }
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer"
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: {
    FARMER: true
  },
  INDEPENDENT: true
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.itrap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  INDEPENDENT: true,
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.proxtrap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "motor", // def
  INDEPENDENT: true,
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0
  }
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5
  }
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 1.25,
    RANGE: 120
  }
};
exports.nestboomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: 5,
  BODY: {
    SPEED: 1.25,
    RANGE: 125
  }
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: {
    BLIND: true
  },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.basedrone = {
  LABEL: "Base Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  BODY: {
    ACCELERATION: 2,
    PENETRATION: 1.1,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 0.3 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 70,
    PUSHABILITY: 0.1,
    FOV: 1.5
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  MAX_CHILDREN: 2,
  INDEPENDENT: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: false,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil
        ]),
        TYPE: [
          exports.swarm,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ],
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};

exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autogunchip = {
  PARENT: [exports.gunchip],
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};

exports.pentasunchip = {
  PARENT: [exports.drone],
  SHAPE: 5,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.trisunchip = {
  PARENT: [exports.drone],
  SHAPE: 3,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.eggsunchip = {
  PARENT: [exports.drone],
  SHAPE: 0,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.invissunchip = {
  PARENT: [exports.gunchip],
  INVISIBLE: [0.08, 0.03]
};
exports.minimissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
          g.halfreload
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};

exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  MAX_CHILDREN: 15,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.hypermissile = {
  PARENT: [exports.bullet],
  INDEPENDENT: true,
  RANGE: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.morerecoil,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.halfreload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ]
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ]
      }
    }
  ]
};

exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.lessrecoil
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.thrustbullet = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  SHAPE: 0,
  INDEPENDENT: false,
  BODY: {
    RANGE: 150
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: false,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: false,
        ALT_FIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  MAX_CHILDREN: 20,
  BODY: {
    RANGE: 90,
    FOV: 0.5
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: {
    NO_LEAD: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.lessreload]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.lessreload]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.lessreload]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.lessreload]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees, g.lessreload]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.smashhive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  FACING_TYPE: "autospin",
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: {
    NO_LEAD: true
  },
  BODY: {
    FOV: 3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.hive,
          g.bees,
          g.power,
          g.bitmorereload,
          g.slow
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.hive,
          g.bees,
          g.power,
          g.bitmorereload,
          g.slow
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.hive,
          g.bees,
          g.power,
          g.bitmorereload,
          g.slow
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.hive,
          g.bees,
          g.power,
          g.bitmorereload,
          g.slow
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.hive,
          g.bees,
          g.power,
          g.bitmorereload,
          g.slow
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

exports.trapbullet = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  SHAPE: -7,
  INDEPENDENT: true,
  BODY: {
    RANGE: 115
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.weak,
          g.trap,
          g.halfrange,
          g.halfrecoil,
          g.slow
        ]),
        TYPE: [exports.trap, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 1.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: false,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.trap,
          g.weak,
          g.halfrecoil,
          g.halfrange,
          g.slow
        ]),
        TYPE: [exports.trap, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5
};
exports.genericDominator = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  INVISIBLE: [0, 0],
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE * 4,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  HITS_OWN_TYPE: "never",
  INVISIBLE: [0, 0],
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.targetsymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 0
};

exports.autoTurretcrash = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 5,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.morespray,
          g.power,
          g.minit,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineAutoTurretrecoil = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  HAS_NO_RECOIL: true,
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.morespray,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload
      }
    }
  ]
};

exports.twinAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  HAS_NO_RECOIL: true,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessreload, g.auto]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessreload, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.swivel3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3.1
  },
  CONTROLLERS: ["mapAltToFire", "canRepel", "nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.auto5gunrecoil = {
  PARENT: [exports.genericTank],
  LABEL: "",
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.weak,
          g.weak,
          g.minit,
          g.morespray,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 11, -1.5, 6, 0, 0, 0]
    }
  ]
};
exports.attention = {
  PARENT: [exports.genericTank],
  LABEL: "",
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  INDEPENDENT: true,
  COLOR: 16,
  BODY: {
    DAMAGE: 0,
    RANGE: 0.5,
    PUSHABILITY: 0
  },
  DANGER: 6
};
exports.auto5gunrecoilbase = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  TYPE: "wall",
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.protectorswarm,
          g.turret,
          g.mach,
          g.morespeed,
          g.doublereload,
          g.anni,
          g.minit,
          g.moredamage,
          g.morereload,
          g.morespeed,
          g.verydense,
          g.verydense
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 11, -1.5, 6, 0, 0, 0]
    }
  ]
};
exports.auto5gunrecoilob = {
  PARENT: [exports.genericTank],
  LABEL: "",
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster", "crazyspin"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.turret,
          g.mach,
          g.anni,
          g.destroy,
          g.minit,
          g.morespray,
          g.fast
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 11, -1.5, 6, 0, 0, 0]
    }
  ]
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroyautogun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 1.3,
    SPEED: 0.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.auto,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 27,
  HAS_NO_RECOIL: true,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.droneauto = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { FARMER: true },
  INDEPENDENT: true,
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.masterDrone = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 20,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.minion,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.minion
      }
    }
  ]
};

exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 1.9
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.bitlessspeed,
          g.autosnipe,
          g.bitlessspeed,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0]
    }
  ]
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gunpower = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.morespeed,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.morespeed,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gunrecoil = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  TYPE: "wall",
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.destroy,
          g.fast,
          g.verydense,
          g.verydense,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.destroy,
          g.fast,
          g.verydense,
          g.morereload,
          g.verydense
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.slowautoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.slow,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.weakBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 5,
  INDEPENDENT: true
};
exports.reverseBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  SHAPE: 6,
  INDEPENDENT: true
};
exports.landmineBody = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true
};
exports.weak2Body = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 4,
  INDEPENDENT: true
};
exports.smashbody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true
};
exports.baseminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  INDEPENDENT: false,
  HITS_OWN_TYPE: "hard",
  VARIES_IN_SIZE: true,
  ACCEPTS_SCORE: true,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  BODY: {
    FOV: 0.7,
    SPEED: 2,
    ACCELERATION: 0.4,
    HEALTH: 1,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 1
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  TYPE: "wall",
  COLOR: 16,
  BODY: {
    FOV: 1.1
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.protectorswarm,
          g.halfreload,
          g.verydense
        ]),
        TYPE: exports.basedrone,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.protectorswarm,
          g.halfreload,
          g.verydense
        ]),
        TYPE: exports.basedrone,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 4.5, 0.6, 7, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.protectorswarm,
          g.halfreload,
          g.verydense
        ]),
        TYPE: exports.basedrone,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Destroyer",
  TYPE: "wall",
  BODY: {
    FOV: 1.21
  },
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  ACCEPTS_SCORE: false,
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      POSITION: [11, 12, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.lessreload,
          g.verydense
        ]),
        TYPE: exports.bullet,
        MAX_CHILDREN: 15,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.autoTurretParent = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 1.5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  DANGER: 0
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  DANGER: 0,
  TYPE: "wall",
  SIZE: 75,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 100000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1.2,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseGunTurret
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseGunTurret
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseGunTurret
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseGunTurret
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

exports.baseProtector2 = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  TYPE: "wall",
  SIZE: 75,
  DANGER: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 0.5,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

exports.machineminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.halfreload, g.minion]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.halfreload, g.minion]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.trapminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.minion, g.weak]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.boostminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
          g.lessreload,
          g.minion,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.minion,
          g.thruster,
          g.lessreload,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
        LABEL: "Back"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.minion,
          g.lessreload,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
        LABEL: "Back"
      }
    }
  ]
};
exports.spawnerminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  MAX_CHILDREN: 2,
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 17, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.baseminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lessreload]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};

exports.splitter = {
  PARENT: [exports.genericTank],
  LABEL: "Splitter",
  SIZE: 6,
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  BODY: {
    FOV: 1.8,
    HEALTH: base.HEALTH * 0.5,
    SHIELD: base.SHIELD * 0.5,
    DENSITY: base.DENSITY * 0.5
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lessreload]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.lessdamage,
          g.lesshealth
        ]),
        TYPE: exports.minion,
        AUTOFIRE: false,
        MAX_CHILDREN: 21,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.baseminion4 = {
  PARENT: [exports.drone],
  LABEL: "Minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: false
  },
  DRAW_HEALTH: false,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};
exports.weird = {
  PARENT: [exports.genericTank],
  LABEL: "Controlled Spike",
  GIVE_KILL_MESSAGE: false,
  HITS_OWN_TYPE: "hardWithBuffer",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.weirdmega = {
  PARENT: [exports.genericTank],
  LABEL: "Controlled Smasher",
  GIVE_KILL_MESSAGE: false,
  INDEPENDENT: true,
  ACCEPTS_SCORE: true,
  DANGER: 3,
  SIZE: 10,
  FOV: 0.5,
  HITS_OWN_TYPE: "hardWithBuffer",
  BODY: {
    FOV: 0.5,
    SPEED: 10,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.4,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: base.DENSITY * 2
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  IS_SMASHER: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "hangOutNearMaster",
    "mapTargetToGoal",
    "moveInCircles"
  ],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ]
};

exports.walkover = {
  PARENT: [exports.genericTank],
  LABEL: "Dropped Mine",
  GIVE_KILL_MESSAGE: false,
  INDEPENDENT: true,
  AUTO_UPGRADE: "random",
  ACCEPTS_SCORE: false,
  DRAW_HEALTH: false,
  DANGER: 3,
  DIE_AT_RANGE: true,
  INVISIBLE: [0.09, 0.01],
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    RANGE: 450,
    DAMAGE: 1.5,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  IS_SMASHER: true,
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    },
    {
      POSITION: [26.5, 0, 0, 180, 360, 0],
      TYPE: exports.landmineBody
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret
    }
  ]
};
exports.pit = {
  LABEL: "Booby Trap",
  PARENT: [exports.genericTank],
  SHAPE: -6,
  INDEPENDENT: true,
  GIVE_KILL_MESSAGE: false,
  HITS_OWN_TYPE: "hard",
  DIE_AT_RANGE: true,
  DRAW_HEALTH: false,
  ACCEPT_SCORE: false,
  INVISIBLE: [0.09, 0.01],
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "minion"],
  BODY: {
    SPEED: 0.9,
    ACCELERATION: 1,
    DENSITY: 1.1,
    RANGE: 800
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.slowautoTurret
    }
  ]
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  COLOR: 2,
  BODY: {
    FOV: base.FOV * 2
  },
  CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire"],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.halfreload,
          g.skim
        ]),
        TYPE: exports.hypermissile
      }
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0]
    }
  ]
};

exports.skimboss = {
  PARENT: [exports.genericTank],
  LABEL: "Elite Skimmer",
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SKILL: skillSet({
    spd: 1
  }),
  SHAPE: 3,
  COLOR: 2,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret
    }
  ]
};
//FUNCTIONS:
function makeAuto(type, name = -1, options = {}) {
  let turret = {
    type: exports.autoTurret,
    size: 10,
    independent: true
  };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent
      }
    ]
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}

function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [
        exports.drone,
        {
          INDEPENDENT: true
        }
      ],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 25
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}

function makeFlankTrap(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner1 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [13, 8, 1, 0, 0, 180, 0]
  };
  let spawner2 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 8, 1.7, 13, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.trap]),
      TYPE: exports.trap,
      STAT_CALCULATOR: gunCalcNames.trap
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner1, spawner2];
  } else {
    output.GUNS = [...type.GUNS, spawner1, spawner2];
  }
  if (name == -1) {
    output.LABEL = "Trap-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeTriFlankTrap(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner1 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [13, 8, 1, 0, 0, 180, 0]
  };
  let spawner2 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 8, 1.7, 13, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.trap, g.halfreload]),
      TYPE: exports.trap,
      STAT_CALCULATOR: gunCalcNames.trap
    }
  };
  let spawner3 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [13, 8, 1, 0, 0, 90, 0]
  };
  let spawner4 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 8, 1.7, 13, 0, 90, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.trap, g.halfreload]),
      TYPE: exports.trap,
      STAT_CALCULATOR: gunCalcNames.trap
    }
  };
  let spawner5 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [13, 8, 1, 0, 0, 270, 0]
  };
  let spawner6 = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 8, 1.7, 13, 0, 270, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.trap, g.halfreload]),
      TYPE: exports.trap,
      STAT_CALCULATOR: gunCalcNames.trap
    }
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner1, spawner2, spawner3, spawner4, spawner5, spawner6];
  } else {
    output.GUNS = [
      ...type.GUNS,
      spawner1,
      spawner2,
      spawner3,
      spawner4,
      spawner5,
      spawner6
    ];
  }
  if (name == -1) {
    output.LABEL = "Tri-Trap-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
exports.basic = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.basicpg2 = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Basic (Page 2)",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.supertank = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Potato Chip",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: -2,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.01, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.supertank3 = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Dot",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: 1,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.supertank2 = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Potato Chip 2",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: -2,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.01, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.supertank33 = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Potato Chip 3",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SHAPE: -2,

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.01, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.cleaner = {
  PARENT: [exports.genericTank],
  LABEL: "wtf",
  COLOR: 3,
  SIZE: 50,
  DANGER: 15,
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    SPEED: 4.5,
    RESIST: 1.6,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 270, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.mrclean,
        SYNCS_SKILLS: false
      }
    }
  ]
};
exports.subduer = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.contagion = {
  PARENT: [exports.genericTank],
  LABEL: "Contagion",
  DANGER: 6,
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: base.FOV * 1.25
  },
  STATNAMES: statnames.generic,
  GUNS: [
    {
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.array = {
  PARENT: [exports.genericTank],
  LABEL: "Array",
  DANGER: 7,
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: base.FOV * 1.25
  },
  STATNAMES: statnames.generic,
  GUNS: [
    {
      POSITION: [7, 7.5, 0.6, 15, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.pathogen = {
  PARENT: [exports.genericTank],
  LABEL: "Pathogen",
  STATNAMES: statnames.generic,
  class: "Pathogen",
  DANGER: 6,
  BODY: {
    // hey discord is back
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 20,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.trojan = {
  PARENT: [exports.genericTank],
  LABEL: "Trojan",
  STATNAMES: statnames.generic,
  DANGER: 7,
  BODY: {
    // hey discord is back
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 18,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 18,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.vector = {
  PARENT: [exports.genericTank],
  LABEL: "Vector",
  STATNAMES: statnames.generic,
  class: "Pathogen",
  DANGER: 6,
  BODY: {
    // hey discord is back
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 50, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 20,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -50, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 20,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.homing = {
  PARENT: [exports.genericTank],
  LABEL: "Homing",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 5, -2.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.homingbullet
      }
    }
  ]
};
exports.machhoming = {
  PARENT: [exports.genericTank],
  LABEL: "Creeper",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.homingbullet
      }
    }
  ]
};
exports.creep = makeAuto(exports.machhoming, "Locator", {
  type: exports.homing
});
exports.doublehome = {
  PARENT: [exports.genericTank],
  LABEL: "Aimer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, -1.65, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.homingbullet
      }
    },
    {
      POSITION: [19, 8, -1.65, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.homingbullet
      }
    },
    {
      POSITION: [22, 8, -1.65, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.homingbullet
      }
    }
  ]
};
exports.compass = {
  PARENT: [exports.genericTank],
  LABEL: "Compass",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.compassbullet
      }
    }
  ]
};
exports.autocompass = makeAuto(exports.compass);
exports.tracker = {
  PARENT: [exports.genericTank],
  LABEL: "Tracker",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [17, 9, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.compassbullet
      }
    }
  ]
};
exports.follower = {
  PARENT: [exports.genericTank],
  LABEL: "Follower",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.followerbullet
      }
    }
  ]
};
exports.seeker = {
  PARENT: [exports.genericTank],
  LABEL: "Seeker",
  MAX_CHILDREN: 30,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, -2.1, 0, 0, 0, 0]
    },
    {
      POSITION: [8.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [17, 10, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfrecoil
        ]),
        TYPE: exports.seekerbullet
      }
    }
  ]
};

exports.jumpsymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 3
};
exports.radarlight = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 1,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  BODY: {
    FOV: 2,
    SIZE: 11
  },
  FACING_TYPE: "looseToTarget",
  AI: { NO_LEAD: true },
  SHAPE: -1
};
exports.sassairis = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 13,
  FACING_TYPE: "looseToTarget"
};
exports.radarbeam = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 3,
  INDPENDENT: true,
  CONTROLLERS: ["fastspin"],
  BODY: {
    FOV: 2,
    SIZE: 6
  },
  FACING_TYPE: "looseToTarget",
  AI: { NO_LEAD: true },
  SHAPE: -1
};
exports.radarsymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 1,
  INDPENDENT: true,
  SIZE: 1,
  FACING_TYPE: "looseToTarget",
  SHAPE: 0,
  BODY: {
    SIZE: 7,
    FOV: 2
  },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 0],
      TYPE: exports.radarlight
    }
  ]
};
exports.sassaeye = {
  PARENT: [exports.genericTank],
  LABEL: "Sassafras Eye",
  BODY: {
    FOV: 3
  },
  FACING_TYPE: "toTarget",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  COLOR: 19,
  INDEPENDENT: true,
  TURRETS: [
    {
      /****  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.75, 2, 0, 0, -15, 1],
      TYPE: exports.sassairis
    }
  ]
};
exports.targetter = {
  PARENT: [exports.genericTank],
  LABEL: "Targetter",
  DANGER: 7,
  INVISIBLE: [0.08, 0.03],
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.compassbullet
      }
    }
  ]
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed A",
  RESET_UPGRADES: true,
  FOV: 4,
  DANGER: 0,
  HEALTH: 999999999,
  FOV: 3,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    FOV: base.FOV * 1,
    DENSITY: base.DENSITY * 1,
    DAMAGE: base.DAMAGE * 1,
    HEALTH: base.HEALTH * 1
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.testbed1 = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed B",
  RESET_UPGRADES: true,
  FOV: 4,
  DANGER: 0,
  HEALTH: 999999999,
  FOV: 3,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  SHAPE: [
    [-1, -0.7],
    [-0.7, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.testbed2 = {
  PARENT: [exports.genericTank],
  LABEL: "Testbed C",
  RESET_UPGRADES: true,
  FOV: 4,
  DANGER: 0,
  HEALTH: 999999999,
  FOV: 3,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  SHAPE: [
    [-1, -0.7],
    [-0.7, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
    DAMAGE: base.DAMAGE * 1.1,
    HEALTH: base.HEALTH * 33.7
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.longsmash = {
  PARENT: [exports.genericTank],
  LABEL: "Thrasher",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.4,
    DENSITY: base.DENSITY * 1.8,
    DAMAGE: base.DAMAGE * 1.2,
    HEALTH: base.HEALTH * 34.7
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.weakBody
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.coroner = {
  PARENT: [exports.genericTank],
  LABEL: "Coroner",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 1.8,
    DAMAGE: base.DAMAGE * 1.1,
    HEALTH: base.HEALTH * 29.7
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22.5, 0, 0, 0, 360, 0],
      TYPE: exports.weak2Body
    }
  ],
  MAX_CHILDREN: 30,
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.giant,
          g.giant,
          g.big
        ]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl
  ],
  STAT_NAMES: statnames.smasher
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4,
    HEALTH: base.HEALTH * 34.8,
    DAMAGE: base.DAMAGE * 1.1
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody
    }
  ]
};

exports.protector = {
  PARENT: [exports.genericTank],
  LABEL: "Shielder",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
    HEALTH: base.HEALTH * 34.9,
    SHIELD: base.SHIELD * 3.4,
    DAMAGE: base.DAMAGE * 1.1
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.smashbody
    }
  ]
};

exports.landmine = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  INVISIBLE: [0.06, 0.01],
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.1,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 34.7,
    DENSITY: base.DENSITY * 2,
    DAMAGE: base.DAMAGE * 1.1
  },
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [21.5, 0, 0, 22.5, 360, 0],
      TYPE: exports.landmineBody
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.3,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 34.7,
    DENSITY: base.DENSITY * 2
  },
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.bigspike = {
  PARENT: [exports.genericTank],
  LABEL: "Juggernaut",
  DANGER: 7,
  SIZE: 16,
  BODY: {
    SPEED: base.SPEED * 1.1,
    DAMAGE: base.DAMAGE * 1.5,
    SHIELD: base.SHIELD * 2,
    FOV: base.FOV * 1.09,
    HEALTH: base.HEALTH * 50,
    ACCELERATION: base.ACCEL * 0.6,
    DENSITY: base.DENSITY * 6
  },
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody2
    },
    {
      POSITION: [20.5, 0, 0, 90, 360, 0],
      TYPE: exports.spikeBody2
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    },
    {
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 270, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.smallsmash = {
  PARENT: [exports.genericTank],
  LABEL: "Micro-Smasher",
  SIZE: 6,
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.4,
    DAMAGE: base.DAMAGE * 0.7,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 30,
    DENSITY: base.DENSITY * 0.5
  },
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.dronesmash = {
  PARENT: [exports.genericTank],
  LABEL: "Doppel-Smasher",
  DANGER: 7,
  MAX_CHILDREN: 4,
  BODY: {
    SPEED: base.speed * 1.5,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 33.6,
    DENSITY: base.DENSITY * 1.5
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      POSITION: [25.5, 0, 0, 0, 360, 0],
      TYPE: exports.reverseBody
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.giant]),
        TYPE: exports.weirdmega,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.dronesmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.ball = {
  PARENT: [exports.genericTank],
  LABEL: "Ball",
  DANGER: 7,
  BODY: {
    SPEED: (base.speed = 10),
    DAMAGE: (base.DAMAGE = 2),
    FOV: (base.FOV = 1.05),
    HEALTH: base.HEALTH * 1.2,
    DENSITY: (base.DENSITY = 100)
  },
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
};

exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Sawblade",
  DANGER: 7,
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  BODY: {
    DAMAGE: base.DAMAGE * 1.25,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 33.4,
    DENSITY: base.DENSITY * 0.3
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2
    }
  ]
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.twinsniper = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Sniper",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gunnerpg2 = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner [Page 2]",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.doublegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Double Gunner",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.recon = {
  PARENT: [exports.genericTank],
  LABEL: "Recon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.1
  },
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  INVISIBLE: [0.08, 0.03],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.battery = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 3.5, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.power
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.megamachine = {
  PARENT: [exports.genericTank],
  LABEL: "Mauser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.6, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.destroy,
          g.halfreload,
          g.morespray,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.biggunner = {
  PARENT: [exports.genericTank],
  LABEL: "Shootist",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 3.5, 1, 0, 7.25, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 3.5, 1, 0, 5.5, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 3.5, 1, 0, -5.5, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2.5, 1, 0, -3, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2.5, 1, 0, 3, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.doubleguard = {
  PARENT: [exports.genericTank],
  LABEL: "Double Guard",
  MAX_CHILDREN: 400,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  MAX_CHILDREN: 410,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bentsniper = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Sniper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, -2, -18, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 2, 18, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bentpounder = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Heavy",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 10, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autobent = makeAuto(exports.bent, "Auto-Bent");
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.05
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 8,
  BODY: {
    FOV: base.FOV * 1.1
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.sniper = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.rifle = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autorifle = makeAuto(exports.rifle);
exports.silencer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Silencer",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  INVISIBLE: [0.08, 0.03],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.carbine = makeHybrid(exports.rifle, "Armsman");
exports.assrifle = {
  PARENT: [exports.genericTank],
  LABEL: "Assault Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [20, 10.5, 1.4, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.mach,
          g.morespray,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.twinassassin = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Twin Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 7, 1, 0, 4.7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessdamage
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 7, 1, 0, -4.7, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessdamage
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 7, -1.2, 4, 4.7, 0, 0]
    },
    {
      POSITION: [7, 7, -1.2, 4, -4.7, 0, 0]
    }
  ]
};
exports.bentassass = makeHybrid(exports.assassin, "Assassinator");
exports.eliminate = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sharpshooter",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    },
    {
      POSITION: [1.5, 8.5, 1.2, 27, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.homingbullet
      }
    }
  ]
};
exports.beekeeper = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Beekeeper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13.5, 3, 0.6, 0, -6, -9.55, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.hive,
          g.morehealth,
          g.threequartersrof
        ]),
        TYPE: exports.bee,
        LABEL: "bee"
      }
    },
    {
      POSITION: [13.5, 3, 0.6, 0, 6, 9.55, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.hive,
          g.morehealth,
          g.threequartersrof
        ]),
        TYPE: exports.bee,
        LABEL: "bee"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.beekeeper]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.autoass = makeAuto(exports.assassin, "");
exports.railgun = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Railgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 8, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.halfrange,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.halfrange,
          g.fake,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.morespeed,
          g.halfrange,
          g.fake,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.bitlessspeed
        ]),
        TYPE: exports.accelbullet
      }
    },
    {
      POSITION: [27, 2, 1, 0, 4, 0, 0]
    },
    {
      POSITION: [27, 2, 1, 0, -4, 0, 0]
    }
  ]
};
exports.stalker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  LABEL: "Stalker",
  INVISIBLE: [0.08, 0.03],
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.autoass = makeAuto(exports.assassin, "Auto-Assassin");

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autohunter = makeAuto(exports.hunter);
exports.preda10 = {
  PARENT: [exports.genericTank],
  LABEL: "Marksman",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [28, 4.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [26, 6.5, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 0, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.poach = makeHybrid(exports.hunter, "Poacher");

exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 15,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.manager = {
  PARENT: [exports.genericTank],
  LABEL: "Manager",
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  INVISIBLE: [0.08, 0.03],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 35,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun,
      INDEPENDENT: true
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [
        exports.masterGun,
        {
          INDEPENDENT: true
        }
      ]
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [
        exports.masterGun,
        {
          INDEPENDENT: true
        }
      ]
    }
  ]
};

exports.playablesquare = {
  PARENT: [exports.genericTank],
  LABEL: "[Bosses]",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    spd: 1
  }),
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true
};

exports.playablesquare2 = {
  PARENT: [exports.genericTank],
  LABEL: "[Bosses Page 2]",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true
};
exports.playablesquare3 = {
  PARENT: [exports.genericTank],
  LABEL: "[Bosses Page 3]",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2
  },
  DRAW_HEALTH: true
};
exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.supervisor = {
  PARENT: [exports.genericTank],
  LABEL: "Supervisor",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.45
  },
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 13, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [7, 13, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.governor = {
  PARENT: [exports.genericTank],
  LABEL: "Governor",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.72,
    FOV: base.FOV * 1.0
  },
  MAX_CHILDREN: 30,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 15, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.power]),
        TYPE: exports.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.corvettepack = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [],
  TURRETS: []
};
exports.drivesymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 4
};
exports.turreteddrone = makeAuto(exports.drone, "Turreted Drone", {
  type: exports.slowautoTurret
});
exports.turretedminion = makeAuto(exports.minion, "Turreted Minion", {
  type: exports.slowautoTurret
});
exports.turretedswarm = makeAuto(exports.swarm, "Turreted Swarm Drone", {
  type: exports.slowautoTurret
});
exports.drive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  MAX_CHILDREN: 25,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 64,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.power]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.power]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.quasar = {
  PARENT: [exports.genericTank],
  LABEL: "Quasar",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 80,
  GUNS: [
    {
      /*** LENGTH WIDTH ASPECT X Y ANGLE DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.master,
          g.lowpower[(2, 1, 1, 1, 0.8, 0.6, 0.8, 1, 1, 1, 1, 1, 1)]
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.master,
          g.lowpower[(2, 1, 1, 1, 0.8, 0.6, 0.8, 1, 1, 1, 1, 1, 1)]
        ]),
        TYPE: [
          exports.drone,
          {
            BODY: { FOV: 2 },
            INDEPENDENT: true
          }
        ],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 72 * 2, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.master,
          [2, 1, 1, 1, 0.8, 0.6, 0.8, 1, 1, 1, 1, 1, 1]
        ]),
        TYPE: [
          exports.drone,
          {
            BODY: { FOV: 1 },
            INDEPENDENT: true
          }
        ],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 72 * 3, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.lowpower,
          [2, 1, 1, 1, 0.8, 0.6, 0.8, 1, 1, 1, 1, 1, 1]
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 72 * 4, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.lowpower[(2, 1, 1, 1, 0.8, 0.6, 0.8, 1, 1, 1, 1, 1, 1)]
        ]),
        TYPE: [exports.drone],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.ArenaCloserBot = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  TYPE: "Dev",
  HITS_OWN_TYPE: "hard",
  SIZE: 20,
  TEAM: 6,
  DRAW_HEALTH: false,
  CAN_GO_OUTSIDE_ROOM: false,
  CAN_BE_ON_LEADERBOARD: false,
  ACCEPTS_SCORE: true,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  VALUE: 2000000,
  //COLOR: 17,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SKILL: skillSet({
    rld: 10,
    dam: 10,
    pen: 10,
    str: 10,
    spd: 10,
    atk: 10,
    hlt: 10,
    shi: 10,
    rgn: 10,
    mob: 10
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    RESIST: 9e99,
    SHIELD: 9e99,
    REGEN: 9e99,
    DAMAGE: 9e99,
    PENETRATION: 9e99,
    FOV: 20,
    DENSITY: 9e99,
    SIZE: 12,
    LEVEL: 15,
    SPEED: 30
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfdamage,
          g.verydense,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.bullet,
        LABEL: "Arena Closer Bullet", // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 15
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 15
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.shapebot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "smoothToTarget",
  MOTION_TYPE: "motor",
  BROADCAST_MESSAGE: "An Arena Closer has been defeated!",
  BODY: {
    SIZE: 12,
    LEVEL: 15,
    FOV: base.FOV * 50,
    SPEED: 50
  },
  //COLOR: 17,
  NAME: "",
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "mapTargetToGoal"],
  AI: {
    FULL_VIEW: true
  }
};

exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "Banshee",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.auto3gun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 10
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 10
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 10
      }
    }
  ]
};
exports.autoover = makeAuto(exports.overseer, "Auto-seer");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 10
      }
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 10
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.cruiserpage2 = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser (Page 2)",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.swarmdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmdrive",
  DANGER: 7,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  MAX_CHILDREN: 30,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: exports.turretedswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.turretedswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.cruiserturret = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessreload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessreload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.wasp = {
  PARENT: [exports.genericTank],
  LABEL: "Wasp",
  DANGER: 7,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, 0.1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.power,
          g.morespray,
          g.lessreload,
          g.halfdamage
        ]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.quadcruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Sandstorm",
  DANGER: 7,
  FACING_TYPE: "autospin",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.frigate = {
  PARENT: [exports.genericTank],
  LABEL: "Frigate",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 11, 1.2, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.drone,
        MAX_CHILDREN: 25,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.frigate1 = makeAuto(exports.frigate, "Frigate");
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ]
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.autocruiser = makeAuto(exports.cruiser);

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 70,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.triseer = {
  PARENT: [exports.genericTank],
  LABEL: "Trimancer",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 3,
  MAX_CHILDREN: 55,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 16, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.minit]),
        TYPE: exports.trisunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 16, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.minit]),
        TYPE: exports.trisunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 16, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.minit]),
        TYPE: exports.trisunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.underpathogen = {
  PARENT: [exports.genericTank],
  LABEL: "Antibody",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 35,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 35,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.sorce = {
  PARENT: [exports.genericTank],
  LABEL: "Sorcerer",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 90,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [6, 14, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.underseerauto = makeAuto(exports.underseer, "Auto-Underseer");
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  MAX_CHILDREN: 100,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload
        ]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard"
      }
    }
  ]
};
exports.colony = {
  PARENT: [exports.genericTank],
  LABEL: "Colony",
  DANGER: 7,
  FACING_TYPE: "autospin",
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 6,
  MAX_CHILDREN: 140,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 6, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 6, 1.2, 8, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.autogunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 6, 1.2, 8, 0, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.autogunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 6, 1.2, 8, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.autogunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 6, 1.2, 8, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.autogunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [5, 6, 1.2, 8, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.lesshealth]),
        TYPE: exports.autogunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.pentseer2 = {
  PARENT: [exports.genericTank],
  LABEL: "Pentamancer",
  DANGER: 7,
  FACING_TYPE: "autospin",
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 5,
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 12, 1.2, 8, 0, 110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound]),
        TYPE: exports.pentasunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 12, 1.2, 8, 0, -110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound]),
        TYPE: exports.pentasunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound]),
        TYPE: exports.pentasunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 12, 1.2, 8, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound]),
        TYPE: exports.pentasunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 12, 1.2, 8, 0, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound]),
        TYPE: exports.pentasunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.male = {
  PARENT: [exports.genericTank],
  LABEL: "Maleficitor",
  DANGER: 7,
  PERSONAL_MESSAGE:
    "Your Drones Will Turn Invisible As Long As They Are Still.",
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  MAX_CHILDREN: 70,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.invissunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.eggseer = {
  PARENT: [exports.genericTank],
  LABEL: "Eggmancer",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 0,
  MAX_CHILDREN: 220,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 14, 1.1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.lesshealth,
          g.tiny,
          g.morereload
        ]),
        TYPE: exports.eggsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.grave = {
  PARENT: [exports.genericTank],
  LABEL: "Undergunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        MAX_CHILDREN: 70,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.grave2 = {
  PARENT: [exports.genericTank],
  LABEL: "Undertrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1
  },
  SHAPE: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.gunchip,
        AUTOFIRE: true,
        MAX_CHILDREN: 70,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.underlord = {
  PARENT: [exports.genericTank],
  LABEL: "Underlord",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  MAX_CHILDREN: 30,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.power, g.slow]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.twistmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  MAX_CHILDREN: 25,
  INDEPENDENT: true,
  FACING_TYPE: "turnWithSpeed",
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.lessreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil,
          g.lessreload,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 25,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.amoeba = {
  PARENT: [exports.genericTank],
  LABEL: "Amoeba",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18.5, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 25,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.pilot = {
  PARENT: [exports.genericTank],
  LABEL: "Pilot",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 12,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.boostminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.spawndrive = {
  PARENT: [exports.genericTank],
  LABEL: "Spawndrive",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  SKILL: skillSet({
    spd: 1
  }),
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 15,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.turretedminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.autospawner = makeAuto(exports.lilfact, "Auto-Spawner");
exports.machspawn = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Spawner",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.5, 7, 1, 6.5, 5, 0, 0]
    },
    {
      POSITION: [1, 9, 1, 15, 5, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 9,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.big]),
        TYPE: exports.machineminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 9, 1, 8, 5, 0, 0]
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.5, 7, 1, 6.5, -5, 0, 0]
    },
    {
      POSITION: [1, 9, 1, 15, -5, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 9,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.big]),
        TYPE: exports.machineminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 9, 1, 8, -5, 0, 0]
    }
  ]
};
exports.trapspawn = {
  PARENT: [exports.genericTank],
  LABEL: "Trappory",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 10,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.trapminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.flankspawn = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle Spawner",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 10,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.boostminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.trianglePart = {
  PARENT: [exports.genericTank],
  LABEL: "",
  TYPE: "bullet",
  BODY: {
    FOV: 1
  },
  COLOR: 35,
  SHAPE: 3
};
exports.squarePart = {
  PARENT: [exports.genericTank],
  LABEL: "",
  TYPE: "bullet",
  BODY: {
    FOV: 1
  },
  COLOR: 35,
  SHAPE: 4
};
exports.superspawn = {
  PARENT: [exports.genericTank],
  LABEL: "Plant",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [1, 18, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 10,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.spawnerminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0]
    }
  ]
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 30,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.manufact = {
  PARENT: [exports.genericTank],
  LABEL: "Manufacturer",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.7,
    FOV: 1.1
  },
  MAX_CHILDREN: 18,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 17, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 20, 1, 14.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 17, 1, 7, 0, 0, 0]
    }
  ]
};
exports.creator = {
  PARENT: [exports.genericTank],
  LABEL: "Creator",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1.9, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 0.5, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.weird,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.minedropper = {
  PARENT: [exports.genericTank],
  LABEL: "Minelayer",
  PERSONAL_MESSAGE:
    "Your Drones Will Turn Invisible As Long As They Are Still.",
  DANGER: 7,
  MAX_CHILDREN: 45,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 11, 2.5, 5.5, 0, 0, 0]
    },
    {
      POSITION: [14, 16, 0.5, 5.5, 0, 0, 0]
    },
    {
      POSITION: [7, 14, 0.5, 1.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.lessreload,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.walkover,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 5, 0, 0, 0]
    }
  ]
};
exports.mineplacer = {
  PARENT: [exports.genericTank],
  LABEL: "Booby Trap",
  DANGER: 7,
  PERSONAL_MESSAGE:
    "Your Drones Will Turn Invisible As Long As They Are Still.",
  STAT_NAMES: statnames.drone,
  MAX_CHILDREN: 30,
  BODY: {
    SPEED: base.SPEED * 0.9,
    FOV: 1.1
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 2.5, 9.5, 0, 0, 0]
    },
    {
      POSITION: [4, 10, 0.5, 9.5, 0, 0, 0]
    },
    {
      POSITION: [9, 16, 0.5, 4.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.lessreload,
          g.lessreload,
          g.halfreload
        ]),
        TYPE: exports.pit,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 9, 1, 8, 0, 0, 0]
    }
  ]
};
exports.machine = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.gatling = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Gatling Gun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.chain = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Chain Gun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.morespray]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.spray = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.morereload]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.automini = makeAuto(exports.mini);
exports.flankmini = makeFlankTrap(exports.mini, "Infantry");
exports.heavymini = {
  PARENT: [exports.genericTank],
  LABEL: "Hotshot",
  DANGER: 7,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 11, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 11, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.smoth = {
  PARENT: [exports.genericTank],
  LABEL: "Smotherer",
  DANGER: 8,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 7.5, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [28, 7.5, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [26, 7.5, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 7.5, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 7.5, 1, 0, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 7.5, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.fakeAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT	X   	Y 	ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0]
    }
  ]
};

exports.baseballbat = {
  PARENT: [exports.genericTank],
  LABEL: "Baseball Bat",
  DANGER: 8,
  SHAPE: 1,
  HAS_NO_RECOIL: true,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [48, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [46, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [44, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [42, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [38, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [36, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [30, 7.5, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [28, 7.5, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.huge]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [26, 7.5, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.huge]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [24, 7.5, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.huge]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [22, 7.5, 1, 0, 0, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [20, 7.5, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.giant]),
        TYPE: exports.baseball
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.hybridmini = makeHybrid(exports.mini, "Cropduster");
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.grower = {
  PARENT: [exports.genericTank],
  LABEL: "Grower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [23, 6.3, 1.6, 0, 0, 0, 0]
    },
    {
      POSITION: [12, 12.2, 1, 20.5, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.growbullet
      }
    },
    {
      POSITION: [12, 14.5, 1, 19, 0, 0, 0]
    }
  ]
};

exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroyop = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  HAS_NO_RECOIL: true,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.op,
          g.hyperspeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.destroypg2 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Destroyer (Page 2)",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.steamroll = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.75
  },
  LABEL: "Steamroller",
  GUNS: [
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.doublereload,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autodestroy = makeAuto(exports.destroy, "Auto-Destroyer");
exports.twister = {
  PARENT: [exports.genericTank],
  MAX_CHILDREN: 18,
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 14, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.twistmissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.terminator = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  LABEL: "Terminator",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 20, 1.9, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.big
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hexagon = {
  PARENT: [exports.genericTank],
  LABEL: "[Bullets]",
  VALUE: 600,
  SHAPE: 6,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 12,
    HEALTH: 15 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.octagon = {
  PARENT: [exports.genericTank],
  LABEL: "[Misc]",
  VALUE: 800,
  SHAPE: 8,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 18,
    HEALTH: 21 * basePolygonHealth,
    RESIST: 1.3,
    PENETRATION: 1.2
  },
  DRAW_HEALTH: true
};
exports.greenpentagon1 = {
  PARENT: [exports.genericTank],
  LABEL: "[Turrets]",
  VALUE: 300,
  SHAPE: 5,
  SIZE: 14,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1
  },
  DRAW_HEALTH: true
};
exports.griefer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  INVISIBLE: [0.09, 0.01],
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.65
  },
  LABEL: "Griefer",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  MAX_CHILDREN: 21,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Hiveshooter",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload
        ]),
        TYPE: exports.hive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hiveturret = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "Hive",
  CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.hivebomb
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.basehybrid = makeHybrid(exports.basic, "Basebrid");
exports.berserker = makeHybrid(exports.stalker, "Berserker");
exports.shotgun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [14, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 12, -1.3, 4, 0, 0, 0]
    }
  ]
};
(exports.wipeout = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Wipeout",
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.pound,
          g.big
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.shotgun,
          g.big
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.pound,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 10.5, -1.3, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.halfreload,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 14, -1.3, 4, 0, 0, 0]
    },
    {
      POSITION: [13, 6, 1.3, 4, 0, 0, 0]
    }
  ]
}),
  (exports.shotgunhoming = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Tracer",
    BODY: {
      ACCELERATION: base.ACCEL * 0.7
    },
    GUNS: [
      /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [14, 10.5, -1.3, 6, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [8, 12, -1.3, 4, 0, 0, 0]
      }
    ]
  });
exports.shotgundrone = makeHybrid(exports.shotgun, "Combatant");
exports.burst = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Burster",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 2, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.sniper,
          g.morespray
        ]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.sniper,
          g.morespray
        ]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.sniper,
          g.morespray,
          g.big
        ]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [17, 10, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [9, 10, -1.3, 4, 0, 0, 0]
    }
  ]
};
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Hailstorm",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    }
  ]
};

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.builderpg2 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder (Page 2)",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.fort = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Fort",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      POSITION: [22, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block
      }
    }
  ]
};
exports.excavate = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Excavator",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.76,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.sniper]),
        TYPE: exports.block
      }
    }
  ]
};
exports.architectgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 100,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto, g.lessreload]),
        TYPE: exports.block
      }
    }
  ]
};

exports.tribuilder = {
  PARENT: [exports.genericTank],
  LABEL: "Architect",
  BODY: {
    SPEED: base.SPEED * 1.05
  },
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.architectgun
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.architectgun
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.architectgun
    }
  ]
};
exports.playabletriangle = {
  PARENT: [exports.genericTank],
  LABEL: "[AI Sentries]",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.playabletriangle1 = {
  PARENT: [exports.genericTank],
  LABEL: "[Sentries]",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5
  },
  DRAW_HEALTH: true
};
exports.turretedob = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Deadly Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -11,
  DANGER: 1,
  DIE_AT_RANGE: false,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    DAMAGE: 1,
    RESIST: 100,
    RANGE: 600,
    STEALTH: 0
  },
  VALUE: 0,
  SIZE: 75,
  COLOR: 16,
  ACCEPTS_SCORE: false
};
exports.turretedobstacle = makeAuto(exports.turretedob, "Deadly Rock", {
  type: exports.auto5gunrecoil
});
exports.turretbullet = makeAuto(exports.bullet, "Turreted Bullet", {
  type: exports.slowautoTurret
});
exports.turretcompass = makeAuto(exports.compassbullet, "Turreted Bullet", {
  type: exports.slowautoTurret
});
exports.trapgun = makeAuto(exports.trap, "Turreted Trap", {
  type: exports.slowautoTurret
});
exports.megaturret = makeAuto(exports.bullet, "Turreted Bullet", {
  type: exports.slowautoTurret
});
exports.turrettwo = makeAuto(exports.basic, "Turret-2", {
  type: exports.oldAutoSmasherTurret
});
exports.turretthree = makeAuto(exports.basic, "Turret-3", {
  type: exports.bigauto4gun
});
exports.turretswarm = makeAuto(exports.basic, "Turret-Swarm", {
  type: exports.cruiserturret
});
exports.swarmarty = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Trooper",
  GUNS: [
    {
      POSITION: [14, 6, -1.7, 0, -4.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        LABEL: "Swarm"
      }
    },
    {
      POSITION: [14, 6, -1.7, 0, 4.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        LABEL: "Swarm"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    } /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
  ]
};
exports.inceptiongun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2.5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.auto,
          g.five,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    }
  ]
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Septa-Trapper",
    DANGER: 7,
    MAX_CHILDREN: 375,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  };
})();
exports.vand = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Vandal",
  PERSONAL_MESSAGE: "Your Traps Will Turn Invisible As Long As They Are Still.",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [18, 4, 0.5, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],

      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: [exports.block, { INVISIBLE: [0.08, 0.03] }]
      }
    }
  ]
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 50,
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lessreload]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Constructor",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.mega, g.lessreload]),
        TYPE: exports.block
      }
    }
  ]
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lessreload]),
        TYPE: exports.block
      }
    }
  ]
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 8,
  LABEL: "Bent Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0]
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0]
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 20, 0.6, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.lessreload]),
        TYPE: exports.boomerang
      }
    }
  ]
};
exports.boomerturret = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["nearestDifferentMaster"],
  DANGER: 7,
  LABEL: "Boomer",
  INDEPENDENT: true,
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 20, 0.6, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.halfreload,
          g.lessreload,
          g.power
        ]),
        TYPE: exports.nestboomerang
      }
    }
  ]
};
exports.FTBToArras = {
  PARENT: [exports.genericTank],
  LABEL: "Actual Minigun",
  SHAPE: 4,
  GUNS: [
    {
      POSITION: [110.769, 4.8, 1, -27.692, 0, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [110.769, 4.8, 1, -27.692, -6.923, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [110.769, 4.8, 1, -27.692, 6.923, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [16.615, 4.8, 1, 83.077, -6.923, 0, 26.167],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
        COLOR: 9
      }
    },
    {
      POSITION: [22.154, 25.6, 1, 83.077, 0, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [5.538, 25.6, 1, 62.308, 0, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [5.538, 25.6, 1, 48.462, 0, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [55.385, 16, 1, 41.538, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [13.846, 20.48, 1, 41.538, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [34.615, 12.8, 1, -69.231, 0, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [22.154, 25.6, 1, -41.538, -6.923, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [13.846, 8, 1, 2.769, 30.462, 90, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [13.846, 20.48, 1, 41.538, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [6.923, 20.48, 1, 62.308, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [41.538, 8, 1, 96.923, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [13.846, 20.48, 1, 96.923, 0, 180, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [27.692, 8, 1, -13.846, 45.692, 0, 0],
      PROPERTIES: {
        // color from rgb selector (will be displayed as gray)
        COLOR: 16
      }
    },
    {
      POSITION: [83.077, 64, 1, -91.385, 45.692, 0, 9],
      PROPERTIES: {
        COLOR: 18
      }
    },
    {
      POSITION: [41.538, 64, 1, -110.769, 45.692, 0, 9],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [16.615, 25.6, 1, 0, 85.846, 90, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [96.923, 4.8, 1, -83.077, 87.231, 7.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [6.923, 32, 1, 76.154, -110.769, 202.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [27.692, 80, 1, -110.769, 45.692, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [11.077, 16, 1, 110.769, -55.385, 180, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [41.538, 4.8, 1, -90, 13.846, 277.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [27.692, 8, 1, 13.846, -27.692, 277.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [34.615, 8, 1, -62.308, -22.154, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [34.615, 8, 1, -95.538, 20.769, 37.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [34.615, 8, 1, -96.923, 20.769, 37.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [34.615, 8, 1, -52.615, -94.154, 307.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [55.385, 8, 1, 103.846, 16.615, 180, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [27.692, 8, 1, 96.923, -27.692, 217.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [41.538, 8, 1, 55.385, 116.308, 142.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [16.615, 8, 1, -36, 146.769, 90, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [45.692, 8, 1, -13.846, 124.615, 90, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [18, 8, 1, -128.769, 27.692, 0, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [8.308, 6.4, 1, 30.462, 29.077, 180, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [4.154, 4.8, 1, 31.846, -34.615, 270, 0],
      PROPERTIES: {
        COLOR: 9
      }
    },
    {
      POSITION: [11.077, 12.8, 1, 41.538, -27.692, 277.5, 0],
      PROPERTIES: {
        COLOR: 9
      }
    }
  ]
};
exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.arsenal = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Arsenal",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 6, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 6, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [20.5, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.armsman = makeFlankTrap(exports.artillery, "Rampart");
exports.autoarty = makeAuto(exports.artillery, "Auto-Artillery");
exports.minishot = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Minishot",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -5, -3, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 5, 3, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Primary"
      }
    }
  ]
};
exports.huntart = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25
  },
  LABEL: "Ordnance",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.smartart = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Excalibur",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.compassbullet,
        LABEL: "Primary"
      }
    }
  ]
};
exports.jumpsmash = {
  PARENT: [exports.genericTank],
  LABEL: "Jump Smasher",
  DANGER: 7,
  PERSONAL_MESSAGE: "Left-Click To Jump.",
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.8,
    DAMAGE: base.DAMAGE * 1.1,
    HEALTH: base.HEALTH * 3.25
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [7.5, 0, 0, 0, 360, 1],
      TYPE: exports.jumpsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [4, 4, 1.1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lotsmorrecoil,
          g.fake,
          g.lotsmorrecoil,
          g.lotsmorrecoil,
          g.lotsmorrecoil,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.bullet
      },
      IS_SMASHER: true,
      SKILL_CAP: [
        smshskl,
        0,
        0,
        0,
        0,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl
      ],
      STAT_NAMES: statnames.smasher
    }
  ]
};
exports.cannongun = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Howitzer",
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.assass]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [21, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.assass]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [25, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.morespeed,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.launcher = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Launcher",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [15, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.minimissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.bentlaunch = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Launcher",
  BODY: {
    FOV: base.FOV * 1.15
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -2, 0, 35, 0]
    },
    {
      POSITION: [18, 12, 1, -2, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.minimissile
      }
    },
    {
      POSITION: [20, 10, 1, -2, 0, -35, 0]
    },
    {
      POSITION: [18, 12, 1, -2, 0, -35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.minimissile
      }
    }
  ]
};
exports.launcherpage2 = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Launcher (Page 2)",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [15, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload
        ]),
        TYPE: exports.minimissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.arbalest = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Arbalest",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, -0.5, 12, 0, 0, 0]
    },
    {
      POSITION: [18, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.minimissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.bumper = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.11
  },
  LABEL: "Bumper",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 15, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [14, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessdamage
        ]),
        TYPE: exports.minimissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.autolauncher = makeAuto(exports.launcher);
exports.pointer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Pointer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 5, 0, 0, 0]
    },
    {
      POSITION: [15, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessdamage
        ]),
        TYPE: exports.pointerbullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Skimmer",
  DANGER: 7,
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.morespeed,
          g.halfreload
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.rifle,
          g.lessspeed,
          g.halfreload,
          g.halfreload,
          g.lessdamage,
          g.lessdense,
        ]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.execute = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Executioner",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    }
  ]
};
exports.thrust = {
  PARENT: [exports.genericTank],
  LABEL: "Thruster",
  PERSONAL_MESSAGE: "Right-Click To Propel Your Bullets.",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.15
  },

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 12, -0.9, 10, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 12, 1, 6, 0, 0, 0]
    },
    {
      POSITION: [13, 12, -1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.rifle,
          g.halfreload,
          g.slow,
          g.slow,
          g.slow,
          g.halfreload
        ]),
        TYPE: exports.thrustbullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.dropper = {
  PARENT: [exports.genericTank],
  LABEL: "Dropper",
  SKILL: skillSet({
    spd: 1
  }),
  DANGER: 7,
  MAX_CHILDREN: 15,
  BODY: {
    FOV: base.FOV * 1.13
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21.5, 12, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.slow,
          g.slow,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.trapbullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14.5, -1.2, 4, 0, 0, 0]
    }
  ]
};
exports.spreadling = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadling",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -0.8, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16.5, 4, 1, 0, -1.0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [18, 4, 1, 0, -1.6, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [15, 4, 1, 0, 0.8, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16.5, 4, 1, 0, 1.0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [18, 4, 1, 0, 1.6, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 8, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
          g.lowpower
        ]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
};
exports.driver = {
  PARENT: [exports.genericTank],
  LABEL: "Driver",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  DANGER: 5,
  BODY: {
    SPEED: base.SPEED * 1.1
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.flankpound = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Bodyguard",
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.pound, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.moth = {
  PARENT: [exports.genericTank],
  LABEL: "Moth",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 8, 1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autoflankpound = makeAuto(exports.flankpound);
exports.flankdestroyer = {
  PARENT: [exports.genericTank],
  LABEL: "Bouncer",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
    ACCELERATION: base.ACCEL * 0.75
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.pound,
          g.lessreload,
          g.destroy
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 14, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.pound,
          g.lessreload,
          g.destroy
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 14, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.pound,
          g.lessreload,
          g.destroy
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  MAX_CHILDREN: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.whirlwind = {
  PARENT: [exports.genericTank],
  LABEL: "Whirlwind",
  DANGER: 7,
  MAX_CHILDREN: 400,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.hurricane,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.hurricane,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.hurricane,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.puregunner,
          g.hurricane,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.tornado = {
  PARENT: [exports.genericTank],
  LABEL: "Tornado",
  DANGER: 8,
  SKILL: skillSet({
    spd: 1
  }),
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.basicpagetwo = {
  PARENT: [exports.genericTank],
  LABEL: "Cloaker",
  DANGER: 5,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  INVISIBLE: [0.09, 0.01],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.basicpagethree = {
  PARENT: [exports.genericTank],
  LABEL: "Cloaker (Page 2)",
  DANGER: 5,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  INVISIBLE: [0.09, 0.01],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.shadowtankbody = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0,
    dam: 0,
    pen: 0,
    str: 0,
    spd: 0,
    atk: 0,
    hlt: 0,
    shi: 0,
    rgn: 0,
    mob: 0
  })
};
exports.targetsymbol2 = {
  PARENT: [exports.shadowtankbody],
  LABEL: "",
  SHAPE: 0
};
exports.shadowtank = {
  PARENT: [exports.shadowtankbody],
  LABEL: "Shadow Tank",
  DANGER: 3,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol2
    }
  ],
  INVISIBLE: [0.017, 0.01],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.fake]),
        TYPE: exports.attention,
        AUTOFIRE: false,
        MAX_CHILDREN: 10
      }
    }
  ]
};
exports.autobasic1 = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autobasic = makeAuto(exports.autobasic1);
exports.autobasic2 = makeAuto(exports.autobasic1, "Auto-Basic (Page 2)");
exports.hurricane = {
  PARENT: [exports.genericTank],
  LABEL: "Cyclone",
  MAX_CHILDREN: 500,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.storm = {
  PARENT: [exports.genericTank],
  LABEL: "Storm",
  MAX_CHILDREN: 390,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 36, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 108, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 252, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 324, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.fog = {
  PARENT: [exports.genericTank],
  LABEL: "Fog",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  MAX_CHILDREN: 390,
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  INVISIBLE: [0.09, 0.01],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 36, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 108, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 252, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 324, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.autostorm = makeAuto(exports.storm);
exports.supercyclone = {
  PARENT: [exports.genericTank],
  LABEL: "Typhoon",
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 700,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 15, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 45, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 75, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 105, 0.35],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 135, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 165, 0.55],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 195, 0.65],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 225, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 255, 0.85],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 285, 0.95],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 315, 1.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 1.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 345, 1.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane
        ]),
        TYPE: exports.bullet,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machinegunnercloser = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner Closer",
  SIZE: 20,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  SKILL: skillSet({
    rld: 0.2,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.4,
    SPEED: 8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12.5, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.verydense,
          g.morespeed,
          g.bitmorereload,
          g.morereload,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.verydense,
          g.morespeed,
          g.machgun,
          g.bitmorereload,
          g.morereload,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload,
          g.verydense,
          g.morespeed,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload,
          g.op,
          g.verydense,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
          g.bitmorereload,
          g.morereload,
          g.op,
          g.verydense,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  LABEL: "Trapper",
  DANGER: 5,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autoTrapper2 = makeAuto(exports.trapper);
exports.snipertrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper Trapper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.2
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.sniper]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.chasseur = {
  PARENT: [exports.genericTank],
  LABEL: "Chasseur",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.4
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.sniper, g.assass]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.twintrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Trapper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 5.5, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, -5.5, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.benttrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, -2, -20, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 2, 20, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.twinmegatrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Mega-Trapper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, 1, 0, 5.5, 0, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, 1, 0, -5.5, 0, 0]
    },
    {
      POSITION: [3, 9, 1.7, 15, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.proximity = {
  PARENT: [exports.genericTank],
  LABEL: "Proximity",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 2.1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 2.5, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfdamage]),
        TYPE: exports.proxtrap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.megatrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Trapper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.megatrapguard = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  LABEL: "Mega-Trap Guard",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 11, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.turrettrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Trapceptioner",
  DANGER: 7,
  MAX_CHILDREN: 200,
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  STAT_NAMES: statnames.trap,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega, g.halfreload]),
        TYPE: exports.trapgun,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autotrapper = makeAuto(exports.megatrapper, "Auto-Mega-Trapper", {
  type: exports.autoTurret
});
exports.gigatrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.75
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 16, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 16, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.tritrap = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapper",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.stronghold = {
  PARENT: [exports.genericTank],
  LABEL: "Stronghold",
  DANGER: 7,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: base.SPEED * 0.76
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 60, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 300, 190, 0],
      TYPE: exports.auto3gun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 6, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 6, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 6, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 6, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 6, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.trimega = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Mega Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.75
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 10, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 10, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.mega]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress",
  DANGER: 7,
  MAX_CHILDREN: 400,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"]
          }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"]
          }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [
          exports.swarm,
          {
            CONTROLLERS: ["canRepel"]
          }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.hexatrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa-Trapper",
  MAX_CHILDREN: 325,
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 60, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 180, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 300, 0.5]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.hexatrap = makeAuto(exports.hexatrapper, "Hexa-Trapper");

exports.roccet = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    SPEED: 15,
    RANGE: 160,
    DAMAGE: 1,
    PENETRATION: 1.5
  },

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 11, 1.5, 0, 0, 180, 10],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.mach,
          g.halfreload,
          g.morespray,
          g.halfreload
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};

exports.rocketeer = {
  PARENT: [exports.genericTank],
  MAX_CHILDREN: 25,
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Rocketeer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.8, 10, 1.3, 14.5, 0, 0, 0]
    },
    {
      POSITION: [17, 12, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.roccet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.hyper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  MAX_CHILDREN: 25,
  BODY: {
    SPEED: base.SPEED * 1.15,
    DAMANGE: base.DAMAGE * 10,
    HEALTH: base.HEALTH * 18
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Firework",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -1.3, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.halfreload,
          g.lessreload,
          g.skim
        ]),
        TYPE: exports.hypermissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};

exports.guarder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Cannonry",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -9.5, -9.5, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 9.5, 9.5, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 10, 0, 0, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    },
    {
      POSITION: [19, 10, 0, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.swsmash = {
  PARENT: [exports.genericTank],
  LABEL: "Apiary",
  BODY: {
    SPEED: base.SPEED * 1.1,
    DAMAGE: base.DAMAGE * 1.1,
    SHIELD: base.SHIELD * 1.1,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 32.1,
    ACCELERATION: base.ACCEL * 1.05,
    DENSITY: base.DENSITY * 1.1
  },
  SKILL: skillSet({
    atk: 1.2,
    hlt: 1.2,
    shi: 1.2,
    rgn: 1.2,
    mob: 1.2,
    rld: 1.2
  }),
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.smashhive
    }
  ],
  IS_SMASHER: true,
  SKILL_CAP: [
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl
  ],
  STAT_NAMES: statnames.smasher
};
exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.trailblazer = {
  PARENT: [exports.genericTank],
  LABEL: "Trailblazer",
  BODY: {
    HEALTH: base.HEALTH * 0.9,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  DANGER: 7,
  STAT_NAMES: statnames.lancer,
  GUNS: [
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.tritwin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.trifront,
          g.bitlessdamage
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.trifront,
          g.bitlessdamage
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.tripage2 = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle (Page 2)",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.raptor = {
  PARENT: [exports.genericTank],
  LABEL: "Taser",
  PERSONAL_MESSAGE: "Right Click To Fire The Main Gun.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        LABEL: "Minigun",
        ALT_FIRE: true
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        LABEL: "Minigun",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [20, 7.5, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        LABEL: "Minigun",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.hornet = {
  PARENT: [exports.genericTank],
  LABEL: "Infuser",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
    FOV: 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.marine = {
  PARENT: [exports.genericTank],
  LABEL: "Marine",
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  INVISIBLE: [0.08, 0.03],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 105, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 255, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.doublerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    DAMAGE: base.DAMAGE * 0.5,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.fallenbooster = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Booster",
  COLOR: 7,
  TEAM: 5,
  CAN_BE_ON_LEADERBOARD: true,
  SIZE: 20,
  DANGER: 10,
  SKILL: skillSet({
    rld: 1,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    pen: 1,
    hlt: 1,
    atk: 1
  }),
  BODY: {
    FOV: 1.1,
    SHIELD: base.SHIELD * 1.2,
    DENSITY: base.DENSITY * 0.3,
    SPEED: base.SPEED * 1.1
  },
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BROADCAST_MESSAGE: "A Fallen Booster has been defeated!",
  HITS_OWN_TYPE: "hard",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.fallenanni = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Annihilator",
  COLOR: 7,
  TEAM: 5,
  CAN_BE_ON_LEADERBOARD: true,
  SIZE: 20,
  DANGER: 10,
  SKILL: skillSet({
    rld: 1,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    pen: 1,
    hlt: 1,
    atk: 1
  }),
  BODY: {
    FOV: 1.15,
    SHIELD: base.SHIELD * 1.25,
    DENSITY: base.DENSITY * 0.3,
    SPEED: base.SPEED * 1.05
  },
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BROADCAST_MESSAGE: "A Fallen Annihilator has been defeated!",
  HITS_OWN_TYPE: "hard",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 20, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.speeder = {
  PARENT: [exports.genericTank],
  LABEL: "Speeder",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    DAMAGE: base.DAMAGE * 0.5,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.weak,
          g.trifront,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 180, 0.01],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.police = {
  PARENT: [exports.genericTank],
  LABEL: "Undercover Cop",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    DAMAGE: base.DAMAGE * 0.3,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.3
  },
  DANGER: 9,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [5.5, 0, -6.1, 0, 360, 1],
      TYPE: exports.drivesymbol
    },
    {
      POSITION: [5.5, 0, -3, 0, 360, 1],
      TYPE: [exports.drivesymbol, { COLOR: 30 }]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [5.5, 0, 6.1, 0, 360, 1],
      TYPE: exports.drivesymbol
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [5.5, 0, 3, 0, 360, 1],
      TYPE: [exports.drivesymbol, { COLOR: 31 }]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 140, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 220, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.policeLight13 = {
  PARENT: [exports.genericEntity],
  LABEL: "Police Light",
  SHAPE: 6,
  COLOR: 30
};
exports.policeLight23 = {
  PARENT: [exports.genericEntity],
  LABEL: "Police Light",
  SHAPE: 4,
  COLOR: 31
};
exports.policeLight33 = {
  PARENT: [exports.genericEntity],
  LABEL: "Police Light",
  SHAPE: 4,
  COLOR: 31
};
exports.policeLight43 = {
  PARENT: [exports.genericEntity],
  LABEL: "Police Light",
  SHAPE: 6,
  COLOR: 30
};
exports.boosterUndercover = {
  PARENT: [exports.booster],
  LABEL: "UNDERCOVER COP",
  NAME: "TEAM POLICE",
  BODY: {
    HEALTH: base.HEALTH * 1.1,
    DENSITY: base.DENSITY * 2,
    SPEED: base.SPEED * 1.1,
    FOV: 1.35
  },
  SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 8, 0, 0, 1],
      TYPE: exports.policeLight13
    },
    {
      POSITION: [6, 0, -8, 0, 0, 1],
      TYPE: exports.policeLight43
    },
    {
      POSITION: [6, 0, 3, 0, 0, 1],
      TYPE: exports.policeLight23
    },
    {
      POSITION: [6, 0, -3, 0, 0, 1],
      TYPE: exports.policeLight33
    }
  ]
};

exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.baseProtector3 = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  TYPE: "wall",
  SIZE: 75,
  DAMAGE_CLASS: 1,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 100000,
    DAMAGE: 11,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 101,
    FOV: 1.2,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.auto4gunrecoil
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.auto4gunrecoil
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.auto4gunrecoil
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.auto4gunrecoil
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};
exports.baseProtector4 = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 75,
  TYPE: "wall",
  HAS_NO_RECOIL: true,
  DAMAGE_CLASS: 1,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 100000,
    DAMAGE: 11,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 101,
    FOV: 1.2,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.auto5gunrecoilbase
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.auto5gunrecoilbase
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.auto5gunrecoilbase
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.auto5gunrecoilbase
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.guider = {
  PARENT: [exports.genericTank],
  LABEL: "Guider",
  BODY: {
    FOV: base.FOV * 1.21
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 4, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.guiderbullet
      }
    }
  ]
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        LABEL: "Trap",
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bomber.BODY = {
  SPEED: base.SPEED
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  PERSONAL_MESSAGE: "Right Click To Fire The Main Gun.",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
        LABEL: "Sniper",
        ALT_FIRE: true
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.osprey = {
  PARENT: [exports.genericTank],
  LABEL: "Osprey",
  PERSONAL_MESSAGE: "Right Click To Fire The Main Gun.",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.eagle = {
  PARENT: [exports.genericTank],
  LABEL: "Eagle",
  PERSONAL_MESSAGE: "Right-Click To Fire The Main Gun.",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "Dual",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.swivel3 = {
  PARENT: [exports.genericTank],
  LABEL: "Swivel-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 1],
      TYPE: exports.swivel3gun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 1],
      TYPE: exports.swivel3gun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 1],
      TYPE: exports.swivel3gun
    }
  ]
};
exports.autoauto = makeAuto(exports.auto3);
exports.inception3 = {
  PARENT: [exports.genericTank],
  LABEL: "Autoceptioner",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.inceptiongun
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.inceptiongun
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.inceptiongun
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ]
};
exports.auto3mach = {
  PARENT: [exports.genericTank],
  LABEL: "Machine-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.machineAutoTurret
    }
  ]
};
exports.half = {
  PARENT: [exports.genericTank],
  LABEL: "Half n'Half",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto3twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.twinAutoTurret
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.twinAutoTurret
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.twinAutoTurret
    }
  ]
};
exports.auto3trap = {
  PARENT: [exports.genericTank],
  LABEL: "Illusioner",
  DANGER: 6,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 0, 0],
      TYPE: exports.oldAutoSmasherTurret
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.hebullet = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  TYPE: "bullet",
  BODY: {
    DAMAGE: -1 * wepDamageFactor
  },
  HITS_OWN_TYPE: "never",
  MOTION_TYPE: "healBullet"
};
exports.hebullet2 = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  TYPE: "bullet",
  BODY: {
    DAMAGE: 1.5 * wepDamageFactor
  },
  HITS_OWN_TYPE: "never",
  MOTION_TYPE: "healBullet"
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun
    }
  ]
};
exports.infection = {
  PARENT: [exports.genericTank],
  LABEL: "Contagium",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 10, 1.7, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.trap, g.lessreload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.customtank5 = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Sentinel",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18.5, 14.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morespeed]),
        TYPE: exports.bullet,
        AUTOFIRE: false,
        SYNC_SKILLS: true
      }
    },
    {
      POSITION: [13.5, 16.5, -1.15, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
        AUTOFIRE: false,
        SYNC_SKILLS: true
      }
    }
  ]
};
exports.trispray = {
  PARENT: [exports.genericTank],
  LABEL: "Acrobat",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, -72, 90, 0],
      TYPE: exports.auto5gun,
      CONTROLLERS: ["nearestDifferentMaster"],
      AUTOFIRE: true,
      INDEPENDENT: true
    },
    {
      POSITION: [11, 8, 0, 72, 90, 0],
      TYPE: exports.auto5gun,
      CONTROLLERS: ["nearestDifferentMaster"],
      AUTOFIRE: true,
      INDEPENDENT: true
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};

exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.destroyer2 = {
  BODY: {
    SPEED: base.SPEED * 0.95
  },
  PARENT: [exports.genericTank],
  LABEL: "Giga-2",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.destroyautogun
    },
    {
      POSITION: [14, 8, 0, 180, 190, 0],
      TYPE: exports.destroyautogun
    }
  ]
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sniper-3",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Gunner-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.testauto = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto Tank",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.harpoon = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Harpoon",
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.assass,
          g.threequartersrof,
          g.fast
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [8, 12, -1.3, 5, 0, 0, 0]
    }
  ]
};
exports.flanktrap = makeFlankTrap(exports.basic, "Trap Guard");
exports.triflanktrap = makeTriFlankTrap(exports.basic, "Tri-Trap Guard");
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.hiveminddrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 4,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet
      }
    }
  ]
};
exports.automindminion = makeAuto(exports.hiveminddrone);
exports.subduerdrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.twindrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessdamage]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pelletdrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.pelletguard = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Pellet Guard",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0]
    }
  ]
};
exports.lanceminddrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.snipeminddrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.machineminddrone = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.miniadmin = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  MAX_CHILDREN: 20,
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "hangOutNearMaster"],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.bushwhack = makeFlankTrap(exports.sniper, "Bushwhacker");
exports.invisflanktrap = makeFlankTrap(
  {
    PARENT: [exports.genericTank],
    PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
    INVISIBLE: [0.08, 0.03],
    TURRETS: [
      {
        /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.targetsymbol
      }
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  },
  "Watcher"
);

// NPCS:
exports.crasher = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "fleeAtLowHealth"],
  AI: {
    NO_LEAD: true
  },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 3,
    PENETRATION: 1.5,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  GIVE_KILL_MESSAGE: false,
  DRAW_HEALTH: true
};
exports.playablecrasher = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "[Elite Crashers]",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    spd: 1
  }),
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 0.01,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  GIVE_KILL_MESSAGE: false,
  DRAW_HEALTH: true
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 8,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "minion",
    "mapTargetToGoal",
    "fleeAtLowHealth"
  ],
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  AI: {
    NO_LEAD: true
  },
  BODY: {
    FOV: 1.2,
    HEALTH: base.HEALTH * 1.1,
    ACCEL: 0.006,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: false
};
exports.sentry1 = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 8,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  AI: {
    NO_LEAD: true
  },
  BODY: {
    FOV: 1.2,
    HEALTH: base.HEALTH * 1.1,
    ACCEL: 0.006,
    SPEED: base.SPEED * 0.5
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: false
};
exports.mazewall2 = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  HITS_OWN_TYPE: "never",
  LABEL: "Pusher",
  SIZE: 30,
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 90000,
    SHIELD: 90000,
    REGEN: 10000,
    DAMAGE: 1,
    SPEED: 30,
    RESIST: 100,
    STEALTH: 0,
    FOV: 1.9
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.spectator = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  INVISIBLE: [0.09, 0.01],
  DAMAGE_CLASS: 1,
  TYPE: "wall",
  SIZE: 1,
  LABEL: "Spectator B",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 0,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 10,
    DAMAGE: 1,
    FOV: 3,
    RESIST: 100,
    STEALTH: 0
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};

exports.distractionturret = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  INVISIBLE: [0.09, 0.01],
  DAMAGE_CLASS: 1,
  DANGER: 20,
  SIZE: 1,
  LABEL: "Distraction",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 0,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 10,
    DAMAGE: 1,
    FOV: 3,
    RESIST: 100,
    STEALTH: 0
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.distraction = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  INVISIBLE: [0.09, 0.01],
  DAMAGE_CLASS: 1,
  TYPE: "wall",
  SIZE: 1,
  LABEL: "Diversion",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 0,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 10,
    DAMAGE: 1,
    FOV: 3,
    RESIST: 100,
    STEALTH: 0
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.distractionturret
    }
  ],
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.wat = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  INVISIBLE: [0.01, 0.01],
  DAMAGE_CLASS: 1,
  TYPE: "wall",
  SIZE: 1,
  LABEL: "Oracle",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 1,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 20,
    DAMAGE: 1,
    FOV: 8,
    RESIST: 100,
    STEALTH: 0
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.whattheheck = {
  PARENT: [exports.genericTank],
  CAN_GO_OUTSIDE_ROOM: true,
  DAMAGE_CLASS: 1,
  TYPE: "wall",
  SIZE: 9,
  LABEL: "Ugly Spectator",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: [
    [0.68, -0.56],
    [0.16, -0.64],
    [0.16, -0.01],
    [-0.38, 0.01],
    [-0.41, 0.96],
    [-1, 1],
    [-1.05, 0],
    [-0.99, -0.58],
    [0.67, -0.56],
    [3.02, -0.69],
    [2.81, 0.88],
    [2.32, 0.95],
    [2.28, -0.62],
    [3.77, -0.79],
    [3.76, -0.08],
    [2.29, -0.14],
    [2.27, -0.61],
    [1.6, -0.57],
    [1.75, 0.83],
    [0.67, 0.9],
    [0.72, 0.08]
  ],
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 20,
    DAMAGE: 1,
    FOV: 1.2,
    RESIST: 100,
    STEALTH: 0
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.dominatorbody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.dominator = {
  PARENT: [exports.genericDominator],
  LABEL: "Dominator",
  NAME: "Dominator",
  SHAPE: 0,
  SIZE: 75,
  TYPE: "dominator",
  DAMAGE_CLASS: 0,
  DANGER: 0,
  ACCEPTS_SCORE: false,
  GIVE_KILL_MESSAGE: false,
  CAN_BE_ON_LEADERBOARD: false,
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["nearestDifferentMaster", "spinwhenidle"],
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    hlt: 0.5,
    spd: 1,
    str: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 2200,
    DAMAGE: 15,
    PENETRATION: 1,
    SHIELD: 0,
    REGEN: 0.01,
    FOV: 1.25,
    PUSHABILITY: 0,
    HETERO: 0
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 360, 0],
      TYPE: exports.dominatorbody
    }
  ]
};
exports.crossbow = {
  PARENT: [exports.genericTank],
  LABEL: "Crossbow",
  BODY: {
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3, 1, 0, -4, -15, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [15, 3, 1, 0, 4, 15, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -4, -7, 0.334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 4, 7, 0.334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [20, 4, 1, 0, 3.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [20, 4, 1, 0, -3.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.silencer]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.lessreload
        ]),
        TYPE: exports.bullet,
        LABEL: "Primary"
      }
    }
  ]
};
exports.SteamrollerDominator = {
  PARENT: [exports.dominator],
  LABEL: "Shotgun Dominator",
  GUNS: [
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [14, 8.5, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [8, 8.5, -1.3, 4, 0, 0, 0]
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.skimmerDominator = {
  PARENT: [exports.dominator],
  LABEL: "Sprayer Dominator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22.5, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.lessreload,
          g.morespray,
          g.minit
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13.5, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morereload,
          g.morespray,
          g.minit
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.steamrollerdom = {
  PARENT: [exports.dominator],
  LABEL: "Steamroller Dominator",
  GUNS: [
    {
      POSITION: [13, 4.3, 1, 6.25, 0, 0, 0]
    },
    {
      POSITION: [5.3, 8.5, 1, 17, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.morespeed,
          g.morespeed,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};
exports.trapperdom = {
  PARENT: [exports.dominator],
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.slow, g.slow]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 45, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 135, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.slow,
          g.slow,
          g.lowpower
        ]),
        TYPE: exports.trap,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 225, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 270, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [3.5, 3.75, 1, 8, 0, 315, 0]
    },
    {
      POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fake]),
        TYPE: exports.trap,
        AUTOFIRE: false
      }
    }
  ]
};
exports.gunnerdom = {
  PARENT: [exports.dominator],
  LABEL: "Gunner Dominator",
  GUNS: [
    {
      POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.nail]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.nail]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15.85, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.nail]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
    }
  ]
};

exports.destroyerdom = {
  PARENT: [exports.dominator],
  LABEL: "Destroyer Dominator",
  SKILL: skillSet({
    rld: 0.1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  GUNS: [
    {
      POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0]
    }
  ]
};
exports.sniperdom = {
  PARENT: [exports.dominator],
  LABEL: "Sniper Dominator",
  SKILL: skillSet({
    rld: 0.1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1
  }),
  GUNS: [
    {
      POSITION: [21.25, 5.75, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 5.75, -1.8, 7.75, 0, 0, 0]
    }
  ]
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  INDEPENDENT: false,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.trapTurretcrash = {
  PARENT: [exports.genericTank],
  LABEL: "Sunchip",
  TYPE: "wall",
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, -1.2, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.verydense,
          g.verydense,
          g.verydense,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bee
      }
    }
  ]
};
exports.purplegun = {
  PARENT: [exports.genericTank],
  LABEL: "Sunchip",
  HAS_NO_RECOIL: true,
  INDEPENDENT: true,
  MAX_CHILDREN: 9,
  BODY: {
    FOV: 1.21
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, -1.2, 12, 0, 0, 0],
      MAX_CHILDREN: 9,
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.verydense,
          g.verydense,
          g.verydense,
          g.fast,
          g.halfdamage,
          g.halfreload
        ]),
        TYPE: exports.bee
      }
    }
  ]
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  LABEL: "Swarm Sentry",
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.morereload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sentrySwarm1 = {
  PARENT: [exports.sentry1],
  LABEL: "Swarm Sentry",
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.morereload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.guardian = {
  PARENT: [exports.sentry],
  LABEL: "Guardian",
  SIZE: 20,
  BODY: {
    FOV: 0.9,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 15,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  BROADCAST_MESSAGE: "The Guardian of the Pentagons has been defeated!",
  DANGER: 8,
  GUNS: [
    {
      POSITION: [4, 15, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.morereload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.sentryTrapper = {
  PARENT: [exports.sentry],
  LABEL: "Trap Sentry",
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.sentryTrapper1 = {
  PARENT: [exports.genericTank],
  SHAPE: 3,
  LABEL: "Trap Sentry",
  DANGER: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.sentryGun = makeAuto(exports.sentry, "Heavy Sentry", {
  type: exports.heavy3gun,
  size: 12
});
exports.sentryNuke = makeAuto(exports.sentry, "Sniper Sentry", {
  type: exports.sniper,
  size: 12
});
exports.sentryThrow = makeAuto(exports.sentry, "Triplet Sentry", {
  type: exports.bigauto4gun,
  size: 12
});
exports.sentryBomb = makeAuto(exports.sentry, "Shotgun Sentry", {
  type: exports.shotgun,
  size: 12
});
exports.sentryTrap = makeAuto(exports.sentry, "Gunner Sentry", {
  type: exports.auto4gun,
  size: 12
});
exports.sentryPellet = makeAuto(exports.sentry, "Machine Gun Sentry", {
  type: exports.machine,
  size: 12
});
exports.sentryShock = makeAuto(exports.sentry, "Auto Sentry", {
  type: exports.basic,
  size: 12
});
exports.sentryGun1 = makeAuto(exports.sentry1, "Heavy Sentry", {
  type: exports.heavy3gun,
  size: 12
});
exports.sentryNuke1 = makeAuto(exports.sentry1, "Sniper Sentry", {
  type: exports.sniper,
  size: 12
});
exports.sentryThrow1 = makeAuto(exports.sentry1, "Triplet Sentry", {
  type: exports.bigauto4gun,
  size: 12
});
exports.sentryBomb1 = makeAuto(exports.sentry1, "Shotgun Sentry", {
  type: exports.shotgun,
  size: 12
});
exports.sentryTrap1 = makeAuto(exports.sentry1, "Gunner Sentry", {
  type: exports.auto4gun,
  size: 12
});
exports.sentryPellet1 = makeAuto(exports.sentry1, "Machine Gun Sentry", {
  type: exports.machine,
  size: 12
});
exports.sentryShock1 = makeAuto(exports.sentry1, "Auto Sentry", {
  type: exports.basic,
  size: 12
});

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0,
    dam: 0,
    pen: 0,
    str: 0,
    spd: 0,
    atk: 0,
    hlt: 0,
    shi: 0,
    rgn: 0,
    mob: 0
  }),
  LEVEL: 45,
  AI: {
    NO_LEAD: true
  },
  HITS_OWN_TYPE: "repel",
  BROADCAST_MESSAGE: "A visitor has left!"
};
exports.spectator1 = {
  PARENT: [exports.shadowtankbody],
  SIZE: 0.1,
  LABEL: "Spectator A",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 0,
  INVISIBLE: [0.01, 0.01],
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 10000,
    SPEED: 10,
    DAMAGE: 0,
    FOV: 3,
    RESIST: 100,
    STEALTH: 0
  },
  VALUE: 0,
  COLOR: 7,
  ACCEPTS_SCORE: false
};
exports.hivemind = {
  PARENT: [exports.genericTank],
  LABEL: "Hivemind",
  DANGER: 6,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.hiveminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.hivemind1 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-Mind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.automindminion,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.autohivemind = makeAuto(exports.hivemind1, "Auto-Mind");
exports.submind = {
  PARENT: [exports.genericTank],
  LABEL: "Submind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.subduerdrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.twinmind = {
  PARENT: [exports.genericTank],
  LABEL: "Twinmind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.twindrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.pelletmind = {
  PARENT: [exports.genericTank],
  LABEL: "Pelletmind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.pelletdrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.royale = {
  PARENT: [exports.genericTank],
  LABEL: "Royale",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.lanceminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 4,
        SYNCS_SKILLS: true
      }
    }
  ]
};
exports.machinemind = {
  PARENT: [exports.genericTank],
  LABEL: "Machinemind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.machineminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.snipemind = {
  PARENT: [exports.genericTank],
  LABEL: "Snipemind",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.lessreload, g.bitlessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.snipeminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.lancer = {
  PARENT: [exports.genericTank],
  LABEL: "Lancer",
  BODY: {
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  DANGER: 5,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.bayonet = {
  PARENT: [exports.genericTank],
  LABEL: "Bayonet",
  BODY: {
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  DANGER: 6,
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bastion = {
  PARENT: [exports.genericTank],
  LABEL: "Bastion",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.stiletto = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Stiletto",
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -3, -4, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 3, 4, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.slice = {
  PARENT: [exports.genericTank],
  LABEL: "Slicer",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.25,
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  STATNAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 6, 0.01, 14, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.bayonet2 = {
  PARENT: [exports.genericTank],
  LABEL: "Navigator",
  BODY: {
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  DANGER: 7,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 25,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.swordsman = {
  PARENT: [exports.genericTank],
  LABEL: "Swordsman",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 1.2,
    HEALTH: base.HEALTH * 1.5
  },
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer, g.power, g.moredamage]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [26, 20, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};

exports.autolance = makeAuto(exports.lancer, "Auto-Lancer", {
  type: exports.autoSmasherTurret
});
exports.autotestbed = makeAuto(exports.testbed, "Auto-Testbed", {
  type: exports.autoSmasherTurret
});
exports.autolance.SKILL_CAP = [
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl
];
exports.trilancer = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Lancer",
  DANGER: 6,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 120, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 240, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.hexalancer = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa-Lancer",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 1.1,
    SPEED: base.SPEED * 1.1
  },
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 60, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 120, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 180, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 240, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 300, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.flanklance = makeFlankTrap(exports.lancer, "Lance Guard");
exports.flanklance.SKILL_CAP = [
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl,
  dfltskl
];
exports.quillbug = {
  PARENT: [exports.genericTank],
  LABEL: "Quillbug",
  DANGER: 7,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.auto3gun
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 60, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 180, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 300, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.admin = {
  PARENT: [exports.genericTank],
  LABEL: "Administrator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 30,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth
        ]),
        TYPE: exports.miniadmin,
        AUTOFIRE: false,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.radar = {
  PARENT: [exports.genericTank],
  LABEL: "Radar",
  PERSONAL_MESSAGE: "Your Radar Will Assist In Tracking Enemy Locations.",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [29, 0, 0, 0, 360, 0],
      TYPE: exports.radarsymbol,
      CONTROLLERS: ["nearestDifferentMaster"]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 0],
      TYPE: exports.radarbeam
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.hitman = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  PERSONAL_MESSAGE: "Your Radar Will Assist In Tracking Enemy Locations.",
  LABEL: "Hitman",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [29, 0, 0, 0, 360, 0],
      TYPE: exports.radarsymbol,
      CONTROLLERS: ["nearestDifferentMaster"]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 0],
      TYPE: exports.radarbeam
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 180, 0],
      TYPE: exports.radarbeam
    }
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.sonar = {
  PARENT: [exports.genericTank],
  LABEL: "Sonar",
  PERSONAL_MESSAGE: "Your Radar Will Assist In Tracking Enemy Locations.",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.radarsymbol,
      CONTROLLERS: ["nearestDifferentMaster"]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 0],
      TYPE: exports.radarbeam
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 180, 0],
      TYPE: exports.radarbeam
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.periscope = {
  PARENT: [exports.genericTank],
  LABEL: "Periscope",
  INVISIBLE: [0.08, 0.03],
  PERSONAL_MESSAGE: "Stay Still To Turn Invisible.",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [29, 0, 0, 0, 360, 0],
      TYPE: exports.radarsymbol,
      CONTROLLERS: ["nearestDifferentMaster"]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 0],
      TYPE: exports.radarbeam
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.doppler = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  PERSONAL_MESSAGE: "Your Radar Will Assist In Tracking Enemy Locations.",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  LABEL: "Doppler",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [29, 0, 0, 0, 360, 0],
      TYPE: exports.radarsymbol,
      CONTROLLERS: ["nearestDifferentMaster"]
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 0],
      TYPE: exports.radarbeam
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 180, 0],
      TYPE: exports.radarbeam
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.megamind = {
  PARENT: [exports.genericTank],
  LABEL: "Megamind",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.lessdamage]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.lesshealth
        ]),
        TYPE: exports.hiveminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.commander = {
  PARENT: [exports.genericTank],
  LABEL: "Commander",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [exports.autoswarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 82
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 80
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 80
      }
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 60, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 18,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 18,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 300, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 18,
        SYNCS_SKILLS: true,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};

exports.madman = {
  PARENT: [exports.genericTank],
  LABEL: "Madman",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [30, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.morehealth,
          g.morehealth,
          g.destroy,
          g.big
        ]),
        TYPE: exports.hiveminddrone,
        AUTOFIRE: false,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: {
    chase: true
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          {
            LABEL: "Crasher",
            VARIES_IN_SIZE: true,
            DRAW_HEALTH: true
          }
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.summoner = {
  PARENT: [exports.miniboss],
  LABEL: "Summoner",
  CAN_BE_ON_LEADERBOARD: true,
  STAT_NAMES: statnames.necro,
  COLOR: 13,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SHAPE: 4,
  MAX_CHILDREN: 110,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 8, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    }
  ]
};
exports.summonai = {
  PARENT: [exports.genericTank],
  LABEL: "Summoner",
  CAN_BE_ON_LEADERBOARD: true,
  STAT_NAMES: statnames.necro,
  COLOR: 13,
  SIZE: 20,
  HAS_NO_RECOIL: true,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 0.2,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 70,
    ACCELERATION: base.ACCEL * 1.1,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DENSITY: base.DENSITY * 14
  },
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "Wanderlust"],
  AI: { NO_LEAD: true },
  SHAPE: 4,
  MAX_CHILDREN: 235,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 8, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    },
    {
      POSITION: [3, 8, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.pound, g.drone, g.sunchip]),
        TYPE: exports.gunchip
      }
    }
  ]
};
exports.nestkeeperai = {
  PARENT: [exports.genericTank],
  LABEL: "Nest Keeper",
  CAN_BE_ON_LEADERBOARD: true,
  DANGER: 11,
  SIZE: 45,
  SHAPE: 5,
  COLOR: 14,
  STAT_NAMES: statnames.generic,
  HAS_NO_RECOIL: true,
  VARIES_IN_SIZE: true,
  VALUE: 300000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.4,
    pen: 0.4,
    dmg: 1,
    str: 1,
    spd: 0.2,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    SPEED: base.SPEED * 0.9,
    HEALTH: base.HEALTH * 73,
    SHIELD: base.SHIELD * 1.5,
    REGEN: base.REGEN,
    ACCELERATION: base.ACCEL * 0.3,
    DENSITY: base.DENSITY * 20
  },
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "spinwhenidle"],
  AI: { NO_LEAD: true },
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 6, 1.2, 8, 0, 110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        INDEPENDENT: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, -110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        INDEPENDENT: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        INDEPENDENT: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        INDEPENDENT: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        INDEPENDENT: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9.1, 0, 72, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 144, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 216, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 288, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 360, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.boomerturret,
        {
          INDEPENDENT: false,
          COLOR: 14
        }
      ]
    }
  ]
};
exports.crafter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Crafter",
  GUNS: [
    {
      POSITION: [19.5, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 19.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        LABEL: "Block",
        TYPE: exports.block
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    }
  ]
};
exports.EK1 = {
  PARENT: [exports.genericTank],
  LABEL: "EK-1",
  DANGER: 7,
  //   SHAPE: 6,
  COLOR: 6,
  SIZE: 32,

  //() FACING_TYPE: 'autospin',
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 10, 0, 30, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [9, 10, 0, 90, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [9, 10, 0, 150, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [9, 10, 0, 210, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [9, 10, 0, 270, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [9, 10, 0, 330, 190, 0],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 8 }]
    },
    { POSITION: [24, 0, 0, 0, 360, 0], TYPE: exports.dominatorbody }
  ]
};
exports.elite_battleship = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Battleship",
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 7, 0, 0, 360, 1],
      TYPE: [exports.autoTurretcrash, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [5, 7, 0, 120, 360, 1],
      TYPE: [exports.autoTurretcrash, { INDEPENDENT: false, COLOR: 5 }]
    },
    {
      POSITION: [5, 7, 0, 240, 360, 1],
      TYPE: [exports.autoTurretcrash, { INDEPENDENT: false, COLOR: 5 }]
    }
  ],
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  GUNS: [
    {
      POSITION: [4, 6.7, 0.6, 7, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, -9, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        INDEPENDENT: true
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, 9, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, -9, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        INDEPENDENT: true
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, 9, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, 9, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 6.7, 0.6, 7, -9, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.gunnerborer = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Borer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  DANGER: 10,
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  }
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  LABEL: "Elite Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.doublereload
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          INDEPENDENT: true,
          COLOR: 5
        }
      ]
    }
  ]
};

exports.elite_machineai = {
  PARENT: [exports.genericTank],
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  DANGER: 10,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 0.2,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 20,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 5
  },
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "superspin"],
  AI: { NO_LEAD: true, STRAFE: true },
  HITS_OWN_TYPE: "hard",
  LABEL: "Elite Machine",
  GUNS: [
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, -60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, -60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, -60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, -60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, 60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, 60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, 60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, 60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.sniper3gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};
exports.elite_factory = {
  PARENT: [exports.elite],
  LABEL: "Elite Factory",
  SKILL: skillSet({
    spd: 1
  }),
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyfactory,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.sentryGun,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 180, 0]
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, -60, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, -60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyfactory,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.sentryTrap,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, -60, 0]
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 60, 0]
    },
    {
      POSITION: [1, 12, 1, 15, 0, 60, 0],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyfactory,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.sentryThrow,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 60, 0]
    }
  ],

  TURRETS: [
    {
      POSITION: [10, 0, 0, 180, 360, 1],
      TYPE: [
        exports.oldAutoSmasherTurret,
        {
          INDEPENDENT: true,
          COLOR: 5
        }
      ]
    }
  ]
};
exports.peltertrapper = {
  PARENT: [exports.genericTank],
  LABEL: "Blockade",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0]
    },
    {
      POSITION: [2, 3, 1.7, 19, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.gunner,
          g.sniper,
          g.doublereload,
          g.nail
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0]
    },
    {
      POSITION: [2, 3, 1.7, 19, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.gunner,
          g.sniper,
          g.doublereload,
          g.nail
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.fallenoverlord = {
  PARENT: [exports.genericTank],
  CAN_BE_ON_LEADERBOARD: true,
  LABEL: "Fallen Overlord",
  DANGER: 7,
  COLOR: 18,
  SIZE: 20,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.1,
    HEALTH: base.HEALTH * 50,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 6
  },
  VARIES_IN_SIZE: true,
  VALUE: 130000,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true, STRAFE: true },
  MAX_CHILDREN: 230,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.halfsize,
          g.lesspower
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.halfsize,
          g.lesspower
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.halfsize,
          g.lesspower
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.halfsize,
          g.lesspower
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.eliteai = {
  PARENT: [exports.genericTank],
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  DANGER: 10,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 0.2,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 30,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 6
  },
  BROADCAST_MESSAGE: "A visitor has left!",
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "superspin"],
  AI: { NO_LEAD: true, STRAFE: true },
  HITS_OWN_TYPE: "hard",
  LABEL: "Elite Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gun,
        {
          INDEPENDENT: true,
          COLOR: 5
        }
      ]
    }
  ]
};
exports.elite_destroyerai = {
  PARENT: [exports.genericTank],
  LABEL: "Elite Gunner",
  MAX_CHILDREN: 30,
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  DANGER: 10,
  SKILL: skillSet({
    rld: 0.6,
    dam: 0.5,
    pen: 0.5,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 30,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 5
  },
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "canRepel",
    "superspin"
  ],
  AI: { NO_LEAD: true, STRAFE: true },
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BROADCAST_MESSAGE: "A visitor has left!",
  HITS_OWN_TYPE: "hard",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [
          exports.fovswarm,
          {
            INDEPENDENT: true
          }
        ]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: {
    NO_LEAD: false
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun]
    }
  ]
};

exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Carpenter",
  MAX_CHILDREN: 300,
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.lessreload]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.lessreload]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.lessreload]),
        TYPE: exports.block
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0]
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.lessreload]),
        TYPE: exports.block
      }
    }
  ]
};

exports.elite_sprayai = {
  PARENT: [exports.genericTank],
  LABEL: "Elite Sprayer",
  CAN_BE_ON_LEADERBOARD: true,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  DANGER: 10,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 0.2,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 35,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 10
  },
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "superspin"],
  AI: { NO_LEAD: true, STRAFE: true },
  HITS_OWN_TYPE: "hard",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    }
  ]
};

exports.elite_gunner = {
  PARENT: [exports.elite],
  LABEL: "Elite Gunner",
  MAX_CHILDREN: 30,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [
          exports.pillbox,
          {
            INDEPENDENT: true
          }
        ]
      }
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0]
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0]
    }
  ],
  AI: {
    NO_LEAD: false
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun]
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun]
    }
  ]
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  LABEL: "Elite Sprayer",
  AI: {
    NO_LEAD: false
  },
  SKILL: skillSet({
    spd: 1
  }),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [
        exports.spray,
        {
          COLOR: 5
        }
      ]
    }
  ]
};

exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: false,
    MAX_CHILDREN: 8,
    SYNCS_SKILLS: true,
    CAN_BE_ON_LEADERBOARD: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 1.5,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: false,
          MAX_CHILDREN: 8,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret
      }
    ]
  };
})();
exports.heavyhunt = {
  PARENT: [exports.genericTank],
  LABEL: "Heavy Hunter",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.25
  },

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
          g.lowpower
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.dem = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Demolisher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    }
  ]
};
exports.ArenaCloser3 = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Sweeper",
  SIZE: 50,
  COLOR: 3,
  FOV: 50,
  BULLET_DAMAGE: 99999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 99999999999999999999999999999999999999999999999999999999999
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 26, 1.8, 0, 0, 0, 0],
      PROPERTIES: {
        DAMAGE: 999999999999999999999999999999999999999999999999999999999999999,
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.bullet,
        LABEL: "Nuke", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
let burstBulletGuns = blob => {
  return [
    {
      POSITION: [0, 10.5, 1.2, 7, 0, blob, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          [g.basic, g.skim, g.halfreload, g.lowpower]
        ]),
        SYNCS_SKILLS: false,
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
        AUTOFIRE: true
      }
    }
  ];
};
let burstBulletGuns2 = blob => {
  return [
    {
      POSITION: [0, 10.5, 1.2, 7, 0, blob, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower
        ]),
        SYNCS_SKILLS: false,
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
        AUTOFIRE: true
      }
    }
  ];
};
exports.rpgrocket = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  SHAPE: 207,
  BODY: {
    RANGE: 70,
    SPEED: 10
  },
  //  SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  GUNS: [
    {
      POSITION: [14, 12, 0.5, 0, 0, 180, 5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.halfreload,
          g.weak,
          g.muchmorerecoil
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
var amount = 1;
for (let i = 0; i < 360; i += 360 / 3) {
  exports.rpgrocket.GUNS = exports.rpgrocket.GUNS.concat(burstBulletGuns2(i));
}
for (let i = 0; i < 360; i += 360 / 5) {
  exports.rpgrocket.GUNS = exports.rpgrocket.GUNS.concat(burstBulletGuns(i));
}
exports.rpg = {
  PARENT: [exports.genericTank],
  LABEL: "Sparkler",
  //CONTROLLERS: ['nearestDifferentMaster'],
  SKILL: skillSet({
    spd: 1
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 6, -0.5, 9, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.halfreload
        ]),
        SYNCS_SKILLS: true,
        TYPE: exports.rpgrocket
      }
    },
    {
      POSITION: [5, 6, -1.6, 6, 0, 0, 0]
    }
  ]
};
exports.ArenaCloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  SIZE: 20,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  SKILL: skillSet({
    rld: 0.2,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.4,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.4,
    SPEED: 8
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.morereload]),
        TYPE: exports.bullet,
        LABEL: "Arena Closer Bullet", // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};

exports.twincloser = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Closer",
  SIZE: 20,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  SKILL: skillSet({
    rld: 0.2,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.4,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.4,
    SPEED: 8
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Arena Closer Bullet", // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Arena Closer Bullet", // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.AC3turret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  NAME: "",
  COLOR: 16,
  SIZE: 35,

  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "onlyAcceptInArc"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.five, g.flank, g.auto, g.op]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.AC3 = {
  PARENT: [exports.genericTank],
  LABEL: "AC-3",
  DRAW_HEALTH: false,
  HITS_OWN_TYPE: "never",
  SIZE: 20,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  SKILL: skillSet({
    rld: 0.2,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.4,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.4,
    SPEED: 8
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 10, 0, 0, 190, 0],
      TYPE: exports.AC3turret
    },
    {
      POSITION: [11, 10, 0, 120, 190, 0],
      TYPE: exports.AC3turret
    },
    {
      POSITION: [11, 10, 0, 240, 190, 0],
      TYPE: exports.AC3turret
    }
  ]
};
exports.minicloser = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun Closer",
  SIZE: 20,
  COLOR: 3,
  HAS_NO_RECOIL: true,
  SKILL: skillSet({
    rld: 0.2,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.4,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.4,
    SPEED: 8
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.norecoil,
          g.morerange,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 9, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.norecoil,
          g.morerange,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 9, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mini,
          g.op,
          g.norecoil,
          g.morerange,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ArenaCloser4 = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Killer",
  SIZE: 30,
  COLOR: 3,
  CONTROLLERS: ["superspin"],
  FOV: 50,
  BULLET_DAMAGE: 99999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 99999999999999999999999999999999999999999999999999999999999
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        DAMAGE: 999999999999999999999999999999999999999999999999999999999999999,
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: exports.bullet,
        LABEL: "Nuke" // def
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.ArenaCloser
    }
  ]
};
exports.submachine = {
  PARENT: [exports.genericTank],
  LABEL: "Sub-Machine",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 10, 1, 20, 0, 0, 0]
    }
  ]
};
exports.autosubmachine = makeAuto(exports.submachine);
exports.transmit = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    FOV: base.FOV * 1.29
  },
  LABEL: "Transmitter",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, 2, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 2, 1, 0, -2, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, -1.5, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 10, -1.5, 20, 0, 0, 0]
    }
  ]
};
exports.vulcan = {
  PARENT: [exports.genericTank],
  LABEL: "Vulcan",
  DANGER: 7,
  MAX_CHILDREN: 385,
  BODY: {},
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -4.5, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 2.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, -2.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 1.5, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [5, 14, 1, 20, 0, 0, 0]
    }
  ]
};
exports.sniperrifle = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.445
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [23, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [27, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.ArenaCloser25 = {
  PARENT: [exports.genericTank],
  LABEL: "Omega Arena Closer",
  SIZE: 200,
  COLOR: 3,
  BODY: {
    HEALTH: 9999999999,
    DAMAGE: 99999999999,
    FOV: 1.8,
    SPEED: 8
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.hyperspeed]),
        TYPE: exports.bullet,
        LABEL: "Arena Closer Bullet", // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};

exports.enneatrap = (() => {
  let a = 360 / 9,
    d = 1 / 9;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Ennea-Trapper",
    DANGER: 7,
    MAX_CHILDREN: 400,
    BODY: {
      SPEED: base.SPEED * 0.8
    },
    SKILL: skillSet({
      spd: 1
    }),
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 7 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 7 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 7 * a, 8 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 7 * a, 8 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 8 * a, 9 * d]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 8 * a, 9 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  };
})();

exports.explosion = {
  LABEL: "Explosion",
  TYPE: "bullet",
  MOTION_TYPE: "bigexplode",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 5,
    SPEED: 0,
    RANGE: 20,
    RESIST: 0,
    DENSITY: 0.5,
    HEALTH: 1000 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    PUSHABILITY: 0.003
  },
  CAN_GO_OUTSIDE_ROOM: true,
  PERSISTS_AFTER_DEATH: true,
  MAX_CHILDREN: 1,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.explodemissle = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 100
  },
  SHAPE: -7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ],
  SPAWN_ON_DEATH: [
    {
      T: exports.explosion,
      N: 1,
      VEL: 1
    }
  ]
};
exports.explodernuke = {
  LABEL: "Explosion",
  TYPE: "bullet",
  MOTION_TYPE: "hugeexplode",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 5,
    SPEED: 0,
    RANGE: 40,
    RESIST: 0,
    DENSITY: 0.5,
    HEALTH: 1000 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    PUSHABILITY: 0.003
  },
  CAN_GO_OUTSIDE_ROOM: true,
  PERSISTS_AFTER_DEATH: true,
  MAX_CHILDREN: 1,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.explodersupernuke = {
  LABEL: "Explosion",
  TYPE: "bullet",
  MOTION_TYPE: "hugeexplode",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 5,
    SPEED: 0,
    RANGE: 200,
    RESIST: 0,
    DENSITY: 0.5,
    HEALTH: 1000 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    PUSHABILITY: 0.003
  },
  CAN_GO_OUTSIDE_ROOM: true,
  PERSISTS_AFTER_DEATH: true,
  MAX_CHILDREN: 1,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.popperexplosion = {
  LABEL: "Explosion",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 5,
    SPEED: 0,
    RANGE: 20,
    RESIST: 0,
    DENSITY: 0.5,
    HEALTH: 600 * wepHealthFactor,
    DAMAGE: 4.5 * wepDamageFactor,
    PUSHABILITY: 0.003
  },
  MAX_CHILDREN: 1,
  MOTION_TYPE: "smallexplode",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  PERSISTS_AFTER_DEATH: true,
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.c4 = {
  PARENT: [exports.bullet],
  LABEL: "Set Bomb",
  SHAPE: -8,
  INDEPENDENT: true,
  PERSISTS_AFTER_DEATH: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["alwaysFire"],
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.explosion,
      N: 1,
      VEL: 1
    }
  ]
};
exports.shrapnelbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 40 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: true
};
exports.shrapnelmissile = {
  PARENT: [exports.bullet],
  LABEL: "Bomb",
  SHAPE: -8,
  INDEPENDENT: true,
  PERSISTS_AFTER_DEATH: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["alwaysFire"],
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.shrapnelbullet,
      N: 14,
      VEL: 12
    }
  ]
};

exports.deployermissile = {
  PARENT: [exports.trap],
  LABEL: "Bomb",
  SHAPE: -3,
  INDEPENDENT: true,
  PERSISTS_AFTER_DEATH: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["alwaysFire"],
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.trap,
      N: 3,
      VEL: 6
    }
  ]
};

exports.rpgbomb = {
  PARENT: [exports.swarm],
  LABEL: "Bomb",
  SHAPE: 8,
  INDEPENDENT: false,
  PERSISTS_AFTER_DEATH: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  HITS_OWN_TYPE: "repel",
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["alwaysFire"],
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.explosion,
      N: 1,
      VEL: 1
    }
  ]
};

exports.detonatebomb = {
  PARENT: [exports.block],
  LABEL: "Bomb",
  SHAPE: -6,
  STAT_NAMES: statnames.trap,
  INDEPENDENT: false,
  PERSISTS_AFTER_DEATH: true,
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["alwaysFire"],
  DIE_AT_RANGE: true,
  HITS_OWN_TYPE: "repel",
  FACING_TYPE: "turnWithSpeed",
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.explosion,
      N: 1,
      VEL: 1
    }
  ]
};
exports.overtri = {
  PARENT: [exports.genericTank],
  LABEL: "Over-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 11,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 11,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.popperbomb = {
  PARENT: [exports.bullet],
  LABEL: "Bomb",
  SHAPE: -8,
  INDEPENDENT: true,
  PERSISTS_AFTER_DEATH: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  DIE_AT_RANGE: true,
  FACING_TYPE: "turnWithSpeed",
  CONTROLLERS: ["alwaysFire"],
  MAX_CHILDREN: 1,
  SPAWN_ON_DEATH: [
    {
      T: exports.popperexplosion,
      N: 1,
      VEL: 1
    }
  ]
};

exports.nuke = {
  PARENT: [exports.bullet],
  LABEL: "",
  SHAPE: -8,
  PERSISTS_AFTER_DEATH: true,
  STAT_NAMES: statnames.trap,
  INDEPENDENT: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  FACING_TYPE: "turnWithSpeed",
  DIE_AT_RANGE: true,
  SHOOT_ON_DEATH: true,
  CONTROLLERS: ["alwaysFire"],
  SPAWN_ON_DEATH: [
    {
      T: exports.explodernuke,
      N: 1,
      VEL: 1
    }
  ],
  MAX_CHILDREN: 1
};
exports.supernuke = {
  PARENT: [exports.bullet],
  LABEL: "Bomb",
  SHAPE: -8,
  PERSISTS_AFTER_DEATH: true,
  STAT_NAMES: statnames.trap,
  INDEPENDENT: true,
  AUTOFIRE: true,
  HAS_NO_RECOIL: true,
  FACING_TYPE: "turnWithSpeed",
  DIE_AT_RANGE: true,
  SHOOT_ON_DEATH: true,
  CONTROLLERS: ["alwaysFire"],
  SPAWN_ON_DEATH: [
    {
      T: exports.explodersupernuke,
      N: 1,
      VEL: 1
    }
  ],
  MAX_CHILDREN: 1
};
exports.c4placer = {
  PARENT: [exports.genericTank],
  LABEL: "Exploder",
  DANGER: 6,
  //CONTROLLERS: ['nearestDifferentMaster'],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 7, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fake]),
        SYNCS_SKILLS: false,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.c4,
        RANGE: 2000,
        MAX_CHILDREN: 35,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 10, -1.2, 8, 0, 0, 0]
    }
  ]
};
exports.culverin = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Culverin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.22
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30.8, 7, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fake]),
        SYNCS_SKILLS: false,
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.assass,
          g.threequartersrof
        ]),
        TYPE: exports.c4,
        RANGE: 2000,
        MAX_CHILDREN: 35
      }
    },
    {
      POSITION: [8, 12, -1.3, 5, 0, 0, 0]
    },
    {
      POSITION: [4.2, 8, -1.2, 8, 0, 0, 0]
    }
  ]
};
exports.shrapnel = {
  PARENT: [exports.genericTank],
  LABEL: "Shrapnel",
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 10, 1, 9, 0, 0, 0]
    },
    {
      POSITION: [10, 11, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload]),
        TYPE: exports.shrapnelmissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
        RANGE: 2000,
        MAX_CHILDREN: 50
      }
    },
    {
      POSITION: [5, 10, -1.5, 7, 0, 0, 0]
    }
  ]
};
exports.deployer = {
  PARENT: [exports.genericTank],
  LABEL: "Fragmenter",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mega, g.lessreload]),
        TYPE: exports.deployermissile,
        RANGE: 1000,
        MAX_CHILDREN: 120
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [5, 12, 1.6, 15, 0, 0, 0]
    }
  ]
};
exports.mothership = {
  PARENT: [exports.genericTank],
  NAME: "Mothership",
  LABEL: "Mothership",
  DANGER: 7,
  SHAPE: 15,
  SIZE: 35,
  VALUE: 400000,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    HEALTH: 5000,
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    SHIELD: 5
  },
  MAX_CHILDREN: 150,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 3.3, 1.2, 8, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 22.5, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 45, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 67.5, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 90, 0.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 112.5, 0.47],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 135, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 157.5, 1.34],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 180, 1.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        MAX_CHILDREN: 22,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 202.5, 0.44],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 225, 0.55],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 247.5, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 270, 2.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 292.5, 2.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 315, 2.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 337.5, 2.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 3.3, 1.2, 8, 0, 360, 2.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.assault = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Stacker",
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 8, 1, 10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.halfreload,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.bitlessspeed,
          g.lessdamage,
          g.halfreload,
          g.halfrange
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.halfreload,
          g.halfrange,
           g.lessdamage,
          g.halfreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.morespeed,
          g.halfreload,
          g.halfrange,
           g.lessdamage,
          g.halfreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 25, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.morespeed,
          g.morespeed,
          g.halfreload,
          g.halfrange,
           g.lessdamage,
          g.halfreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 2, 1, 0, 4, 0, 0]
    },
    {
      POSITION: [27, 2, 1, 0, -4, 0, 0]
    }
  ]
};

exports.strike = {
  PARENT: [exports.genericTank],
  LABEL: "Striker",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morespeed, g.minit]),
        TYPE: exports.rpgbomb,
        RANGE: 2000,
        MAX_CHILDREN: 35
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.08, 10, 0, 0, 0]
    },
    {
      POSITION: [5, 10, -1.1, 6, 0, 0, 0]
    }
  ]
};
exports.twinmach = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Twin Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1.2, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1.2, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.twingatling = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Gatling",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 6, 1.4, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 6, 1.4, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.mantis = {
  PARENT: [exports.genericTank],
  LABEL: "Mantis",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 0.8, 1, 0, 8.5, -4, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mantis, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 0.8, 1, 0, -8.5, 4, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mantis, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 0.8, 1, 0, 7.5, -4, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mantis, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 0.8, 1, 0, -7.5, 4, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.mantis, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 3, 1, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 3, 1, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.detonate = {
  PARENT: [exports.genericTank],
  LABEL: "Detonator",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.block, g.small, g.lessreload]),
        TYPE: exports.detonatebomb,
        RANGE: 10,
        MAX_CHILDREN: 50
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1, 8, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [5, 10, -1.6, 6, 0, 0, 0]
    }
  ]
};
exports.nukeplacer = {
  PARENT: [exports.genericTank],
  LABEL: "Bombardier",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 12, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fake]),
        SYNCS_SKILLS: false,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 15, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.destroy,
          g.lessreload,
          g.muchmorerecoil
        ]),
        TYPE: exports.c4,
        RANGE: 2000,
        MAX_CHILDREN: 35,
        SYNCS_SKILLS: true,
        TYPE: exports.nuke
      }
    },
    {
      POSITION: [4, 14, -1.2, 7, 0, 0, 0]
    }
  ]
};
exports.mininailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Staplegun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, -1.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 1.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.spreader = {
  PARENT: [exports.genericTank],
  LABEL: "Spreader",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, 7.25, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.supernukeplacer = {
  PARENT: [exports.genericTank],
  LABEL: "Super Nuke",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.supernuke,
        RANGE: 2000,
        MAX_CHILDREN: 35
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [5, 10, -1.6, 6, 0, 0, 0]
    }
  ]
};
exports.popper = {
  PARENT: [exports.genericTank],
  LABEL: "Popper",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 8, -2.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.bitlessspeed,
          g.morespray,
          g.bitlessspeed,
          g.minit
        ]),
        RANGE: 2000,
        TYPE: exports.popperbomb,
        MAX_CHILDREN: 35
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [5, 10, -1.6, 6, 0, 0, 0]
    }
  ]
};

exports.suicide = {
  PARENT: [exports.genericTank],
  LABEL: "Kamikaze",
  DANGER: 7,
  HAS_NO_RECOIL: true,
  MAX_CHILDREN: 6,
  SKILL: skillSet({
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1,
    rld: 1
  }),
  BODY: {
    SPEED: base.speed * 1.1,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    HEALTH: base.HEALTH * 34.5,
    DENSITY: base.DENSITY * 0.6
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.nospeed,
          g.halfreload,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.explodersupernuke,
        RANGE: 2100,
        LABEL: "Explosion"
      }
    }
  ]
};
exports.suicide.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl
];

exports.auto8 = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-24",
  DANGER: 7,
  SIZE: 75,
  BODY: {
    HEALTH: 500,
    DAMAGE: 50
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 11, 0, 0, 190, 0],
      POSITION: [7, 8, 0, 0, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, 45, 190, 1],
      POSITION: [7, 8, 0, 45, 190, 1],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, 90, 190, 0],
      POSITION: [7, 8, 0, 90, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, 135, 190, 1],
      POSITION: [7, 8, 0, 135, 190, 1],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, 180, 190, 0],
      POSITION: [7, 8, 0, 180, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, -135, 190, 1],
      POSITION: [7, 8, 0, -135, 190, 1],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, -90, 190, 0],
      POSITION: [7, 8, 0, -90, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [7, 11, 0, -45, 190, 1],
      POSITION: [7, 8, 0, -45, 190, 1],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.destroy2 = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Double Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 8, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, -8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 13.5, 2, -7, 0, 0, 0]
    }
  ]
};
exports.paradox = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.78
  },
  LABEL: "Destroyceptioner",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 20, 0, 0, 0, 0],
      TYPE: exports.fakeAutoTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.lessreload
        ]),
        TYPE: exports.megaturret
      }
    }
  ]
};
exports.corvette = {
  PARENT: [exports.genericTank],
  LABEL: "Corvette",
  DANGER: 7,
  STAT_NAMES: statnames.bullet,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 7, 1, 7, 0, 0, 0]
    },
    {
      POSITION: [5, 14, 1, 14.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.corvette]),
        TYPE: exports.homingbullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [8, 3, 1, 0, 3, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.propeller]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [8, 3, 1, 0, -3, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.propeller]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [8, 3, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.propeller]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 4, 1, 165, 360, 0],
      TYPE: exports.corvettepack
    }
  ]
};
exports.poundceptioner = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.78
  },
  LABEL: "Poundceptioner",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6.5, 20, 0, 0, 0, 0],
      TYPE: exports.fakeAutoTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.turretbullet
      }
    }
  ]
};
exports.destroypound = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.95
  },
  LABEL: "Bruiser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 9, 1, 0, 6, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 9, 1, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.contractor = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Contractor",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 6, 0, 0]
    },
    {
      POSITION: [2, 10, 1.1, 20, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.twin, g.halfreload]),
        TYPE: exports.block
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, -6, 0, 0]
    },
    {
      POSITION: [2, 10, 1.1, 20, -6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.twin, g.halfreload]),
        TYPE: exports.block
      }
    }
  ]
};
exports.pulsar = {
  PARENT: [exports.miniboss],
  COLOR: 4,
  SIZE: 20,
  LABEL: "Pulsar",
  FACING_TYPE: "locksFacing",
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    spd: 1
  }),
  SHAPE: [[-1.2, -0.8], [0.7, -1.6], [1.9, 0], [0.7, 1.6], [-1.2, 0.8], [0, 0]],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 7, -0.5, 9, 0, 180, 0]
    },
    {
      POSITION: [12, 9, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.autobruiser = makeAuto(exports.destroypound);
exports.stomper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    SPEED: base.SPEED * 0.85
  },
  LABEL: "Stomper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.overworker = {
  PARENT: [exports.genericTank],
  LABEL: "Overworker",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 0, 1],
      TYPE: exports.drivesymbol
    }
  ]
};

exports.rail = {
  PARENT: [exports.genericTank],
  LABEL: "Blaster",
  DANGER: 7,
  SHAPE: 0,
  GUNS: [
    {
      POSITION: [12.462, 4.8, 1, 0, 0, 359.162, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.538, 6.4, 1, 12.462, 0, 359.778, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.923, 8, 1, 18, 0, 359.698, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24.923, 3.2, 1, 0, -6.923, 359.93, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24.923, 3.2, 1, 0, 6.923, 359.615, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11.077, 3.2, 1, 0, 0, 340.907, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11.077, 3.2, 1, 0, 0, 18.558, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.blocker = {
  PARENT: [exports.genericTank],
  LABEL: "Blocker",
  MAX_CHILDREN: 30,
  STAT_NAMES: statnames.trap,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 4.5, 1, 0, 6, 0, 0.6]
    },
    {
      POSITION: [20, 4.5, 1, 0, -6, 0, 0]
    },
    {
      POSITION: [17, 9.5, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.lessreload,
          g.lessreload
        ]),
        TYPE: exports.obstacle
      }
    }
  ]
};

exports.FdestAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 1.5
  },
  COLOR: 8,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.turret]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.FsniperAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 8,
  BODY: {
    FOV: 0.8
  },

  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24.5, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.turret]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.snowflake = {
  PARENT: [exports.miniboss],
  LABEL: "Snowflake",
  FRAG: "snowflake",
  SKILL: skillSet({
    rld: 1,
    dam: 0.8,
    pen: 0.8,
    str: 0.8,
    spd: 0.2,
    atk: 0.3,
    hlt: 1,
    shi: 0.7,
    rgn: 0.7,
    mob: 0.5
  }),
  BODY: {
    SPEED: base.SPEED * 0.4,
    HEALTH: base.HEALTH * 45,
    DAMAGE: base.DAMAGE * 2.5,
    FOV: base.FOV * 2
  },
  AI: {
    STRAFE: true
  },
  SIZE: 40,
  SHAPE: 6,
  COLOR: 0,
  GUNS: [
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.c4
      }
    },
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.c4
      }
    },
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.c4
      }
    },
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.c4
      }
    },
    {
      POSITION: [19.385, 6.4, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [1, 6.4, 1.3, 19.385, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.halfreload]),
        TYPE: exports.c4
      }
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [16.5, 8, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    },
    {
      POSITION: [6.154, 5, 2.7, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.droneauto,
        MAX_CHILDREN: 5
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 6, 0, 0, 190, 1],
      TYPE: exports.FdestAutoTurret
    },
    {
      POSITION: [4, 6, 0, 60, 190, 1],
      TYPE: exports.FsniperAutoTurret
    },
    {
      POSITION: [4, 6, 0, 120, 190, 1],
      TYPE: exports.FdestAutoTurret
    },
    {
      POSITION: [4, 6, 0, 180, 190, 1],
      TYPE: exports.FsniperAutoTurret
    },
    {
      POSITION: [4, 6, 0, 240, 190, 1],
      TYPE: exports.FdestAutoTurret
    },
    {
      POSITION: [4, 6, 0, 300, 190, 1],
      TYPE: exports.FsniperAutoTurret
    }
  ]
};
exports.megaheavy = {
  PARENT: [exports.elite],
  LABEL: "Battalion",
  BODY: {
    FOV: 1.0,
    SPEED: base.SPEED * 0.9,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 1.75,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
    FOV: 1.1
  },
  SKILL: skillSet({
    spd: 1
  }),
  SHAPE: 8,
  MAX_CHILDREN: 500,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 0, 190, 0],
      TYPE: [exports.destroy, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 45, 190, 0],
      TYPE: [exports.gunner, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 90, 190, 0],
      TYPE: [exports.basic, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 135, 190, 0],
      TYPE: [exports.basic, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.lilfact, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 225, 190, 0],
      TYPE: [exports.basic, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 270, 190, 0],
      TYPE: [exports.basic, { COLOR: 17 }]
    },
    {
      POSITION: [14, 6, 0, 315, 190, 0],
      TYPE: [exports.gunner, { COLOR: 17 }]
    }
  ]
};

exports.backer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  MAX_CHILDREN: 325,
  LABEL: "Backer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.halfspeed,
          g.halfreload,

          g.lowpower
        ]),
        TYPE: exports.block
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 0, 100, 0]
    },
    {
      POSITION: [2, 5, 1.1, 15, 0, 100, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.morespeed,
          g.morespeed,
          g.lessreload
        ]),
        TYPE: exports.block
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 0, -100, 0]
    },
    {
      POSITION: [2, 5, 1.1, 15, 0, -100, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.morespeed,
          g.morespeed,
          g.lowpower,
          g.lessreload
        ]),
        TYPE: exports.block
      }
    }
  ]
};
exports.musket = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Musket",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [14, 20, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [18, 6.5, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 6.5, 1, 0, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.producer = {
  PARENT: [exports.genericTank],
  LABEL: "Producer",
  DANGER: 6,
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 9, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 9, 1.7, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.lessreload]),
        TYPE: exports.trapgun,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [4, 10, 1, 8, 0, 0, 0]
    }
  ]
};
exports.arrasian = {
  PARENT: [exports.miniboss],
  DANGER: 5,
  SHAPE: [
    [0.5, 0.5],
    [1, -1],
    [-1, -1],
    [-1, 1],
    [1, 1],
    [0.5, 0.5],
    [0.5, 0.5],
    [1, 1],
    [1, -1],
    [0.5, 0.5],
    [-0.5, 0.5],
    [-1, 1],
    [-0.5, 0.5],
    [-0.5, -0.5],
    [0.5, -0.5]
  ],
  COLOR: 13,
  SIZE: 60,
  LABEL: "Arrasian",
  FACING_TYPE: "autospin",
  BODY: {
    FOV: 1.3,
    HEALTH: base.HEALTH * 50,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 5,
    SPEED: base.SPEED * 0.25
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 10, 2.5, 90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 2.5, -90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 2.5, 180, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 2.5, 0, 160, 0],
      TYPE: exports.slowautoTurret,

      POSITION: [3, 10, -2.5, 90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -2.5, -90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -2.5, 180, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -2.5, 0, 160, 0],
      TYPE: exports.slowautoTurret,

      POSITION: [3, 10, -6, 90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -6, -90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -6, 180, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -6, 0, 160, 0],
      TYPE: exports.slowautoTurret,

      POSITION: [3, 10, 6, 90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 6, -90, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 6, 180, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 6, 0, 160, 0],
      TYPE: exports.slowautoTurret,

      POSITION: [3, 10, -6, 0, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, -2.5, -0, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 2.5, 0, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [3, 10, 6, 0, 160, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [5, 9, 0, 45, 360, 1],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 135, 360, 1],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 225, 360, 1],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [5, 9, 0, 315, 360, 1],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 6
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 45, 360, 0],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 135, 360, 0],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 225, 360, 0],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    },
    {
      POSITION: [4, 12, 0, 315, 360, 0],
      TYPE: [
        exports.slowautoTurret,
        {
          CONTROLLERS: [
            "canRepel",
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ],
          INDEPENDENT: false,
          COLOR: 16
        }
      ]
    }
  ]
};
exports.sprinkle = {
  PARENT: [exports.genericTank],
  LABEL: "Sprinkler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 4, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lowpower, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 7, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pelit = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Pelleter",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.tripelleter = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Pelleter",
  DANGER: 6,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0]
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 120, 0]
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 240, 0]
    }
  ]
};
exports.buttbuttin = {
  PARENT: [exports.genericTank],
  LABEL: "Buttbuttin",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.55
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.borer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Borer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};
exports.boom = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sheller",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.mini,
          g.tiny,
          g.moredamage,
          g.morereload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.mini,
          g.moredamage,
          g.tiny,
          g.morereload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.mini,
          g.tiny,
          g.morereload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.mini,
          g.tiny,
          g.morereload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.mini,
          g.tiny,
          g.morereload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 10, -1.2, 8, 0, 0, 0]
    }
  ]
};
exports.bulwark = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Bulwark",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 8, 1, 0, 5.5, 190, 0]
    },
    {
      POSITION: [4, 8, 1.7, 10, 5.5, 190, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [10, 8, 1, 0, -5.5, 170, 0]
    },
    {
      POSITION: [4, 8, 1.7, 10, -5.5, 170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.punt = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Pummeler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, -3.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, 3.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 4, 1, 0, -3.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 4, 1, 0, 3.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};
exports.blowtorch = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Blowtorch",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload,
          g.moredamage,
          g.mach
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.mach,
          g.hyperspeed,
          g.moredamage,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 8.5, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.mach,
          g.moredamage,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 9.5, -1.8, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.mach,
          g.weak,
          g.moredamage,
          g.hyperspeed,
          g.morereload,
          g.minit
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};

exports.impale = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Courser",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1.4, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.minit,
          g.morespeed,
          g.hyperspeed,
          g.morespeed,
          g.lowpower,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1.4, 0, 3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.minit,
          g.morespeed,
          g.lowpower,
          g.hyperspeed,
          g.morespeed,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, -3.5, 0, 8.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.morespeed,
          g.morespeed,
          g.hyperspeed,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, 3.5, 0, 8.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.morespeed,
          g.morespeed,
          g.hyperspeed,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 6, 1, 0, -3.5, 0, 16.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morespeed,
          g.morespeed,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 6, 1, 0, 3.5, 0, 16.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morespeed,
          g.morespeed,
          g.doublereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};

exports.aquamarine = {
  PARENT: [exports.miniboss],
  FACING_TYPE: "locksFacing",
  SIZE: 30,
  COLOR: 0,
  VALUE: 500000,
  SHAPE:
    "m -0.74832,-0.74832 a 1.05832,1.05832 0 0 1 1.15332,-0.229412 1.05832,1.05832 0 0 1 0.65332,0.97776 1.05832,1.05832 0 0 1 -0.65332,0.97776 1.05832,1.05832 0 0 1 -1.15332,-0.229412 l 0.74832,-0.74832 z",
  LABEL: "Aquamarine",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  BODY: {
    FOV: 1.3,
    HEALTH: base.HEALTH * 50,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 5,
    SPEED: base.SPEED * 0.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT       X       Y     ANGLE   DELAY */
      POSITION: [10.763, 2.153, 5.298, -2.204, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.huge]),
        TYPE: exports.drone,
        MAX_CHILDREN: 15
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 7, 0, 0, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, 4, 60, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, -4, -60, 360, 1],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    }
  ]
};
exports.scraper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Scraper",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.01, 10, 0, 0, 0]
    },
    {
      POSITION: [20, 12, -1.25, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.turretcompass
      }
    }
  ]
};
exports.spinTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Spinner Turret",
  COLOR: 16,
  MAX_CHILDREN: 500,
  CONTROLLERS: ["lmg"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 36, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 108, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 252, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 324, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.lmg = {
  PARENT: [exports.genericTank],
  LABEL: "Spinner",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0]
    }
  ], // g.mach
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 14, 0, 0, 360, 1],
      TYPE: exports.spinTurret
    }
  ]
};
exports.cannon = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Cannon",
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.25
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [28, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.assass,
          g.threequartersrof
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [8, 12, -1.3, 5, 0, 0, 0]
    }
  ]
};
exports.heavyGunner = {
  PARENT: [exports.genericTank],
  LABEL: "Rimfire",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5, 1, 0, 7.25, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.pound
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 5, 1, 0, -7.25, -10, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.pound
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.pound
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.pound
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.trapperinsane = {
  PARENT: [exports.miniboss],
  SIZE: 25,
  COLOR: 13,
  LABEL: "Trap Dweller",
  SKILL: skillSet({
    spd: 1
  }),
  BODY: {
    FOV: 1.4,
    SPEED: base.SPEED * 0,
    HEALTH: base.HEALTH * 25,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SHAPE: 4,
  MAX_CHILDREN: 500,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 10, 1, 0, 0, 270, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 10, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 10, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [3, 10, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.slow, g.morereload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [0, 8, 1.2, 8, 0, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.trapminion,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 20
      }
    }
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 10, 0, 45, 180, 0],
      TYPE: [exports.trapper, { MAX_CHILDREN: 50 }]
    },
    {
      POSITION: [6, 10, 0, 135, 180, 0],
      TYPE: [exports.trapper, { MAX_CHILDREN: 50 }]
    },
    {
      POSITION: [6, 10, 0, -135, 180, 0],
      TYPE: [exports.trapper, { MAX_CHILDREN: 50 }]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bansheegun, { INDEPENDENT: true }]
    },
    {
      POSITION: [6, 10, 0, -45, 180, 0],
      TYPE: [exports.trapper, { MAX_CHILDREN: 50 }]
    }
  ]
};
exports.boom2 = {
  PARENT: [exports.genericTank],
  LABEL: "Duplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, 1, 8, -8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, -8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, -8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, -8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [10, 10, 1, 8, -8, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.tiny,
          g.minit
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.shotgun,
          g.tiny,
          g.minit
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 10, 1, 8, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.tiny]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 10, -1.2, 8, -8, 0, 0]
    },
    {
      POSITION: [5, 10, -1.2, 8, 8, 0, 0]
    },
    {
      POSITION: [7, 12, 1, 1.5, -8, 0, 0]
    },
    {
      POSITION: [7, 12, 1, 1.5, 8, 0, 0]
    },
    {
      POSITION: [7, 13.5, 2, -7, 0, 0, 0]
    }
  ]
};

exports.redistbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "turnWithSpeed",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody
    }
  ]
};
exports.redist = {
  //>:)
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: 1.05,
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.75
  },
  LABEL: "Redistributor",
  HAS_NO_RECOIL: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.redist, g.fake, g.norecoil]),
        TYPE: exports.redistbullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 13, 1.2, 6, 0, 0, 0]
    },
    {
      POSITION: [20, 12, 1, 0, 0, 0, 8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.redist]),
        TYPE: exports.redistbullet,
        LABEL: "Stabilizer"
      }
    },
    {
      POSITION: [7, 12, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.sandman = {
  //>:)
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: 1.05
  },
  LABEL: "Sandman",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.redist,
          g.fake,
          g.norecoil,
          g.halfspeed
        ]),
        TYPE: exports.redistbullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, 1.2, 6, 0, 0, 0]
    },
    {
      POSITION: [20, 13, 1, 0, 0, 0, 8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.redist,
          g.op,
          g.norecoil,
          g.doublereload,
          g.halfspeed
        ]),
        TYPE: exports.redistbullet,
        LABEL: "Stabilizer"
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    }
  ]
};
exports.miniswarm = {
  PARENT: [exports.genericTank],
  LABEL: "Minicruiser",
  DANGER: 7,
  MAX_CHILDREN: 200,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 5.5, 0.6, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [13, 5.5, 0.6, 0, 4, 45, 0.334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [13, 5.5, 0.6, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [13, 5.5, 0.6, 0, -4, -45, 0.334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [13, 5.5, 0.6, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.nailer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Penetrator",
  BODY: {
    FOV: 1.05
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.morereload,
          g.bitlessspeed,
          g.sniper,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 3, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.triplepunt = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shatterer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, -3.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 3.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, -3.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, 3.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 4, 1, 0, -3.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 4, 1, 0, 3.5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.weak,
          g.hyperspeed,
          g.morereload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};
exports.bighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fooster",
  BODY: {
    DENSITY: base.DENSITY * 0.6
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.PK2 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-2",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 45,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.punt
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.auto3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.PK3 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-3",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 59,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.triplepunt
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.visDestructia = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Vis Destructia",
  COLOR: 11,
  SHAPE: [
    [-0.59, 0.8],
    [0.6, -0.01],
    [-0.593, -0.8],
    [-0.29, -0.2],
    [0.01, -0.01],
    [-0.287, 0.18]
  ],
  SIZE: 17,
  VARIES_IN_SIZE: true,
  BODY: {
    SPEED: 7,
    ACCEL: 0.01,
    HEALTH: 10,
    DAMAGE: 1,
    PENETRATION: 5,
    PUSHABILITY: 0.75,
    DENSITY: 10,
    RESIST: 2
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true
};
exports.PK4 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-4",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 75,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 1
  },
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [6.5, 0, 0, 0, 360, 1],
      TYPE: exports.triple
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 0, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 72, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 144, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 216, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 288, 360, 1],
      TYPE: [
        exports.sniper3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.pkminion = {
  PARENT: [exports.minion],
  LABEL: "Mega Minion",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 32,

  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.pelit
    }
  ]
};
exports.guardianpet = {
  PARENT: [exports.genericTank],
  COLOR: 3,
  LABEL: "Pet Guardian",
  NAME: "Pet Guardian",
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  SIZE: 28,
  DANGER: 7,
  SHAPE: 3,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.1,
    REGEN: 12,
    PENETRATION: 9,
    FOV: 123,
    DENSITY: 9,
    DAMAGE: 0,
    HEALTH: base.HEALTH * 20
  },
  AI: {
    BLIND: true
  },
  ACCEPTS_SCORE: true,
  CLEAR_ON_MASTER_UPGRADE: false,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["minion", "hangOutNearMaster"],
  INDEPENDENT: true,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 2, 0, 0, 180, 0]
    }
  ]
};
exports.bazooka = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Bazooka",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, -0.5, 9, 0, 0, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload,
          g.bitlessdamage
        ]),
        TYPE: exports.explodemissle,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      POSITION: [3, 15, 1.3, 15, 0, 0, 0]
    }
  ]
};
exports.guardianpets = {
  PARENT: [exports.genericTank],
  LABEL: "Pet Guardian",
  RESET_UPGRADES: true,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    },
    {
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.huge]),
        TYPE: [exports.guardianpet, { SHAPE: 5 }],
        MAX_CHILDREN: 1
      }
    }
  ]
};
exports.PK5 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-5",
  SHAPE: 5,
  COLOR: 14,
  MAX_CHILDREN: 450,
  SIZE: 100,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.5
  },
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.pkminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [6.5, 0, 0, 0, 360, 1],
      TYPE: exports.quint
    },
    {
      POSITION: [3, 9, 0, 36, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 108, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 180, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -108, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, -36, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 0, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 72, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 144, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 216, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [3, 9, 0, 288, 360, 1],
      TYPE: [
        exports.heavy3gun,
        {
          COLOR: 14
        }
      ]
    }
  ]
};

exports.tastetherainbow = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Congruator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.mach
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true
      }
    },
    {
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.triborer = {
  PARENT: [exports.genericTank],
  LABEL: "Driller",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 4, 1, 0, -3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 11, -1.8, 0, 0, 0, 0.5]
    }
  ]
};

exports.penta2 = {
  PARENT: [exports.genericTank],
  LABEL: "Hepta Shot",
  DANGER: 8,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [12, 8, 1, 0, -2, -75, 0.114],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 8, 1, 0, 2, 75, 0.114],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 8, 1, 0, -2, -60, 0.106],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 8, 1, 0, 2, 60, 0.106],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 8, 1, 0, 2, -45, 0.999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 8, 1, 0, -2, 45, 0.999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.spam,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.Turkey_Iris = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 19
};
exports.hoax = {
  PARENT: [exports.genericTank],
  LABEL: "Hoaxer",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [15, 5, 0.5, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 11, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
        TYPE: [exports.trap, { INVISIBLE: [0.01, 0.01] }],
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.Turkey_Eye = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  FACING_TYPE: "toTarget",
  COLOR: 18,
  TURRETS: [
    {
      /****  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.75, 1, 0, 0, -15, 1],
      TYPE: exports.Turkey_Iris
    }
  ]
};

exports.Turkey_Head = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: ["onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
  TURRETS: [
    {
      /*** SIZE      X       Y     ANGLE      ARC  LAYER */
      POSITION: [6.5, 5.97, -5.07, 0, -15, 1],
      TYPE: exports.Turkey_Eye
    },
    {
      POSITION: [6.5, 5.97, 5.07, 0, -15, 1],
      TYPE: exports.Turkey_Eye
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19.81, 8.09, -1.76, 5.48, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
        AUTOFIRE: true
      }
    }
  ]
};

let TurkeyProperties = {
  MAX_CHILDREN: 5,
  SHOOT_SETTINGS: combineStats([g.drone, g.over]),
  TYPE: exports.drone,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

let TurkeyAutoProperties = {
  MAX_CHILDREN: 5,
  SHOOT_SETTINGS: combineStats([g.drone, g.over]),
  TYPE: [
    exports.drone,
    {
      AI: {
        skynet: true
      },
      INDEPENDENT: true
    }
  ],
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
};

exports.Turkey_Mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Turkey",
  NAME: "Turkey",
  DANGER: 7,
  SIZE: 50,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  VALUE: 400000,
  BODY: {
    REGEN: 0,
    FOV: 2.4,
    SHIELD: 0,
    ACCEL: 0.5,
    SPEED: 2,
    HEALTH: 500,
    PUSHABILITY: 0.15,
    DENSITY: 0.2
  },
  LIFETIME: true,
  TURRETS: [
    {
      /******  SIZE      X       Y     ANGLE    ARC  LAYER */
      POSITION: [10.76, 8.75, 0, 0, -15, 1],
      TYPE: [
        exports.Turkey_Head,
        {
          CONTROLLERS: [
            "onlyAcceptInArc",
            "mapAltToFire",
            "nearestDifferentMaster"
          ]
        }
      ]
    }
  ],
  GUNS: [
    {
      /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18.0, 4.69, 1, 0, 0, 135, 2 / 3],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [20.96, 6.69, 1, 0, 0, 157.5, 1 / 3],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [18.0, 4.69, 1, 0, 0, 225, 2 / 3],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [20.96, 6.69, 1, 0, 0, 202.5, 1 / 3],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [24.09, 8.69, 1, 0, 0, 180, 0],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [24.09, 8.69, 1, 0, 0, 180, 0],
      PROPERTIES: TurkeyAutoProperties
    },
    {
      POSITION: [4, 5, 1, 10, 0, 105, 0.1],
      PROPERTIES: TurkeyProperties
    },
    {
      POSITION: [4, 5, 1, 10, 0, -105, 0.1],
      PROPERTIES: TurkeyProperties
    }
  ]
};
exports.penta3 = {
  PARENT: [exports.genericTank],
  LABEL: "Starburst",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [14, 5, 1, 0, -2, -55, 0.106],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 2, 55, 0.106],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 2, -40, 0.999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, -2, 40, 0.999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, -3, -25, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 3, 25, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, -2, -10, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 5, 1, 0, 2, 10, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
(exports.defender = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Defender",
  COLOR: 2,
  SHAPE: 3,
  SIZE: 22,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 8, 1, 0, 0, 60, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.power]),
        TYPE: [exports.trap, { INDEPENDENT: true, COLOR: 13 }]
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.power]),
        TYPE: [exports.trap, { INDEPENDENT: true, COLOR: 13 }]
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 300, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload, g.power]),
        TYPE: [exports.trap, { INDEPENDENT: true, COLOR: 13 }]
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 7, 0, 0, 360, 1],
      TYPE: [exports.autoTurret]
    },
    {
      POSITION: [4, 7, 0, 120, 360, 1],
      TYPE: [exports.autoTurret]
    },
    {
      POSITION: [4, 7, 0, 240, 360, 1],
      TYPE: [exports.autoTurret]
    }
  ]
}),
  (exports.runner = {
    PARENT: [exports.genericTank],
    LABEL: "Runner",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.85,
      ACCELERATION: base.ACCEL * 0.8
    },
    PERSONAL_MESSAGE: "Right-Click To Jump.",
    TURRETS: [
      {
        /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, 5, 0, 0, 360, 1],
        TYPE: exports.targetsymbol
      },
      {
        /** SIZE     X       Y     ANGLE    ARC */
        POSITION: [6, -5, 0, 0, 360, 1],
        TYPE: exports.jumpsymbol
      }
    ],
    INVISIBLE: [0.09, 0.01],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 4, 1.1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.fake,
            g.lotsmorrecoil,
            g.lotsmorrecoil,
            g.lotsmorrecoil,
            g.halfreload,
            g.halfreload
          ]),
          TYPE: exports.bullet,
          ALT_FIRE: true
        }
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
          TYPE: exports.bullet,
          ALT_FIRE: false
        }
      }
    ]
  });
exports.stellar = {
  PARENT: [exports.genericTank],
  LABEL: "Stellar",
  SIZE: 16,
  BODY: {
    FOV: 1.2
  },
  COLOR: 7,
  SHAPE: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 324, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [9, 8, 0, 36, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [9, 8, 0, 108, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [9, 8, 0, 180, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [9, 8, 0, 252, 190, 0],
      TYPE: exports.trapTurret
    }
  ]
};
exports.celestialTrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  INDEPENDENT: false,
  COLOR: 16,
  MAX_CHILDREN: 18,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          [6, 1, 1, 1, 2, 1, 0.25, 1, 1, 1, 10, 1, 1]
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: false
      }
    }
  ]
};
let celestialTrapTurretArray = [];
for (let i = 0; i < 9; i++) {
  celestialTrapTurretArray.push({
    POSITION: [6, 9, 0, i * (360 / 9) + 360 / 9 / 2, 0, 0],
    TYPE: [exports.celestialTrapTurret, {}]
  });
}
exports.paladinSunchipBody = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin Sunchip",
  SHAPE: 7,
  SIZE: 10,
  BODY: {
    FOV: 100
  },
  CONTROLLERS: ["slowreversespin", "nearestDifferentMaster"],
  MAX_CHILDREN: 28,
  GUNS: []
};
for (let i = 0; i < 7; i++)
  exports.paladinSunchipBody.GUNS.push({
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 6.5, 1.2, 7.5, 0, (360 / 7) * i + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
      TYPE: [
        exports.gunchip,
        {
          INDEPENDENT: true,
          BODY: {
            FOV: 5
          }
        }
      ],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.necro
    }
  });
exports.paladinSunchipBodyai = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin Sunchip",
  SHAPE: 7,
  SIZE: 10,
  BODY: {
    FOV: 1.5
  },
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["crazyspin", "nearestDifferentMaster"],
  MAX_CHILDREN: 40,
  GUNS: []
};
for (let i = 0; i < 7; i++)
  exports.paladinSunchipBodyai.GUNS.push({
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 6.5, 1.2, 7.5, 0, (360 / 7) * i + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.pound, g.morehealth]),
      TYPE: [
        exports.gunchip,
        {
          INDEPENDENT: true,
          BODY: {
            FOV: 1.4
          }
        }
      ],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.necro
    }
  });
exports.celestialHive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  MAX_CHILDREN: 4,
  BODY: {
    RANGE: 90
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  GUNS: []
};
for (let i = 0; i < 5; i++)
  exports.celestialHive.GUNS.push({
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 9.5, 0.6, 7, 0, (360 / 5) * i, (1 / 5) * i],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.swarm,
        g.hive,
        g.bees,
        g.power,
        g.morehealth,
        [1.5, 1, 1, 1, 1, 1.5, 1, 1.5, 1.5, 0.5, 10, 1, 1]
      ]),
      TYPE: exports.bee,
      AUTOFIRE: true,
      STAT_CALCULATOR: gunCalcNames.swarm
    }
  });
exports.paladinSwarmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: base.FOV * 1.5
  },
  INDEPENDENT: true,
  HAS_NO_RECOIL: true,
  LABEL: "Swarmer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 1, 1, 1]
        ]),
        TYPE: exports.celestialHive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
};
exports.paladinSwarmerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin Swarmer",
  SHAPE: 5,
  SIZE: 10,
  CONTROLLERS: ["slowspin"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.paladinSwarmer
    }
  ]
};
exports.paladinSwarmerBodyai = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin Swarmer",
  SHAPE: 5,
  SIZE: 10,
  CONTROLLERS: ["nearestDifferentMaster", "superspin"],
  INDEPENDENT: true,

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.paladinSwarmer
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.paladinSwarmer
    }
  ]
};
exports.paladin = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Paladin",
  COLOR: 14,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  SKILL: skillSet({
    spd: 1
  }),
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.paladinSunchipBody,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.paladinSwarmerBody,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.theiaGun = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  INDEPENDENT: true,
  LABEL: "",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 14, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.twistmissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.theiaBody = {
  PARENT: [exports.genericTank],
  LABEL: "Theia Twister",
  SHAPE: 5,
  SIZE: 10,
  CONTROLLERS: ["slowspin"],
  INDEPENDENT: true,
  SKILL: skillSet({
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1
  }),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.theiaGun
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.theiaGun
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.theiaGun
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.theiaGun
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.theiaGun
    }
  ]
};
exports.theiaBody2 = {
  PARENT: [exports.genericTank],
  LABEL: "Theia Sunchip",
  SHAPE: 7,
  SIZE: 10,
  CONTROLLERS: ["slowreversespin"],
  SKILL: skillSet({
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1
  }),
  MAX_CHILDREN: 35,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 6.5, 1.2, 7.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, 26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -26, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -77.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [4, 6.5, 1.2, 7.5, 0, -129, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: [exports.sunchip, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ]
};
exports.theia = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Theia",
  COLOR: 13,
  SHAPE: 9,
  SIZE: 50,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  SKILL: skillSet({
    spd: 1
  }),
  FACING_TYPE: "autospin",
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.theiaBody2, { COLOR: 13 }]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.theiaBody, { COLOR: 13 }]
    }
  ]
};
exports.paladinai = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Paladin",
  COLOR: 14,
  SHAPE: 9,
  SIZE: 40,
  DANGER: 11,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  SKILL: skillSet({
    rld: 0,
    dam: 0.6,
    pen: 0.9,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    FOV: 1.1,
    SPEED: base.SPEED * 1.15,
    HEALTH: 18000,
    ACCELERATION: base.ACCEL * 1.1,
    DENSITY: base.DENSITY * 10
  },
  BROADCAST_MESSAGE: "A visitor has left!",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "canRepel",
    "superspin"
  ],
  AI: { NO_LEAD: true },
  HITS_OWN_TYPE: "hard",
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.paladinSunchipBodyai,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.paladinSwarmerBodyai,
        {
          COLOR: 14
        }
      ]
    }
  ]
};
exports.freyjaCruiserTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  STAT_NAMES: statnames.swarm,
  BODY: {
    FOV: base.FOV * 10
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          [8, 0, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 10, 1, 1]
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          [8, 0, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 10, 1, 1]
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.freyjaCruiserBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja Swarm",
  SHAPE: 7,
  SIZE: 10,
  CONTROLLERS: ["slowreversespin"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 9, 0, (360 * 3.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 7, 180, 0],
      TYPE: exports.freyjaCruiserTurret
    }
  ]
};
exports.freyjaGunnerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Freyja Gunner",
  SHAPE: 5,
  SIZE: 10,
  CONTROLLERS: ["slowspin"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 108, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, 35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -35, 120, 0],
      TYPE: exports.auto4gun
    },
    {
      POSITION: [10, 8, 0, -108, 120, 0],
      TYPE: exports.auto4gun
    }
  ]
};
exports.freyja = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Freyja",
  COLOR: 1,
  SHAPE: 9,
  SIZE: 40,
  SKILL: skillSet({
    spd: 1
  }),
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.freyjaCruiserBody,
        {
          COLOR: 1
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.freyjaGunnerBody,
        {
          COLOR: 1
        }
      ]
    }
  ]
};
exports.zaphkielDroneBody = {
  PARENT: [exports.genericTank],
  LABEL: "Zaphkiel Drone",
  SHAPE: 7,
  SIZE: 10,
  BODY: {
    FOV: 100
  },
  CONTROLLERS: ["slowreversespin"],
  MAX_CHILDREN: 28,
  GUNS: []
};
for (let i = 0; i < 7; i++)
  exports.zaphkielDroneBody.GUNS.push({
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4, 6.5, 1.2, 7.5, 0, (360 / 7) * i + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.drone,
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]),
      TYPE: [
        exports.drone,
        {
          INDEPENDENT: true,
          BODY: {
            FOV: 5
          }
        }
      ],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone
    }
  });
exports.zaphkielSkimmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  BODY: {
    FOV: base.FOV * 1.15
  },
  LABEL: "Skimmer",
  DANGER: 7,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.4, 1, 1, 1]
        ]),
        TYPE: exports.hypermissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.zaphkielSkimmerBody = {
  PARENT: [exports.genericTank],
  LABEL: "Zaphkiel Skimmer",
  SHAPE: 5,
  SIZE: 10,
  CONTROLLERS: ["slowspin"],
  INDEPENDENT: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 180, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, 108, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, 35, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, -35, 180, 0],
      TYPE: exports.zaphkielSkimmer
    },
    {
      POSITION: [9, 8, 0, -108, 180, 0],
      TYPE: exports.zaphkielSkimmer
    }
  ]
};
exports.zaphkiel = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  NAME: "Zaphkiel",
  COLOR: 2,
  SHAPE: 9,
  SIZE: 40,
  VARIES_IN_SIZE: false,
  VALUE: 1000000,
  TURRETS: [
    ...celestialTrapTurretArray,
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.zaphkielDroneBody,
        {
          COLOR: 2
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.zaphkielSkimmerBody,
        {
          COLOR: 2
        }
      ]
    }
  ]
};

exports.yellowcelestialpent = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: ["slowspin"],
  BODY: {
    FOV: 3
  },
  COLOR: 3,
  SHAPE: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 324, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [9, 8, 0, 36, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [9, 8, 0, 108, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [9, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun
    },
    {
      POSITION: [9, 8, 0, 252, 190, 0],
      TYPE: exports.sniper3gun
    }
  ]
};
exports.yellowcelestialhept = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  COLOR: 3,
  SHAPE: 7,
  CONTROLLERS: ["slowreversespin"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8.5, 0, 25.7142855, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 77.1428565, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 128.5714275, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 179.9999985, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 231.4285695, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 282.8571405, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    },
    {
      POSITION: [9, 8.5, 0, 334.2857115, 190, 0],
      TYPE: [exports.factory, { INDEPENDENT: false, MAX_CHILDREN: 2 }]
    }
  ]
};
exports.ravager = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75
  },
  LABEL: "Ravager",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0]
    }
  ]
};
exports.yellowcelestial = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  SHAPE: 9,
  NAME: "Charlemagne",
  DANGER: 11,
  MAX_CHILDREN: 750,
  VALUE: 1000000,
  BODY: {
    HEALTH: 35000
  },
  COLOR: 3,
  SIZE: 50,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 8, 0, 20, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 60, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 100, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 140, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 180, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 220, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 260, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 300, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 340, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.yellowcelestialhept
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.yellowcelestialpent
    }
  ]
};
exports.pinkcelestialpent = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: ["slowspin"],
  BODY: {
    FOV: 3
  },
  COLOR: 5,
  SHAPE: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 324, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [9, 8, 0, 36, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [9, 8, 0, 108, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [9, 8, 0, 180, 190, 0],
      TYPE: exports.machineAutoTurret
    },
    {
      POSITION: [9, 8, 0, 252, 190, 0],
      TYPE: exports.machineAutoTurret
    }
  ]
};
exports.rotaderP = {
  PARENT: [exports.genericTank],
  LABEL: "rotaderP",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 11, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.pinkcelestialhept = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  COLOR: 5,
  SHAPE: 7,
  CONTROLLERS: ["slowreversespin"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 7, 0, 25.7142855, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 77.1428565, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 128.5714275, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 179.9999985, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 231.4285695, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 282.8571405, 190, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [9, 7, 0, 334.2857115, 190, 0],
      TYPE: exports.bigauto4gun
    }
  ]
};
exports.tealcelestialpent = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: ["slowspin"],
  BODY: {
    FOV: 3
  },
  COLOR: 20,
  SHAPE: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 324, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [9, 8, 0, 36, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [9, 8, 0, 108, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [9, 8, 0, 180, 190, 0],
      TYPE: exports.heavy3gun
    },
    {
      POSITION: [9, 8, 0, 252, 190, 0],
      TYPE: exports.heavy3gun
    }
  ]
};
exports.tealcelestialhept = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  COLOR: 20,
  SHAPE: 7,
  CONTROLLERS: ["slowreversespin"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 7, 0, 25.7142855, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 77.1428565, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 128.5714275, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 179.9999985, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 231.4285695, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 282.8571405, 190, 0],
      TYPE: exports.hunter
    },
    {
      POSITION: [9, 7, 0, 334.2857115, 190, 0],
      TYPE: exports.hunter
    }
  ]
};
exports.pinkcelestial = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  SHAPE: 9,
  MAX_CHILDREN: 750,
  NAME: "Aries",
  VALUE: 1000000,
  DANGER: 11,
  SKILL: skillSet({
    spd: 1
  }),
  COLOR: 5,
  SIZE: 50,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 21,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 8, 0, 20, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 60, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 100, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 140, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 180, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 220, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 260, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 300, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 340, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.pinkcelestialhept
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.pinkcelestialpent
    }
  ]
};
exports.tealcelestial = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  SHAPE: 9,
  MAX_CHILDREN: 750,
  NAME: "Vidar",
  VALUE: 1000000,
  DANGER: 11,
  BODY: {
    HEALTH: 35000
  },
  SKILL: skillSet({
    spd: 1
  }),
  COLOR: 20,
  SIZE: 50,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 8, 0, 20, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 60, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 100, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 140, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 180, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 220, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 260, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 300, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 340, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.tealcelestialhept
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.tealcelestialpent
    }
  ]
};
exports.rainbowcelestialpent = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: ["slowspin"],
  BODY: {
    FOV: 3
  },
  COLOR: 36,
  SHAPE: 5,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 8, 0, 324, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [9, 8, 0, 36, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [9, 8, 0, 108, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [9, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun
    },
    {
      POSITION: [9, 8, 0, 252, 190, 0],
      TYPE: exports.auto3gun
    }
  ]
};
exports.rainbowcelestialhept = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3
  },
  COLOR: 36,
  SHAPE: 7,
  CONTROLLERS: ["slowreversespin"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 7.5, 0, 25.7142855, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 77.1428565, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 128.5714275, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 179.9999985, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 231.4285695, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 282.8571405, 190, 0],
      TYPE: exports.slowautoTurret
    },
    {
      POSITION: [9, 7.5, 0, 334.2857115, 190, 0],
      TYPE: exports.slowautoTurret
    }
  ]
};
exports.rainbowcelestial = {
  PARENT: [exports.miniboss],
  LABEL: "Celestial",
  SHAPE: 9,
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 750,
  NAME: "xX_N00BSLAYER69_Xx",
  VALUE: 1000000,
  DANGER: 11,
  BODY: {
    HEALTH: 35000
  },
  COLOR: 36,
  SIZE: 50,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1.6,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 8, 0, 20, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 60, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 100, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 140, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 180, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 220, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 260, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 300, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      POSITION: [6, 8, 0, 340, 190, 0],
      TYPE: exports.trapTurret
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.rainbowcelestialhept
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.rainbowcelestialpent
    }
  ]
};
exports.plusCenter = {
  PARENT: [exports.genericEntity],
  LABEL: "",
  COLOR: 12,
  SHAPE: [
    [-0.2, 1],
    [-0.2, 0.2],
    [-1, 0.2],
    [-1, -0.2],
    [-0.2, -0.2],
    [-0.2, -1],
    [0.2, -1],
    [0.2, -0.2],
    [1, -0.2],
    [1, 0.2],
    [0.2, 0.2],
    [0.2, 1]
  ],
  SIZE: 10
};
exports.ohshitohfuck = {
  PARENT: [exports.genericTank],
  LABEL: "Vortex",
  GUNS: []
};
for (let i = 0; i < 180; i++)
  exports.ohshitohfuck.GUNS.push(
    {
      POSITION: [18, 8, 1, i / 2, 0, i, 1]
    },
    {
      POSITION: [18, 8, 1, i / 2, 0, i + 120, 1]
    },
    {
      POSITION: [18, 8, 1, i / 2, 0, i + 240, 1]
    }
  );
exports.healer = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  STAT_NAMES: statnames.healer,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 1.35,
    FOV: base.FOV * 1.3,
    STEALTH: 9,
    HEALTH: base.HEALTH * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, -0.7, 13, 0, 0, 0]
    },
    {
      POSITION: [20, 10, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.halfreload,
          g.notdense
        ]),
        TYPE: exports.hebullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.plusCenter,
      COLOR: 3
    }
  ]
};
exports.traitor = {
  PARENT: [exports.genericTank],
  LABEL: "Traitor",
  STAT_NAMES: statnames.healer,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
    STEALTH: 9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.hebullet2,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [2, 0, 0, 0, 360, 1],
      TYPE: exports.plusCenter,
      COLOR: 0
    }
  ]
};
exports.machinegunner2 = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun MKII",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9
  },
  SKILL: skillSet({
    spd: 1
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -3.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.25, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 3.5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.25, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 1, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 10, -1.8, 5.5, 0, 0, 0]
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.medic = {
  PARENT: [exports.genericTank],
  PERSONAL_MESSAGE: "Right Click To Fire The Main Gun.",
  LABEL: "Medic",
  STAT_NAMES: statnames.healer,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
    STEALTH: 9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -10, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 10, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.morespeed
        ]),
        TYPE: exports.hebullet,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.plusCenter,
      COLOR: 3
    }
  ]
};

exports.santop = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  STAT_NAMES: statnames.healer,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
    STEALTH: 9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.hebullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 120, 0.5]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.hebullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 240, 1]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 240, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.hebullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.plusCenter,
      COLOR: 3
    }
  ]
};
exports.EK2 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "EK-2",
    COLOR: 6,
    SIZE: 30,
    VALUE: 500000,
    SKILL: skillSet({
      spd: 1
    }),
    MAX_CHILDREN: 700,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      FOV: 1.7,

      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [11, 10, 0, 0, 190, 0],
        TYPE: exports.gunner
      },
      {
        POSITION: [3, 12, 4, 60, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 12, -4, 60, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 10, 0, 120, 190, 0],
        TYPE: exports.gunner
      },
      {
        POSITION: [3, 12, 4, 180, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 12, -4, 180, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 10, 0, 240, 190, 0],
        TYPE: exports.gunner
      },
      {
        POSITION: [3, 12, 4, 300, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 12, -4, 300, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [exports.auto5gun, { COLOR: 16 }]
      },
      {
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: exports.dominatorbody
      }
    ],
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [11, 4.5, 0.6, 7, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 4.5, 0.6, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [11, 4.5, 0.6, 7, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
})();
exports.kioskGun = {
  PARENT: [exports.genericTank],
  LABEL: "Auto Turret",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.morespeed,
          g.fast
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.kioskSnipe = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper Turret",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6, 9, -1.25, 8, 0, 0, 0]
    }
  ]
};
exports.kiosk = {
  PARENT: [exports.miniboss],
  LABEL: "Kiosk",
  //DANGER: 6,
  SHAPE: 4,
  SIZE: 24,
  COLOR: 1,
  VALUE: 250000,
  BODY: {
    FOV: 2.5,
    SPEED: base.SPEED * 0.1,
    HEALTH: 300,
    SHIELD: 1,
    REGEN: 0.1,
    DAMAGE: 3
  },
  FACING_TYPE: "toTarget",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.kioskSnipe
    },
    {
      POSITION: [10, 8, 0, 90, 270, 0],
      TYPE: [exports.kioskGun, { COLOR: 1 }]
    },
    {
      POSITION: [10, 8, 0, -90, 270, 0],
      TYPE: [exports.kioskGun, { COLOR: 1 }]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.destroy,
          g.destroy,
          g.morespeed
        ]),
        TYPE: [exports.sunchip, { BODY: { FOV: 1.75 } }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 25
      }
    }
  ]
};
exports.ambulance = {
  PARENT: [exports.genericTank],
  LABEL: "Ambulance",
  STAT_NAMES: statnames.healer,
  PERSONAL_MESSAGE: "Right Click To Fire The Main Gun.",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
    STEALTH: 9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.7, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.morespeed
        ]),
        TYPE: exports.hebullet,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 0, 360, 1],
      TYPE: exports.plusCenter,
      COLOR: 3
    }
  ]
};
exports.haven = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Sanctuary",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.8
  },
  STAT_NAMES: statnames.trap,
  PERSONAL_MESSAGE: "Right Click To Fire Traps.",
  HAS_NO_RECOIL: true,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [10, 0, 0, 180, 360, 1],
      TYPE: exports.santop
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0]
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        ALT_FIRE: true,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.autoboss = {
  PARENT: [exports.miniboss],
  LABEL: "Automator",
  DANGER: 7,
  SHAPE: 0,
  SIZE: 35,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 10, 0, 0, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 22.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 45, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 67.5, 190, 0],
      TYPE: exports.autoTurret,
      POSITION: [4, 10, 0, 0, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 22.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 45, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 67.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 90, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 112.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 135, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 157.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 180, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 202.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 225, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 247, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 247.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 270, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 292.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 315, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 337.5, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 360, 190, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.bansheegun
    }
  ]
};
exports.auto25 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-25",
  SIZE: 25,
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5
    }
  ]
};
exports.elite_machine = {
  LABEL: "Elite Machine",
  PARENT: [exports.elite],
  GUNS: [
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, 180, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, -60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, -60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, -60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, -60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 5.5, 60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, 11, 60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -5.5, 60, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3.5, 2.8, 1.4, 8, -11, 60, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.threequartersrof]),
        TYPE: exports.bullet
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.sniper3gun, { INDEPENDENT: true, COLOR: 5 }]
    }
  ]
};

exports.leviathan = {
  PARENT: [exports.genericTank],
  LABEL: "Leviathan",
  DANGER: 7,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    HEALTH: 375
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3.5, 10, 0, 0, 360, 1],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [3.5, 10, 0, 72, 360, 1],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [3.5, 10, 0, 144, 360, 1],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [3.5, 10, 0, 216, 360, 1],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [3.5, 10, 0, 288, 360, 1],
      TYPE: exports.auto5gun
    },
    {
      POSITION: [6.5, 0, 0, 0, 360, 1],
      TYPE: exports.shotgun2
    }
    // you have to put a tank that is on top or higher thannthre actual tank also a tank that exists
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 8.5, 1.2, 8, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak]),
        TYPE: exports.drone,
        MAX_CHILDREN: 6,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3.5, 8.5, 1.2, 8, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak]),
        TYPE: exports.drone,
        MAX_CHILDREN: 6,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3.5, 8.5, 1.2, 8, 0, -108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak]),
        TYPE: exports.drone,
        MAX_CHILDREN: 6,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3.5, 8.5, 1.2, 8, 0, -36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak]),
        TYPE: exports.drone,
        MAX_CHILDREN: 6,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3.5, 8.5, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.weak]),
        TYPE: exports.drone,
        MAX_CHILDREN: 6,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.snipebrid = makeHybrid(exports.sniper, "Snipebrid");
exports.poundhybrid = makeHybrid(exports.pound, "Poundbrid");
exports.twinhybrid = makeHybrid(exports.twin, "Twinbrid");
exports.swarmgun = {
  PARENT: [exports.genericTank],
  LABEL: "Swarm Guard",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.deadspot = {
  PARENT: [exports.genericTank],
  LABEL: "Quadruple Twin",
  DANGER: 8,
  MAX_CHILDREN: 375,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.booster2 = {
  PARENT: [exports.genericTank],
  LABEL: "Teamer",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2
  },
  DANGER: 9,
  CONTROLLERS: ["superspin"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19.5, 8, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  DANGER: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.fake,
          g.halfrecoil,
          g.halfrecoil
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.inception = {
  PARENT: [exports.genericTank],
  LABEL: "Inceptioner",
  DANGER: 5,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 18, 0, 0, 0, 0],
      TYPE: exports.fakeAutoTurret
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.turretbullet
      }
    }
  ]
};

exports.auto4trap = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Trapper-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.trapTurretcrash,
      INDEPENDENT: true
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.trapTurretcrash,
      INDEPENDENT: true
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.trapTurretcrash,
      INDEPENDENT: true
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.trapTurretcrash,
      INDEPENDENT: true
    }
  ]
};
exports.really = {
  PARENT: [exports.genericTank],
  LABEL: "Warship",
  MAX_CHILDREN: 325,
  DANGER: 8,
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessdamage]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lessdamage]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 8, 0.7, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 8, 0.7, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.halfreload,
          g.lessdamage
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 8, 0.7, 7, -4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.halfreload,
          g.lessdamage
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    },
    {
      POSITION: [7, 8, 0.7, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided"
      }
    }
  ]
};
exports.cannongun2 = {
  PARENT: [exports.genericTank],
  LABEL: "Rotary",

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, -3.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 12, -1.4, 6.5, 0, 0, 0]
    }
  ]
};
exports.cutecutter = {
  PARENT: [exports.miniboss],
  LABEL: "Doomer",
  COLOR: 15,
  SHAPE: -5,
  SIZE: 28,
  VALUE: 500000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 1,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3
  },
  SIZE: 20,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 8, 0, 36, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [7, 8, 0, 108, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [7, 8, 0, 252, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [7, 8, 0, 180, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [7, 8, 0, 324, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [
        exports.baseGunTurret,
        {
          INDEPENDENT: true,
          COLOR: 5
        }
      ]
    }
  ]
};
exports.partsin = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Part",
  SIZE: 12,
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [12.185, 3.2, 1, 0, -1.385, 299.685, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.185, 3.2, 1, 0, 1.385, 299.916, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [9.138, 1.6, 1, 0, 4.154, 298.599, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [9.138, 1.6, 1, 0, -4.154, 298.599, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.185, 3.2, 1, 0, -1.385, -299.685, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.185, 3.2, 1, 0, 1.385, -299.916, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [9.138, 1.6, 1, 0, 4.154, -298.599, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [9.138, 1.6, 1, 0, -4.154, -298.599, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.part2trap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Part",
  SIZE: 12,
  SHAPE: 3,
  GUNS: [
    {
      POSITION: [18, 8, 1, 0, 0, 359.66, 0]
    },
    {
      POSITION: [3, 8, 1.3, 18, 0, 359.66, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [15.231, 4.8, 1, -3.046, -9.138, 348.756, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15.231, 4.8, 1, -3.046, 9.138, 11.1, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.AWPsin4pi45 = {
  PARENT: [exports.miniboss],
  LABEL: "AWP-45",
  SIZE: 20,
  SHAPE: 4,
  COLOR: 3,
  TURRETS: [
    {
      /*SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.autoTurret, {}]
      // 1
    },
    {
      POSITION: [13, 15, 0, 0, 0, 0],
      TYPE: [exports.partsin, { INDEPENDENT: false, COLOR: 3 }]
    },
    {
      POSITION: [13, 15, 0, 180, 0, 0],
      TYPE: [exports.part2trap, { INDEPENDENT: false, COLOR: 3 }]
    }
  ]
};

exports.teraminion = {
  PARENT: [exports.genericTank],
  LABEL: "Tera Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  MAX_CHILDREN: 350,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  COLOR: 1,
  SHAPE: 4,
  TURRETS: [
    {
      /*SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.autoTurret, {}]
      // 1
    },
    {
      POSITION: [13, 15, 0, 0, 0, 0],
      TYPE: [exports.partsin, { INDEPENDENT: false, COLOR: 1 }]
    },
    {
      POSITION: [13, 15, 0, 180, 0, 0],
      TYPE: [exports.part2trap, { INDEPENDENT: false, COLOR: 1 }]
    }
  ]
};
exports.AWP69 = {
  PARENT: [exports.miniboss],
  SIZE: 33,
  SHAPE: [
    [-0.5, -1],
    [0.5, -1],
    [1.39, -0.513],
    [1.4, 0.49],
    [0.5, 1],
    [-0.5, 0.99],
    [-1.4, 0.5],
    [-1.39, -0.49]
  ],
  SKILL: skillSet({
    spd: 1
  }),
  COLOR: 1,
  LABEL: "AWP-69",
  TURRETS: [
    {
      /*SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 10, 0, 0, 360, 0],
      TYPE: [exports.stream, { COLOR: 10 }]
    }
  ],
  GUNS: [
    {
      POSITION: [5, 15, 1, 10.5, 0, 90, 0]
    },
    {
      POSITION: [2, 18, 1, 15.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.teraminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 18, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 15, 1, 10.5, 0, 270, 0]
    },
    {
      POSITION: [2, 18, 1, 15.5, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.teraminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 18, 1, 8, 0, 270, 0]
    }
  ]
};
exports.pentseer = {
  SIZE: 45,
  PARENT: [exports.miniboss],
  LABEL: "Nest Keeper",
  DANGER: 11,
  COLOR: 14,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: 1.1,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SHAPE: 5,
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 6, 1.2, 8, 0, 110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, -110, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    },
    {
      POSITION: [3, 6, 1.2, 8, 0, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro
      }
    }
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 9.1, 0, 72, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 144, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 216, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 288, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [7, 9.1, 0, 360, 190, 0],
      TYPE: [
        exports.auto4gun,
        {
          COLOR: 14
        }
      ]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [
        exports.boomerturret,
        {
          INDEPENDENT: false,
          COLOR: 14
        }
      ]
    }
  ]
};
exports.sassaminion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion of Sassafras",
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",

  AI: {
    BLIND: true
  },
  INDEPENDENT: true,
  SHAPE: 6,
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: false,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.sassaeye
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    }
  ]
};
exports.sassa = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload
    ]),
    TYPE: exports.sassaminion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Sassafras",
    SKILL: skillSet({
      spd: 1
    }),
    COLOR: 35,
    SHAPE: 6,
    SIZE: 28,
    MAX_CHILDREN: 20,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 1,
      HEALTH: base.HEALTH * 1.3,
      SHIELD: base.SHIELD * 1.6,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 2
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [5, 7, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 7, 1.2, 8, 0, 240, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 7, 1.2, 8, 0, 300, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 7, 1.2, 8, 0, 120, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,

          LABEL: "Guard"
        }
      },
      {
        POSITION: [5, 7, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          LABEL: "Guard"
        }
      },
      {
        POSITION: [5, 7, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory, g.huge]),
          TYPE: exports.sassaminion,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [4.5, 8, 0, 30, 110, 1],
        TYPE: exports.baseGunTurret
      },
      {
        POSITION: [4.5, 8, 0, 90, 110, 1],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [4.5, 8, 0, 150, 110, 1],
        TYPE: exports.baseGunTurret
      },
      {
        POSITION: [4.5, 8, 0, 210, 110, 1],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [4.5, 8, 0, 270, 110, 1],
        TYPE: exports.baseGunTurret
      },
      {
        POSITION: [7, 0, 0, 0, 190, 1],
        TYPE: [exports.sassaeye]
      },
      {
        POSITION: [4.5, 8, 0, 330, 110, 1],
        TYPE: exports.trapTurret
      }
    ]
  };
})();

exports.baseProtector5 = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 75,
  TYPE: "wall",
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 0.5,
    PUSHABILITY: 0,
    HETERO: 0
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.trapTurretcrash
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.trapTurretcrash
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.trapTurretcrash
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.trapTurretcrash
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};
exports.baseGunTurret1 = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  TYPE: "wall",
  BODY: {
    FOV: 1.21
  },
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  ACCEPTS_SCORE: false,
  HAS_NO_RECOIL: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.verydense,
          g.protectorswarm,
          g.halfdamage
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.verydense,
          g.protectorswarm,
          g.halfdamage
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.baseProtector6 = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  DANGER: 0,
  TYPE: "wall",
  SIZE: 75,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 100000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1.2,
    PUSHABILITY: 0,
    HETERO: 0
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseGunTurret1
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseGunTurret1
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseGunTurret1
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseGunTurret1
    }
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0]
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0]
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0]
    }
  ]
};

exports.flankception = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Flankceptioner",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  BODY: {
    SPEED: base.SPEED * 1.02
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    }
  ]
};
exports.yeet = {
  PARENT: [exports.genericTank],
  LABEL: "YEETER",
  DANGER: 11,
  RANGE: 300,
  SIZE: 15,
  BODY: {
    REGEN: base.REGEN * -999,
    HEALTH: base.HEALTH * -990
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [
        exports.plusCenter,
        {
          COLOR: 22,
          CONTROLLERS: ["superspin"]
        }
      ]
    }
  ]
};

exports.hexaception = {
  PARENT: [exports.genericTank],
  LABEL: "Hexaceptioner",
  DANGER: 7,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.turretbullet
      }
    }
  ]
};
exports.twintag = {
  PARENT: [exports.genericTank],
  LABEL: "Twintagion",
  STAT_NAMES: statnames.generic,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 6.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 6.5, 0, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 6.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [20, 8, 1, 0, -6.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.subduer, g.halfdamage]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, -6.5, 0, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, -6.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.cannongun3 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  ACCEPTS_SCORE: false,
  SYNCS_SKILLS: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: false,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, -3.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power, g.fast]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 12, -1.4, 6.5, 0, 0, 0]
    }
  ]
};
exports.spikeshell = {
  PARENT: [exports.elite],
  LABEL: "Shard",
  COLOR: 16,
  FACING_TYPE: "autospin",

  SHAPE: [
    [0.34, 0.94],
    [0.17, 0.99],
    [0.02, 0.996],
    [-0.17, 0.996],
    [-0.35, 0.94],
    [-1.49, 1.5],
    [-0.95, 0.34],
    [-0.993, 0.176],
    [-1, -0.03],
    [-0.99, -0.21],
    [-0.933, -0.37],
    [-1.5, -1.504],
    [-0.34, -0.94],
    [-0.15, -0.99],
    [0.007, -1.004],
    [0.207, -0.98],
    [0.34, -0.93],
    [1.507, -1.5],
    [0.93, -0.344],
    [1, -0.14],
    [1, 0.12],
    [0.947, 0.34],
    [1.5, 1.496]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 2.8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 0.7, 4, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 0.7, 4, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 0.7, 4, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 1, 0, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.8, 0.7, 4, 0, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.spikes = {
  PARENT: [exports.elite],
  LABEL: "Shard",
  SYNCS_SKILLS: true,
  COLOR: 16, //BODY: {FOV: 2,},
  FACING_TYPE: "autospin",
  SHAPE: [
    [0.34, 0.94],
    [0.17, 0.99],
    [0.02, 0.996],
    [-0.17, 0.996],
    [-0.35, 0.94],
    [-1.49, 1.5],
    [-0.95, 0.34],
    [-0.993, 0.176],
    [-1, -0.03],
    [-0.99, -0.21],
    [-0.933, -0.37],
    [-1.5, -1.504],
    [-0.34, -0.94],
    [-0.15, -0.99],
    [0.007, -1.004],
    [0.207, -0.98],
    [0.34, -0.93],
    [1.507, -1.5],
    [0.93, -0.344],
    [1, -0.14],
    [1, 0.12],
    [0.947, 0.34],
    [1.5, 1.496]
  ],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 0, 0],
      TYPE: [exports.spikeshell, { COLOR: 17 }]
    },
    {
      POSITION: [14, 0, 0, 0, 0, 1],
      TYPE: [exports.egg, { COLOR: 1 }]
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.cannongun3
    }
  ]
};
exports.shockmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      POSITION: [14, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.muchmorerecoil,
          g.lotsmorrecoil,
          g.lowpower,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfrecoil,
          g.halfrecoil,
          g.morespeed,
          g.morespeed,
          g.halfreload,
          g.halfreload,
          g.lowpower
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    }
  ]
};
//New code for the tank.
exports.shocker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
    FOV: base.FOV * 1.15
  },
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "Shocker",
  GUNS: [
    {
      POSITION: [15, 5, 2.5, 5, 0, 0, 0]
    },
    {
      POSITION: [10, 15, 1, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.shockmissile
      }
    }
  ]
};
exports.marauder = {
  PARENT: [exports.miniboss],
  LABEL: "Marauder",
  COLOR: 1, //BODY: {FOV: 2,},
  SIZE: 30,
  SHAPE: 0,

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3, 8, 2.5, 0, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, -2.5, 0, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, -2.5, 90, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, 2.5, 90, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, 2.5, 180, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, -2.5, 180, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, -2.5, 270, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [3, 8, 2.5, 270, 190, 1],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [13.5, 0, 0, 0, 0, 1],
      TYPE: exports.spikes
    }
  ]
};
exports.peashooter = {
  PARENT: [exports.genericTank],
  LABEL: "Peashooter",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.lessreload]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.deltahexa = {
  PARENT: [exports.elite],
  LABEL: "Delta Hexagon",
  COLOR: 1, //BODY: {FOV: 2,},
  SHAPE: 6,
  SKILL: skillSet({
    spd: 1
  }),
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.storm, { COLOR: 16, INDEPENDENT: false }]
    },
    {
      POSITION: [5, 10, 0, 59, /*19*/ 190, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 0, 119, /*19*/ 190, 0],
      TYPE: [exports.autoSmasherTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 0, 179, /*19*/ 190, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 0, 239, /*19*/ 190, 0],
      TYPE: [exports.autoSmasherTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 0, 299, /*19*/ 190, 0],
      TYPE: [exports.trapTurret, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 10, 0, 359, /*19*/ 190, 0],
      TYPE: [exports.autoSmasherTurret, { INDEPENDENT: false, COLOR: 16 }]
    }
  ]
};
exports.heli = {
  PARENT: [exports.genericTank],
  LABEL: "Helicopter",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [40, 0, 0, 0, 360, 1],
      TYPE: [
        exports.plusCenter,
        {
          COLOR: 17,
          CONTROLLERS: ["insanespin"]
        }
      ]
    }
  ],
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil
        ]),
        TYPE: exports.bullet,
        LABEL: "Front"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    }
  ]
};
exports.ultimatemultitool = {
  LABEL: "Ultimate Multitool",
  PARENT: [exports.genericTank],
  DANGER: 6,
  COLOR: 11,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.destroy,
      LABEL: "Devastator"
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.builder,
      LABEL: "Mega Constructor"
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.assassin,
      LABEL: "Warden"
    }
  ]
};
exports.awp1 = {
  PARENT: [exports.genericTank],
  COLOR: 13,
  SHAPE: 4,
  SIZE: 18,
  LABEL: "AWP-1",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      POSITION: [6, 7, 0, 45, 360, 1],
      TYPE: [
        exports.stream,
        {
          AUTOFIRE: false
        }
      ]
    },
    {
      POSITION: [10, 3, 0, 225, 360, 1],
      TYPE: [
        exports.hiveshooter,
        {
          AUTOFIRE: false
        }
      ]
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        MAX_CHILDREN: 6,
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 12, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 90, 0]
    },
    {
      POSITION: [4, 14, 1, 14, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        MAX_CHILDREN: 6,
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 12, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 180, 0]
    },
    {
      POSITION: [4, 14, 1, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        MAX_CHILDREN: 6,
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 12, 1, 8, 0, 180, 0]
    },
    {
      POSITION: [5, 11, 1, 10.5, 0, 270, 0]
    },
    {
      POSITION: [4, 14, 1, 14, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        MAX_CHILDREN: 6,
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 12, 1, 8, 0, 270, 0]
    }
  ]
};
exports.auto25auto = makeAuto(exports.auto25, "Auto-27", {
  type: exports.autoSmasherTurret,
  size: 10
});
exports.ragnarok = (() => {
  g.ragnarokGunnerCruiser = [3, 1, 1, 1, 1.25, 1.25, 2, 2, 2, 2, 1, 1, 1];
  exports.ragnarokGunnerCruiser = {
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1
    }),

    PARENT: [exports.autoTurretParent],
    GUNS: [
      {
        POSITION: [10, 8.5, 0.4, 0, 5.75, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.swarm,
            g.halfreload,
            g.morespeed,
            g.lessreload
          ]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [10, 8.5, 0.4, 0, -5.75, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.swarm,
            g.halfreload,
            g.morespeed,
            g.lessreload
          ]),
          TYPE: exports.swarm
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, 3, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.gunner,
            g.halfreload,
            g.morespeed,
            g.lessreload
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, -3, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.gunner,
            g.halfreload,
            g.morespeed
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  };
  exports.ragnarokGunnerCruiserBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner Cruiser",
    SHAPE: 5,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1
    }),
    CONTROLLERS: ["slowreversespin"],
    INDEPENDENT: true,
    TURRETS: (() => {
      let output = [];
      for (let i = 0; i < 5; i++)
        output.push({
          POSITION: [8, 9, 0, (360 / 5) * i + 360 / 10, 180, 0],
          TYPE: exports.ragnarokGunnerCruiser
        });
      return output;
    })()
  };
  g.ragnarokAutoSmasher = [3.2, 0, 1, 1, 0.8, 0.8, 1.25, 2, 2, 1.5, 2, 1, 1];
  exports.ragnarokAutoSmasherTurret = {
    PARENT: [exports.autoTurretParent],
    BODY: {
      FOV: 1
    },
    INDEPENDENT: true,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    GUNS: [
      {
        POSITION: [20, 6, 1, 0, 5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.ragnarokAutoSmasher,
            g.halfreload,
            g.morespeed
          ]),
          TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
          STAT_CALCULATOR: gunCalcNames.fixedReload
        }
      },
      {
        POSITION: [20, 6, 1, 0, -5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.ragnarokAutoSmasher,
            g.halfreload,
            g.morespeed
          ]),
          TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
          STAT_CALCULATOR: gunCalcNames.fixedReload
        }
      }
    ]
  };
  exports.ragnarokAutoSmasher = makeAuto(
    {
      PARENT: [exports.bullet],
      TURRETS: [
        {
          POSITION: [21.5, 0, 0, 0, 360, 0],
          TYPE: exports.smasherBody
        }
      ]
    },
    "Auto-Smasher",
    {
      type: exports.ragnarokAutoSmasherTurret,
      size: 11,
      SKILL: skillSet({
        spd: 1,
        rld: 0,
        dam: 0.6,
        pen: 0.9,
        dmg: 1,
        str: 1,
        rgn: 1,
        hlt: 1,
        mob: 1
      })
    }
  );
  exports.ragnarokAutoSmasherLauncher = {
    PARENT: [exports.autoTurretParent],
    INDEPENDENT: true,
    SKILL: skillSet({
      spd: 1,
      mob: 1
    }),
    GUNS: [
      {
        POSITION: [10, 13, -0.5, 9, 0, 0, 0]
      },
      {
        POSITION: [17, 14, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.halfreload,
            g.lessdamage,
            [2, 1, 1, 1.2, 2, 1, 1, 1.75, 1.75, 1.5, 1, 1, 1]
          ]),
          TYPE: exports.ragnarokAutoSmasher
        }
      }
    ]
  };
  exports.ragnarokAutoSmasherBody = {
    PARENT: [exports.genericTank],
    LABEL: "Auto Smasher",
    SHAPE: 7,
    CONTROLLERS: ["slowspin"],
    INDEPENDENT: true,
    TURRETS: (() => {
      let output = [];
      for (let i = 0; i < 7; i++)
        output.push({
          POSITION: [6, 9, 0, (360 / 7) * i + 360 / 14, 90, 0],
          TYPE: exports.ragnarokAutoSmasherLauncher
        });
      return output;
    })()
  };
  exports.ragnarokDrone = {
    PARENT: [exports.drone],
    SHAPE: 6
  };
  exports.ragnarokGemBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gem",
    SHAPE: 9,
    MAX_CHILDREN: 18,
    CONTROLLERS: ["slowreversespin"],
    INDEPENDENT: true,
    GUNS: (() => {
      let output = [];
      for (let i = 0; i < 9; i++)
        output.push({
          POSITION: [3.5, 6.5, 0.5, 7.5, 0, (360 / 9) * i + 360 / 18, 2],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([
              g.drone,
              g.halfreload,
              [1.6, 1, 1, 0.75, 1, 1.5, 1, 0.5, 0.5, 1, 1, 1, 1]
            ]),
            TYPE: [
              exports.ragnarokDrone,
              {
                INDEPENDENT: true,
                DRAW_HEALTH: true,
                BODY: {
                  FOV: 1.175
                }
              }
            ],
            AUTOFIRE: true,
            SYNC_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone
          }
        });
      return output;
    })()
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Ragnarok",
    COLOR: 0,
    DANGER: 100,
    SIZE: 75,
    FACING_TYPE: "autospin",
    BODY: {
      SPEED: base.SPEED * 0.5,
      HEALTH: base.HEALTH * 500,
      SHIELD: base.SHIELD * 50,
      REGEN: base.REGEN,
      ACCELERATION: base.ACCEL * 0.1,
      DENSITY: base.DENSITY * 90,
      FOV: base.FOV * 1.9
    },
      BROADCAST_MESSAGE: "A visitor has left!",
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel", "fleeAtLowHealth"],
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    MAX_CHILDREN: 800,
    SHAPE: 12,
    VALUE: 1000000,
    TURRETS: (() => {
      let output = [
        {
          POSITION: [17, 0, 0, 0, 360, 1],
          TYPE: [exports.ragnarokGemBody, { COLOR: 0 }]
        },
        {
          POSITION: [12, 0, 0, 0, 360, 1],
          TYPE: [exports.ragnarokAutoSmasherBody, { COLOR: 0 }]
        },
        {
          POSITION: [7, 0, 0, 0, 360, 1],
          TYPE: [exports.ragnarokGunnerCruiserBody, { COLOR: 0 }]
        }
      ];
      for (let i = 0; i < 11; i++)
        output.push({
          POSITION: [4, 9, 0, (360 / 11) * i + 360 / 22, 0, 0],
          TYPE: exports.celestialTrapTurret
        });
      return output;
    })()
  };
})();
exports.octom = {
  PARENT: [exports.genericTank],
  LABEL: "Octo-Machine",
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1.4, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.morespray,
          g.lessreload,
          g.spam
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.sprayq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Machine Trap",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1.9, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0]
    },
    {
      POSITION: [12, 10, -1.8, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.shotgun3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Scattergun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  GUNS: [
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0]
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 12, 1.7, 16.7, 0, 0, 0]
    },

    {
      POSITION: [2, 3, 1.7, 16.7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weak]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [4, 3, 1, 11, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weak]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [5, 5.8, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weak]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.weak]),
        TYPE: exports.trap
      }
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing
      }
    },
    {
      POSITION: [12, 11, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing
      }
    }
  ]
};

exports.sub = {
  INVISIBLE: [0.08, 0.03],
  PARENT: [exports.genericTank],
  LABEL: "Submarine",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.targetsymbol
    }
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 3.5, 2, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -3.5, -2, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.raCelestial = (() => {
  g.raOmegaOscillator = [1, 0.5, 0.1, 1, 1, 1, 2, 2, 2, 2, 2, 0.1, 2];
  exports.raDrone = {
    PARENT: [exports.drone],
    SHAPE: 7,
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: true
  };
  exports.raDroneBody = {
    PARENT: [exports.genericTank],
    LABEL: "Heptagon",
    SHAPE: 9,
    COLOR: 35,
    MAX_CHILDREN: 18,
    CONTROLLERS: ["slowreversespin"],
    GUNS: (() => {
      let output = [];
      for (let i = 0; i < 9; i++)
        output.push({
          POSITION: [3.5, 4.5, 1.2, 7.5, 0, (360 / 9) * i + 360 / 18, 2],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.halfreload]),
            TYPE: [
              exports.raDrone,
              {
                INDEPENDENT: true,
                BODY: {
                  FOV: 2.1
                }
              }
            ],
            AUTOFIRE: false,
            SUNC_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone
          }
        });
      return output;
    })()
  };
  exports.raMissile = {
    PARENT: [exports.missile],
    MAX_CHILDREN: 10,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    GUNS: [
      {
        POSITION: [7, 9.5, 0.6, 7, 0, -20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.halfreload]),
          TYPE: [
            exports.bee,
            {
              INDEPENDENT: true,
              BODY: {
                FOV: 2
              }
            }
          ],
          AUTOFIRE: true
        }
      },
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.halfreload]),
          TYPE: [
            exports.bee,
            {
              INDEPENDENT: true,
              BODY: {
                FOV: 2
              }
            }
          ],
          AUTOFIRE: true
        }
      },
      {
        POSITION: [10, 9.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.halfreload]),
          TYPE: [
            exports.bee,
            {
              INDEPENDENT: true,
              BODY: {
                FOV: 2
              }
            }
          ],
          AUTOFIRE: true
        }
      },
      ...exports.missile.GUNS
    ]
  };
  exports.raMissileTurret = {
    MAX_CHILDREN: 5,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    PARENT: [exports.autoTurretParent],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [12, 14, -0.5, 9, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.halfreload,
            g.fake
          ]),
          TYPE: exports.bullet
        }
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.halfreload,
            g.halfreload
          ]),
          TYPE: exports.raMissile
        }
      },
      {
        POSITION: [17, 15, 1, 0, 0, 0, 0]
      }
    ]
  };
  exports.raMissileBody = {
    PARENT: [exports.genericTank],
    LABEL: "Sun Spear",
    SHAPE: 7,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    MAX_CHILDREN: 20,
    COLOR: 35,
    CONTROLLERS: ["slowspin"],
    TURRETS: (() => {
      let output = [];
      for (let i = 0; i < 7; i++)
        output.push({
          POSITION: [8, 9, 0, (360 / 7) * i + 360 / 14, 90, 0],
          TYPE: exports.raMissileTurret
        });
      return output;
    })()
  };
  exports.raOmegaOscillator = {
    PARENT: [exports.autoTurretParent],
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    GUNS: [
      {
        POSITION: [5, 8, 1.5, 20, 0, 0, 0]
      },
      {
        POSITION: [5, 8, 1.5, 15, 0, 0, 0]
      },
      {
        POSITION: [5, 8, 1.5, 10, 0, 0, 0]
      },
      {
        POSITION: [5, 8, 1.5, 5, 0, 0, 0]
      },
      {
        POSITION: [30, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.raOmegaOscillator,
            g.halfreload
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17.5, 6, 0.75, 0, 0, 0, 0],
        PROPERTIES: {
          COLOR: 35
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  };
  exports.raOmegaOscillatorBody = {
    PARENT: [exports.genericTank],
    LABEL: "Omega Oscillator",
    SHAPE: 5,
    COLOR: 35,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    CONTROLLERS: ["slowspin"],
    TURRETS: (() => {
      let output = [];
      for (let i = 0; i < 5; i++)
        output.push({
          POSITION: [8, 9, 0, (360 / 5) * i + 360 / 10, 90, 0],
          TYPE: exports.raOmegaOscillator
        });
      return output;
    })()
  };
  return {
    PARENT: [exports.miniboss],
    NAME: "Ra",
    LABEL: "Celestial",
    VALUE: 10000000,
    SIZE: 75,
    SHAPE: 11,
    COLOR: 35,
    SKILL: skillSet({
      spd: 1,
      rld: 0,
      dam: 0.6,
      pen: 0.9,
      dmg: 1,
      str: 1,
      rgn: 1,
      hlt: 1,
      mob: 1
    }),
    DANGER: 100,
    TURRETS: (() => {
      let output = [
        {
          /*  SIZE     X       Y     ANGLE    ARC */
          POSITION: [16, 0, 0, 0, 360, 1],
          TYPE: exports.raDroneBody
        },
        {
          POSITION: [9.6, 0, 0, 0, 360, 1],
          TYPE: exports.raMissileBody
        },
        {
          POSITION: [5.76, 0, 0, 0, 360, 1],
          TYPE: exports.raOmegaOscillatorBody
        }
      ];
      for (let i = 0; i < 11; i++)
        output.push({
          POSITION: [5.5, 9.5, 0, (360 / 11) * i + 360 / 22, 0, 0],
          TYPE: exports.celestialTrapTurret
        });
      return output;
    })()
  };
})();
exports.sounder = {
  PARENT: [exports.genericTank],
  LABEL: "Sounder",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 7.5, 0.4, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 7.5, 0.4, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};

exports.switcherooBA0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ba)",
  LABELSWITCH: "SBa0",
  //SHAPE: 215,
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooBA" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Ba)",
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SBa" + i],
    GUNS: [
      {
        POSITION: [18 + 0.14285 * i, 8, 1, 0, 0 + i * 0.39285714285, 0, 0]
      },
      {
        POSITION: [18 + 0.14285 * i, 8, 1, 0, 0 - i * 0.39285714285, 0, 0]
      }
    ]
  };
exports.ekfactory = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};

exports.EK44 = {
  SIZE: 80,
  PARENT: [exports.miniboss],
  LABEL: "EK-4",
  DANGER: 10,
  VALUE: 45000,
  FACING_TYPE: "autospin",
  COLOR: 6,
  CAN_BE_ON_LEADERBOARD: true,
  GIVE_KILL_MESSAGE: true,
  BODY: {
    HEALTH: 2500,
    SHIELD: 500
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 5, 0.6, 7, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 5, 0.6, 7, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 5, 0.6, 7, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [10, 5, 0.6, 7, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.sniper, g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [4, 11, 2.5, 0, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, -2.5, 0, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, -2.5, 90, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, 2.5, 90, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, -2.5, 180, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, 2.5, 180, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, -2.5, 270, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, 2.5, 270, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [4, 11, 0, -30, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [4, 11, 0, 70, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [4, 11, 0, 160, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [4, 11, 0, 250, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    },
    {
      POSITION: [7, 7, 0, 0, 360, 1],
      TYPE: [exports.assassin, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, 0, 90, 360, 1],
      TYPE: [exports.assassin, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, 0, 180, 360, 1],
      TYPE: [exports.assassin, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [7, 7, 0, 270, 360, 1],
      TYPE: [exports.assassin, { INDEPENDENT: false, COLOR: 16 }]
    }
  ]
};
exports.switcherooBA15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Tw)",
  LABELSWITCH: "SBa15",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.switcherooTW0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Tw)",
  LABELSWITCH: "STw0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooTW" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Tw)",
    BODY: {
      ACCELERATION: base.ACCEL * 1 - i * 0.02142857,
      FOV: base.FOV * 1 + i * 0.014285
    },
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["STw" + i],
    GUNS: [
      {
        POSITION: [
          20 + 0.2857142 * i,
          8 + 0.035714 * i,
          1,
          0,
          5.5 - i * 0.39285714285,
          0,
          0
        ]
      },
      {
        POSITION: [
          20 + 0.2857142 * i,
          8 + 0.035714 * i,
          1,
          0,
          -5.5 + i * 0.39285714285,
          0,
          0
        ]
      }
    ]
  };
exports.switcherooTW15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Sn)",
  LABELSWITCH: "STw15",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.switcherooSN0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Sn)",
  LABELSWITCH: "SSn0",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooSN" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Sn)",
    BODY: {
      ACCELERATION: base.ACCEL * 0.7 + i * 0.02142857,
      FOV: base.FOV * 1.2 - i * 0.014285
    },
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SSn" + i],
    GUNS: [
      {
        POSITION: [
          16 - 0.28571428 * i,
          8.5 + 0.107142 * i,
          1 + i * 0.0285714,
          8,
          0,
          0,
          0
        ]
      },
      {
        POSITION: [
          16 - 0.28571428 * i,
          8.5 + 0.107142 * i,
          1 + i * 0.0285714,
          8,
          0,
          0,
          0
        ]
      }
    ]
  };
exports.switcherooSN15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ma)",
  BODY: {
    ACCELERATION: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  LABELSWITCH: "SSn15",
  //SHAPE: 215,
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.awppistolstargun = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  CONTROLLERS: ["nearestDifferentMaster"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [5, 0, 0, 0, 0, 1],
      TYPE: [exports.genericTank, { COLOR: 6 }]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 8.5, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
    }
  ]
};
exports.visor = {
  PARENT: [exports.genericTank],
  LABEL: "Sus",
  COLOR: 0,
  SHAPE:
    "M 0 1 C 0 1 0 1 0 1 C 1 1 2 1 2 0 C 2 -1 1 -1 0 -1 C -1 -1 -2 -1 -2 0 C -2 1 -1 1 0 1"
};
exports.eventdeveloperbase = {
  PARENT: [exports.genericTank],
  LABEL: "",
  INDEPENDENT: true,
  SHAPE: 9,
  BODY: {
    FOV: 100
  },
  COLOR: 16
};
exports.eventdeveloper = {
  PARENT: [exports.genericTank],
  LABEL: "Developer",
  SHAPE: 9,
  COLOR: 45,
  SIZE: 20,
  FACING_TYPE: "autospin",
  BODY: {
    FOV: base.FOV * 1.2
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23, 0, 0, 0, 360, 0],
      TYPE: exports.eventdeveloperbase
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.anni
    }
  ]
};
exports.sus = {
  PARENT: [exports.genericTank],
  LABEL: "Amogus",
  SIZE: 15,
  COLOR: 6,
  SHAPE: [
    [-0.62, 0.64],
    [-0.53, 0.824],
    [-0.353, 0.95],
    [-0.17, 0.99],
    [-0.01, 0.995],
    [0.15, 0.995],
    [0.327, 0.964],
    [0.49, 0.884],
    [0.627, 0.746],
    [0.687, 0.546],
    [0.87, -0.7],
    [1.07, -0.754],
    [1.107, -0.894],
    [1.03, -0.98],
    [0.59, -0.976],
    [0.5, -0.9],
    [0.47, -0.536],
    [0.37, -0.45],
    [-0.273, -0.43],
    [-0.353, -0.5],
    [-0.387, -0.734],
    [-0.227, -0.75],
    [-0.09, -0.814],
    [-0.09, -0.99],
    [-0.24, -1.05],
    [-0.74, -1.05],
    [-0.74, -0.8],
    [-0.74, -0.376],
    [-0.68, 0.44]
  ],
  SIZE: 20,
  TURRETS: [
    {
      /*   SIZE     X       Y     ANGLE    ARC  OVERLAP*/
      POSITION: [4.5, 0, 5, 0, 0, 1],
      TYPE: exports.visor
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.01, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.mitrailleuse = {
  PARENT: [exports.genericTank],
  LABEL: "Mitrailleuse",
  DANGER: 7,
  BODY: {
    FOV: 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 2, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 2, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mini]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.awppistolstarsquare = {
  LABEL: "Pistol",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [12, 0, 0, 360, 360, 1],
      TYPE: exports.awppistolstargun
    }
  ],
  COLOR: 14,
  SHAPE: 4,
  INDEPENDENT: false
};
exports.awpturret = {
  COLOR: 14,
  SHAPE: 3
};
exports.awppistolstar = {
  PARENT: [exports.miniboss],
  LABEL: "AWP-Pistolstar",
  BODY: {
    HEALTH: base.HEALTH * 123
  },
  SHAPE: 5,
  SIZE: 30,
  COLOR: 13,
  DANGER: 5,

  FACING_TYPE: "autospin",

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [10, 27, 0, 180, 0, 0],
      TYPE: exports.awpturret
    },
    {
      POSITION: [10, 27, 0, 108, 0, 0],
      TYPE: exports.awpturret
    },
    {
      POSITION: [10, 27, 0, 35, 0, 0],
      TYPE: exports.awpturret
    },
    {
      POSITION: [10, 27, 0, -35, 0, 0],
      TYPE: exports.awpturret
    },
    {
      POSITION: [10, 27, 0, -108, 0, 0],
      TYPE: exports.awpturret
    },
    {
      POSITION: [15, 16, 0, 180, 0, 1],
      TYPE: exports.awppistolstarsquare
    },
    {
      POSITION: [15, 16, 0, 108, 0, 1],
      TYPE: exports.awppistolstarsquare
    },
    {
      POSITION: [15, 16, 0, 35, 0, 1],
      TYPE: exports.awppistolstarsquare
    },
    {
      POSITION: [15, 16, 0, -35, 0, 1],
      TYPE: exports.awppistolstarsquare
    },
    {
      POSITION: [15, 16, 0, -108, 0, 1],
      TYPE: exports.awppistolstarsquare
    }
  ]
};
exports.switcherooMA0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ma)",
  LABELSWITCH: "SMa0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooMA" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Ma)",
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SMa" + i],
    GUNS: [
      {
        POSITION: [
          12 + 0.428571 * i,
          10 - i * 0.142857,
          1.4 - i * 0.028571,
          8 - i * 0.5714285,
          0,
          0,
          0
        ]
      },
      {
        POSITION: [
          12 + 0.428571 * i,
          10 - i * 0.142857,
          1.4 - i * 0.028571,
          8 - i * 0.5714285,
          0,
          0 + i * 8.5714285,
          0
        ]
      },
      {
        POSITION: [
          12 + 0.428571 * i,
          10 - i * 0.142857,
          1.4 - i * 0.028571,
          8 - i * 0.5714285,
          0,
          0 - i * 8.5714285,
          0
        ]
      }
    ]
  };
exports.switcherooMA15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Fl)",
  LABELSWITCH: "SMa15",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.switcherooFL0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Fl)",
  LABELSWITCH: "SFl0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooFL" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Fl)",
    BODY: {
      ACCELERATION: base.ACCEL * 1 - i * 0.017857,
      FOV: base.FOV * 1 + i * 0.007142
    },
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SFl" + i],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [
          10 - i * 0.285714,
          8 + i * 0.285714,
          1 + i * 0.0142857,
          8,
          0,
          0,
          0
        ]
      },
      {
        POSITION: [10 - i * 0.4285714, 8, 1, 8, 0, 120, 0]
      },
      {
        POSITION: [10 - i * 0.4285714, 8, 1, 8, 0, 240, 0]
      }
    ]
  };
exports.switcherooFL15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Di)",
  LABELSWITCH: "SFl15",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
exports.switcherooDI0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Di)",
  LABELSWITCH: "SDi0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1
  },
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooDI" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Di)",
    BODY: {
      ACCELERATION: base.ACCEL * 1 + i * 0.017857,
      FOV: base.FOV * 1 - i * 0.007142
    },
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SDi" + i],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12 - 0.8 * i, 1.2, 8, 0, 0, 0]
      },
      {
        POSITION: [12 + 0.7857142 * i, 16, 0.01, 0, 0, 0, 0]
      }
    ]
  };
exports.switcherooDI15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(La)",
  LABELSWITCH: "SDi15",
  BODY: {
    ACCELERATION: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
exports.switcherooLA0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(La)",
  LABELSWITCH: "SLa0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 1, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.lancer]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 16, 0.01, 0, 0, 0, 0],
      PROPERTIES: {
        // SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
        //TYPE: exports.bullet,
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooLA" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(La)",
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SLa" + i],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [0.1 + i * 0.71428, 0, 0, 0, 0, 1],
        TYPE: [exports.fakeAutoTurret, { INDEPENDENT: true }]
      }
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [
          23 - i * 0.357142,
          16 - i * 0.57142,
          0.01 + i * 0.070714,
          0,
          0,
          0,
          0
        ]
      }
    ]
  };
exports.switcherooLA15notreal = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Au)",
  LABELSWITCH: "SLa15",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.switcherooLA15 = makeAuto(
  exports.switcherooLA15notreal,
  "Switcheroo(Au)"
);

exports.switcherooAU0 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Au)",
  LABELSWITCH: "SAu0",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 0, 1],
      TYPE: [
        exports.autoTurret,
        { CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true }
      ]
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["switcherooAU" + i] = {
    PARENT: [exports.genericTank],
    LABEL: "Switcheroo(Au)",
    SHAPE: [
      [1.01, 0.03],
      [0.98, 0.267],
      [0.887, 0.49],
      [0.74, 0.687],
      [0.507, 0.867],
      [0.287, 0.967],
      [0.047, 1.01],
      [-0.22, 0.98],
      [-0.53, 0.85],
      [-0.82, 0.647],
      [-1.153, 0.37],
      [-1.6, 0.007],
      [-1.24, -0.29],
      [-0.82, -0.64],
      [-0.57, -0.833],
      [-0.36, -0.94],
      [-0.13, -1],
      [0.087, -1.01],
      [0.347, -0.95],
      [0.567, -0.84],
      [0.74, -0.68],
      [0.87, -0.49],
      [0.967, -0.233]
    ],
    LABELSWITCH: ["SAu" + i],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [10 - i * 0.71428, 0, 0, 0, 0, 1],
        TYPE: [
          exports.fakeAutoTurret,
          { CONTROLLERS: ["nearestDifferentMaster"], INDEPENDENT: true }
        ]
      }
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0]
      }
    ]
  };
exports.switcherooAU15 = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo(Ba)",
  LABELSWITCH: "SAu15",
  SHAPE: [
    [1.01, 0.03],
    [0.98, 0.267],
    [0.887, 0.49],
    [0.74, 0.687],
    [0.507, 0.867],
    [0.287, 0.967],
    [0.047, 1.01],
    [-0.22, 0.98],
    [-0.53, 0.85],
    [-0.82, 0.647],
    [-1.153, 0.37],
    [-1.6, 0.007],
    [-1.24, -0.29],
    [-0.82, -0.64],
    [-0.57, -0.833],
    [-0.36, -0.94],
    [-0.13, -1],
    [0.087, -1.01],
    [0.347, -0.95],
    [0.567, -0.84],
    [0.74, -0.68],
    [0.87, -0.49],
    [0.967, -0.233]
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet
      }
    }
  ]
};

exports.akafugi0 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 2
  },
  STAT_NAMES: statnames.lancer,
  LABEL: "Akafuji",
  LABELSWITCH: "Ac0",

  GUNS: [
    {
      POSITION: [14, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 14, 0.1, 0, 0, 0, 0]
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["akafugi" + i] = {
    PARENT: [exports.genericTank],
    SKILL_CAP: [
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl
    ],
    STAT_NAMES: statnames.lancer,
    LABEL: "Akafuji",
    LABELSWITCH: ["Ac" + i],
    BODY: {
      FOV: base.FOV * 1
    },
    GUNS: [
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 + 6 * i, 0]
      },
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 - 6 * i, 0]
      },
      {
        POSITION: [0 + i * 1.3, 12, 1, 0, 0, 0, 0]
      }
    ]
  };
exports.akafugi15 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  LABEL: "Akafuji",
  LABELSWITCH: "Ac15",
  BODY: {
    ACCEL: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  GUNS: [
    {
      POSITION: [30, 8, 0.1, 0, 0, 90, 0]
    },
    {
      POSITION: [30, 8, 0.1, 0, 0, 270, 0]
    },
    {
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.katana0 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  LABEL: "Katana",
  LABELSWITCH: "Kt0",

  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 2
  },
  GUNS: [
    {
      POSITION: [14, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 14, 0.1, 0, 0, 0, 0]
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["katana" + i] = {
    PARENT: [exports.genericTank],
    SKILL_CAP: [
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl
    ],

    STAT_NAMES: statnames.lancer,
    LABEL: "Katana",
    LABELSWITCH: ["Kt" + i],
    BODY: {
      FOV: base.FOV * 1
    },
    GUNS: [
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 + 6 * i, 0]
      },
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 - 6 * i, 0]
      },
      {
        POSITION: [0 + i * 1.6428, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [0 + i * 0.45, 8.5, -1.75, 6.5, 0, 0, 0]
      }
    ]
  };
exports.katana15 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  LABEL: "Katana",
  LABELSWITCH: "Kt15",
  BODY: {
    ACCEL: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  GUNS: [
    {
      POSITION: [30, 8, 0.1, 0, 0, 90, 0]
    },
    {
      POSITION: [30, 8, 0.1, 0, 0, 270, 0]
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
exports.kronosBody3 = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Swarm",
  COLOR: 18,
  SHAPE: 7,
  SIZE: 10,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 9, 0, (360 * 3.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (360 * 2.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (360 * 1.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (360 * 0.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 7, 180, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 7, 180, 0],
      TYPE: exports.carrier
    }
  ]
};
exports.kronosBody2 = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Bullet",
  SHAPE: 5,
  COLOR: 18,

  SIZE: 10,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 8, 0, 180, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 108, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, 35, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, -35, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [10, 8, 0, -108, 120, 0],
      TYPE: exports.bigauto4gun
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.kronosBody3
    }
  ]
};

exports.kronosTripleBody = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Body Missile",
  FACING_TYPE: "autospin",
  COLOR: 8,
  SHAPE: 7,
  SIZE: 10,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 9, 0, (360 * 3.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (360 * 2.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (360 * 1.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (360 * 0.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 0.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 1.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [8, 9, 0, (-360 * 2.5) / 7, 180, 0],
      TYPE: [exports.skimturret, { COLOR: 18 }]
    },
    {
      POSITION: [12, 0, 0, 0, 0, 1],
      TYPE: exports.kronosBody2
    }
  ]
};
exports.hecomes = {
  PARENT: [exports.miniboss],
  LABEL: "Eternal",
  COLOR: 18,
  NAME: "Kronos",
  SHAPE: 9,
  SIZE: 100,
  VARIES_IN_SIZE: false,
  VALUE: 300000,
  BODY: {
    FOV: 1.9,
    SPEED: base.SPEED * 0.05,
    HEALTH: base.HEALTH * 17,
    SHIELD: base.SHIELD * 3,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
  SKILL: skillSet("6929987040"),
  TURRETS: [
    {
      /* SIZE    X       Y     ANGLE   ARC ***/
      POSITION: [6, 9, 0, -140, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, -100, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, -60, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, -20, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, -0, 20, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, 60, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, 100, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, 140, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [6, 9, 0, 180, 110, 0],
      TYPE: exports.celestialTrapTurret
    },
    {
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: exports.kronosTripleBody
    }
  ]
};
exports.nailgun2 = {
  LABEL: "",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14.85, 4, 1, 0, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.power,
          g.twin,
          g.nail,
          g.op,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14.85, 4, 1, 0, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morespeed,
          g.power,
          g.twin,
          g.morespeed,
          g.nail,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16.95, 4, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.morespeed,
          g.morespeed,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.elite_single = {
  PARENT: [exports.elite],
  LABEL: "Elite Single",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.single, { COLOR: 16 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.single, { COLOR: 16 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.single, { COLOR: 16 }]
    },
    {
      POSITION: [8, 0, 0, 360, 360, 1],
      TYPE: [exports.basic, { COLOR: 16 }]
    }
  ]
};
exports.gunnerdomop = {
  PARENT: [exports.genericTank],
  LABEL: "Anti-Tank Machine Gun",
  CAN_BE_ON_LEADERBOARD: false,
  VALUE: 0,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    rld: 0,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  DANGER: 7,
  SIZE: 30,
  HAS_NO_RECOIL: true,
  BODY: {
    FOV: base.FOV * 3,
    SPEED: base.SPEED * 5,
    HEALTH: 544378688588686896785974574543535874354354358743587435874354375435487354873548754358743534858735,
    SHIELD: 544378688588686896785974574543535874354354358743587435874354375435487354873548754358743534858735
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [19, 0, 28, 0, 360, 1],
      TYPE: exports.nailgun2
    },
    {
      POSITION: [19, 0, -28, 0, 360, 1],
      TYPE: exports.nailgun2
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.dominatorbody
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14.85, 4, 1, 0, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.morespeed,
          g.morespeed,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14.85, 4, 1, 0, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.morespeed,
          g.gunner,
          g.power,
          g.twin,
          g.morespeed,
          g.nail,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16.95, 4, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.morespeed,
          g.morespeed,
          g.op
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 270, 0]
    }
  ]
};
exports.destroydomop = {
  PARENT: [exports.genericTank],
  LABEL: "Anti-Tank Destroyer",
  CAN_BE_ON_LEADERBOARD: false,
  VALUE: 0,
  HAS_NO_RECOIL: true,
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  SKILL: skillSet({
    rld: 0,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  DANGER: 7,
  SIZE: 30,
  HAS_NO_RECOIL: true,
  BODY: {
    FOV: base.FOV * 3,
    SPEED: base.SPEED * 5,
    HEALTH: 544378688588686896785974574543535874354354358743587435874354375435487354873548754358743534858735,
    SHIELD: 544378688588686896785974574543535874354354358743587435874354375435487354873548754358743534858735
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [19, 0, 28, 0, 360, 1],
      TYPE: exports.destroyop
    },
    {
      POSITION: [19, 0, -28, 0, 360, 1],
      TYPE: exports.destroyop
    },
    {
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.dominatorbody
    }
  ],
  GUNS: [
    {
      POSITION: [11, 12, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.op,
          g.hyperspeed
        ]),
        TYPE: exports.bullet,
        MAX_CHILDREN: 15,
        AUTOFIRE: false
      }
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0]
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 90, 0]
    },
    {
      POSITION: [24, 8.5, 1, 0, 0, 270, 0]
    }
  ]
};
exports.longtank0 = {
  PARENT: [exports.genericTank],
  LABEL: "Pinocchio",
  LABELSWITCH: "Lt0",
  GUNS: [
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};
for (let i = 1; i <= 49; i++)
  exports["longtank" + i] = {
    PARENT: [exports.genericTank],
    LABEL: ["Pinocchio " + i],
    LABELSWITCH: ["Lt" + i],
    BODY: {
      FOV: base.FOV * 1
    },
    GUNS: [
      {
        POSITION: [23 + i * 1.585, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [6.5 + i * 0, 8.5, -1.75, 6.5, 0, 0, 0]
      }
    ]
  };
exports.longtank50 = {
  PARENT: [exports.genericTank],
  STAT_NAMES: statnames.lancer,
  LABEL: "Pinocchio 50",
  LABELSWITCH: "Lt50",
  BODY: {
    ACCEL: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  GUNS: [
    {
      POSITION: [100, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [6.5, 8.5, -1.75, 6.5, 0, 0, 0]
    }
  ]
};

exports.cutlass0 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 2
  },
  STAT_NAMES: statnames.lancer,
  LABEL: "Cutlass",
  LABELSWITCH: "Cl0",
  GUNS: [
    {
      POSITION: [14, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.lancer,
          g.moredamage,
          g.threequartersrof
        ]),
        AUTOFIRE: true,
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [30, 14, 0.1, 0, 0, 0, 0]
    }
  ]
};
for (let i = 1; i <= 14; i++)
  exports["cutlass" + i] = {
    PARENT: [exports.genericTank],
    SKILL_CAP: [
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl,
      dfltskl
    ],
    STAT_NAMES: statnames.lancer,
    LABEL: "Cutlass",
    LABELSWITCH: ["Cl" + i],
    BODY: {
      FOV: base.FOV * 1
    },
    GUNS: [
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 + 6 * i, 0]
      },
      {
        POSITION: [30, 8, 0.1, 0, 0, 0 - 6 * i, 0]
      },
      {
        POSITION: [0 + i * 0.5, 7.5, 0.6, 7, 0, 0, 0]
      }
    ]
  };
exports.cutlass15 = {
  PARENT: [exports.genericTank],
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  STAT_NAMES: statnames.lancer,
  LABEL: "Cutlass",
  LABELSWITCH: "Cl15",
  BODY: {
    ACCEL: base.ACCEL * 1,
    FOV: base.FOV * 1
  },
  GUNS: [
    {
      POSITION: [30, 8, 0.1, 0, 0, 90, 0]
    },
    {
      POSITION: [30, 8, 0.1, 0, 0, 270, 0]
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.PK1 = {
  PARENT: [exports.genericTank],
  LABEL: "PK-1",
  SHAPE: 5,
  COLOR: 14,
  SIZE: 32,

  FACING_TYPE: "autospin",
  GUNS: [
    {
      POSITION: [3, 8.5, 1, 12, 0, 36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 36, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, 180, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, 180, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -108, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -108, 0]
    },
    {
      POSITION: [3, 8.5, 1, 12, 0, -36, 0]
    },
    {
      POSITION: [2.25, 11, 1.01, 15.2, 0, -36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1
      }
    },
    {
      POSITION: [5.5, 10.2, 1, 7.57, 0, -36, 0]
    }
  ],
  TURRETS: [
    {
      POSITION: [9.5, 0, 0, 0, 360, 1],
      TYPE: exports.pelit
    }
  ]
};

exports.ak47 = {
  PARENT: [exports.genericTank],
  LABEL: "AK-47",
  RESET_UPGRADES: true,
  INVISIBLE: [0, 0],
  ALPHA: 1,
  SHAPE:
    "m 7.93294,0.3852 c -0.0125,-0.025 -0.01,-0.2325 -0.01,-0.2325 l -0.0025,-0.105 -0.1025,0.0025 -0.095,0.2025 -0.095,0.145 c 0,0 -0.37496,0.0082 -0.535,0.005 -0.25,-0.005 -0.3925,-0.1425 -0.3925,-0.1425 l -0.0075,-0.095 -0.815,-0.005 c 0,0 0.005,-0.035 -0.015,-0.04 -0.02,-0.005 -0.99,-0.0025 -0.99,-0.0025 l -0.015,-0.0325 c 0,0 -0.1625,0 -0.2025,0.0025 -0.04,0.0025 -0.0875,0.055 -0.12,0.06 -0.0325,0.005 -0.1125,0.0025 -0.1125,0.0025 L 4.42044,0.0127 4.29794,0.0102 c 0,0 -0.005,0.05 0,0.115 -0.215,0 -1.80008,0.0032 -1.8775,0.0075 -0.045,0.0025 -0.09184,0.0296 -0.11302,0.05188 -0.02356,0.02476 -0.03814,0.06458 -0.03948,0.08562 -0.0675,0.005 -0.0825,0.0175 -0.12,0.055 -0.0375,0.0375 -0.03,0.125 -0.03,0.125 0,0 -0.57478,0.07816 -0.625,0.08 -0.16482,0.00598 -0.1125,-0.07 -0.3025,-0.05 -0.1014,0.01066 -1.09,0.125 -1.115,0.125 -0.025,0 -0.08438,0.01132 -0.0625,0.075 0.08812,0.25652 0.11084,0.58902 0.1025,0.69 -0.01078,0.13054 0.4025,-0.06 0.9225,-0.215 0.52,-0.155 1.095,-0.37 1.095,-0.37 0,0 0.05824,0.03246 0.0875,0.1025 0.02988,0.07156 0.0225,0.1575 0.0225,0.1575 0,0 -0.19,0.445 -0.24,0.52 -0.05,0.075 0.03,0.08 0.03,0.08 l 0.34,0.0925 c 0.035,0.00836 0.05582,-0.0025 0.06582,-0.03832 0.01532,-0.05488 0.02336,-0.27168 0.06336,-0.33168 0.04,-0.06 0.2175,-0.2675 0.2175,-0.2675 h 0.75832 l -0.00082,-0.31168 c 0,0 0.0025,0.01168 0.04914,0.005 0,0.80296 0.67824,1.48692 0.89502,1.59918 0.05768,0.02988 0.075,-0.005 0.09,-0.0325 0.015,-0.0275 0.18832,-0.30664 0.215,-0.36 0.02666,-0.05332 0.05332,-0.07332 -0.02668,-0.12664 C 4.0857,1.46426 4.10294,0.7702 4.10294,0.7702 c 0,0 0.285,-0.005 0.3175,-0.0025 0.0325,0.0025 0.13982,0.09734 0.1975,0.0975 0.23206,0.00074 0.2725,-0.1125 0.4475,-0.115 0.08006,-0.00114 0.9275,0 0.9275,0 v -0.1475 l 2.0025,0.0025 0.0025,-0.1975 c 0,0 -0.0525,0.0025 -0.065,-0.0225 z m -5.17634,0.66116 0.00134,-0.25164 0.5175,0.0025 c -0.02058,0.00796 0.0225,0.245 0.0225,0.245 l -0.54134,0.00414 z",
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 1.5, 1, 50, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
exports.blitzkrieg = {
  PARENT: [exports.miniboss],
  LABEL: "Blitzkrieg",
  SHAPE: 3,
  COLOR: 19,
  VALUE: 500000,
  FACING_TYPE: "smoothToTarget",
  SIZE: 15,
  SKILL: skillSet({
    spd: 1
  }),
  BODY: {
    FOV: 1.3,
    HEALTH: base.HEALTH * 50,
    SHIELD: base.SHIELD * 10,
    DENSITY: base.DENSITY * 5,
    SPEED: base.SPEED * 0.75
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.bigauto4gun
    }
  ],
  GUNS: [
    {
      POSITION: [15, 3, 1, 0, 20, 345, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3, 1, 0, 23, 345, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 1, 0, 0, 75, 0]
    },
    {
      POSITION: [15, 3, 1, 0, -20, -345, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 3, 1, 0, -23, -345, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 1, 0, 0, -75, 0]
    },
    {
      POSITION: [8, 8, 1.2, 8, 0, 0, 0]
    }
  ]
};
exports.vxturret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 2,
  SHAPE: 4,
  //CONTROLLERS: ['nearestDifferentMaster'],

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.amalgamation = {
  PARENT: [exports.genericTank],
  LABEL: "The Amalgamation",
  DANGER: 10,
  SKILL: skillSet({
    spd: 1,
    rld: 0.5
  }),
  SKILL_CAP: [
    0,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [11.5, 0, 0, 0, 360, 1],
      TYPE: [exports.autoTurret, { INDEPENDENT: true }]
    }
  ],
  BODY: {
    FOV: 1.3,
    DAMAGE: base.DAMAGE * 1.1,
    DENSITY: base.DENSITY * 2
  },
  MAX_CHILDREN: 800,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.halfreload]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
        TYPE: [exports.drone, { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: false,
        MAX_CHILDREN: 30
      }
    },
    {
      POSITION: [10.5, 1.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.power,
          g.twin,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10.5, 1.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.power,
          g.twin,
          g.lessreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side"
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -187, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 187, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    },
    {
      POSITION: [17, 3, 1, 0, -6, -187, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [17, 3, 1, 0, 6, 187, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [19, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -187, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 187, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary"
      }
    }
  ]
};
   exports.legionarycrasher_middlle = {
  INDEPENDENT: true,
            PARENT: [exports.genericTank],
            LABEL: ' Legionary Crasher',
            COLOR:5,
            SHAPE:3,
  SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
     
        };
        exports.legauto3gun = {
  HAS_NO_RECOIL: true,
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.ceo = {
  PARENT: [exports.genericTank],
  LABEL: "CEO",
  SIZE: 6,
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 10,
  BODY: {
    FOV: 1.8,
    HEALTH: base.HEALTH * 0.5,
    SHIELD: base.SHIELD * 0.5,
    DENSITY: base.DENSITY * 0.5
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: exports.targetsymbol
    }
  ],
  GUNS: [
  {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: false,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 15
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0.9, 13, 0, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.giant,
          g.lessdamage,
          g.lesshealth
        ]),
        TYPE: exports.miniadmin,
        AUTOFIRE: false,
        MAX_CHILDREN: 10,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    }
  ]
};
        exports.legtrap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
   COLOR:5,
    ACCEPTS_SCORE: false,
    SHAPE: -4, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 2 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        RANGE: 900,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 1,
        FOV:100,
    },
  
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.legauto3gun,
    },
  ],
};
        exports.haiiro6 = {
        DANGER: 7,
  COLOR:16,
  INDEPENDENT: true,
            PARENT: [exports.genericTank],
            LABEL: ' Legionary Crasher',
            SHAPE:6,
            SIZE: 80,
            VALUE: 500000,
        };
        exports.legionary_over = {
  
  INDEPENDENT: true,
  AUTOFIRE:true,
        DANGER: 7,
  COLOR:5,
            PARENT: [exports.genericTank],
            LABEL: ' ',
            SHAPE:3,
            SIZE: 80,
            VALUE: 500000,
            BODY: {
                FOV: 1.3,
                SPEED: base.SPEED * 0.2,
                HEALTH: base.HEALTH * 2,
                SHIELD: base.SHIELD * 2,
                REGEN: base.REGEN,
                DAMAGE: base.DAMAGE * 3,
            },
  SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
  FACING_TYPE: 'autospin',
    AI: { NO_LEAD: true, },

     GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    10,    0.6,     7,      5,      60,      0,   ], 
 }, {
        POSITION: [   4,    10,    0.6,     7,     -5,      60,     0.5,  ], 
                     },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    10,    0.6,     7,      5,      180,      0,   ], 
                    }, {
        POSITION: [   4,    10,    0.6,     7,     -5,      180,     0.5,  ], 

                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    10,    0.6,     7,      5,      300,      0,   ], 

                    },  {
        POSITION: [   4,    10,    0.6,     7,     -5,      300,     0.5,  ], 

                    }, 
            ],
  
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   12,    8,      0,      120,    180, 0], 　　　　　　　　　　　　　　　　
                    TYPE: exports.auto4gun,
                        }, {
                POSITION: [   12,    8,      0,     240,    180, 0], 
                    TYPE: exports.auto4gun,
                        }, {
                POSITION: [   12,    8,      0,     0,    180, 0], 
                    TYPE: exports.auto4gun,
                        },
                      
            ],
  
        };
        exports.legionarycrasher = {
        DANGER: 7,
  COLOR:5,
CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel'],
    AI: { NO_LEAD: true, },
    FACING_TYPE: 'autospin',
            PARENT: [exports.genericTank],
            LABEL: ' Legionary Crasher',
            SHAPE:6,
            SIZE: 80,
            VALUE: 500000,
            BODY: {
                FOV: 4.3,
                SPEED: base.SPEED * 0.05,
                HEALTH: base.HEALTH * 8,
                SHIELD: base.SHIELD * 8,
                REGEN: base.REGEN * 2,
                DAMAGE: base.DAMAGE * 6,
            },
  SKILL: skillSet({
        rld: 0,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),

   GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    11,      1,      8,      0,      0,      0,   ],
            }, {
        POSITION: [   2.5,    11,      1.4,    12,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legtrap]),
                TYPE: exports.pillbox, STAT_CALCULATOR: gunCalcNames.trap, MAX_CHILDREN: 5,
            }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    11,      1,      8,      0,      240,      0,   ],
            }, {
     POSITION: [   2.5,    11,      1.4,    12,      0,      240,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legtrap]),
                TYPE: exports.pillbox, STAT_CALCULATOR: gunCalcNames.trap, MAX_CHILDREN: 5,
            }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   4,    11,      1,      8,      0,      120,      0,   ],
            }, {
     POSITION: [   2.5,    11,      1.4,    12,      0,      120,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legtrap]),
                TYPE: exports.pillbox, STAT_CALCULATOR: gunCalcNames.trap, MAX_CHILDREN: 5,
            }, }, {
     POSITION: [   2.5,    11,      1.4,    0,      0,      120,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legminiboss]),
                TYPE: exports.elite_sprayer, 
              STAT_CALCULATOR: gunCalcNames.trap,AUTOFIRE:true,
              MAX_CHILDREN: 1,

            }, },{
     POSITION: [   2.5,    11,      1.4,    0,      0,      120,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legminiboss]),
                TYPE: exports.guardian, 
              STAT_CALCULATOR: gunCalcNames.trap,
              MAX_CHILDREN: 1,

            }, },{
     POSITION: [   2.5,    11,      1.4,    0,      0,      120,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legminiboss]),
                TYPE: exports.guardian, 
              STAT_CALCULATOR: gunCalcNames.trap,
              MAX_CHILDREN: 1,

            }, },{
     POSITION: [   2.5,    11,      1.4,    0,      0,      120,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legminiboss]),
                TYPE: exports.elite_destroyer, 
              STAT_CALCULATOR: gunCalcNames.trap,
              MAX_CHILDREN: 1,

            }, },{
     POSITION: [   2.5,    11,      1.4,    0,      0,      120,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.legminiboss]),
                TYPE: exports.elite_battleship, 
              STAT_CALCULATOR: gunCalcNames.trap,
              MAX_CHILDREN: 1,

            }, },
    ], 

             TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   11,    8,      0,      60,    180, 0], 　　　　　　　　　　　　　　　　
                    TYPE: exports.spray,
                        }, {
                POSITION: [   11,    8,      0,     180,    180, 0], 
                    TYPE: exports.spray,
                        }, {
                POSITION: [   11,    8,      0,     300,    180, 0], 
                    TYPE: exports.spray,
                        },{/*  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [   20,    0,      0,     1.5,    360, 1],
                    TYPE:  exports.haiiro6,
                        },{/*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   17,    0,      0,     0,    360, 1],
                    TYPE:  exports.legionarycrasher_middlle,
                        },{
                POSITION: [   10,    0,      0,     0,    360, 1],
                    TYPE: exports.legionary_over,
                        },
                      
            ],
        };
exports.mk1 = {
  PARENT: [exports.elite],
  COLOR: 13,
  SHAPE: 4,
  SIZE: 18,
  LABEL: "MK-1",
  FACING_TYPE: "locksFacing",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.assassin, {}]
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [18, 6, 1, 0, 3.6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, -3.6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [10, 13.5, -1.3, 3, 0, 0, 0]
    }
  ]
};
exports.elite_snipe = {
  PARENT: [exports.elite],
  LABEL: "Elite Sniper",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.sniper3gun, { COLOR: 16 }]
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.sniper3gun, { COLOR: 16 }]
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.sniper3gun, { COLOR: 16 }]
    }
  ]
};
exports.mk2 = {
  PARENT: [exports.miniboss],
  COLOR: 13,
  SHAPE: 4,
  SIZE: 22,
  LABEL: "MK-2",
  FACING_TYPE: "locksFacing",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.assassin, {}]
    }
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [18, 6, 1, 0, 3.6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 6, 1, 0, -3.6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.power]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, -1.2, 0, -3, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, -1.2, 0, 3, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, -1.2, 0, -3, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 3, -1.2, 0, 3, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [10, 13.5, -1.3, 3, 0, 0, 0]
    }
  ]
};
exports.blunder = {
  PARENT: [exports.genericTank],
  LABEL: "Blunderbuss",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */

      POSITION: [19, 4, 1, 0, -4.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, -4.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, -5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 4, 1, 0, 4.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 4, 1, 0, 4.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 4, 1, 0, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 9.5, 1, 0, 0, 0, 0]
    }
  ]
};
exports.vx1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.destroy, g.halfreload, g.halfreload]),

    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "XK-1",
    COLOR: 2,
    SHAPE: 4,
    SIZE: 24,
    VALUE: 500000,
    BODY: {
      FOV: 0.9,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 0.75,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3,
      SHIELD_REGEN: base.SHEILD_REGEN
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [20, 18, 0, 0, -360, 0],
        TYPE: exports.vxturret
      },
      {
        POSITION: [20, 18, 0, 90, -360, 0],
        TYPE: exports.vxturret
      },
      {
        POSITION: [20, 18, 0, 180, -360, 0],
        TYPE: exports.vxturret
      },
      {
        POSITION: [20, 18, 0, 270, -360, 0],
        TYPE: exports.vxturret
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 2 }]
      },
      {
        POSITION: [9, 18, 0, 0, 360, 1],
        TYPE: [exports.pound, { INDEPENDENT: false, COLOR: 2 }]
      },
      {
        POSITION: [9, 18, 0, 90, 360, 1],
        TYPE: [exports.pound, { INDEPENDENT: false, COLOR: 2 }]
      },
      {
        POSITION: [9, 18, 0, 180, 360, 1],
        TYPE: [exports.pound, { INDEPENDENT: false, COLOR: 2 }]
      },
      {
        POSITION: [9, 18, 0, 270, 360, 1],
        TYPE: [exports.pound, { INDEPENDENT: false, COLOR: 2 }]
      }
    ]
  };
})();
exports.firestarter = {
  PARENT: [exports.genericTank],
  LABEL: "Firestarter",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 4.5, 1.3, 16, 0, 0, 1.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 4.5, 1.3, 13, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 4.5, 1.3, 10, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 4.5, 1.3, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lowpower, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.blowbackek = {
  PARENT: [exports.elite],
  LABEL: "Predator",
  SHAPE: 0,
  COLOR: 16,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.halfreload,
          g.morespeed,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.trualek = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Triple",
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 5.5, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 5.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [12, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 5.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 7, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.eliteTwisterMissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  SKILL: skillSet({
    spd: 1
  }),
  FACING_TYPE: "turnWithSpeed",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [15, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [15, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.halfreload,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
};
exports.twistTurret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2
  },
  COLOR: 13,
  SKILL: skillSet({
    spd: 1
  }),
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 20, 0.75, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.halfreload,
          g.lessreload
        ]),
        TYPE: exports.eliteTwisterMissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
};
exports.atrium = {
  PARENT: [exports.miniboss],
  SIZE: 15,
  LABEL: "Atrium",
  SIZE: 30,
  VALUE: 400000,
  COLOR: 8,
  SHAPE: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 8, 2, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.flank,
          [3, 1, 1, 0.75, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [12, 8, 2, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.flank,
          [3, 1, 1, 0.75, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm
      }
    },
    {
      POSITION: [12, 8, 2, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.flank,
          [3, 1, 1, 0.75, 1, 1, 1, 0.9, 0.9, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.construct
    }
  ]
};
exports.eliteTwister = {
  PARENT: [exports.miniboss],
  SHAPE: -4,
  SKILL: skillSet({
    spd: 1
  }),
  COLOR: 13,
  SIZE: 27.5,
  VALUE: 300000,
  LABEL: "Elite Twister",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 7.5, 0, 0, 125, 0],
      TYPE: exports.twistTurret
    },
    {
      POSITION: [10, 7.5, 0, 90, 125, 0],
      TYPE: exports.twistTurret
    },
    {
      POSITION: [10, 7.5, 0, 180, 125, 0],
      TYPE: exports.twistTurret
    },
    {
      POSITION: [10, 7.5, 0, 270, 125, 0],
      TYPE: exports.twistTurret
    }
  ]
};
exports.impostor = {
  PARENT: [exports.genericTank],
  LABEL: "Impostor",
  SIZE: 15,
  COLOR: 6,
  SHAPE: [
    [-0.62, 0.64],
    [-0.53, 0.824],
    [-0.353, 0.95],
    [-0.17, 0.99],
    [-0.01, 0.995],
    [0.15, 0.995],
    [0.327, 0.964],
    [0.49, 0.884],
    [0.627, 0.746],
    [0.687, 0.546],
    [0.87, -0.7],
    [1.07, -0.754],
    [1.107, -0.894],
    [1.03, -0.98],
    [0.59, -0.976],
    [0.5, -0.9],
    [0.47, -0.536],
    [0.37, -0.45],
    [-0.273, -0.43],
    [-0.353, -0.5],
    [-0.387, -0.734],
    [-0.227, -0.75],
    [-0.09, -0.814],
    [-0.09, -0.99],
    [-0.24, -1.05],
    [-0.74, -1.05],
    [-0.74, -0.8],
    [-0.74, -0.376],
    [-0.68, 0.44]
  ],
  SIZE: 20,
  TURRETS: [
    {
      /*   SIZE     X       Y     ANGLE    ARC  OVERLAP*/
      POSITION: [4.5, 0, 5, 0, 0, 1],
      TYPE: exports.visor
    },
    {
      /*   SIZE     X       Y     ANGLE    ARC  OVERLAP*/
      POSITION: [6.5, 0, 3.5, 0, 360, 0],
      TYPE: exports.ak47
    }
  ]
};
exports.trualek2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Triple",
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1
  },
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 5.5, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 5.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [12, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [22, 2.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [20, 4, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [18, 5.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [16, 7, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [14, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 1.5, 2.5, 0, 3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.power,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    },
    {
      POSITION: [15, 1.5, 2.5, 0, -3, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.power,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet,
        LABEL: "Small"
      }
    }
  ]
};
exports.blowbackek2 = {
  PARENT: [exports.elite],
  LABEL: "Blowback",
  SHAPE: 0,
  COLOR: 13,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.325
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 17, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [16, 13.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [20, 10.5, 1, 0, 0, 0, 0]
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.halfreload,
          g.morespeed,
          g.rifle
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.cargun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  MAX_CHILDREN: 5,
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.pound,
          g.halfreload
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.pound,
          g.halfreload
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.carrier,
          g.pound,
          g.halfreload
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  ]
};
exports.celestial_missel = {
  PARENT: [exports.missile],
  SHAPE: 0,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.halfreload,
          g.lowpower,
          g.morerecoil,
          g.morespeed
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    },
    {
      POSITION: [9, 8, 1, 8, 0, 90, 0]
    },
    {
      POSITION: [4, 10, 1.4, 17, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.halfreload,
          g.lowpower,
          g.lessreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    },
    {
      POSITION: [8, 8, 1, 8, 0, -90, 0]
    },
    {
      POSITION: [4, 10, 1.4, 17, 0, -90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.halfreload,
          g.lowpower,
          g.lessreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.misslergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.pound,
          g.pound,
          g.pound,
          g.destroy,
          g.norecoil
        ]),
        TYPE: exports.celestial_missel,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
    {
      POSITION: [10, 16, 1.4, 8, 0, 0, 0]
    }
  ]
};
exports.triplegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 1.5
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.triple,
          g.pound,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.triple,
          g.pound,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.triple,
          g.pound,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.cracker = {
  PARENT: [exports.bullet],
  LABEL: "Bullet",
  BODY: {
    RANGE: 95,
    FOV: 0.5
  },
  SPAWN_ON_DEATH: [
    {
      T: exports.explosion,
      N: 1,
      VEL: 1
    }
  ],
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 6, 1.3, 0, 6, 0, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.lessreload,
          g.halfreload,
          g.fast
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true
      }
    }
  ]
};
exports.firecracker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8
  },
  LABEL: "Firecracker",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 12, -0.5, 11, 0, 0, 0]
    },
    {
      POSITION: [10, 12, 1, 5, 0, 0, 0]
    },
    {
      POSITION: [4, 14, 1, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive, g.halfreload]),
        TYPE: exports.cracker
      }
    }
  ]
};
exports.ekpreda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 15, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ek5ultraminion = {
  PARENT: [exports.genericTank],
  LABEL: "Ultra Cannon",
  SHAPE: 0,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  FACING_TYPE: "locksFacing",
  COLOR: 16,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.assassin
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.assassin
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.assassin
    },
    {
      POSITION: [11, 6, 0, 60, 360, 1],
      TYPE: exports.assassin
    },
    {
      POSITION: [11, 6, 0, 180, 360, 1],
      TYPE: exports.assassin
    },
    {
      POSITION: [11, 6, 0, 300, 360, 1],
      TYPE: exports.assassin
    }
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [27, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.preda,
          g.halfreload,
          g.morespeed
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.ekfactoryop = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,

  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfreload]),
        TYPE: exports.ek5ultraminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.ek1min = {
  PARENT: [exports.genericTank],
  LABEL: "EK-1",
  COLOR: 6,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  SIZE: 20,
  SHAPE: 0,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 10, 0, 180, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [10, 10, 0, 60, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [10, 10, 0, -60, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [10, 10, 0, 123, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [10, 10, 0, 0, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [10, 10, 0, -123, 190, 0],
      TYPE: [exports.autoTurret, { COLOR: 16 }]
    },
    {
      POSITION: [25, 0, 0, 180, 0, 0],
      TYPE: [exports.smasherBody, { COLOR: 9 }]
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { COLOR: 16 }]
    }
  ]
};
exports.ekbossfactory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0]
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.halfreload]),
        TYPE: exports.ek1min,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
      }
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0]
    }
  ]
};
exports.weirdpounder = {
  PARENT: [exports.genericTank],
  LABEL: "Weird Pounder",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [19.5, 0, 0, 0, 360, 0],
      TYPE: exports.pound
    }
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false // def
      }
    }
  ]
};
exports.EK5 = {
  SIZE: 150,
  MAX_CHILDREN: 20,
  PARENT: [exports.miniboss],
  LABEL: "EK-5",
  DANGER: 10,
  SKILL: skillSet({
    spd: 1
  }),
  VALUE: 60000,
  FACING_TYPE: "autospin",
  COLOR: 6,
  SHAPE: 0,
  CAN_BE_ON_LEADERBOARD: true,
  GIVE_KILL_MESSAGE: true,
  BODY: {
    HEALTH: 3500,
    SHIELD: 650
  },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */

      POSITION: [4, 9.5, 0, 0, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [4, 9.5, 0, 22.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 45, 190, 0],
      TYPE: exports.ekpreda
    },
    {
      POSITION: [4, 9.5, 0, 67.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 90, 190, 0],
      TYPE: exports.ekfactoryop
    },
    {
      POSITION: [4, 9.5, 0, 112.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 135, 190, 0],
      TYPE: exports.ekpreda
    },
    {
      POSITION: [4, 9.5, 0, 157.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 180, 190, 0],
      TYPE: exports.ekfactory
    },
    {
      POSITION: [4, 9.5, 0, 202.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 225, 190, 0],
      TYPE: exports.ekpreda
    },
    {
      POSITION: [4, 9.5, 0, 247.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 270, 190, 0],
      TYPE: exports.ekbossfactory
    },
    {
      POSITION: [4, 9.5, 0, 292.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [4, 9.5, 0, 315, 190, 0],
      TYPE: exports.ekpreda
    },
    {
      POSITION: [4, 9.5, 0, 337.5, 190, 0],
      TYPE: exports.blowbackek
    },
    {
      POSITION: [5, 7, 0, 90, 360, 1],
      TYPE: [exports.trualek, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, 5, 90, 360, 1],
      TYPE: [exports.octo, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, -5, 90, 360, 1],
      TYPE: [exports.octo, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, 0, 180, 360, 1],
      TYPE: [exports.blowbackek2, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, 0, 0, 360, 1],
      TYPE: [exports.blowbackek2, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [5, 7, 0, 270, 360, 1],
      TYPE: [exports.trualek, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.trualek2, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, 5, 270, 360, 1],
      TYPE: [exports.octo, { INDEPENDENT: false, COLOR: 16 }]
    },
    {
      POSITION: [2, 7, -5, 270, 360, 1],
      TYPE: [exports.octo, { INDEPENDENT: false, COLOR: 16 }]
    }
  ]
};
exports.Celestialbody12 = {
  LABEL: "",
  CONTROLLERS: ["superreversespin"],
  COLOR: 6,
  SKILL: skillSet({
    spd: 1
  }),
  SIZE: 100,
  MAX_CHILDREN: 15,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 260, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 219, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 300, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 339, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 380, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 420, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 459, 180, 0],
      TYPE: [exports.misslergun]
    },
    {
      POSITION: [5, 9, 0, 500, 180, 0],
      TYPE: [exports.misslergun]
    }
  ]
};

exports.Celestialbody22 = {
  LABEL: "",
  CONTROLLERS: ["crazyspin"],
  COLOR: 6,
  SIZE: 100,
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 26, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 77, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 129, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 231, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 282, 180, 0],
      TYPE: [exports.cargun]
    },
    {
      POSITION: [5, 9, 0, 333, 180, 0],
      TYPE: [exports.cargun]
    }
  ]
};

exports.Celestialbody32 = {
  LABEL: "",
  CONTROLLERS: ["superreversespin"],
  COLOR: 6,
  SIZE: 100,
  SKILL: skillSet({
    spd: 1
  }),
  MAX_CHILDREN: 28,
  SHAPE: 5,
  INDEPENDENT: true,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 35, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 110, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 252, 180, 0],
      TYPE: [exports.triplegun]
    },
    {
      POSITION: [5, 9, 0, 325, 180, 0],
      TYPE: [exports.triplegun]
    }
  ]
};
exports.trapper2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SKILL: skillSet({
    spd: 1
  }),
  LABEL: "trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 13, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.halfreload,
          g.halfreload,
          g.halfreload
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.Celestial_eternal = {
  PARENT: [exports.genericTank],
  LABEL: "Eternal",
  NAME: "Lagnarok",
  SKILL: skillSet({
    spd: 1
  }),
  CONTROLLERS: ["canRepel", "insanespin"],
  SHAPE: 12,
  COLOR: 6,
  LEVEL: 200,
  SIZE: 100,
  BODY: {
    FOV: 1.3,
    HEALTH: 480000,
    SHIELD: 800,

    DAMAGE: 35
  },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 270, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 240, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 210, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 150, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 120, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 90, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 60, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 30, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, 0, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody12]
    },
    {
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody22]
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.Celestialbody32]
    },
    {
      POSITION: [5, 9, 0, -90, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, -60, 180, 0],
      TYPE: [exports.trapper2]
    },
    {
      POSITION: [5, 9, 0, -30, 180, 0],
      TYPE: [exports.trapper2]
    }
  ]
};
exports.awp39hypercannonturret = {
  PARENT: [exports.genericTank],
  LABEL: "Hypercannon",
  COLOR: 35,
  HAS_NO_RECOIL: true,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
    "spinwhenidle"
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 10, -1.2, 45, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.pound,
          g.destroy,
          g.hyperspeed,
          g.verydense,
          g.verydense
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, -1.2, 25, 0, 0, 0]
    },
    {
      POSITION: [25, 14.5, -1.4, 0, 0, 0, 0]
    }
  ]
};
exports.awp39 = {
  PARENT: [exports.genericTank],
  LABEL: "AWP-39",
  SHAPE: 4,
  COLOR: 35,
  SIZE: 20,
  HAS_NO_RECOIL: true,
  BODY: {
    ACCEL: base.ACCEL * 0.5,
    FOV: base.FOV * 3,
    HEALTH: 5000,
    REGEN: 0.2,
    SHIELD: 0.2
  },
  MOTION_TYPE: "motor",
  //CONTROLLERS: ['mapAltToFire', 'nearestDifferentMaster', 'mapTargetToGoal'],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 19, 0, 0, 0, 1],
      TYPE: exports.squarePart
    },
    {
      POSITION: [20, 19, 0, 180, 0, 1],
      TYPE: exports.squarePart
    },
    {
      POSITION: [13, 34, 0, 0, 0, 1],
      TYPE: exports.trianglePart
    },
    {
      POSITION: [13, 34, 0, 180, 0, 1],
      TYPE: exports.trianglePart
    },
    {
      POSITION: [18, 0, 0, 0, 360, 1],
      TYPE: exports.awp39hypercannonturret
    }
  ]
};
exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseWithMotion",
  MOTION_TYPE: "motor",
  SKILL: skillSet({
    rld: 0.4,
    dam: 0.5,
    pen: 0.5,
    dmg: 1,
    str: 1,
    spd: 1,
    rgn: 1,
    hlt: 1
  }),
  BODY: {
    SIZE: 12,
    LEVEL: 15
  },
  //COLOR: 17,
  NAME: "[AI] ",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "mapTargetToGoal",
    "fleeAtLowHealth"
  ],
  AI: {
    STRAFE: true
  }
};

// UPGRADE PATHS
exports.testbed.UPGRADES_TIER_0 = [
  exports.basic,
  exports.greenpentagon1,
  exports.spectator1,
  exports.hexagon,
  exports.supertank,
  exports.playabletriangle1
];
exports.testbed1.UPGRADES_TIER_0 = [
  exports.basic,
  exports.greenpentagon1,
  exports.playabletriangle,
  exports.octagon,
  exports.spectator,
  exports.hexagon,
  exports.playablecrasher,
  exports.playablesquare,
  exports.supertank,
  exports.supertank3,
  exports.testbed,
  exports.ArenaCloser
];
exports.testbed2.UPGRADES_TIER_0 = [
  exports.basic,
  exports.greenpentagon1,
  exports.playabletriangle,
  exports.octagon,
  exports.spectator,
  exports.hexagon,
  exports.playablecrasher,
  exports.playablesquare,
  exports.supertank,
  exports.supertank3,
  exports.testbed,
  exports.ArenaCloser,
  exports.EK5
];
exports.basic.UPGRADES_TIER_1 = [
  exports.director,
  exports.twin,
  exports.sniper,
  exports.pound,
  exports.machine,
  exports.flank,
  exports.homing,
  exports.subduer,
  exports.trapper,
  exports.pelit,
  exports.autobasic,
  exports.minishot,
  exports.inception,
  exports.lancer,
  exports.basicpg2
];
exports.stiletto.UPGRADES_TIER_3 = [
  exports.katana15,
  exports.akafugi15,
  exports.cutlass15
];
exports.lancer.UPGRADES_TIER_2 = [
  exports.trilancer,
  exports.smash,
  exports.stiletto,
  exports.bayonet
];

exports.bayonet.UPGRADES_TIER_3 = [
  exports.slice,
  exports.bayonet2,
  exports.bastion
];
exports.lancer.UPGRADES_TIER_3 = [
  exports.autolance,
  exports.swordsman,
  exports.royale,
  exports.trailblazer
];
exports.trilancer.UPGRADES_TIER_3 = [
  exports.quillbug,
  exports.hexalancer,
  exports.flanklance
];
exports.basicpagetwo.UPGRADES_TIER_3 = [
  exports.targetter,
  exports.male,
  exports.stalker,
  exports.minedropper,
  exports.shadowtank,
  exports.landmine,
  exports.marine,
  exports.invisflanktrap,
  exports.griefer,
  exports.manager,
  exports.runner,
  exports.vand,
  exports.sub,
  exports.recon,
  exports.basicpagethree
];
exports.basicpagethree.UPGRADES_TIER_3 = [
  exports.basicpagetwo,
  exports.griefer,
  exports.silencer,
  exports.fog
];
exports.basicpg2.UPGRADES_TIER_1 = [exports.basic, exports.basehybrid];
exports.basicpg2.UPGRADES_TIER_2 = [
  exports.basicpagetwo,
  exports.hivemind,
  exports.smash
];
exports.basicpg2.UPGRADES_TIER_3 = [
  exports.single,
  exports.switcherooBA0,
  exports.healer
];
exports.playabletriangle.UPGRADES_TIER_0 = [
  exports.sentryTrap,
  exports.sentrySwarm,
  exports.sentryGun,
  exports.sentryNuke,
  exports.sentryThrow,
  exports.sentryBomb,
  exports.sentryPellet,
  exports.sentryShock,
  exports.sentryTrapper
];
exports.playabletriangle1.UPGRADES_TIER_0 = [
  exports.sentryTrap1,
  exports.sentrySwarm1,
  exports.sentryGun1,
  exports.sentryNuke1,
  exports.sentryThrow1,
  exports.sentryBomb1,
  exports.sentryPellet1,
  exports.sentryShock1,
  exports.sentryTrapper1
];
exports.playablesquare.UPGRADES_TIER_1 = [
  exports.summoner,
  exports.trapperinsane,
  exports.awp1,
  exports.palisade,
  exports.sassa,
  exports.EK1,
  exports.blitzkrieg,
  exports.snowflake,
  exports.guardian,
  exports.cutecutter,
  exports.pentseer,
  exports.stellar,
  exports.megaheavy,
  exports.arrasian,
  exports.playablesquare2
];
exports.playablesquare2.UPGRADES_TIER_1 = [
  exports.playablesquare,
  exports.fallenbooster,
  exports.PK1,
  exports.fallenoverlord,
  exports.marauder,
  exports.kiosk,
  exports.AWP69,
  exports.mk1,
  exports.deltahexa,
  exports.AWPsin4pi45,
  exports.aquamarine,
  exports.awppistolstar,
  exports.leviathan,
  exports.awp39,
  exports.playablesquare3
];
exports.playablesquare3.UPGRADES_TIER_1 = [
  exports.playablesquare2,
  exports.eliteTwister,
  exports.atrium,
  exports.vx1
];
exports.mk1.UPGRADES_TIER_1 = [exports.mk2];
exports.EK1.UPGRADES_TIER_1 = [exports.EK2];
exports.PK1.UPGRADES_TIER_2 = [exports.PK2];
exports.PK2.UPGRADES_TIER_3 = [exports.PK3];
exports.PK3.UPGRADES_TIER_4 = [exports.PK4];
exports.playablecrasher.UPGRADES_TIER_0 = [
  exports.elite_sprayer,
  exports.elite_gunner,
  exports.elite_destroyer,
  exports.elite_battleship,
  exports.skimboss,
  exports.elite_factory,
  exports.elite_machine,
  exports.defender,
  exports.elite_destroyerai,
  exports.elite_machineai,
  exports.eliteai,
  exports.elite_snipe,
  exports.elite_single
];
exports.autobasic.UPGRADES_TIER_2 = [
  exports.auto3,
  exports.turrettwo,
  exports.autoTrapper2
];
exports.turrettwo.UPGRADES_TIER_3 = [
  exports.turretthree,
  exports.autosmash,
  exports.autolance,
  exports.turretswarm,
  exports.swsmash
];
exports.inception.UPGRADES_TIER_2 = [
  exports.launcher,
  exports.driver,
  exports.lilfact,
  exports.flankception,
  exports.c4placer,
  exports.poundceptioner,
  exports.producer
];
exports.producer.UPGRADES_TIER_3 = [exports.turrettrapper, exports.engineer];
exports.poundceptioner.UPGRADES_TIER_3 = [exports.scraper, exports.paradox];
exports.hivemind.UPGRADES_TIER_3 = [
  exports.megamind,
  exports.madman,
  exports.dronesmash,
  exports.snipemind,
  exports.admin,
  exports.twinmind,
  exports.machinemind,
  exports.pelletmind,
  exports.submind,
  exports.royale,
  exports.autohivemind
];
exports.flankception.UPGRADES_TIER_3 = [
  exports.hexaception,
  exports.inception3
];
exports.radar.UPGRADES_TIER_3 = [
  exports.hitman,
  exports.doppler,
  exports.periscope,
  exports.sonar
];
exports.driver.UPGRADES_TIER_3 = [
  exports.drive,
  exports.underlord,
  exports.spawndrive,
  exports.swarmdrive
];
exports.punt.UPGRADES_TIER_3 = [
  exports.triplepunt,
  exports.preda10,
  exports.dual,
  exports.stream,
  exports.impale,
  exports.boom,
  exports.blowtorch
];
exports.hexagon.UPGRADES_TIER_0 = [
  exports.hive,
  exports.roccet,
  exports.missile,
  exports.hypermissile,
  exports.trap,
  exports.snake,
  exports.block,
  exports.bullet
];
exports.dominator.UPGRADES_TIER_0 = [
  exports.trapperdom,
  exports.gunnerdom,
  exports.destroyerdom,
  exports.sniperdom,
  exports.SteamrollerDominator,
  exports.skimmerDominator
];
exports.octagon.UPGRADES_TIER_0 = [
  exports.baseProtector,
  exports.baseProtector2,
  exports.baseProtector3,
  exports.baseProtector4,
  exports.baseProtector5,
  exports.baseProtector6,
  exports.mothership,
  exports.gunnerdomop,
  exports.destroydomop,
  exports.Turkey_Mothership,
  exports.ohshitohfuck
];
exports.testauto.UPGRADES_TIER_0 = [
  exports.auto25auto,
  exports.auto8,
  exports.autoboss
];
exports.greenpentagon1.UPGRADES_TIER_0 = [
  exports.autoTurret,
  exports.machineAutoTurret,
  exports.twinAutoTurret,
  exports.oldAutoSmasherTurret,
  exports.skimturret,
  exports.awppistolstargun
];
exports.borer.UPGRADES_TIER_3 = [
  exports.triborer,
  exports.musket,
  exports.nailgun,
  exports.nailer,
  exports.sounder,
  exports.peltertrapper,
  exports.gunnerborer
];
exports.pelit.UPGRADES_TIER_2 = [
  exports.borer,
  exports.punt,
  exports.submachine,
  exports.gunner,
  exports.cruiser,
  exports.pelletguard,
  exports.storm,
  exports.tripelleter
];
exports.pelit.UPGRADES_TIER_3 = [exports.pelletmind];
exports.pelletguard.UPGRADES_TIER_3 = [exports.ravager, exports.buttbuttin];
exports.tripelleter.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.doublegunner,
  exports.hurricane,
  exports.moth
];
exports.storm.UPGRADES_TIER_3 = [
  exports.hurricane,
  exports.fog,
  exports.whirlwind,
  exports.quadcruiser,
  exports.octo,
  exports.lmg,
  exports.autostorm
];
exports.submachine.UPGRADES_TIER_3 = [
  exports.vulcan,
  exports.nailgun,
  exports.transmit,
  exports.sprinkle,
  exports.autosubmachine,
  exports.lmg,
  exports.mantis
];
exports.minishot.UPGRADES_TIER_2 = [
  exports.artillery,
  exports.bent,
  exports.stiletto,
  exports.spreadling
];
exports.spreadling.UPGRADES_TIER_2 = [exports.crossbow, exports.spread];
exports.autobasic.UPGRADES_TIER_3 = [
  exports.autoover,
  exports.autodouble,
  exports.autoass,
  exports.autodestroy,
  exports.autotri,
  exports.autogunner,
  exports.autobuilder,
  exports.autocruiser,
  exports.underseerauto,
  exports.autospawner,
  exports.autobent,
  exports.autobasic2
];
exports.autobasic2.UPGRADES_TIER_3 = [
  exports.autobasic,
  exports.autoauto,
  exports.creep,
  exports.autotrapper,
  exports.automini,
  exports.autoarty,
  exports.autolauncher,
  exports.autocompass,
  exports.hexatrap,
  exports.autosubmachine,
  exports.autoflankpound,
  exports.autorifle,
  exports.autostorm,
  exports.autohivemind,
  exports.autobruiser
];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.twintrapper,
  exports.hexa,
  exports.twinhybrid,
  exports.destroypound,
  exports.twinmach,
  exports.turrettwo,
  exports.twinsniper
];
exports.destroypound.UPGRADES_TIER_3 = [
  exports.destroy2,
  exports.heavymini,
  exports.guarder,
  exports.bentpounder,
  exports.contractor,
  exports.boom2,
  exports.autobruiser
];
exports.pathogen.UPGRADES_TIER_3 = [
  exports.banshee,
  exports.array,
  exports.vector,
  exports.bayonet2,
  exports.swarmarty,
  exports.underpathogen,
  exports.amoeba,
  exports.trojan
];
exports.twin.UPGRADES_TIER_3 = [
  exports.dual,
  exports.auto3twin,
  exports.machspawn,
  exports.twinmind
];
exports.twinsniper.UPGRADES_TIER_3 = [
  exports.musket,
  exports.sounder,
  exports.bentsniper,
  exports.sniper3,
  exports.twinassassin,
  exports.twingatling
];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.doubleguard,
  exports.split,
  exports.autodouble,
  exports.bentdouble,
  exports.bulwark,
  exports.tritwin,
  exports.battleship,
  exports.doublegunner
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple,
  exports.autobent,
  exports.bentsniper,
  exports.benttrapper,
  exports.bentpounder,
  exports.doublehome,
  exports.turretthree,
  exports.arsenal
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.biggunner,
  exports.autogunner,
  exports.hurricane,
  exports.guntrap,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner,
  exports.hornet,
  exports.recon,
  exports.overgunner,
  exports.vulcan,
  exports.bastion,
  exports.lmg,
  exports.heavyGunner,
  exports.gunnerpg2
];
exports.gunnerpg2.UPGRADES_TIER_3 = [
  exports.gunner,
  exports.battery,
  exports.doublegunner,
  exports.gunnerborer,
  exports.mantis
];
exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.rifle,
  exports.borer,
  exports.twinsniper,
  exports.snipertrapper,
  exports.submachine,
  exports.gatling,
  exports.cannon,
  exports.snipebrid
];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack, exports.snipemind];
exports.cannon.UPGRADES_TIER_3 = [
  exports.harpoon,
  exports.heavyhunt,
  exports.cannongun,
  exports.excavate,
  exports.sidewind,
  exports.redist,
  exports.culverin
];
exports.gatling.UPGRADES_TIER_3 = [
  exports.nailgun,
  exports.assrifle,
  exports.transmit,
  exports.half,
  exports.chain,
  exports.burst,
  exports.megamachine,
  exports.twingatling
];
exports.twinmach.UPGRADES_TIER_3 = [exports.twingatling, exports.mitrailleuse];
exports.rifle.UPGRADES_TIER_3 = [
  exports.musket,
  exports.autorifle,
  exports.cannongun,
  exports.assrifle,
  exports.carbine,
  exports.burst,
  exports.blunder,
  exports.crossbow,
  exports.silencer,
  exports.sniperrifle
];
exports.assassin.UPGRADES_TIER_3 = [
  exports.ranger,
  exports.stalker,
  exports.railgun,
  exports.autoass,
  exports.eliminate,
  exports.falcon,
  exports.chasseur,
  exports.twinassassin,
  exports.bentassass,
  exports.harpoon,
  exports.sniperrifle,
  exports.buttbuttin
];

exports.pound.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.artillery,
  exports.builder,
  exports.compass,
  exports.launcher,
  exports.shotgun,
  exports.flankpound,
  exports.poundhybrid,
  exports.poundceptioner,
  exports.destroypound,
  exports.cannon,
  exports.c4placer
];
exports.pound.UPGRADES_TIER_3 = [exports.eagle];
exports.c4placer.UPGRADES_TIER_3 = [
  exports.popper,
  exports.nukeplacer,
  exports.detonate,
  exports.suicide,
  exports.bazooka,
  exports.strike,
  exports.shrapnel,
  exports.deployer,
  exports.culverin,
  exports.firecracker
];
exports.destroy.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.follower,
  exports.destroy2,
  exports.customtank5,
  exports.grower,
  exports.dem,
  exports.autodestroy,
  exports.construct,
  exports.nukeplacer,
  exports.paradox,
  exports.destroyer2,
  exports.steamroll,
  exports.destroypg2
];
exports.destroypg2.UPGRADES_TIER_3 = [
  exports.destroy,
  exports.griefer,
  exports.flankdestroyer,
  exports.hiveshooter,
  exports.bumper,
  exports.ravager,
  exports.redist,
  exports.execute,
  exports.megamachine
];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
  exports.dem,
  exports.cannongun,
  exports.huntart,
  exports.autoarty,
  exports.crafter,
  exports.guarder,
  exports.arbalest,
  exports.swarmarty,
  exports.armsman,
  exports.smartart,
  exports.arsenal,
  exports.beekeeper
];
exports.launcher.UPGRADES_TIER_3 = [
  exports.skimmer,
  exports.sidewind,
  exports.pointer,
  exports.hyper,
  exports.rocketeer,
  exports.twister,
  exports.hiveshooter,
  exports.dropper,
  exports.thrust,
  exports.autolauncher,
  exports.rpg,
  exports.bumper,
  exports.arbalest,
  exports.bazooka,
  exports.launcherpage2
];
exports.launcherpage2.UPGRADES_TIER_3 = [
  exports.launcher,
  exports.firecracker,
  exports.shocker,
  exports.bentlaunch
];
exports.shotgun.UPGRADES_TIER_3 = [
  exports.shotgun2,
  exports.boom,
  exports.shotgun3,
  exports.burst,
  exports.shotgunhoming,
  exports.shotgundrone,
  exports.boom2,
  exports.wipeout
];

exports.machine.UPGRADES_TIER_2 = [
  exports.machhoming,
  exports.mini,
  exports.artillery,
  exports.gunner,
  exports.gatling,
  exports.submachine,
  exports.twinmach
];
exports.machine.UPGRADES_TIER_3 = [
  exports.spray,
  exports.auto3mach,
  exports.popper,
  exports.sprayq,
  exports.sprinkle,
  exports.machinemind
];
exports.mini.UPGRADES_TIER_3 = [
  exports.stream,
  exports.hybridmini,
  exports.nailgun,
  exports.minitrap,
  exports.vulcan,
  exports.heavymini,
  exports.raptor,
  exports.automini,
  exports.blowtorch,
  exports.flankmini,
  exports.firestarter,
  exports.execute,
  exports.mitrailleuse
];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap,
  exports.pelletguard,
  exports.flankception,
  exports.tritrap,
  exports.double,
  exports.flankpound,
  exports.trilancer,
  exports.storm,
  exports.tripelleter
];
exports.flankpound.UPGRADES_TIER_3 = [
  exports.flankdestroyer,
  exports.heavy3,
  exports.stomper,
  exports.autoflankpound,
  exports.tribuilder
];
exports.sus.UPGRADES_TIER_3 = [exports.impostor];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.marine,
  exports.brutalizer,
  exports.falcon,
  exports.eagle,
  exports.bomber,
  exports.autotri,
  exports.speeder,
  exports.hornet,
  exports.tracker,
  exports.pilot,
  exports.overtri,
  exports.raptor,
  exports.tripage2
];
exports.tripage2.UPGRADES_TIER_3 = [
  exports.tri,
  exports.tritwin,
  exports.bentdouble,
  exports.trispray,
  exports.osprey,
  exports.trailblazer
];
exports.hexa.UPGRADES_TIER_3 = [
  exports.octo,
  exports.hurricane,
  exports.hexatrap,
  exports.heptatrap,
  exports.stomper,
  exports.colony,
  exports.tripletwin,
  exports.hexaception,
  exports.lmg,
  exports.whirlwind,
  exports.hexalancer,
  exports.doubleguard,
  exports.moth
];
exports.booster.UPGRADES_TIER_4 = [exports.police];
exports.ArenaCloser.UPGRADES_TIER_4 = [exports.ArenaCloser25];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.auto4,
  exports.banshee,
  exports.heavy3,
  exports.autoauto,
  exports.auto3mach,
  exports.auto3twin,
  exports.inception3,
  exports.sniper3,
  exports.destroyer2,
  exports.trispray,
  exports.stronghold,
  exports.swivel3
];

exports.homing.UPGRADES_TIER_2 = [exports.compass, exports.machhoming];

exports.machhoming.UPGRADES_TIER_3 = [
  exports.doublehome,
  exports.wasp,
  exports.proximity,
  exports.creep,
  exports.eliminate,
  exports.shotgunhoming,
  exports.corvette
];

exports.compass.UPGRADES_TIER_3 = [
  exports.follower,
  exports.pointer,
  exports.targetter,
  exports.creator,
  exports.seeker,
  exports.smartart,
  exports.tracker,
  exports.scraper,
  exports.guider,
  exports.autocompass
];

exports.subduer.UPGRADES_TIER_2 = [
  exports.hunter,
  exports.contagion,
  exports.pathogen,
  exports.punt,
  exports.bayonet
];
exports.contagion.UPGRADES_TIER_3 = [
  exports.sprayq,
  exports.shotgun3,
  exports.dropper,
  exports.slice,
  exports.infection,
  exports.array,
  exports.fort,
  exports.twintag,
  exports.peashooter
];
exports.basehybrid.UPGRADES_TIER_3 = [exports.swarmgun];
exports.basehybrid.UPGRADES_TIER_2 = [
  exports.snipebrid,
  exports.poundhybrid,
  exports.twinhybrid
];
exports.snipebrid.UPGRADES_TIER_3 = [
  exports.poach,
  exports.hybridmini,
  exports.carbine,
  exports.bentassass
];
exports.twinhybrid.UPGRADES_TIER_3 = [exports.benthybrid];
exports.poundhybrid.UPGRADES_TIER_3 = [exports.shotgundrone, exports.hybrid];
exports.subduer.UPGRADES_TIER_3 = [
  exports.dual,
  exports.spray,
  exports.submind
];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind,
  exports.preda10,
  exports.huntart,
  exports.customtank5,
  exports.dual,
  exports.osprey,
  exports.heavyhunt,
  exports.autohunter
];

exports.trapper.UPGRADES_TIER_2 = [
  exports.builder,
  exports.megatrapper,
  exports.contagion,
  exports.tritrap,
  exports.flanktrap,
  exports.twintrapper,
  exports.snipertrapper,
  exports.autoTrapper2,
  exports.producer
];
exports.twintrapper.UPGRADES_TIER_3 = [
  exports.benttrapper,
  exports.twinmegatrapper,
  exports.bulwark,
  exports.peltertrapper,
  exports.contractor,
  exports.twintag
];
exports.autoTrapper2.UPGRADES_TIER_3 = [
  exports.autotrapper,
  exports.hexatrap,
  exports.autobuilder
];
exports.trapper.UPGRADES_TIER_3 = [exports.overtrap, exports.proximity];
exports.snipertrapper.UPGRADES_TIER_3 = [
  exports.minitrap,
  exports.chasseur,
  exports.excavate
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer,
  exports.minedropper,
  exports.mineplacer,
  exports.conq,
  exports.backer,
  exports.tribuilder,
  exports.detonate,
  exports.excavate,
  exports.crafter,
  exports.vand,
  exports.builderpg2
];
exports.builderpg2.UPGRADES_TIER_3 = [
  exports.builder,
  exports.quadtrapper,
  exports.fort,
  exports.contractor
];
exports.megatrapper.UPGRADES_TIER_3 = [
  exports.construct,
  exports.gigatrapper,
  exports.minedropper,
  exports.autotrapper,
  exports.trimega,
  exports.deployer,
  exports.turrettrapper,
  exports.infection,
  exports.hoax,
  exports.twinmegatrapper,
  exports.megatrapguard
];
exports.tritrap.UPGRADES_TIER_3 = [
  exports.hexatrap,
  exports.fortress,
  exports.heptatrap,
  exports.trimega,
  exports.tribuilder,
  exports.triflanktrap,
  exports.quadtrapper,
  exports.stronghold
];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.triflanktrap,
  exports.invisflanktrap,
  exports.guntrap,
  exports.bomber,
  exports.bulwark,
  exports.conq,
  exports.flankmini,
  exports.trapspawn,
  exports.flanklance,
  exports.armsman,
  exports.megatrapguard,
  exports.peashooter
];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer,
  exports.lilfact,
  exports.pathogen,
  exports.frigate,
  exports.driver
];
exports.frigate.UPGRADES_TIER_3 = [exports.commander];
exports.director.UPGRADES_TIER_3 = [exports.admin, exports.manager];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.drive,
  exports.autoover,
  exports.supervisor,
  exports.master,
  exports.banshee,
  exports.overtrap,
  exports.overgunner,
  exports.governor,
  exports.commander,
  exports.manager,
  exports.sorce,
  exports.overtri,
  exports.quasar,
  exports.trojan
];
exports.underseer.UPGRADES_TIER_3 = [
  exports.necromancer,
  exports.underlord,
  exports.underseerauto,
  exports.male,
  exports.sorce,
  exports.colony,
  exports.grave,
  exports.coroner,
  exports.eggseer,
  exports.underpathogen,
  exports.triseer,
  exports.grave2,
  exports.pentseer2
];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.quadcruiser,
  exports.autocruiser,
  exports.fortress,
  exports.wasp,
  exports.commander,
  exports.swarmdrive,
  exports.strike,
  exports.miniswarm,
  exports.swarmgun,
  exports.swarmarty,
  exports.sub,
  exports.brutalizer,
  exports.cruiserpage2
];
exports.cruiserpage2.UPGRADES_TIER_3 = [
  exports.cruiser,
  exports.array,
  exports.sounder,
  exports.turretswarm,
  exports.firestarter,
  exports.swsmash,
  exports.peashooter,
  exports.corvette
];
exports.lilfact.UPGRADES_TIER_3 = [
  exports.factory,
  exports.seeker,
  exports.creator,
  exports.machspawn,
  exports.trapspawn,
  exports.pilot,
  exports.engineer,
  exports.autospawner,
  exports.spawndrive,
  exports.manufact,
  exports.mineplacer,
  exports.amoeba
];

exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.landmine,
  exports.spike,
  exports.autosmash,
  exports.ball,
  exports.weirdspike,
  exports.smallsmash,
  exports.dronesmash,
  exports.suicide,
  exports.longsmash,
  exports.jumpsmash,
  exports.protector,
  exports.bigspike,
  exports.coroner,
  exports.swsmash
];
exports.ArenaCloser.UPGRADES_TIER_1 = [
  exports.ArenaCloser4,
  exports.ArenaCloser3,
  exports.twincloser,
  exports.minicloser,
  exports.AC3,
  exports.machinegunnercloser
];
exports.supertank.UPGRADES_TIER_1 = [
  exports.terminator,
  exports.bentboomer,
  exports.deadspot,
  exports.tornado,
  exports.really,
  exports.penta2,
  exports.enneatrap,
  exports.smoth,
  exports.traitor,
  exports.berserker,
  exports.quint,
  exports.booster2,
  exports.octom,
  exports.radar,
  exports.supertank2
];
exports.supertank2.UPGRADES_TIER_1 = [
  exports.supertank,
  exports.genericEntity,
  exports.genericTank,
  exports.longtank0,
  exports.pulsar,
  exports.rail,
  exports.penta3,
  exports.assault,
  exports.tastetherainbow,
  exports.ak47,
  exports.FTBToArras,
  exports.guardianpets,
  exports.heli,
  exports.rotaderP,
  exports.supertank33
];
exports.supertank33.UPGRADES_TIER_1 = [
  exports.supertank2,
  exports.mininailgun,
  exports.bighter,
  exports.visDestructia,
  exports.weirdpounder,
  exports.cannongun2,
  exports.ultimatemultitool,
  exports.sus,
  exports.overworker,
  exports.autotestbed,
  exports.eventdeveloper
];
exports.supertank3.UPGRADES_TIER_1 = [
  exports.baseballbat,
  exports.supernukeplacer,
  exports.supercyclone,
  exports.superspawn,
  exports.testauto,
  exports.machinegunner2,
  exports.sandman,
  exports.ambulance,
  exports.haven,
  exports.medic,
  exports.blocker,
  exports.boosterUndercover,
  exports.amalgamation,
  exports.splitter,
  exports.ceo,
];
exports.ArenaCloser3.UPGRADES_TIER_3 = [exports.cleaner];
exports.spectator.UPGRADES_TIER_1 = [
  exports.wat,
  exports.distraction,
  exports.whattheheck,
  exports.mazewall2
];

exports.stellar.UPGRADES_TIER_3 = [
  exports.zaphkiel,
  exports.freyja,
  exports.paladin,
  exports.yellowcelestial,
  exports.pinkcelestial,
  exports.rainbowcelestial,
  exports.paladinai,
  exports.tealcelestial,
  exports.Celestial_eternal,
  exports.ragnarok,
  exports.theia,
  exports.raCelestial
];
