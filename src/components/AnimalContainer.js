import React from 'react'
import { Container,Row } from 'react-bootstrap'
import '../styles/AnimalContainer.css'
import Animal from './Animal'

export default function AnimalContainer({ animals }) {

    const displayAnimals = () => {
        return animals.map(animal => {
            return <Animal 
                        key={animal.id}
                        name={animal.name} 
                        age={animal.age} 
                        breed={animal.breed} 
                        photos={animal.photos} 
                        attributes={animal.attributes}
                        colors={animal.colors.primary}/>
        })
    }
    return (
        <Container className="animal-container" fluid>
                {displayAnimals()}
        </Container>
    )
}
