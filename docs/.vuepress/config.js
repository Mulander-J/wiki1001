module.exports = {
    title: 'Wiki 1001',
    description: '博客描述',
    //  指定 vuepress build 的输出目录
    dest:'./dist',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/wiki1001/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }],
        ['@vuepress/google-analytics', {
            ga: '**-*********-*'
        }],
        ['@vuepress/medium-zoom', true]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/Mulander-J/wiki1001.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/Mulander-J/wiki1001',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: 'Git EditLink [Private]',
        // 文档更新时间：每个文件git最后提交的时间,
        lastUpdated: 'Last Updated' ,
        // 侧边栏搜索深度
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        nav:[
            { text: 'Wiki', link: '/Links/Wiki/' },
            { text: 'Devil', link: '/Links/Devil/' },
            { text: 'FAQ', link: '/FAQ/Console/A000' },
            { text: 'Thought', link: '/Thought/' },
            {
                text: 'Another',
                items: [
                    { text: 'AboutMe', link: '/Another/MySelf' },
                    { text: 'Fillory', link: '/Another/Fillory' },
                    { text: 'Review', link: '/Another/Review' },
                ]
            },
        ],
        sidebar:{
            '/FAQ/':[
                {
                    title: 'Console',
                    children: [
                        ['/FAQ/Console/A000','#FAQ1000'],
                        ['/FAQ/Console/A001','#A001_VuePress_1'],
                        ['/FAQ/Console/A002','#A002_VuePress_2']
                    ]
                },
                {
                    title: 'Digest',
                    children: [
                        ['/FAQ/DigestionHeap/DigestWill','#DigestWill'],
                        ['/FAQ/DigestionHeap/Digesting','#Digesting'],
                        ['/FAQ/DigestionHeap/Digested','#Digested'],
                        ['/FAQ/DigestionHeap/D001','#D001_node内存溢出'],
                    ]
                }
            ],
            '/Thought/':[
                ['','Thought'],
                {
                    title: '断章取义',
                    children: [
                        ['/Thought/TheWord/Les_Confessions','#《忏悔录》']
                    ]
                },
            ],
            '/Another/':[
                ['/Another/Fillory','#Fillory'],
                ['/Another/Review','#Review']
            ]
        }
    }
};

