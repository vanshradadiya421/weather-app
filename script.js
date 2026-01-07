const apikey="3edb6ec9226db289245078115a892ac9";

function setBackground(temp){
    document.body.className = "";

    if(temp<=20)
    {
        document.body.classList.add("cold");
    }
    else if(temp>30)
    {
        document.body.classList.add("hot");
    }
    else
    {
        document.body.classList.add("normal");
    }
}

/*background*/

function showData(data)
{
    document.getElementById("cityName").innerText=data.name;
    document.getElementById("temp").innerText="Temperature: "+data.main.temp+" °C";

    const icon=document.getElementById("icon");
    const temp=data.main.temp;

    if(temp<=20)
    {
        icon.src="cold.png";
    }
    else if(temp>30)
    {
        icon.src="hot.png";
    }
    else
    {
        icon.src="normal.png";
    }

    setBackground(temp);
}

function getweather(){
    const city=document.getElementById("city").value;

    if(city==="")
    {
        alert("Enter city name!");
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then(res => res.json()).then(data => showData(data));
}
function getlocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`).then(res => res.json()).then(data => showData(data));
    });
}


