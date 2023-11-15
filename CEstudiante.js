var CEstudiante = /** @class */ (function () {
    function CEstudiante(nombre, apellido, edad, notas, numero_espediente, asignaturas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = notas;
        this.num_espediente = numero_espediente;
        this.asignatura = asignaturas;
    }
    // Calclo del promedio
    CEstudiante.prototype.Promedio = function () {
        var suma = 0.0;
        for (var i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        return suma / this.notas.length;
    };
    CEstudiante.prototype.Mayor_Nota = function () {
        var mayor = this.notas[0];
        for (var i = 1; i < this.notas.length; i++)
            if (this.notas[i] > mayor)
                mayor = this.notas[i];
        return mayor;
    };
    CEstudiante.prototype.Menor_Nota = function () {
        var menor = this.notas[0];
        for (var i = 1; i < this.notas.length; i++)
            if (this.notas[i] < menor)
                menor = this.notas[i];
        return menor;
    };
    CEstudiante.prototype.ContAsignaturaCinco = function () {
        var contador = 0;
        for (var i = 0; i < this.notas.length; i++) {
            if (this.notas[i] == 5)
                contador++;
        }
        return contador;
    };
    CEstudiante.prototype.AsigMayorNota = function () {
        var asimnota = this.asignatura[0]; // inicializando el arreglo en 0
        var mayor = this.notas[0];
        for (var i = 0; i < this.notas.length; i++)
            if (this.notas[i] > mayor) {
                mayor = this.notas[i];
                asimnota = this.asignatura[i];
            }
        return asimnota;
    };
    CEstudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    CEstudiante.prototype.getApetllido = function () {
        return this.apellido;
    };
    CEstudiante.prototype.getEdad = function () {
        return this.edad;
    };
    CEstudiante.prototype.getNota = function (pos) {
        return this.notas[pos];
    };
    CEstudiante.prototype.getNum_Expediente = function () {
        return this.num_espediente;
    };
    CEstudiante.prototype.getAsignatura = function (pos) {
        return this.asignatura[pos];
    };
    CEstudiante.prototype.setAsignatura = function (a, pos) {
        this.asignatura[pos] = a;
    };
    return CEstudiante;
}());
var estudiante = new CEstudiante("karem", "Lorente", 20, [2, 5], 22, ['Matematica', 'Historia']);
console.log(estudiante.Mayor_Nota());
console.log("el promedio es: " + estudiante.Promedio());
console.log(estudiante.ContAsignaturaCinco());
console.log("La asignatura con mayor nota es " + estudiante.AsigMayorNota());
