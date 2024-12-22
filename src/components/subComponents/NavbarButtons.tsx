

const NavbarButtons = ({ text }: { text: string }) => {
    return (
        <div className="underlineParent cursor-pointer relative">
            {text}
            <span className='underAnimation1 underAnimation'></span>
            <span className='underAnimation2 underAnimation'></span>
        </div>
    )
}

export default NavbarButtons
