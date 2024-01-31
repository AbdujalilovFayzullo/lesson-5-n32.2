import axios from 'axios';
import React, { useEffect, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';


const Students = () => {

  const [student, setStudent] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const fetchProduct = async () => {
      const res = await axios.get('https://65ba5164b4d53c066552974d.mockapi.io/tasks')
      const data = await res.data
      console.log(data);
      setStudent(data)
  }

  useEffect(() => {
      fetchProduct()
  }, [])

  const handleDelete = async (tasksId) => {
    try {
      setIsLoading(true);
      const confirmDelete = window.confirm(
        `O'chirish uchun OK ni bosing`
      );

      if (!confirmDelete) {
        return;
      }

      await axios.delete(`https://<PROJECT_TOKEN.mockapi.io/tasks/1/${tasksId}`);
      setProducts(student.filter((p) => p.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return <div>
        <ul className='students__block'>
          {
            student.map((student) => (
              <li key={student.id} className='students__list'>
                <div>
                {student.id}
                </div>
                <div>
                {student.level}
                </div>
                <div>
                {student.name}
                </div>
                <div>
                {student.username}
                </div>
                <div className='icons'>
                    <EditIcon className='icon' />
                    <DeleteIcon className='iconn' onClick={() => handleDelete(student.id)} />
                </div>
              </li>
            ))
          }
        </ul>


  </div>;
};

export default Students;
