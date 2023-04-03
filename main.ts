/**
 * Archivo main.ts encargado de recibir e incorporar los elementos
 * HTML con el resto de los elementos .ts del programa
 * @author: Miguel Arturo Reina - 202014739
 */

import { dataSeries } from './data.js';
import { Serie } from './serie.js';

/* Para el listado de series */
let seriesTbody: HTMLElement = document.getElementById("series")!; 
renderCoursesInTable(dataSeries);

/* Para el promedio de las temporadas */
const promedioSeries: HTMLElement = document.getElementById("promedio-temporadas")!;
promedioSeries.innerHTML = ` ${getAverageSeassons(dataSeries)}`

/* Para renderizar la carta con el detalle de la serie */
let cardElement: HTMLElement = document.getElementById("carta-series")!;
renderCardSeries();





/**
 * Este procedure se encarga de renderizar la carta con
 * el detalle de la serie seleccionada.
 * 
 */
function renderCardSeries(): void 
{
  seriesTbody.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'TD') {
      const row = target.parentElement as HTMLTableRowElement;
      const rowData = dataSeries.find((data) => data.id == Number(row.id));
      
      const cardContent = 
      `
        <div class="card-body">
          <img src="${rowData?.image}" class="img-fluid" alt="Responsive image">
          <h5 class="card-title">${rowData?.name}</h5>
          <p class="card-text">Age: ${rowData?.description}</p>
          <a href="${rowData?.link}" target="_blank"
          rel="noopener noreferrer"> ${rowData?.link} </a>
        </div>
      `;
  
      cardElement.innerHTML = cardContent;
  
    }
    
    });
}

/**
 * Se encarga de renderizar las filas de la tabla de series
 * @param series: la lista de series input
 */
function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando las series');
  series.forEach((s) => {
    let trElement = document.createElement("tr");
    trElement.id = ""+s.id;
    trElement.innerHTML = `<td>${s.id}</td>
                           <td><a href=#>${s.name}</a></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    });
}


/**
 * Se encarga de calcular y retornar en formato String con 
 * dos decimales de precisión el promedio de temporadas de 
 * las series
 * 
 * @param courses la lista de series input
 * @returns String promedio
 */
function getAverageSeassons(series: Serie[]): String {
  let totalSeassons: number = 0;
  let numSeries: number = 0;
  series.forEach((serie) => 
  {
    totalSeassons = totalSeassons + serie.seasons;
    numSeries++;
  });
  const promedio:number = totalSeassons/numSeries;

  return promedio.toFixed(2);
}

