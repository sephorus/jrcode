import React from 'react';

function Card(props) {
    const { title, subtitle, caption, desc, buttons } = props;
    return (
        <div class="card">
            <div class="card-inner">
                <h2 class="headline4">{ title }</h2>
                <h2 class="subtitle1">{ subtitle }</h2>
                {
                    caption && <h2 class="caption">{ caption }</h2>
                }
            </div>
            <p class="desc">{ desc }</p>
            {
                buttons && <p>BUTTON CONTAINER WILL BE HERE</p>
            }
        </div>
    )
}

export default Card;