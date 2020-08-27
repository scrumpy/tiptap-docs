module.exports = {
    lang: 'en-US',
    title: 'ueberdosis/tiptap',
    base: '/docs/',
    themeConfig: {
        docsRepo: 'ueberdosis/tiptap-docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        search: true,
        sidebar: {
            '/api/': [
                {
                    title: 'API Reference',
                    collapsable: false,
                    children: [
                        '',
                        'classes',
                        'components',
                        'extensions',
                    ]
                },
            ],
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        '',
                        'guide/installation',
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'guide/editor',
                        'guide/extensions',
                        'guide/commands',
                        'guide/menus',
                        'guide/events',
                        'guide/renderless',
                    ]
                },
            ],
        },
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'API Reference', link: '/api/' },
            { text: 'GitHub', link: 'https://github.com/ueberdosis/tiptap' },
            { text: 'Examples', link: 'https://tiptap.dev/' },
        ],
    },
}