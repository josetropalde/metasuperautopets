import Card from "@/components/Card";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";

export default function Home() {
  const data = [
    {tier: "A",},
    {tier: "B",},
    {tier: "C",},
    {tier: "D",},
  ]
  return (
    <>
    <Header />

    <section className="mt-48 px-[5%]">
      <h1 className="text-white text-center text-3xl mb-16 lg:text-5xl">All Super Auto Pets Builds</h1>
      
      {data.map((item, index) => {
        return (
          <Card key={index} tier={item.tier}/>
        )
      })}
  

    </section>

    <Footer />
    </>
  )
}
