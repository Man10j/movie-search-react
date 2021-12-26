import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Noresult from "./media/noresult.jpg";
import "./Wishlist.css";
import "./Card.css";
import Noimg from "./media/no_img.png";

const Wishlist = (props) => {
  let history = useHistory();
  const [values, setValues] = useState();
  useEffect(() => {
    let movie_wishlist = props.state.wishlist.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    let movielist = movie_wishlist.map((movie) => {
      return (
        <div key={movie.id} className="movie_list_card">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`
                : Noimg
            }
            className="movie_poster"
            alt="movie_poster"
          />
          <div className="card_movie_title">{movie.title}</div>
          <div className="card_btns">
            <button
              className="preview_btn"
              onClick={() => {
                handlemovieClick(movie);
              }}
            >
              Preview
            </button>
          </div>
        </div>
      );
    });
    function handlemovieClick(value) {
      history.push(`/Preview/${props.state.data.entry}/${value.title}/`, {
        data: value,
      });
    }
    setValues(movielist);
  }, [props, history]);

  return (
    <div>
      <NavLink to="/home">
        <HomeIcon id="home_icon" />
      </NavLink>
      <NavLink to="/searchresult">
        <ImageSearchIcon id="wishlisticon" />
      </NavLink>
      {Array.isArray(values) && values.length ? (
        <div className="card_list">{values}</div>
      ) : (
        <div className="nosrch">
          <img className="nosrch_img" src={Noresult} alt="noresult img" />
          <p>wishlist Empty</p>
        </div>
      )}
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletewishlist: () => {
      dispatch({ type: "DELETE_DATA" });
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Wishlist);
