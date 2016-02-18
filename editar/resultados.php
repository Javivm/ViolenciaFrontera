<?php

/* EN ESTE MODULO USARE LOS ECHO PARA HACER LA PAGINA DINAMICA, ESTO LO HAGO YA QUE LA BIBLIOTECA HTML/..../ITX NO ESTA SIENDO INSTALADA CORRECTAMENTE.
	lO QUE SALE EN LOS ECHO VA A SER EL HTML, PARA ALTERAR EL DISEÑO ALTERARLO AQUI */
include "./../credentials.php";

$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

//FORMA

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
	}

	include "./mod2.php";

	mysql_free_result($res); //LIBERAR RESULTSET
	mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS	

}//FIN IF
//FIN DYNAMIC SHIT
