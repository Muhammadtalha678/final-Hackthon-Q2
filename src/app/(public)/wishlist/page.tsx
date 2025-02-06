import WishListTable from "./wishListTable";


export default function wishlist() {
    return (
        <div className="p-6 flex flex-col gap-8">
            <h2 className="text-2xl font-bold">Your Wishlist</h2>
            <WishListTable />
        </div>
    );
}
