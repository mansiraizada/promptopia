import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

//Google authentication

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {

    },

    //In order to find out the session we must first login the user
    async signIn({profile}) {
        try{
            await connectToDB();
            //user already exist

            //new user

            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }
})

export {handler as GET, handler as POST};