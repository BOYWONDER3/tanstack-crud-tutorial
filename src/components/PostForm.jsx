import { useState } from "react";

const PostForm = () => {

const [post, setPost] = useState({
        title:'',
        body:''
    })

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const renderField = (label) => (
        <div className="space-x-5 space-y-5">
            <label>{label}</label>
            <input value={post[label.toLowerCase()]} onChange={handleChangeInput} className="border-2 border-black pl-2" type="text" name={label.toLowerCase()} />
        </div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        setPost({
            title: '',
            body: ''
    })
    }

    return (
      <form onSubmit={handleSubmit}>
        {renderField('Title')}
        {renderField('Body')}
        <button type="submit" className="border-2 border-neutral-600 rounded-md px-3 py-1 mt-5 bg-amber-50">Submit</button>
      </form>
    )
}

export default PostForm;