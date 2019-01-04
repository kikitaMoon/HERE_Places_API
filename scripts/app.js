function requestSearchAPI() {
    var url = "https://places.cit.api.here.com/places/v1/discover/search?q=cafe&in=52.530974%2C13.384944%3Br%3D120&app_id=oyNWTbKIov6XPMlrXxCH&app_code=_W_7qfgpOxthQ4tQQKkbLA"

    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("result1").innerHTML = "OK";
            var jsonObj = JSON.parse(xmlhttp.responseText);  
            // document.getElementById("result3").innerHTML = JSON.stringify(jsonObj.results.items[0].id) ;     
            for (x in jsonObj.results.items) {
                document.getElementById("result3").innerHTML += "Places ID : " + JSON.stringify(jsonObj.results.items[x].id) + "<br>";
            }

        }
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}





//