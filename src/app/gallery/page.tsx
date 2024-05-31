import Upload from './upload'
import cloudinary from "cloudinary"
import View from './view';
import SearchForm from './search-form';

interface MyImage {
  public_id: string;
  tags:string[]
}

const Page = async (
  {
   searchParams:{search},
  }:{
    searchParams:{
      search:string
    }
  }
) => {
  let res = await cloudinary.v2.search
  .expression(`resource_type:image ${search ? ` AND tags=${search}`:""}`)
  .sort_by('public_id','desc')
  .max_results(5)
  .with_field("tags")
  .execute() as {resources:MyImage[]};
  // console.log(res.resources);
  // console.log(res);
  
  

  return (
    <>
    <div className='py-4 px-5 flex items-center justify-between'>
             <h2 className="text-2xl font-semibold tracking-tight">
            Gallery
          </h2>
          <Upload/>
    </div>
    <SearchForm mySearch={search}/>

    <div className='columns-4 gap-4  space-y-4 mx-auto p-5'>
{res.resources.map((item, i)=>{
return <div key={i} className='break-inside-avoid'>
  <View src={item.public_id} tag={item.tags}/>

</div>
})}
    </div>
    </>
  );  
}

export default Page