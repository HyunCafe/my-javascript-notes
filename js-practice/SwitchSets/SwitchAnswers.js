// 1
function getDayOfWeek(dayNum) {
    let day;
    switch (dayNum) {
      case 1:
        day = "Sunday";
        break;
      case 2:
        day = "Monday";
        break;
      case 3:
        day = "Tuesday";
        break;
      case 4:
        day = "Wednesday";
        break;
      case 5:
        day = "Thursday";
        break;
      case 6:
        day = "Friday";
        break;
      case 7:
        day = "Saturday";
        break;
      default:
        day = "Invalid day number.";
    }
    return day;
  }
  console.log(getDayOfWeek(5));

  // 2
  function getHexCode(color) {
    let hex;
    switch (color) {
      case "red":
        hex = "#ff0000";
        break;
      case "green":
        hex = "#00ff00";
        break;
      case "blue":
        hex = "#0000ff";
        break;
      default:
        hex = "Invalid color.";
    }
    return hex;
  }
  console.log(getHexCode("green"));

  // 3
function getMonth(monthNum) {
    let month;
    switch (monthNum) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
      default:
        month = "Invalid month number.";
    }
    return month;
  }
  console.log(getMonth(5));

  // 4
  function getGradeValue(grade) {
    let value;
    switch (grade) {
      case "A":
        value = 4;
        break;
      case "B":
        value = 3;
        break;
      case "C":
        value = 2;
        break;
      case "D":
        value = 1;
        break;
      case "F":
        value = 0;
        break;
      default:
        value = "Invalid grade.";
    }
    return value;
  }
  console.log(getGradeValue("B"));

  // 5
  function getSeason(dayNum) {
    let season;
    switch (true) {
      case (dayNum <= 79 && dayNum >= 71):
        season = "Winter";
        break;
      case (dayNum <= 171 && dayNum >= 80):
        season = "Spring";
        break;
      case (dayNum <= 264 && dayNum >= 172):
        season = "Summer";
        break;
      case (dayNum <= 365 && dayNum >= 265):
        season = "Fall";
        break;
      default:
        season = "Invalid day number.";
    }
    return season;
  }
  console.log(getSeason(100));

// 6
function getQuarter(monthNum) {
  let quarter;
  switch (monthNum) {
    case 1:
    case 2:
    case 3:
      quarter = "Q1";
      break;
    case 4:
    case 5:
    case 6:
      quarter = "Q2";
      break;
    case 7:
    case 8:
    case 9:
      quarter = "Q3";
      break;
    case 10:
    case 11:
    case 12:
      quarter = "Q4";
      break;
    default:
      quarter = "Invalid month number.";
  }
  return quarter;
}
console.log(getQuarter(5));

// 7
function getRainbowColor(colorNum) {
  let color;
  switch (colorNum) {
    case 1:
      color = "Red";
      break;
    case 2:
      color = "Orange";
      break;
    case 3:
      color = "Yellow";
      break;
    case 4:
      color = "Green";
      break;
    case 5:
      color = "Blue";
      break;
    case 6:
      color = "Indigo";
      break;
    case 7:
      color = "Violet";
      break;
    default:
      color = "Invalid color number.";
  }
  return color;
}
console.log(getRainbowColor(4));

// 8
function getWeekNumber(dayNum) {
    let weekNum;
    switch (true) {
      case (dayNum <= 7):
        weekNum = 1;
        break;
      case (dayNum <= 14):
        weekNum = 2;
        break;
      case (dayNum <= 21):
        weekNum = 3;
        break;
      case (dayNum <= 28):
        weekNum = 4;
        break;
      case (dayNum <= 35):
        weekNum = 5;
        break;
      case (dayNum <= 42):
        weekNum = 6;
        break;
      case (dayNum <= 49):
        weekNum = 7;
        break;
      case (dayNum <= 56):
        weekNum = 8;
        break;
      case (dayNum <= 63):
        weekNum = 9;
        break;
      case (dayNum <= 70):
        weekNum = 10;
        break;
      case (dayNum <= 77):
        weekNum = 11;
        break;
      case (dayNum <= 84):
        weekNum = 12;
        break;
      case (dayNum <= 91):
        weekNum = 13;
        break;
      case (dayNum <= 98):
        weekNum = 14;
        break;
      case (dayNum <= 105):
        weekNum = 15;
        break;
      case (dayNum <= 112):
        weekNum = 16;
        break;
      default:
        weekNum = "Invalid day number.";
    }
    return weekNum;
  }
  console.log(getWeekNumber(25));

  // 9
function getCardValue(card) {
    let value;
    switch (card) {
      case "A":
        value = 1;
        break;
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        value = parseInt(card);
        break;
      case "J":
      case "Q":
      case "K":
        value = 10;
        break;
      default:
        value = "Invalid card.";
    }
    return value;
  }
  console.log(getCardValue("9"));
  
  // 10 
  function getCoinValue(coin) {
    let value;
    switch (coin) {
      case "penny":
        value = 0.01;
        break;
      case "nickel":
        value = 0.05;
        break;
      case "dime":
        value = 0.1;
        break;
      case "quarter":
        value = 0.25;
        break;
      default:
        value = "Invalid coin.";
    }
    return value;
  }
  console.log(getCoinValue("dime"));

  // 11
function getTemperature(temp) {
    let type;
    switch (true) {
      case (temp >= 90):
        type = "Hot";
        break;
      case (temp >= 70 && temp < 90):
        type = "Warm";
        break;
      case (temp >= 50 && temp < 70):
        type = "Mild";
        break;
      case (temp < 50):
        type = "Cold";
        break;
      default:
        type = "Invalid temperature";
    }
    return type;
  }
  console.log(getTemperature(80));

  // 12
  function getDayOfTheWeek(dayNum) {
    let day;
    switch (dayNum) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
      default:
        day = "Invalid day number.";
    }
    return day;
  }
  console.log(getDayOfTheWeek(4));

  // 13
function getAgeGroup(age) {
    let group;
    switch (true) {
      case (age >= 0 && age <= 2):
        group = "Baby";
        break;
      case (age >= 3 && age <= 12):
        group = "Child";
        break;
      case (age >= 13 && age <= 19):
        group = "Teenager";
        break;
      case (age >= 20 && age <= 64):
        group = "Adult";
        break;
      case (age >= 65):
        group = "Senior";
        break;
      default:
        group = "Invalid age";
    }
    return group;
  }
  console.log(getAgeGroup(30));

  // 14
  function getMovieRating(rating) {
    let type;
    switch (rating) {
      case "G":
        type = "General Audiences";
        break;
      case "PG":
        type = "Parental Guidance Suggested";
        break;
      case "PG-13":
        type = "Parents Strongly Cautioned";
        break;
      case "R":
        type = "Restricted";
        break;
      case "NC-17":
        type = "Adults Only";
        break;
      default:
        type = "Invalid rating.";
    }
    return type;
  }
  console.log(getMovieRating("PG-13"));

  // 15
  function getTrafficLightColor(light) {
    let color;
    switch (light) {
      case "green":
        color = "Go";
        break;
      case "yellow":
        color = "Caution";
        break;
      case "red":
        color = "Stop";
        break;
      default:
        color = "Invalid light.";
    }
    return color;
  }
  console.log(getTrafficLightColor("yellow"));