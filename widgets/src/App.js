import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
    {
        title:'qué es react',
        content:'Js framework'
    },
    {
        title:'por qué react',
        content:'es muy popular'
    },
    {
        title:'cómo se usa',
        content:'escribiendo componentes reutilizables'
    },
]



export default () => {
    return (
        <div>
           <Search/>
        </div>
    )
}