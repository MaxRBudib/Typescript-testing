function checa_nombre(x) {
    x = x.replace(" ", "");
    var longitud = x.length;
    if (longitud >= 2 && longitud <= 15) {
        return true;
    }
    else {
        return false;
    }
}
function checa_tamano(x) {
    if (x >= 1 && x <= 48) {
        return true;
    }
    else {
        return false;
    }
}
function agregar_nueva_bebida(x) {
    var name = x.split(",").map(function (s) { return s.trim(); });
    if (name.length < 2) {
        return ("No se insertó un tamaño");
    }
    else if (name.length > 6) {
        return ("Demasiados tamaños");
    }
    var name_bool = true;
    var num_bool = true;
    var bad_num = 0;
    var nombre = checa_nombre(name[0]);
    if (nombre) {
        name_bool = true;
    }
    else {
        name_bool = false;
    }
    var order = 0;
    for (var i = 1; i < name.length; i++) {
        if (!(parseFloat(name[i]) == parseInt(name[i]))) {
            return ("Tamaño: '" + name[i] + "' no se puede usar");
        }
        if (!(order <= parseInt(name[i]))) {
            return ("Orden de los tamaños es incorrecto");
        }
        order = parseInt(name[i]);
        if (checa_tamano(parseInt(name[i]))) {
            num_bool = true;
        }
        else {
            num_bool = false;
            bad_num = parseInt(name[i]);
        }
    }
    if (!name_bool) {
        return ("Nombre: '" + name[0] + "' no es valido");
    }
    else if (!num_bool) {
        return ("Tamaño: '" + bad_num + "' no es valido");
    }
    else {
        return (x);
    }
}
module.exports = agregar_nueva_bebida;
