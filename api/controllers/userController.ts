import { Request, Response } from "express";

export let Users = [
    { id: 1, name: "John Kennedy", online: false },
];

export function getUser(req: Request, res: Response) {

    const id: number = parseInt(req.params.id)

    const user = Users.find(user => user.id === id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }

}

export function getAllUsers(req: Request, res: Response) {
        
    res.send(Users)

}

export function addUser(req: Request, res: Response) {

    let [data] = req.body

    Users.push(data)
    res.status(200).send('OK')

}

export function updateUser(req: Request, res: Response) {

    const id: number = parseInt(req.params.id)
    const [data] = req.body

    const user: any = Users.find(user => user.id === id)
    for (const property in data) {
        user[property] = data[property];
    } 
    
    res.status(200).send('OK')

}

export function deleteUser(req: Request, res: Response) {

    const id: number = parseInt(req.params.id)

    const updatedUsers = Users.filter(user => user.id !== id);
    Users = updatedUsers;
        
    res.status(200).send('OK')

}