import React from "react";
import Article from "./Article";

function ArticleList (posts) {
const namedArticles = posts.map((articles) => {

    return (
        
        <Article 
            key={posts.id} 
            title={posts.title}
            date = {posts.date}
            preview= {posts.preview}
            minutes = {posts.minutes}
             />
    )
   })    

    return (
        <div>
            {namedArticles}
        </div>
    ) 

}
   
export default ArticleList;

