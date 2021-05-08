const Blog = (props) => {

    props.setNavActive('blog');
    props.setBackImage('blog');

    return (
        <div>
           <h1>this is blog</h1>
        </div>
     );
}
 
export default Blog;