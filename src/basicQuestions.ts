export const questions = [
  "You are a spider getting ready to go outside today, which of these choices is the most important for you to bring?",
  "Why do you feel you are going outside today?",
  "On your walk you notice that the bridge you must use to get over the raging stream is broken. How do you proceed?",
  "A strong gust of wind knocked you into the raging stream, you must act quickly so that you are not carried away by the stream. Which do you think is the best way to act in this situation?",
  "After making it safely to shore, you notice a spider who also tried to cross the stream and has broken its leg. The spider is currently in a massive state of distress. How do you choose to assist this spider?",
  "After you finish helping the spider with his wounds and begin the journey to help him back home safely. You look back and see the broken bridge. What steps do you think you could take to prevent this from happening again?",
  "Once you arrive back home after helping the injured spider back to his home safely. How do you choose to relax after this eventful day?",
];

export const answers = [
  ["Umbrella", "First aid kit", "Notebook", "Calculator"],
  [
    "Going on a walk clears my mind",
    "I am meeting with my arachnid friends",
    "I am on my way to my current class/job",
    "You are curious what you will see on this walk",
  ],
  [
    "Take your silk and weave it in a way so that it connects the 2 broken parts of the bridge",
    "Take your silk and try to swing over from one side of the bridge to the other",
    "Wait and see if any other spiders arrive so you can work together to come to a solution",
    "Look around to see if there are any materials you can use to make a raft to get across",
  ],
  [
    "Attempt to swim along the current, hoping it will take you to the shore",
    "Look around and see if there is anything floating that you can grab onto",
    "Use your silk to try and grapple to the shore and pull yourself in",
  ],
  [
    "Attempt to make the spider as comfortable as possible and calm him down until help arrives",
    "Go out and search for someone else to go and help this spider",
    "Attempt to create a splint out of silk to hold the spider’s broken leg in place",
  ],
  [
    "Apply to a job where you’re responsible for bridge maintenance",
    "Volunteer to assist in the rebuilding of the bridge",
    "Spread the word about what has happened so everyone knows to take a safer route",
    "Create a boat company to ferry other insects across",
  ],
  [
    "See if any of your friends are available to go out tonight",
    "Cook yourself a nice meal",
    "Think about ways to make the new bridge better",
    "Watch your favorite TV show",
  ],
];

export const single_answers: string[] = [
  "Umbrella",
  "First aid kit",
  "Notebook",
  "Calculator",
  "Going on a walk clears my mind",
  "I am meeting with my arachnid friends",
  "I am on my way to my current class/job",
  "You are curious what you will see on this walk",
  "Take your silk and weave it in a way so that it connects the 2 broken parts of the bridge",
  "Take your silk and try to swing over from one side of the bridge to the other",
  "Wait and see if any other spiders arrive so you can work together to come to a solution",
  "Look around to see if there are any materials you can use to make a raft to get across",
  "Attempt to swim along the current, hoping it will take you to the shore",
  "Look around and see if there is anything floating that you can grab onto",
  "Use your silk to try and grapple to the shore and pull yourself in",
  "Attempt to make the spider as comfortable as possible and calm him down until help arrives",
  "Go out and search for someone else to go and help this spider",
  "Attempt to create a splint out of silk to hold the spider’s broken leg in place",
  "Apply to a job where you’re responsible for bridge maintenance",
  "Volunteer to assist in the rebuilding of the bridge",
  "Spread the word about what has happened so everyone knows to take a safer route",
  "Create a boat company to ferry other insects across",
  "See if any of your friends are available to go out tonight",
  "Cook yourself a nice meal",
  "Think about ways to make the new bridge better",
  "Watch your favorite TV show",
];

export const points: { attributes: string[]; points: number[] }[] = [
  { attributes: ["adaptability"], points: [2] },
  {
    attributes: ["adaptability", "independence", "protectiveness"],
    points: [1, 1, 1],
  },
  { attributes: ["creativity", "organization"], points: [1, 1] },
  { attributes: ["analytics"], points: [2] },
  { attributes: ["patience"], points: [2] },
  { attributes: ["teamwork", "communication"], points: [1, 1] },
  { attributes: ["organization"], points: [2] },
  { attributes: ["creativity, analytics"], points: [1, 1] },
  {
    attributes: ["problem solving", "analytics", "organization"],
    points: [1, 1, 1],
  },
  { attributes: ["adaptability", "independence"], points: [1, 1] },
  {
    attributes: ["patience", "teamwork", "communication"],
    points: [1, 1, 1],
  },
  {
    attributes: ["creativity", "adaptability", "problem solving"],
    points: [1, 1, 1],
  },
  {
    attributes: ["adaptability", "independence", "patience"],
    points: [1, 1, 1],
  },
  {
    attributes: ["decision making", "analytics", "problem solving"],
    points: [1, 1, 1],
  },
  { attributes: ["independence", "creativity"], points: [1, 1] },
  {
    attributes: ["protectiveness", "empathy", "ethics", "communication"],
    points: [1, 1, 1, 1],
  },
  { attributes: ["teamwork", "leadership"], points: [1, 1] },
  {
    attributes: ["creativity", "analytics", "independence"],
    points: [1, 1, 1],
  },
  {
    attributes: ["teamwork", "leadership", "decision making"],
    points: [1, 1, 1],
  },
  { attributes: ["teamwork", "protectiveness"], points: [1, 1] },
  { attributes: ["ethics", "protectiveness", "empathy"], points: [1, 1, 1] },
  { attributes: ["teamwork", "adaptability"], points: [1, 1] },
  {
    attributes: ["analytics", "communication", "leadership"],
    points: [1, 1, 1],
  },
  { attributes: ["creativity", "organization"], points: [1, 1] },
  { attributes: ["empathy", "creativity", "ethics"], points: [1, 1, 1] },
  { attributes: ["independence", "patience"], points: [1, 1] },
];
