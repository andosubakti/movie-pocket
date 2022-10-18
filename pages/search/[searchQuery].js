import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovieService } from "../../redux/services/searchMoviesService";
import { NextSeo } from "next-seo";
import CardList from "../../components/templates/CardList";
import Header from "../../components/molecules/Header";

const searchResultPage = () => {
  const router = useRouter();
  const { searchQuery } = router.query;
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.searchMovies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery) {
      dispatch(getSearchMovieService(searchQuery, page));
    }
  }, [page, router]);
  return (
    <>
      <NextSeo
        title={"Movie Pocket Search Result For: " + searchQuery}
        description="A short description goes here."
      />
      <Header />
      {data.results && searchQuery
        ? `Result for '${searchQuery}' : ${data.total_results} found. `
        : ""}
      <CardList data={data.results} />
    </>
  );
};

export default searchResultPage;
