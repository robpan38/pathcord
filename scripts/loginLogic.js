const loginInput = document.querySelector(".login-input-field");
const loginBtn = document.querySelector(".login-btn");

loginInput.addEventListener("input", () => {
    if (loginInput.value === "" && loginBtn.classList.contains("active-login-btn")) {
        loginBtn.classList.remove("active-login-btn");
    } else if (loginInput.value !== "" && !loginBtn.classList.contains("active-login-btn")) {
        loginBtn.classList.add("active-login-btn");
    }
});

loginBtn.addEventListener("click", () => {
    if (loginBtn.classList.contains("active-login-btn")) {
        loginBtn.classList.remove("active-login-btn");
        loginInput.value = "";
        location.href = "./chat.html";
    }
})
