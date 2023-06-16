// Crear los arrays de estudiantes
let estudiantes = [
    { nombre: "Jordy", apellido: "cortez", carrera: "Ingeniería de softawre", edad: 20, genero: "Masculino" },
    { nombre: "Monica", apellido: "galindo", carrera: "Ingeniería civil",edad: 21, genero: "Femenino" },
    { nombre: "Esperanza", apellido: "gomez", carrera: "Ingeniería industrial",edad: 19, genero: "Masculino" },
    { nombre: "Analisa", apellido: "melculo", carrera: "Ingeniería mecatronica",edad: 22, genero: "Femenino" }
  ];
  estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, apellido:${estudiante.apellido} ,Edad: ${estudiante.edad}, Carrera:${estudiante.carrera},  Género:${estudiante.genero}`);
  });
 
  