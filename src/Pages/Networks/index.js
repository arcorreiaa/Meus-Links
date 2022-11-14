import './networks.css'
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { db } from '../../services/firebaseConnection'
import {
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link")
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data().facebook)
            setLinkedin(snapshot.data().linkedin)
            setInstagram(snapshot.data().instagram)
          }
        })
    }

    loadLinks();
  }, [])

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      linkedin: linkedin,
      instagram: instagram
    })
      .then(() => {
        toast.success("Urls salvas com sucesso!")
      })
      .catch((error) => {
        toast.error("Erro ao salvar " + error)
      })

  }


  return (
    <div className='admin-container'>
      <Header />

      <h1 className='title-social'>Suas Redes sociais</h1>

      <form className='form' onSubmit={handleSave}>

        <label className='label'>Link do Linkedin</label>
        <Input
          placeholder="Digite a url do Linkedin..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className='label'>Link do Facebook</label>
        <Input
          placeholder="Digite a url do Facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className='label'>Link do Instagram</label>
        <Input
          placeholder="Digite a url do Instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <button className='btn-register' type='submit'>
          Salvar links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  )
}