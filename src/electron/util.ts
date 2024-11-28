import { shell } from "electron";

export function isDev(): boolean {
    return process.env.NODE_ENV === 'development';
}

