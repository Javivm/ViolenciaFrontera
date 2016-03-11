	<?php
	$pagetitle = 'Modificar';
	require_once("../inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>


<main class="formpage">
    <h1>Modificar:</h1>

	<form action="" method="post">
		  <input type="hidden" name="id" value="<?php echo $id; ?>">
			  <div><input type="text" name="Titulo" value="<?php echo $Titulo; ?>"></div>
			  <div><input type="text" name="NomPerp" value="<?php echo $Titulo; ?>"></div>
			  
			  <div><input type="text" name="Grupo" value="<?php echo $Titulo; ?>">


			  	<?php
				  //-------------------SELECT GRUPO----------//
				  $q0 = "SELECT Grupo FROM Grupo WHERE Grupo != '".$Grupo."' GROUP BY Grupo ORDER BY idGrupo;"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Grupo>
				  			<option>'.$Grupo.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$GrupoS = $row['Grupo'];

				  		echo '<option>'.$GrupoS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT GRUPO--------------------//
				?>
				 </div>
				  <div><input type="text" name="SubG" value="<?php echo $SubG ?>"></div>
				  <div><input type="text" name="NumVictimas" value="'.$NumVictimas.'"></div>
				  <div><input type="text" name="Fecha" value="'.$Fecha.'"></div>
				  <div>';
				  
				  <?php

				  //-------------------SELECT PAIS----------//
				  $q0 = "SELECT Nombre FROM Pais WHERE Nombre != '".$Pais."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Pais>
				  			<option>'.$Pais.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$PaisS = $row['Nombre'];

				  		echo '<option>'.$PaisS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT PAIS--------------------//

				  ?>
				  </div>
				  <div>

				  <?php
				  //-------------------SELECT ESTADO----------//
				  $q0 = "SELECT Nombre FROM Estado WHERE Nombre != '".$Estado."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Estado>
				  			<option>'.$Estado.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$EstadoS = $row['Nombre'];

				  		echo '<option>'.$EstadoS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT ESTADO--------------------//

				  ?>

				  </div>
				  <div><input type="text" name="Municipio" value="'.$Municipio.'"></div>
				  
				  <?php

				  //-------------------SELECT CATEGORIA----------//
				  $q0 = "SELECT Categora FROM TiposViolencia WHERE Categora != '".$Categoria."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Categoria>
				  			<option>'.$Categoria.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$CategoriaS = $row['Categora'];

				  		echo '<option>'.$CategoriaS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT CATEGORIA--------------------//

				  ?>
				  </div>
				  <div><input type="text" name="lg" value="'.$lg.'"></div>
				  <div><input type="text" name="lt" value="'.$lt.'"></div>
				  <div><textarea name="Desc">'.$Desc.'</textarea></div>
				  <div><textarea name="CompT">'.$CompT.'</textarea></div>
				  <div><input type="submit" name="Mod" value="Modificar Noticia"></div>
				  <div><input type="submit" name="Borra" value="Borrar Noticia"></div>
				  <div><input type="button" name="Cancel" value="Cancelar" onClick="location.href='./index.php'"></div>
				  </form>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>