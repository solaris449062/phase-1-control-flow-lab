function scuberGreetingForFeet(depth){
  if (depth <= 400) {
    return "This one is on me!";
  }
  else if (depth >= 2000 && depth < 2500 ) {
    return "I will gladly take your thirty bucks.";
  }
  else if (depth >= 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  let statement;
  switch (tip) {
    case "generous":
      statement = "Thank you so much."
      break;
    case "not as generous":
      statement = "Thank you."
      break;
    default: 
      statement = "Bye."
  }
  return statement;
}