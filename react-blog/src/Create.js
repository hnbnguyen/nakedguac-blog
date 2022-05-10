import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mimi');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setTimeout(() => {
                console.log('new blog added');
                setIsPending(false);
                navigate('/');
            }, 1000)
        })
    }
    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>blog content</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>blog author</label>
                <select 
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mimi">mimi</option>
                    <option value="nakedguac">nakedguac</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>adding blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;