import { Request, Response } from "express";

class UserController {

    private Users = [
        { id: 1, name: "John Kennedy", online: false },
    ];

    getUser(req: Request, res: Response) {

        const id: number = parseInt(req.params.id)
	
        const user = this.Users.find(user => user.id === id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }

    }

    getAllUsers(req: Request, res: Response) {
			
        res.send(this.Users)

    }

    addUser(req: Request, res: Response) {

        let [data] = req.body

        this.Users.push(data)
		res.status(200).send('OK')

    }

    updateUser(req: Request, res: Response) {

        const id: number = parseInt(req.params.id)
        const [data] = req.body
	
        const user: any = this.Users.find(user => user.id === id)
        for (const property in data) {
            user[property] = data[property];
        } 
        
        res.status(200).send('OK')

    }

    deleteUser(req: Request, res: Response) {

        const id: number = parseInt(req.params.id)

        const updatedUsers = this.Users.filter(user => user.id !== id);
        this.Users = updatedUsers;
            
        res.status(200).send('OK')

    }

}

export const userController = new UserController();