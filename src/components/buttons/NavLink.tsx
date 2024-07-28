import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavLinkProps {
    path: string;
    icon: IconDefinition;
    text: string;
    currentPath: string;
    expanded: boolean;
}

export default function NavLink({ path, icon, text, currentPath, expanded }: NavLinkProps) {
    return (
        <a
            href={path}
            className={`w-full flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg rounded-r-none 
                ${currentPath === path ? 'border-r-2 border-primary' : ''}
                ${expanded ? "justify-start" : "justify-center"} 
            `}
        >
            <FontAwesomeIcon icon={icon} className={`text-xl 
                ${currentPath === path ? 'text-primary' : 'text-slate-400'}`} />
            <span className={`text-lg
                ${expanded ? "" : "hidden"}
                ${currentPath == path ? "text-primary" : ''
                }`}>{text}</span>
        </a>
    );
};
