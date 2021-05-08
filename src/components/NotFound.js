const NotFound = (props) => {

    props.setNavActive('none');
    props.setBackImage('not-found');

    return (
        <div>
            <h1>This is not found !</h1>
        </div>
     );
}
 
export default NotFound;