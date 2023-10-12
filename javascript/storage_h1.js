class Storage {
    static addYorumTosToreage(newYorum) {
        let yorumlar = this.getYorumlarFromsTorage();

        yorumlar.push(newYorum);

        localStorage.setItem("Yorumlar1", JSON.stringify(yorumlar));
    }
    static getYorumlarFromsTorage() {
        let yorumlar;

        if (localStorage.getItem("Yorumlar1") === null) {
            yorumlar = [];
        } else {
            yorumlar = JSON.parse(localStorage.getItem("Yorumlar1"));
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
        localStorage.setItem("Yorumlar1", JSON.stringify(yorumlar));
    }
}