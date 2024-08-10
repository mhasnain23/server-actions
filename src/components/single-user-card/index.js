"use client";
import { deleteUserAction } from '@/actions';
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { useContext } from 'react';
import { UserContext } from '@/context';

const SingleUserCard = ({ user }) => {

    const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } = useContext(UserContext)

    async function handleDelete(getCurrentUserID) {
        const result = await deleteUserAction(getCurrentUserID, "/user-management")
        console.log(result);

    }

    function handleEdit(getCurrentUser) {
        setOpenPopup(true)
        setAddNewUserFormData({
            firstName: getCurrentUser.firstName,
            lastName: getCurrentUser.lastName,
            email: getCurrentUser.email,
            address: getCurrentUser.address,
        })
        setCurrentEditedID(getCurrentUser?._id)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{user?.address}</p>
                <CardFooter className="flex justify-between">
                    <Button onClick={() => handleEdit(user)}>Edit</Button>
                    <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
                </CardFooter>
            </CardContent>
        </Card>

    )
}

export default SingleUserCard