let slider = document.getElementById("slider").value;

function getSliderValue(){
    let slider = document.getElementById("slider");
    let kepek = document.getElementById("kepek");

    kepek.style.animationDuration = slider.value + "s";
    document.getElementById("valasztott").innerHTML = slider.value;
}