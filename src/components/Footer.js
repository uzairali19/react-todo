import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>
                Copyright Uzair Ali &copy; 2020
            </p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
