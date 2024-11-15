const a = document.createElement('a')
a.href = "../files/maglev_switch_breakout2_manual_1.01.pdf";
a.download = "maglev_switch_breakout2_manual_1.01.pdf";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});