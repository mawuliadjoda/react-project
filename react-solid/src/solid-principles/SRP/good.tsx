import { Filter, filterProducts } from "./filter";
import { UseProducts } from "./hooks/useProducts";
import { UseRateFilter } from "./hooks/useRateFilter";
import { Product } from "./product";


const Good = () => {
    const { products } = UseProducts();
    const { filterRate, handleRating } = UseRateFilter();



    // return (<p> Hey I'm a good practice </p>)

    return (
        <div className="flex flex-col h-full">
          <Filter
            filterRate={filterRate as number}
            handleRating={handleRating}
          />
          <div className="h-full flex flex-wrap justify-center">
            {filterProducts(products, filterRate).map((product: any) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      );

}

export default Good