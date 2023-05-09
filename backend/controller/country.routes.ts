import countryService from "../service/country.service";
import express, {Request, Response} from "express"

const countryRouter = express.Router();

countryRouter.get("/",(req: Request, res: Response) =>{
    try{
        const countries = countryService.getAllcountries();
        res.status(200).json(countries)
        console.log("test")
    }catch(error) {
        res.status(500).json({status:'error', errorMessage: error.message})
    }
})

export {countryRouter}