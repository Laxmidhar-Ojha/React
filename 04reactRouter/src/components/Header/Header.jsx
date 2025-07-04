import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
    <div className='w-full flex h-18 bg-amber-200'>
        <div className='w-1/4 flex justify-center my-auto'>
            <Link to="" className='text-2xl text-gray-500'>Hello 🙂‍↔️</Link>
        </div>

        <div className='w-2/4 flex justify-around my-auto'>
            <NavLink to="" className={({isActive})=>`text-2xl ${isActive?"text-orange-500":"text-gray-500"}`}>Home</NavLink>
            <NavLink to="about" className={({isActive})=>`text-2xl ${isActive?"text-orange-500":"text-gray-500"}`}>About</NavLink>
            <NavLink to="contact" className={({isActive})=>`text-2xl ${isActive?"text-orange-500":"text-gray-500"}`}>Contact</NavLink>
            <NavLink to="gitHub" className={({isActive})=>`text-2xl ${isActive?"text-orange-500":"text-gray-500"}`}>GitHub</NavLink>


            

        </div>

        <div className='w-1/4 flex justify-center my-auto'>
            <p className='text-2xl text-gray-500'>Login/Signup</p>
        </div>
    </div>
  )
}

export default Header