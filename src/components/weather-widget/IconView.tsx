import React, { ReactElement } from 'react';
import './IconView.css';

export default function IconView({ type }: { type: string }): ReactElement {
    const cssClasses: {
        [k: string]: string;
    } = {
        drizzle: 'rain',
        clouds: 'rain',
        rain: 'rain',
        snow: 'snow',
        clear: 'night',
        thunderstorm: 'storm',
        sunny: 'sunny',
        'sun-shower': 'sunny'
    };
    const cardStyle: string = cssClasses[type.toLowerCase()] || '';
    return (
        <div className={'card card-' + cardStyle}>
            <div className={cardStyle}> </div>
        </div>
    );
}
