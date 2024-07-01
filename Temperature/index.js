const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = documnet.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event){
    const currentValue=+event.target.value;

    switch (event.targer.name){
        case "celsius":
            kelvinEl.value=(currentValue+273.32).toFixed(2);
            fahrenheitEl.value=(currentValue*1.8+32).toFixed(2);
            break;
        case "fahrenheit":
            celsisusEl.value=((currentValue-32)/1.8).toFixed(2);
            kelvinEl.value=((currentValue-32)/1.8+273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.vlaue=(currentValue-273.32).toFixed(2);
            fahrenheitEl.value=((currentValue-273.32)*1.8+32).toFixed(2);
            break;
            default:
            break;
    }
    }
