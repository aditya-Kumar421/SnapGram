import { Models } from "appwrite";
import { Loader } from "lucide-react";
import GridPostList from "./GridPostList";

type SearchResultProps = {
    isSearchFetching : boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({isSearchFetching, searchedPosts} : SearchResultProps) => {

    if(isSearchFetching) return <Loader/>

    // if(searchedPosts && searchedPosts.documents.length > 0){
    //     return (
    //         <GridPostList posts={searchedPosts.documents} />
    //     )
    // }
    if (searchedPosts && searchedPosts.length > 0) {
      return <GridPostList posts={searchedPosts} />;
    }


  return (
    <p className="text-light-4 mt-10 text-center w-full">No result found</p>
  )
}

export default SearchResults