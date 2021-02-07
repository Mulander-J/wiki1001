<template>
    <div class="custom-fullPage-wrap">
        <div id="article">
            <div class="custom-fullPage-page section1 current">
                <div class="contain">
                    <div id="pageContain">
                        <!--    简述     -->
                        <div class="custom-fullPage-page page1 current">
                            <div class="contain">
                                <h3 class="title">The Brief <br> {{data_brief.mail}}</h3>
                                <img :src="$withBase(data_brief.image)" :title="data_brief.name" alt="userHead" class="page1-box">
                                <h4>{{data_brief.textLine}}</h4>
                            </div>
                        </div>
                        <!--    地域     -->
                        <div class="custom-fullPage-page page2">
                            <div class="contain">
                                <h3 class="title">Normal Life</h3>
                                <div class="page2-box">
                                    <div class="m11-hoverBtn from-left">&Education</div>
                                    <p>{{data_life.dateEdu}}<span style="color:#fff;margin: 0 1.1rem">{{data_life.eduShort}}</span>{{data_life.eduMajor}}	{{data_life.eduDegree}}</p>
                                    <div class="m11-hoverBtn from-right">&Region</div>
                                    <p> Born in {{data_life.geoBorn}}<span style="color:#fff;margin: 0 1.1rem">|</span>Study in {{data_life.geoCollege}}<span style="color:#fff;margin: 0 1.1rem">|</span>Live in {{data_life.geoLive}}</p>
                                    <div class="m11-hoverBtn from-left">&Work</div>
                                    <p> {{data_life.dateWork}} <span style="color:#fff;margin: 0 1.1rem">{{data_life.job}}</span>{{data_life.geoWork}}</p>
                                </div>
                            </div>
                        </div>
                        <!--    象牙塔     -->
                        <div v-if="data_ivory.length>0"  class="custom-fullPage-page page3">
                            <div class="contain">
                                <h3 class="title">Ivory Tower</h3>
                                <div  class="page3-box">
                                    <HoverBlock v-for="(ivory,ivoIndex) in data_ivory" :key="'ivory_'+ivoIndex" class="page3-hb" :data="ivory"/>
                                </div>
                                <p style="text-align: center;color:#fff;letter-spacing: 1rem">...</p>
                            </div>
                        </div>
                        <!--    技术栈     -->
                        <div v-if="data_skill.length>0" class="custom-fullPage-page page4">
                            <div class="contain">
                                <h3 class="title">Skill Stack</h3>
                                <div class="page4-box">
                                    <SkillTag v-for="(sol,index) in data_skill" :key="'m11_SkillTag_'+index" :url-obj="sol" ></SkillTag>
                                </div>
                            </div>
                        </div>
                        <!--    公益记录     -->
                        <div v-if="data_welfare.length>0" class="custom-fullPage-page page5">
                            <div class="contain">
                                <h3 class="title">Little Welfare</h3><br>
                                <div class="page5-box">
                                    <CakeCup v-for="(cake,cakeIndex) in data_welfare" :key="'cake_'+cakeIndex" :data="cake"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul id="navBar">
                        <li></li>
                        <li></li>
                        <li v-if="data_ivory.length>0"></li>
                        <li v-if="data_skill.length>0"></li>
                        <li v-if="data_welfare.length>0"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  {FullPage} from './fullpage/js/fullPage'
    import CakeCup from './../../components/CupCakeCard'
    import HoverBlock from './../../components/HoverBlock'
    import SkillTag from './../../components/SkillTag'

    const DEFAULT_BRIEF={
        name:'God',
        mail:'God@qq.com',
        sex:'Male',
        birYear:'1996',
        location:'Shanghai,China',
        textLine:'',
        image:'/img/logo.gif'
    };
    const DEFAULT_LIFE={
        dateEdu: '2014-2018',
        dateWork: '2018/10-now',
        geoBorn: 'WenZhou',
        geoCollege:'NanJing',
        geoLive:'Shanghai',
        geoWork:'Shanghai',
        eduShort: 'CUCN',
        eduMajor: 'CST',
        eduDegree: 'B.Eng',
        job: 'FontEnd Engineer'
    };

    export default {
        name: "Introduce",
        components:{CakeCup,HoverBlock,SkillTag},
        props:{
            pageMode:{
                type:String,
                default:''
            }
        },
        data () {
            return {
                data_brief:{
                    mail:'God@qq.com',
                    textLine:'',
                    name:'God',
                    sex:'Male',
                    birYear:'1996',
                    location:'Shanghai,China',
                    image:'/img/logo.gif'
                },
                data_life:{
                    dateEdu: '2014-2018',
                    dateWork: '2018/10-now',
                    geoBorn: 'WenZhou',
                    geoCollege:'NanJing',
                    geoLive:'Shanghai',
                    geoWork:'Shanghai',
                    eduShort: 'CUCN',
                    eduMajor: 'CST',
                    eduDegree: 'B.Eng',
                    job: 'FontEnd Engineer'
                },
                data_ivory:[],
                data_skill:[],
                data_welfare:[]
            }
        },
        created(){
            this.data_brief = {
                ...DEFAULT_BRIEF,
                ...this.$frontmatter.brief,
            };
            this.data_brief['textLine'] = [
                this.data_brief.name,
                this.data_brief.sex,
                this.data_brief.birYear,
                this.data_brief.location,
            ].join(',');
            this.data_life = {
                ...DEFAULT_LIFE,
                ...this.$frontmatter.life,
            };
            this.data_ivory = this.$frontmatter.ivoryList.map(e=>{
                e.image = this.$withBase(e.image);
                return e
            });
            this.data_skill = [...this.$frontmatter.skillList];
            this.data_welfare = this.$frontmatter.welfareList.map(e=>{
                e.picSrc = this.$withBase(e.picSrc);
                return e
            });
        },
        mounted() {
            this.initFullPages();
        },
        methods:{
            initFullPages () {
                var runPage,
                    interval,
                    autoPlay;

                autoPlay = function(to) {
                    clearTimeout(interval);
                    interval = setTimeout(function() {
                        runPage.go(to);
                    }, 100000);
                };

                runPage = new FullPage({
                    id : 'pageContain',                            // id of contain
                    slideTime : 800,                               // time of slide
                    effect : {                                     // slide effect
                        transform : {
                            translate : 'X',					   // 'X'|'Y'|'XY'|'none'
                            scale : [0, 1],					   // [scalefrom, scaleto]
                            rotate : [60, 0]					   // [rotatefrom, rotateto]
                        },
                        opacity : [0, 1]                           // [opacityfrom, opacityto]
                    },
                    mode : 'touch,nav:navBar',               // mode of fullpage
                    easing : [0, .93, .39, .98],                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
                    callback : function(index, thisPage) {     // callback when pageChange
                        index = index + 1 > 4 ? 0 : index + 1;
                        autoPlay(index);
                    }
                });

                interval = setTimeout(function() {
                    runPage.go(runPage.thisPage() + 1);
                }, 100000);
            }
        }
    }
