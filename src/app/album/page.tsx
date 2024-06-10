import cloudinary from "cloudinary";
import FolderList from "./folderList";

export interface FolderType {
  name: string;
  path: string;
}
const Page = async () => {
  const {folders} = (await cloudinary.v2.api.root_folders()) as {
    folders: FolderType[];
  };

  return (
    <div>
      <div className="py-4 px-5 ">
        <h2 className="text-2xl font-semibold tracking-tight">Picture Album</h2>
      </div>

      <div className="px-5 py-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
        {folders.map((item, i) => (
          <div key={i}>
            <FolderList folder={item} />
          </div>
        ))}
        {/* <FolderList/> */}
      </div>
    </div>
  );
};

export default Page;
