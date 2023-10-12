$("#kapat").click(function() {
    $("#r1").hide(1000);
    $("#kapat").hide(1000);
    $("#reka1").append("<p id='edison'>Reklam <a href ='https://ads.google.com/intl/tr_tr/getstarted/?subid=tr-tr-ha-aw-sk-c-bau!o3~Cj0KCQjwmouZBhDSARIsALYcouor1OASR3Z-9b-EH_hnR-g6xnGZlp1CYmgqYnc2KYeSND77dsYqrcoaAmD2EALw_wcB~121284247629~kwd-295989161022~12973051375~519253413757&utm_source=aw&utm_medium=ha&utm_campaign=tr-tr-ha-aw-sk-c-bau!o3~Cj0KCQjwmouZBhDSARIsALYcouor1OASR3Z-9b-EH_hnR-g6xnGZlp1CYmgqYnc2KYeSND77dsYqrcoaAmD2EALw_wcB~121284247629~kwd-295989161022~12973051375~519253413757&gclid=Cj0KCQjwmouZBhDSARIsALYcouor1OASR3Z-9b-EH_hnR-g6xnGZlp1CYmgqYnc2KYeSND77dsYqrcoaAmD2EALw_wcB&gclsrc=aw.ds' target='_blank'/><b><span id='L1'>G</span><span id='L2'>O</span><span id='L3'>O</span><span id='L4'>G</span><span id='L5'>L</span><span id='L6'>E</span></b></a> tarafından kapatıldı</p>");
})
$("#sek1").click(function() {
    $("#sek1").css({ 'color': 'white' });
    $("#sek2").css({ 'color': 'rgb(147, 224, 254)' });
})
$('#sek2').click(function() {
    $('#sek2').css({ 'color': 'white' });
    $('#sek1').css({ 'color': 'rgb(147, 224, 254)' });
})
$("#main").hide();
$("#red").click(function() {
    $("#main").toggle();
})
let dugme = document.getElementsByTagName("button");
let ekran = document.getElementsByClassName("result")[0];
let hesapla = document.getElementById("calculate");
let clear = document.getElementById("clean");
let adding = document.getElementById("re");

for (var i = 0; i < 18; i++) {
    if (i != 0 && i != 1 && i != 2 && i != 18) {
        dugme[i].addEventListener('click', yazdir);
    }
}

function yazdir() {
    ekran.value += this.value;
}
hesapla.addEventListener('click', calc);

function calc() {
    ekran.value = eval(ekran.value);
}
clear.addEventListener('click', cleaner);

function cleaner() {
    ekran.value = "";
}
adding.addEventListener('click', ad);

function ad() {
    ekran.value = eval(ekran.value * -1);
}

function zx() {
    alert(x.value + ".Adet Ürün Eklendi !");
}
document.querySelectorAll('#resim').forEach(elem => {

    let x, y, width, height;

    elem.onmouseenter = () => {

        const size = elem.getBoundingClientRect();

        x = size.x;
        y = size.y;
        width = size.width;
        height = size.height;

    };

    elem.onmousemove = e => {

        const horizontal = (e.clientX - x) / width * 100;
        const vertical = (e.clientY - y) / height * 100;

        elem.style.setProperty('--x', horizontal + '%');
        elem.style.setProperty('--y', vertical + '%');

    };

});