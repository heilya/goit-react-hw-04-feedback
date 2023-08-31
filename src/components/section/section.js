import React from 'react';
import { Title } from './section.styled';


export const Section = ({title, children}) =>{
    return(
        <div>
           <Title>{title}</Title>
           {children}
        </div>
    )
}