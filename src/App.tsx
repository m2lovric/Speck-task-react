import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Tech = {
  id: string;
  data: string;
};

function App() {
  const [input, setInput] = useState('');
  const [technologies, setTechnologies] = useState<Tech[]>([]);

  function AddItem(e: FormEvent) {
    e.preventDefault();
    input !== '' &&
      setTechnologies((prevState) => [
        ...prevState,
        { id: uuidv4(), data: input },
      ]);
    setInput('');
  }

  function RemoveAll() {
    setTechnologies([]);
  }

  return (
    <main className='bg-neutral-900 h-screen w-full flex justify-around text-white'>
      <section className='w-1/2 pt-28 font-Inter max-sm:w-full max-sm:pt-20 max-sm:px-6'>
        <h1 className='text-4xl font-bold'>My technologies</h1>
        <section className='w-full flex items-center mt-14 max-sm:flex-col max-sm:items-start'>
          <form onSubmit={(e) => AddItem(e)} className='flex'>
            <input
              type='text'
              placeholder='Enter new technology...'
              className='bg-neutral-800 text-base px-6 py-2 rounded-md border border-rose-500 outline-none'
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              type='submit'
              className='border border-rose-500 py-2 px-6 rounded-md ml-4 text-rose-700 bg-rose-300 hover:text-white hover:bg-rose-500 text-lg font-bold transition duration-300'
            >
              Add
            </button>
          </form>
          <p
            onClick={RemoveAll}
            className='ml-auto underline text-rose-300 font-light cursor-pointer max-sm:ml-0 max-sm:mt-5'
          >
            Remove all items
          </p>
        </section>
        <section className='flex flex-wrap justify-between mt-14 max-sm:flex-col max-sm:justify-start'>
          {technologies.length > 0 &&
            technologies.map((tech) => (
              <article
                key={tech.id}
                className='bg-neutral-800 w-[48%] py-3 text-center mb-7 rounded-lg shadow-lg max-sm:w-full'
              >
                <p className='text-2xl font-bold'>{tech.data}</p>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

export default App;
