interface Todo {
    title: string;
  }
   
  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  };
   
//   todo.title = "Hello"; ERROR

// we can not create object of class , if class is abstract
// and if it method then it must implemented