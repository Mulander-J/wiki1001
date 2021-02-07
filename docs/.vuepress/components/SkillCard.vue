<template>
    <div class="card">
        <h2>{{dataSource.title}}</h2>
        <p class="skill" v-for="(ds,key) in dataSource.dataSet" :key="'skill_'+key">
            <span>{{ds.label}}</span>
            <span class="level">
                <span class="skillBar" :style="'background-size: '+ds.value+'1em;'"></span>
                {{ds.value}}
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "SkillCard",
        props:{
            dataSource:{
                type:Object,
                default:{
                    title:'Development Skills',
                    dateSet:[{label:'HTML5',value:'90%'}]
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 400px;
        color: white;
        box-sizing: border-box;
        padding: 20px;
        font-family: sans-serif;
        letter-spacing: 0.1em;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        background: #2d2d2d;
        margin: 4rem 0;
    }

    .card h2 {
        text-align: center;
        text-transform: uppercase;
    }

    .card .skill {
        height: 50px;
        cursor: pointer;
    }

    .card .skill span {
        display: block;
    }

    .card .skill .level {
        text-align: right;
        transform: translateY(-1em);
        position: relative;
        transition: .3s ease-in-out;
    }
    .card .skill .level::before,
    .card .skill .level .skillBar {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 1.2em;
        left: 0;
    }

    .card .skill .level::before {
        border: 1px solid mediumspringgreen;
        border-radius: 0.2em;
        height: 105%;
    }
    .card .skill .level:hover::before {
        background: #282c34;
    }

    .card .skill .level .skillBar {
        background-image: linear-gradient(to right,  #333,mediumspringgreen);
        background-repeat: no-repeat;
        background-position: top 0em left 0.1em;
        transition: .3s ease-in-out;
    }
</style>