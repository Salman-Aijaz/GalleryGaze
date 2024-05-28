import cloudinary from "cloudinary";
import View from "../gallery/view";
import FavouriteList from "./favouriteList";

export  interface MyImage {
  public_id: string;
  tags: string[];
}

const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("public_id", "desc")
    .max_results(5)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };
  // console.log(res.resources);
  // console.log(res);

  return (
    <>
      <div className="py-4 px-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Favorite</h2>
      </div>
        <FavouriteList resources={res.resources}/>
    </>
  );
};

export default Page;
