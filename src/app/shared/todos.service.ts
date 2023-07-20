import { Injectable } from "@angular/core";



export interface Todo {
  id: number
  title: string
  completed: boolean,
  date: any
}

@Injectable({providedIn: "root"})

export class TodoService{



  public todos: Todo[] = [
    {id: 1, 
    title: "JavaScript",
    completed: true,
    date: new Date()
    },

    {id: 2, 
      title: "Angular",
      completed: false,
      date: new Date()
      },

      {id: 3, 
        title: "React",
        completed: true,
        date: new Date()
        },

  ]


  onToggle(id: number) {
    const idx = this.todos.findIndex( t => t.id === id )
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter( el => el.id !== id );
  }

  getUserTask( task: any ) {
    const id = this.todos.length + 1;
    const title = task.value;
    const completed = false;
    const date = new Date();

    task.value = ""
    console.log(title)

    if( title.trim() ) {

      this.todos.push(
        {id: id, 
          title: title,
          completed: completed,
          date: date
          }
      )

    }
  
   
  }
}