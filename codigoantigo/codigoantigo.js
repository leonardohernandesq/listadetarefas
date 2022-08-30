// import { useState, useEffect } from 'react';
// import { db, auth } from './firebaseConnetion';
// import {
//   doc,
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
//   onSnapshot,
// } from 'firebase/firestore'

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth'

// import './app.css';

// function App() {

//   const [titulo, setTitulo] = useState('');
//   const [autor, setAutor] = useState('');
//   const [idPost, setIdPost] = useState('');

//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//   const [user, setUser] = useState(false);
//   const [userDetail, setUserDetail] = useState([]);

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function loadPosts() {
//       const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
//         let listaPost = [];

//         snapshot.forEach((doc) => {
//           listaPost.push({
//             id: doc.id,
//             titulo: doc.data().titulo,
//             autor: doc.data().autor
//           })
//         })

//         setPosts(listaPost);
//       })
//     }

//     loadPosts();
//   }, [])

//   useEffect(() => {
//     async function checkLogin() {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           setUser(true);
//           setUserDetail({
//             uid: user.uid,
//             email: user.email
//           })
//         } else {
//           setUser(false);
//           setUserDetail({});
//         }
//       })
//     }
//     checkLogin()
//   }, [])

//   async function excluirPost(id) {
//     const docRef = doc(db, "posts", id)
//     await deleteDoc(docRef)
//       .then(() => {
//         alert("Post deletado com sucesso")
//       })
//       .catch(() => {
//         alert("deu erro a solução")
//       })
//   }

//   async function atualizarPost() {

//     const docRef = doc(db, "posts", idPost)
//     await updateDoc(docRef, {
//       titulo: titulo,
//       autor: autor
//     })
//       .then(() => {
//         console.log('post atualizado')
//         setIdPost('')
//         setTitulo('')
//         setAutor('')
//       })
//       .catch(() => {
//         console.log("erro ao att")
//       })

//   }

//   async function buscarPost() {

//     const postsRef = collection(db, "posts")
//     await getDocs(postsRef)
//       .then((snapshot) => {
//         let lista = [];

//         snapshot.forEach((doc) => {
//           lista.push({
//             id: doc.id,
//             titulo: doc.data().titulo,
//             autor: doc.data().autor
//           })
//         })

//         setPosts(lista);

//       })
//       .catch((error) => {
//         console.log("DEU ALGUM ERRO AO BUSCAR")
//       })



//     // await getDoc(postRef)
//     //   .then((snapshot) => {
//     //     setAutor(snapshot.data().autor)
//     //     setTitulo(snapshot.data().titulo)
//     //   })
//     //   .catch(() => {
//     //     console.log('erro ao buscar')
//     //   })



//   }


//   async function handleAdd() {

//     // await setDoc(doc(db, "posts", "12345"), {
//     //   titulo: titulo,
//     //   autor: autor
//     // })
//     //   .then(() => {
//     //     console.log("Dados Registrados no Banco")
//     //   })
//     //   .catch((error) => {
//     //     console.log("Gerou Error" + error)
//     //   })

//     await addDoc(collection(db, "posts"), {
//       titulo: titulo,
//       autor: autor
//     })
//       .then(() => {
//         console.log("Dados Registrados no Banco")
//         setAutor('')
//         setTitulo('')
//       })
//       .catch((error) => {
//         console.log("Gerou Error" + error)
//       })

//   }


//   async function novoUsuario() {
//     await createUserWithEmailAndPassword(auth, email, senha)
//       .then(() => {
//         alert('cadastrado com sucesso')
//         setEmail('')
//         setSenha('')
//       })
//       .catch(() => {
//         console.log('error ao cadastrar')
//       })
//   }

//   async function logarUsuario() {
//     await signInWithEmailAndPassword(auth, email, senha)
//       .then((value) => {

//         alert('Usuário Logado')

//         setUserDetail({
//           uid: value.user.uid,
//           email: value.user.email,
//         })
//         setUser(true)

//         setEmail('')
//         setSenha('')

//       })
//       .catch(() => {
//         alert('Erro no Login')
//       })
//   }

//   async function fazerLogout() {
//     await signOut(auth)
//     setUser(false);
//     setUserDetail({});
//   }

//   return (
//     <div>
//       <h1>React + FireBase</h1>

//       <div className='container'>

//         {user && (
//           <div>

//             <strong>Seja bem-vindo(a) (você está logado!)</strong><br />
//             <span>ID: {userDetail.uid}</span><br />
//             <span>Email: {userDetail.email}</span><br />
//             <button onClick={fazerLogout}>Deslogar</button>
//             <br /><br />

//           </div>
//         )}

//         <label>Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Digite um email: "
//         />
//         <label>Senha</label>
//         <input
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           placeholder="Digite uma senha: "
//         />
//         <button onClick={() => novoUsuario()}>Cadastrar</button><br />
//         <button onClick={() => logarUsuario()}>Login</button><br />
//       </div>

//       <div className='container'>

//         <label>ID do Post:</label>
//         <input
//           placeholder='Digite o Id que quer alterar'
//           value={idPost}
//           onChange={(e) => setIdPost(e.target.value)}
//         />

//         <label>Titulo:</label>
//         <textarea
//           type="text"
//           placeholder='Digite o titulo'
//           value={titulo}
//           onChange={(e) => setTitulo(e.target.value)}
//         />

//         <label>Autor:</label>
//         <input
//           type="text"
//           placeholder="Autor do post"
//           value={autor}
//           onChange={(e) => setAutor(e.target.value)}
//         />

//         <button onClick={handleAdd}>Cadastrar</button>
//         <button onClick={buscarPost}>Buscar Post</button>
//         <button onClick={atualizarPost}>Atualizar Post</button>

//         <ul>
//           {posts.map((post) => {
//             return (
//               <li key={post.id}>
//                 <span>Id: {post.id} </span> <br />
//                 <span>Titulo: {post.titulo} </span> <br />
//                 <span>Autor: {post.autor}</span>
//                 <button onClick={() => excluirPost(post.id)}>Excluir</button>
//                 <hr />
//               </li>
//             )
//           })}
//         </ul>
//       </div>

//     </div>
//   );
// }

// export default App;
