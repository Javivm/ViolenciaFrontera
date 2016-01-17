<?php
	$pagetitle = 'El Muro';
	require_once("inc/config.php");
?> 

<?php include(ROOT_PATH . 'inc/header.php'); ?>
<header>
	<h1>El Muro</h1>
	<h3>15 Años de violencia en la frontera <br>México - EE.UU.</h3>
	<ul>
		<li class="perpetradoricon mxpolice">Policía MX</li>
		<li class="perpetradoricon uspolice">US Police</li>
		<li class="perpetradoricon drugs">Narco</li>
		<li class="perpetradoricon border">Border Patrol</li>
		<li class="perpetradoricon nonof">Otros</li>
	</ul>
</header>
<main>
    <section id="map">
    </section>
</main>

<?php include(ROOT_PATH . 'inc/footer.php'); ?>