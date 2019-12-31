<template lang="html">
	<section class="app-sidebar">
		<nav class="sidebar sidebar-offcanvas" id="sidebar">
			<ul class="nav">
				<li class="nav-item nav-profile">
					<a href="#" class="nav-link">
						<div class="profile-image">
							<img class="img-xs rounded-circle" src="../assets/faces/face8.jpg" alt="profile image">
							<div class="dot-indicator bg-success"></div>
						</div>
						<div class="text-wrapper">
							<p class="profile-name">Cristian Vega</p>
							<p class="designation">Propietario</p>
						</div>
					</a>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/boletas">
						<i class="menu-icon typcn typcn-mail"></i>
						<span class="menu-title">Mis boletas</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/calendario">
						<i class="menu-icon typcn typcn-mail"></i>
						<span class="menu-title">Calendario y Reservas</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/">
						<i class="menu-icon typcn typcn-mail"></i>
						<span class="menu-title">Reportes</span>
					</router-link>
				</li>

				<li class="nav-item">
					<a class="nav-link" href="#">
						<i class="menu-icon typcn typcn-mail"></i>
						<span class="menu-title">Salir</span>
					</a>
				</li>
			</ul>
		</nav>
	</section>
</template>

<script lang="js">
import JQuery from 'jquery'
// eslint-disable-next-line
let $ = JQuery
export default {
  name: 'app-sidebar',
  mounted () {
    $('.sidebar-icon-only .sidebar .nav .nav-item').on('mouseenter', function () {
      var $this = $(this)
      $this.addClass('hover-open')
      $this.find('.nav-link').addClass('hover-open')
    })
    $('.sidebar-icon-only .sidebar .nav .nav-item').on('smouseleave', function () {
      var $this = $(this)
      $this.removeClass('hover-open')
      $this.find('.nav-link').removeClass('hover-open')
    })
  },
//   methods:{
// 	  async closeSesion(){
// 		  var status = confirm('Desea cerrar sesión?');
// 		  if(status){
// 			  await this.$store.dispatch('account/logout');
// 			  this.$router.push("/login");
// 		  }
// 	  }
//   }
}
</script>
