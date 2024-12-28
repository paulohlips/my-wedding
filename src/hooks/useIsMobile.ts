import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize state with current screen width

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth); // Update screen width on resize
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check when the component mounts

        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array ensures this effect runs once on mount

    // Update the isMobile state based on the screen width
    useEffect(() => {
        if (screenWidth >= 900) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, [screenWidth]); // Recalculate whenever screenWidth changes
    console.log({ isMobile })
    return isMobile;
};
