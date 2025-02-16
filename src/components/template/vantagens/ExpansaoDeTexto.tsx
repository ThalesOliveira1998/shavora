import React, { useState } from 'react';

interface ExpandableTextProps {
    text: string;
    maxWords: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxWords }) => {
    const words = text.split(' ');
    const [isExpanded, setIsExpanded] = useState(false);

    // Caso o texto tenha mais palavras do que o limite
    const truncatedText = words.slice(0, maxWords).join(' ');
    const fullText = words.join(' ');

    return (
        <div>
            <p>{isExpanded ? fullText : `${truncatedText}...`}</p>
            {words.length > maxWords && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 mt-2"
                >
                    {isExpanded ? 'Ler menos' : 'Ler mais'}
                </button>
            )}
        </div>
    );
};

export default ExpandableText;
