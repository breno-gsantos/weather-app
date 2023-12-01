import {FiSearch} from 'react-icons/fi';
import { IoLocationOutline } from "react-icons/io5";
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function NavbarInput(){
    return (
        <div className='flex justify-center my-6 gap-4'>
            <div className='flex w-3/4 items-center justify-center space-x-4'>
                <Input  placeholder='Search...' className='capitalize placeholder:lowercase' />
                <Button variant='ghost' size='icon' className='transition ease-out hover:scale-105'><FiSearch size={20} /></Button>
                <Button variant='ghost' size='icon' className='transition ease-out hover:scale-105'><IoLocationOutline size={20} /></Button>
            </div>
            <div className='flex w-1/4 items-center justify-center'>
                <Button name='metric' variant='ghost' size='sm' className='font-light text-xl'>ºC</Button>
                <span className='text-xl mx-1'>|</span>
                <Button name='imperial' variant='ghost' size='sm' className='font-light text-xl'>ºF</Button>
            </div>
        </div>
    )
}