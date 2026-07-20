// ==========================================
// 1. BASE DE DATOS EN MEMORIA (ASIGNACIÓN)
// ==========================================
const catalogoJuegos = [
    // --- JUEGOS DEL DISCO 1 ---
    { titulo: "Halo 3", disco: "Disco 1" },
    { titulo: "Halo Reach", disco: "Disco 1" },
    { titulo: "Gears of War", disco: "Disco 1" },
    { titulo: "Gears of War 2", disco: "Disco 1" },
    { titulo: "Gears of War 3", disco: "Disco 1" },
    { titulo: "Grand Theft Auto V", disco: "Disco 1" },
    { titulo: "Grand Theft Auto IV", disco: "Disco 1" },
    { titulo: "Minecraft", disco: "Disco 1" },
    { titulo: "Red Dead Redemption", disco: "Disco 1" },
    { titulo: "The Elder Scrolls V: Skyrim", disco: "Disco 1" },
    { titulo: "Fallout 3", disco: "Disco 1" },
    { titulo: "Fallout: New Vegas", disco: "Disco 1" },
    { titulo: "Assassin’s Creed II", disco: "Disco 1" },
    { titulo: "Assassin’s Creed Brotherhood", disco: "Disco 1" },
    { titulo: "Assassin’s Creed Revelations", disco: "Disco 1" },
    { titulo: "Far Cry 3", disco: "Disco 1" },
    { titulo: "Borderlands 2", disco: "Disco 1" },
    { titulo: "BioShock", disco: "Disco 1" },
    { titulo: "BioShock 2", disco: "Disco 1" },
    { titulo: "BioShock Infinite", disco: "Disco 1" },
    { titulo: "Mass Effect", disco: "Disco 1" },
    { titulo: "Mass Effect 2", disco: "Disco 1" },
    { titulo: "Mass Effect 3", disco: "Disco 1" },
    { titulo: "The Witcher 2: Assassins of Kings", disco: "Disco 1" },
    { titulo: "Dead Space", disco: "Disco 1" },
    { titulo: "Dead Space 2", disco: "Disco 1" },
    { titulo: "L.A. Noire", disco: "Disco 1" },
    { titulo: "Alan Wake", disco: "Disco 1" },
    { titulo: "Batman: Arkham Asylum", disco: "Disco 1" },
    { titulo: "Batman: Arkham City", disco: "Disco 1" },

    // --- JUEGOS DEL DISCO 2 ---
    { titulo: "Afro Samurai", disco: "Disco 2" },
    { titulo: "Alien Rage", disco: "Disco 2" },
    { titulo: "FIFA 14", disco: "Disco 2" },
    { titulo: "FIFA 15", disco: "Disco 2" },
    { titulo: "FIFA 16", disco: "Disco 2" },
    { titulo: "Pro Evolution Soccer 2013", disco: "Disco 2" },
    { titulo: "Pro Evolution Soccer 2016", disco: "Disco 2" },
    { titulo: "NBA 2K13", disco: "Disco 2" },
    { titulo: "NBA 2K14", disco: "Disco 2" },
    { titulo: "NBA 2K16", disco: "Disco 2" },
    { titulo: "Forza Motorsport 3", disco: "Disco 2" },
    { titulo: "Forza Motorsport 4", disco: "Disco 2" },
    { titulo: "Forza Horizon", disco: "Disco 2" },
    { titulo: "Forza Horizon 2", disco: "Disco 2" },
    { titulo: "Need for Speed: Most Wanted (2012)", disco: "Disco 2" },
    { titulo: "Need for Speed: Hot Pursuit", disco: "Disco 2" },
    { titulo: "Need for Speed: Rivals", disco: "Disco 2" },
    { titulo: "Need for Speed: Shift", disco: "Disco 2" },
    { titulo: "F1 2012", disco: "Disco 2" },
    { titulo: "F1 2013", disco: "Disco 2" },
    { titulo: "F1 2014", disco: "Disco 2" },
    { titulo: "DiRT 3", disco: "Disco 2" },
    { titulo: "DiRT Showdown", disco: "Disco 2" },
    { titulo: "GRID 2", disco: "Disco 2" },
    { titulo: "Burnout Paradise", disco: "Disco 2" },
    { titulo: "Split/Second", disco: "Disco 2" },
    { titulo: "Blur", disco: "Disco 2" },
    { titulo: "Trials Evolution", disco: "Disco 2" },
    { titulo: "SSX", disco: "Disco 2" },
    { titulo: "Tony Hawk's Pro Skater HD", disco: "Disco 2" },
    { titulo: "WWE 2K14", disco: "Disco 2" },
    { titulo: "UFC Undisputed 3", disco: "Disco 2" },

    // --- JUEGOS DEL DISCO 3 ---
    { titulo: "Call of Duty 4: Modern Warfare", disco: "Disco 3" },
    { titulo: "Call of Duty: Modern Warfare 2", disco: "Disco 3" },
    { titulo: "Call of Duty: Modern Warfare 3", disco: "Disco 3" },
    { titulo: "Call of Duty: Black Ops", disco: "Disco 3" },
    { titulo: "Call of Duty: Black Ops II", disco: "Disco 3" },
    { titulo: "Battlefield 3", disco: "Disco 3" },
    { titulo: "Battlefield 4", disco: "Disco 3" },
    { titulo: "Medal of Honor", disco: "Disco 3" },
    { titulo: "Medal of Honor: Warfighter", disco: "Disco 3" },
    { titulo: "Max Payne 3", disco: "Disco 3" },
    { titulo: "Resident Evil 5", disco: "Disco 3" },
    { titulo: "Resident Evil 6", disco: "Disco 3" },
    { titulo: "Tomb Raider (2013)", disco: "Disco 3" },
    { titulo: "Hitman: Absolution", disco: "Disco 3" },
    { titulo: "Sniper Elite V2", disco: "Disco 3" },
    { titulo: "Just Cause 2", disco: "Disco 3" },
    { titulo: "Prototype", disco: "Disco 3" },
    { titulo: "Prototype 2", disco: "Disco 3" },
    { titulo: "Saints Row: The Third", disco: "Disco 3" },
    { titulo: "Saints Row IV", disco: "Disco 3" },
    { titulo: "Crackdown", disco: "Disco 3" },
    { titulo: "Crackdown 2", disco: "Disco 3" },
    { titulo: "The Saboteur", disco: "Disco 3" },
    { titulo: "Army of Two", disco: "Disco 3" },
    { titulo: "Army of Two: The 40th Day", disco: "Disco 3" },
    { titulo: "Spec Ops: The Line", disco: "Disco 3" },
    { titulo: "Dishonored", disco: "Disco 3" },
    { titulo: "Deus Ex: Human Revolution", disco: "Disco 3" },
    { titulo: "Sleeping Dogs", disco: "Disco 3" },
    { titulo: "Watch Dogs", disco: "Disco 3" }
];