</script>

<style scoped>
    @import "./fullpage/css/hoverBtn.css";

    .page3-hb{
        width: 50%;
    }

    .custom-fullPage-wrap{
        width: 100vw;
        height: 100vh;
        position: fixed;
    }
    #pageContain {
        overflow: hidden;
    }
    .custom-fullPage-page {
        box-shadow: 1px 1px 4px 0 #000;
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .contain {
        width: 100%;
        height: 100%;
        display: none;
        position: relative;
        z-index: 0;
        padding-top: 3.6rem;
    }
    .current .contain,.slide .contain {
        display: block;
    }
    .current {
        display: block;
        z-index: 1;
    }
    .slide {
        display: block;
        z-index: 2;
    }
    .swipe {
        display: block;
        z-index: 3;
        transition-duration: 0ms !important;
        -webkit-transition-duration: 0ms !important;
    }
    .page1 {
        background: #ffffff;
    }
    .page2 {
        background: #96B7C4;
    }
    .page3 {
        background: #000000;
    }
    .page4 {
        background: linear-gradient(45deg, #f64f59, #c471ed, #12c2e9);
    }
    .page5 {
        background: #42b983;
    }
    .section1 {
        background: #fff;
    }
    #navBar {
        z-index: 3;
        position: absolute;
        font-size: 0px;
        line-height: 0;
        bottom: 80px;
        text-align: center;
        width: 200px;
        left: 50%;
        margin-left: -100px;
        background: #FFF;
        padding: 0.5rem;
        border-radius: 8px;
    }
    #navBar .active {
        background: #ccc;
    }
    #navBar li {
        background: transparent;
        border: 2px solid #000;
        display: inline-block;
        font-size: 0px;
        margin: 0 4px;
        *float: left;
        *zoom:1;
        cursor: pointer;
        transition: all .7s ease;
        border-radius: 50%;
        line-height: 10px;
        text-align: center;
        width: 10px;
        height: 10px;
    }
    .nav {
        z-index: 5;
        position: fixed;
        _position:absolute;
        box-shadow: 0 2px 10px 0px #000;
        background: #fff;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        line-height: 70px;
    }
    .nav a {
        line-height: 70px;
        transition:all .4s ease;
        color: #333;
    }
    .nav a:hover {
        text-shadow:1px 1px 3px #000;
    }
    .nav h1 {
        line-height: 70px;
        float: left;
    }
    .nav span {
        position: absolute;
        left: 80px;
        top: 0;
    }
    .nav h1 p {
        display: none;
    }
    .nav li {
        display: inline;
        float: right;
        margin: 0 22px;
        cursor: pointer;
    }
    .title {
        -webkit-animation:dragTop .7s ease-in-out both;
        -moz-animation:dragTop .7s ease-in-out both;
        -ms-animation:dragTop .7s ease-in-out both;
        animation:dragTop .7s ease-in-out both;
        position: absolute;
        text-align: center;
        /*top: 13%;*/
        left: 50%;
        -webkit-animation-delay: .8s;
        -moz-animation-delay:.8s;
        -ms-animation-delay:.8s;
        animation-delay:.8s;
        width: 500px;
        line-height: 60px;
        height: 60px;
        font-weight: normal;
        letter-spacing: 8px;
        font-size: 40px;
        margin-left: -250px;
    }
    .page2 .title,.page3 .title,.page4 .title,.page5 .title,.page4 .title{
        color:#fff
    }
    .page1 title{
        color:#000
    }
    .page1 h4 {
        font-size: 24px;
        color: #000;
        text-align: center;
        position: absolute;
        bottom: 180px;
        width: 100%;
        -webkit-animation:scaleIn .6s ease 2s both;
        -moz-animation:scaleIn .6s ease 2s both;
        -ms-animation:scaleIn .6s ease 2s both;
        animation:scaleIn .6s ease 2s both;
    }
    .page1-box,.page2-box{
        text-align: center;
        position: absolute;
        top: 45%;
        left: 50%;
        -webkit-animation:scaleAll .7s ease-in-out 1.6s both;
        -moz-animation:scaleAll .7s ease-in-out 1.6s both;
        -ms-animation:scaleAll .7s ease-in-out 1.6s both;
        animation:scaleAll .7s ease-in-out 1.6s both;
    }
    .page1-box {
        margin-left: -182px;
        margin-top: -150px;
        width: 365px;
        height: 347px;
    }
    .page2-box {
        margin-left: -366px;
        margin-top:-10rem;
        width: 733px;
        height: 302px;
    }
    .page3-box {
        width: 100%;
        height: 50%;
        overflow: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 9rem;
        -webkit-animation:scaleAll .7s ease-in-out 1.6s both;
        -moz-animation:scaleAll .7s ease-in-out 1.6s both;
        -ms-animation:scaleAll .7s ease-in-out 1.6s both;
        animation:scaleAll .7s ease-in-out 1.6s both;
    }
    .page4-box {
        -webkit-animation:scaleAll .7s ease-in-out 1.6s both;
        -moz-animation:scaleAll .7s ease-in-out 1.6s both;
        -ms-animation:scaleAll .7s ease-in-out 1.6s both;
        animation:scaleAll .7s ease-in-out 1.6s both;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 10rem;
        padding-bottom: 1rem;
        position: relative;
        width: 35vw;
        margin: 0 auto;
        flex-wrap: wrap;
    }
    .page5-box {
        -webkit-animation:scaleAll .7s ease-in-out 1.6s both;
        -moz-animation:scaleAll .7s ease-in-out 1.6s both;
        -ms-animation:scaleAll .7s ease-in-out 1.6s both;
        animation:scaleAll .7s ease-in-out 1.6s both;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 73vh;
        flex-wrap: wrap;
        overflow: auto;
        margin-top: 6rem;
        padding: 0 2rem 1rem 2rem;
    }

    .section1 .contain {
        display: block !important;
    }

    @media screen and (max-width: 680px) {
        .nav ul {
            display: none;
        }
        .nav span {
            font-size: 22px;
        }
        .page1 p {
            font-size: 14px;
        }
        #next,#prev {
            display: none;
        }
        .page1-box {
            margin-left: -91px;
            margin-top: -90px;
            width: 182px;
            height: 173px;
        }
        .title {
            font-size: 30px;
            letter-spacing: 2px;
        }
    }

    @keyframes dragTop {
        0% {
            opacity:0;
            transform:translateY(-70px)
        }
        60% {
            opacity:1;
            transform:translateY(20px)
        }
        90% {
            transform:translateY(-5px)
        }
        97% {
            transform:translateY(-1px)
        }
        100% {
            transform:translateY(0px)
        }
    }
    @-webkit-keyframes dragTop {
        0% {
            opacity:0;
            -webkit-transform:translateY(-70px)
        }
        60% {
            opacity:1;
            -webkit-transform:translateY(20px)
        }
        90% {
            -webkit-transform:translateY(-5px)
        }
        97% {
            -webkit-transform:translateY(-1px)
        }
        100% {
            -webkit-transform:translateY(0px)
        }
    }
    @-moz-keyframes dragTop {
        0% {
            opacity:0;
            -moz-transform:translateY(-70px)
        }
        60% {
            opacity:1;
            -moz-transform:translateY(20px)
        }
        90% {
            -moz-transform:translateY(-5px)
        }
        97% {
            -moz-transform:translateY(-1px)
        }
        100% {
            -moz-transform:translateY(0px)
        }
    }
    @-ms-keyframes dragTop {
        0% {
            opacity:0;
            -ms-transform:translateY(-70px)
        }
        60% {
            opacity:1;
            -ms-transform:translateY(20px)
        }
        90% {
            -ms-transform:translateY(-5px)
        }
        97% {
            -ms-transform:translateY(-1px)
        }
        100% {
            -ms-transform:translateY(0px)
        }
    }
    @keyframes scaleAll {
        0% {
            opacity: 0;
            transform: scale(0) rotate(30deg);
        }
        30% {
            opacity: 1;
        }
        100% {
            transform: scale(1) rotate(0);
        }
    }
    @-webkit-keyframes scaleAll {
        0% {
            opacity: 0;
            -webkit-transform: scale(0) rotate(30deg);
        }
        30% {
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1) rotate(0);
        }
    }
    @-moz-keyframes scaleAll {
        0% {
            opacity: 0;
            -moz-transform: scale(0) rotate(30deg);
        }
        30% {
            opacity: 1;
        }
        100% {
            -moz-transform: scale(1) rotate(0);
        }
    }
    @-ms-keyframes scaleAll {
        0% {
            opacity: 0;
            -ms-transform: scale(0) rotate(30deg);
        }
        100% {
            opacity: 1;
            -ms-transform: scale(1) rotate(0);
        }
    }
    @keyframes scaleIn {
        0% {
            opacity: 0;
            transform: scale(3);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @-webkit-keyframes scaleIn {
        0% {
            opacity: 0;
            -webkit-transform: scale(3);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
        }
    }
    @-moz-keyframes scaleIn {
        0% {
            opacity: 0;
            transform: scale(3);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @-ms-keyframes scaleIn {
        0% {
            opacity: 0;
            -ms-transform: scale(3);
        }
        100% {
            opacity: 1;
            -ms-transform: scale(1);
        }
    }
</style>
