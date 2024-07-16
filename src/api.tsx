import axios from 'axios';

export async function createToken(formData: any) {
  try {
    const response = await axios.post(`https://createtoken-c7c67l7asa-uc.a.run.app`, formData);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error calling the function:', error);
    throw error;  // or handle error as needed
  }
}

export async function updateToken(docId: string, diff: any) {
  try {
    const response = await axios.put(`https://updatetoken-c7c67l7asa-uc.a.run.app`, {docId, diff});
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error calling the function:', error);
    throw error;  // or handle error as needed
  }
}
