<?php

/* EN ESTE MODULO USARE LOS ECHO PARA HACER LA PAGINA DINAMICA, ESTO LO HAGO YA QUE LA BIBLIOTECA HTML/..../ITX NO ESTA SIENDO INSTALADA CORRECTAMENTE.
	lO QUE SALE EN LOS ECHO VA A SER EL HTML, PARA ALTERAR EL DISEÑO ALTERARLO AQUI */
include(ROOT_PATH . 'inc/header.php');
include "./credentials.php";

$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

//FORMA
echo '<form name="Busca" method="get" action="">

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
</form>';
//FIN FORMA

//DYNAMIC SHIT
if(isset($_GET['Buscar'])){ //--EN CASO DE QUE YA HAYAN MANDADO INFO

	$campo = $_GET['Campo']; //Obtener datos
	$busca = $_GET['Buscador']; //Obtener datos

//----ASIGNACION DE LOS NOMBRES REALES----//

	if(strcmp($campo, 'Grupo Perpetrador') == 0){ //Asignandole el nombre real del campo de la DB
		$campo = "g.Grupo";
	}else //IF
		if(strcmp($campo, 'Sub-Grupo Perpetrador') == 0){ //Asignandole el nombre real del campo de la DB
			$campo = "g.Nombre";
		}else //IF
			if(strcmp($campo, 'Nombre Perpetrador') == 0){ //Asignandole el nombre real del campo de la DB
				$campo = "ev.NombrePerpetrador";
			}else //IF
				if(strcmp($campo, 'Pais') == 0){ //Asignandole el nombre real del campo de la DB
					$campo = "p.Nombre";
				}else //IF
					if(strcmp($campo, 'Estado') == 0){ //Asignandole el nombre real del campo de la DB
						$campo = "e.Nombre";
					}else //IF
						if(strcmp($campo, 'Municipio') == 0){ //Asignandole el nombre real del campo de la DB
							$campo = "m.Nombre";
						}else //IF
							if(strcmp($campo, 'Tipo de Violencia') == 0){ //Asignandole el nombre real del campo de la DB
								$campo = "t.Categora";
							}else
								if(strcmp($campo, 'ID Noticia') == 0){ //Asignandole el nombre real del campo de la DB
									$campo = "ev.idEvento";
								}//IF

//-----FIN ASIGNACION NOMBRES REALES-----//

	$q = "SELECT ev.idEvento, Titulo, ev.NombrePerpetrador, ev.NumVictimas, ev.Descripcion, ev.Fecha, ev.TextoCompleto, ev.lg, ev.lt, e.Nombre AS Estado, g.Nombre AS SubGrupo, g.Descripcion AS DescGrupo, g.Grupo AS Grupo, m.Nombre AS Municipio, p.Nombre AS Pais, t.Categora AS Categoria FROM Evento ev LEFT JOIN Estado e ON e.idEstado = ev.idEstado LEFT JOIN Grupo g ON g.idGrupo = ev.idGrupo LEFT JOIN Municipio m ON m.idMunicipio = ev.idMunicipio LEFT JOIN Pais p ON p.idPais = ev.idPais LEFT JOIN TiposViolencia t USING(idTiposViolencia) WHERE ".$campo." LIKE '%".$busca."%';";
	
	//echo $campo;
	//echo $q;

	$res = mysql_query($q); //EJECUCION DEL QUERY

	if(mysql_num_rows($res) < 1){ //Checar que este regresando algun resultado
		echo "<script>alert('No se han encontrado resultados')</script>";
	}else{ //IF
			echo'
		<div>
			<table style="width = 100%">
				<tr>
					<th>ID</th>
					<th>Titulo</th>
					<th>Resumen</th>
					<th>Fecha</th>
					<th>Estado</th>
					<th>Municipio</th>
					<th>Pais</th>
				</tr>';

//------------PARTE DINAMICA DE LA TABLA-----------------------//


				while ($row = mysql_fetch_assoc($res)) {

					$id = $row['idEvento'];
					$Titulo = $row['Titulo'];
					$NomPerp = $row['NombrePerpetrador'];
					$NumVictimas = $row['NumVictimas'];
					$Desc = $row['Descripcion'];
					$Fecha = $row['Fecha'];
					$Estado = $row['Estado'];
					$SubG = $row['SubGrupo'];
					$Grupo = $row['Grupo'];
					$Municipio = $row['Municipio'];
					$Pais = $row['Pais'];
					$Categoria = $row['Categoria'];

					echo'<tr>
							<td><a href="./comptext.php?id='.$id.'" target="_blank">'.$id.'</a></td>
							<td>'.$Titulo.'</td>
							<td>'.$Desc.'</td>
							<td>'.$Fecha.'</td>
							<td>'.$Estado.'</td>
							<td>'.$Municipio.'</td>
							<td>'.$Pais.'</td>
						</tr>';
						
				}//FIN WHILE

//-------------FIN PARTE DINAMICA DE LA TABLA------------------//

			echo '</table>
		</div>';
	}//ELSE

	mysql_free_result($res); //LIBERAR RESULTSET
	mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS	
}//FIN IF
//FIN DYNAMIC SHIT
?>