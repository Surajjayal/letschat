import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
    Copyright = () => {
        return (
            <h2 variant="body" color="textSecondary" align="center">
                {'Copyright © '}
                {'Jayalji '}
                {new Date().getFullYear()}
                {`.`}
            </h2>
        )
    }
    render() {
        return (
            <footer>
                <div className="footer 1-box is-center">
                    {this.Copyright()}
                </div>
            </footer>
        )
    }
}
export default Footer;