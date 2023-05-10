import {FC} from "react"
import {Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {NavigationProps} from "./navigation.types.ts";
import {Link} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {authSlice} from "../../store/slices/auth.slice.ts";

export const Navigation: FC<NavigationProps> = ({ points }) => {
    const { user } = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const onExitHandler = () => {
        dispatch(authSlice.actions.setUser({
            email: "",
            roles: [],
            password: "",
            _id: "",
            patientId: ""
        }))
    }
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
            backgroundColor={"teal"}
        >
            <Menu
                strategy={"absolute"}
            >
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant={"contained"}
                    fontSize={36}
                    color={"white"}
                />
                <MenuList >
                    {
                        points.map(({ path, name }) =>
                            <Link
                                to={path}
                                key={path}
                            >
                                <MenuItem
                                    backgroundColor={"#fff"}
                                >
                                    {name}
                                </MenuItem>
                            </Link>
                        )
                    }
                </MenuList>
                <Text
                    fontSize={32}
                    lineHeight={0}
                    marginTop={5}
                    color="white"
                    fontWeight={700}
                >
                    Калужская Частная поликлиника им. Н.Э.Баумана
                </Text>
                <div>
                    {
                        user.roles.length > 0 &&
                        <Button
                            backgroundColor="#ff3333"
                            variant="solid"
                            color={"#ffffff"}
                            onClick={onExitHandler}
                        >
                            Выйти
                        </Button>
                    }
                </div>
            </Menu>
        </Box>
    )
}