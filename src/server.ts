import express from 'express';
import {getRepository} from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orfanatos', (req, res)=>{

    const {
        name, 
        latitude, 
        longitude, 
        about, 
        instructions, 
        opening_hours, 
        open_on_weekends
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);
    console.log(orphanagesRepository);
    const orphanage = orphanagesRepository.create({ 
        name, 
        latitude, 
        longitude, 
        about, 
        instructions, 
        opening_hours, 
        open_on_weekends
    }
        )
        orphanagesRepository.save(orphanage);

        res.send('');
});

app.listen(3333);
