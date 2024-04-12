export type News = {
    id: number,
    title: string,
    image: string,
    description: string,
    date: string,
}
export type Course = {
    id: number,
    title: string,
    image: string,
    description: string,
    techo: string[],
    teacher: string,
    duration: number,
    price: number,
}
export type Teacher = {
    id: number,
    name: string,
    firstName: string,
    age: number,
    techno: string[],
    experience: string[]
}
