<template>
    <div class="m11-hoverBlock">
        <img :src="data.image">
        <div class="m11-hoverBlock-content">
            <div class="m11-hoverBlock-inner-content">
                <h3 class="m11-hoverBlock-title">{{data.title}}</h3>
                <span class="m11-hoverBlock-post">{{data.desc}}</span>
            </div>
            <ul class="m11-hoverBlock-icon">
                <li><a :href="data.link" target="_blank">go</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HoverBlock",
        props:{
            data:{
                type:Object,
                default:()=>{
                    return {
                        image:'',
                        title:'title',
                        desc:'desc',
                        link:''
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .m11-hoverBlock{
        text-align: center;
        overflow: hidden;
        position: relative;
    }
    .m11-hoverBlock img{
        width: 100%;
        height: auto;
        transform: scale(1.6);
        transition: all 0.3s ease 0s;
    }
    .m11-hoverBlock:hover img{
        filter: grayscale(100%);
        transform: scale(1.2);
    }
    .m11-hoverBlock .m11-hoverBlock-content{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        transition: all 0.2s ease 0s;
    }
    .m11-hoverBlock:before,
    .m11-hoverBlock:after,
    .m11-hoverBlock .m11-hoverBlock-content:before,
    .m11-hoverBlock .m11-hoverBlock-content:after{
        content: "";
        width: 100%;
        height: 25%;
        background: linear-gradient(to right,rgba(0,0,0,0.9),rgba(0,0,0,0.7),transparent,rgba(0,0,0,0.7),rgba(0,0,0,0.9));
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s ease 0s;
    }
    .m11-hoverBlock:before{ transform: translateX(100%); }
    .m11-hoverBlock:after{
        height: 25.1%;
        top: 25%;
        transform: translateX(-100%);
        transition-delay: 0.05s;
    }
    .m11-hoverBlock .m11-hoverBlock-content:before{
        top: 50%;
        transform: translateX(100%);
        transition-delay: 0.1s;
    }
    .m11-hoverBlock .m11-hoverBlock-content:after{
        top: 75%;
        transform: translateX(-100%);
        transition-delay: 0.15s;
    }
    .m11-hoverBlock:hover:before,
    .m11-hoverBlock:hover:after,
    .m11-hoverBlock:hover .m11-hoverBlock-content:before,
    .m11-hoverBlock:hover .m11-hoverBlock-content:after{ transform: translateX(0); }
    .m11-hoverBlock .m11-hoverBlock-inner-content{
        padding: 7px 0;
        text-align: right;
        position: absolute;
        bottom: 10px;
        right: 20px;
        z-index: 2;
        transition: all 0.3s ease 0s;
    }
    .m11-hoverBlock .m11-hoverBlock-title{
        font-size: 22px;
        font-weight: 700;
        color: #faac01;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 0 0 3px 0;
        opacity: 0;
        transform: translateY(150px);
        transition: all 0.4s ease 0s;
    }
    .m11-hoverBlock .m11-hoverBlock-post{
        display: inline-block;
        padding: 0 5px;
        font-size: 16px;
        font-style: italic;
        color: #fff;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.4s ease 0s;
    }
    .m11-hoverBlock:hover .m11-hoverBlock-title,
    .m11-hoverBlock:hover .m11-hoverBlock-post{
        opacity: 1;
        transform: translate(0, 0);
    }
    .m11-hoverBlock .m11-hoverBlock-icon{
        padding: 0;
        margin: 0;
        list-style: none;
        position: absolute;
        top: -200px;
        left: 10px;
        z-index: 2;
        transition: all 0.4s ease 0.2s;
    }
    .m11-hoverBlock:hover .m11-hoverBlock-icon{ top: 15px; }
    .m11-hoverBlock .m11-hoverBlock-icon li a{
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        background: #faac01;
        font-size: 20px;
        color: #fff;
        margin-bottom: 10px;
        position: relative;
        transition: all 0.3s ease 0s;
    }
    .m11-hoverBlock .m11-hoverBlock-icon li a:hover{
        text-decoration: none;
        border-radius: 30%;
        background: #fff;
        color: #faac01;
    }
    @media only screen and (max-width:990px){
        .m11-hoverBlock{ margin-bottom: 30px; }
    }
    @media only screen and (max-width:479px){
        .m11-hoverBlock .m11-hoverBlock-title{ font-size: 18px }
    }

</style>