<template>
    <div class="row">
        <div class="single-member effect-6" v-for="user in userList">
            <div class="member-image">
                <img :src="_imageGetter(user)" alt="Member">
            </div>
            <div class="member-info">
                <h3><a class="member-link-name" target="_blank" :href="user.link">{{user.name}}</a></h3>
                <h5>{{user.job}}</h5>
                <p style="font-weight: bolder">{{user.desc}}</p>
                <div class="social-touch icon-colored">
                    <p>A tiny flower represents a chiliocosm, as a single tree covers the bodhi.</p>
                    <a class="link-btn" target="_blank" :href="user.link">👆</a>
                </div>
            </div>
            <div class="border-green"></div>
        </div>
    </div>
</template>

<script>
    import DEFAULT_IMG from '../public/img/logo-White.jpg'
    export default {
        name: "UserCard",
        data () {
          return {
              DEFAULT_IMG
          }
        },
        props:{
            userList:{
                type:Array,
                default:[]
            }
        },
        methods:{
            _imageGetter(user){
                if(user.img) return this.$withBase(user.img);
                return DEFAULT_IMG
            }
        }
    }
</script>

<style scoped>
    @import url('./resource/userCard/css/style.css');
    @import url('./resource/userCard/css/htmleaf-demo.css');
    .link-btn{
        color: #fff;
        transition: .3ms ease-in-out;
    }
    .link-btn:hover{
        font-size: 1.6rem;
        text-decoration: none !important;
    }
</style>