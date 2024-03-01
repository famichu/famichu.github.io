const a = document.createElement('a')
a.href = "../files/KiCAD_Libs_MagLevSwitchMX_V1.00.zip";
a.download = "KiCAD_Libs_MagLevSwitchMX_V1.00.zip";
a.style.display = 'none'
a.click();

a.addEventListener('click', function () {
    window.close();
});