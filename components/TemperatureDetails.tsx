import Image from "next/image";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import { FiWind } from "react-icons/fi";

const details = [
    {
        icon: FaTemperatureHigh ,
        label: 'Real fell: ',
        number: '18º'
    },
    {
        icon: BsDropletFill ,
        label: 'Humidity: ',
        number: '43%'
    },
    {
        icon: FiWind ,
        label: 'Wind: ',
        number: '3 km/h'
    }
]

export default function TemperatureDetails() {
    return (
        <>
            <h1 className="flex items-center justify-center py-6 text-xl text-primary">Clear</h1>
            <div className="flex items-center justify-between py-3">
                <Image src='https://openweathermap.org/img/wn/01d@2x.png' alt="" width={80} height={20} />
                <p className="text-5xl">34º</p>
                <div className="flex flex-col space-y-2">
                        {details.map(({icon: Icon, label, number}, index) => (
                            <div key={index} className="flex font-light text-sm items-center justify-center gap-2">
                                <Icon /> {label} <span className="font-medium">{number}</span>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}