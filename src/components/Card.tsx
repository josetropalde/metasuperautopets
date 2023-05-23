import { useState } from "react";
import CardContent from "./CardContent";
import CardPreview from "./CardPreview";

type CardProps = {
  tier: string,
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

export default function Card(props: CardProps) {
  const [status, setStatus] = useState(false)
  const { tier, earlyGame, midGame, lateGame } = props
  
  return (
    <>
      <div className="my-4">
        <CardPreview tier={tier} lateGame={lateGame} setStatus={setStatus} status={status}/>
        <CardContent status={status} earlyGame={earlyGame} midGame={midGame} lateGame={lateGame} />
      </div>
    </>
  )
}