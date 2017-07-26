window.fbAsyncInit = function () {
    FB.init({
        appId: '1693902830919104',
        xfbml: true,
        version: 'v2.10'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log('Concetado');
            getInfo();
            setTimeout(datos, 1500);

        } else if (response.status === 'not_authorized') {
            //inicio();
        } else {
           //inicio();
        }
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function reload() {
    window.location.href = window.location.href
}
function inicio(){
    window.location.href = "http://localhost:1506"
}

function datos() {
    window.location.href = window.location.href + 'assets/views/home.html';
}

// getting basic user info
function getInfo() {
    FB.api('/me', 'GET', {
        fields: 'first_name,last_name,name,id,about,age_range, gender, birthday, location, picture'
    }, function (response) {
        console.log(response);
        localStorage.setItem("foto", response.picture.data.url);
        localStorage.setItem("nombre", response.first_name);
        localStorage.setItem("apellido", response.last_name);
        localStorage.setItem("mail", response.email);
        localStorage.setItem("cumple", response.birthday);
        localStorage.setItem("genero", response.gender);
        localStorage.setItem("residencia", response.location);
        localStorage.setItem("user", response);
        console.log(response.picture);
    });
}
