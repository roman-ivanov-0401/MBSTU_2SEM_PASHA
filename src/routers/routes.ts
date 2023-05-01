import {MenuPointNavigationProps} from "../components/Navigation/navigation.types.ts";

export const adminRoutes: MenuPointNavigationProps[] = [
    {
        name: "Редактирование услуг",
        path: "/manageServices"
    },
    {
        name: "Редактирование пациентов",
        path: "/managePatients"
    },
    {
        name: "Редактирование врачей",
        path: "/manageDoctors"
    }
]

export const userRoutes: MenuPointNavigationProps[] = [
    {
        name: "Услуги",
        path: "/services"
    },
    {
        name: "Профиль",
        path: "/profile"
    }
]

export const notAuthorizedRoutes: MenuPointNavigationProps[] = [
    {
        name: "Войти",
        path: "/login"
    },
    {
        name: "Зарегистрироваться",
        path: "/register"
    }
]