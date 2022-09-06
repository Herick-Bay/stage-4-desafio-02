const students = [
  {
    name: "juriscleitom",
    noteOne: 8,
    notetwo: 4,
  },
  {
    name: "Maycow",
    noteOne: 6,
    notetwo: 4,
  },
  {
    name: "Matheus",
    noteOne: 9,
    notetwo: 9,
  },
  {
    name: "cleidineia",
    noteOne: 10,
    notetwo: 10,
  },
]

function calcAvarage(noteOne, notetwo) {
  var calcResult = (noteOne + notetwo) / 2

  return calcResult
}

function result() {
  for (let student of students) {
    let average = calcAvarage(student.noteOne, student.notetwo)
    let menssage = ""
    if (average >= 7) {
      message = `Parabéns, ${student.name} !você foi aprovado(a) no concurso!`
    }
    else {
      message = `Não foi dessa vez, ${student.name} tente novamente!`
    }
    alert(`A media do(a) aluno(a)  ${student.name} é de: ${average} \n ${message}`)
  }
  
}
result()




