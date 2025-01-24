import React from 'react';
import CardCard from '../../widgets/CardCard/CardCard';
import { useParams } from 'react-router-dom';

function CardPage(props) {

  const {id} = useParams()
console.log(id);

    return (
        <div>
<CardCard id={id}/>
        </div>
    );
}

export default CardPage;