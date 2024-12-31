import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogCard = async () => {
  try {
    const result = await fetch(
      "https://cdn.contentful.com/spaces/65tk6nvlujly/entries?access_token=pguaeebyxo6B-XLeA3xIYX5giQhUu36oVOaviD2mDJU&content_type=blog"
    );

    if (!result.ok) {
      throw new Error(`Something went wrong! status: ${result.status}`);
    }

    const data = await result.json();
    return (
        <div className=" m-8 space-y-8 scroll-m-36" id="blog">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl lg:text-3xl font-sans">Recent Blog Posts</h2>
            </div>
        {data.items.map((blog: any) => {
            
            const blogImage = data.includes.Asset.find((img:any)=> img.sys.id === blog.fields.image.sys.id);
            const imageUrl = `https:${blogImage.fields.file.url}`;
            const imageSize = blogImage.fields.file.details.image;
            const para = blog.fields.body.content[1].content[0].value


          return (
              <div key={blog.sys.id}>
                <div className="flex flex-col items-center gap-6 font-sans">
                  <Image src={imageUrl} alt="image" width={imageSize.width} height={imageSize.height} className="max-h-[50vh] w-[90vw] rounded-2xl object-cover" quality={100}/> 
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl lg:text-3xl">{blog.fields.title}</h2>
                    <p className="font-normal text-base lg:text-xl line-clamp-3">{para}</p>
                  </div>
                  <Link href={`/blogPost/${blog.sys.id}`}>
                    <Button className="text-lg">Read More</Button>
                  </Link>
                  <p className="w-full bg-gray-400 h-[2px] my-8 md:my-20"></p>
                </div>
            </div>
          );
        })}
      </div>
    );
  } catch (error: any) {
    console.error(error);
    return <div className="flex items-center justify-center font-semibold m-20 text-5xl text-nowrap">Error loading blogs: {error.message}</div>;
  }
};

export default BlogCard;

