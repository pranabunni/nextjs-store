import Hero from "@/components/home/Hero";
import FeaturedProduct from "@/components/home/FeatureProduct";
import {Suspense} from "react";
import LoadingContainer from "@/components/global/Loader";

const Home = () => <>
    <Hero />
    <Suspense fallback={<LoadingContainer />}>
        <FeaturedProduct />
    </Suspense>
</>
export default Home;