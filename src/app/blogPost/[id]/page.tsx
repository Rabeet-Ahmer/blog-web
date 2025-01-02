import Comments from '@/components/Comments';
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
    <div className='justify-self-center space-y-8 m-6'>
        <div className='space-y-6 text-transparent max-w-[100ch] bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 my-12'>
          <h1 className='font-bold font-sans text-4xl md:text-7xl'>{blog.fields.title}</h1>
          <p className='font-medium text-xl'>Author:{authorName}</p>
        </div>
        <Image src={imageUrl} alt={blog.fields.title} width={imageSize.width} height={imageSize.height} quality={100} className='rounded-md object-cover max-h-[50vh] w-screen' loading='eager' priority/>
        <div className='p-4 space-y-8 max-w-screen-md justify-self-center'>
          <h2 className='font-semibold font-serif text-2xl sm:text-4xl leading-tight'>{blog.fields.body.content[0]?.content[0]?.value}</h2>
          <h2 className='opacity-70 text-justify leading-relaxed sm:text-lg'>{blog.fields.body.content[1]?.content[0]?.value}</h2>
          <h2 className='font-semibold font-serif text-2xl sm:text-4xl leading-tight '>{blog.fields.body.content[2]?.content[0]?.value}</h2>
          <h2 className='opacity-70 text-justify leading-relaxed sm:text-lg'>{blog.fields.body.content[3]?.content[0]?.value}</h2>
        </div>
        <Comments/>
    </div>
  )
}

export default BlogPost