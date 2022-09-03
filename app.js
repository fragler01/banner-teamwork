let slider = document.getElementById("slider").value;
slider.value = 50;

function getSliderValue(){
    let slider = document.getElementById("slider").value;
    let kepek = document.getElementById("kepek");

    slider.style.animationDuration = slider.value + "s";
    document.getElementById("valasztott").innerHTML = slider.value;
}