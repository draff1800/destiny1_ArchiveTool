import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Typography } from 'antd'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography.Title level={1} style={styles.title}>
          We need your permission...
        </Typography.Title>
        <Typography.Text style={styles.text}>
          Allow DAT to view your Destiny characters.
        </Typography.Text>
        <Button href={authoriseLink} type="primary" size="large" style={styles.button}>Authorise with Bungie.net</Button>
      </header>
    </div>
  );
}

const authoriseLink = "https://www.bungie.net/en/OAuth/Authorize?client_id=" 
  + process.env.REACT_APP_OAUTH_CLIENT_ID + "&response_type=code"

const styles = {
  title: {color: "white", fontWeight: "normal", marginBottom: 5},
  text: {fontSize: 18, color: "white", marginBottom: 20},
  button: {backgroundColor: "orange", color: "#353535", fontWeight: "bold"}
}

export default App;
