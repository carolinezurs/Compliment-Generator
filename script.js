/*
Handles compliment randomization and button logic. 
Authors: Summer, Caroline
Version: July 2025
*/

const confidenceCompliments = ["Wow! Your skin is glowing!","Your hair looks so voluminous today!",
"Your outfit should be on Pinterest","Your makeup blended so well today!","Your nails are goals",
"Your voice is so nice to listen to!","I love your outfit combo","That colored shirt really brings out your eyes",
"I can't help but smile when you do!","You’re so comfortable to be around!"];

const sillyCompliments= ["Man! You look like you would be good at giving winks","You skip like nobody’s business",
"I wish I could make duck noises like you","They see you rollin’ and wish they could be hatin’",
"You look like you’d pull off an inflatable dinosaur costume","You look like you know how to fold a fitted sheet!",
"I think you’d beat me in a race","I bet you crab walk faster than me!","You seem like you’d be good at coloring",
"You look like you make the best toast!"];

const wholesomeCompliments = ["Your smile lights up a room","You give the best hugs","I’m so proud of you for taking care of yourself today",
"I’m so proud of you for drinking water today","I’m so glad you ate a meal today","You were so kind today",
"I really appreciate interacting with you today","I’m so glad to know you exist","You help me believe in the good in humans",
"It’s so much fun having conversations with you"];

class ComplimentPicker {

    static categories = {
        confidence : confidenceCompliments,
        silly : sillyCompliments,
        wholesome : wholesomeCompliments
    }
    
    constructor(category) {
     this.category = category;
     
    const chosenCa = ComplimentPicker.categories[category];
     if (!chosenCa) {
      this.quote = "Invalid category!";
    } else {
      const randomIndex = Math.floor(Math.random() * chosenCa.length);
      this.quote = chosenCa[randomIndex];
    }
  }

  getCompliment() {
    return this.quote;
  }
}
module.exports = ComplimentPicker;