import React, { useState } from 'react'
import AddPeopleForm from './AddPeopleForm'

function ContactManager() {
    const [contacts, setContacts] = useState([])
    const addPerson = (name) => {
        setContacts([...contacts, name])
    }
  return (
    <div>
        <h1>Contact Manager</h1>
        <AddPeopleForm handleSubmit={addPerson}/>
    </div>
  )
}

export default ContactManager