document.addEventListener("DOMContentLoaded", function () {
  // Ejecutar la actualización de días y programarla diariamente
  //actualizarDiasRestantes();
  //setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000); // Actualizar cada 24h

  // Datos para el gráfico de líneas (se crean solo si existen los canvas en el HTML)
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3'],
    datasets: [{
      label: 'Km recorridos en Semana 1',
      data: [11, 13, 16],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3'],
    datasets: [{
      label: 'Km recorridos en Semana 2',
      data: [9, 11, 12],
      borderColor: 'rgba(153, 102, 255, 1)',
      fill: true,
      tension: 0.1
    }]
  };

// Configuración del gráfico de líneas


// Seleccione los contextos de los <canvas> y cree los gráficos
const myChartLine1 = new Chart(document.getElementById('myChart-line-1'), {
  type: 'line',
  data: dataLine1, // Puede cambiar esto a dataLine2 para mostrar el gráfico de la segunda sección
  options: {
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
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2025-11-21');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
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
