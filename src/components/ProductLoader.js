import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
    return (
        <div className="col-md-4">
            <Skeleton height={150} width={150} />
            <Skeleton count={5} height={150} />
        </div>
    );
};

export const ProductLoader = () => {
    return (
        <>
            <div className="row">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </>
    );
};

export default ProductLoader;
