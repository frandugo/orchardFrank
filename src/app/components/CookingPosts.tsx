import Image from 'next/image';

import { CookingPostInterface } from '@/types/CookingInterface';
import { extractTextFromRichText } from '@/helpers/richText'

export const CookingPosts = async ({items}: {items: CookingPostInterface[]}) => {
  return (
    <section className="cooking-posts">
      <h2 className="cooking-posts__title">Taste the colours</h2>
      <div className="cooking-posts__grid">
        {items.map((post: CookingPostInterface, index: number) => (
          <article key={index} className="cooking-post">
            <div className="cooking-post__image">
              {post.image && (
                <Image 
                  src={post.image.url} 
                  alt={post.image.description || post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 2}
                />
              )}
            </div> 
            <div className="cooking-post__content">
              <h3 className="cooking-post__title">{post.title}</h3>
              <p className="cooking-post__excerpt">
                {extractTextFromRichText(post.description)}
              </p>
            </div> 
          </article>    
        ))}
      </div>
    </section>
  );
}