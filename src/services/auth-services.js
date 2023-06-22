import axios from 'axios';


const login = async (email, password) => {
    const url = 'http://localhost:5700/api/auth/login';
    try {
      const response = await axios.post(url, { email, password });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data))
    
      return response
      
    } catch (error) {
      throw error;
    }
  };

const register = async ({...newUser}) => {
  const url = 'http://localhost:5700/api/auth/register';
   try{
      const response = await axios.post(url, {...newUser});
      return response
      
   }catch(error){
      throw error
   }
}
  
  
  export {login,
          register
        };