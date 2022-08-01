import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Homepage/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const data = {
      id: props.myNews.id, title, description, category
    }

    Inertia.post('/news/update', data)
    setTitle('')
    setDescription('')
    setCategory('')
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Head title={props.title} />
      <Navbar user={props.auth.user} />

      <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
        <div className='p-4 text-2xl'>Edit Berita</div>
        <div className="card-body">
          <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full bg-white"
            onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
          <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full bg-white"
            onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
          <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full bg-white"
            onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
          <button type="submit" className='btn btn-primary m-2' onClick={() => handleSubmit()}>Update</button>
        </div>
      </div>

    </div>
  )
}