const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        artist:  {
            type: String,
            required: true
        },
        genres: {
            type: [String],
            required: true
        },
        artwork: {
            type: String,
            required: true
        },
        releaseDate: {
            type: Date,
            required: true
        },
        trackList: {
            type: [String],
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
    }
)

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;