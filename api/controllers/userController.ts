import { Request, Response } from "express";

class UserController {

    private Users = [
        { id: 1, name: "John Kennedy", online: false },
    ];
    // private currentId: number = 1;

    getUser(req: Request, res: Response) {

        const id: number = parseInt(req.params.id)
		
        res.send(this.Users.filter(user => {

            if (user.id == id) {
                return true
            }

            return false

        })[0])

    }

    getAllUsers(req: Request, res: Response) {
			
        res.send(this.Users)

    }

    addUser(req: Request, res: Response) {

        let data = req.body[0]

        this.Users.push(data)
		res.status(200).send('OK')

    }

    updateUser(req: Request, res: Response) {

        const data: any[] = req.body[0]

        for (const property in data) {

            this.Users.filter((user: any) => {
                
                const value: any = data[property]

                user[property] = value

            })[0]

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