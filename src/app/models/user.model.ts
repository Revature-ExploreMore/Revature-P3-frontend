export interface User {
    id: number,
    name: string,
    userName:string,
    email: string,
    phoneNumber: string,
    
    hashedPassword: string,
    darkModePreference: boolean,
    registerDate:Date,
    roleId: number,
}
