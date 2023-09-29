import React from "react";

import { fetchCars } from "@/utils";
import SearchBar from "./SearchBar";
import CustomFilter from "./CustomFilter";

import CarCard from "./CarCard";

const Discover = async () => {

  const allCars = await fetchCars()


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px]" id="discover">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
        <h1 className="text-4xl font-extrabold">Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar />

        <div className="flex justify-start flex-wrap items-center gap-2">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars.map(car => <CarCard car={car} />)}
            </div>
          </section>
        ): (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">
              Oops, no cars found
            </h2>
            {allCars?.message}
          </div>
        )}

    </div>
  );
};

export default Discover;
