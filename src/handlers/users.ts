import { Request, Response } from "express-serve-static-core";
import { createUserDto } from "../dtos/CreateUser.dto";
import { createUserQueryParams } from "../types/query-params";

export function getUsers(request: Request, response: Response) {
    request.customField
    response.send([]);
}

export function getUsersById(request: Request, response: Response) {
    response.send({});
}

export function createUser(request: Request<{
    id: string;
},
 {}, createUserDto, createUserQueryParams>, response: Response ) 
 {
   return response.status(201).send({
    id: 1,
    username: "sam",
    email: "sam@samthedev.com"
   })
    
}