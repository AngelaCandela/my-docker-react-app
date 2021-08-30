import React from "react";

const usePageBottom = () => {
    useEffect(() => {
        const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    }, []);
}

export default usePageBottom;