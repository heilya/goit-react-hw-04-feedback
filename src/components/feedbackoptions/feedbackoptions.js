import React from 'react';
import { Button,Wrapper } from './feedbackoptions.styled';




export const FeedBackOptions = ({onLeaveFeedback}) => {
    return(
        <Wrapper>
            <Button onClick={()=>onLeaveFeedback('good')}>Good</Button>
            <Button onClick={()=>onLeaveFeedback('neutral')}>Neutral</Button>
            <Button onClick={()=>onLeaveFeedback('bad')}>Bad</Button>
        </Wrapper>
    )
};




