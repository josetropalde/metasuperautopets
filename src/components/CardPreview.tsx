type CardPreviewProps = {
  setStatus: any,
  status: boolean,
  tier: string
}

export default function CardPreview(props: CardPreviewProps) {
  const { setStatus, status, tier} = props
  let tierColor;
  let tierString;
  
  switch(tier) {
    case "A":
    tierColor = "#EF4444";
    tierString = "S"
      break
    case "B":
    tierColor = "#F97316";
    tierString = "B"
      break
    case "C":
    tierColor = "#EAB308";
    tierString = "C"
      break
    case "D":
    tierColor = "#22c55e";
    tierString = "D"
      break
  }
  return (
    <>
        <div className="bg-white dark:bg-gray-900 flex items-center lg:max-w-[60%] m-auto p-8 justify-between shadow">
          <div style={{backgroundColor: `${tierColor}`}} className={`px-4 py-2 text-white font-bold text-xl rounded-md shadow`}>
            {tierString}
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <img src="https://via.placeholder.com/75x75" alt="" />
            <img src="https://via.placeholder.com/75x75" alt="" />
            <img src="https://via.placeholder.com/75x75" alt="" />
            <img src="https://via.placeholder.com/75x75" alt="" />
            <img src="https://via.placeholder.com/75x75" alt="" />
          </div>
          <div className="cursor-pointer" onClick={() => setStatus(!status)}>
            <img src="/arrow.png" className={`max-w-[25px] ${status ? 'rotate-180' : ''}`} />
          </div>
        </div>
    </>
  )
}