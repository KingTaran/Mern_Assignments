import Cards from './Cards';
import Button from './Button';
import './App.css';
import Counter from './Counter'
import { useState } from 'react';

let data = [
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Burger King",
    desc: "American",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Dominic Pizza",
    desc: "Pizzas, Italian",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "CHAUHAN DHABAo",
    desc: "Indian",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewulfgphspwjubsiv97y",
    heading: "Wow! Momo",
    desc: "Tibetan, Healthy Food, Asian, Chinese, Snacks, Continental, Desserts, Beverages",
  },
];

const getAllCards = (data) => {
  return data.map((elem, index) => (
    <Cards
      imageUrl={elem.imageUrl}
      heading={elem.heading}
      desc={elem.desc}
      key={index}
    />
  ));
};

function App() {
  const [counterNumbers,setCounterNumbers] = useState(0)
  const getcounters = () => {
    return Array(counterNumbers).fill(<Counter></Counter>)
  }
  return (
    <>
    

    <Button name='+' handleClick={() => {
      setCounterNumbers((counterNumbers) => counterNumbers + 1);
    }}></Button>
    {getcounters()}
    </>
  );
}

export default App;
