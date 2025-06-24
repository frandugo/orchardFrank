'use client'
import Image from 'next/image';
import { extractTextFromRichText } from '@/helpers/richText' 
import {CookingPostInterface} from '@/types/CookingInterface'

export const Card = ({ post, id }: { post: CookingPostInterface, id: string | number } ) => {
    console.log('post ', post)
    const postDescription = extractTextFromRichText(post.description);
    const handleClick = (post: string) => {
        console.log(`Click en Post ${ post }`)
    }
    return (
        <article
            className="cooking-post"
            itemScope 
            itemType="https://schema.org/Article"
            aria-labelledby={`post-title-${id}`}
            aria-describedby={`post-description-${id}`}
            role="article"
            aria-posinset={Number(id)}
            onClick={() => handleClick(post.title)}
        >
            <meta itemProp="datePublished" content={new Date().toISOString()} />
            <meta itemProp="author" content="Culinary tips" />
            <div 
                className="cooking-post__image"
                role="img"
                aria-labelledby={`post-image-label-${id}`}
            >
            <div className="sr-only" id={`post-image-label-${id}`}>
                Featured image for {post.title}
            </div>
            {post.image && (
                <Image 
                    src={post.image.url} 
                    alt={post.image.description || `Featured image for ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    itemProp="image"
                />
            )}
            </div> 
            <div 
                className="cooking-post__content"
                role="region"
                aria-labelledby={`post-title-${id}`}
            >
                <h3 
                    id={`post-title-${id}`}
                    className="cooking-post__title"
                    itemProp="headline"
                >
                    {post.title}
                </h3>
                <p 
                    id={`post-description-${id}`}
                    className="cooking-post__excerpt"
                    itemProp="description"
                    aria-label={`Description for ${post.title}`}
                >
                    {postDescription}
                </p>
                <meta itemProp="articleBody" content={postDescription} />
            </div> 
        </article>    
    );
}