import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatchCart } from "../modules/AppContext";
const CartItem = ({ item }) => {
  const setCart = useDispatchCart();
  return (
    <Grid xs={12}>
      <Card variant={"bordered"}>
        <Card.Body css={{ p: "$10" }}>
          <Row css={{ gap: "$12" }}>
            <Col css={{ width: "200px", height: "200px" }}>
              <Card.Image
                css={{borderRadius:"10px"}}
                src={item.images[0]}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={item.title}
              />
            </Col>
            <Col>
              <Text h2>{item.title}</Text>
              <Text size={"$xl"}>{item.description}</Text>
            </Col>
            <Col css={{ width: "auto" }}>
              <Text
                css={{
                  color: "$accents7",
                  fontWeight: "$semibold",
                }}
                size={"$2xl"}
              >
                ${item.price}
              </Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row justify={"space-between"}>
            <Col>
              <Button
                color={"error"}
                icon={<TrashIcon width={24} />}
                onClick={() => {
                  setCart({ type: "delete", product: item });
                }}
              >
                Remove
              </Button>
            </Col>
            <Col css={{ width: "auto" }}>
              <Button.Group>
                <Button
                  onClick={() => {
                    setCart({ type: "remove", product: item });
                  }}
                >
                  -
                </Button>
                <Button>{item.quantity}</Button>
                <Button
                  onClick={() => {
                    setCart({ type: "add", product: item });
                  }}
                >
                  +
                </Button>
              </Button.Group>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
export default CartItem;