<template>
    <div>
    Stream Widget
    <br>{{icon}}
       <br>{{summary}}
          <br>{{temperature}}
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        mounted(){
            this.getWeather()
            this.init()
        },
        methods: {
            init(){
                this.weatherInterval = setInterval(this.getWeather, 900000)
            },
            getWeather(){
                axios.get(`/api/weather/forecast/${process.env.VUE_APP_WEATHER_API_KEY}/22.060591,-103.933723`)
                .then(response =>{
                    this.updateData(response.data)
                } )
            },
            updateData(weatherData){
                const { icon, temperature, summary } = weatherData.currently
                this.summary = summary;
                this.temperature = temperature;
                this.icon = icon;
            }
        },
        data(){
            return {
                weatherInterval: null,
                summary: undefined,
                temperature: undefined,
                icon: undefined           
                }
        }
    }
</script>

<style lang="scss" scoped>

</style>