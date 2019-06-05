module.exports = {
    lang: 'en-US',
    title: 'scrumpy/tiptap',
    base: '/docs/',
    themeConfig: {
        docsRepo: 'scrumpy/tiptap-docs',
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
                        'guide/usage',
                        'guide/styling',
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'guide/extensions',
                        'guide/commands',
                    ]
                },
            ],
        },
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'API Reference', link: '/api/' },
            { text: 'GitHub', link: 'https://github.com/scrumpy/tiptap' },
            { text: 'Examples', link: 'https://tiptap.scrumpy.io/' },
        ],
    },
}