import createDataContext from './createDataContext';
import jsonServer from '../../api/jsonServer';


const blogReducer = (state , action) => {
    switch (action.type){
        case "get_blogposts":
            return action.payload;
        case "delete_blogpost":
            return state.filter((blogpost)=> blogpost.id !== action.payload)

        case "update_blogpost":
            return state.map((blogpost)=>{
                return blogpost.id === action.payload.id ? action.payload: blogpost
            })
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const responce = await jsonServer.get('/blogposts');
        dispatch({type:'get_blogposts' , payload:responce.data});
    }
}


const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts' , {title, content});
      if (callback){
      callback();
      }
    };
  };

const deleteBlogPost = dispatch =>{
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type:"delete_blogpost" , payload:id});
    } 
};

const updateBlogPost = dispatch =>{
    
    return async (id , title, content , callback) => {
        await jsonServer.put(`/blogposts/${id}` , {title, content})

        dispatch({type:"update_blogpost" , 
        payload:{id:id, title:title, content:content}
    });
    if (callback)
    callback();
    } 
};

export const { Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost , deleteBlogPost , updateBlogPost , getBlogPosts },
    []
    );
