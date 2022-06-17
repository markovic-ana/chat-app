import './App.css'
import UserList from './components/UserList/UserList'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Chatty 🤖</h1>
      </header>
      <div className="body">
        <div className="userList">
          <UserList />
        </div>
        <div className="chat"></div>
      </div>

      <footer className="footer">
        <h3>Chatty 🤖</h3>
        <hr className="hr"></hr>
        <div className="footerLinks">
          <div className="links1">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
          </div>
          <div className="links2">
            <a href="#">Industries</a>
            <a href="#">References</a>
            <a href="#">Partnerships</a>
          </div>
          <div className="links3">
            <a href="#">Careers</a>
            <a href="#">Locations</a>
            <a href="#">Imprint</a>
          </div>
        </div>
        <p className="footerText">CHATTY 2021.</p>
      </footer>
    </div>
  )
}

export default App
