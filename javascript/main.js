const form = document.getElementById("urun");
const urunadElement = document.querySelector("#Urunad");
const urunpriceElement = document.querySelector("#price");
const urunadetElement = document.querySelector("#adet");
const clearButton = document.getElementById("delet-all");
const urunclean = document.getElementById("urunler");


//eventler aktif
eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", function() {
        let sepet = Storage.getUrunlerFromsTorage();
        UI.loadAll(sepet);
    });
    urunclean.addEventListener("click", deleteurun)
    clearButton.addEventListener("click", ClearAll);
    form.addEventListener("submit", addUrun);
}

function addUrun(e) {
    const urunad = urunadElement.value;
    const urunprice = urunpriceElement.value;
    const urunadet = urunadetElement.value;

    if (urunadet === "") {
        //hata mesajı
        UI.displayMessages("EKLENECEK FİLM TANIMI HATALI !?!", "danger");
    } else {
        const newUrun = new Urun(urunad, urunadet, urunprice);
        UI.addUrunToUI(newUrun);
        Storage.addUrunTosToreage(newUrun);
    }

    e.preventDefault();
}

function ClearAll() {
    if (confirm("Sepet'i Boşaltmak İstediğinize Emin Misiniz ? ")) {
        UI.ClearAll();
        Storage.ClearAllToStorage();
    }

}

function deleteurun(e) {
    if (e.target.id === "delete-urun") {
        UI.deleteUrunToUI(e.target);
        Storage.deletedToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

    }
}