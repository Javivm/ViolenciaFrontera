
<?php
	$pagetitle = 'Modificar';
	require_once("inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>

<?php

include "./credentials.php";

$link = mysql_connect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

$id = $_GET['id'];

$q = "SELECT ev.idEvento, Titulo, ev.NombrePerpetrador, ev.NumVictimas, ev.Descripcion, ev.Fecha, ev.TextoCompleto AS Comp, ev.lg, ev.lt, e.Nombre AS Estado, g.Nombre AS SubGrupo, g.Descripcion AS DescGrupo, g.Grupo AS Grupo, m.Nombre AS Municipio, p.Nombre AS Pais, t.Categora AS Categoria FROM Evento ev LEFT JOIN Estado e ON ev.idEstado = e.idEstado LEFT JOIN Grupo g ON ev.idGrupo = g.idGrupo LEFT JOIN Municipio m ON ev.idMunicipio = m.idMunicipio LEFT JOIN Pais p ON ev.idPais = p.idPais LEFT JOIN TiposViolencia t ON ev.idTiposViolencia = t.idTiposViolencia WHERE idEvento = ".$id.";";

$res = mysql_query($q); //EJECUCION DEL QUERY

$row = mysql_fetch_array($res);

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
$CompT = $row['Comp'];

?>

<div><?php echo $Titulo; ?></div>
<div><?php echo $NomPerp; ?></div>
<div><?php echo $Grupo; ?></div>
<div><?php echo $SubG; ?></div>
<div><?php echo $NumVictimas; ?></div>
<div><?php echo $Fecha; ?></div>
<div><?php echo $Pais;?></div>
<div><?php echo $Estado;?></div>
<div><?php echo $Municipio; ?></div>
<div><?php echo $Categoria; ?></div>
<div><?php echo $Desc; ?></div>
<div><?php echo $CompT; ?></div>

<?php

	mysql_free_result($res); //LIBERAR RESULTSET
	mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS

?>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>