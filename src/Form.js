import React, {useState} from 'react'


const Form = (props) => {
    console.log(props)

    return (
        <div className="form">
            <form action="https://www.wikipedia.com">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name"></input>
                
                <label htmlFor="email">Email: </label>
                <input type="email" name="email"></input>

                <select>
                    <option>Front-End Developer</option>
                    <option>Back-End Developer</option>
                    <option>Designer</option>
                    <option>UX Specialist</option>
                    <option>SEO expert</option>
                </select>
                <button type="submit">Send</button>
            </form>




        </div>
    )

}



export default Form