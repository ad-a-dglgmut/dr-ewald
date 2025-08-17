import React, { useEffect, useState } from "react";
import img from "../../img/white.png";

let blog: any;
await fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nadicaewald9"
)
  .then((res) => res.json())
  .then((data) => {
    const {
      feed: { image, link },
      items,
    } = data || {};

    const posts = items.filter((item: any) => item.categories.length > 0);

    blog = data.items;

  });

function Slider() {
  return (
    <div className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
          <a href={blog[0].link}>
            {blog[0].thumbnail ? (
              <img className="rounded-t-lg" src={blog[0].thumbnail} alt="" />
            ) : (
              <img className="rounded-t-lg" src={img} alt="" />
            )}
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog[0].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {blog[0].pubDate}
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={blog[1].link}>
            {blog[1].thumbnail ? (
              <img className="rounded-t-lg" src={blog[1].thumbnail} alt="" />
            ) : (
              <img className="rounded-t-lg" src={img} alt="" />
            )}
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog[1].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {blog[1].pubDate}
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={blog[2].link}>
            {blog[2].thumbnail ? (
              <img className="rounded-t-lg" src={blog[2].thumbnail} alt="" />
            ) : (
              <img className="rounded-t-lg" src={img} alt="" />
            )}
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog[2].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {blog[2].pubDate}
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={blog[3].link}>
            {blog[3].thumbnail ? (
              <img className="rounded-t-lg" src={blog[3].thumbnail} alt="" />
            ) : (
              <img className="rounded-t-lg" src={img} alt="" />
            )}
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog[3].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {blog[3].pubDate}
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={blog[4].link}>
            {blog[4].thumbnail ? (
              <img className="rounded-t-lg" src={blog[4].thumbnail} alt="" />
            ) : (
              <img className="rounded-t-lg" src={img} alt="" />
            )}
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog[4].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {blog[4].pubDate}
            </p>
          </div>
        </div>
    </div>
  );
}

export default Slider;
