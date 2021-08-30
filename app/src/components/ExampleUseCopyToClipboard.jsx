import React, { useRef } from 'react';
import useCopyToClipboard from "./lib/useCopyToClipBoard";

const CopyButton = ({ code }) => {
    const [isCopied, handleCopy] = useCopyToClipboard();

    return (
        <button onClick={() => handleCopy(code)}>
            {isCopied ? 'Code Copied!' : 'Copy Code'}
        </button>
    );
};


const AppUseCopyToClipboard = () => {
    
    const code = "The text to copy";
    const textareaRef = useRef();

    return (
        <>
            <textarea ref={textareaRef} cols="30" rows="10">{code}</textarea>
            <CopyButton code={textareaRef} />
        </>
    )
}

export default AppUseCopyToClipboard;