
const dataInvest = JSON.parse(localStorage.getItem('data'));

const contenedor = document.querySelector('.contenedor');

let CI = parseFloat(dataInvest.initialCapital);
let I = parseFloat(dataInvest.interest);
let RE = parseFloat(dataInvest.reinvestmentRatio);
let L = parseInt(dataInvest.investmentLength);
let T = 'dia';
let CAP = 0;
let TA = L;
let CUPSell = 0;
let MLCSell = 0;

fetch("https://exchange-rate.decubba.com/api/v2/informal/source/usd.json")
.then(response => response.json())
.then(data =>{
  console.log(data)
  CUPSell = parseFloat(data.rates.CUP.sell)
  console.log(CUPSell);
  MLCSell = data.rates.MLC.sell;
  console.log(MLCSell);
  MostrarDatos();
})


const automaticoInteres = (cap) =>{
  let capital =  cap;
  let interes;
  if (capital >= 10 & capital <= 3000)
      interes = 0.06;
  else if (capital > 3000 & capital <= 10000)
      interes = 0.07;
  else if (capital > 10000 & capital <= 20000)
      interes = 0.09;
  else if (capital > 20000 & capital <= 50000)
      interes = 0.12;
  else if (capital > 50000 & capital <= 100000)
      interes = 0.18;
  else if (capital > 100000 & capital <= 150000)
      interes = 0.28;
  else if (capital > 150000 & capital <= 500000)
      interes = 0.38;
  else if (capital > 500000 )
      interes = 0.48;
  
  return interes;
}

window.onload = function() {
  window.scrollTo(0,document.body.scrollHeight);
}


let estaArriba = true;

 function volverAlInicio() {
  if (estaArriba) {
      window.scrollTo(0, document.body.scrollHeight);
      estaArriba = false;
      document.querySelector('.top').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
    </svg>
      `
  } else {
      window.scrollTo(0, 0);
      estaArriba = true;
      document.querySelector('.top').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
    </svg>
      `
  }
}

document.querySelector('.top').onclick = volverAlInicio;



// class Node {
//     constructor(CI, CAP, RE, L, TA) {
//       this.CI = CI;
//       this.CAP = CAP;
//       this.RE = RE;
//       this.L = L;
//       this.TA = TA;
//     }
  
//     get_CI() {
//       return this.CI;
//     }
  
//     get_CAP() {
//       return this.CAP;
//     }
  
//     get_RE() {
//       return this.RE;
//     }
  
//     get_L() {
//       return this.L;
//     }
  
//     get_TA() {
//       return this.TA;
//     }
//   }
  
//   let time_trip = [];
  
//   let limit = parseFloat(prompt("Limite de inversion: "));
//   let CI = parseFloat(prompt("Capital inicial: "));
//   let I = parseFloat(prompt("Interes: "));
//   let RE = parseFloat(prompt("Proporcion a reinvertir: "));
//   let L = parseInt(prompt("Longitud de inversion: "));
//   let T = prompt("Temporalidad [minuto - hora - dia - semana - mes - año]: ");
//   let CAP = 0;
//   let TA = L;
  
//   let E = false;
  
//   let cicle_cont = 1;
//   clear();
//   while (true) {
//     time_trip.push(new Node(CI, CAP, RE, L, TA));
//     console.log(`\n\nCICLO #${cicle_cont}`);
//     console.log(`CANTIDAD INICIAL: ${CI}`);
//     console.log(`INTERES: ${I * 100}%`);
//     console.log(`CAPITAL: ${CAP}`);
//     console.log(`REINVERSION: ${RE * 100}%`);
//     console.log(`LONGITUD: ${L}`);
//     console.log();
  
    // for (let i = 0; i < L; i++) {
    //   let ingresos = CI * I; // ingresos
    //   let reinversion = ingresos * RE; // cant reinvertir
    //   let ingresos_netos = ingresos - reinversion; // cant ahorrar
    //   // actualizando
    //   CAP += ingresos_netos;
  
    //   console.log(`\x1b[93m${T.toUpperCase()} ${i + 1}`);
    //   console.log(`\x1b[92mCap inverido:\x1b[0m ${CI}`);
    //   console.log(`\x1b[92mIngresos: \x1b[0m$${ingresos}`);
    //   console.log(`\x1b[92mCantidad a reinvertir(\x1b[0m${RE * 100}%\x1b[92m): \x1b[0m$${reinversion}`);
    //   console.log(`\x1b[92mIngresos netos(\x1b[0m${100 - RE * 100}%\x1b[92m): \x1b[0m$${ingresos_netos}`);
    //   console.log(`\x1b[92mCapital acumulado: $\x1b[0m${CAP}`);
    //   console.log("_____________________________________________________________________________________");
    //   CI += reinversion;
  
    // //   if (CI >= limit) {
    // //     console.log("<<<<<EXCESO DE INVERSION>>>>>");
    // //     E = true;
    // //     break;
    // //   }
    // }
  
