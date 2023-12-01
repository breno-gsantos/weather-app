import Navbar from '@/components/Navbar/Navbar'
import NavbarInput from '@/components/Navbar/NavbarInput'
import TemperatureDetails from '@/components/TemperatureDetails'
import TimeAndLocation from '@/components/TimeAndLocation'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container mx-auto max-w-screen-md mt-4 py-5 px-32 shadow-xl shadow-muted-foreground bg-gradient-to-br from-background to-secondary'>
      <Navbar />
      <NavbarInput />
      <TimeAndLocation />
      <TemperatureDetails />
    </main>
  )
}
