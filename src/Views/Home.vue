<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-md-12 col-xs-12 item-header d-flex justify-content-start">
                <h2 class="m-0 p-0">Control del personal</h2>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 item-header d-flex justify-content-center">
                <a class="logo" href="#">
                    <img src="../assets/logo.svg" alt="We Host">
                </a>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12 item-header d-flex justify-content-end">
                <p>16:20</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9 col-xs-12 offset-md-2 mb-4 clean-progress">
                <in-progress-cleanings></in-progress-cleanings>
            </div>
        </div>
    </div>
</template>

<script>
    import inProgressCleanings from "@/components/Panels/InProgressCleanings"

    export default {
        name: 'home',
        components: {
            inProgressCleanings
        },
        data() {
            return {
                auth: {
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE5YTBhZTFmZmY0YWYyZDJmNTkyMzc4YTUyZGRkYzIxY2FhNzJmYzMzYzQzMWE4MDc3NTE1OGQ4MTJmNTE5OWIyYTA0MmE5YzIwZTA5OGIxIn0.eyJhdWQiOiIxIiwianRpIjoiMTlhMGFlMWZmZjRhZjJkMmY1OTIzNzhhNTJkZGRjMjFjYWE3MmZjMzNjNDMxYTgwNzc1MTU4ZDgxMmY1MTk5YjJhMDQyYTljMjBlMDk4YjEiLCJpYXQiOjE1NzczNzEzNzYsIm5iZiI6MTU3NzM3MTM3NiwiZXhwIjoxNTkzMTgyNTc2LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.VYcy2L4-lOQBCnUKMSaZ8upTIqCFewWM9gvLI1qHhUNOqRskS6VFdbtF65eELZSZRVI_FOgcPHF1VfzdRhEyhQI9VtV95pFspTOKSDONz6PHjBshU3eqpJgGVXh2btVKlrkbS-vLMibWruY5uX3rpsa5ROwS_MHRDhKv3D98yCFOoto6X5_X8EsGX6zdk0-pGrKWkaIrQH4oEkCSsIRLZc16YaaUrWk1pDzOFm9wIZ3PqSVLU8BfrzijI_6ksVtacQ3i-tmGdtJsEM8qU53qsjy9fmo2BkSL4pI4DFV96dbXS4M6haW_lUEq83XU8JAhK0Ha9p5H9JSHyN_kNYhuNImgPfX23ln95dorVBg8EhCb4Knnwx5O7elprZYEYu6Ha2tGJ_Kd6acnA8mlAxCKprWvQPFbF2akVZWru82PRfjh6WHVSSQsd4S1kTKcJRKXPvbdd34HNoId3kM72d1kRD4PT1ekCV2JYe5aHMwMkQ5PwG_Vdscflo3q_5Or0siBGyps9ILiYnTI4z3faAQFt0qBjgM361n6kCS_rsq8DmeGoFIzdYG51ZJ8gwKqT0UNpr6xJH6VEl5vQdposX16_4XkZUU7NYAmI2B0QsoPTJ2YhtSNTv2vt2bMPbVzjipYU0b15F-DAdcIpOGqSDROS3vRvc87Db4pRqu8LnXc24c',
                    url: 'https://hoster-api-test.wehost.pe/api/v1'
                },
                hours: []
            }
        },
        methods: {

        },
        mounted() {
            this.$store.dispatch('home/progressCleaning', this.auth);
        },
        computed: {

        }
    }
</script>
<style lang="css">

</style>
