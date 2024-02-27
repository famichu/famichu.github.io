const a = document.createElement('a')
a.href = "../files/optionalparts_manual.pdf";
a.download = "maglev_switch_mx_manual_1.00.pdf";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});