export class Tom {
  constructor(name) {
    this.name =  name;
    this.foodLevel = 100;
    this.honryLevel = 100;
    this.sweepyLevel = 100;
  }
  hungryTom() {
    setInterval(() => {
      this.foodLevel--;
    }, 200);
  }
  honryTom() {
    setInterval(() => {
      this.honryLevel--;
    }, 3000);
  }
  sweepyTom() {
    setInterval(() => {
      this.sweepyLevel--;
    }, 5000);
  }

  feedMe() {
    this.foodLevel += 20;
    alert("YUMMI");
  }
  spankMe() {
    this.honryLevel += 25;
    alert('THANK YOU DADDI');
  }
  sweepyTime() {
    this.sweepyLevel += 50;
    alert("NITE-NITE");
  }
  foodCheck() {
    setInterval(() => {
      if (this.foodLevel > 72) {
        $("#hungy").text("Hungry Level: " + this.foodLevel);
        return false;
      } else if (this.foodLevel <= 69 && this.foodLevel >=71) {
        $("#hungy").text("Hungry Level: " + this.foodLevel + "I'm a lil hungy");
        return false;
      } else if (this.foodLevel  69) {
        $("#hungy").text("Hungry Level: " + this.foodLevel);
      }else {
        return true;
      }
    }, 1000);
  }
  spankCheck() {
    setInterval(() => {
      if (this.honryLevel > 0) {
        $("#honry").text("Sexy Level: " + this.honryLevel);
        return false;
      } else if (this.honryLevel <= 20){
        alert('BBY NEEDS A SPANK!');
      } else {
        return true;
      }
    }, 1000);
  }
  sleepCheck() {
    setInterval(() => {
      if (this.sweepyLevel > 0) {
        $("#sweepy").text("Sweepy Level: " + this.sweepyLevel);
        return false;
      } else {
        return true;
      }
    }, 1000);
  }
}
