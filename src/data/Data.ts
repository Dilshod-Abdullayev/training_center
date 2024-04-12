type NavItem = {
    id: number,
    title: string,
    path: string
}
export const items: NavItem[] = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Course',
        path: '/course'
    },
    {
        id: 3,
        title: 'Info',
        path: '/info'
    },
    {
        id: 4,
        title: 'Blog',
        path: '/blog'
    }
]