import mongoose, { mongo } from 'mongoose';

const mongoConnection = url => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));
}

export default mongoConnection;