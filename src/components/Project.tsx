import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  images: StaticImageData[];
  withBorderBottom?: boolean;
  isApp?: boolean;
}

const Project = ({
  title,
  description,
  url,
  images,
  withBorderBottom,
  isApp,
}: ProjectProps) => {
  const hasMultipleImages = images.length > 1;
  const imageWidthClassName = hasMultipleImages
    ? 'w-2/5'
    : isApp
      ? 'max-[414px]:w-2/5'
      : 'max-[414px]:w-full';
  const imageClassName = `h-[560px] object-contain transition-all duration-500 ease-[ease] hover:scale-105 max-[414px]:h-full max-[414px]:max-h-[260px] ${
    imageWidthClassName
  }`;

  return (
    <section
      className={withBorderBottom ? 'border-divider border-b pb-20' : undefined}
    >
      <article className="flex flex-col items-center">
        <h3 className="mt-[1em] mb-[1.6rem] text-center text-[2.5rem] font-normal">
          {title}
        </h3>
        <hr className="bg-separator mx-auto my-2 h-px w-[6%] border-0" />
        <p className="my-[1em] w-3/5 text-center text-[1.3rem] leading-[1.5em] max-[414px]:w-4/5 max-[414px]:text-left">
          {description}
        </p>
        <div className="flex w-full overflow-hidden text-center">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-5"
          >
            <>
              <Image src={images[0]} className={imageClassName} alt={title} />
              {hasMultipleImages && (
                <Image src={images[1]} className={imageClassName} alt="" />
              )}
            </>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Project;
