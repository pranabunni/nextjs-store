import {fetchFeaturedProducts} from "@/prisma/actions";
import SectionTitle from "@/components/global/SectionTitle";
import ProductGrid from "@/components/products/ProductsGrid";

export default async function FeaturedProduct() {
    const products = await fetchFeaturedProducts();
    if (products.length)  {
        return (
            <section className='pt-24'>
                <SectionTitle text='featured products' />
                <ProductGrid products={products} />
            </section>
        )
    }
}