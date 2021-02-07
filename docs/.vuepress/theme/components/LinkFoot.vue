<template>
    <footer class="page-edit">
        <div
                class="edit-link"
                v-if="editLink"
        >
            <a
                    :href="editLink"
                    target="_blank"
                    rel="noopener noreferrer"
            >{{ editLinkText }}</a>
            <OutboundLink/>
        </div>

        <div
                class="last-updated"
                v-if="lastUpdated"
        >
            <span class="prefix">{{ lastUpdatedText }}: </span>
            <span class="time">{{ lastUpdated }}</span>
        </div>
    </footer>
</template>

<script>
    import { normalize,endingSlashRE ,outboundRE} from '../util'
    export default {
        name: "LinkFoot",
        computed: {
            lastUpdated () {
                return this.$page.lastUpdated
            },

            lastUpdatedText () {
                if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
                    return this.$themeLocaleConfig.lastUpdated
                }
                if (typeof this.$site.themeConfig.lastUpdated === 'string') {
                    return this.$site.themeConfig.lastUpdated
                }
                return 'Last Updated'
            },

            editLink () {
                if (this.$page.frontmatter.editLink === false) {
                    return
                }
                const {
                    repo,
                    editLinks,
                    docsDir = '',
                    docsBranch = 'master',
                    docsRepo = repo
                } = this.$site.themeConfig

                let path = normalize(this.$page.path)
                if (endingSlashRE.test(path)) {
                    path += 'README.md'
                } else {
                    path += '.md'
                }
                if (docsRepo && editLinks) {
                    return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
                }
            },

            editLinkText () {
                return (
                    this.$themeLocaleConfig.editLinkText ||
                    this.$site.themeConfig.editLinkText ||
                    `Edit this page`
                )
            }
        },
        methods:{
            createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
                const bitbucket = /bitbucket.org/
                if (bitbucket.test(repo)) {
                    const base = outboundRE.test(docsRepo)
                        ? docsRepo
                        : repo
                    return (
                        base.replace(endingSlashRE, '') +
                        `/${docsBranch}` +
                        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
                        path +
                        `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
                    )
                }

                const base = outboundRE.test(docsRepo)
                    ? docsRepo
                    : `https://github.com/${docsRepo}`

                return (
                    base.replace(endingSlashRE, '') +
                    `/edit/${docsBranch}` +
                    (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
                    path
                )
            }
        }
    }
</script>

<style scoped>

</style>