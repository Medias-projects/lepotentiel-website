import React, { useMemo } from "react";
import Background from "../card/Background";
import Horizontale from "../card/Horizontale";
import Verticale from "../card/Verticale";

export default function CategorieLoader({ articles, loading, title }: any) {
  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto animate-pulse ">
      <div className="title flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 h-5 uppercase bg-gray-300"></h2>
        <p className="bg-primary px-2 py-1 uppercase text-white cursor-pointer">
          Voir Plus
        </p>
      </div>
      <div className="background mb-8">
        <div className="background-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="verticale-card">
            <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
          </div>
          <div className="verticale-card">
            <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
          </div>
          <div className="verticale-card">
            <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
          </div>
          <div className="verticale-card">
            <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
          </div>
        </div>
      </div>
      <div className="horizontale">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
          <div className="verticale-card flex gap-8">
            <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
            <div className="verticale-card__image  h-30 w-full mb-8">
              <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
              <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
