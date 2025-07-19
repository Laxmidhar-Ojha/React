import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
        client=new Client();
        account;

        constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
            this.account=new Account(this.client);
        }

        createAccount=async ({email,password,name})=>{
            try{
                const userAcount=this.account.create(ID.unique(),email,password,name);
                if(userAcount) return this.login(email,password)
                else return userAcount
            }catch(error){
                throw error;
            }
        }

        login = async({email,password})=>{
            try {
                return this.account.createEmailPasswordSession(email,password)
            } catch (error) {
                throw error
            }
        }

        getCurrentUser= async()=>{
            try {
                return await this.account.get()
            } catch (error) {
                throw error
            }
            return null
        }

        logout= async()=>{
            try {
                await this.account.deleteSessions();
            } catch (error) {
                throw error
            }
        }
}

const authService=new AuthService();

export default authService