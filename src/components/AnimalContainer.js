import React from 'react'
import { Container } from 'react-bootstrap'
import Animal from './Animal'

export default function AnimalContainer({ animals }) {

    const displayAnimals = () => {
        return animals.map(animal => {
            return <Animal 
                        name={animal.name} 
                        age={animal.age} 
                        breed={animal.breed} 
                        photos={animal.photos} 
                        attributes={animal.attributes}
                        colors={animal.colors.primary}/>
        })
    }
    return (
        <Container>
            {displayAnimals()}
        </Container>
    )
}
