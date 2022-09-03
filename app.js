let slider = document.getElementById("slider").value;
slider.value = 50;

function getSliderValue(){
    let slider = document.getElementById("slider").value;
    let kepek = document.getElementById("kepek");

    document.getElementById("myDIV").style.animationDuration = slider.value + "s";

}