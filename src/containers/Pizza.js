import React, { Component } from 'react'

import pizzaImage  from '../components/PizzaImage/PizzaImage'

class Pizza extends COmponent {
    render() {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        )
    }
}

export default Pizza