document.addEventListener("DOMContentLoaded", function () {
  // Ejecutar la actualización de días y programarla diariamente
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000); // Actualizar cada 24h
 
  const chartFontFamily = '"Tajawal", Arial, sans-serif';
  const sharedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        labels: {
          color: '#374151',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '700'
          },
          padding: 14
        }
      },
      tooltip: {
        titleFont: {
          family: chartFontFamily,
          size: 13,
          weight: '700'
        },
        bodyFont: {
          family: chartFontFamily,
          size: 12
        },
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        cornerRadius: 10,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          },
          maxRotation: 0,
          autoSkip: true
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563',
          font: {
            family: chartFontFamily,
            size: 12,
            weight: '600'
          }
        },
        grid: {
          color: 'rgba(15, 23, 42, 0.08)',
          drawBorder: false
        },
        border: {
          color: 'rgba(15, 23, 42, 0.16)'
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2.5,
        tension: 0.25
      },
      point: {
        radius: 3.5,
        hoverRadius: 5,
        borderWidth: 1,
        backgroundColor: 'rgba(45, 74, 62, 1)',
        borderColor: 'rgba(45, 74, 62, 1)'
      }
    }
  };
  // Datos para el gráfico de líneas (se crean solo si existen los canvas en el HTML)
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3'],
    datasets: [{
      label: 'Km recorridos en Semana 45',
      data: [15, 25, 32],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3'],
    datasets: [{
      label: 'Km recorridos en Semana 46',
      data: [15, 31, 28],
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
  const objetivoDate = new Date('2026-12-05');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}


});
