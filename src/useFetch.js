import { ref } from "vue";

export async function doFetch() {
    
    const posts = ref(null);
    const error = ref(null);
    
        try {
          const data = await fetch("https://jsonplaceholder.typicode.com/posts");
          posts.value = await data.json();
          console.log(posts.value);
        } catch (err) {
          error.value = e;
        }
      
    return {posts, error};
}