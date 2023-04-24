type CardContentProps = {
  status: boolean,
}


export default function CardContent(props: CardContentProps) {
  const { status } = props
  return (
    <>
      <div className={`bg-white dark:bg-gray-900 items-center lg:max-w-[60%] m-auto  justify-between shadow text-white ${status ? 'block lg:flex' : 'hidden'}`}>
          <div className="w-full lg:w-1/2 p-8 text-center">
            <h2>Early Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-8 text-center">
            <h2>Mid Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-8 text-center">
            <h2>Late Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
              <img src="https://via.placeholder.com/75x75" alt="" />
            </div>
          </div>
      </div>
    </>
  )
}