import axios from "axios";
import React, { useState } from "react";

const CreateTalent = (props) => {
    { console.log(props) }

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState("")
    const [file, setFile] = useState('')

    console.log(imageUrl)

    const uploadImage = async () => {
        const form = new FormData()
        form.append('file', file)
        form.append("upload_preset", "lobnasm");
        try {
            await axios.post("https://api.cloudinary.com/v1_1/dzhteldwd/upload", form).then((result) => {
                console.log(result.data.secure_url)
                setImageUrl(result.data.secure_url)
            })
        } catch (error) {
            console.log(error)
        } 

    }
  
    return (
        <div>

            <h1>Create New Talent</h1>
            <input type="text" placeholder=" Your Title" value={title}
                onChange={(e) => { setTitle(e.target.value) }} />
            <input type="text" placeholder=" Your Description" value={description}
                onChange={(e) => { setDescription(e.target.value) }} />

            <img src={imageUrl} />

            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <br />
            <button onClick={() => { uploadImage() }}>upload!</button>
            <input type="text" placeholder=" Your Price" value={price} onChange={(e) => {
                setPrice(e.target.value)
            }} />
            <input type="text" placeholder=" Your Category" value={category} onChange={(e) => {
                setCategory(e.target.value)
            }} />

            <input type="text" placeholder="Your Rating" value={rating}
                onChange={(e) => { setRating(e.target.value) }}
            />
            <button value="submit" onClick={() => {
                props.add({
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    price: price,
                    category: category,
                    rating: rating,
                    freelancer_id: "1"
                })
            }}>Create</button>
        </div>
    )
}

export default CreateTalent