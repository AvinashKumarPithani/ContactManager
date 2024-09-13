import React, { useState } from 'react'
import AddPeopleForm from './AddPeopleForm'
import PeopleList from './PeopleList'

function ContactManager() {
    const people = ['Ravi', 'Raja', 'Rama']
    const [contacts, setContacts] = useState(people)
    const addPerson = (name) => {
        setContacts([...contacts, name])
    }
  return (
    <div>
        <h1>Contact Manager</h1>
        <AddPeopleForm handleSubmit={addPerson}/>
        <PeopleList data={contacts} />
    </div>
  )
}

export default ContactManager