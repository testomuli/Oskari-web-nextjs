import Image from 'next/image'

export default function LogoPill({
  bgColor = '#F4F1DE',
  logo,
}: {
  bgColor?: string
  logo: string
}) {
  return (
    <div
      className={`rounded-full px-24 py-12 grid place-items-center max-w-[400px]`}
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={logo}
        alt='logo'
        width={200}
        height={200}
        className='rounded-full h-auto'
      />
    </div>
  )
}
