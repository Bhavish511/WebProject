const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");

const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => 
{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == "")
    {
        city_name.innerText = `please write the name before search `;
    }
    else
    {
        try
        {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=67018f9a008ddff9a7505fd1e228848e`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            cityName.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            
            if(tempMood == "clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            else if(tempMood == "clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;''></i>";
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }
            else
            {
               temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            datahife.classlist.remove("data_hide");
        }
        catch
        {
            city_name.innerText = `please enter the city name properly`;
        }
    }
}

submitBtn.addEventListener("click",getInfo);