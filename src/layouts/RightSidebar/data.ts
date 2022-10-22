interface Menu {
    title: string
    description: string
    link: string
    background_color: string
    color: string
}

const menus: Menu[] = [
    {
        title: 'Explore',
        description: 'Explore the best places deals',
        link:'explore',
        background_color: 'primary',
        color: 'white'
    },
    {
        title: 'Stories',
        description: 'Our cutomer and company stories',
        link:'stories',
        background_color: 'orange',
        color: 'white'
    },
    {
        title: 'About',
        description: 'Our Company history',
        link:'about',
        background_color: 'light',
        color: 'primary'
    },
    {
        title: 'Help',
        description: 'FAQ and support',
        link:'help',
        background_color: 'purple',
        color: 'white'
    }
]

export {menus}