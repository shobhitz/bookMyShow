import React from "react";
import MovieList from "./movieList";
import TheatreTable from "./theatreTable";
import { Tabs } from "antd";

export default function Admin() {
    const tabItems = [
        {
            key: "1",
            label: 'Movies',
            children: <MovieList></MovieList>
        },
        {
            key: "2",
            label: 'Theatre',
            children: <TheatreTable></TheatreTable>
        },
        
    ]

  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabItems}></Tabs>
    </div>
  );
}

