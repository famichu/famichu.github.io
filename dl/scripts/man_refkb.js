const a = document.createElement('a')
a.href = "../files/maglev_switch_refkb_manual_1.00.pdf";
a.download = "maglev_switch_refkb_manual_1.00.pdf";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});