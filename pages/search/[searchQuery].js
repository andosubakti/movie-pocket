import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovieService } from "../../redux/services/searchMoviesService";
import { NextSeo } from "next-seo";
import CardList from "../../components/templates/CardList";
import Header from "../../components/molecules/Header";
import { Pagination } from "antd";

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

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <div className="flex flex-col justify-center m-4">
      <NextSeo
        title={"Movie Pocket Search Result For: " + searchQuery}
        description="A short description goes here."
      />
      <Header />
      <div className="text-lg flex flex-col items-center font-semibold">
        {data.results && searchQuery
          ? `Result for '${searchQuery}' : ${data.total_results} found. `
          : ""}
      </div>
      <CardList
        data={data.results}
        loading={loading}
        onClick={(id, type) => {
          router.push(`/detail/${type}/${id}`);
        }}
      />
      <div className="flex flex-row justify-center">
        <Pagination
          defaultCurrent={page}
          total={data.total_results}
          defaultPageSize="20"
          showSizeChanger={false}
          itemRender={itemRender}
          onChange={(page) => setPage(page)}
        />
      </div>
      ;
    </div>
  );
};

export default searchResultPage;
