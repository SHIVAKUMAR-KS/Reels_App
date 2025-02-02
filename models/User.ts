import mongoose,{ model, Schema,models } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        //match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


//Hooks 
UserSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const User = models?.User ||model<IUser>("User",UserSchema)

export default User;