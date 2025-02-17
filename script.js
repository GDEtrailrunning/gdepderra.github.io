 document.addEventListener("DOMContentLoaded", function () {
  //actualizarDiasRestantes();
  //setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
   // Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 15',
    data: [13, 17], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 16',
    data: [13, 24], // Datos de los km recorridos en cada día
    borderColor: 'rgba(153, 102, 255, 1)',
    fill: true,
    tension: 0.1
  }]
};

// Configuración del gráfico de líneas
const configLine = {
  type: 'line',
  data: dataLine1, // Puede cambiar esto a dataLine2 para mostrar el gráfico de la segunda sección
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Seleccione los contextos de los <canvas> y cree los gráficos
const myChartLine1 = new Chart(document.getElementById('myChart-line-1'), {
  type: 'line',
  data: dataLine1,
  options: {
    responsive: true, // Esto asegura que el gráfico se ajuste a diferentes tamaños de pantalla
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const myChartLine2 = new Chart(document.getElementById('myChart-line-2'), {
  type: 'line',
  data: dataLine2,
  options: {
    responsive: true, // Esto asegura que el gráfico se ajuste a diferentes tamaños de pantalla
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function actualizarDiasRestantes() {
  // Obtener el título que contiene la fecha objetivo
  const pageTitle =  document.getElementById('pageTitle').innerText;
    
  // Extraer la fecha de la cadena del título
  const objetivoDate = new Date(pageTitle.split(": ")[1]);

  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la diferencia en milisegundos entre las dos fechas
  const timeDiff = objetivoDate - currentDate;

  // Calcular la cantidad de días
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Mostrar el resultado
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Faltan ${daysDiff} días para llegar a la carrera.`;
  console.log("actualizarDiasRestantes function called");
  }

  // Crear dos nuevas instancias de HTMLVideoElement para cada sección
  let Semana_1_video_1 = document.createElement("video");
  let Semana_1_video_2 = document.createElement("video");
  let Semana_2_video_3 = document.createElement("video");
  let Semana_2_video_4 = document.createElement("video");

  // Establecer las fuentes de video
  Semana_1_video_1.src = "video 1.mp4"; // ruta de su primer video
  Semana_1_video_2.src = "video 2.mp4"; // ruta de su segundo video
  Semana_2_video_3.src = "video 3.mp4"; // ruta de su tercer video
  Semana_2_video_4.src = "video 4.mp4"; // ruta de su cuarto video

  // Establecer atributos de video
  Semana_1_video_1.controls = true;
  Semana_1_video_1.autoplay = false;
  Semana_1_video_1.loop = false;

  Semana_1_video_2.controls = true;
  Semana_1_video_2.autoplay = false;
  Semana_1_video_2.loop = false;

  Semana_2_video_3.controls = true;
  Semana_2_video_3.autoplay = false;
  Semana_2_video_3.loop = false;

  Semana_2_video_4.controls = true;
  Semana_2_video_4.autoplay = false;
  Semana_2_video_4.loop = false;

  // Agregar los dos videos a cada sección
  document.getElementById("Semana 1").appendChild(video1);
  document.getElementById("Semana 1").appendChild(video2);
  document.getElementById("Semana 2").appendChild(video3);
  document.getElementById("Semana 2").appendChild(video4);

});

