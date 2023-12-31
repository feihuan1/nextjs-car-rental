import Hero from "@/components/Hero";

import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams}:any) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '', 
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className=" mx-auto">
      <Hero />
      <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto" id="discover">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
        <h1 className="text-4xl font-extrabold">Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
        <SearchBar />

        <div className="flex justify-start flex-wrap items-center gap-2">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars.map((car, index) => <CarCard car={car} key={index} />)}
            </div> 
            <ShowMore 
              pageNumber={(searchParams.limit || 10) / 10} 
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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
    </main>
  );
}
