class Storage {
    static addYorumTosToreage(newYorum) {
        let yorumlar = this.getYorumlarFromsTorage();

        yorumlar.push(newYorum);

        localStorage.setItem("Yorumlar3", JSON.stringify(yorumlar));
    }
    static getYorumlarFromsTorage() {
        let yorumlar;

        if (localStorage.getItem("Yorumlar3") === null) {
            yorumlar = [];
        } else {
            yorumlar = JSON.parse(localStorage.getItem("Yorumlar3"));
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
        localStorage.setItem("Yorumlar3", JSON.stringify(yorumlar));
    }
}