import Card from "@/components/Card";
import Footer from "@/sections/Footer";
import { request } from "../../lib/datocms";
import Header from "@/sections/Header";
import Head from "next/head";

const QUERY = `
query MyQuery {
  allCompositions {
    tier
    earlyGame {
      url
    }
    lateGame {
      url
    }
    midGame {
      url
    }
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: QUERY,
    variables: '', 
    includeDrafts: '', 
    excludeInvalid: ''
  });
  return {
    props: { data },
  };
}

type HomeProps = {
  data: {
    allCompositions: [{
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
    }]
  }
}

export default function Home(props: HomeProps) {
  const { data } = props;

  return (
    <>
      <Head>
        <title>Super Auto Pets Tier List - Best Builds Ranked for Competitive Play</title>
        <meta name="title" content="Super Auto Pets Tier List - Best Builds Ranked for Competitive Play"></meta>
        <meta
          name="description"
          content="Discover the top-performing builds in Super Auto Pets with our comprehensive tier list. Our rankings are based on rigorous analysis and player feedback, providing you with the most accurate and up-to-date information on the game's most powerful strategies. Whether you're a beginner or a seasoned player, our guide will help you dominate the competition and climb the ranks. Check out our Super Auto Pets tier list now!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.metasuperautopets.com/" />
        <meta property="og:title" content="Super Auto Pets Tier List - Best Builds Ranked for Competitive Play" /> 
        <meta property="og:description" content="Discover the top-performing builds in Super Auto Pets with our comprehensive tier list. Our rankings are based on rigorous analysis and player feedback, providing you with the most accurate and up-to-date information on the game's most powerful strategies. Whether you're a beginner or a seasoned player, our guide will help you dominate the competition and climb the ranks. Check out our Super Auto Pets tier list now!" />
        <meta property="og:image" content="/home.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.metasuperautopets.com/" />
        <meta property="twitter:title" content="Super Auto Pets Tier List - Best Builds Ranked for Competitive Play" />
        <meta property="twitter:description" content="Discover the top-performing builds in Super Auto Pets with our comprehensive tier list. Our rankings are based on rigorous analysis and player feedback, providing you with the most accurate and up-to-date information on the game's most powerful strategies. Whether you're a beginner or a seasoned player, our guide will help you dominate the competition and climb the ranks. Check out our Super Auto Pets tier list now!" />
        <meta property="twitter:image" content="/home.png"></meta>
      </Head>
      
      <Header />

      <section className="mt-48 px-[5%]">
        <h1 className="text-white text-center text-3xl mb-16 lg:text-5xl">All Super Auto Pets Builds</h1>
        
        {data.allCompositions.map((item, index) => {
          return (
            <Card 
              tier={item.tier}
              earlyGame={item.earlyGame} 
              midGame={item.midGame} 
              lateGame={item.lateGame} 
              key={index} 
            />
          )
        })}
    

      </section>

      <Footer />
    </>
  )
}
