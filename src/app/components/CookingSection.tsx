import { Fragment } from 'react';
import Image from 'next/image';

import { CookingInterface, ContentfulImage } from '@/types/CookingInterface';

export const CookingSection = async ({items}: {items: CookingInterface[]}) => {
  return (
    <section 
      className="cooking" 
      aria-labelledby="cooking-section-title"
      aria-describedby="cooking-section-description"
    >
      <header className="sr-only">
        <h1 id="cooking-section-title">Culinary Masterpieces</h1>
        <p id="cooking-section-description">Explore our featured cooking sections with beautiful imagery and detailed descriptions</p>
      </header>
      {items.map((section: CookingInterface, index: number) => (
        <article 
          key={index} 
          className="cooking-item"
          aria-labelledby={`cooking-title-${index}`}
          aria-describedby={`cooking-description-${index}`}
        >
            <div 
              className="cooking__images" 
              role="group" 
              aria-label={`Image gallery for ${section.title}`}
              aria-describedby={`cooking-images-description-${index}`}
            >
                <div className="sr-only" id={`cooking-images-description-${index}`}>
                  Gallery containing {section.imgCollection.items.length} images related to {section.title}
                </div>
                {section.imgCollection.items.map(({ url, description = ''} : ContentfulImage, i: number) => (
                    <figure 
                      key={i} 
                      className={`image image${i}`}
                      aria-labelledby={`image-caption-${index}-${i}`}
                    >
                        <Image 
                          key={i} 
                          src={url} 
                          alt={description || `${section.title} - Image ${i + 1} of ${section.imgCollection.items.length}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={i === 0}
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                        {description && (
                          <figcaption 
                            id={`image-caption-${index}-${i}`}
                            className="sr-only"
                          >
                            {description}
                          </figcaption>
                        )}
                    </figure>    
                ))}
            </div> 
            <div 
              className="cooking__text"
              role="region"
              aria-labelledby={`cooking-title-${index}`}
            >
                <h2 
                  id={`cooking-title-${index}`}
                  className='text__title text__title--left'
                >
                  {section.title}
                </h2>
                <p 
                  id={`cooking-description-${index}`}
                  className='text__paragraph'
                >
                  {section.info}
                </p>
            </div> 
        </article>    
      ))}
    </section>
  );
}
