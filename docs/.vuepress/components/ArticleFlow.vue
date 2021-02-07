<template>
    <ul class='time-line'>
        <span class="line-list-count">共{{articleList.length}}篇</span>
        <li class='timeline-stone is-completed' v-for="(art,art_index) in articleList" :key="'art_'+art_index">
            <div class='list-content'>
                <div style="flex-grow: 1;"><a class='title' :href="art.href">{{art.index+'_'+art.title}}</a></div>
                <span class="timeLabel">Last Updated:&nbsp;&nbsp;</span><span class='time'> {{art.lastUpdated}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ArticleFlow",
        computed: {
            articleList () {
                let pages = [];
                let base = this.$site.base;
                this.$site.pages.forEach((item)=>{
                    if(item.path.indexOf('/FAQ/Console/')>-1&&item.title!='FAQ-求索 #'){
                        pages.push({
                            index:item.title.split('_')[0],
                            title:item.title.split('_')[1],
                            href:base.substring(0, base.length - 1)+item.path,
                            lastUpdated:item.lastUpdated
                        })
                    }
                });
                pages.sort((a,b)=>{
                    let va = a.index;
                    va = va.substr(1);
                    let vb = b.index;
                    vb = vb.substr(1);
                    return Number(vb)-Number(va)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
.time-line {
    list-style: none;
    margin: 2rem auto;
    position: relative;
    --darkLine:#eaeaea;
    --lightText:#aaa;
    --darkText:#666666;
    --hoverText:#3eaf7c;
    .line-list-count {
        text-align: center;
        position: absolute;
        left: 1rem;
        font-weight: bold;
        color: var(--hoverText);
        top: -1rem;
    }
    .list-content {
        display: flex;
        border-bottom : .1rem solid #dfe2e5
        font-size: 12px;
        padding: 12px 10px 12px 0;
        margin-left: 10px;
        position: relative;
        bottom: -18px;
        .title {
            cursor :pointer;
            transition :.3ms ease-in-out
            color:var(--darkText);
            &:hover{
                color:var(--hoverText);
            }
        }
        .timeLabel {
            font-weight: 500;
            color: #4e6e8e;
        }
        .time {
            font-weight: 400;
            font-size: 12px;
            color: var(--lightText);
        }
    }

    .timeline-stone {
        border-left:  var(--darkLine) 1px solid;
        position: relative;
        margin-left: -23px;
        font-weight: 200;
        color: var(--darkText);

        &::before {
            content: '';
            width: 5px;
            height: 5px;
            background-color: var(--darkLine);
            border-radius: 50%;
            position: absolute;
            bottom: 0;
            left: -3px;
        }

        &.is-completed {
            border-left-color: var(--hoverText);
            z-index: 1;
            color: var(--darkText);
            font-weight: 600;

            &:first-child {
                border-left: transparent 1px solid;
            }

            &::before {
                width: 11px;
                height: 11px;
                background-color: var(--hoverText);
                opacity: 0.4;
                left: -6px;
                bottom: -5px;
            }

            &::after {
                content: '';
                width: 7px;
                height: 7px;
                border-radius: 50%;
                position: absolute;
                background-color: var(--hoverText);
                left: -4px;
                bottom: -3px;
            }
        }
    }
}

</style>