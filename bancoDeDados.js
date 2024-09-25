import chalk from 'chalk';
import mongoose from 'mongoose';

async function connectionBD () {
    try{
    console.log(chalk.bgBlue('The connection has initiated!'))

    await mongoose.connect('mongodb+srv://joyce:5vItQpIgfm7TpeMz@cluster0.xck9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    console.log('Connection sucefully done!')
    } catch(erro) {
        console.log(erro);  
    }
} 

export default connectionBD;