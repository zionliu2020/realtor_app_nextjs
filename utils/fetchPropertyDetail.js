import axios from 'axios'

export async function fetchPropertyDetail(property_id) {
  const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/detail',
    params: {
      property_id: property_id,
    },
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    console.log('fetch single property')

    return response.data.data.home
  } catch (error) {
    console.error(error)
  }
}
