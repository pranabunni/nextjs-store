import {fetchProduct, findExistingReview} from "@/prisma/actions";
import {formatCurrency} from "@/utils/foramtter";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import Image from "next/image";
import AddToCart from "@/components/single-product/AddtoCart";
import ProductRating from "@/components/single-product/ProductRating";
import FavouriteToggleButton from "@/components/products/FavouriteToggleButton";
import ProductReviews from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import {auth} from "@clerk/nextjs/server";
export  default async function SingleProduct({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const product = await fetchProduct(id);
    const { name, image, company, description, price } = product;
    const dollarsAmount = formatCurrency(price);
    const {userId} = await auth();
    const reviewNotExist = userId && !(await findExistingReview(userId, id))
    return (
       <section>
           <BreadCrumbs name={product.name} />
           <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
               <div className='relative h-full'>
                   <Image
                       src={image}
                       alt={name}
                       fill
                       sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
                       priority
                       className='w-full rounded object-cover'
                   />
               </div>
               <div>
                   <div className='flex gap-x-8 items-center'>
                       <h1 className='capitalize text-3xl font-bold'>{name} </h1>
                       <div className='flex items-center gap-x-2'>
                           <FavouriteToggleButton productId={id} />
                       </div>
                   </div>
                   <ProductRating productId={id} />
                   <h4 className='text-xl mt-2'>{company}</h4>
                   <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
                       {dollarsAmount}
                   </p>
                   <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
                   <AddToCart productId={id} />
               </div>
           </div>
           <ProductReviews productId={id} />
           {
               reviewNotExist &&  <SubmitReview productId={id} />
           }

       </section>
    )
}
