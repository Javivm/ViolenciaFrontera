<?php
	$pagetitle = 'Insertar';
	require_once("../inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>
 
<main class="formpage">
    <h1>Agrega una nueva noticia</h1>
	 <form method="post" action="inserta.php">
<div class="division">
	 	 <label>Título de la noticia</label>
	 	 	<input type="text" name="titulo" required>
		 <label for="name" name="grupopl">Grupo responsable:</label>
	 		<select name="grupo" class="clear">
			  <option >US Police</option> 
			  <option >Border Patrol</option> 
			  <option >Narco</option> 
			  <option >Policía MX</option>
			  <option >Otros</option>
			</select>
		<label for="name">Sub-Grupo: (en caso de existir)</label>
			<input type="text" name="subgrupo">
	 	<label for="name">Nombre del responsable: (en caso de existir)</label>
	 		<input type="text" name="nomperp" value="" class="clear">
</div>
<div class="division">
	 	<label for="name">Tipo de violencia:</label>
	 		<select name="categoria" class="clear">
			  <option >Desaparicion</option> 
			  <option >Homicidio</option> 
			  <option >Concecuencias de Migracion</option> 
			</select>
	 	<label for="name">Fecha de la Noticia:</label>
	 		<input type="text" name="fecha" value="(año-mes-día)" required class="clear">
	 	<label for="name">Número de víctimas:</label>
	 		<input type="text" name="numvictimas" value="" required>
</div>
<div class="division">
	 	<label for="name">País:</label>
	 		<select name="pais">
			  <option value = "1">México</option> 
			  <option value = "2">Estados Unidos</option> 
			</select>
		 <label for="name">Estado:</label>
	 		<select name="estado" class="clear">
			  <option > Baja California </option> 
			  <option >Sonora</option> 
			  <option >Chihuahua</option> 
			  <option >Coahuila </option>
			  <option >Nuevo Leon</option>
			  <option >Tamaulipas</option>
			  <option >California</option>
			  <option>Arizona</option>
			  <option>New Mexico</option>
			  <option>Texas </option>
			</select>
	 	<label for="name">Municipio:</label>
	 		<input type="text" name="municipio" value="" required>
	 	<a href="http://www.latlong.net/" target="_blank">Buscar Longitud y Latitud</a>
	 	<label for="name">Latitud:</label>
	 		<input type="text" name="long" value="" required>
	 	<label for="name">Longitud:</label>
	 		<input type="text" name="lat" value="" required>
</div>	 		
<div class="fullpanel">
		<label for="message">Abstract de la noticia: (Se muestra en la infografía)</label>
	 		<textarea name="desc" value="" required></textarea>
	 	<label for="message">Texto completo de la noticia: (Se muestra en la página de la noticia)</label>
	 		<textarea name="texto" value="" required></textarea>
	 	<input type="submit" class="buttonsubmit" value="Añadir evento">
</div>	
	 
	 </form>
</main>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>