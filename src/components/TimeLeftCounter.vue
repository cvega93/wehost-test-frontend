<template>
    <span v-if="showCounter" :class="computedClass">
        <slot></slot>
        <span :class="customClass">{{leftTime}}</span>
    </span>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "TimeLeftCounter",
        props: {
            time: {
                required: true
            },
            customClass: {
                required: false
            },
            hideBeforeStarts: {
                default: false
            }
        },
        data() {
            return {
                currentTime: 0
            }
        },
        mounted() {
            setInterval(() => {
                this.currentTime = moment.now();
            }, 1000)
        },
        computed: {
            leftTime () {
                const milliseconds = this.currentTime - moment(this.time, 'H:m:s');
                return moment.utc(milliseconds).format('HH:mm:ss');
            },
            showCounter() {
                if(this.hideBeforeStarts) {
                    const milliseconds = this.currentTime - moment(this.time, 'H:m:s');
                    return milliseconds > 0;
                } else {
                    return true;
                }
            },
            computedClass() {
                return ['warning']
            }
        }
    }
</script>

<style scoped>

</style>
