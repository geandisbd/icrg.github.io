const investmentLimit = document.getElementById('investment-limit');
const investmentLength = document.getElementById('investment-length');
const initialCapital = document.getElementById('initial-capital');
const interest = document.getElementById('interest');
const reinvestmentRatio = document.getElementById('reinvestment-ratio');

const button = document.getElementById('button');

function validateInputs() {
    const investmentLength = document.getElementById('investment-length');
    const initialCapital = document.getElementById('initial-capital');
    const interest = document.getElementById('interest');
    const reinvestmentRatio = document.getElementById('reinvestment-ratio');

    // Lista de todos los campos de entrada
    const inputs = [investmentLength, initialCapital, interest, reinvestmentRatio];

    // Inicialmente asumimos que todos los campos están llenos
    let allFieldsFilled = true;

    // Recorremos cada campo de entrada
    inputs.forEach(input => {
        if (!input.value) {
            // Si el campo está vacío, cambiamos el color del borde a rojo
            input.style.borderColor = 'red';
            allFieldsFilled = false;
        } else {
            // Si el campo no está vacío, cambiamos el color del borde a su valor predeterminado
            input.style.borderColor = '';
        }
    });

    if (!allFieldsFilled) {
        alert('Por favor, asegúrate de que todos los campos estén llenos.');
        return false;
    }
    return true;
}

window.addEventListener("keydown", e => {
    if (e.key === 'Enter') {
        if(validateInputs()){
            dataInvest= {
                initialCapital : initialCapital.value,
                interest : interest.value,
                reinvestmentRatio : reinvestmentRatio.value,
                investmentLength : investmentLength.value,
            }
    
            localStorage.setItem( 'data', JSON.stringify(dataInvest));
            window.location.href = 'assets/tiempo.html';
        }
    }
  });

button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(validateInputs()){
        dataInvest= {
            initialCapital : initialCapital.value,
            interest : interest.value,
            reinvestmentRatio : reinvestmentRatio.value,
            investmentLength : investmentLength.value,
        }

        localStorage.setItem( 'data', JSON.stringify(dataInvest));
        window.location.href = 'assets/tiempo.html';
    }

})

const automaticoInteres = () =>{
    let capital =  parseInt(initialCapital.value);
    let interes = 0;
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
    else if (capital > 500000 & capital <= 2000000)
        interes = 0.48;
    
    return interes;
}

initialCapital.addEventListener('input', ()=>{
    interest.value = automaticoInteres();
})

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
  
//     for (let i = 0; i < L; i++) {
//       let ingresos = CI * I; // ingresos
//       let reinversion = ingresos * RE; // cant reinvertir
//       let ingresos_netos = ingresos - reinversion; // cant ahorrar
//       // actualizando
//       CAP += ingresos_netos;
  
//       console.log(`\x1b[93m${T.toUpperCase()} ${i + 1}`);
//       console.log(`\x1b[92mCap inverido:\x1b[0m ${CI}`);
//       console.log(`\x1b[92mIngresos: \x1b[0m$${ingresos}`);
//       console.log(`\x1b[92mCantidad a reinvertir(\x1b[0m${RE * 100}%\x1b[92m): \x1b[0m$${reinversion}`);
//       console.log(`\x1b[92mIngresos netos(\x1b[0m${100 - RE * 100}%\x1b[92m): \x1b[0m$${ingresos_netos}`);
//       console.log(`\x1b[92mCapital acumulado: $\x1b[0m${CAP}`);
//       console.log("_____________________________________________________________________________________");
//       CI += reinversion;
  
//       if (CI >= limit) {
//         console.log("<<<<<EXCESO DE INVERSION>>>>>");
//         E = true;
//         break;
//       }
//     }
  
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
  
//       clear();
//     } else if (op === 3) {
//       break;
//     }
//   }
  
//   function clear() {
//     console.clear();
//   }
  
  