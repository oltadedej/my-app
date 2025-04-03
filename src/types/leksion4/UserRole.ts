export enum UserRole {
    Admin,
    Editor,
    Viewer
  }
  
  export let userRole: UserRole = UserRole.Admin;
  console.log(userRole); // Output: 0 (Enums are assigned numeric values by default)
  