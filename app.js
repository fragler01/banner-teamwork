let slider = document.getElementById("slider").value;
slider.value = 50;

function getSliderValue(){
    let slider = document.getElementById("slider").value;
    let kepek = document.getElementById("kepek");

    kepek.style = `animation-duration: ${slider.value*5}`;

}