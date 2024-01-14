class smarthouse2 {
    lamp1
    lamp2
    tv
    constructor(lamp1, lamp2, tv){
        this.lamp1 = lamp1,
        this.lamp2 = lamp2,
        this.tv = tv

    }
}

const Lamp1 = {
    Switch: false,
    Name: "Lamp1",
    ChangeSwitch(){
        this.Switch = !this.Switch
    },
};
const Lamp2 = {
    Switch: false,
    Name: "Lamp2",
    ChangeSwitch(){
        this.Switch = !this.Switch
    },
};

const Televizor = {
    Switch: false,
    Name: "TV",
    Volume: 1,
    ChangeSwitch(){
        this.Switch = !this.Switch
    },
    GetName(){
        alert(Name)
    },
    SetVolum(){
        this.Volume = volume
    }
}

const house = new smarthouse2(Lamp1, Lamp2, Televizor)

if(!house.lamp1.Switch){
    document.getElementById("lamp1ID").innerHTML = "Off"
}
else{
    document.getElementById("lamp1ID").innerHTML = "On"
    document.getElementById("lamp1ID").style.color = 'green'
}

if(!house.lamp2.Switch){
    document.getElementById("lamp2ID").innerHTML = "Off"
}
else{
    document.getElementById("lamp2ID").innerHTML = "On"
    document.getElementById("lamp2ID").style.color = 'green'
}

if(!house.tv.Switch){
    document.getElementById("TVID").innerHTML = "Off"
}
else{
    document.getElementById("TVID").innerHTML = "On"
    document.getElementById("TVID").style.color = 'green'
}

function lamp1Switch(){
    el = document.getElementById("lamp1Btn")
    if (el.value == "OFF") {
        el.value = "ON";
        document.getElementById("lamp1ID").innerHTML = "On"
        document.getElementById("lamp1ID").style.color = 'green'
        el.innerHTML = "Вимкнути"
        house.lamp1.ChangeSwitch()
      } else {
        el.value = "OFF";
        document.getElementById("lamp1ID").innerHTML = "Off"
        document.getElementById("lamp1ID").style.color = 'red'
        el.innerHTML = "Увімкнути"
        house.lamp1.ChangeSwitch()

      }
}

function lamp2Switch(){
    el = document.getElementById("lamp2Btn")
    if (el.value == "OFF") {
        el.value = "ON";
        document.getElementById("lamp2ID").innerHTML = "On"
        document.getElementById("lamp2ID").style.color = 'green'
        el.innerHTML = "Вимкнути"
        house.lamp2.ChangeSwitch()
      } else {
        el.value = "OFF";
        document.getElementById("lamp2ID").innerHTML = "Off"
        document.getElementById("lamp2ID").style.color = 'red'
        el.innerHTML = "Увімкнути"
        house.lamp2.ChangeSwitch()

      }
}

function TVSwitch(){
    el = document.getElementById("TVpowBtn")
    if (el.value == "OFF") {
        el.value = "ON";
        document.getElementById("TVID").innerHTML = "On"
        document.getElementById("TVID").style.color = 'green'
        el.innerHTML = "Вимкнути"
        house.tv.ChangeSwitch()
      } else {
        el.value = "OFF";
        document.getElementById("TVID").innerHTML = "Off"
        document.getElementById("TVID").style.color = 'red'
        el.innerHTML = "увімкнути"
        house.tv.ChangeSwitch()

      }
}

function VolClk(){
    volume = prompt("Введіть гучність телевізора")
    house.tv.SetVolum()
}
console.log(house)