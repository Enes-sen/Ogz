class UI {
    static addYorumToUI(newYorum) {
        const Yorumlist = document.getElementById("yorumlar_alan");

        Yorumlist.innerHTML += `
            <div>
            <div class="row text-wrap" style="color:rgb(30,30,30);"><p>${newYorum.username}<p></div>
            <div class="row text-wrap"style="color:rgb(10,10,10); border:2px solid rgb(10, 10, 10); border-radius:5px; background-color:rgb(147,224,254);"><p>${newYorum.yorum}<p></div>
            <a id="delete-yorum"class="btn btn-danger">Yorum'u sil</a>
            </div>
        `;
    }
    static clearInputs(element1, element2) {
        element1.value = "";
        element2.value = "";
    }
    static displayMessages(message, type) {
        const alertvave = document.getElementById("alert_area")
        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type} w-50 ext-center`;
        alertDiv.style = "margin-left:25%; margin-right:25%;"
        alertDiv.textContent = message;

        alertvave.appendChild(alertDiv);

        setTimeout(function() {
            alertDiv.remove();
        }, 2000);
    }
    static loadAll(yorumlar) {
        const Yorumlist = document.getElementById("yorumlar_alan");

        yorumlar.forEach(function(yorum) {
            Yorumlist.innerHTML += `
            <div>
            <div class="row text-wrap" style="color:rgb(30,30,30);"><p>${yorum.username}<p></div>
            <div class="row text-wrap"style="color:rgb(10,10,10); border:2px solid rgb(10, 10, 10); border-radius:5px; background-color:rgb(147,224,254);"><p>${yorum.yorum}<p></div>
            <a id="delete-yorum"class="btn btn-danger">Yorum'u sil</a>
            </div>
            `;
        });
    }
    static deleteyorumToUI(element) {
        element.parentElement.remove();
    }

}