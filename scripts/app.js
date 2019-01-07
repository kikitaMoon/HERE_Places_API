var url = "https://places.cit.api.here.com/places/v1/discover/search?q=cafe&in=52.530974%2C13.384944%3Br%3D120&app_id=oyNWTbKIov6XPMlrXxCH&app_code=_W_7qfgpOxthQ4tQQKkbLA"

function postAction(li) {
    var actionURL = "https://places.cit.api.here.com/places/v1/actions?app_id=oyNWTbKIov6XPMlrXxCH&app_code=_W_7qfgpOxthQ4tQQKkbLA&pretty"
    //alert(JSON.parse(li.innerHTML).href)
    $.ajax({
        type: "POST",
        url: actionURL,
        contentType: "application/json",
        data: JSON.stringify({
            "actions": [{
                "resource": JSON.parse(li.innerHTML).href,
                "types": ["urn:nlp-actions:placeselected"],
                "timestamp": "2019-01-12T14:34:10.763+0100"
            }]
        }),
        success: function (data, status) {
            alert(  "status: " + status + "\n" + actionURL );
        }
    });
}


function requestSearchAPI() {
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
            var POIs = jsonObj.results.items
            // document.getElementById("result3").innerHTML = JSON.stringify(jsonObj.results.items[0].id) ;     
            for (x in POIs) {
                // document.getElementById("result3").innerHTML += 
                // "Places ID : " + JSON.stringify(jsonObj.results.items[x].id) + "<br>";
                document.getElementById("list").innerHTML +=
                    '<li onclick="postAction(this)" style="cursor:pointer">{"title": ' +
                    JSON.stringify(POIs[x].title) +
                    ',"id":' + JSON.stringify(POIs[x].id) +
                    ',"href":' + JSON.stringify(POIs[x].href) +
                    '}</li><br>';
            }

        }
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}





//