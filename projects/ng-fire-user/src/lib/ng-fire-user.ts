export interface NgFireUser {
    uid: string;
    email: string;
    displayName: string;
    birthDate: Date;
    profileImagePath: string;
    locked: boolean;
    admin: boolean;
}