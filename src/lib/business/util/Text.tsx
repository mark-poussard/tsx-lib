import React from 'react';

export const textToParagraphs = (text : string) => {
    return text.split(/\r?\n/).filter(s => s !== "").map(s => <p>{s}</p>);
}