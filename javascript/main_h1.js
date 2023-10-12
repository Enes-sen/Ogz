const form = document.getElementById("yorum-form");
const usernameElement = document.querySelector("#username");
const yorumElement = document.querySelector("#yorum");
const yorumsilen = document.getElementById("yorumlar_alan");

//eventler aktif
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addyorum);
    document.addEventListener("DOMContentLoaded", function() {
        let yorumlar = Storage.getYorumlarFromsTorage();
        UI.loadAll(yorumlar);
    });
    yorumsilen.addEventListener("click", deleteYorum);
}

function addyorum(e) {
    const username = usernameElement.value;
    const yorum = yorumElement.value;

    if (username === "" || yorum === "") {
        //hata mesajı
        UI.displayMessages("EKLENECEK Yorum TANIMI HATALI !?!", "danger");
    } else {
        const newYorum = new Yorum(username, yorum);
        UI.addYorumToUI(newYorum);
        Storage.addYorumTosToreage(newYorum);
        UI.displayMessages("yorum TANIMLAMA BAŞARILI :)", "success");
    }
    UI.clearInputs(usernameElement, yorumElement);

    e.preventDefault();
}

function deleteYorum(e) {
    if (e.target.id === "delete-yorum") {
        if (confirm("Yorum'u kaldırmak istediğinize Emin misiniz ? ")) {
            UI.deleteyorumToUI(e.target);
            Storage.deleteYorumToStorage(e.target.previousElementSibling.previousElementSibling.textContent);
        }
    }
}