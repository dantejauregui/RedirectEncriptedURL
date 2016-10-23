function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var newURL = getParameterByName('url');

    if (newURL) {
    	newURL = atob(newURL);
    }
    else{
        newURL = "#"
    }

    var finalButton =  document.getElementById("finalButton");

    finalButton.href = newURL;

