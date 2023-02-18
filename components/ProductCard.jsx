import { Button, Card, Col, Row, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { useCart, useDispatchCart } from "../modules/AppContext";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
    const { isDark, type } = useTheme();
    const { id, title, description, price, images } = product;

    const cart = useCart();
    const setCart = useDispatchCart();
    const [isAdded, setIsAdded] = useState(false);
    const handleAddToCart = (product) => {
        setCart({ type: "add", product });
        setIsAdded(true);
    };

    const checkIfAdded = (product) => {
        const found = cart.find((item) => item.id === product.id);
        if (found) {
        setIsAdded(true);
        } else {
        setIsAdded(false);
        }
    };
    useEffect(() => {
        checkIfAdded(product);
    }, []);


    return (
        <Card isPressable variant="bordered" css={{ w: "100%", h: "500px" }} as={Link} href={`products/${id}`}>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                src={images[0]}
                objectFit="cover"
                width="100%"
                height="100%"
                alt={title}
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                position: "absolute",
                p: "$8",
                bgBlur: "#ffffffcc",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row justify="space-between" align="top">
                            <Col>
                                <Text h3 color={isDark ? "#000" : "black"}>{title}</Text>
                                <Text
                                size={"$lg"}
                                color={isDark ? "#000" : "black"}
                                >
                                {description}
                                </Text>
                            </Col>
                            <Col css={{ width: "auto" }}>
                                <Text
                                css={{
                                    color: "$accents7",
                                    fontWeight: "$semibold",
                                    fontSize: "$2xl",
                                    pl: "$12",
                                }}
                                >
                                ${price}
                                </Text>
                            </Col>
                        </Row>
                        <Spacer y={1} />
                        <Button disabled={isAdded} onClick={() => handleAddToCart(product)} css={{ w: "100%" }}>
                            {isAdded ? "Added to cart" : "Add to cart"}
                        </Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default ProductCard