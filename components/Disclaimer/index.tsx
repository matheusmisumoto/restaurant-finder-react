import styled from 'styled-components';

const Copyright = styled.div`
    padding: .5rem 1rem;
    border-radius: .75rem;
    box-sizing: border-box;
    background-color: ${(props) => props.theme?.colors?.box};
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme?.colors?.text};
    font-size: .75rem;
    font-weight: 500;
    & h2 {
        margin-top: .5rem;
        font-size: 1.125rem;
        font-weight: bold;
    }
    & p {
        margin: .5rem 0;
    }
    & a {
        color: ${(props) => props.theme?.colors?.primary};
    }
`

const Disclaimer = () => (
    <Copyright>
        <h2>About Tastin'</h2>
        <p><a href="https://github.com/matheusmisumoto/restaurant-finder-react" rel="noopener noreferrer" target="_blank">Repository on GitHub</a></p>
        <p>Developed by <a href="https://matheusmisumoto.dev/">Matheus Misumoto</a></p>
    </Copyright>
)

export default Disclaimer;