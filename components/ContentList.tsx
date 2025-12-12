"use client"

import Link from 'next/link';
import slugify from 'slugify';
import Image from 'next/image';
import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
// Custom tooltip that follows the cursor for image preview
function CursorTooltip({ image, alt, children }: { image: string, alt: string, children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
    >
      {children}
      {show && image && (
        <div
          style={{
            position: 'fixed',
            top: coords.y + 20,
            left: coords.x + 20,
            zIndex: 1000,
            pointerEvents: 'none',
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: 8,
            width: 220,
            maxWidth: '90vw',
          }}
        >
          <Image
            src={image}
            alt={alt}
            width={200}
            height={120}
            style={{ borderRadius: 6, width: '100%', height: 'auto' }}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNlZWUiLz48L3N2Zz4="
          />
        </div>
      )}
    </span>
  );
  // End of CursorTooltip
}

export interface ContentListItem {
  title: string;
  slug: string;
  description?: string;
  date: string;
  tags?: string[];
  type?: string;
  url?: string;
  image?: string;
}

interface ContentListProps {
  content: ContentListItem[];
  type?: boolean;
  areExternalLinks?: boolean;
}

export function ContentList({ content, type = false, areExternalLinks = false }: ContentListProps) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <div className="space-y-6 relative z-30">
        {content.map((item) => {
          const workType = item.type;
          const workLink = workType === 'project' && item.url ? item.url : `/${item.slug}`;
          const linkProps = areExternalLinks ? { target: '_blank' as const } : {};
          if (item.image) {
            return (
              <CursorTooltip image={item.image ?? ''} alt={item.title} key={item.slug}>
                <Link
                  href={workLink}
                  {...linkProps}
                  className="transition duration-200 ease-in-out p-4 rounded-[5px] flex flex-col md:flex-row md:items-center flex-wrap justify-between relative hover:bg-white/10 cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={item.title}
                >
                  {/* Date on top for mobile only */}
                  <div className="block md:hidden text-white text-lg mb-1 font-light">{item.date.match(/\d{4}/)?.[0]}</div>
                  <div className=" flex-1 md:max-w-full flex flex-col">
                    <span className="text-xl font-medium text-white border-b-0 hover:underline ">
                      {item.title}
                    </span>
                    {item.description && (
                      <div className="text-gray-400 text-lg font-normal border-b-0 block py-2">
                        {item.description}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2 items-center">
                      {type && workType && (
                        <span
                          className="capitalize px-2 py-1 rounded-full text-xs font-semibold bg-white/80 text-black"
                        >
                          {workType}
                        </span>
                      )}
                      {item.tags?.sort().map((tag) => {
                        return (
                          <Link
                            href={`/tags/${slugify(tag, { lower: true, strict: true })}`}
                            key={tag}
                            className="px-2 py-1 rounded-full text-xs bg-white/20 text-white hover:bg-white hover:text-black transition-colors font-semibold"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {tag}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  {/* Date on the right for desktop only */}
                  <div className="hidden md:block md:text-right md:mt-0 md:w-40 text-gray-500 text-sm max-w-[30%] md:max-w-full pt-4 pb-2">
                    {item.date}
                  </div>
                </Link>
              </CursorTooltip>
            );
          } else {
            return (
              <div
                className="transition duration-200 ease-in-out p-4 rounded-[5px] flex flex-col md:flex-row md:items-center flex-wrap justify-between relative hover:bg-white/10 cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={item.title}
                key={item.slug}
              >
                {/* Date on top for mobile only */}
                <div className="block md:hidden text-white text-lg mb-1 font-light">{item.date.match(/\d{4}/)?.[0]}</div>
                <div className=" flex-1 md:max-w-full flex flex-col">
                  <Link
                    href={workLink}
                    {...linkProps}
                    className="text-xl font-medium text-white border-b-0 hover:underline "
                  >
                    {item.title}
                  </Link>
                  {item.description && (
                    <div className="text-gray-400 text-lg font-normal border-b-0 block py-2">
                      {item.description}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2 items-center">
                    {type && workType && (
                      <span
                        className="capitalize px-2 py-1 rounded-full text-xs font-semibold bg-white/80 text-black"
                      >
                        {workType}
                      </span>
                    )}
                    {item.tags?.sort().map((tag) => {
                      return (
                        <Link
                          href={`/tags/${slugify(tag, { lower: true, strict: true })}`}
                          key={tag}
                          className="px-2 py-1 rounded-full text-xs bg-white/20 text-white hover:bg-white hover:text-black transition-colors font-semibold"
                        >
                          {tag}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* Date on the right for desktop only */}
                <div className="hidden md:block md:text-right md:mt-0 md:w-40 text-gray-500 text-sm max-w-[30%] md:max-w-full pt-4 pb-2">
                  {item.date}
                </div>
              </div>
            );
          }
        })}
      </div>
    </Tooltip.Provider>
  );
}
