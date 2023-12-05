import Image from 'next/image'

const AvatarCard = ({
  name,
  title,
  avatar,
  content,
}: {
  name: string
  title?: string
  avatar: string
  content: string
}) => {
  return (
    <div className='flex flex-col items-center justify-start text-left w-[300px] aspect-square'>
      <Image
        src={avatar || '/images/avatars/otter.png'}
        alt={name}
        width={300}
        height={300}
        className='rounded-full aspect-square'
      />
      <h3 className='font-bold text-xl flex flex-col my-10'>
        <span>
          {name}
          {title && ','}
        </span>
        {title && <span>{title}</span>}
      </h3>
      <p>{content}</p>
    </div>
  )
}

export default AvatarCard
