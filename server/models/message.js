const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({ 
    when: {
        type: Date, 
        default: Date.now
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    room: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room' 
    }, 
    body: String
});

module.exports = mongoose.model('Message', messageSchema)


