export enum Roles{
    PATIENT,
    ADMIN
}

export interface IUser {
    _id: string
    email: string
    password: string
    patientId: string
    roles: Roles[]
}