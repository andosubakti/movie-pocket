import React from "react";
import { Space, Table, Tag } from "antd";
import Image from "next/image";
import noImage from "../../public/No-Image.png";

const movieList = (props) => {
  const { movieData, loading, totalPages, onChangePagination } = props;
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
      align: "center",
    },
    {
      title: "Rating",
      dataIndex: "vote_average",
      key: "vote_average",
      render: (value) => `${value}/10`,
      align: "center",
    },
    {
      title: "Total Vote",
      dataIndex: "vote_count",
      key: "vote_count",
      align: "center",
    },
    {
      title: "Overview",
      dataIndex: "overview",
      key: "overview",
      width: "30%",
      align: "justify",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (path) => (
        <Image
          src={path ? "https://image.tmdb.org/t/p/w200/" + path : noImage}
          width="200"
          height="300"
        />
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: (id) => (
        <Space size="middle">
          <a onClick={() => router.push(`detail/movie/${id}`)}>Details</a>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={movieData}
      rowKey="id"
      loading={loading}
      pagination={{
        total: totalPages,
        defaultPageSize: 20,
        showSizeChanger: false,
        onChange: (page, pageSize) => {
          onChangePagination(page);
        },
      }}
      bordered
      className="m-4"
    />
  );
};

export default movieList;
