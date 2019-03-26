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
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started/installation',
                        'getting-started/usage',
                    ]
                },
                {
                    title: 'Styling',
                    collapsable: false,
                    children: [
                        'styling/basics',
                    ]
                },
                {
                    title: 'Extensions',
                    collapsable: false,
                    children: [
                        'extensions/basics.md',
                        'extensions/built-in.md'
                    ]
                },
                {
                    title: 'API',
                    collapsable: false,
                    children: [
                        'api/classes',
                        'api/components',
                        'api/plugins'
                    ]
                }
            ],
        },
        nav: [
            { text: 'GitHub', link: 'https://github.com/scrumpy/tiptap' },
            { text: 'Examples', link: 'https://tiptap.scrumpy.io/' },
        ],
    },
}