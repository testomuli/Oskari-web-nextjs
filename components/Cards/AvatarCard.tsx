import { readMarkdownFile } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'

const AvatarCard = async ({
  name,
  title,
  organisation,
  avatar,
  filePath,
  content,
  resourcesPath
}: {
  name: string
  title?: string
  organisation?: string
  avatar: string
  filePath?: string
  content?: string
  resourcesPath?: string
}) => {
  let markdown = null;
  if (filePath) {
    markdown = await readMarkdownFile(filePath, resourcesPath);
  }
  return (
    <div className='flex flex-col items-center justify-start text-left w-[300px] aspect-square'>
      <Image
        src={avatar || '/images/avatars/otter.png'}
        alt={name}
        width={300}
        height={300}
        className='rounded-full aspect-square object-contain'
      />
      <div>
        <h3 className='font-bold text-xl flex flex-col my-4'>{name}</h3>
      </div>
      {title && <div>{title}</div>}
      {organisation && <div className={'mb-2'}>{organisation}</div>}
      <p>
        { markdown && <MDXRemote source={markdown} options={{ parseFrontmatter: true }}/>}
        {!markdown && <>{content}</>}
      </p>
    </div>
  )
}

export default AvatarCard