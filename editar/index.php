<?php
	$pagetitle = 'Insertar';
	require_once("../inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>
 
<main class="formpage">
    <h1>Modificar:</h1>

	<div>
		<h1>Busca la noticia que desas modificar o borrar</h1>
			<form name="Busca" method="get" action="">
				<select name="Campo">
					<option>Selecciona el campo por el que deseas buscar la noticia</option>
					<option>ID Noticia</option>
					<option>Titulo</option>
					<option>Grupo Perpetrador</option>
					<option>Sub-Grupo Perpetrador</option>
					<option>Nombre Perpetrador</option>
					<option>Pais</option>
					<option>Estado</option>
					<option>Municipio</option>
					<option>Tipo de Violencia</option>
				</select><br><br>
				<div>
					Buscar:&nbsp; &nbsp;<input type="text" name="Buscador">
				</div>
				<br>
				<div>
					<input type="submit" name="Buscar" value="Buscar">
				</div>
			</form>
		<?php include('modifica.php'); ?>
	</div>
</main>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>