class Storage {
    static addYorumTosToreage(newYorum) {
        let yorumlar = this.getYorumlarFromsTorage();

        yorumlar.push(newYorum);

        localStorage.setItem("Yorumlar4", JSON.stringify(yorumlar));
    }
    static getYorumlarFromsTorage() {
        let yorumlar;

        if (localStorage.getItem("Yorumlar4") === null) {
            yorumlar = [];
        } else {
            yorumlar = JSON.parse(localStorage.getItem("Yorumlar4"));
        }
        return yorumlar;
    }
    static deleteYorumToStorage(yorumUser) {
        let yorumlar = this.getYorumlarFromsTorage();
        yorumlar.forEach(function(yorum, index) {
            if (yorum.username === yorumUser) {
                yorumlar.splice(index, 1);
            }
        });
        localStorage.setItem("Yorumlar4", JSON.stringify(yorumlar));
    }
}