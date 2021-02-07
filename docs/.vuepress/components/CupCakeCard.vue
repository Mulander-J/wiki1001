<template>
    <div class="m11-card-wrapper">
        <div class="m11-card-img"><img :src="data.picSrc" alt=""></div>
        <div class="m11-card-title">
            <p class="m11-cardTitle-Item">{{data.title1}}</p>
            <p class="m11-cardTitle-Item">{{data.title2}}</p>
        </div>
        <div class="m11-card-desc">
            <p class="m11-cardDesc-Item">{{data.desc1}}</p>
            <p class="m11-cardDesc-Item">{{data.desc2}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CupCakeCard",
        props:{
            data:{
                type:Object,
                default:{
                    desc1:'2019.01.18',
                    desc2:'No.HFA19227484201',
                    title2:'梭梭树',
                    title1:'武威地区',
                    picSrc:''
                }
            }
        }
    }
</script>

<style scoped>
    .m11-card-wrapper{
        color: #FFF;
        text-align: center;
        border-radius: 8px;
        padding: 2rem;
        margin: 1rem;
        background-image: linear-gradient(-45deg, #9a4eff, #24ff72);
    }
    .m11-card-img{
        position: relative;
    }
    .m11-card-img img{
        width: 100%;
        height: 100%;
    }
    .m11-cardTitle-Item{
        font-size: 2rem;
        margin: 0.4rem;
    }
    .m11-cardDesc-Item{
        font-size: 1.4rem;
        margin: 0;
    }
</style>