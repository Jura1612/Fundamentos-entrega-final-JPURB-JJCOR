document.addEventListener("DOMContentLoaded", () => {
    const currentUserEmail = localStorage.getItem("currentUser");
    if (currentUserEmail) {
        const user = JSON.parse(localStorage.getItem(currentUserEmail));
        
        document.getElementById("name").value = user.name || "";
        document.getElementById("email").value = user.email || "";
    }
});

function saveProfile() {
    const currentUserEmail = localStorage.getItem("currentUser");
    if (currentUserEmail) {
        const user = JSON.parse(localStorage.getItem(currentUserEmail));
        
        const newName = document.getElementById("name").value;
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;

        if (user.password !== currentPassword) {
            alert("La contraseña actual es incorrecta.");
            return;
        }

        user.name = newName;

        if (newPassword) {
            user.password = newPassword;
        }

        localStorage.setItem(currentUserEmail, JSON.stringify(user));
        alert("Perfil actualizado exitosamente");
    }
}

function resetProfile() {
    const currentUserEmail = localStorage.getItem("currentUser");
    if (currentUserEmail) {
        const user = JSON.parse(localStorage.getItem(currentUserEmail));
        
        document.getElementById("name").value = user.name || "";
        document.getElementById("current-password").value = "";
        document.getElementById("new-password").value = "";
    }
}
