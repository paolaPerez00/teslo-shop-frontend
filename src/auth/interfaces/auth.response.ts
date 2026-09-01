import type { User } from "@/interfaces/user.inteface";

export interface AuthResponse {
    user: User;
    token: string;
}
