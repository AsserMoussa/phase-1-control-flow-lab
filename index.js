function scuberGreetingForFeet(someValue){
  if (someValue<401){
    return "This one is on me!"
  }
  else if (someValue>400 && someValue<2000){
    return "That will be twenty bucks."
  }
  else if(someValue>2000 && someValue<2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }
}

function ternaryCheckCity(city){
  let citycheck; 
  city == "NYC" ? (citycheck = "Ok, sounds good.") : (citycheck = "No go.");
  return citycheck;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
        response = "Thank you so much.";
        break;
    case 'not as generous':
        response = "Thank you.";
        break;
    default:
        response = "Bye.";
        break;
}
return response;
}