import './Contact.css'
function Contact_Us(){
    return (
        <>
            <div className="Contact">
                <form>
                    <label>Enter Your Name</label>
                    <br></br>
                    <input placeholder="enter name" type="text"></input>
                    <br></br>
                    <label>Enter Your Email</label>
                    <br></br>
                    <input placeholder="enter email" type="email"></input>
                    <br></br>
                    <label>Enter Your Phone</label>
                    <br></br>
                    <input placeholder="enter phone no" type="number"></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact_Us;