// ==========================================
// 2. FUNCIÓN DE BÚSQUEDA AVANZADA (MULTIPLE)
// ==========================================
function buscarJuego() {
    // .toLowerCase() hace que "HALO", "halo" o "HaLo" sean tratados exactamente igual
    let juegoBuscado = document.getElementById("buscador").value.toLowerCase().trim();
    let contenedorResultado = document.getElementById("resultado");
    let textoResultado = document.getElementById("textoResultado");

    // Limpiamos los resultados anteriores antes de hacer una nueva búsqueda
    textoResultado.innerHTML = "";

    if (juegoBuscado === "") {
        contenedorResultado.className = "no-encontrado";
        textoResultado.textContent = "⚠️ Por favor, escribe el nombre de un juego para buscar.";
        return;
    }

    // Creamos un arreglo vacío en memoria para almacenar TODAS las coincidencias que encontremos
    let resultadosEncontrados = [];

    // Recorremos toda nuestra base de datos de 92 juegos
    for (let i = 0; i < catalogoJuegos.length; i++) {
        let juegoActual = catalogoJuegos[i];
        
        // Si el título del juego contiene la palabra clave que el usuario escribió...
        if (juegoActual.titulo.toLowerCase().includes(juegoBuscado)) {
            // ...lo guardamos en nuestra lista de resultados (Ya no usamos "break" para que revise TODO)
            resultadosEncontrados.push(juegoActual);
        }
    }

    // ==========================================
    // 3. SALIDA EN PANTALLA DE LOS COINCIDENCIAS
    // ==========================================
    if (resultadosEncontrados.length > 0) {
        // Si encontramos juegos, activamos el diseño verde de éxito
        contenedorResultado.className = "encontrado";
        
        // Creamos un título inicial para la respuesta
        let contenidoHTML = `🎮 <strong>Resultados encontrados (${resultadosEncontrados.length}):</strong><br><hr style="border: 0; border-top: 1px solid #107c10; margin: 8px 0;">`;
        
        // Recorremos la lista de coincidencias para ir armando el texto que verá el usuario
        for (let j = 0; j < resultadosEncontrados.length; j++) {
            let juego = resultadosEncontrados[j];
            contenidoHTML += `• <strong>${juego.titulo}</strong> guardado en: <em>${juego.disco}</em><br>`;
        }
        
        // Inyectamos todo el bloque de texto acumulado en la pantalla
        textoResultado.innerHTML = contenidoHTML;
    } else {
        // Si la lista está vacía, activamos el diseño de alerta rojo
        contenedorResultado.className = "no-encontrado";
        textoResultado.textContent = "❌ No se encontraron juegos con ese nombre en ningún disco.";
    }
}

function evaluarEnter(event) {
    if (event.key === "Enter") {
        buscarJuego();
    }
}