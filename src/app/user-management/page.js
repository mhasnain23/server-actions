import { fetchUsersAction } from "@/actions"
import AddNewUser from "@/components/add-new-user"
import SingleUserCard from "@/components/single-user-card";


const UserManagement = async () => {

    const getListOfUser = await fetchUsersAction();
    console.log(getListOfUser);


    return (
        <div className='h-screen items-center p-14 max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                <h1 className="text-white font-semibold">User Management</h1>
                <AddNewUser />
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {getListOfUser &&
                    getListOfUser.data &&
                    getListOfUser.data.length > 0 ? (
                    getListOfUser.data.map((userItem) => (
                        <SingleUserCard key={userItem._id} user={userItem} />
                    ))
                ) : (
                    <h3 className="text-white font-bold">No user found! please add new one 😀</h3>
                )
                }
            </div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        </div>
    )
}

export default UserManagement
