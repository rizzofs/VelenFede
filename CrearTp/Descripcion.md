# DESCRIPCIÓN DEL FORMULARIO

Este formulario le permite a los usuarios crear un nuevo Trabajo Práctico (TP) con las siguientes características:

1- Materia: Contiene una lista desplegable que permite seleccionar una materia. 
    Los datos de las materias se cargan dinámicamente desde un archivo JSON para realizar pruebas, luego se van a tener que extraer desde la base de datos.
        <form id="crearNuevoTP" method="post">
        <label for="materia">Materia:</label>
        <select id="materia" name="materia" required>
            <option value="" disabled selected>Seleccione una materia</option>
        </select>
        
2- Nombre del TP: Permite ingresar el nombre del trabajo práctico.
    El nombre debe poder ser modificado una vez creado.
    Restricción: Una misma materia no puede contener dos trabajos practicos con el mismo nombre.
     <label for="nombre">Nombre TP:</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Ingrese nombre del TP">

3- Cantidad de puntos: Campo numérico donde se indica la cantidad de puntos asignados al trabajo.
    <label for="cantidadPuntos">Ingrese la cantidad de puntos:</label>
        <input class="form-control" type="number" id="cantidadPuntos" name="cantidadPuntos"
            placeholder="Cantidad de puntos" required>    

4- Tipo de trabajo: 
      Dos opciones:
                   Individual: El trabajo es realizado por una sola persona.
                   Grupal: Permite ingresar el nombre de un compañero/a.
                           En caso de optar por esta opción, debería dejar seleccionar mas de un compañero. 
    <label for="tipoTrabajo">Tipo de trabajo:</label>
        <select id="tipoTrabajo" name="tipoTrabajo" required onchange="toggleCompaneroField()">
            <option value="" disabled selected>Seleccione el tipo de trabajo</option>
            <option value="Individual">Individual</option>
            <option value="Grupal">Grupal</option>
        </select>


5- Nombre del compañero/a: Este campo únicamente se muestra si se selecciona la opción "Grupal".
                           En caso contrario se mantiene oculto.
    <div id="companeroField" style="display: none;">
            <label for="companero">Nombre del compañero/a:</label>
            <input type="text" id="companero" name="companero" placeholder="Ingrese el nombre del compañero/a">
            <br><br>
        </div>                            


6- Botón de envío: Envia los datos del formulario para la creación del trabajo practico.
    <button type="submit">Crear TP</button>

![Imágen de como se ve el formulario](/CrearTp/Formulario.png)
