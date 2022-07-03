
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Query.scss';

const Query =() =>{
    var params = useParams();
    var SearchedQuery=params.Query;
const [Products,setProducts] =useState();
useEffect(()=>{
 axios.get('/Products/:Query')
 .then(res=>{
     setProducts(res);
 })
 .catch(err=>{
    console.log("Error while getting products from queries");
 })
},[])




  return(
    <div className="QueryWapper">
        <div className="QueryHeader">
            <div className="Query-HeaderTitle">
              Searching for {SearchedQuery}
            </div>
            <div className="Query-Filters">
             
            </div>
        </div>
        <div className="QueryCOntainer">
            {
              Products.map(product=>{
                return(
                <div className="Query-ProductWrapper">
                    <div className="Query-Image">
                         {product.img}
                    </div>
                    <div className="Query-ProductDetails">
                        <div className="Query-ProductName">
                         {product.name}
                        </div>
                        <div className="Query-ProductTags">
                           {product.tags}
                        </div>
                        <div className="Query-PriceAndRating">
                        <div className="Query-ProductPrice">
                           {product.price}
                        </div>
                        <div className="Query-Rating">
                        <div className="QueryRating-Ele"> 
                        </div>
                        <div className="QueryRating-Ele"> 
                        </div>
                        <div className="QueryRating-Ele"> 
                        </div>
                        <div className="QueryRating-Ele"> 
                        </div>
                        <div className="QueryRating-Ele"> 
                        </div>
                        </div>
                        </div>
                        <div className="Query-ProductDescription">
                            {product.description}
                        </div>
                    </div>
                </div>
                )
              })
            }
        </div>
    </div>
  )

}

export default Query;