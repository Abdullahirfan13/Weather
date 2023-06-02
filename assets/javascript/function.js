function viewweather() {
    let city = document.getElementById("inptval");
    if (city.value == "") {
        city.classList.add("validation")
        document.getElementById("msg").innerHTML = "First fill the input field*";
        let printcity = document.getElementById("citydiv").innerHTML = "City";
        let time = document.getElementById("mytime").innerHTML = "00:00:00 AM";
        let mydate = document.getElementById("mydate").innerHTML = "00/00/00";
        let myday = document.getElementById("myday").innerHTML = "Funday";
    } else {
        city.classList.remove("validation")
        document.getElementById("msg").innerHTML = "";
        var currentDate = new Date();
        var date = currentDate.toLocaleDateString();
        var times = currentDate.toLocaleTimeString();
        let day = currentDate.getDay();
        let time = document.getElementById("mytime").innerHTML = times;
        let mydate = document.getElementById("mydate").innerHTML = date;
        let rray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for (let i = 0; i <= rray.length; i++) {
            if (day == i + 1) {
                let myday = document.getElementById("myday").innerHTML = rray[i];
            }
        }


        let printcity = document.getElementById("citydiv").innerHTML = city.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=218cd0406345951a60cb07e3c04f5d11`

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);

        });

    }
}
