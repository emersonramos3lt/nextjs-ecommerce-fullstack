// "use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Skeleton from "@/components/Skeleton"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async () => {

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList 
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} 
            limit={4} />
        </Suspense>
      </div>
      <div className="my-20">
        <h1 className="text-3xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage