import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import fetchMovieDetails from "../../actions/movieActions/getMovieDetails";
import fetchMovieCredits from "../../actions/movieActions/getMovieCredits";
import fetchMovieTrailers from "../../actions/movieActions/getMovieTrailers";

import fetchPersonDetails from "../../actions/personActions/getPersonDetails";
import fetchPersonPhotos from "../../actions/personActions/getPersonPhotos";
import fetchPersonCredits from "../../actions/personActions/getPersonCredits";

class ItemDetails extends Component {}

fetchData(id, type=this.props.match.params.type){
  const apiKey = process.env.REACT_APP_API_KEY;
  if(type === 'movie' && type === 'tv'){
    this.props.getMovieDetails(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`);
    this.props.getMovieCredits(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=en-US`);
    this.props.getMovieTrailers(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`);
  }else if(type === 'person'){
    this.props.getPersonDetails(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`);
    this.props.getPersonPhotos(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}&language=en-US`);
    this.props.getPersonCredits(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`);
  }
};
render(){
  return(

  );
}
export default ItemDetails;
