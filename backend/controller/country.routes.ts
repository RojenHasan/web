/**
* @swagger
*   components:
*    schemas:
*      Country:
*        type: object
*        properties:
*          id: 
*            type: number
*            format: int64
*          name: 
*            type: string
*            description: Country name
*      CountryInput:
*        type: object
*        properties:
*          id: 
*            type: number
*            format: int64
*            required: true
*          name: 
*            type: string
*            required: true
*            description: New country name(must be uniqe)
*/

import countryService from "../service/country.service";
import express, {Request, Response} from "express"

const countryRouter = express.Router();

/**
* @swagger
* /countries:
*   get:
*     summary: Get list of countries.
*     responses:
*       200:
*         description: List of all countries
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Country'
*       404:
*         description: Error
*
*/

countryRouter.get("/",(req:Request, res:Response) =>{

    try{
        const countries =  countryService.getAllcountries();
        res.status(200).json(countries)
    }catch(error){
        res.status(500).json({status:'error', errorMessage: error.message})
    }
}) 
export {countryRouter}