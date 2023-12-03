const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
// const tempp = document.getElementById('temp_vall');
const temp_vall = document.getElementById('temp_vall');

const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal === ""){
        city_name.innerText = `please write the name before search`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=67018f9a008ddff9a7505fd1e228848e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // console.log(`${arrData[0].name}, ${arrData[0].sys.country}`);
            console.log(arrData[0].main.temp);
            // console.log(arrData[0].weather[0].main);
            let temppp = arrData[0].main.temp;
            temp_vall.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "clear")
            {
                console.log(1);
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            else if(tempMood == "clouds")
            {
                console.log(1);
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;''></i>";
            }
            else if(tempMood == "Rain")
            {
                console.log(1);
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }
            else
            {
                console.log(1);
               temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
        }catch{
            city_name.innerText = `please enter the city name properly`;
            temp_status.innerHTML = "";
        }
    }
}

submitBtn.addEventListener('click',getInfo);