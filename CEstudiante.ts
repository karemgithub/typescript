class CEstudiante {
  private nombre: string
  private apellido: string
  private edad: number
  private notas: number[]
  private num_espediente: number
  private asignatura: string[]

  constructor(nombre: string, apellido: string, edad: number,
    notas: number[], numero_espediente: number, asignaturas: string[]) {
    this.nombre = nombre
    this.apellido = apellido
    this.notas = notas
    this.num_espediente = numero_espediente
    this.asignatura = asignaturas

  }

  // Calclo del promedio
  public Promedio() {
    let suma: number = 0.0
    for (let i = 0; i < this.notas.length; i++) {
      suma = suma + this.notas[i]
    }
    return suma / this.notas.length
  }

  public Mayor_Nota() {
    let mayor: number = this.notas[0]
    for (let i = 1; i < this.notas.length; i++)
      if (this.notas[i] > mayor)
        mayor = this.notas[i]
    return mayor
  }


  public Menor_Nota() {
    let menor: number = this.notas[0]
    for (let i = 1; i < this.notas.length; i++)
      if (this.notas[i] < menor)
        menor = this.notas[i]
    return menor
  }

  public ContAsignaturaCinco() {
    let contador = 0
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i] == 5)
        contador++
    }
    return contador
  }

  public AsigMayorNota() {
    let asimnota: string = this.asignatura[0] // inicializando el arreglo en 0
    let mayor: number = this.notas[0]
    for (let i = 0; i < this.notas.length; i++)
      if (this.notas[i] > mayor) {
        mayor = this.notas[i]
        asimnota = this.asignatura[i]
      }
    return asimnota
  }

 


  public getNombre(): string {
    return this.nombre
  }

  public getApetllido(): string {
    return this.apellido
  }

  public getEdad(): number {
    return this.edad
  }

  public getNota(pos: number): number {
    return this.notas[pos]
  }

  public getNum_Expediente(): number {
    return this.num_espediente
  }


  public getAsignatura(pos: number): string {
    return this.asignatura[pos]
  }
  public setAsignatura(a: string, pos: number) {
    this.asignatura[pos] = a
  }
}

let estudiante: CEstudiante = new CEstudiante("karem", "Lorente", 20, [2, 5], 22, ['Matematica', 'Historia'])
console.log(estudiante.Mayor_Nota())
console.log("el promedio es: " + estudiante.Promedio())
console.log(estudiante.ContAsignaturaCinco())
console.log("La asignatura con mayor nota es " + estudiante.AsigMayorNota())


