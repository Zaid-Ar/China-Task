


interface UserType {
    email: string;
    fullName: string;
    changePassword: string;
    phoneNumber:string;
    dateOfBirth:string;
    nationality:string;
    gender:string;
    
}

export const updateMyUserById = async (userFormData: FormData) => {
    const response = await fetch(
      `${Link}/api/my-users/${userFormData.get("userId")}`,
      {
        method: "PUT",
        body: userFormData,
        credentials: "include",
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to update User");
    }
  
    return response.json();
  };

  export const fetchMyUserById = async (userId: string): Promise<UserType> => {
    const response = await fetch(`${link}/api/my-users/${userId}`, {
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Error fetching Users");
    }
  
    return response.json();
  };