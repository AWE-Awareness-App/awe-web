import { API_BASE_URL } from "@config/api";
import { SignInPayload } from "@interfaces/SignInPayload";

export const SignIn = async (payload: SignInPayload): Promise<String> => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error("Failed to Sign In");
        }

        const data = await response.text();
        return data;

    } catch (error) {
        console.error("Error Sign In:", error);
        return "";
    }
}

