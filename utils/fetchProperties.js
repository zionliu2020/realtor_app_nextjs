import axios from 'axios'

export async function fetchProperties(query) {
  const options = {
    method: 'POST',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
    },
    data: query,
  }

  try {
    const response = await axios.request(options)
    // console.log(response.data.data.home_search.results)
    // console.log(response.data.data.home_search.results)
    return response.data.data.home_search.results
  } catch (error) {
    console.error(error)
  }
}
