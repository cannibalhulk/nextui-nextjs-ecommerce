import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import { useCart } from "../modules/AppContext";
import CartItem from "../components/CartItem";
import Navbarr from "@/components/Navbarr";
const Cart = () => {
  const cart = useCart();
  return (
    <>
      <Head>
        <title>Cart | Shopping app</title>
      </Head>
      <main>
        <Navbarr/>
        <Spacer y={2} />
        <Container lg>
          <header>
            <Text h1>Cart</Text>
          </header>
          <section className="cart-items">
            <Grid.Container gap={2}>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </Grid.Container>
          </section>
        </Container>
      </main>
    </>
  );
};
export default Cart;