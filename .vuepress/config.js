module.exports = {
    lang: 'en-US',
    title: 'scrumpy/tiptap',
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
            ],
        },
        nav: [
            { text: 'GitHub', link: 'https://github.com/scrumpy/tiptap' },
            { text: 'Examples', link: 'https://tiptap.scrumpy.io/' },
        ],
    },
}