import Head from "next/head";
import Image from "next/image";
import SearchComponent from "../components/atoms/Search";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
  getTrendingMovieService,
  getTrendingTvService,
} from "../redux/services/trendingService";
import CardList from "../components/templates/CardList";
import Header from "../components/molecules/Header";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: trendingMovieData, loading: trendingMovieLoading } =
    useSelector((state) => state.trending.movie);
  const { data: trendingTvData, loading: trendingTvLoading } = useSelector(
    (state) => state.trending.tv
  );

  useEffect(() => {
    dispatch(getTrendingMovieService("week"));
    dispatch(getTrendingTvService("week"));
  }, []);
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Head>
        <title>Movie Pocket</title>
        <meta name="description" content="Movie Library in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center m-4">
        <Header />
        {!trendingMovieLoading && trendingMovieData.results && (
          <div className="my-4">
            <h2 className="text-2xl font-bold mx-4-sm">
              Top 20 Movie This Week
            </h2>
            <CardList data={trendingMovieData.results} />
          </div>
        )}
        {!trendingTvLoading && trendingTvData.results && (
          <div className="my-4">
            <h2 className="text-2xl font-bold mx-4-sm">
              Top 20 Tv Series This Week
            </h2>
            <CardList data={trendingTvData.results} />
          </div>
        )}
      </div>
    </div>
  );
}
