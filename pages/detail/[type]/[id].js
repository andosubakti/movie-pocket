import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDataService } from "../../../redux/services/detailService";
import { NextSeo } from "next-seo";
import Header from "../../../components/molecules/Header";
import Image from "next/image";
import noImage from "../../../public/No-Image.png";

const DetailPage = () => {
  const router = useRouter();
  const { type, id } = router.query;
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.detail);

  useEffect(() => {
    if (type && id) {
      dispatch(getDetailDataService(id, type));
    }
  }, [router]);
  return (
    <div className="flex flex-col justify-center m-4">
      <NextSeo
        title={
          data.title || data.name
            ? data.title || data.name + " | Movie Pocket"
            : "Movie Pocket Detail Movie"
        }
        description="A short description goes here."
      />
      <Header />
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-semibold my-4">
          {data.title || data.name}
        </div>
        <div className="flex flex-row gap-2 my-2 items-center flex-wrap">
          {data.genres
            ? data.genres.map((item, key) => (
                <div
                  className="text-sm border rounded-lg p-2 border-neutral-800"
                  key={key}
                >
                  {item.name}
                </div>
              ))
            : ""}
          {data.release_date ? (
            <div className="text-md font-bold">
              {new Date(data.release_date).getFullYear()}
            </div>
          ) : (
            ""
          )}
          {data.runtime ? (
            <div className="text-md font-bold">{data.runtime} minutes</div>
          ) : (
            ""
          )}
          {data.vote_average ? (
            <div className="text-md font-bold">
              Rating {Number(data.vote_average).toFixed(1)}/10
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="border rounded-lg p-2 border-neutral-800 flex flex-row gap-2 max-w-xl my-4">
          <div className="">
            <Image
              className="rounded-lg"
              src={
                data.poster_path
                  ? "https://image.tmdb.org/t/p/w200/" + data.poster_path
                  : noImage
              }
              width="200"
              height="300"
              layout="fixed"
            />
          </div>
          <div className="text-sm text-justify">{data.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
