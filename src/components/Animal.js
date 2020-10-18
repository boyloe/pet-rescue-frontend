import React from 'react'
import { Container } from 'react-bootstrap'

export default function Animal({name, age, breed, photos, attributes, colors }) {
    return (
        <Container>
            <img src={photos[0]} alt={name} />
        </Container>
    )
}
