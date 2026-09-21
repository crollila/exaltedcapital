import{C as e,W as k,a as T,b as A,c as h,R as y,d as L,H as f,e as w,f as P,g as b,M as C,h as G,i as u,j as R,k as E,l as W,m as v,S as M,n as N,B as x,o as D,F as K,p as _,q as j,P as H,r as S,s as V,E as B,t as F,u as U,v as q,w as $,x as z,y as J,z as Q,A as X}from"./theme-2ni0xO6_.js";import{g as Y}from"./launched_sims-BPLha7W0.js";import{e as a}from"./metadata-Cw3bxAz1.js";const Z=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [],\r
  "priorityList": [\r
    {"action":{"autocastOtherCooldowns":{}}},\r
    {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"1.5"}}}},"castSpell":{"spellId":{"spellId":9835,"rank":10}}}},\r
    {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"3.5"}}}},"castSpell":{"spellId":{"spellId":9912,"rank":8}}}},\r
    {"action":{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":9835,"rank":10}}}}},"castSpell":{"spellId":{"spellId":9835,"rank":10}}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":25298,"rank":7}}}}\r
  ]\r
}\r
`,nn=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [\r
    {"action":{"castSpell":{"spellId":{"spellId":15208,"rank":10}}},"doAtValue":{"const":{"val":"-2s"}}}\r
  ],\r
  "priorityList": [\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"numberTargets":{}},"rhs":{"const":{"val":"1"}}}},{"not":{"val":{"dotIsActive":{"spellId":{"spellId":10438,"rank":6}}}}}]}},"castSpell":{"spellId":{"spellId":10438,"rank":6}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"numberTargets":{}},"rhs":{"const":{"val":"2"}}}},{"not":{"val":{"dotIsActive":{"spellId":{"spellId":10587,"rank":4}}}}}]}},"castSpell":{"spellId":{"spellId":10587,"rank":4}}}},\r
    {"action":{"autocastOtherCooldowns":{}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":10605,"rank":4}}}},\r
    {"action":{"condition":{"auraIsActive":{"auraId":{"spellId":16166}}},"castSpell":{"spellId":{"spellId":10414,"rank":7}}}},\r
    {"action":{"condition":{"cmp":{"op":"OpGe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"30%"}}}},"castSpell":{"spellId":{"spellId":15208,"rank":10}}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":915,"rank":4}}}},\r
    {"action":{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":20572}}}}\r
  ]\r
}\r
`,rn=`{\r
	"type": "TypeAPL",\r
	"prepullActions": [\r
	  {"action":{"castSpell":{"spellId":{"spellId":10442,"rank":4}}},"doAtValue":{"const":{"val":"-6s"}}},\r
	  {"action":{"castSpell":{"spellId":{"spellId":10614,"rank":3}}},"doAtValue":{"const":{"val":"-4.5s"}}},\r
	  {"action":{"castSpell":{"spellId":{"spellId":10627,"rank":2}}},"doAtValue":{"const":{"val":"-3s"}}},\r
	  {"action":{"castSpell":{"spellId":{"spellId":10438,"rank":6}}},"doAtValue":{"const":{"val":"-1.5s"}}}\r
	],\r
	"priorityList": [\r
	  {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":10442,"rank":4}}}}},"castSpell":{"spellId":{"spellId":10442,"rank":4}}}},\r
	  {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"auraId":{"spellId":10611}}},"rhs":{"const":{"val":"1.5s"}}}},"castSpell":{"spellId":{"spellId":10614,"rank":3}}}},\r
	  {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":10627,"rank":2}}}}},"castSpell":{"spellId":{"spellId":10627,"rank":2}}}},\r
	  {"action":{"autocastOtherCooldowns":{}}},\r
	  {"action":{"castSpell":{"spellId":{"spellId":17364,"rank":1}}}},\r
	  {"action":{"condition":{"and":{"vals":[{"not":{"val":{"dotIsActive":{"spellId":{"spellId":10438,"rank":6}}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"20s"}}}}]}},"castSpell":{"spellId":{"spellId":10438,"rank":6}}}},\r
	  {"action":{"condition":{"cmp":{"op":"OpGe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"50%"}}}},"castSpell":{"spellId":{"spellId":10414,"rank":7}}}}\r
	]\r
  }`,ln=`{\r
 "type": "TypeAPL",\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "cmp": {\r
         "op": "OpGe",\r
         "lhs": {\r
          "currentComboPoints": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "5"\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "not": {\r
         "val": {\r
          "dotIsActive": {\r
           "spellId": {\r
            "spellId": 9896\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "10"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 9896\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGe",\r
      "lhs": {\r
       "currentComboPoints": {}\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "5"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 31018\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "not": {\r
         "val": {\r
          "dotIsActive": {\r
           "spellId": {\r
            "spellId": 9904\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "6"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 9904\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 9830\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 9850\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,en=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [\r
    {"action":{"castSpell":{"spellId":{"spellId":17392,"rank":4}}},"doAtValue":{"const":{"val":"-1.0s"}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":9846,"rank":4}}},"doAtValue":{"const":{"val":"-3.5s"}}}\r
  ],\r
  "priorityList": [\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":17392,"rank":4}}},"rhs":{"const":{"val":"1.0"}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":9907,"rank":4}}},"rhs":{"const":{"val":"1.0"}}}}]}},"castSpell":{"spellId":{"spellId":17392,"rank":4}}}},\r
    {"action":{"condition":{"and":{"vals":[{"auraIsActive":{"auraId":{"spellId":768}}},{"spellIsKnown":{"spellId":{"spellId":13494}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":13494}}}}},{"cmp":{"op":"OpLt","lhs":{"currentTime":{}},"rhs":{"const":{"val":"90.0"}}}}]}},"castSpell":{"spellId":{"spellId":13494}}}},\r
    {"action":{"condition":{"auraIsActive":{"auraId":{"spellId":768}}},"autocastOtherCooldowns":{}}},\r
    {"action":{"condition":{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":17061,"rank":5}}},{"cmp":{"op":"OpGe","lhs":{"currentMana":{}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":768}}}}},{"gcdIsReady":{}},{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":16870}}},{"auraIsActive":{"auraId":{"spellId":16870}}},{"cmp":{"op":"OpLt","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"27.8"}}}}]}}]}},"cancelAura":{"auraId":{"spellId":768}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5.0"}}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":16870}}}}},{"cmp":{"op":"OpLt","lhs":{"math":{"op":"OpAdd","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"20.2"}}}},"rhs":{"math":{"op":"OpAdd","lhs":{"spellCurrentCost":{"spellId":{"spellId":9830,"rank":5}}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":31018,"rank":4}}}}}}}]}},"castSpell":{"spellId":{"spellId":31018,"rank":4}}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":9830,"rank":5}}}},\r
    {"action":{"condition":{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":17061,"rank":5}}},{"cmp":{"op":"OpGe","lhs":{"currentMana":{}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":768}}}}},{"cmp":{"op":"OpGt","lhs":{"timeToEnergyTick":{}},"rhs":{"const":{"val":"1.02"}}}}]}},"castSpell":{"spellId":{"spellId":9850,"rank":5}}}},\r
    {"action":{"condition":{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":17061,"rank":5}}},{"cmp":{"op":"OpGe","lhs":{"currentMana":{}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":768}}}}},{"gcdIsReady":{}},{"or":{"vals":[{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5.0"}}}},{"cmp":{"op":"OpLt","lhs":{"math":{"op":"OpAdd","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"20.2"}}}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":9830,"rank":5}}}}}]}},{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5.0"}}}},{"cmp":{"op":"OpLt","lhs":{"math":{"op":"OpAdd","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"20.2"}}}},"rhs":{"spellCurrentCost":{"spellId":{"spellId":31018,"rank":4}}}}}]}},{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":16870}}},{"auraIsActive":{"auraId":{"spellId":16870}}},{"cmp":{"op":"OpLt","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"27.8"}}}}]}}]}}]}},"cancelAura":{"auraId":{"spellId":768}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":17392,"rank":4}}},"rhs":{"const":{"val":"14.0"}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":9907,"rank":4}}},"rhs":{"const":{"val":"14.0"}}}}]}},"castSpell":{"spellId":{"spellId":17392,"rank":4}}}},\r
    {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},"castSpell":{"spellId":{"itemId":10646}}}},\r
    {"action":{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},{"cmp":{"op":"OpLe","lhs":{"math":{"op":"OpAdd","lhs":{"currentMana":{}},"rhs":{"const":{"val":"1500.0"}}}},"rhs":{"math":{"op":"OpDiv","lhs":{"currentMana":{}},"rhs":{"currentManaPercent":{}}}}}}]}},"castSpell":{"spellId":{"itemId":12662}}}},\r
    {"action":{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},{"cmp":{"op":"OpLe","lhs":{"math":{"op":"OpAdd","lhs":{"currentMana":{}},"rhs":{"const":{"val":"2250.0"}}}},"rhs":{"math":{"op":"OpDiv","lhs":{"currentMana":{}},"rhs":{"currentManaPercent":{}}}}}}]}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}},\r
    {"action":{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"80%"}}}},{"not":{"val":{"or":{"vals":[{"and":{"vals":[{"spellIsKnown":{"spellId":{"itemId":12662}}},{"spellIsReady":{"spellId":{"itemId":12662}}}]}},{"and":{"vals":[{"spellIsKnown":{"spellId":{"otherId":"OtherActionPotion"}}},{"spellIsReady":{"spellId":{"otherId":"OtherActionPotion"}}}]}}]}}}}]}},"castSpell":{"spellId":{"spellId":23724}}}},\r
    {"action":{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"40%"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"20.0"}}}},{"not":{"val":{"or":{"vals":[{"and":{"vals":[{"spellIsKnown":{"spellId":{"itemId":12662}}},{"spellIsReady":{"spellId":{"itemId":12662}}}]}},{"and":{"vals":[{"spellIsKnown":{"spellId":{"otherId":"OtherActionPotion"}}},{"spellIsReady":{"spellId":{"otherId":"OtherActionPotion"}}}]}}]}}}}]}},"castSpell":{"spellId":{"spellId":29166}}}},\r
    {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":768}}}}},"castSpell":{"spellId":{"spellId":768}}}}\r
  ]\r
}`,an=`{\r
 "type": "TypeAPL",\r
 "prepullActions": [\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25296\r
     }\r
    }\r
   },\r
   "doAtValue": {\r
    "const": {\r
     "val": "-10s"\r
    }\r
   }\r
  }\r
 ],\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "not": {\r
      "val": {\r
       "auraIsActive": {\r
        "auraId": {\r
         "spellId": 25296\r
        }\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25296\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "not": {\r
         "val": {\r
          "dotIsActive": {\r
           "spellId": {\r
            "spellId": 25295\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "8"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25295\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGt",\r
      "lhs": {\r
       "autoTimeToNext": {\r
        "autoType": "Ranged"\r
       }\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "1"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 20904\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGt",\r
      "lhs": {\r
       "autoTimeToNext": {\r
        "autoType": "Ranged"\r
       }\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "0.5"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25294\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGt",\r
      "lhs": {\r
       "autoTimeToNext": {\r
        "autoType": "Ranged"\r
       }\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "0.5"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 14287\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,sn=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [\r
    {"action":{"castSpell":{"spellId":{"spellId":25296,"rank":6}}},"doAtValue":{"const":{"val":"-10s"}}},\r
    {"action":{"castSpell":{"spellId":{"spellId":20904,"rank":6}}},"doAtValue":{"const":{"val":"-3.5s"}}}\r
  ],\r
  "priorityList": [\r
    {"action":{"autocastOtherCooldowns":{}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"autoTimeToNext":{"autoType":"Ranged"}},"rhs":{"const":{"val":"0.1"}}}},{"cmp":{"op":"OpLt","lhs":{"spellTimeToReady":{"spellId":{"spellId":20904,"rank":6}}},"rhs":{"const":{"val":"0.5"}}}}]}},"castSpell":{"spellId":{"spellId":3045}}}},\r
    {"action":{"condition":{"cmp":{"op":"OpGt","lhs":{"autoTimeToNext":{"autoType":"Ranged"}},"rhs":{"const":{"val":"1s"}}}},"castSpell":{"spellId":{"spellId":20904,"rank":6}}}},\r
    {"action":{"condition":{"cmp":{"op":"OpGt","lhs":{"autoTimeToNext":{"autoType":"Ranged"}},"rhs":{"const":{"val":"0.5s"}}}},"castSpell":{"spellId":{"spellId":25294,"rank":4}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"dotRemainingTime":{"spellId":{"spellId":25295,"rank":8}}},"rhs":{"const":{"val":"5s"}}}},{"cmp":{"op":"OpGe","lhs":{"spellTimeToReady":{"spellId":{"spellId":20904,"rank":6}}},"rhs":{"const":{"val":"0.5"}}}},{"cmp":{"op":"OpGe","lhs":{"spellTimeToReady":{"spellId":{"spellId":25294,"rank":4}}},"rhs":{"const":{"val":"0.5"}}}}]}},"castSpell":{"spellId":{"spellId":25295,"rank":8}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"autoTimeToNext":{"autoType":"Ranged"}},"rhs":{"const":{"val":"1s"}}}},{"cmp":{"op":"OpGe","lhs":{"spellTimeToReady":{"spellId":{"spellId":20904,"rank":6}}},"rhs":{"const":{"val":"1"}}}},{"cmp":{"op":"OpGe","lhs":{"spellTimeToReady":{"spellId":{"spellId":25294,"rank":4}}},"rhs":{"const":{"val":"1"}}}},{"cmp":{"op":"OpGt","lhs":{"currentTime":{}},"rhs":{"const":{"val":"6"}}}}]}},"castSpell":{"spellId":{"itemId":18641}}}}\r
  ]\r
}\r
`,tn=`{\r
 "type": "TypeAPL",\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25306\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,on=`{\r
 "type": "TypeAPL",\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25304\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,pn=`{\r
	"type": "TypeAPL",\r
	"priorityList": [\r
	{"action":{"condition":{"auraIsKnown":{"auraId":{}}},"autocastOtherCooldowns":{}}},\r
	{"action":{"condition":{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":12873,"rank":3}}},"rhs":{"const":{"val":"5"}}}},"castSpell":{"spellId":{"spellId":11129}}}},\r
	{"action":{"condition":{"and":{"vals":[{"auraIsKnown":{"auraId":{"spellId":11129}}},{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":12873,"rank":3}}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLe","lhs":{"auraRemainingTime":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":12873,"rank":3}}},"rhs":{"const":{"val":"5s"}}}}]}}]}},"castSpell":{"spellId":{"spellId":10207,"rank":7}}}},\r
	{"action":{"condition":{"spellIsKnown":{"spellId":{"spellId":11129}}},"castSpell":{"spellId":{"spellId":25306,"rank":12}}}},\r
	{"action":{"castSpell":{"spellId":{"spellId":25304,"rank":10}}}}\r
	]\r
}\r
`,cn=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [\r
    {"action":{"castPaladinPrimarySeal":{}},"doAtValue":{"const":{"val":"-1.5s"}}}\r
  ],\r
  "priorityList": [\r
    {"action":{"condition":{"spellCanCast":{"spellId":{"spellId":20271}}},"castSpell":{"spellId":{"spellId":20271}}}},\r
    {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"currentSealRemainingTime":{}},"rhs":{"const":{"val":"1"}}}},"castPaladinPrimarySeal":{}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"autoTimeToNext":{"autoType":"Melee"}},"rhs":{"const":{"val":"0.4s"}}}},{"auraIsActive":{"auraId":{"spellId":20293,"rank":8}}}]}},"castSpell":{"spellId":{"spellId":20375,"rank":1}}}},\r
    {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"autoTimeToNext":{"autoType":"Melee"}},"rhs":{"const":{"val":"0.4s"}}}},{"auraIsActive":{"auraId":{"spellId":20375,"rank":1}}}]}},"castSpell":{"spellId":{"spellId":20293,"rank":8}}}}\r
  ]\r
}`,dn=`{\r
 "type": "TypeAPL",\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "cmp": {\r
         "op": "OpGe",\r
         "lhs": {\r
          "currentComboPoints": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "2"\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "not": {\r
         "val": {\r
          "auraIsActive": {\r
           "auraId": {\r
            "spellId": 6774\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "8"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 6774\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGe",\r
      "lhs": {\r
       "currentComboPoints": {}\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "5"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 31016\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25300\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 11294\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,In=`{\r
 "type": "TypeAPL",\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "cmp": {\r
         "op": "OpGe",\r
         "lhs": {\r
          "currentComboPoints": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "2"\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "not": {\r
         "val": {\r
          "auraIsActive": {\r
           "auraId": {\r
            "spellId": 6774\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "8"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 6774\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGe",\r
      "lhs": {\r
       "currentComboPoints": {}\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "5"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 31016\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "cmp": {\r
         "op": "OpGe",\r
         "lhs": {\r
          "currentComboPoints": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "3"\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpLt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "4"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 31016\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 11294\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,mn=`{\r
    "type": "TypeAPL",\r
    "priorityList": [\r
        {"action":{"condition":{"or":{"vals":[{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"1"}}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6"}}}}]}},{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLt","lhs":{"auraRemainingTime":{"auraId":{"spellId":6774,"rank":2}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"9"}}}}]}}]}},"castSpell":{"spellId":{"spellId":6774,"rank":2}}}},\r
        {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"59"}}}},{"cmp":{"op":"OpLt","lhs":{"timeToEnergyTick":{}},"rhs":{"const":{"val":"1"}}}}]}},"castSpell":{"spellId":{"spellId":13750}}}},\r
        {"action":{"condition":{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}},"autocastOtherCooldowns":{}}},\r
        {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5"}}}},{"or":{"vals":[{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}},{"cmp":{"op":"OpGe","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"79"}}}},{"cmp":{"op":"OpLt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6"}}}}]}}]}},"castSpell":{"spellId":{"spellId":31016}}}},\r
        {"action":{"castSpell":{"spellId":{"spellId":25300}}}}\r
    ]\r
}`,hn=`{\r
    "type": "TypeAPL",\r
    "priorityList": [\r
        {"action":{"condition":{"or":{"vals":[{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"1"}}}},{"not":{"val":{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6"}}}}]}},{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5"}}}},{"cmp":{"op":"OpLt","lhs":{"auraRemainingTime":{"auraId":{"spellId":6774,"rank":2}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"9"}}}}]}}]}},"castSpell":{"spellId":{"spellId":6774,"rank":2}}}},\r
        {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"59"}}}},{"cmp":{"op":"OpLt","lhs":{"timeToEnergyTick":{}},"rhs":{"const":{"val":"1"}}}}]}},"castSpell":{"spellId":{"spellId":13750}}}},\r
        {"action":{"condition":{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}},"autocastOtherCooldowns":{}}},\r
        {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentComboPoints":{}},"rhs":{"const":{"val":"5"}}}},{"or":{"vals":[{"auraIsActive":{"auraId":{"spellId":6774,"rank":2}}},{"cmp":{"op":"OpGe","lhs":{"currentEnergy":{}},"rhs":{"const":{"val":"79"}}}},{"cmp":{"op":"OpLt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6"}}}}]}}]}},"castSpell":{"spellId":{"spellId":31016}}}},\r
        {"action":{"castSpell":{"spellId":{"spellId":11294,"rank":8}}}}\r
    ]\r
}`,un=`{\r
  "type": "TypeAPL",\r
  "prepullActions": [\r
        {"action":{"castSpell":{"spellId":{"spellId":15473}}},"doAtValue":{"const":{"val":"-1s"}}}\r
      ],\r
      "priorityList": [\r
        {"action":{"autocastOtherCooldowns":{}}},\r
        {"action":{"condition":{"and":{"vals":[{"not":{"val":{"dotIsActive":{"spellId":{"spellId":10894,"rank":8}}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"10"}}}}]}},"castSpell":{"spellId":{"spellId":10894,"rank":8}}}},\r
        {"action":{"strictSequence":{"actions":[{"castSpell":{"spellId":{"spellId":14751}}},{"castSpell":{"spellId":{"spellId":19279,"rank":5}}}]}}},\r
        {"action":{"castSpell":{"spellId":{"spellId":10947,"rank":9}}}},\r
        {"action":{"castSpell":{"spellId":{"spellId":18807,"rank":6}}}}\r
      ]\r
}`,vn=`{\r
    "type": "TypeAPL",\r
    "prepullActions": [\r
      {"action":{"castSpell":{"spellId":{"spellId":18788}}},"doAtValue":{"const":{"val":"-5s"}}},\r
      {"action":{"castSpell":{"spellId":{"spellId":18288}}},"doAtValue":{"const":{"val":"-5s"}}}\r
    ],\r
    "priorityList": [\r
      {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"15s"}}}},{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"75%"}}}},{"isExecutePhase":{"threshold":"E35"}}]}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}},\r
        {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"15s"}}}},{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"60%"}}}},{"isExecutePhase":{"threshold":"E35"}}]}},"castSpell":{"spellId":{"itemId":12662}}}},\r
        {"action":{"autocastOtherCooldowns":{}}},\r
        {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"1.5"}}}},"castSpell":{"spellId":{"spellId":18871,"rank":6}}}},\r
        {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"3.5"}}}},"castSpell":{"spellId":{"spellId":17923,"rank":6}}}},\r
        {"action":{"condition":{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"10%"}}}},"castSpell":{"spellId":{"spellId":11689,"rank":6}}}},\r
        {"action":{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":11713,"rank":6}}}}},"castSpell":{"spellId":{"spellId":11713,"rank":6}}}},\r
        {"action":{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":25311,"rank":7}}}}},"castSpell":{"spellId":{"spellId":25311,"rank":7}}}},\r
        {"action":{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":25309,"rank":8}}}}},"castSpell":{"spellId":{"spellId":25309,"rank":8}}}},\r
        {"action":{"castSpell":{"spellId":{"spellId":25307,"rank":9}}}}\r
    ]\r
}`,Sn=`{\r
 "type": "TypeAPL",\r
 "prepullActions": [\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25289\r
     }\r
    }\r
   },\r
   "doAtValue": {\r
    "const": {\r
     "val": "-1.5s"\r
    }\r
   }\r
  }\r
 ],\r
 "priorityList": [\r
  {\r
   "action": {\r
    "autocastOtherCooldowns": {}\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "not": {\r
      "val": {\r
       "auraIsActive": {\r
        "auraId": {\r
         "spellId": 25289\r
        }\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25289\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "isExecutePhase": {\r
      "threshold": "E20"\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 20662\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 21553\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 23894\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 1680\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 11585\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "and": {\r
      "vals": [\r
       {\r
        "not": {\r
         "val": {\r
          "dotIsActive": {\r
           "spellId": {\r
            "spellId": 11574\r
           }\r
          }\r
         }\r
        }\r
       },\r
       {\r
        "cmp": {\r
         "op": "OpGt",\r
         "lhs": {\r
          "remainingTime": {}\r
         },\r
         "rhs": {\r
          "const": {\r
           "val": "12"\r
          }\r
         }\r
        }\r
       }\r
      ]\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 11574\r
     }\r
    }\r
   }\r
  },\r
  {\r
   "action": {\r
    "condition": {\r
     "cmp": {\r
      "op": "OpGe",\r
      "lhs": {\r
       "currentRage": {}\r
      },\r
      "rhs": {\r
       "const": {\r
        "val": "40"\r
       }\r
      }\r
     }\r
    },\r
    "castSpell": {\r
     "spellId": {\r
      "spellId": 25286\r
     }\r
    }\r
   }\r
  }\r
 ]\r
}\r
`,On=`{\r
    "type": "TypeAPL",\r
    "priorityList": [\r
      {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":11597,"rank":5}}},"rhs":{"const":{"val":"1"}}}},{"not":{"val":{"auraIsActive":{"sourceUnit":{"type":"CurrentTarget"},"auraId":{"spellId":11198,"rank":5}}}}}]}},"castSpell":{"spellId":{"spellId":11597,"rank":5}}}},\r
      {"action":{"castSpell":{"spellId":{"itemId":10646}}}},\r
      {"action":{"castSpell":{"spellId":{"itemId":18641}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"211.5s"}}}}]}},"castSpell":{"spellId":{"spellId":12328}}}},\r
      {"action":{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":1719}}}},\r
      {"hide":true,"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"15s"}}}},"castSpell":{"spellId":{"spellId":1719}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"20s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"140s"}}}}]}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"20s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"141.5s"}}}}]}},"castSpell":{"spellId":{"spellId":20572}}}},\r
      {"action":{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"60s"}}}},"castSpell":{"spellId":{"spellId":24427}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"130s"}}}}]}},"castSpell":{"spellId":{"itemId":21180}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"130s"}}}}]}},"castSpell":{"spellId":{"spellId":29602}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"130s"}}}}]}},"castSpell":{"spellId":{"itemId":23041}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"130s"}}}}]}},"castSpell":{"spellId":{"itemId":23041}}}},\r
      {"action":{"condition":{"or":{"vals":[{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"30s"}}}},{"cmp":{"op":"OpGe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"140s"}}}}]}},"autocastOtherCooldowns":{}}},\r
      {"action":{"condition":{"cmp":{"op":"OpGt","lhs":{"numberTargets":{}},"rhs":{"const":{"val":"1"}}}},"castSpell":{"spellId":{"spellId":1680}}}},\r
      {"action":{"condition":{"isExecutePhase":{"threshold":"E20"}},"castSpell":{"spellId":{"spellId":20662,"rank":5}}}},\r
      {"action":{"castSpell":{"spellId":{"spellId":23894,"rank":4}}}},\r
      {"action":{"condition":{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":23894,"rank":4}}},"rhs":{"const":{"val":"1.5s"}}}},"castSpell":{"spellId":{"spellId":1680}}}},\r
      {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpEq","lhs":{"numberTargets":{}},"rhs":{"const":{"val":"1"}}}},{"or":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"40"}}}},{"isExecutePhase":{"threshold":"E20"}}]}}]}},"castSpell":{"spellId":{"spellId":25286,"tag":1,"rank":8}}}},\r
      {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"numberTargets":{}},"rhs":{"const":{"val":"1"}}}},{"or":{"vals":[{"cmp":{"op":"OpGe","lhs":{"currentRage":{}},"rhs":{"const":{"val":"40"}}}},{"isExecutePhase":{"threshold":"E20"}}]}}]}},"castSpell":{"spellId":{"spellId":20569,"tag":1,"rank":5}}}},\r
      {"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":23894,"rank":4}}},"rhs":{"const":{"val":"1.5s"}}}},{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":1680}}},"rhs":{"const":{"val":"1.5s"}}}},{"cmp":{"op":"OpGt","lhs":{"currentRage":{}},"rhs":{"const":{"val":"80"}}}}]}},"castSpell":{"spellId":{"spellId":7373,"rank":3}}}},\r
      {"action":{"condition":{"cmp":{"op":"OpLt","lhs":{"currentRage":{}},"rhs":{"const":{"val":"90"}}}},"castSpell":{"spellId":{"spellId":2687}}}},\r
      {"hide":true,"action":{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":23894,"rank":4}}},"rhs":{"const":{"val":"1.5s"}}}},{"cmp":{"op":"OpGt","lhs":{"spellTimeToReady":{"spellId":{"spellId":1680}}},"rhs":{"const":{"val":"1.5s"}}}}]}},"castSpell":{"spellId":{"spellId":18499}}}},\r
      {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":25289,"rank":6}}}}},"castSpell":{"spellId":{"spellId":25289,"rank":6}}}},\r
      {"action":{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":2458}}}}},"castSpell":{"spellId":{"spellId":2458}}}}\r
    ]\r
}\r
`,n={axe:1,dagger:2,fist:3,mace:4,offhand:5,polearm:6,shield:7,staff:8,sword:9},l={bow:1,crossbow:2,gun:3,idol:4,libram:5,thrown:6,totem:7,wand:8},gn=[{key:"warrior",label:"Warrior",className:"Warrior",cls:e.ClassWarrior,role:"melee",rotations:[{label:"Leveling (any level)",json:Sn},{label:"Level 60 Fury/Arms",json:On}],spec:r=>({oneofKind:"warrior",warrior:k.create({options:T.create({startingRage:0,queueDelay:250,shout:A.WarriorShoutBattle,stance:r>=30?h.WarriorStanceBerserker:h.WarriorStanceBattle})})}),armor:r=>r>=40?4:3,weapons:[n.axe,n.dagger,n.fist,n.mace,n.polearm,n.staff,n.sword],twoHand:!0,dualWield:r=>r>=20,ranged:[l.bow,l.crossbow,l.gun,l.thrown],shield:!0},{key:"rogue",label:"Rogue",className:"Rogue",cls:e.ClassRogue,role:"melee",rotations:[{label:"Sinister Strike",json:In},{label:"Backstab (dagger)",json:dn},{label:"Level 60 Sinister Strike",json:hn},{label:"Level 60 Backstab",json:mn}],spec:()=>({oneofKind:"rogue",rogue:y.create({options:L.create({})})}),armor:()=>2,weapons:[n.axe,n.dagger,n.fist,n.mace,n.sword],twoHand:!1,dualWield:()=>!0,ranged:[l.bow,l.crossbow,l.gun,l.thrown],shield:!1},{key:"hunter",label:"Hunter",className:"Hunter",cls:e.ClassHunter,role:"ranged",rotations:[{label:"Leveling (any level)",json:an},{label:"Level 60",json:sn}],spec:()=>({oneofKind:"hunter",hunter:f.create({options:w.create({petType:P.Cat,petUptime:1,petAttackSpeed:b.OneTwo})})}),armor:r=>r>=40?3:2,weapons:[n.axe,n.dagger,n.fist,n.polearm,n.staff,n.sword],twoHand:!0,dualWield:r=>r>=20,ranged:[l.bow,l.crossbow,l.gun],shield:!1},{key:"mage",label:"Mage",className:"Mage",cls:e.ClassMage,role:"caster",rotations:[{label:"Fireball",json:tn},{label:"Frostbolt",json:on},{label:"Level 60 Fire",json:pn}],spec:r=>({oneofKind:"mage",mage:C.create({options:G.create({armor:r>=34?u.MageArmor:u.NoArmor})})}),armor:()=>1,weapons:[n.dagger,n.staff,n.sword,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.wand],shield:!1},{key:"warlock",label:"Warlock",className:"Warlock",cls:e.ClassWarlock,role:"caster",rotations:[{label:"Default",json:vn}],spec:r=>({oneofKind:"warlock",warlock:R.create({options:E.create({armor:W.DemonArmor,summon:r>=20?v.Succubus:v.Imp})})}),armor:()=>1,weapons:[n.dagger,n.staff,n.sword,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.wand],shield:!1},{key:"shadow_priest",label:"Shadow Priest",className:"Priest",cls:e.ClassPriest,role:"caster",rotations:[{label:"Default",json:un}],spec:()=>({oneofKind:"shadowPriest",shadowPriest:M.create({options:N.create({})})}),armor:()=>1,weapons:[n.dagger,n.mace,n.staff,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.wand],shield:!1},{key:"balance_druid",label:"Balance Druid",className:"Druid",cls:e.ClassDruid,role:"caster",rotations:[{label:"Default",json:Z}],spec:()=>({oneofKind:"balanceDruid",balanceDruid:x.create({options:D.create({})})}),armor:()=>2,weapons:[n.dagger,n.fist,n.mace,n.staff,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.idol],shield:!1},{key:"feral_druid",label:"Feral Druid",className:"Druid",cls:e.ClassDruid,role:"melee",rotations:[{label:"Leveling (any level)",json:ln},{label:"Level 60",json:en}],spec:()=>({oneofKind:"feralDruid",feralDruid:K.create({options:_.create({latencyMs:100})})}),armor:()=>2,weapons:[n.dagger,n.fist,n.mace,n.staff,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.idol],shield:!1},{key:"retribution_paladin",label:"Retribution Paladin",className:"Paladin",cls:e.ClassPaladin,role:"melee",rotations:[{label:"Default",json:cn}],spec:r=>({oneofKind:"retributionPaladin",retributionPaladin:j.create({options:H.create({aura:r>=16?S.RetributionAura:S.NoPaladinAura,primarySeal:V.Righteousness})})}),armor:r=>r>=40?4:3,weapons:[n.axe,n.mace,n.polearm,n.sword],twoHand:!0,dualWield:()=>!1,ranged:[l.libram],shield:!0},{key:"elemental_shaman",label:"Elemental Shaman",className:"Shaman",cls:e.ClassShaman,role:"caster",rotations:[{label:"Default",json:nn}],spec:()=>({oneofKind:"elementalShaman",elementalShaman:B.create({options:F.create({})})}),armor:r=>r>=40?3:2,weapons:[n.axe,n.dagger,n.fist,n.mace,n.staff,n.offhand],twoHand:!0,dualWield:()=>!1,ranged:[l.totem],shield:!0},{key:"enhancement_shaman",label:"Enhancement Shaman",className:"Shaman",cls:e.ClassShaman,role:"melee",rotations:[{label:"Default",json:rn}],spec:()=>({oneofKind:"enhancementShaman",enhancementShaman:U.create({options:q.create({})})}),armor:r=>r>=40?3:2,weapons:[n.axe,n.dagger,n.fist,n.mace,n.staff],twoHand:!0,dualWield:()=>!1,ranged:[l.totem],shield:!0}],kn=document.querySelector("#forever-classes");let O=0;for(const r of $){const p=Y(r);if(!p.length)continue;const t=a("article","forever-class-card"),c=a("div","forever-class-heading"),s=a("img");s.src=z[r],s.alt="",s.width=40,s.height=40,c.append(s,a("h3","",Q[r])),t.append(c);for(const i of p){const d=J(i),I=gn.find(g=>d.replace(/\/+$/,"").endsWith("/"+g.key));if(!I)continue;O++;const o=a("a","forever-spec-link",X[i]);o.href=`./app/#${I.key}`,o.append(a("span","","→"));const m=a("a","forever-advanced-link","Advanced");m.href=d,t.append(o,m)}t.children.length>1&&kn.append(t)}document.querySelector("#forever-count").textContent=`${O} DPS specs`;
