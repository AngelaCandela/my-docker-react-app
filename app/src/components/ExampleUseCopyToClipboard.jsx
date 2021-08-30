import React from 'react';
import useCopyToClipboard from "./lib/useCopyToClipBoard";

const CopyButton = ({ code }) => {
    const [isCopied, handleCopy] = useCopyToClipboard();

    return (
        <button onClick={() => handleCopy(code)}>
            {isCopied ? 'Code Copied!' : 'Copy Code'}
        </button>
    );
};

const code = "The text to copy";

const AppUseCopyToClipboard = () => {
    return (
        <>
            <textarea cols="30" rows="10">{code}</textarea>
            <CopyButton code={code} />
        </>
    )
}