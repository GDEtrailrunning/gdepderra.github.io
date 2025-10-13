document.addEventListener("DOMContentLoaded", function () {
  // Ejecutar la actualización de días y programarla diariamente
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000); // Actualizar cada 24h

  // Datos para el gráfico de líneas (se crean solo si existen los canvas en el HTML)
  const dataLine1 = {
    labels: ['Día 1', 'Día 2'],
    datasets: [{
      label: 'Km recorridos en Semana 47',
      data: [32, 22],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2'],
    datasets: [{
      label: 'Km recorridos en Semana 45',
      data: [20, 30],
      borderColor: 'rgba(153, 102, 255, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  // Crear gráficos solo si los elementos canvas existen y Chart está disponible
  try {
    if (typeof Chart !== 'undefined') {
      const c1 = document.getElementById('myChart-line-1');
      const c2 = document.getElementById('myChart-line-2');
      if (c1) {
        new Chart(c1, {
          type: 'line',
          data: dataLine1,
          options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
      }
      if (c2) {
        new Chart(c2, {
          type: 'line',
          data: dataLine2,
          options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
      }
    }
  } catch (err) {
    // No dejar que errores de los gráficos detengan el resto del script
    console.warn('No se pudieron crear los gráficos:', err);
  }

  // Función robusta para actualizar los días restantes
  function actualizarDiasRestantes() {
    const pageTitleEl = document.getElementById('pageTitle');
    const resultElement = document.getElementById('result');
    if (!pageTitleEl || !resultElement) {
      console.warn('Elementos #pageTitle o #result no encontrados');
      return;
    }

    const titleText = (pageTitleEl.textContent || '').trim();

    // Buscar una fecha en formato YYYY/MM/DD o YYYY-MM-DD dentro del texto
    const match = titleText.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
    let objetivoDate = null;

    if (match) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10);
      const day = parseInt(match[3], 10);
      objetivoDate = new Date(year, month - 1, day);
    } else {
      // Intentar extraer después de dos puntos ":"
      const parts = titleText.split(':');
      if (parts.length > 1) {
        const possible = parts.slice(1).join(':').trim();
        // Reemplazar barras por guiones para un parseo más consistente
        objetivoDate = new Date(possible.replace(/\//g, '-'));
      }
    }

    if (!objetivoDate || isNaN(objetivoDate.getTime())) {
      resultElement.textContent = 'No se pudo determinar la fecha de la carrera.';
      console.warn('Fecha objetivo inválida:', titleText);
      return;
    }

    const ahora = new Date();
    // Calcular diferencia en días (redondeando hacia arriba)
    const msPorDia = 1000 * 60 * 60 * 24;
    const diffMs = objetivoDate.setHours(0,0,0,0) - ahora.setHours(0,0,0,0);
    const dias = Math.ceil(diffMs / msPorDia);

    if (diffMs < 0) {
      resultElement.textContent = `La carrera ya pasó hace ${Math.abs(dias)} día(s).`;
    } else {
      resultElement.textContent = `Faltan ${dias} día(s) para la carrera.`;
    }
    console.log('actualizarDiasRestantes:', dias);
  }

  // NOTA: El HTML ya incluye videos en la mayoría de secciones. Evitamos crear/adjuntar
  // videos por JS a menos que existan contenedores con id específicos para no generar errores.
});

