<?php 
    if ( !isset($_GET['page']) ) {
        $page = "";
    } else{
        $page = $_GET['page'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="keywords" content="construccion de viviendas, departamentos, arquitectura, casas, edificios">
	<meta name="description" content="Nos dedicamos a la proyección, dirección y construcción de obras, embarcándonos en desarrollos inmobiliarios">

	<title>Meixner Group</title>

	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/fakeLoader.css">
	<link rel="stylesheet" href="css/meixner.css">
	<link rel="stylesheet" href="css/style-icon.css">
	<link rel="stylesheet" href="css/owl.carousel.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/gridstack.css">
		<link rel="stylesheet" href="css/gridstack-extra.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="apple-touch-icon" sizes="57x57" href="img/icon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="img/icon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/icon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="img/icon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/icon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="img/icon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="img/icon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="img/icon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="img/icon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="img/icon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="img/icon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="img/icon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/icon/favicon-16x16.png">
	<link rel="manifest" href="img/icon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="img/icon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
</head>

<body>

<!--<div id="fakeLoader"></div>-->

<nav id="header" class="navbar navbar-fixed-top estilo" data-sr="wait 1.0s">
	<div id="header-container" class="container sin-padding navbar-container">
						<div class="navbar-header">
								<!--<a id="brand" class="navbar-brand" href="#">
									<img src="img/logos/meixner.png"/>
								</a>-->
							<div id="contenedor-logo" class="container logo">

								<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
								</button>
								<a id="brand" class="navbar-brand hidden-xs grande" href="#">
								     <img class="logoprincipal center-block" src="img/logos/meixnergroup-n-550x50.png"/>
							    </a>
				 				 <!--brand phones-->
							    <a id="brand" class="navbar-brand visible-xs-block" href="#">
								     <img src="img/logos/meixnergroup-n-220x20.png"/>
							    </a>
							</div>     
						</div>
	</div>
	<div id="navbar" class="collapse navbar-collapse">

					<!--<ul id="redes" class="nav navbar-nav navbar-right">
						<li><a href="#"><span class="icon-facebook"></span><span class="sr-only">(current)</span></a></li>
						<li><a href="#"><span class="icon-twitter"></span></a></li>
						<li><a href="#"><span class="icon-linkedin2"></span></a></li>
					</ul>-->
 					<div class="container-menu">
						<ul id="menu" class="nav navbar-nav">
							<li class="<?php echo ($page == "home" ? "active" : "")?>" ><a href="index.php?page=home">Home<span class="sr-only">(current)</span></a></li>
							<li class="<?php echo ($page == "meix" ? "active" : "")?>" ><a href="index.php?page=meix#meix">Quienes somos</a></li>
							<li class="<?php echo ($page == "porfolio" ? "active" : "")?>"><a href="portfolio.php?page=porfolio">Proyectos</a></li>
							<li class="<?php echo ($page == "servicios" ? "active" : "")?>"><a href="index.php?page=servicios#servicios">Servicios</a></li>
							<li class="<?php echo ($page == "clientes" ? "active" : "")?>"><a href="index.php?page=clientes#clientes">Equipo</a></li>
							<li class="<?php echo ($page == "prensa" ? "active" : "")?>"><a href="index.php?page=prensa#prensa">Prensa</a></li>
							<li class="<?php echo ($page == "contacto" ? "active" : "")?>"><a href="index.php?page=contacto#contacto">Contacto</a></li>
						</ul>
					</div>
	</div>				
</nav><!-- /.navbar -->