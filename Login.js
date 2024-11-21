function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
     
        localStorage.setItem("currentUser", email);
        alert("Inicio de sesión exitoso");

        window.location.href = "./Layout JJ.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}
