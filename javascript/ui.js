class UI {
    static addUrunToUI(newUrun) {
        const UrunList = document.getElementById("urunler");

        UrunList.innerHTML += `
            <tr>
            <td>${newUrun.urunad}</td>
            <td>x ${newUrun.urunadet}</td>
            <td>${newUrun.urunfiyat} TL</td>
            <td><a href="#" id="delete-urun"class="btn btn-danger">Ürün'ü Sil</a></td>
            </tr>
        `;
    }
    static loadAll(sepet) {
        const UrunList = document.getElementById("urunler");
        sepet.forEach(function(urun) {
            UrunList.innerHTML += `
            <tr>
            <td>${urun.urunad}</td>
            <td>x ${urun.urunadet}</td>
            <td>${urun.urunfiyat}TL</td>
            <td><a href="#" id="delete-urun"class="btn btn-danger">Ürün'ü Sil</a></td>
            </tr>
        
        `;
        });
    }
    static ClearAll() {
        const UrunList = document.getElementById("urunler");
        while (UrunList.firstChild != null) {
            UrunList.firstChild.remove();
        }
        uruntop.innerHTML = "";
    }
    static deleteUrunToUI(element) {
        element.parentElement.parentElement.remove();
    }
}