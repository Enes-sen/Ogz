class Storage {
    static addUrunTosToreage(newUrun) {
        let sepet = this.getUrunlerFromsTorage();
        sepet.push(newUrun);

        localStorage.setItem("Sepet", JSON.stringify(sepet));
    }
    static getUrunlerFromsTorage() {
        let sepet;

        if (localStorage.getItem("Sepet") === null) {
            sepet = [];
        } else {
            sepet = JSON.parse(localStorage.getItem("Sepet"));
        }
        return sepet;
        /**/
    }
    static deletedToStorage(Urunad) {
        let sepet = this.getUrunlerFromsTorage();
        sepet.forEach(function(urun, index) {
            if (urun.urunad === Urunad) {
                sepet.splice(index, 1);
            }

        });
        localStorage.setItem("Sepet", JSON.stringify(sepet));
    }
    static ClearAllToStorage() {
        localStorage.removeItem("Sepet");
    }
}