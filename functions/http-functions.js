const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
//Create an express app and allow cors requests
const expressApp = express();
expressApp.use(cors({ origin: true }));
/**
 * Create a post endpoint and update the views field on the posted breweryId
 */
expressApp.post('/brewery-viewed', (req, res) => {
    console.log(req);
    const breweryId = req.body.breweryId;
    console.log(`brewery viewed ${breweryId}`);
    const docRef = admin.firestore().collection('breweries').doc(breweryId);
    return docRef.get().then(doc => {
        const brewery = doc.data();
        const views = brewery.views ? brewery.views + 1 : 1;
        console.log(`number of views ${views}`);
        docRef.update({ views: views });
        return res.status(200).send({ views: views});
    }).catch(e => {
        console.log(`Error fetching brewery ${breweryId}`);
        console.log(e);
    });
});

module.exports.expressApp = expressApp;
