import { CookingSection } from "./components/CookingSection";
import { CookingPosts } from "./components/CookingPosts";

import { fetchContentfulGraphQL } from "@/lib/contenful";
import { GET_COOKING_SECTION } from '@/graphql/queryCookingSection';
import { GET_COOKING_POSTS } from '@/graphql/queryCookingPosts';

import { CookingInterface, CookingPostInterface } from "@/types/CookingInterface";

export default async function Home() {

  const dataSection = await fetchContentfulGraphQL(GET_COOKING_SECTION);
  const dataPosts = await fetchContentfulGraphQL(GET_COOKING_POSTS);

  const itemsSection : CookingInterface[] = dataSection.coockieSectionsCollection.items;
  const itemsPosts : CookingPostInterface[] = dataPosts.cookingPostsCollection.items;
  
  return (
    <main>
      <div className="wrapper">
        <CookingSection items={itemsSection} />
        <CookingPosts items={itemsPosts} />
      </div>  
    </main>
  );
}
