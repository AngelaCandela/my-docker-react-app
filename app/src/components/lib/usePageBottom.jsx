import { useEffect, useState } from "react";

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
            setBottom(isBottom);
        }
        window.addEventListener("mousewheel", handleScroll);
        return () => {
            window.removeEventListener("mousewheel", handleScroll);
        };
    }, []);

    return bottom;
}

export default usePageBottom;