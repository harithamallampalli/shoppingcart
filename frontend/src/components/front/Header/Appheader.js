import { Component} from "react";
import { Link } from "react-router-dom";
import './Header.css';
class Appheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            
        }
    }
    componentDidMount() {
        const user = localStorage.getItem('user');
        
        if (user) {
            this.setState({
                currentUser: user,
                      });
                }
        
    }
    logOut() {
        localStorage.removeItem('user');
        window.location.replace('/signin');
         }
      
    
    render() {
            const { currentUser } = this.state;
            
        return (
            <div className="header">
                <div><h1><Link to="/" className="Logo">SHOPPING CART</Link></h1></div>
                <div className="header-links">
                    <ul><li><Link to="/">Home</Link></li></ul>
                    {
                        currentUser ? (
                            <div className="header-links">
                                <ul><li><Link to="/products">products</Link></li></ul>
                                <ul><li><Link to="/cart">cart</Link></li></ul>
                                <ul><li><Link to="/signin" onClick={this.logOut}>signout</Link></li></ul>
                                <ul><li><h3 className="username">{this.state.currentUser}</h3></li></ul>
                            </div>
            
                        ) : (
                            <div className="header-links">
                                <div><ul><li><Link to="/signin">signin</Link></li></ul></div>
                                <div><ul><li><Link to="/signup">signup</Link></li></ul></div>
                            </div>
                            )
                    }



 
           </div>
                </div>

        )
    }
}
export default Appheader;