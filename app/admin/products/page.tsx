import {deleteProduct, fetchAdminProducts} from "@/prisma/actions";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import FormContainer from "@/components/form/FormContainer";
import {formatCurrency} from "@/utils/foramtter";
import {IconButton} from "@/components/form/Buttons";

export default async function AdminProduct() {
    const products = await fetchAdminProducts();
    return (
        <section>
            <Table>
                <TableCaption className='capitalize'>
                    total products : {products.length}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((item) => {
                        const { id: productId, name, company, price } = item;
                        return (
                            <TableRow key={productId}>
                                <TableCell>
                                    <Link
                                        href={`/products/${productId}`}
                                        className='underline text-muted-foreground tracking-wide capitalize'
                                    >
                                        {name}
                                    </Link>
                                </TableCell>
                                <TableCell>{company}</TableCell>
                                <TableCell>{formatCurrency(price)}</TableCell>
                                <TableCell className='flex items-center gap-x-2'>
                                    <Link href={`/admin/products/${productId}/edit`}>
                                        <IconButton actionType='edit' />
                                    </Link>
                                    <DeleteProduct productId={productId} />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </section>
    )
}

function DeleteProduct({ productId }: { productId: string }) {
    const deleteAction = deleteProduct.bind(null, { productId });
    return (
        <FormContainer action={deleteAction}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
}