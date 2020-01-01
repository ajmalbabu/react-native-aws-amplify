// ******* Below is for S3

import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'

import  {withAuthenticator} from 'aws-amplify-react' 
import {Storage} from 'aws-amplify'

class App extends Component {

  // state = {fileUrl: '', file: '', fielname: ''}
  // handleChange = e => {
  //   const file = e.target.files[0]
  //   this.setState({
  //       fileUrl: URL.createObjectURL(file),
  //       file,
  //       fielname: file.name
  //   });
  // }
  // saveFile =  () => {
  //   Storage.put(this.state.fielname, this.state.file)
  //   .then( () => {
  //       console.log('Sucesfully saved file')
  //       this.setState({fileUrl: '', file: '', fielname:''})
  //   })
  //   .catch(err => {
  //       console.log('Error saving file:', err)
  //   })
  // }
  state = {fileUrl: ''}
  componentDidMount() {
    Storage.get('logo.svg')
    .then(data => {
      this.setState({fileUrl: data})
      console.log('file loaded',data)
    })
    .catch(err => {
      console.log('Error fetching file', err)
    })
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to react</h1>
        </header>
        {/* <input type='file' onChange={this.handleChange} />
        <button onClick={this.saveFile} >Save file</button> */}
        <img src={this.state.fileUrl} className="App-logo"  alt= ''/>
      </div>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});

// // ******* Below is for REST

// import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg'

// import  {withAuthenticator} from 'aws-amplify-react' 
// import {API} from 'aws-amplify'

// class App extends Component {

//   state = {people: []}
//   async componentDidMount() {
//     const data = await API.get('peopleapi','/people')
//     this.setState({people: data.people})
//   }
//   render() {
    
//     return (
//       <div className="App">
//         <header className="App-header" >
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to react</h1>
//         </header>
//         {
//           this.state.people.map((person, i) =>(
//             <div>
//               <h3>{person.name}</h3>
//               <h3>{person.hair_color}</h3>
//             </div>
//           ))
//         }
//       </div>
//     );
//   }
// }

// export default withAuthenticator(App, {includeGreetings: true});


// ******* Below is for graphQL

// import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg'

// import {Auth} from 'aws-amplify'
// import {API, graphqlOperation} from 'aws-amplify'

// const ListTodos = `
// query  {
//   listTodos {
//     items {
//       id name description completed
//     }
//   }
// }
// `

// class App extends Component {
//   state = {todos: []}
//   async componentDidMount() {
//     const todoData = await API.graphql(graphqlOperation(ListTodos))
//     this.setState({todos: todoData.data.listTodos.items})

//   }
//   render() {
    
//     return (
//       <div className="App">
//         <header className="App-header" >
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to react</h1>
//         </header>
//         {
//           this.state.todos.map((todo,i) => (
//             <li key={todo.id}>
//               <div>
//                 <h3>{todo.name}</h3>
//                 <p>{todo.description}</p>
//               </div>
//             </li>
//           ))

//         }
//       </div>
//     );
//   }

// }

// export default App

// ******* Below is our own auth

// import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg'

// import {Auth} from 'aws-amplify'


// const styles =  {
//   input: {
//     height: 35, margin: 5
//   }
//  }

// class App extends Component {

//   state = { username: '',password: '', email: '', phone_number: '', authenticationCode: '', step: 0}
//   onChange = e => {
//     this.setState({[e.target.name]: e.target.value})
//   }
//   signUp = async() =>  {
//     const {username, password, email, phone_number} = this.state
//     try {
//       await Auth.signUp({username,password, attributes: {email, phone_number}})
//       console.log('Sucessfully signed up')
//       this.setState({step: 1})                             
//     } catch(err) {console.log('error signing up:' , err)}
//   }
//   confirmSignUp = async() => {
//     const {username,authenticationCode} = this.state
//     try {
//       await Auth.confirmSignUp(username,authenticationCode)
//       console.log('user sucessfully sgned up')
//     } catch(err) {console.log('error confirmming signing up:' , err)}

//   }
//   render() {
//       return (
//         <div className="App">
//           {
//             this.state.step === 0 && (
//               <div>
//                 <input placeholder='username' onChange={this.onChange} name='username' style={styles.input}/>
//                 <input placeholder='password' onChange={this.onChange} name='password' style={styles.input}/>
//                 <input placeholder='email' onChange={this.onChange} name='email' style={styles.input}/>                             
//                 <input placeholder='phone number' onChange={this.onChange} name='phone_number' style={styles.input}/>  
//                 <button onClick={this.signUp}>Sign Up</button>
//               </div>
//             )
//           }
//           {
//             this.state.step === 1 && (
//               <div>
//                 <input placeholder='username' onChange={this.onChange} name='username' style={styles.input}/>
//                 <input placeholder='authentication code' onChange={this.onChange} name='authenticationCode' style={styles.input}/>
//                 <button onClick={this.confirmSignUp}>Confirm Sign Up</button>
//               </div>
//             )
//           }          
//         </div>
//       );
//     }
// }


// export default App



// ********* Below is default aws auth 

// import React, { Component } from 'react';
// import './App.css';

// import  {withAuthenticator} from 'aws-amplify-react' 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default withAuthenticator(App, {includeGreetings: true});