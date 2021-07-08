import { Router, Request, Response} from "express";
import { getValue,addValue,deleteValue,replaceValue } from '../controller/controller';
import Joi from "joi";
const addressRouter = Router();
//get request
addressRouter.get('/', (req: Request, res: Response) => {
  try {
    const schema = Joi.object({
      id: Joi.string().required(),
    })
    const { value, error } = schema.validate(req.query)

    if (error) {
      throw {
        status: 422,
        message: 'Validation error'
      }
    }
    else {
      getValue(value).then((data) => {
        res.status(200).json({
          message: 'Value get',
          data:data
        })
      })
    }
  }
  catch (error) {
    res.status(error.message || 500).json({
      message:error.message || 'Error in server'
    })
  }
})
//post request
addressRouter.post('/add', (req: Request, res: Response)=> {
  try {
    const schema = Joi.object(
      {
        name: Joi.string().required(),
        address: Joi.string().required(),
        phoneNumber:Joi.number().required()
      })
    
    const { value, error } = schema.validate(req.body);
    if (error) {
      throw {
        status: 422,
        message: error.message
      }
    }
    else {
      addValue(value).then((id:string) => {
        res.status(201).json({
          message: 'Value Added',
        id:id
        })
      })
    }
  } catch(err) {
    res.status(err.status || 500).json({
      message:err.message ||'Error in Server'
    })
  }
})
//delete request
addressRouter.delete('/delete', (req: Request, res: Response) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      address: Joi.string().required()
    })
    const { value, error } = schema.validate(req.body);
    if (error) {
      throw {
        status: 422,
        message: 'Validation error'
      }
    }
    else {
      deleteValue(value).then(() => {
        res.status(201).json({
          message: 'Value deleted'
        })
      })
    }
  } catch (err) {
    res.status(err.status || 500).json({
      message:'Error in server'
    })
  }
})


//put request
addressRouter.put('/put', (req: Request, res: Response) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      address: Joi.string().required(),
      phoneNumber: Joi.number().required(),
      id:Joi.string().required()
    })
    const { value, error } = schema.validate(req.body);
    if (error) {
      throw {
        status: 422,
        message: 'Validation error'
      }
    }
    else {
      replaceValue(value).then(() => {
        res.status(201).json({
          message: 'Value replaced'
        })
      })
    }
  } catch (err) {
    res.status(err.status || 500).json({
      message:'Error in server'
    })
  }
})


export default addressRouter;
