import { Card } from './CookingCard'

import { CookingPostInterface } from '@/types/CookingInterface';

export const CookingPosts = async ({items}: {items: CookingPostInterface[]}) => {
  return (
    <section 
      className="cooking-posts" 
      aria-labelledby="cooking-posts-title"
      aria-describedby="cooking-posts-description"
    >
      <header>
        <h2 id="cooking-posts-title" className="text__title">Taste the colours</h2>
        <p id="cooking-posts-description" className="sr-only">
          Latest cooking posts and recipes featuring delicious dishes and culinary tips...
        </p>
      </header>
      <div 
        className="cooking-posts__grid" 
        role="feed" 
        aria-label="Latest cooking posts"
        aria-describedby="posts-count"
        aria-live="polite"
        aria-atomic="false"
      >
        <div className="sr-only" id="posts-count">
          Showing {items.length} cooking posts
        </div>
        {items.map((post: CookingPostInterface, index: number) => {
          return <Card key={index} post={post} id={index} />
        })}
      </div>
    </section>
  );
}