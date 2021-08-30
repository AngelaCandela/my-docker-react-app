import React, { useEffect } from "react";

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
        }
    }, []);

    return bottom;
}

export default usePageBottom;