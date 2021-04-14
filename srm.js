let weather = {
 
    apikey: "61d7a50ff56808698be6351b62a1ae49",
    fetchWeather: function(city){
        fetch(
       " http://api.openweathermap.org/data/2.5/weather?q="
       + city 
       +"&units=metric&appid="
       +this.apikey
     )
        .then((response) => {

            if(!response.ok){
                alert("no weather found.");

                    throw new Error("no weather found.");
                }
                return response.json();  
        })
        .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const{name} =  data;
            const{icon , description } = data.weather[0];
            const{temp,humidity, pressure} = data.main;
           const{ speed } = data.wind;
           const{country} = data.sys;
           
            document.querySelector(".city").innerText="weather in "+ name; 
            
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"; 
     
            document.querySelector(".description").innerText= description; 
            document.querySelector(".temp").innerText= temp + "°C" ;
            document.querySelector(".humidity").innerText="Humidity: "+humidity+" %";
            document.querySelector(".wind").innerText= " wind speed: "+ speed + " km/h"; 
            document.querySelector(".country").innerText = "country: " +country;
            document.querySelector(".pressure").innerText = "pressure:"+pressure+" P";
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage =
              "url('https://source.unsplash.com/1600x900/?" + name + "')";
           
        },
        search: function () {
            this.fetchWeather(document.querySelector(".searchbar").value);
          },
        };
        
        document.querySelector(".search button").addEventListener("click", function () {
          weather.search();
        });
        document
        .querySelector(".search-bar")
        .addEventListener("keyup", function (event) {
          if (event.key == "Enter") {
            weather.search();
          }
        });
      
      weather.fetchWeather("surat"); 
       