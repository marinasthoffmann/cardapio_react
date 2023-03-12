import './Footer.css';

export const Footer = () => {
    return(
        <footer className='footer'>
            <p>Le Petit | {new Date().getFullYear()}</p>
        </footer>
    )
}