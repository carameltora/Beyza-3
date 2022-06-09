
let Username = "n"; let Password = "p"; let Server = "s";
<!--initialize the params-->

function Login1() {
  fetch("https://youtube.com", {
      body: "email=test@example.com&password=pw",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "post",
}
}
