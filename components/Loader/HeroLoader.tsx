import React from "react";

function HeroLoader() {
  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto animate-pulse">
      <div className="hero hero-grid">
        <div className="background-card flex flex-col gap-8">
          <div className="background-card__image bg-gray-300 h-96 w-full"></div>

          <div className="horizontal-card grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="verticale-card">
              <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
            </div>
            <div className="verticale-card">
              <div className="verticale-card__image bg-gray-300 h-96 w-full"></div>
            </div>
          </div>
        </div>
        <div className="horizontal">
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

export default HeroLoader;
