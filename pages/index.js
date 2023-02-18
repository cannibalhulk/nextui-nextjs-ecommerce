import Navbarr from "@/components/Navbarr";
import Head from 'next/head'
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { Spacer, Grid } from "@nextui-org/react";


export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=8");
    const { products } = await res.json();
    return {
      props: { products },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [] },
    };
  }
};

export default function Home({ products }) {
  return (
    <>
        <Head>
          <title>Taku</title>
          <meta name="description" content="E-commerce website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Navbarr/>
          <Spacer y={1}/>
          <HeroBanner/>
          <Spacer y={3} />
          <Grid.Container gap={2} justify={"center"}>
            {products.map((product) => (
              <Grid>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid.Container>
        </main>
    </>
  )
}

