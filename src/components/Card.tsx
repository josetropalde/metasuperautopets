import { useState } from "react";
import CardContent from "./CardContent";
import CardPreview from "./CardPreview";

type CardProps = {
  tier: string
}

export default function Card(props: CardProps) {
  const [status, setStatus] = useState(false)
  const { tier } = props
  
  return (
    <>
      <div className="my-4">
        <CardPreview tier={tier} setStatus={setStatus} status={status}/>
        <CardContent status={status} />
      </div>
    </>
  )
}