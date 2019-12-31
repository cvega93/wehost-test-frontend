<template>
    <div class="card">
        <div class="card-header bg-info">
            <div class="row">
                <div class="col-lg-6 col-xs-12">
                    <h5>Limpiezas en progreso</h5>
                </div>
                <div class="col-lg-6 col-xs-12 d-flex justify-content-end">
                    <div class="alert alert-success resume-completed" role="alert">
                        <strong>Terminadas: 0</strong>
                    </div>
                    <div class="alert alert-danger resume-completed" role="alert">
                        <strong>Pendientes: 0</strong>
                    </div>
                    <div class="progress-circle resume-completed d-flex">
                        <div class="navigation_pages">
                            <span @click="navigatePrev"> &#60; </span>
                            <span @click="navigateNext"> &#62; </span>
                        </div>
                        <p>1/1</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body p-3">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-xs-12 item-work">
                    <div class="item">
                        <div class="media">
                            <div class="d-flex justify-content-center content-image">
                                <img src="http://pluspng.com/img-png/download-happy-person-png-images-transparent-gallery-advertisement-275.png"
                                     width="75" height="75"/>
                            </div>
                            <div class="media-body">
                                <h5 class="mt-0">Cristian Vega</h5>
                                <p>Limpieza : <span>Normal</span></p>
                                <p>Depa : <span>Adriana Pelagatti</span></p>
                            </div>
                        </div>
                        <div>
                            Tiempo de limpieza: 1:33:12
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "inProgressPanel",
        components: {

        },
        data() {
            return {

            }
        },
        async mounted() {

        },
        computed: {

        },
        methods: {
            loadStatus() {
                this.$store.dispatch('home/accessStatusCleaning', this.$parent.auth)
            },
            loadCleanings() {
                this.$store.dispatch('home/progressCleaning', this.$parent.auth);
            },
            navigatePrev() {

            },
            navigateNext() {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>
