import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar({userName, type}:SidebarComponentProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box>
        <Group p={10}>
            <Indicator inline offset={7} color="red" position="bottom-end" size={12} withBorder>
              <Avatar src="https://media.discordapp.net/attachments/874212916319113266/1412110206552248400/2.jpg?ex=68b7199c&is=68b5c81c&hm=04c507712317fca13206cc3211688fb655ad4389e1ebffff77a36dc1d8e2e234&=&format=webp&width=941&height=930" radius={"xl"} size={"md"}/>
            </Indicator>
            <Text component={RouterNavLink} to="/">User : {userName} : {type} </Text>
        </Group>
      </Box>
    </Stack>
  );
}
