 window.fbAsyncInit = function () {
     FB.init({
         appId: '1693902830919104',
         autoLogAppEvents: true,
         xfbml: true,
         version: 'v2.10'
     });
     FB.AppEvents.logPageView();
 };

 (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.10&appId=1693902830919104";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

 FB.login()
 FB.getAuthResponse()

