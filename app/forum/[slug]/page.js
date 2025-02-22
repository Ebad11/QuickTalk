import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'wispy-snowflake-2';
const userName = 'wispy';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoid2lzcHktc25vd2ZsYWtlLTIiLCJleHAiOjE3NDAyNzAyNTB9.aii5FTIKIAxpKtlCr4mTDGEhfDfUK7Qwg_QapjikuLU';

// Initialize Stream Chat client                    
export default async function Page({ params }) {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
  }