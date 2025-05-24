import { API_BASE_URL } from "@config/api";

export const RefreshToken = async (refreshToken: string): Promise<String> => {
    try {
        const response = await fetch(`${API_BASE_URL}/refreshToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(refreshToken)
        });
        if (!response.ok) {
            throw new Error("Failed to Refresh Token");
        }

        const data = await response.text();
        return data;

    } catch (error) {
        console.error("Error Refresh Token:", error);
        return "";
    }
}