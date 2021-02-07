<template>
    <SWUpdatePopup>
        <div   v-if="enabled"
                slot-scope="{ enabled, reload, message, buttonText }"
                class="my-sw-update-popup">
            <div class="vue">
                <span class="outer"></span>
                <span class="medium"></span>
                <span class="inner"></span>
            </div>
            <span class="my-sw-update-popup-text" v-for="(p,index) in message.split(',')" :key="index">{{p}}</span>
            <div @click="reload" class="my-sw-update-popup-btn">{{ buttonText }}</div>
        </div>
    </SWUpdatePopup>
</template>

<script>
    import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

    export default {
        name:'MySWUpdatePopup',
        components: { SWUpdatePopup },
        methods : {
            reload (e) {
                console.log(e);
            }
        }
    }
</script>

<style>
    .my-sw-update-popup {
        text-align: center;
        position: fixed;
        bottom: 20%;
        right: 2.5rem;
        /*background-color: #fff;*/
        /*border: 5px solid #3eaf7c;*/
        font-size: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(circle at center,lightgreen, white);
        --outer-w: 7.2rem;
        --outer-h: 6rem;
        --medium-w: 4.6rem;
        --medium-h: 4rem;
        --inner-w: 2.3rem;
        --inner-h: 2rem;
    }
    .my-sw-update-popup-text{
        margin: 1rem 0;
    }
    /* vue 图标动画 */
    .vue {
        width: var(--outer-w);
        height: var(--outer-h);
        font-size: 6px;
        display: flex;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    /* brand colors from https://brandcolors.net/b/vue-js */
    .vue .outer,
    .vue .medium,
    .vue .inner {
        position: absolute;
        border-style: solid;
        border-color: transparent;
        border-top-width: var(--h);
        border-top-color: var(--c);
        border-left-width: calc(var(--w) / 2);
        border-right-width: calc(var(--w) / 2);
        animation: in-and-out 3s linear infinite;
    }

    .vue .outer {
        --h: var(--outer-h);
        --w: var(--outer-w);
        --c: #42b883; /* aragon green */
    }

    .vue .medium {
        --h: var(--medium-h);
        --w: var(--medium-w);
        --c: #35495e; /* derk denim */
        animation-delay: 0.1s;
    }

    .vue .inner {
        --h: var(--inner-h);
        --w: var(--inner-w);
        --c: white;
        animation-delay: 0.2s;
    }

    @keyframes in-and-out {
        0%, 5% {
            top: -100%;
        }

        15%, 80% {
            top: 0;
            filter: opacity(1);
            transform: scale(1);
        }

        90%, 100% {
            top: 100%;
            filter: opacity(0);
            transform: scale(0);
        }
    }
    /* 按钮 动画*/
    .my-sw-update-popup-btn {
        background: linear-gradient(to right, #42b883, #35495e);
        color: white;
        --width: 120px;
        --height: calc(var(--width) / 3);
        width: var(--width);
        height: var(--height);
        text-align: center;
        line-height: var(--height);
        font-size: calc(var(--height) / 2.5);
        font-family: sans-serif;
        letter-spacing: 0.2em;
        border: 1px solid #42b883;
        border-radius: 2em;
        transform: perspective(500px) rotateY(-15deg);
        text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .my-sw-update-popup-btn:hover {
        transform: perspective(500px) rotateY(15deg);
        text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
        box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .my-sw-update-popup-btn::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, white, transparent);
        left: -100%;
        transition: 0.5s;
    }

    .my-sw-update-popup-btn:hover::before {
        left: 100%;
    }

</style>