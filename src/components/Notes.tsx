import { Edit2, Plus, RefreshCcw, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Notes {
  id: number;
  title: string;
  content: string;
}

function Notes() {
  const [notes, setNotes] = useState<Notes[]>(()=>{
    let saveNotes = localStorage.getItem("Notes")
    return saveNotes ? JSON.parse(saveNotes) : []
  });
  
  useEffect(() => {
  localStorage.setItem("Notes", JSON.stringify(notes))
  }, [notes])

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [editNote, setEditNote] = useState<number | null>(null)
  const titleRef = useRef<HTMLInputElement>(null)



  useEffect(()=>{
    if(editNote !== null){
      titleRef.current?.focus()
    }
  }, [editNote])

  function addNote() {
    if (!title.trim()) {
      return alert("Please! Add the title");
    }
    if (!content.trim()) {
      return alert("Please! Add the content");
    }
    if(editNote){
      
      setNotes(notes.map((note)=>note.id === editNote ? {...note, title, content} : note))
      setEditNote(null)
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }
    setTitle("");
    setContent("");
    setTimeout(() => {
      titleRef.current?.focus() 
    }, 0);
  }

  function delFunc(id:number){
    setNotes(notes.filter((task)=>task.id !== id))
  }
  function editFunc(task:Notes){
    setEditNote(task.id)
    setTitle(task.title)
    setContent(task.content) 
  }

  return (
    <div className="w-full max-w-6xl p-10">
      <h1 className="text-2xl font-bold">Notes App</h1>
      <div className="lg:flex gap-5 ">
        <div className="flex-1 h-fit shadow-md bg-white mt-4 p-4 border border-gray-300 space-y-4 rounded-lg">
          <h1 className="text-lg font-semibold">Create New Notes</h1>
          <input
            type="text"
            value={title}
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full outline rounded-sm outline-gray-400 focus:outline-0 focus:ring-2 focus:ring-blue-500  px-4 py-1"
            placeholder="Note title..."
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full outline rounded-sm outline-gray-400 focus:outline-0 focus:ring-2 focus:ring-blue-500  px-4 py-1"
            placeholder="Note content..."
          />
          {editNote && (
            <button
            onClick={addNote}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 rounded-md text-white px-4 py-2"
          >
            <RefreshCcw size={18} />
            Update
          </button>
          )}
          {!editNote && (
            <button
            onClick={addNote}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 rounded-md text-white px-4 py-2"
          >
            <Plus size={18} />
            Add
          </button>
          )}
        </div>
        {!notes.length && (
          <div className="flex-1 max-h-40 bg-white flex items-center justify-center shadow-md mt-4 p-4 border border-gray-300 space-y-4 rounded-sm">
            <h1 className="text-sm">No notes yet. Create your first note!</h1>
          </div>
        )}
        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-3 mt-4">
            {notes.map((task) => (
              <div
                key={task.id}
                className=" flex flex-col justify-between bg-white shadow-md  p-4 border border-gray-300 space-y-4 rounded-sm"
              >
                <div>
                  <h1 className="text-lg font-bold">{task.title}</h1>
                <h1 className="text-md">{task.content}</h1>
                </div>
                <div className="flex gap-3">
                  <button
                  onClick={()=>editFunc(task)}
                  className="flex items-center justify-center gap-2 bg-blue-100/70 rounded-md text-blue-700 px-3 py-1 hover:bg-blue-200/70">
                    <Edit2 size={16} />
                    Edit
                  </button>
                  <button 
                  onClick={()=>delFunc(task.id)}
                  className="flex items-center justify-center gap-2 bg-red-100/70 rounded-md text-red-700 px-3 py-1 hover:bg-red-200/70">
                    <Trash size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
