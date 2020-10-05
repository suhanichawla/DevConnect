import React,{Component} from "react"

class Authform extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            username:"",
            password:"",
            profilePic:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const authType=this.props.signup ? "signup" :"signin";
        this.props.onAuth(authType,this.state).then(()=>{
           this.props.history.push("/")
        })
        .catch(()=>{
            return;
        })
    }
    render(){
        const {email,username,password,profilePic}=this.state;
        const {heading,buttontext,signup,error,history,removeError}=this.props;
        history.listen(()=>{
            removeError();
        })
        return(
            <div>
                <div className="row-justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {error.message && <div className="alert alert-danger">{error.message}</div>}
                            <label htmlFor="username">Username:</label>
                            <input className="form-control" 
                                id="username" name="username" 
                                onChange={this.handleChange} 
                                value={username} 
                                type="text" 
                            />
                            <label htmlFor="password">Password:</label>
                            <input className="form-control" 
                                id="password" name="password" 
                                onChange={this.handleChange}
                                type="password" 
                            />
                            {signup && (
                                <div>
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" 
                                    id="email" name="email" 
                                    onChange={this.handleChange} 
                                    value={email} 
                                    type="text" 
                                />
                                <label htmlFor="profilePic">Profile Picture:</label>
                                <input className="form-control" 
                                    id="profilePic" name="profilePic" 
                                    onChange={this.handleChange} 
                                    value={profilePic} 
                                    type="text" 
                                />
                                </div>
                            )}
                            <button className="btn btn-primary btn-block btn-lg" type="submit">{buttontext}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Authform;