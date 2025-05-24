import { API_BASE_URL } from "@config/api";

export const SignOut = async (refreshToken: string): Promise<String> => {
    try {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(refreshToken)
        });
        if (!response.ok) {
            throw new Error("Failed to Sign Out");
        }

        const data = await response.text();
        return data;

    } catch (error) {
        console.error("Error Sign Out:", error);
        return "";
    }
}