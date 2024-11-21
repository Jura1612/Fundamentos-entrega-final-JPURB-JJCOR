function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        let user = {
            name: name,
            email: email,
            password: password,
            info: "",
            favorites: []
        };

       
        localStorage.setItem(email, JSON.stringify(user));
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        
       
        window.location.href = "./Log in.html";
    } else {
        alert("Por favor completa todos los campos.");
    }
}
