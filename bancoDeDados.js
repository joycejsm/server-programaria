import chalk from 'chalk';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

async function connectionBD () {
    try{
    console.log(chalk.bgBlue('The connection has initiated!'))

    await mongoose.connect(process.env.MONGO_URL)

    console.log('Connection sucefully done!')
    } catch(erro) {
        console.log(erro);  
    }
} 

export default connectionBD;