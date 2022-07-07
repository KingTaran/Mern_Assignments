import './App.css';
function Cards(props){
    return(
       <>
       <div className='card'>
       <img
        src={props.imageUrl}
        alt="food"
        height='160'
        width='230'
        />
        <div className='heading'>{props.heading}</div>
        <div className='desc'>{props.desc}</div>
        <div className='cardDetails'><span>&#9733;4.4</span><span>28 mins</span><span> &#8377; 450 For Two</span></div>
        </div>          
       </>

    );
}
export default Cards;