import {FC} from "react"
import {Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {NavigationProps} from "./navigation.types.ts";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks";

export const Navigation: FC<NavigationProps> = ({ points }) => {
    const { token } = useAppSelector(state => state.authReducer)

    return(
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            position="fixed"
            top={0}
            right={0}
            left={0}
            padding={5}
        >
            <Menu
                strategy={"absolute"}
            >
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant="outline"
                    fontSize={36}
                />
                <MenuList>
                    {
                        points.map(({ path, name }) =>
                            <Link
                                to={path}
                                key={path}
                            >
                                <MenuItem>
                                    {name}
                                </MenuItem>
                            </Link>
                        )
                    }
                </MenuList>
                <Text fontSize={32} lineHeight={0}>
                    Калужанин отдыхает
                </Text>
                <div>
                    {
                        Boolean(token) &&
                        <Button
                            backgroundColor="#ff3333"
                            variant="solid"
                            color={"#ffffff"}
                        >
                            Выйти
                        </Button>
                    }
                </div>
            </Menu>
        </Box>
    )
}