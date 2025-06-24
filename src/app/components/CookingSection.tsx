import { Fragment } from 'react';
import Image from 'next/image';

import { CookingInterface, ContentfulImage } from '@/types/CookingInterface';

export const CookingSection = async ({items}: {items: CookingInterface[]}) => {
  return (
    <section className="cooking">
      {items.map((section: CookingInterface, index: number) => (
        <Fragment key={index}>
            <div className="cooking__images">
                {section.imgCollection.items.map(({ url, description = ''} : ContentfulImage, i: number) => (
                    <div key={i} className={`image image${i}`}>
                        <Image 
                          key={i} 
                          src={url} 
                          alt={description} 
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={i === 0}
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>    
                ))}
            </div> 
            <div className="cooking__text">
                <h2 className='text__title'>{section.title}</h2>
                <p className='text__paragraph'>{section.info}</p>
            </div> 
        </Fragment>    
      ))}
    </section>
  );
}
