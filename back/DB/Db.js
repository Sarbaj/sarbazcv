import { connect } from "mongoose";

const DbConnection=async()=>{

    try {
        const Conn=await connect("mongodb+srv://sarbajmalek3456:ELON_MUSK2499@cluster0.xyevmbo.mongodb.net/cvbackend")
        if (Conn) {
            console.log(`✅ Database Connected: ${Conn.connection.host}`);
        }
        
    } catch (error) {   
        console.error('error on connection');
    }

}
export default DbConnection;
