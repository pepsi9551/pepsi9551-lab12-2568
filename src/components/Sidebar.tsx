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
              <Avatar src="public\pic.jpg" radius={"xl"} size={"md"}/>
            </Indicator>
            <Text component={RouterNavLink} to="/">User : {userName} : {type} </Text>
        </Group>
      </Box>
    </Stack>
  );
}
