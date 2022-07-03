import React, {useState, useEffect } from "react";
import './Home.css';
import '../../Components/common.css';
import '../../Components/common.scss';
import { useNavigate }  from 'react-router-dom';
import axios from 'axios';
import FOoterStand from "../../Components/Footer/Footer";

const Home =() =>{
    const history = useNavigate();
   const catagories =[ 
    {name:'Decor' , img:"https://i.pinimg.com/originals/53/82/df/5382df3f498ec0ed31ed8bef6f68fc52.jpg"},
    { name:"Painting", img:'https://m.media-amazon.com/images/I/81nh7yEGiHL._SX355_.jpg' },
    {
        name:"Glass crafts",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7d6K1XSvqF1OqhqPUZbZVazgIqUXd8gIKYzyY0hWmcd4LUbPXcERkqTidiiauEeYvdM&usqp=CAU"

    },
    {
      name:'Jewelry',
      img:'https://i.pinimg.com/originals/36/e0/26/36e0265095be7af716ab31f847e65c7d.jpg'
    },
    {
        name:'Clothes',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5gMkWHsL5fVrAZx2Ux9LTZpJw0ruHUJJWw&usqp=CAU'
    },
    {
        name:'Weveing',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9rIfRis0mjs-GU-vZd4W9eWP4tiyq6oD-Q8REvQi4_XBnCB71S36j0VrtrPck4fbAMs&usqp=CAU'
    },
    {
        name:'Paper crafts',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlUixthxSiEkiWzmB9FWso0-jI5ZC9M2hnQ&usqp=CAU'
    },
    {
        name:'Wood crafts',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwhRyz1i6k5lk0IJMkWxWfudOwXoROAfT1w&usqp=CAU'
    },
    {
        name:'Metal crafts',
        img:'https://3.bp.blogspot.com/-x39C5WIdpe8/VnigqzS9S8I/AAAAAAAABNA/wjfIJYFYOI0/s1600/pebarti.jpg'
    }
     ]

     const [offers ,setOffers] = useState([]);
     const [ mostPurchased,setMostPurchased ] = useState([]);

     useEffect(()=>{
            
        axios.get('/offers/some')
        .then(res=>{
            setOffers(res);
        })
        .catch(err=>{
            console.log("Error while fetching some offers");
        })
        
        axios.get('/Purchased')
        .then(res=>{
            setMostPurchased(res);
        })
      },[]);
         

    return(
        <div className="Home-Wrapper">
            <div className="Home-title">
            Products
            </div>
         <div className="Home-Catagories">
          {
            catagories.map(cat=>{
                return(
                    <div className="Category-ele-Wrapper">
                      <img src={cat.img} alt="err" className="category-ele-avatar"  />
                      <span className="category-ele-name" >
                        {cat.name}
                      </span>
                    </div>
                )
            })
          }
         </div>
         <div className="Home-CarouselWrapper">
            
         </div>
         <div className="Home-BestOffersWrapper">
            <div className="Home-BestOffersContainer">
            {
                offers.map(offer=>{
                    return(
                        <div className="Home-OfferEleWrapper">
                            <div className="Home-offerEle-DateAndPriceWrapper">
                                <div className="Home-offerEle-Price">

                                </div>
                            <div className="Home-offerEle-Dates">

                              </div>
                            </div>
                            <div className="Home-offerEle-Avatar">

                            </div>
                           
                                <div className="Home-offerEle-Description">
                                
                            </div>
                        </div>
                    )
                })
            }
         </div>
         </div>
         <div className="Home-MostPurchasedWrapper">
           <div className="Home-MostPurchasedContainer">
            {
                mostPurchased.map(ele=>{
                    <div className="Home-Most-eleWrapper">
                        <div className="Home-Most-Image">

                        </div>
                        <div className="Home-Most-TextWrapper">
                        <div className="Home-Most-Price">

                        </div>
                        <div className="Home-Most-Categories">

                        </div>
                        </div>

                    </div>
                })
            }
           </div>
         </div>
         <FOoterStand />
        </div>
    )
}

export default Home;