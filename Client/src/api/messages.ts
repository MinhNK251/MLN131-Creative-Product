import axios from "axios";

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
    "http://localhost:5000/api/messages/send",
    payload
  );
  return data;
}