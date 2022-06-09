
let Username = "n"; let Password = "p"; let Server = "s";
<!--initialize the params-->

function Login1() {
  // Build formData object.
let formData = new FormData();
formData.append('name', 'John');
formData.append('password', 'John123');

fetch("https://youtube.com",
    {
        body: formData,
        method: "post"
    });
}
