
let Username = "n"; let Password = "p"; let Server = "s";


function Login1() {

  Username = document.getElementById('usernameinput').value;
  Password = document.getElementById('passwordinput').value;
  Server = document.getElementById('serverinput').value;


  let formData = new FormData();
  formData.append('client_id', 'unity.client');
  formData.append('client_secret', 'secret');
  formData.append('grant_type', 'password');
  formData.append('scope', 'openid nebula offline_access');
  formData.append('username', Server + '|' + Username);
  formData.append('password', Password);
  formData.append('acr_values', 'gameId:j68d');


  let url = "https://eu.mspapis.com/loginidentity/connect/token";

  if(Server === 'us' || Server === 'UnitedStates') {
    url = "https://us.mspapis.com/loginidentity/connect/token";
  }


  fetch(url,
  {
        body: formData,
        method: "post"
  });

}
