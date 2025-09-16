import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export interface SendMessageRequest {
  message: string;
}
export interface SendMessageResponse {
  text: string;
}

export async function sendMessageApi(
  payload: SendMessageRequest
): Promise<SendMessageResponse> {
  const { data } = await axios.post<SendMessageResponse>(
    "/api/messages/send",
    payload
  );
  return data;
}