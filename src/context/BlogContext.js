import createDataContext from './createDataContext';


const blogReducer = (state , action) => {
    switch (action.type){
        case "add_blogpost":
            return [...state ,
                 {id:Math.floor(Math.random()*99999),
                    title:action.payload.title,
                    content:action.payload.content}];
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
const addBlogPost = dispatch => {
    return (title, content, callback) => {
      dispatch({ type: 'add_blogpost', payload: { title, content } });
      if (callback){
      callback();
      }
    };
  };

const deleteBlogPost = dispatch =>{
    return (id) => {
        dispatch({type:"delete_blogpost" , payload:id});
    } 
};

const updateBlogPost = dispatch =>{
    
    return (id , title, content , callback) => {
        dispatch({type:"update_blogpost" , 
        payload:{id:id, title:title, content:content}
    });
    if (callback)
    callback();
    } 
};

export const { Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost , deleteBlogPost , updateBlogPost },
    [{title:"test post" , content:"test content" , id:1}]
    );
