function myAsyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now());
    }, 10 * 1000);
  });
}

console.log("Empieza mi tarea asincrónica: " + Date.now());
const miPromesa = myAsyncTask();
console.log("Ya largue mi tarea asincrónica... todavía no terminó (1)");
miPromesa.then((valor) => {
  console.log("2 Terminó mi tarea: " + valor);
});
console.log("3 Ya largue mi tarea asincrónica... todavía no terminó (2)");
