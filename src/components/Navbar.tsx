import ViewStreamIcon from '@mui/icons-material/ViewStream';
import NavbarButtons from './subComponents/NavbarButtons';

const Navbar = () => {
    return (
        <div className='w-full sticky top-0 z-10 '>
            <div className='block lg:hidden w-full  lg:px-3 py-3 bg-inherit'>
                <ViewStreamIcon />
            </div>
            <div className=' justify-between items-center w-full p-3 text-base mx-auto hidden lg:flex'>
                <div className='flex gap-6 justify-center items-center'>
                    <NavbarButtons text="SPRING 25" />
                    <NavbarButtons text="MEN" />
                    <NavbarButtons text="WOMEN" />
                    <NavbarButtons text="GIFTS" />
                </div>
                <div className='flex gap-6 justify-center items-center'>
                    <NavbarButtons text="EXPLORE" />
                    <NavbarButtons text="CLIENT SERVICES" />
                    <NavbarButtons text="LOGIN" />

                </div>
            </div>
        </div>
    )
}

export default Navbar
