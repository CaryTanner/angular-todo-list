import { Router } from "express";

const router = Router();

import Todo from "../../models/Todo";

// @route GET /api/todos
// get all todos
// access Public

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) throw Error("Could not retrieve todos");

    res.status(200).json({
      status: "success",
      todos,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// @route POST /api/todos
// make new item
// access public

router.post("/", async (req, res) => {
  try {
    let newTodo = new Todo({
      content: req.body.content,
    });
    let registeredTodo = await newTodo.save();
    if (!registeredTodo) throw Error("Could not save todo");

    res.status(200).json({
      status: "success",
      registeredTodo,
    });
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

// @route POST /api/todos/update/:id
// update todo content
// access public

router.post("/update/:id", async (req, res) => {
 try{ 
    let newContent = req.body.content;
    let id = req.params.id;

    let updated = await Todo.findByIdAndUpdate(id, { content: newContent })
    if (!updated) throw Error("Could not update todo");
    
    res.status(200).json({
        status: "success",
        updated,
      });


 } catch (err) {
    res.status(501).json({ error: err.message });
  } 

});

// @route POST /api/todos/update
// mark todo as complete/incomplete
// access public

router.post("/complete/id", async (req, res) => {
    try{ 
       let changedComplete = req.body.complete;
       let id = req.params.id;
   
       let updated = await Todo.findByIdAndUpdate(id, { complete: changedComplete })
       if (!updated) throw Error("Could not update todo");
       
       res.status(200).json({
           status: "success",
           updated,
         });
   
   
    } catch (err) {
       res.status(501).json({ error: err.message });
     } 
   
   });

// @route DELETE /api/todos
// delete a todo
// access Public

router.delete("/:id", async (req, res) => {
  try{
    let itemToDelete = await Todo.findById(req.params.id)
    if (!itemToDelete) throw Error("Could not find todo to delete");

    let deleted = await itemToDelete.remove()
    if (!deleted) throw Error("Could not delete todo");

    res.status(200).json({
        status: "success",
        deleted,
      });

  } catch (err) {
    res.status(501).json({ error: err.message });
  } 
  
});

export default router;
