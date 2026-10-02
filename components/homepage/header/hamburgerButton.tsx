import { ToggleMenu } from "@/lib/definitions";

export default function HamburgerButton({
    toggleMenu
}: ToggleMenu) {

    return (
        <div 
            id="hamburger-button"
            className="w-[2rem] h-[2rem] flex justify-around flex-col flex-nowrap z-10 md:hidden"
                    
            onClick={toggleMenu}
            >
            <div 
                id="burger"
                className="w-[2rem] h-[0.25rem] rounded-[10px] bg-black origin-[1px] transition-all transition-[0.3s]"
                        
                />
            <div 
                id="burger"
                className="w-[2rem] h-[0.25rem] rounded-[10px] bg-black origin-[1px] transition-all transition-[0.3s]"
                />
            <div 
                id="burger"
                className="w-[2rem] h-[0.25rem] rounded-[10px] bg-black origin-[1px] transition-all transition-[0.3s]"
                />
        </div>
    );
}