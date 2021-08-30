import { useState } from "react";
import copy from "copy-text-to-clipboard";

const useCopyToClipboard = () => {
    const [isCopied, setCopied] = useState(false);

    const handleCopy = (text) => {
        if (typeof text === "string" || typeof text === "number") {
            copy(text.toString());
            setCopied(true);
        } else {
            setCopied(false);
            console.error(
                `Cannot copy typeof ${typeof text} to clipboard, must be a string o number`
            );
        }
    }
    return [isCopied, handleCopy];
}

export default useCopyToClipboard;