//     if (E) {
//       break;
//     }
//     let op = parseInt(prompt("\n(1) Continuar\n(2) Atras\n(3)Parar\nopcion: "));
//     cicle_cont += 1;
//     clear();
//     if (op === 1 || op === 2) {
//       console.log();
//       console.log();
//       if (op === 2) {
//         cicle_cont -= 1;
//         let last = time_trip.pop();
//         CI = last.get_CI();
//         CAP = last.get_CAP();
//         let L_ant = last.get_L();
//         TA = last.get_TA();
//       }
  
//       console.log("______________SET UP_________________");
//       console.log(`CICLO #${cicle_cont}`);
//       console.log(`CANTIDAD INICIAL: ${CI}`);
//       console.log(`INGRESOS INICIALES[${I * 100}%]: ${CI * I}`);
//       console.log(`CAPITAL: ${CAP}`);
//       console.log(`TIEMPO ACUMULADO[${T.toUpperCase()}]: ${TA}`);
//       if (op === 2) {
//         console.log(`LONGITUD: ${L_ant}`);
//       }
//       console.log("_____________________________________");
  
//       console.log();
//       RE = parseFloat(prompt("Proporcion a reinvertir: "));
//       L = parseInt(prompt("Longitud de inversion: "));
//       if (op === 1) {
//         TA += L;
//       } else {
//         TA = TA + (L - L_ant);
//       }
  
//     //   clear();
//     } else if (op === 3) {
//       break;
//     }
//   }
  
//   function clear() {
//     // console.clear();
//   }
  
  
function crearElemento(elemento, clase) {
  var nuevoElemento = document.createElement(elemento);
  nuevoElemento.className = clase;
  return nuevoElemento;
}

const MostrarDatos = () =>{
  for(let i = 1; i <= L; i++){
    I = automaticoInteres(CI);
    // console.log(I);
    let ingresos = CI * I; // ingresos
    let reinversion = ingresos * RE; // cant reinvertir
    let ingresos_netos = ingresos - reinversion; // cant ahorrar
    // actualizando
    CAP += ingresos_netos;
  
    const elemento = crearElemento('div', 'elemento-hijo');
    const elementoIngresos = crearElemento('span', 'datas');
    const elementoReinversion = crearElemento('span', 'datas');
    const elementoNetos = crearElemento('span', 'datas');
    const elementoDias = crearElemento('span', 'dias');
    const elementoBarra = crearElemento('div', 'container-dias')
    const elementoInicial = crearElemento('span', 'datas');
    const elementoAcumulado = crearElemento('span', 'datas')
    const elementoInteres = crearElemento('span', 'interes');
    const elementoFecha = crearElemento('span', 'fecha');
    const elementoContainer = crearElemento('span', 'container-fecha');
    const elementoDivisor = crearElemento('div', 'divisor');

    contenedor.appendChild(elemento)
  
    elementoBarra.appendChild(elementoContainer);
    elementoContainer.appendChild(elementoDias);
    elementoContainer.appendChild(elementoFecha);
    elementoBarra.appendChild(elementoInteres)

    elemento.appendChild(elementoBarra);
    elemento.appendChild(elementoDivisor)
    elemento.appendChild(elementoInicial);
    elemento.appendChild(elementoIngresos);
    elemento.appendChild(elementoReinversion);
    elemento.appendChild(elementoNetos);
    elemento.appendChild(elementoAcumulado); 
  
    elementoFecha.innerHTML = `(${agregarDias(i-1)})`;
    elementoDias.innerHTML = `DIA ${i}`;
    elementoInteres.innerHTML = `${(I*100).toFixed(0)}%`;
    elementoInicial.innerHTML = `Cap. Invertido: ${CI.toFixed(2)}`
    elementoIngresos.innerHTML = `Ingresos: ${ingresos.toFixed(2)} (CUP: ${(CUPSell*ingresos).toFixed(1)})`;
    elementoReinversion.innerHTML =`Cant. a reinvertir(${RE * 100}%): ${reinversion.toFixed(2)}`;
    elementoNetos.innerHTML = `Ingresos Netos(${100-RE*100}%): ${ingresos_netos.toFixed(2)}`;
    elementoAcumulado.innerHTML = `Cap. acumulado: ${CAP.toFixed(2)} (CUP: ${(CUPSell*CAP).toFixed(1)})`;
  
    CI += reinversion;
  }
}

function agregarDias(dias) {
  let fecha = new Date();
  fecha.setDate(fecha.getDate() + dias);

  let anio = fecha.getFullYear();
  let mes = fecha.getMonth() + 1; // getMonth() devuelve un índice basado en cero, por lo que se suma 1
  let dia = fecha.getDate();

  // Asegurarse de que el mes y el día sean de dos dígitos
  mes = mes < 10 ? '0' + mes : mes;
  dia = dia < 10 ? '0' + dia : dia;


  return `${anio}-${mes}-${dia}`;
}

// Uso de la función
let numeroDeDias = 10; // Número de días que quieres agregar
let nuevaFecha = agregarDias(numeroDeDias);
console.log(nuevaFecha); // Devolverá la fecha en formato YYYY-MM-DD
