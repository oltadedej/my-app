enum UserRole {
    Admin,
    Editor,
    Viewer
  }
  
  let user: UserRole = UserRole.Admin;
  console.log(user); // Output: 0 (Enums are assigned numeric values by default)
  