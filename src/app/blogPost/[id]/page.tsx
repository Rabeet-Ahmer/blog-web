import Image from 'next/image';
import React from 'react'

type Props = {
  params: Promise<{ id: string }>;
}

const BlogPost = async( {params}: Props ) => {
    const { id } = await params;

    const result = await fetch("https://cdn.contentful.com/spaces/65tk6nvlujly/entries?access_token=pguaeebyxo6B-XLeA3xIYX5giQhUu36oVOaviD2mDJU&content_type=blog");
    
    if (!result.ok) {
        throw new Error(`Something went wrong! status: ${result.status}`);
      }

      const data = await result.json();

      const blog = data.items.find((item:any) => item.sys.id === id);
      const img = data.includes.Asset.find((img:any) => img.sys.id === blog.fields.image.sys.id);
      const imageUrl: string = `https:${img.fields.file.url}`;
      const imageSize = img.fields.file.details.image;
      const author = data.includes.Entry.find((author:any) => author.sys.id === blog.fields.author.sys.id);
      const authorName = author.fields.name

  return (
    <div className='justify-self-center space-y-5 m-6'>
        <Image src={imageUrl} alt={blog.fields.title} width={imageSize.width} height={imageSize.height} quality={100} className='relative rounded-md object-cover max-h-[50vh] w-[100vw]'/>
        <div className='space-y-2 absolute top-[45%] left-[27%] transform -translate-x-1/2 -translate-y-1/2 max-w-prose  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500'>
          <h1 className='font-bold font-sans text-5xl'>{blog.fields.title}</h1>
          <p className='font-medium text-xl'>Author:{authorName}</p>
        </div>
        <div className='p-4 space-y-2'>
          <h2 className='font-semibold font-serif text-3xl'>{blog.fields.body.content[0]?.content[0]?.value}</h2>
          <h2 className='text-xl'>{blog.fields.body.content[1]?.content[0]?.value}</h2>
          <h2 className='font-semibold font-serif text-3xl'>{blog.fields.body.content[2]?.content[0]?.value}</h2>
          <h2 className='text-xl'>{blog.fields.body.content[3]?.content[0]?.value}</h2>
        </div>
    </div>
  )
}

export default BlogPost