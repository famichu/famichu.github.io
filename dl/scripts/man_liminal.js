const a = document.createElement('a')
a.href = "../files/liminal_manual_1.01.pdf";
a.download = "liminal_manual_1.01.pdf";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});