import './About.css';
function About() {
    return (
        <><div className="form">
            <form>
            <input type="text" placeholder="Tell us something" />
            <input type="email" placeholder="Put Your Email"/>
                <input type="number" placeholder="Rate us" max={10} />
                <button className='submit' >Submit</button>
            </form> 
        </div>
           
      <footer className='footer' style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', position: 'absolute' ,bottom:'0px'}}>
      <p style={{ margin: '0' }}>©2023 E-Store created by <span className='span'>Abdullah Hosny</span></p>
    </footer>
          
        </>
        
    )
}
export default About;