//Side Menu Tab functionalily
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })

})





//Compute Pounds to Metric outputs
function convertweight() {
    let inputNumber = document.getElementById('pounds-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output').innerHTML = number * 453592 + " miligirams";
        document.getElementById('g-output').innerHTML = number * 454 + " grams";
        document.getElementById('kg-output').innerHTML = number * 2.205 + " kilograms";
        document.getElementById('tonne-output').innerHTML = number / 2205 +
            " metric tonnes";


    })

}

convertweight()


//Compute Ounces to Metric outputs
function convertweightounces() {
    let inputNumber = document.getElementById('ounces-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output-o').innerHTML = number * 28350 + " miligirams";
        document.getElementById('g-output-o').innerHTML = number * 28.35 + " grams";
        document.getElementById('kg-output-o').innerHTML = number / 35.274 + " kilograms";
        document.getElementById('tonne-output-o').innerHTML = number / 35274 +
            " metric tonnes";


    })

}

convertweightounces()

//Compute Stones to Metric outputs
function convertweightstones() {
    let inputNumber = document.getElementById('stones-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output-s').innerHTML = number * 6.35e+6 +
            " miligirams";
        document.getElementById('g-output-s').innerHTML = number * 6350 +
            " grams";
        document.getElementById('kg-output-s').innerHTML = number * 6.35 +
            " kilograms";
        document.getElementById('tonne-output-s').innerHTML = number / 157 +
            " metric tonnes";


    })

}

convertweightstones()
    //Compute Stones to Metric outputs
function convertweightstones() {
    let inputNumber = document.getElementById('stones-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output-s').innerHTML = number * 6.35e+6 +
            " miligirams";
        document.getElementById('g-output-s').innerHTML = number * 6350 +
            " grams";
        document.getElementById('kg-output-s').innerHTML = number * 6.35 +
            " kilograms";
        document.getElementById('tonne-output-s').innerHTML = number / 157 +
            " metric tonnes";


    })

}

convertweightstones()


//Compute Tons to Metric outputs
function convertweighttons() {
    let inputNumber = document.getElementById('USTons-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output-t').innerHTML = number * 9.072e+8 +
            " miligirams";
        document.getElementById('g-output-t').innerHTML = number * 907185 +
            " grams";
        document.getElementById('kg-output-t').innerHTML = number * 907 +
            " kilograms";
        document.getElementById('tonne-output-t').innerHTML = number / 1.102 +
            " metric tonnes";


    })

}

convertweighttons()


//Compute Tons to Metric outputs
function convertweightgrains() {
    let inputNumber = document.getElementById('grains-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mg-output-g').innerHTML = number * 64.799 +
            " miligirams";
        document.getElementById('g-output-g').innerHTML = number / 15.432 +
            " grams";
        document.getElementById('kg-output-g').innerHTML = number / 15432 +
            " kilograms";
        document.getElementById('tonne-output-g').innerHTML = number / 1.543e+7 +
            " metric tonnes";


    })

}

convertweightgrains()


convertweightgrains()

//Compute inches to Metric outputs
function convertweightinch() {
    let inputNumber = document.getElementById('inch-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mm-output-i').innerHTML = number * 25.4 +
            " milimeters";
        document.getElementById('cm-output-i').innerHTML = number * 2.54 +
            " centimeters";
        document.getElementById('m-output-i').innerHTML = number / 39.37 +
            " meters";
        document.getElementById('km-output-i').innerHTML = number / 39370 +
            " Kilometers";


    })

}

convertweightinch()


//Compute feet to Metric outputs
function convertweightfoot() {
    let inputNumber = document.getElementById('foot-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mm-output-f').innerHTML = number * 305 +
            " milimeters";
        document.getElementById('cm-output-f').innerHTML = number * 30.48 +
            " centimeters";
        document.getElementById('m-output-f').innerHTML = number / 3.281 +
            " meters";
        document.getElementById('km-output-f').innerHTML = number / 3281 +
            " Kilometers";


    })

}

convertweightfoot()

//Compute miles to Metric outputs
function convertweightmiles() {
    let inputNumber = document.getElementById('miles-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('mm-output-m').innerHTML = number * 1.609e+6 +
            " milimeters";
        document.getElementById('cm-output-m').innerHTML = number * 160934 +
            " centimeters";
        document.getElementById('m-output-m').innerHTML = number * 1609 +
            " meters";
        document.getElementById('km-output-m').innerHTML = number * 1.609 +
            " Kilometers";


    })

}

convertweightmiles()


//Compute Pints to Metric outputs
function convertweightpint() {
    let inputNumber = document.getElementById('pint-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('ml-output-p').innerHTML = number * 568 +
            " mililiters";
        document.getElementById('cl-output-p').innerHTML = number * 47.318 +
            " centiliters";
        document.getElementById('l-output-p').innerHTML = number / 1.76 +
            " liters";
        document.getElementById('kl-output-p').innerHTML = number / 2113
        1.609 +
            " Kiloliters";


    })

}

convertweightpint()


//Compute Pints to Metric outputs
function convertweightquart() {
    let inputNumber = document.getElementById('quart-input');
    inputNumber.addEventListener('input', function(e) {
        let number = e.target.value;

        document.getElementById('ml-output-q').innerHTML = number * 568 +
            " mililiters";
        document.getElementById('cl-output-q').innerHTML = number * 47.318 +
            " centiliters";
        document.getElementById('l-output-q').innerHTML = number / 1.76 +
            " liters";
        document.getElementById('kl-output-q').innerHTML = number / 2113
        1.609 +
            " Kiloliters";


    })

}

convertweightquart()