import React from 'react'
import { Container, Col } from 'react-bootstrap'
import '../styles/Animal.css'

export default function Animal({name, age, breed, photos, attributes, colors }) {
    return (
        <div className="animal-card">
            <img className="animal-image" src={photos[0].full} alt={name} />
            <h2>{name}</h2>
            <ul>
                <li>Breed: {breed}</li>
                <li>Color: {colors}</li>
                <li>Age: {age}</li>
                <li>Spayed/Neutered: {attributes.spayed_neutered ? "Yes" : "No"}</li>
            </ul>
        </div>
        
    )
}
