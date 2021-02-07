<template>
    <a :href="urlObj.link||'javascript:void(0);'" rel="nofollow">
        <img :src="'https://img.shields.io/badge/'+urlObj.left+'-'+urlObj.right+'25-'+urlObj.color+'.svg'" style="max-width:100%;"></a>
</template>

<script>
    export default {
        name: "SkillTag",
        props:{
            urlObj:{
                type:Object,
                default:()=>{
                    return {
                        left:'Vue.js',
                        right:'40%',
                        color:'brightgreen',
                        link:'javascript:void(0);',
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>