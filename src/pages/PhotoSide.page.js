import React from 'react';
import Photo from '../components/Photo';
import styles from '../components/style/Photo.module.css';

const planets = [
    {
        name: 'Alderaan',
        images: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev17yq-ce816241-f6aa-444a-94b6-7104f945e050.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MTd5cS1jZTgxNjI0MS1mNmFhLTQ0NGEtOTRiNi03MTA0Zjk0NWUwNTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmhMzTExSOrmbu-HzPseIJ_H09JyCOV8S3UrqpE9Kfg',
        rotation_period: '24',
        orbital_period: '364',
        diameter: '12500',
        climate: 'temperate'
    },

    {
        name: 'Yavin IV',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVWEMfDFXEP7E_6vVQGCs5DjB0Q-bG_1PJJzXLdWJEXra09uslElwoCSIM9yw_q_DfRU&usqp=CAU',
        rotation_period: '24',
        orbital_period: '4818',
        diameter: '10200',
        climate: 'temperate, tropical'
    },

    {
        name: 'Hoth',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSSfUluSC6-G5nwCz0z8kWkbKV2F1fUX70Enh9nzUpy8aKlKimNcJYzLgeshqXMjqy8Y&usqp=CAU',
        rotation_period: '23',
        orbital_period: '549',
        diameter: '7200',
        climate: 'frozen'
    },

    {
        name: 'Dagobah',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrg-gFswqoGftkh1qtILe5y1hq_ORqbVg2wYbnK2OLVvNhT8itfj_KQUC4IBpAmplXOHs&usqp=CAU',
        rotation_period: '23',
        orbital_period: '341',
        diameter: '8900',
        climate: 'murky'
    },

    {
        name: 'Bespin',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz3YjQQySmTBkkK8iB4Ioz0aIxydLi3Gr9oXAue_s66Q6TxLFR-eqHnsFtYH-i4yI9QU&usqp=CAU',
        rotation_period: '12',
        orbital_period: '5110',
        diameter: '118000',
        climate: 'temperate'
    },

    {
        name: 'Endor',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFckWLVw-Vfp5gONeJRQB0_HzIulynskhVegiddmhVHxpVKONshUOGVQW7Amdr44WK5k&usqp=CAU',
        rotation_period: '18',
        orbital_period: '402',
        diameter: '4900',
        climate: 'temperate'
    },

    {
        name: 'Naboo',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPGSKY8ME3SdRDxbAvSStqmmvn352wrTwtFdXK3uoeZHohPeDaTEBZlX9sYmzLfvPASs&usqp=CAU',
        rotation_period: '26',
        orbital_period: '312',
        diameter: '12120',
        climate: 'temperate'
    },

    {
        name: 'Coruscant',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpG-x_VuaQlniJTHqVDVpB9voFzSpDbQJah0_B1W7k_vtuADMsPzlCfpzx2R2LwkyEg_M&usqp=CAU',
        rotation_period: '24',
        orbital_period: '368',
        diameter: '12240',
        climate: 'temperate'
    },

    {
        name: 'Kamino',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQK895dhETqULO-VHhtfLc5iyAy2BhUb0uvhE2PbDba9LhhG8Bb-A03p6yRaGS7XRVz4&usqp=CAU',
        rotation_period: '27',
        orbital_period: '463',
        diameter: '19720',
        climate: 'temperate'
    }
];


function PhotoSidePage(props) {
   

    return (
        <div className={styles['block']}>
            {planets.map((el, i) => <Photo {...el} key={i} />)}
        </div>
    );
}



export default PhotoSidePage;