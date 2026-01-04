import {auth} from "@clerk/nextjs/server";
import {CardSignInButton} from "@/components/form/Buttons";
import {fetchFavoriteId} from "@/prisma/actions";
import FavouriteToggleForm from "@/components/products/FavouriteToggleForm";

export default async function FavouriteToggleButton({productId}: {productId: string}) {
    const { userId } = await auth();
    if (!userId) return <CardSignInButton />
    const favouriteId = await fetchFavoriteId({productId});
    return <FavouriteToggleForm favoriteId={favouriteId} productId={productId} />;
}