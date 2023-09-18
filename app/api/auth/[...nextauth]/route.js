import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models//user";

//Google authentication using Next Auth

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();
        return session;
    },

    //In order to find out the session we must first login the user
    async signIn({profile}) {
        try{
            await connectToDB();
            //user already exist
            const existingUser =  await User.findOne({
                email: profile.email
            })
            //new user
             if(!existingUser) {
                await User.createOne({
                    email: profile.email,
                    username: profile.username.replace(" ", "").toLowerCase(),
                    image: profile.image
                })
             }
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }
})

export {handler as GET, handler as POST};