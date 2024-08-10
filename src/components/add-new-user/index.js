"use client";

import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AddNewUserFromControl,
  addNewUserFormInitialState
} from '@/utils';
import { addNewUserAction, editUserAction } from '@/actions';
import { useContext, useState } from 'react'
import { UserContext } from '@/context';

const AddNewUser = () => {

  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedID,
    setCurrentEditedID
  } = useContext(UserContext);


  function handleSaveButtonValid() {
    // Check if all fields are filled in by verifying that the trimmed version 
    //of each field is not an empty string.
    return Object.keys(addNewUserFormData)
      .every(key => addNewUserFormData[key].trim() !== '')

  }

  async function handleAddNewUserAction() {
    const result = currentEditedID !== null ?
      await editUserAction(
        currentEditedID,
        addNewUserFormData,
        "/user-management"
      )
      : await addNewUserAction(addNewUserFormData, "/user-management",);
    console.log(result);
    setOpenPopup(false)
    setAddNewUserFormData(addNewUserFormInitialState)
    setCurrentEditedID(null);
  }

  return (

    <div>
      <Button className="text-white cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { setOpenPopup(true) }}>
        Add New User
      </Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false)
          setAddNewUserFormData(addNewUserFormInitialState)
          setCurrentEditedID(null)
        }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{currentEditedID !== null ? "Edit User" : "Add New User"}</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {
              AddNewUserFromControl.map((controlItem) => (
                <div className="mb-5" key={controlItem.name}>
                  <Label
                    htmlFor={controlItem.name}
                    className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(event) => setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: event.target.value,
                    })}
                    type={controlItem.type}
                    className="col-span-3"
                  />
                </div>
              ))
            }
            <DialogFooter>
              <button
                disabled={!handleSaveButtonValid()}
                type="submit"
                className="text-white cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
            </DialogFooter>
          </form>

        </DialogContent>
      </Dialog>
    </div >
  )
}

export default AddNewUser;