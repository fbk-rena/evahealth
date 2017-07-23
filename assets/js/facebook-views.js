window.fbAsyncInit = function () {
    FB.init({
        appId: '1693902830919104',
        xfbml: true,
        version: 'v2.10'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log('Concetado');
        } else if (response.status === 'not_authorized') {
            inicio();
        } else {
           inicio();
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

function inicio(){
    window.location.href = "http://localhost:1506"
}

