import React, { useRef, useState } from "react";

function TodoList () {
	
	const [tareas,setTareas] = useState (["Hacer las compras"]);
	const nuevaTareaRef = useRef (null);

	const agregarTarea = (e)=> { 
		if (e.key === "Enter"){
			const nuevaTarea = nuevaTareaRef.current.value.trim();
			if (nuevaTarea !== ""){
				setTareas([...tareas, nuevaTarea]);
				nuevaTareaRef.current.value = "";
			}
		}
	}
	const borrarTarea = (index) => {
		const actualizarTareas = [...tareas];
		actualizarTareas.splice(index, 1);
		setTareas(actualizarTareas);
	}
		return (
			<div className="container">
				<h1 className="text-center">Mi Lista de Tareas</h1>
				<input type="text" ref={nuevaTareaRef} placeholder="Introducir nueva tarea" onKeyDown={agregarTarea}/>
				{tareas.length === 0 ? (
                <p>No hay tareas, añadir tareas</p>
            ) : (
				<ul>
					{tareas.map((tarea,index)=>(
						<div className="text-center" key={index}>
							<li>{tarea}<button onClick={()=>borrarTarea(index)}><i class="fa-solid fa-trash-can"></i></button></li>
						</div>
					))}
				</ul>
			)}
				<div>1 tasks</div>
			</div>
	);
};

export default TodoList;
