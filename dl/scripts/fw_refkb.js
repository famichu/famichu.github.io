const a = document.createElement('a')
a.href = "../files/magrev_switch_refkb_fw_1.01.uf2";
a.download = "magrev_switch_refkb_fw_1.01.uf2";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});