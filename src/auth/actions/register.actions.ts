import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response"

export const registerAction = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    try {
        console.log("data ", email,
            password,
            fullName)
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email,
            password,
            fullName
        })

        return data
    } catch (error) {
        throw error;
    }
}