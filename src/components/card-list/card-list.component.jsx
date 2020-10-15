import React from 'react';

import './card-list.styles.css';

import {Card} from '../card/card.component';

//props is the parameter we get from function component
//children is what get passed inside the function.
export const CardList = props => (
    <div className='card-list'> {
        props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
            
        ))
    }    
    </div>
);