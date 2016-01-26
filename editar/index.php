<?php
	$pagetitle = 'Insertar';
	require_once("../inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>
 
<main class="formpage">
    <h1>Modificar:</h1>
	<div id="BuscaMod1">
		Buscador
	</div>
	<div>
		<br>La noticia incluye los apartados de Titulo, Nombre del Perpetrador, Numero de Victimas, Fecha, Estado donde ocurrio, Municipio donde ocurrio, Pais donde ocurriuo, Descripcion, El texto de la noticia, longitud y latitud<br>
		<br>Que campo desea modificar<br><br>
		<?php include('modifica.php'); ?>
	</div>
</main>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>