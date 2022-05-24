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