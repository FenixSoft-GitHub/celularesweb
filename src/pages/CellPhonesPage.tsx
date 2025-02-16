import { useState } from "react";
import { CardProduct } from "../components/products/CardProduct";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { prepareProducts } from "../helpers";
import { useFilteredProducts, useProducts } from "../hooks";
import { Pagination } from "../components/shared/Pagination";

export const CellPhonesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrans, setSelectedBrans] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({ page, brands: selectedBrans });

  if (isLoading || !products) return <div>Loading...</div>;

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12 text-avocado-500 font-display2">
        Celulares
      </h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* FILTROS */}
        <ContainerFilter
          selectedBrands={selectedBrans}
          setSelectedBrands={setSelectedBrans}
        />

        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <div className="spinner-border text-avocado-500" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
              {preparedProducts.map((product) => (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  colors={product.colors}
                  img={product.images[0]}
                  slug={product.slug}
                  variants={product.variants}
                />
              ))}
            </div>

            {/* TODO: Paginación */}
            {/* <h3 className="font-semibold text-xl mb-4">
              Resultados {page} de {Math.ceil(totalProducts / 12)}
            </h3> */}
            <Pagination 
            page={page}
            totalItems={totalProducts}
            setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
