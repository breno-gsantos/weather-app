import { Button } from "../ui/button"

const cities = [
    {
        title: 'Rio de Janeiro'
    },
    {
        title: 'Sydney'
    },
    {
        title: 'Cagliari'
    },
    {
        title: 'Seoul'
    },
    {
        title: 'London'
    },
]

export default function Navbar() {
    return (
        <nav className="flex items-center justify-around my-6">
            {cities.map(({title}, index) => (
                <Button key={index} size='lg' variant='ghost' className="text-lg font-medium">{title}</Button>
            ))}
        </nav>
    )
}