import React, { useEffect, useState } from 'react';
import { Ul } from './BurguerStyles';
import { useRouter } from 'next/router';


const RightNav = ({ open, setOpen  }) => {
  
  const { push, pathname } = useRouter();

  const [home, setHome] = useState(false)


 useEffect(() => {
    if(pathname === '/cursos') {
      setHome(true)
    }

 }, [pathname])

  return (
    <Ul open={open}>
       {home && (
         <li  onClick={() => setOpen(!open) | push('/')} >Pagina inicial</li>
      )}
      <li  onClick={() => setOpen(!open) | push('./cursos')} >Graduação</li>
      <li  onClick={() => setOpen(!open)} >Pós-Graduação</li>
      <li  onClick={() => setOpen(!open)} >Portal do Aluno</li>
      <li  onClick={() => setOpen(!open)} >Fale Conosco</li>
     
    </Ul>
  )
}

export default RightNav;