import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
const api_key = "wyyrrqcqpsyc";
const api_secret = "vgv6pmgur46kmb6kbfdtabjstarfsz5c6tsn5f4j2w9aa4u9anavrdkuv8djpnm6";
// const user_id = "user_2tOzUNfUEXTVvLuZ4EFfWR51HlQ";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log('A NEW USER HAS BEEN CREATED')
    const client = await clerkClient()

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    })
    return Response.json({ message: 'Hello World' })
}