import React, { useState } from "react";

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    }, []);

    return bottom;
}

export default usePageBottom;