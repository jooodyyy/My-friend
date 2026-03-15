function checkCode() {
    let code = document.getElementById("passInput").value;
    
    if (code === "9876") {
        document.getElementById("passcodeSection").classList.add("hidden");
        document.getElementById("messageBox").classList.remove("hidden");
    } else {
        alert("Wrong code!");
    }
}
