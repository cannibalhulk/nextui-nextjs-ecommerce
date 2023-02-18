import Link from "next/link";
import { Navbar, Button, Badge, Text,Dropdown, Avatar } from '@nextui-org/react'
import { Poppins } from '@next/font/google'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { ShoppingCartIcon, UserIcon} from "@heroicons/react/24/solid";
import { useCart } from "../modules/AppContext";

export const poppins = Poppins({
    weight:['400','500','600','700','800','900'],
    subsets:['latin']
})
  
function Navbarr() {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const cart = useCart()
    return (
      <>
        <Navbar isBordered variant={"floating"}>
          <Navbar.Brand>
            <Link href="/">
              <Text h3 color={isDark ? "#fff" : "black"} className={poppins.className} weight="bold">Techno</Text>
            </Link>
          </Navbar.Brand>
          <Navbar.Content activeColor={"secondary"}>
            <Navbar.Item>
              <Badge color={"primary"} content={cart.length} variant="flat">
                <Button  as={Link} href="/cart" auto >
                  <ShoppingCartIcon width="24"/>
                </Button>
              </Badge>
            </Navbar.Item>
            <Navbar.Item>
              <Dropdown>
                  <Dropdown.Trigger>
                    <Avatar squared icon={<UserIcon color={isDark ? "#fff" : "black"} width={"24"}/>} />
                  </Dropdown.Trigger>
                  <Dropdown.Menu>
                    <Dropdown.Item key="Profile">Profile</Dropdown.Item>
                    <Dropdown.Item key="Orders">Orders</Dropdown.Item>
                    <Dropdown.Section>
                      <Dropdown.Item key="Logout" color='error'>Logout</Dropdown.Item>
                    </Dropdown.Section>
                  </Dropdown.Menu>
                </Dropdown>
            </Navbar.Item>
                
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Navbar.Content>
        </Navbar>
      </>
    )
  }

  export default Navbarr
  