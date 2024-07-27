import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbsProps {
  items: { text: string; link: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div id="breadcrumbs" className="w-full h-4 flex justify-start items-center gap-4 py-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            href={item.link}
            className={`text-sm text-white ${index === items.length - 1 ? 'underline' : ''}`}>
            {item.text}
          </Link>
          {index < items.length - 1 && (
            <FontAwesomeIcon icon={faChevronRight} className="text-sm text-white" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;