import { connect } from "mongoose";

const DbConnection = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xyevmbo.mongodb.net/${process.env.DB_NAME}`;
    const Conn = await connect(uri);

    if (Conn) {
      console.log(`✅ Database Connected: ${Conn.connection.host}`);
    }
  } catch (error) {
    console.error('❌ Error on connection:', error.message);
  }
};

export default DbConnection;
