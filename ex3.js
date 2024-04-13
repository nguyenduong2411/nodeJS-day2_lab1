function CtoF(C) {
    var ctemp = C;
    var CtoFt = (C * 9 + (32 * 5)) / 5;
    var mes = ctemp + '\xB0F is ' + CtoFt + '\xB0F';
    console.log(mes);
}

function FtoC(F) {
    var ftemp = F;
    var FtoCt = (ftemp - 32) * 5 / 9;
    var mes = ftemp + '\xB0F is ' + FtoCt + '\xB0C.';
    console.log(mes);
}
CtoF(60);
FtoC(45);