import Image from "next/image"

type CardContentProps = {
  status: boolean,
  earlyGame: [{
    url: string
  }],
  midGame: [{
    url: string
  }],
  lateGame: [{
    url: string
  }],
}


export default function CardContent(props: CardContentProps) {
  const { status, earlyGame, midGame, lateGame } = props
  return (
    <>
      <div className={`bg-white dark:bg-gray-900 items-center lg:max-w-[60%] m-auto  justify-between shadow text-white ${status ? 'block lg:flex' : 'hidden'}`}>
          <div className="w-full lg:w-1/2 p-8 text-center">
            <h2>Early Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
            {earlyGame.map((item, index) => {
              return (
                <Image key={index} src={item.url} width="75" height="75" alt="Character"/>
              )
            })}
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-8 text-center">
            <h2>Mid Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
            {midGame.map((item, index) => {
              return (
                <Image key={index} src={item.url} width="75" height="75" alt="Character"/>
              )
            })}
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-8 text-center">
            <h2>Late Game</h2>
            <div className="flex gap-2 flex-wrap justify-center mt-4">
            {lateGame.map((item, index) => {
              return (
                <Image key={index} src={item.url} width="75" height="75" alt="Character"/>
              )
            })}
            </div>
          </div>
      </div>
    </>
  )
}