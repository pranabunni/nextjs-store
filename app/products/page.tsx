import ProductsContainer from "@/components/products/ProductsContainer";


async function ProductsPage({searchParams}: {searchParams: Promise<Record<string, string>>}) {
    const params = await searchParams;
    const layout = params.layout || 'grid';
    const search = params.search || '';
    return <ProductsContainer search={search} layout={layout} />
}
export default ProductsPage;
