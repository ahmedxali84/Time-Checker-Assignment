function myFunction() {
    document.getElementById("button");
    var time = prompt("Enter Time At 24 Hour Format :")
    var AM_PM = prompt("AM OR PM :")
    if(time>=12 && AM_PM == "PM"){
        alert("GOOD EVENING!!!!");
    }
    else if (time<=12 && AM_PM == "AM" || AM_PM=="am"){
        alert("GOOD MORNING!!!");
    }
    if(time>=18 && AM_PM == "PM" || AM_PM=="pm")
        alert("GOOD NIGHT!!!!")
    else if(time>=22 && AM_PM=="pm")
        alert("SO BHI JAA BHAIII ITNI RAAT HORHI TU ABHI TAK JAAGRHA")
}